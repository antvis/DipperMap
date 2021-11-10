import { IDatasetField, IEntity } from '../typings';
/**
 * 获取随机的id
 * @param prefix id前缀
 */
export declare const getRandomId: (prefix?: string) => string;
/**
 * 获取元素到page左上角的像素值
 * @param element
 */
export declare const getRealOffsetTop: (element: Element) => any;
/**
 * 生成以length结尾的唯一名称
 * @param list
 * @param field
 * @param prefix
 */
export declare function generateUnRepeatValue<P, T>(list: P[], field: keyof P, prefix?: string): T;
/**
 * 根据datasetId筛选
 * @param list
 * @param datasetId
 */
export declare const filterByDatasetId: <P extends IEntity>(list: P[], datasetId?: string | null | undefined) => P[];
/**
 * 将JSON/CSV数据转换成 data + fields
 * @param originData
 */
export declare const transformData: (originData: string | any[]) => {
    fields: IDatasetField<string>[];
    data: any[];
};
