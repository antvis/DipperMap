import { DrawerProps } from 'antd';
import type { IDataset } from '../../typings';
interface IProps extends DrawerProps {
    currentDatasetId: string;
    datasetList: IDataset[];
}
declare const DataDetailDrawer: ({ currentDatasetId, datasetList, visible, ...drawProps }: IProps) => JSX.Element;
export default DataDetailDrawer;
