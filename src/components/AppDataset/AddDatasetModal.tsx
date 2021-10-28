import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Input, Form, Radio, Upload } from 'antd';
import { message } from 'antd';
import useDataset from '../../hooks/dataset';
import request from 'umi-request';
import { InboxOutlined } from '@ant-design/icons';

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

interface IFormData {
  type: 'url' | 'upload';
  url: string;
  name: string;
  data: any[] | string;
}

const DEFAULT_FORM: IFormData = {
  type: 'upload',
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

const AddDatasetModal = ({ visible, setVisible }: IProps) => {
  const { addDataset, transformData, getNewDatasetName } = useDataset();
  const [form, setForm] = useState<IFormData>(DEFAULT_FORM);
  const [loading, setLoading] = useState(false);

  const typeOptions = useMemo(
    () => [
      { label: '文件链接', value: 'url' },
      { label: '上传文件', value: 'upload' },
    ],
    [],
  );

  // eslint-disable-next-line consistent-return
  const onSubmit = useCallback(async () => {
    const { type, url, data, name } = form;
    if (type === 'url' && !url) {
      return message.error('请输入文件链接');
    }
    if (type === 'upload' && !data?.length) {
      return message.error('请选择上传文件');
    }
    setLoading(true);
    try {
      const finalData = transformData(type === 'url' ? await request(url) : data);
      if (!finalData.length) {
        throw new Error();
      }
      await addDataset({
        name,
        url,
        data: finalData,
      });
      message.success('数据源新建成功');
      setVisible(false);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [addDataset, form, setVisible, transformData]);

  useEffect(() => {
    setForm({
      ...DEFAULT_FORM,
      name: getNewDatasetName(),
    });
  }, [getNewDatasetName, setForm]);

  return (
    <Modal
      title="添加数据源"
      destroyOnClose
      getContainer={false}
      visible={visible}
      confirmLoading={loading}
      onOk={onSubmit}
      onCancel={() => setVisible(false)}
    >
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
          <Form.Item required label="文件链接">
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
        ) : (
          <Form.Item
            required
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
  );
};

export default AddDatasetModal;
