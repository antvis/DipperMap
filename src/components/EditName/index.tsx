import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.less';
import { EditOutlined, EnterOutlined } from '@ant-design/icons';
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
    }
    setIsEdit(false);
  }, [onChange, cacheName, setIsEdit]);

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
          suffix={<EnterOutlined />}
        />
      ) : (
        <>
          <div title={name} className={styles.editNameText}>
            {name}
          </div>
          <EditOutlined
            className={styles.editIcon}
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
