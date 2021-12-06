import React from 'react';
import styles from './index.less';

interface IProps {
  top: JSX.Element;
  bottom: JSX.Element;
}

const ResizePanel: React.FC<IProps> = ({ top, bottom }) => {
  return (
    <div className={styles.resizePanel}>
      {top}
      <div className={styles.resizeLine} />
      {bottom}
    </div>
  );
};

export default ResizePanel;
