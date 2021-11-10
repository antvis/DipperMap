import type { IEntity } from './common';

export interface IPopupInteractive extends IEntity {
  type: 'popup';
  enable: boolean;
  fields: string[];
}

export type IInteractive = IPopupInteractive;
