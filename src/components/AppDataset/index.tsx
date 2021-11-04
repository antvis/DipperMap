import React, { useState } from 'react';
import styles from './index.less';
import { Spin, Tooltip, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddDatasetModal from './AddDatasetModal';
import DatasetList from './DatasetList';

const { Title } = Typography;

const AppDataset: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [addDatasetVisible, setAddDatasetVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.appDataset} style={style}>
      <div className={styles.appDatasetHeader}>
        <Title level={5}>数据源</Title>
        <div>
          <Tooltip overlay={'添加数据源'}>
            {loading ? (
              <Spin spinning />
            ) : (
              <Button
                type="text"
                icon={<PlusOutlined />}
                onClick={() => setAddDatasetVisible(true)}
              />
            )}
          </Tooltip>
        </div>
      </div>
      <DatasetList className={styles.appDatasetContent} />
      <AddDatasetModal
        visible={addDatasetVisible}
        setVisible={setAddDatasetVisible}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default AppDataset;
