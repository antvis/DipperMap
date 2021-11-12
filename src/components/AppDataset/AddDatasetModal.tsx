import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Modal, Input, Form, Radio, Upload, Button, Row, Col } from 'antd';
import { message } from 'antd';
import useDataset from '../../hooks/dataset';
import request from 'umi-request';
import { InboxOutlined } from '@ant-design/icons';
import styles from './index.less';
import { dataTransform } from './dataTrans';
import { Demo } from '../../typings';
import { ConfigModelContext } from '../../context/ConfigContext';
import { DatasetModelContext } from '../../context/DatasetContext';
import { getRandomId } from '../../utils';
import { PropsModelContext } from '../../context/PropContext';

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
  const { setLayerList } = useContext(ConfigModelContext);
  const { setSelectDatasetId } = useContext(DatasetModelContext);
  const { demos = [] } = useContext(PropsModelContext);

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
      setLoading(true);
      try {
        const result = dataTransform({
          data: type === 'url' ? await request(url) : data,
        }); // non-blocking UI
        // const worker = new DataTrans();
        // worker.postMessage(type === 'url' ? await request(url) : data);
        // worker.onmessage = async ({
        //   data,
        // }: {
        //   data: {
        //     fields: any[];
        //     data: any[];
        //   };
        // }) => {
        // };
        await addDataset({
          name,
          url,
          data: result.data,
          fields: result.fields,
          id: id || getRandomId('dataset'),
        });
        message.success('数据源新建成功');
        setLoading(false);
        setVisible(false);
      } catch (e) {
        console.error(e);
      }
    },
    [addDataset, form, setVisible],
  );

  useEffect(() => {
    setForm({
      ...DEFAULT_FORM,
      name: getNewDatasetName(),
    });
  }, [getNewDatasetName, setForm]);

  const onTryExample = useCallback(
    (exampleType: number) => {
      const exampleMap = {
        '1': 'https://gw.alipayobjects.com/os/bmw-prod/ba077ba7-2a28-435f-b163-4def4a3c874d.json',
        '2': 'https://gw.alipayobjects.com/os/bmw-prod/d382b49f-c14b-4662-a281-63890798e969.json',
        '3': 'https://gw.alipayobjects.com/os/bmw-prod/bc47a55e-6d08-40ad-bc22-1fa62471aa39.json',
      };
      const newForm: IFormData = {
        ...form,
        type: 'url',
        // @ts-ignore
        url: exampleMap[String(exampleType)] || '',
      };
      setForm(newForm);
      onSubmit(newForm);
    },
    [onSubmit],
  );

  const openDemos = useCallback(() => {
    setDemoVisible(true);
  }, []);

  function clickDemo(demo: Demo) {
    onSubmit({
      type: 'url',
      url: demo.dataSrc,
      name: demo.demoName,
      id: demo.datasetId,
    });
    setSelectDatasetId(demo.datasetId);
    setLayerList(demo.layerList);
    setDemoVisible(false);
    setVisible(false);
  }

  return (
    <>
      <Modal
        title="添加数据源"
        className={styles.addDatasetModal}
        destroyOnClose
        visible={visible}
        confirmLoading={loading}
        onOk={() => onSubmit(form)}
        onCancel={() => setVisible(false)}
      >
        <div className={styles.exampleBtnGroup}>
          {demos && demos.length ? (
            <Button onClick={openDemos}>示例</Button>
          ) : null}
          <span>示例数据：</span>
          <Radio.Group size="small">
            <Radio.Button value="1" onClick={() => onTryExample(1)}>
              Point/Line/Hex/Heat
            </Radio.Button>
            <Radio.Button value="1" onClick={() => onTryExample(2)}>
              Trip
            </Radio.Button>
            <Radio.Button value="1" onClick={() => onTryExample(3)}>
              Polygon
            </Radio.Button>
          </Radio.Group>
        </div>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item label="数据源名称">
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
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>

          {form.type === 'url' ? (
            <>
              <Form.Item label="文件链接">
                <Input
                  value={form.url}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      url: e.target.value,
                    })
                  }
                  placeholder="输入文件链接"
                />
              </Form.Item>
            </>
          ) : (
            <Form.Item
              valuePropName="fileList"
              getValueFromEvent={normFile}
              label="上传文件"
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
                <p>
                  <InboxOutlined style={{ fontSize: 40, marginBottom: 8 }} />
                </p>
                <p>可将上传文件拖拽至这里</p>
              </Upload.Dragger>
            </Form.Item>
          )}
        </Form>
      </Modal>
      <Modal
        visible={demoVisible}
        onCancel={() => {
          setVisible(false);
          setDemoVisible(false);
        }}
        footer={null}
        width="80vw"
      >
        <Row gutter={[16, 16]}>
          {demos.map((demo, index) => (
            <Col span={8}>
              <img
                style={{ width: '100%', height: '100%' }}
                src={demo.imgSrc}
                onClick={() => clickDemo(demo)}
              />
            </Col>
          ))}
        </Row>
      </Modal>
    </>
  );
};

export default AddDatasetModal;
