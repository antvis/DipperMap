import React, { useContext } from 'react';
import { Button, Tooltip } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styles from './index.less';
import { DatasetModelContext } from '../../context/DatasetContext';

interface IProps extends ButtonProps {
  text: string;
}

const AddBtn: React.FC<IProps> = ({ text, disabled, ...props }) => {
  const { selectDataset } = useContext(DatasetModelContext);

  const content = (
    <Button
      icon={<i className="dpiconfont dpicon-tianjia" />}
      className={styles.addFilterBtn}
      type="primary"
      disabled={disabled || !selectDataset}
      {...props}
    >
      {text}
    </Button>
  );

  return !selectDataset ? (
    <Tooltip overlay="请先选中数据源">{content}</Tooltip>
  ) : (
    content
  );
};

export default AddBtn;
