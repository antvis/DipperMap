import { IDataset } from './dataset';
import { ILayer } from './layer';
import { IFilter } from './filter';
import { IInteractive } from './interactive';

export interface IPlan {
  id: string;
  name: string;
  datasets: IDataset[];
  layers: ILayer[];
  filters: IFilter[];
  interactives: IInteractive[];
  createTime: number;
  updateTime: number;
}
