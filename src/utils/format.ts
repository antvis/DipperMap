// 示例方法，没有实际意义
import moment from 'moment';

const trim = (str: string) => str.trim();

const formatDateTime = (time: number | string) =>
  moment(time).format('YYYY-MM-DD HH:mm:ss');

export { trim, formatDateTime };
