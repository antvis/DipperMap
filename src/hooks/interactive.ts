import { useCallback, useContext } from 'react';
import { ConfigModelContext } from '../context/ConfigContext';
import { IDataset } from '../typings';
import { generateUnRepeatValue, getRandomId } from '../utils';

const useInteractive = () => {
  const { interactiveList, setInteractiveList } =
    useContext(ConfigModelContext);

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
        fields: dataset.fields.map((field) => field.name),
      });
      setInteractiveList(newInteractiveList);
    },
    [interactiveList],
  );

  return {
    addInteractive,
  };
};

export default useInteractive;
