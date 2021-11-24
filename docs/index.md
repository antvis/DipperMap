---
title: 快速开始
order: 1
nav:
  title: 操作手册
  path: /
---

## 快速开始

本篇文档将介绍通过的几步配置，快速在 `Dipper-Map` 地图可视化工具中导入数据并配置图层，最终在地图上呈现出地理数据的可视化展示效果。

### 添加数据源

- 点击左上角数据源面板右侧的 `+` 按钮，弹出添加数据源的弹框。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*O330SIHddhgAAAAAAAAAAAAAARQnAQ" width=256 />

- 当前导入数据文件有两种方式： **文件链接** 和 **文件上传**。_若通过文件链接导入文件，文件链接需要支持跨域请求。_

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*FQn-RqusYfoAAAAAAAAAAAAAARQnAQ" width=512 />

- 数据源新建成功后，数据源面板将会展示相应新增数据源。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*uNanQ733lIYAAAAAAAAAAAAAARQnAQ" width='300' />

_PS：可以点击下图按钮，跳转并选择示例数据，快速体验_ `Dipper-Map` _的可视化功能。_

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*dQiETr-ILxkAAAAAAAAAAAAAARQnAQ" width='600' />

### 选中数据源

通过点击选中待操作的数据源，只有选中数据源的状态下，才能添加**图层**/**筛选器**/**交互**。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*gmNdSoF1y6kAAAAAAAAAAAAAARQnAQ" width='300' />

### 图层配置

该面板主要用于配置数据源中的数据到地图中的可视化图层的映射规则。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*egY6RqmXwpEAAAAAAAAAAAAAARQnAQ" width='300' />

- 在选中数据源后，可以在图层面板添加图层。首先确认当前选中数据源对应要展现的图层类型。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*9reVQrd5AKkAAAAAAAAAAAAAARQnAQ" width='300' />

- 设置图层类型后，需要配置数据源中包含经纬度信息的字段。以点图层为例，需要设置数据源映射到地图上的 **经度** 和 **维度**。配置经纬度相关字段后，即可在地图上展现相应的可视化效果。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*4AH4QoNtnY8AAAAAAAAAAAAAARQnAQ" width='300' />

- 在图层面板中还可以配置对应图层的颜色/宽度/透明度/叠加模式等，其中针对颜色和宽度的配置包含基于字段功能，当开启基于字段后，`Dipper-Map` 将会根据当前数据源中所有数据针对该字段的值，动态分配各个数据在地图上展现的颜色深浅或宽度大小。

### 过滤器

该面板主要用于针对数据源中的数据进行多条件的筛选操作。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*2w-lQq820soAAAAAAAAAAAAAARQnAQ" width='300' />

### 交互

该面板主要用于配置当主要悬停在可视化图层上时，在 Popover 中展示相应数据的字段组。

<img src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*7J73SrEXjH0AAAAAAAAAAAAAARQnAQ" width='300' />
