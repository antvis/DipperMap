import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.less';
import { Input, message } from 'antd';
import classnames from 'classnames';

interface IProps {
  name: string;
  onChange: (newName: string) => void;
  className?: string;
}

const EditName = ({ name, onChange, className }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [cacheName, setCacheName] = useState('');

  useEffect(() => {
    setCacheName(name);
  }, [name, isEdit]);

  const onSubmit = useCallback(() => {
    if (!cacheName) {
      message.warn('请输入名称');
      return;
    }
    if (cacheName === name) {
      message.warn('名称未更改');
    } else {
      onChange(cacheName);
      message.success('名称修改成功');
    }
    setIsEdit(false);
  }, [cacheName, name, onChange]);

  return (
    <div className={classnames([styles.editName, className])}>
      {isEdit ? (
        <Input
          autoFocus
          value={cacheName}
          size="small"
          onPressEnter={onSubmit}
          onChange={(e) => setCacheName(e.target.value)}
          onBlur={() => setIsEdit(false)}
          placeholder="请输入名称"
          suffix={<i className="dpiconfont dpicon-huiche" />}
        />
      ) : (
        <>
          <div title={name} className={styles.editNameText}>
            {name}
          </div>
          <i
            className={classnames([
              styles.editIcon,
              'dpiconfont',
              'dpicon-bianji',
            ])}
            title="编辑名称"
            onClick={(e) => {
              e.stopPropagation();
              setIsEdit(true);
            }}
          />
        </>
      )}
    </div>
  );
};

export default EditName;
