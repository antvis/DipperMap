// 示例方法，没有实际意义
import dayjs from 'dayjs';

const trim = (str: string) => str.trim();

const formatDateTime = (time: number | string) =>
  dayjs(time).format('YYYY-MM-DD HH:mm:ss');

export { trim, formatDateTime };
