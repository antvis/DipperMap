import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Modal, Input, Form, Radio, Upload, Row, Col, Button } from 'antd';
import { message } from 'antd';
import useDataset from '../../hooks/dataset';
import request from 'umi-request';
import styles from './index.less';
import { dataTransform } from './dataTrans';
import { IDemo } from '../../typings';
import { DatasetModelContext } from '../../context/DatasetContext';
import { getRandomId } from '../../utils';
import { PropsModelContext } from '../../context/PropContext';
import useLayer from '../../hooks/layer';
import { LayerModelContext } from '../../context/LayerContext';

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

interface IFormData {
  type: 'url' | 'upload';
  url: string;
  name: string;
  data?: any[] | string;
  id?: string;
}

const DEFAULT_FORM: IFormData = {
  type: 'url',
  url: '',
  name: '',
  data: [],
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const AddDatasetModal = ({
  visible,
  setVisible,
  loading,
  setLoading,
}: IProps) => {
  const { addDataset, getNewDatasetName } = useDataset();
  const [form, setForm] = useState<IFormData>(DEFAULT_FORM);
  const [demoVisible, setDemoVisible] = useState(false);
  const { setLayerList } = useContext(LayerModelContext);
  const { demos = [] } = useContext(PropsModelContext);
  const { datasetList, setDatasetList } = useContext(DatasetModelContext);
  const { addLayer } = useLayer();

  const typeOptions = useMemo(
    () => [
      { label: '文件链接', value: 'url' },
      { label: '上传文件', value: 'upload' },
    ],
    [],
  );

  // eslint-disable-next-line consistent-return
  const onSubmit = useCallback(
    async (formData: IFormData) => {
      const { type, url, data, name, id } = formData;
      if (type === 'url' && !url) {
        return message.error('请输入文件链接');
      }
      if (type === 'upload' && !data?.length) {
        return message.error('请选择上传文件');
      }
      try {
        const result = dataTransform({
          data: type === 'url' ? await request(url) : data,
        });
        const newDataset = addDataset({
          ...result,
          name,
          url,
          id: id || getRandomId('dataset'),
        });
        message.success('数据源新建成功');
        setDatasetList([...datasetList, newDataset]);

        if (newDataset.geoJson?.enable) {
          newDataset.geoJson?.layerTypes.forEach((type) => {
            addLayer(newDataset, type);
          });
        }

        setVisible(false);
      } catch (e) {
        // message.error('数据解析有误', e);
        console.error(e);
      }
      setLoading(false);
    },
    [addDataset, addLayer, datasetList, setDatasetList, setLoading, setVisible],
  );

  useEffect(() => {
    setForm({
      ...DEFAULT_FORM,
      name: getNewDatasetName(),
    });
  }, [getNewDatasetName, setForm]);

  const openDemos = useCallback(() => {
    setDemoVisible(true);
  }, []);

  function clickDemo(demo: IDemo) {
    Promise.all(
      demo.dataSrc.map(async (data) => {
        const result = dataTransform({
          data: await request(data.src),
        });
        return addDataset({
          name: data.name,
          url: data.src,
          data: result.data,
          fields: result.fields,
          geoJson: result.geoJson,
          id: data.datasetId || getRandomId('dataset'),
        });
      }),
    ).then((res) => {
      setDatasetList(res);
      setLayerList(demo.layerList);
      setDemoVisible(false);
      setVisible(false);
      message.success('读取示例成功');
    });
  }

  useEffect(() => {
    if (!visible) {
      setDemoVisible(false);
    }
  }, [visible]);

  const formContent = (
    <>
      <div className={styles['example-title']} onClick={openDemos}>
        <span>没有数据？尝试加载示例数据</span>
        <i className="dpiconfont dpicon-right" />
      </div>
      <Form colon={false} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
        <Form.Item label="数据源名称" required>
          <Input
            value={form.name}
            placeholder="请输入数据源名称"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />
        </Form.Item>

        <Form.Item label="上传类型">
          <Radio.Group
            value={form.type}
            onChange={(e) =>
              setForm({
                ...form,
                type: e.target.value,
              })
            }
            options={typeOptions}
          />
        </Form.Item>
        {form.type === 'url' ? (
          <>
            <Form.Item label="文件链接" required>
              <Input
                value={form.url}
                onChange={(e) =>
                  setForm({
                    ...form,
                    url: e.target.value,
                  })
                }
                placeholder="请输入文件链接"
              />
            </Form.Item>
          </>
        ) : (
          <Form.Item
            valuePropName="fileList"
            getValueFromEvent={normFile}
            label="上传文件"
            required
          >
            <Upload.Dragger
              name="data"
              accept=".csv,.json"
              maxCount={1}
              customRequest={({ file, onSuccess }) => {
                const fileReader = new FileReader();
                fileReader.readAsText(file as File);
                fileReader.onload = (event) => {
                  setForm({
                    ...form,
                    // @ts-ignore
                    data: event.target?.result ?? '',
                  });
                  // @ts-ignore
                  onSuccess();
                };
              }}
            >
              <i className="dpiconfont dpicon-shangchuanwenjian" />
              <p>可将上传文件拖拽至这里</p>
            </Upload.Dragger>
          </Form.Item>
        )}
      </Form>
    </>
  );

  const demoContent = (
    <>
      <Row gutter={[42, 24]} style={{ height: 374, overflow: 'scroll' }}>
        {demos.map((demo, index) => (
          <Col span={8} key={index}>
            <div
              className={styles['demo-item']}
              onClick={() => clickDemo(demo)}
            >
              <img style={{ width: '100%', height: 106 }} src={demo.imgSrc} />
              <div className={styles['demo-name']}>{demo.demoName}</div>
              <div className={styles['demo-lines']}>{demo.demoDataLines}</div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );

  return (
    <Modal
      title="添加数据源"
      width={680}
      className={styles.addDatasetModal}
      destroyOnClose
      visible={visible}
      footer={
        demoVisible ? (
          <Button onClick={() => setDemoVisible(false)}>返回</Button>
        ) : undefined
      }
      confirmLoading={loading}
      onOk={() => onSubmit(form)}
      onCancel={() => setVisible(false)}
    >
      {!demoVisible ? formContent : demoContent}
    </Modal>
  );
};

export default AddDatasetModal;
