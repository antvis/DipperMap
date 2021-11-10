import React, { useContext } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styles from './index.less';
import { DatasetModelContext } from '../../context/DatasetContext';
import { ConfigModelContext } from '../../context/ConfigContext';

interface IProps extends ButtonProps {
  text: string;
}

const AddBtn: React.FC<IProps> = ({ text, disabled, ...props }) => {
  const { interactiveList, setInteractiveList } =
    useContext(ConfigModelContext);
  const { selectDataset } = useContext(DatasetModelContext);

  return (
    <Button
      icon={<i className="dpiconfont dpicon-tianjia" />}
      className={styles.addFilterBtn}
      type="ghost"
      disabled={disabled || !selectDataset}
      {...props}
    >
      {text}
    </Button>
  );
};

export default AddBtn;
