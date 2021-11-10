# dipper-map

在线 Demo 地址: https://antv.vision/DipperMap/

## TODO_LIST:

### 功能池

- [x] 方案管理
- [x] 支持 AMap 和 Mapbox 切换
- [ ] 自由绘制
- [ ] 默认配置优化

### 技术改造

- [x] 依赖替换：@alipay/tech-ui 中的 `<ColorPicker>` => 开源 `<ColorPicker>`
- [ ] 数据转换和筛选 => worker 中进行 + Promise

### BUG

- [ ] 多选回归单选颜色时，单选颜色没有默认值
