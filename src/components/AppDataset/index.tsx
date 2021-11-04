import React, { useState } from 'react';
import styles from './index.less';
import { Tooltip, Typography } from 'antd';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddDatasetModal from './AddDatasetModal';
import DatasetList from './DatasetList';

const { Title } = Typography;

const AppDataset: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [addDatasetVisible, setAddDatasetVisible] = useState(false);

  return (
    <div className={styles.appDataset} style={style}>
      <div className={styles.appDatasetHeader}>
        <Title level={5}>数据源</Title>
        <div>
          <Tooltip overlay={'添加数据源'}>
            <Button
              type="text"
              icon={<PlusOutlined />}
              onClick={() => setAddDatasetVisible(true)}
            />
          </Tooltip>
        </div>
      </div>
      <DatasetList className={styles.appDatasetContent} />
      <AddDatasetModal
        visible={addDatasetVisible}
        setVisible={setAddDatasetVisible}
      />
    </div>
  );
};

export default AppDataset;
