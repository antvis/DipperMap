import React, { useContext, useEffect, useState } from 'react';
import { message, Modal, Select } from 'antd';
import type { ModalProps } from 'antd';
import { DatasetModelContext } from '../context/DatasetContext';

interface IProps extends ModalProps {
  value?: string;
  setVisible: (newVisible: boolean) => void;
  onChange: (newValue: string) => void;
}

const DatasetModal = ({ value, visible, setVisible, onChange, ...props }: IProps) => {
  const [selectDatasetId, setSelectDatasetId] = useState<string | undefined>(undefined);

  const { datasetList } = useContext(DatasetModelContext);

  useEffect(() => {
    setSelectDatasetId(value);
  }, [value, visible]);

  const onOk = () => {
    if (!selectDatasetId) {
      message.warn('未选中数据源');
      return;
    }
    onChange(selectDatasetId);
    setVisible(false);
  };

  return (
    <Modal
      title="选择数据源"
      visible={visible}
      onOk={onOk}
      onCancel={() => setVisible(false)}
      {...props}
    >
      <div>选中数据源：</div>
      <Select
        style={{ width: '100%', marginTop: '6px' }}
        placeholder="请选择数据源"
        value={selectDatasetId}
        onChange={setSelectDatasetId}
        options={datasetList.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })}
      />
    </Modal>
  );
};

export default DatasetModal;
