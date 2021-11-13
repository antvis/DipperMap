# dipper-map

在线 Demo 地址: https://antv.vision/DipperMap/container

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
- [ ] 样式主题
- [x] heatLayer 默认值
- [ ] 自由绘制
- [ ] 暗黑模式
- [ ] 支持 geojson 格式导入

### 技术改造

- [x] 依赖替换：@alipay/tech-ui 中的 `<ColorPicker>` => 开源 `<ColorPicker>`
- [ ] 数据转换和筛选 => worker 中进行 + Promise

### BUG

- [x] 多选回归单选颜色时，单选颜色没有默认值
