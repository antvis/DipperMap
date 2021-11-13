import React, { useState } from 'react';
import styles from './index.less';
import { Spin, Tooltip, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddDatasetModal from './AddDatasetModal';
import DatasetList from './DatasetList';
import { Demo } from '../../typings';

const { Title } = Typography;

const AppDataset: React.FC<{ style?: React.CSSProperties; demos: Demo[] }> = ({
  style,
}) => {
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
              <PlusOutlined
                className="is-link"
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
