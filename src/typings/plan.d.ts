import { IDataset } from '@/typings/dataset';
import { ILayer } from '@/typings/layer';
import { IFilter } from '@/typings/filter';
import { IInteractive } from '@/typings/interactive';

export interface IPlan {
  id: string;
  name: string;
  datasets: IDataset[];
  layers: ILayer[];
  filters: IFilter[];
  interactives: IInteractive[];
  createTime: string;
  updateTime: string;
}
