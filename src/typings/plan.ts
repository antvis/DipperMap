import { IMapConfig } from './map';
import { IDataset, IExportDataset } from './dataset';
import { ILayer } from './layer';
import { IFilter } from './filter';
import { IInteractive } from './interactive';

export interface IPlan {
  id?: string;
  mapConfig?: IMapConfig;
  exportDatasetList?: IExportDataset[];
  datasetList?: IDataset[];
  layerList?: ILayer[];
  filterList?: IFilter[];
  interactiveList?: IInteractive[];
}
