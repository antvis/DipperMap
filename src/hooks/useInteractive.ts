import { useCallback, useContext } from 'react';
import { IDataset } from '../typings';
import { generateUnRepeatValue, getRandomId } from '../utils';
import { message } from 'antd';
import { InteractiveModelContext } from '../context/InteractiveContext';

const useInteractive = () => {
  const { interactiveList, setInteractiveList } = useContext(
    InteractiveModelContext,
  );

  const addInteractive = useCallback(
    (dataset: IDataset) => {
      const newInteractiveList = [...interactiveList];
      newInteractiveList.push({
        type: 'popup',
        id: getRandomId('interactive'),
        name: generateUnRepeatValue(interactiveList, 'name', '交互'),
        order: interactiveList.length + 1,
        createTime: Date.now(),
        enable: true,
        datasetId: dataset.id,
        fields: dataset.fields.map((field) => field.name).slice(0, 7),
      });
      setInteractiveList(newInteractiveList);
      if (dataset.fields.length > 7) {
        message.info('当前数据源字段过多，默认展示前7个字段');
      }
    },
    [interactiveList, setInteractiveList],
  );

  return {
    addInteractive,
  };
};

export default useInteractive;
