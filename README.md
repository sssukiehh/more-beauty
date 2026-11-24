# MORE BEAUTY · 美护智能推荐官

根据自己的皮肤需求在特定的品牌内筛选适合自己的美护产品

**在线预览：** `https://<你的 GitHub 用户名>.github.io/more-beauty/`

## 项目特点

- 渐进式三步交互：输入品牌 → 回答 3 个问题 → 查看适配报告
- 自动识别护肤 / 彩妆品牌，双品类品牌会先询问品类
- 结果页以“品牌适配报告”呈现，而不是商品列表
- 每款产品包含推荐理由、避雷提示和参考价格
- 明确展示排序逻辑，避免黑箱推荐
- 报告底部提供轻量的跨品牌参考入口
- 奶油裸粉视觉、区域留白、细腻动效
- 单页应用，纯 HTML / CSS / JavaScript 实现

## 技术栈

| 项目 | 说明 |
| --- | --- |
| HTML | 单页语义化结构 |
| CSS | 响应式布局、动效、玻璃拟态与纸张质感 |
| JavaScript | 品牌识别、问答状态机、匹配评分、报告渲染 |
| 数据 | 本地 `data.js` 静态数据 |
| 图片 | 本地 `assets/products/` 商品图 |
| 部署 | GitHub Pages |

## 目录结构

```text
.
├── index.html
├── styles.css
├── app.js
├── data.js
├── assets/
│   └── products/
│       ├── 3ce-base.jpg
│       ├── armani-lip.jpg
│       └── ...
└── README.md
```

