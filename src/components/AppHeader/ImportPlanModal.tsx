import React, { useEffect, useState } from 'react';
import { Modal, ModalProps, Form, Upload, message } from 'antd';
import { IPlan } from '../../typings';
import styles from './index.less';

interface IProps extends ModalProps {
  setVisible: (value: boolean) => void;
  onSubmit: (plan: IPlan) => void;
}

const ImportPlanModal: React.FC<IProps> = ({
  visible,
  onSubmit,
  setVisible,
  ...props
}) => {
  const [plan, setPlan] = useState<IPlan | null>(null);

  useEffect(() => {
    setPlan(null);
  }, [visible]);

  return (
    <Modal
      title="导入方案"
      visible={visible}
      destroyOnClose
      onOk={() => {
        if (!plan) {
          message.warn('请选择要导入的方案');
          return;
        }
        onSubmit(plan);
        setVisible(false);
      }}
      onCancel={() => {
        setVisible(false);
      }}
      className={styles.importPlanModal}
      {...props}
    >
      <Form.Item
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label="导入方案："
      >
        <Upload.Dragger
          name="data"
          accept=".json"
          maxCount={1}
          customRequest={({ file, onSuccess }) => {
            const fileReader = new FileReader();
            fileReader.readAsText(file as File);
            fileReader.onload = (event) => {
              const content = event.target?.result || '';
              if (typeof content === 'string' && content) {
                try {
                  setPlan(JSON.parse(content));
                  // @ts-ignore
                  onSuccess();
                } catch (e) {
                  message.error('方案解析失败');
                }
              }
            };
          }}
        >
          <i className="dpiconfont dpicon-shangchuanwenjian" />
          <p>可将上传文件拖拽至这里</p>
        </Upload.Dragger>
      </Form.Item>
    </Modal>
  );
};

export default ImportPlanModal;
