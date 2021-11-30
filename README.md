# dipper-map

在线 Demo 地址: https://antv.vision/DipperMap/demo

## TODO_LIST:

### 功能池

- [x] 方案管理
- [x] 支持 AMap 和 Mapbox 切换
- [ ] 默认配置优化
- [x] 叠加模式
- [ ] LineLayer 边绑定
- [ ] 示例图片 + 图层默认配置 (demo 待补充)
- [ ] 操作文档
- [ ] 官方补充各类图层
- [x] 点图层性能优化
- [x] 样式主题
- [x] heatLayer 默认值
- [ ] 自由绘制
- [x] 暗黑模式
- [x] 支持 geojson 格式导入, 支持 coordnates 以数组形式导入
- [x] 替换 iconfont

### 技术改造

- [x] 依赖替换：@alipay/tech-ui 中的 `<ColorPicker>` => 开源 `<ColorPicker>`
- [x] moment => day.js
- [ ] 数据转换和筛选 => worker 中进行 + Promise
- [ ] eslintrc 提示
- [ ] 中国地图替换：https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json
- [x] 打包静态文件 hash
- [ ] iconfont 转移到本地

### BUG

- [x] 多选回归单选颜色时，单选颜色没有默认值
- [x] 图层的顺序发生改变 Zindex 没有改变
- [x] 暗黑模式下 slider 不明显
- [ ] 筛选器开关未生效
