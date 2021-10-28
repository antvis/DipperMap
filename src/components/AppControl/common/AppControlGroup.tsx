import React from 'react';
import styles from '../index.less';

const AppControlGroup: React.FC = ({ children }) => {
  return <div className={styles.appControlGroup}>{children}</div>;
};

export default AppControlGroup;
