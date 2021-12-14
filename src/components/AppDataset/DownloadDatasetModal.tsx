import React, { useEffect, useState } from 'react';
import { Modal, ModalProps, Form, Radio } from 'antd';
import { IDataset, IDatasetDownloadType } from '../../typings';
import useDataset from '../../hooks/useDataset';

interface IProps extends ModalProps {
  dataset?: IDataset | null;
  setVisible: (value: boolean) => void;
}

const DownloadDatasetModal: React.FC<IProps> = ({
  title = '导出数据源',
  visible,
  setVisible,
  dataset,
  ...props
}) => {
  const { downloadDataset } = useDataset();

  const [downloadType, setDownloadType] =
    useState<IDatasetDownloadType>('json');

  useEffect(() => {
    setDownloadType('json');
  }, [visible]);

  return (
    <Modal
      title={title}
      visible={visible}
      {...props}
      onOk={() => {
        if (!dataset) {
          return;
        }
        downloadDataset(dataset, downloadType);
        setVisible(false);
      }}
      onCancel={() => setVisible(false)}
    >
      <Form.Item label="导出类型">
        <Radio.Group
          onChange={(e) =>
            setDownloadType(e.target.value as IDatasetDownloadType)
          }
          value={downloadType}
        >
          <Radio value="json">导出JSON文件</Radio>
          {!dataset?.geoJson?.enable && <Radio value="csv">导出CSV文件</Radio>}
        </Radio.Group>
      </Form.Item>
    </Modal>
  );
};

export default DownloadDatasetModal;
