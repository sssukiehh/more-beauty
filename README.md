# MORE BEAUTY · 美护智能推荐官

一个面向年轻女性的美护品牌适配网页。用户输入品牌，回答 3 个简短问题，即可获得一份以“品牌内适配”为核心的推荐报告。

- 23 个护肤 / 彩妆品牌
- 93 款真实商品数据
- 93 张本地商品图片
- 无需后端、无需构建工具、无外部接口
- 同时适配电脑和手机

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

## 本地运行

项目不需要安装依赖。由于浏览器对本地文件的限制，建议启动一个静态服务器：

```bash
cd more-beauty
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

也可以使用：

```bash
npx serve .
```

## 使用流程

1. 输入品牌名称，或点击热门品牌标签
2. 护肤品牌自动进入护肤问答，彩妆品牌自动进入彩妆问答
3. 兰蔻、YSL、雅诗兰黛、资生堂等双品类品牌会先选择护肤或彩妆
4. 完成 3 个问题后生成品牌适配报告
5. 可返回修改选择，也可打开其他品牌的相近产品参考

### 护肤问题

- 肤质：干皮 / 油皮 / 混油 / 混干
- 敏感倾向：容易敏感 / 状态稳定
- 当前重点：补水维稳 / 控油清痘 / 提亮淡斑 / 紧致抗老

### 彩妆问题

- 肤色深浅：白皙 / 自然 / 小麦 / 深肤色
- 冷暖调：冷调 / 暖调 / 中性调 / 橄榄调
- 妆效偏好：自然日常 / 哑光持妆 / 无瑕遮瑕 / 水光透亮

## 推荐逻辑

1. 根据品牌和品类筛选候选产品。
2. 综合肤质 / 肤色、敏感倾向、当前重点或妆效偏好计算匹配分。
3. 按匹配度、功效强度、入门门槛和参考价格排序。
4. 取前 3 款生成报告。
5. 从推荐产品中选出一款“入门首选”。
6. 跨品牌参考只在用户点击次级入口后展示，最多 2 条，不干扰主流程。

匹配结果不展示虚构的百分比，而是通过排序依据、推荐理由和避雷提示解释结果。

## 修改内容

### 修改品牌或产品

品牌与产品都集中在 `data.js`。

护肤产品需要包含：

```js
{
  id: "brand-product",
  brandId: "brand",
  category: "skincare",
  name: "产品名",
  type: "精华",
  positioning: "serum",
  price: 299,
  efficacy: 4,
  beginner: 4,
  needs: ["dry", "combo-dry"],
  sensitive: true,
  concerns: ["hydration"],
  image: "assets/products/brand-product.jpg",
  reason: "为什么适合你",
  caution: "需要注意什么"
}
```

彩妆产品需要包含：

```js
{
  id: "brand-product",
  brandId: "brand",
  category: "makeup",
  name: "产品名",
  type: "唇妆",
  positioning: "lip",
  price: 199,
  efficacy: 4,
  beginner: 4,
  depths: ["natural", "tan"],
  undertones: ["warm", "neutral"],
  finishes: ["matte"],
  image: "assets/products/brand-product.jpg",
  reason: "为什么适合你",
  caution: "需要注意什么"
}
```

数组为空时表示通用款，例如：

```js
needs: []
depths: []
```

### 新增品牌

1. 在 `BRANDS` 中增加品牌对象。
2. 填写品牌名称、别名和支持的品类。
3. 为每个品类准备至少 3 款产品。
4. 将商品图放入 `assets/products/`。
5. 如需在首页显示为热门品牌，将品牌 ID 加入 `POPULAR_BRAND_IDS`。

品牌对象示例：

```js
{
  id: "example",
  name: "示例品牌",
  aliases: ["示例品牌", "Example"],
  categories: ["skincare", "makeup"]
}
```

### 更换图片

- 图片放在 `assets/products/`
- 建议统一为 480 × 480 的正方形图片
- 在 `data.js` 中同步修改 `image` 路径
- 图片加载失败时会自动使用内置占位视觉

## 部署到 GitHub Pages

1. 新建 Public 仓库
2. 上传 `index.html`、`styles.css`、`app.js`、`data.js`、`assets/` 和 `README.md`
3. 进入仓库 `Settings → Pages`
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main`，目录选择 `/ (root)`
6. 保存后等待部署完成

之后每次修改 `data.js` 或图片并提交，GitHub Pages 会自动更新，无需重新手动部署。

## 轻量性

- 不使用 React、Vue 等框架
- 不需要 npm 安装或构建
- 不使用网络接口
- 图片存放在本地，报告每屏只加载少量图片
- 当前项目总大小约 1.9MB

## 说明

- 产品名称、价格和卖点仅作演示参考，请以品牌官方信息为准。
- 商品图片来自公开网络，版权归品牌或原权利人所有，仅用于个人作品集演示。
- 如用于商业项目，请替换为已授权图片并核对最新产品信息。
- 推荐结果不构成医疗建议。敏感肌使用新产品前建议先做局部测试。
