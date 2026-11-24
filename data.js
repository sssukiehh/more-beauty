const BRANDS = [
  {
    id: "lancome",
    name: "兰蔻",
    aliases: ["兰蔻", "Lancôme", "Lancome"],
    categories: ["skincare", "makeup"]
  },
  {
    id: "skinceuticals",
    name: "修丽可",
    aliases: ["修丽可", "SkinCeuticals", "杜克"],
    categories: ["skincare"]
  },
  {
    id: "esteelauder",
    name: "雅诗兰黛",
    aliases: ["雅诗兰黛", "Estée Lauder", "Estee Lauder", "EL"],
    categories: ["skincare", "makeup"]
  },
  {
    id: "loreal",
    name: "欧莱雅",
    aliases: ["欧莱雅", "L’Oréal", "L'Oreal", "Loreal", "巴黎欧莱雅"],
    categories: ["skincare"]
  },
  {
    id: "florasis",
    name: "花西子",
    aliases: ["花西子", "Florasis"],
    categories: ["makeup"]
  },
  {
    id: "perfectdiary",
    name: "完美日记",
    aliases: ["完美日记", "Perfect Diary", "PerfectDiary"],
    categories: ["makeup"]
  },
  {
    id: "ysl",
    name: "YSL",
    aliases: ["YSL", "圣罗兰", "Yves Saint Laurent"],
    categories: ["skincare", "makeup"]
  },
  {
    id: "shiseido",
    name: "资生堂",
    aliases: ["资生堂", "Shiseido", "SHISEIDO"],
    categories: ["skincare", "makeup"]
  },
  {
    id: "chanel",
    name: "香奈儿",
    aliases: ["香奈儿", "Chanel", "CHANEL"],
    categories: ["makeup"]
  },
  {
    id: "nars",
    name: "NARS",
    aliases: ["NARS", "Nars"],
    categories: ["makeup"]
  },
  {
    id: "kiehls",
    name: "科颜氏",
    aliases: ["科颜氏", "Kiehl's", "Kiehls", "契尔氏"],
    categories: ["skincare"]
  },
  {
    id: "proya",
    name: "珀莱雅",
    aliases: ["珀莱雅", "Proya", "PROYA"],
    categories: ["skincare"]
  },
  {
    id: "winona",
    name: "薇诺娜",
    aliases: ["薇诺娜", "Winona", "WINONA"],
    categories: ["skincare"]
  },
  {
    id: "zhiben",
    name: "至本",
    aliases: ["至本", "Zhiben"],
    categories: ["skincare"]
  },
  {
    id: "marubi",
    name: "丸美",
    aliases: ["丸美", "MARUBI", "Marubi"],
    categories: ["skincare"]
  },
  {
    id: "guyu",
    name: "谷雨",
    aliases: ["谷雨", "GUYU", "Guyu"],
    categories: ["skincare"]
  },
  {
    id: "littlegarden",
    name: "半亩花田",
    aliases: ["半亩花田", "Little Dream Garden", "banmuhuatian"],
    categories: ["skincare"]
  },
  {
    id: "hanhoo",
    name: "韩后",
    aliases: ["韩后", "Hanhoo"],
    categories: ["skincare"]
  },
  {
    id: "maskfamily",
    name: "膜法世家",
    aliases: ["膜法世家", "Mask Family", "MaskFamily"],
    categories: ["skincare"]
  },
  {
    id: "judydoll",
    name: "橘朵",
    aliases: ["橘朵", "Judydoll", "JUDYDOLL"],
    categories: ["makeup"]
  },
  {
    id: "3ce",
    name: "3CE",
    aliases: ["3CE", "三熹玉"],
    categories: ["makeup"]
  },
  {
    id: "carslan",
    name: "卡姿兰",
    aliases: ["卡姿兰", "Carslan", "CARSLAN"],
    categories: ["makeup"]
  },
  {
    id: "armani",
    name: "阿玛尼",
    aliases: ["阿玛尼", "Armani", "Giorgio Armani", "阿玛尼美妆"],
    categories: ["makeup"]
  }
];

const POPULAR_BRAND_IDS = [
  "lancome",
  "skinceuticals",
  "esteelauder",
  "loreal",
  "florasis",
  "perfectdiary"
];

const PRODUCTS = [
  {
    id: "winona-cream", brandId: "winona", category: "skincare", name: "舒敏保湿特护霜", type: "面霜",
    positioning: "cream", price: 268, efficacy: 4, beginner: 5,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/winona-cream.jpg",
    reason: "偏滋润的修护面霜，适合干皮和混干皮缓解紧绷与粗糙感。",
    caution: "封闭感较强，油皮夏季或叠加过多时可能觉得偏厚。"
  },
  {
    id: "winona-serum", brandId: "winona", category: "skincare", name: "舒敏保湿修护精华", type: "精华",
    positioning: "serum", price: 298, efficacy: 4, beginner: 4,
    needs: [], sensitive: true, concerns: ["hydration"],
    image: "assets/products/winona-serum.jpg",
    reason: "水感质地适合日常维稳，干区也能获得轻量保湿。",
    caution: "极敏感期建议先在耳后小范围试用。"
  },
  {
    id: "winona-sunscreen", brandId: "winona", category: "skincare", name: "清透防晒乳", type: "防晒",
    positioning: "sunscreen", price: 188, efficacy: 3, beginner: 5,
    needs: [], sensitive: true, concerns: [],
    image: "assets/products/winona-sunscreen.jpg",
    reason: "轻薄成膜快，日常通勤不易给混油皮增加负担。",
    caution: "长时间户外活动时需要及时补涂。"
  },
  {
    id: "winona-gel", brandId: "winona", category: "skincare", name: "舒缓控油凝露", type: "凝露",
    positioning: "lotion", price: 228, efficacy: 4, beginner: 4,
    needs: ["oily", "combo-oily"], sensitive: false, concerns: ["oil"],
    image: "assets/products/winona-gel.jpg",
    reason: "清爽凝露质地更适合油皮和混油皮，减少黏腻负担。",
    caution: "单独使用时保湿力有限，两颊偏干时建议叠加乳液。"
  },
  {
    id: "zhiben-cream", brandId: "zhiben", category: "skincare", name: "特安修护面霜", type: "面霜",
    positioning: "cream", price: 89, efficacy: 4, beginner: 5,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/zhiben-cream.jpg",
    reason: "精简保湿配方，适合干皮日常维稳，肤感柔润不浮油。",
    caution: "滋润度较高，夏季油区建议少量使用。"
  },
{
    id: "zhiben-cleanser", brandId: "zhiben", category: "skincare", name: "净润氨基酸洁面", type: "洁面",
    positioning: "cleanser", price: 59, efficacy: 3, beginner: 5,
    needs: [], sensitive: true, concerns: ["oil"],
    image: "assets/products/zhiben-cleanser.jpg",
    reason: "温和洁面，洗后不容易紧绷，适合早晚日常清洁。",
    caution: "浓妆或高倍防晒仍建议先用专门卸妆产品。"
  },
  {
    id: "zhiben-lotion", brandId: "zhiben", category: "skincare", name: "控油平衡乳", type: "乳液",
    positioning: "lotion", price: 99, efficacy: 3, beginner: 4,
    needs: ["oily", "combo-oily"], sensitive: true, concerns: ["oil"],
    image: "assets/products/zhiben-lotion.jpg",
    reason: "轻薄乳液帮助油皮维持清爽，同时避免过度拔干。",
    caution: "控油力偏温和，盛夏大油皮可能需要搭配散粉。"
  },
  {
    id: "skinceuticals-cream", brandId: "skinceuticals", category: "skincare", name: "皮脂膜修护霜", type: "面霜",
    positioning: "cream", price: 780, efficacy: 5, beginner: 3,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/skinceuticals-cream.jpg",
    reason: "偏滋润的屏障修护面霜，适合干皮在换季时使用。",
    caution: "质地丰润，油皮或湿热天气使用可能偏厚重。"
  },
  {
    id: "skinceuticals-serum", brandId: "skinceuticals", category: "skincare", name: "植萃舒缓修护精华", type: "精华",
    positioning: "serum", price: 620, efficacy: 4, beginner: 3,
    needs: [], sensitive: true, concerns: ["hydration"],
    image: "assets/products/skinceuticals-serum.jpg",
    reason: "水感精华适合日常舒缓，混油皮使用也不显黏。",
    caution: "高浓度功效产品，初次使用建议从低频开始。"
  },
  {
    id: "skinceuticals-gel", brandId: "skinceuticals", category: "skincare", name: "净颜控油凝露", type: "凝露",
    positioning: "lotion", price: 580, efficacy: 5, beginner: 2,
    needs: ["oily", "combo-oily"], sensitive: false, concerns: ["oil"],
    image: "assets/products/skinceuticals-gel.jpg",
    reason: "清爽控油型凝露，适合油皮和混油皮的日间护理。",
    caution: "控油力较强，干燥区域可能出现轻微拔干感。"
  },
  {
    id: "skinceuticals-sunscreen", brandId: "skinceuticals", category: "skincare", name: "臻白修护防晒乳", type: "防晒",
    positioning: "sunscreen", price: 330, efficacy: 4, beginner: 4,
    needs: [], sensitive: true, concerns: ["brightening"],
    image: "assets/products/skinceuticals-sunscreen.jpg",
    reason: "日常防晒同时兼顾轻薄肤感，不易影响后续底妆。",
    caution: "需要足量使用，户外强光下记得补涂。"
  },
  {
    id: "marubi-cream", brandId: "marubi", category: "skincare", name: "弹力蛋白凝时紧致霜", type: "面霜",
    positioning: "cream", price: 398, efficacy: 4, beginner: 3,
    needs: ["dry", "combo-dry"], sensitive: false, concerns: ["anti-aging"],
    image: "assets/products/marubi-cream.jpg",
    reason: "滋润型抗初老面霜，更适合干皮和混干皮的夜间护理。",
    caution: "滋润度较高，油皮夏季建议少量使用。"
  },
  {
    id: "marubi-serum", brandId: "marubi", category: "skincare", name: "雪睛焕亮精华", type: "精华",
    positioning: "serum", price: 268, efficacy: 3, beginner: 4,
    needs: [], sensitive: false, concerns: ["brightening"],
    image: "assets/products/marubi-serum.jpg",
    reason: "轻润精华适合日常提亮，使用感不厚重。",
    caution: "提亮类产品需要配合防晒，否则效果容易打折。"
  },
  {
    id: "marubi-eye", brandId: "marubi", category: "skincare", name: "巧克力丝滑眼霜", type: "眼霜",
    positioning: "eye-care", price: 198, efficacy: 3, beginner: 4,
    needs: [], sensitive: true, concerns: ["hydration", "anti-aging"],
    image: "assets/products/marubi-eye.jpg",
    reason: "丝滑眼霜适合日常眼周保湿，用量省且不搓泥。",
    caution: "眼周肌肤较薄，用量过多可能增加负担。"
  },
{
    id: "guyu-serum", brandId: "guyu", category: "skincare", name: "光甘草定雪肌精华", type: "精华",
    positioning: "serum", price: 239, efficacy: 4, beginner: 4,
    needs: [], sensitive: false, concerns: ["brightening"],
    image: "assets/products/guyu-serum.jpg",
    reason: "温和提亮型精华，适合日常改善暗沉且不增加厚重感。",
    caution: "提亮产品需坚持使用，并配合日常防晒。"
  },
  {
    id: "guyu-cream", brandId: "guyu", category: "skincare", name: "山参胶原修护面霜", type: "面霜",
    positioning: "cream", price: 299, efficacy: 4, beginner: 4,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration", "anti-aging"],
    image: "assets/products/guyu-cream.jpg",
    reason: "柔润面霜更适合干皮夜间修护，帮助缓解紧绷。",
    caution: "质地偏润，湿热天气油区建议减量。"
  },
  {
    id: "guyu-cleanser", brandId: "guyu", category: "skincare", name: "氨基酸净澈洁面", type: "洁面",
    positioning: "cleanser", price: 89, efficacy: 3, beginner: 5,
    needs: [], sensitive: true, concerns: ["oil"],
    image: "assets/products/guyu-cleanser.jpg",
    reason: "泡沫细密、洗后不紧绷，适合日常温和清洁。",
    caution: "防晒膜感较强时，建议先卸妆再清洁。"
  },
  {
    id: "guyu-lotion", brandId: "guyu", category: "skincare", name: "青瓜水感保湿乳", type: "乳液",
    positioning: "lotion", price: 129, efficacy: 3, beginner: 5,
    needs: ["oily", "combo-oily"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/guyu-lotion.jpg",
    reason: "水感乳液适合油皮和混油皮，保湿但不增加黏腻感。",
    caution: "深冬或干区可能需要额外叠加面霜。"
  },
  {
    id: "littlegarden-cream", brandId: "littlegarden", category: "skincare", name: "神经酰胺修护面霜", type: "面霜",
    positioning: "cream", price: 119, efficacy: 4, beginner: 5,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/littlegarden-cream.jpg",
    reason: "神经酰胺修护型面霜，适合干皮缓解粗糙与紧绷。",
    caution: "用量过多可能偏厚，建议少量多次涂抹。"
  },
  {
    id: "littlegarden-toner", brandId: "littlegarden", category: "skincare", name: "玫瑰保湿精华水", type: "精华水",
    positioning: "toner", price: 99, efficacy: 3, beginner: 5,
    needs: [], sensitive: false, concerns: ["hydration"],
    image: "assets/products/littlegarden-toner.jpg",
    reason: "玫瑰保湿水适合日常补水，为后续护肤打底。",
    caution: "含玫瑰香气，对香味敏感者建议先试用。"
  },
  {
    id: "littlegarden-cleanser", brandId: "littlegarden", category: "skincare", name: "氨基酸洁面慕斯", type: "洁面",
    positioning: "cleanser", price: 79, efficacy: 3, beginner: 5,
    needs: [], sensitive: true, concerns: ["oil"],
    image: "assets/products/littlegarden-cleanser.jpg",
    reason: "按压即出泡，清洁过程温和，适合日常使用。",
    caution: "清洁力偏温和，浓妆日建议先卸妆。"
  },
  {
    id: "littlegarden-lotion", brandId: "littlegarden", category: "skincare", name: "控油净透水乳", type: "乳液",
    positioning: "lotion", price: 109, efficacy: 3, beginner: 4,
    needs: ["oily", "combo-oily"], sensitive: true, concerns: ["oil", "hydration"],
    image: "assets/products/littlegarden-lotion.jpg",
    reason: "清爽水乳组合更适合油皮，帮助减少油光感。",
    caution: "控油效果偏日常，极端出油时需搭配吸油产品。"
  },
  {
    id: "hanhoo-serum", brandId: "hanhoo", category: "skincare", name: "茶蕊嫩白精华", type: "精华",
    positioning: "serum", price: 159, efficacy: 3, beginner: 4,
    needs: [], sensitive: false, concerns: ["brightening"],
    image: "assets/products/hanhoo-serum.jpg",
    reason: "轻薄提亮精华，适合作为早间护肤的轻量一步。",
    caution: "提亮效果需要周期，敏感期建议减少功效叠加。"
  },
  {
    id: "hanhoo-cream", brandId: "hanhoo", category: "skincare", name: "玻尿酸保湿霜", type: "面霜",
    positioning: "cream", price: 119, efficacy: 3, beginner: 5,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/hanhoo-cream.jpg",
    reason: "玻尿酸保湿霜更适合干皮，帮助维持长时间水润感。",
    caution: "质地偏润，油皮夏季使用可能觉得厚重。"
  },
  {
    id: "hanhoo-cleanser", brandId: "hanhoo", category: "skincare", name: "氨基酸洁面乳", type: "洁面",
    positioning: "cleanser", price: 69, efficacy: 3, beginner: 5,
    needs: [], sensitive: true, concerns: ["oil"],
    image: "assets/products/hanhoo-cleanser.jpg",
    reason: "基础温和洁面，适合日常早晚清洁，不挑肤质。",
    caution: "洗后若干区仍紧绷，建议及时补水。"
  },
  {
    id: "hanhoo-lotion", brandId: "hanhoo", category: "skincare", name: "清透控油乳液", type: "乳液",
    positioning: "lotion", price: 99, efficacy: 3, beginner: 4,
    needs: ["oily", "combo-oily"], sensitive: false, concerns: ["oil"],
    image: "assets/products/hanhoo-lotion.jpg",
    reason: "清爽乳液帮助油皮和混油皮减少油光，肤感轻。",
    caution: "保湿力偏轻，秋冬干区需要叠加面霜。"
  },
  {
    id: "maskfamily-clay", brandId: "maskfamily", category: "skincare", name: "绿豆清肌泥膜", type: "清洁面膜",
    positioning: "mask", price: 99, efficacy: 4, beginner: 3,
    needs: ["oily", "combo-oily"], sensitive: false, concerns: ["oil"],
    image: "assets/products/maskfamily-clay.jpg",
    reason: "清洁泥膜适合油皮定期使用，帮助减少毛孔油光感。",
    caution: "清洁力较强，不建议高频使用或全脸厚敷。"
  },
  {
    id: "maskfamily-hydra", brandId: "maskfamily", category: "skincare", name: "玻尿酸补水面膜", type: "面膜",
    positioning: "mask", price: 89, efficacy: 3, beginner: 5,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/maskfamily-hydra.jpg",
    reason: "补水面膜适合干皮在干燥期做集中保湿。",
    caution: "敷用时间不宜过长，敷后建议叠加面霜锁水。"
  },
  {
    id: "maskfamily-cica", brandId: "maskfamily", category: "skincare", name: "积雪草修护面膜", type: "面膜",
    positioning: "mask", price: 109, efficacy: 4, beginner: 4,
    needs: [], sensitive: true, concerns: ["hydration"],
    image: "assets/products/maskfamily-cica.jpg",
    reason: "修护型面膜适合日常维稳，肤感清爽不黏腻。",
    caution: "敏感期使用前建议先做局部测试。"
  },
{
    id: "kiehls-cream", brandId: "kiehls", category: "skincare", name: "高保湿面霜", type: "面霜",
    positioning: "cream", price: 620, efficacy: 5, beginner: 4,
    needs: ["dry", "combo-dry"], sensitive: true, concerns: ["hydration"],
    image: "assets/products/kiehls-cream.jpg",
    reason: "经典保湿面霜适合干皮长效锁水，秋冬使用感更稳。",
    caution: "质地较润，油皮夏季建议减量。"
  },
  {
    id: "kiehls-toner", brandId: "kiehls", category: "skincare", name: "金盏花爽肤水", type: "精华水",
    positioning: "toner", price: 380, efficacy: 3, beginner: 4,
    needs: [], sensitive: false, concerns: ["oil"],
    image: "assets/products/kiehls-toner.jpg",
    reason: "清爽型爽肤水适合油皮日常调理，帮助减少黏腻感。",
    caution: "含植物香气，对香味敏感者建议先试用。"
  },
  {
    id: "kiehls-serum", brandId: "kiehls", category: "skincare", name: "安白瓶精华", type: "精华",
    positioning: "serum", price: 650, efficacy: 5, beginner: 3,
    needs: [], sensitive: false, concerns: ["brightening"],
    image: "assets/products/kiehls-serum.jpg",
    reason: "提亮型精华适合改善暗沉，质地清透好叠加。",
    caution: "功效型精华需配合防晒，敏感期降低频率。"
  },
  {
    id: "kiehls-sunscreen", brandId: "kiehls", category: "skincare", name: "清爽防晒乳", type: "防晒",
    positioning: "sunscreen", price: 350, efficacy: 4, beginner: 4,
    needs: [], sensitive: true, concerns: [],
    image: "assets/products/kiehls-sunscreen.jpg",
    reason: "日常通勤防晒，肤感清爽，不容易影响后续上妆。",
    caution: "户外暴晒时需及时补涂。"
  },
  {
    id: "proya-serum", brandId: "proya", category: "skincare", name: "双抗精华", type: "精华",
    positioning: "serum", price: 269, efficacy: 5, beginner: 3,
    needs: [], sensitive: false, concerns: ["brightening", "anti-aging"],
    image: "assets/products/proya-serum.jpg",
    reason: "兼顾提亮与抗初老的精华，适合日常进阶护理。",
    caution: "功效成分较多，初次使用建议先隔天使用。"
  },
  {
    id: "proya-cream", brandId: "proya", category: "skincare", name: "红宝石面霜", type: "面霜",
    positioning: "cream", price: 299, efficacy: 5, beginner: 3,
    needs: ["dry", "combo-dry"], sensitive: false, concerns: ["anti-aging"],
    image: "assets/products/proya-cream.jpg",
    reason: "偏滋润的抗初老面霜，更适合干皮夜间使用。",
    caution: "含功效成分，敏感期建议暂停或局部试用。"
  },
{
    id: "proya-sunscreen", brandId: "proya", category: "skincare", name: "轻享阳光防晒", type: "防晒",
    positioning: "sunscreen", price: 159, efficacy: 4, beginner: 5,
    needs: [], sensitive: true, concerns: [],
    image: "assets/products/proya-sunscreen.jpg",
    reason: "轻薄日常防晒，适合通勤和妆前使用。",
    caution: "长时间户外需补涂，注意耳颈位置。"
  },
  {
    id: "florasis-base", brandId: "florasis", category: "makeup", name: "玉容纱粉饼 自然色", type: "底妆",
    positioning: "base", price: 219, efficacy: 4, beginner: 4,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["natural"],
    image: "assets/products/florasis-base.jpg",
    reason: "自然色粉饼更贴合冷白皮与自然肤色，妆感轻盈不厚重。",
    caution: "干皮妆前保湿不足时，局部可能出现卡粉。"
  },
  {
    id: "florasis-lip", brandId: "florasis", category: "makeup", name: "同心锁口红 枫叶红", type: "唇妆",
    positioning: "lip", price: 219, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["natural"],
    image: "assets/products/florasis-lip.jpg",
    reason: "暖调枫叶红更衬暖黄皮与小麦肤色，显气色但不突兀。",
    caution: "哑光质地偏干，唇部状态差时建议先打底。"
  },
  {
    id: "florasis-balm", brandId: "florasis", category: "makeup", name: "花露凝脂唇膏", type: "唇妆",
    positioning: "lip", price: 129, efficacy: 2, beginner: 5,
    depths: [], undertones: [], finishes: ["natural", "glow"],
    image: "assets/products/florasis-balm.jpg",
    reason: "润泽型唇膏不挑肤色，适合日常淡妆与叠涂。",
    caution: "滋润型持色时间较短，需要随时补涂。"
  },
{
    id: "judydoll-base", brandId: "judydoll", category: "makeup", name: "单色腮红 冷杏色", type: "颊彩",
    positioning: "cheek", price: 39, efficacy: 3, beginner: 5,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["natural"],
    image: "assets/products/judydoll-base.jpg",
    reason: "冷杏色腮红更适合冷白皮与自然肤色，上脸轻柔不显脏。",
    caution: "显色偏轻，叠涂时注意少量多次。"
  },
  {
    id: "judydoll-lip", brandId: "judydoll", category: "makeup", name: "丝绒哑光唇泥 暖棕", type: "唇妆",
    positioning: "lip", price: 49, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["matte", "flawless"],
    image: "assets/products/judydoll-lip.jpg",
    reason: "暖棕唇泥适合暖黄皮与小麦肤色，饱和度适中更显气质。",
    caution: "哑光质地易显唇纹，唇部干燥时先做好打底。"
  },
  {
    id: "judydoll-eye", brandId: "judydoll", category: "makeup", name: "精细纤长睫毛膏", type: "眼妆",
    positioning: "eye", price: 45, efficacy: 3, beginner: 4,
    depths: [], undertones: [], finishes: ["natural"],
    image: "assets/products/judydoll-eye.jpg",
    reason: "刷头细巧，适合打造干净自然的眼妆，不挑肤色。",
    caution: "防水型配方需要充分卸除，避免揉搓眼周。"
  },
  {
    id: "judydoll-setting", brandId: "judydoll", category: "makeup", name: "柔焦蜜粉饼", type: "定妆",
    positioning: "setting", price: 59, efficacy: 3, beginner: 5,
    depths: [], undertones: [], finishes: ["matte", "flawless"],
    image: "assets/products/judydoll-setting.jpg",
    reason: "柔焦粉饼适合日常定妆，帮助减少局部油光。",
    caution: "干皮使用前需做好保湿，避免粉感明显。"
  },
  {
    id: "3ce-base", brandId: "3ce", category: "makeup", name: "单色腮红 Mono Pink", type: "颊彩",
    positioning: "cheek", price: 119, efficacy: 3, beginner: 5,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["natural"],
    image: "assets/products/3ce-base.jpg",
    reason: "低饱和粉调更适合冷白皮和自然肤色，妆效柔和。",
    caution: "粉质显色度中等，刷具取粉过多可能偏重。"
  },
  {
    id: "3ce-lip", brandId: "3ce", category: "makeup", name: "丝绒唇釉 Taupe", type: "唇妆",
    positioning: "lip", price: 129, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["matte"],
    image: "assets/products/3ce-lip.jpg",
    reason: "暖棕红调更适合暖黄皮与小麦肤色，显色饱满但不挑人。",
    caution: "丝绒质地偏干，唇部起皮时建议先护理。"
  },
  {
    id: "3ce-eye", brandId: "3ce", category: "makeup", name: "防水眼线液笔", type: "眼妆",
    positioning: "eye", price: 99, efficacy: 4, beginner: 3,
    depths: [], undertones: [], finishes: ["natural", "flawless"],
    image: "assets/products/3ce-eye.jpg",
    reason: "细笔头适合日常眼妆，防水持妆不挑肤色。",
    caution: "防水眼线需要专门眼唇卸妆，避免残留。"
  },
  {
    id: "3ce-setting", brandId: "3ce", category: "makeup", name: "持妆定妆喷雾", type: "定妆",
    positioning: "setting", price: 149, efficacy: 4, beginner: 4,
    depths: [], undertones: [], finishes: ["matte", "flawless"],
    image: "assets/products/3ce-setting.jpg",
    reason: "定妆喷雾适合长时间外出，帮助底妆更服帖。",
    caution: "喷雾距离过近可能破坏底妆，建议远距离轻喷。"
  },
  {
    id: "perfectdiary-lip-cool", brandId: "perfectdiary", category: "makeup", name: "仿生膜精华口红 冷调玫瑰", type: "唇妆",
    positioning: "lip", price: 99, efficacy: 4, beginner: 4,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["natural", "glow"],
    image: "assets/products/perfectdiary-lip-cool.jpg",
    reason: "冷调玫瑰更适合冷白皮与自然肤色，提亮气色不显黄。",
    caution: "滋润型口红持色一般，进食后需要补涂。"
  },
  {
    id: "perfectdiary-lip-warm", brandId: "perfectdiary", category: "makeup", name: "名片唇釉 暖橘棕", type: "唇妆",
    positioning: "lip", price: 89, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["matte"],
    image: "assets/products/perfectdiary-lip-warm.jpg",
    reason: "暖橘棕更适合暖黄皮与小麦肤色，日常显白又不厚重。",
    caution: "唇釉成膜后偏干，建议先涂薄薄一层润唇膏。"
  },
  {
    id: "perfectdiary-eye", brandId: "perfectdiary", category: "makeup", name: "纤长睫毛膏", type: "眼妆",
    positioning: "eye", price: 69, efficacy: 3, beginner: 4,
    depths: [], undertones: [], finishes: ["natural"],
    image: "assets/products/perfectdiary-eye.jpg",
    reason: "纤长型刷头适合日常自然眼妆，不挑肤色。",
    caution: "多次叠加可能出现结块，建议趁未干时梳理。"
  },
  {
    id: "perfectdiary-setting", brandId: "perfectdiary", category: "makeup", name: "控油定妆散粉", type: "定妆",
    positioning: "setting", price: 79, efficacy: 3, beginner: 5,
    depths: [], undertones: [], finishes: ["matte"],
    image: "assets/products/perfectdiary-setting.jpg",
    reason: "控油散粉适合日常定妆，帮助减少 T 区油光。",
    caution: "干区少量使用即可，过量可能显粉感。"
  },
  {
    id: "carslan-base", brandId: "carslan", category: "makeup", name: "高定奢养粉底液 冷调象牙", type: "底妆",
    positioning: "base", price: 239, efficacy: 4, beginner: 3,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["natural", "flawless"],
    image: "assets/products/carslan-base.jpg",
    reason: "冷调象牙色更适合冷白皮与自然肤色，妆效柔润。",
    caution: "遮瑕力中等，明显瑕疵需要局部叠加遮瑕。"
  },
  {
    id: "carslan-lip", brandId: "carslan", category: "makeup", name: "丝绒唇膏 暖红棕", type: "唇妆",
    positioning: "lip", price: 129, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["matte"],
    image: "assets/products/carslan-lip.jpg",
    reason: "暖红棕更适合暖黄皮与小麦肤色，提升气色且不挑季节。",
    caution: "丝绒妆效偏干，唇纹明显时建议先打底。"
  },
  {
    id: "carslan-eye", brandId: "carslan", category: "makeup", name: "大眼睛睫毛膏", type: "眼妆",
    positioning: "eye", price: 99, efficacy: 4, beginner: 4,
    depths: [], undertones: [], finishes: ["natural", "flawless"],
    image: "assets/products/carslan-eye.jpg",
    reason: "浓密型睫毛膏适合日常放大双眼，不挑肤色。",
    caution: "浓密型配方卸妆时需耐心乳化，避免拉扯睫毛。"
  },
  {
    id: "carslan-setting", brandId: "carslan", category: "makeup", name: "雾感定妆粉饼", type: "定妆",
    positioning: "setting", price: 109, efficacy: 3, beginner: 5,
    depths: [], undertones: [], finishes: ["matte"],
    image: "assets/products/carslan-setting.jpg",
    reason: "雾感粉饼适合通勤定妆，帮助保持干净底妆。",
    caution: "干皮秋冬使用需控制用量，避免干纹明显。"
  },
  {
    id: "armani-base", brandId: "armani", category: "makeup", name: "权力粉底液 冷调", type: "底妆",
    positioning: "base", price: 630, efficacy: 5, beginner: 3,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["flawless", "matte"],
    image: "assets/products/armani-base.jpg",
    reason: "冷调底妆更适合冷白皮与自然肤色，遮瑕与持妆平衡。",
    caution: "持妆力较强，干皮需要充分妆前保湿。"
  },
  {
    id: "armani-lip", brandId: "armani", category: "makeup", name: "红管唇釉 暖棕", type: "唇妆",
    positioning: "lip", price: 330, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["matte", "flawless"],
    image: "assets/products/armani-lip.jpg",
    reason: "暖棕红调更适合暖黄皮和小麦肤色，显色优雅。",
    caution: "丝绒唇釉成膜偏快，涂抹后尽快晕开边缘。"
  },
{
    id: "armani-setting", brandId: "armani", category: "makeup", name: "柔光定妆粉饼", type: "定妆",
    positioning: "setting", price: 420, efficacy: 3, beginner: 4,
    depths: [], undertones: [], finishes: ["natural", "matte"],
    image: "assets/products/armani-setting.jpg",
    reason: "柔光粉饼适合轻定妆，帮助保留底妆自然光泽。",
    caution: "用量过多会影响底妆光泽感，建议薄薄一层。"
  },
  {
    id: "chanel-base", brandId: "chanel", category: "makeup", name: "米色时尚粉底液", type: "底妆",
    positioning: "base", price: 650, efficacy: 4, beginner: 3,
    depths: ["fair", "natural", "tan"], undertones: ["neutral", "warm", "cool"], finishes: ["natural", "glow"],
    image: "assets/products/chanel-base.jpg",
    reason: "自然柔光底妆更适合追求原生光泽感的中性至自然肤色。",
    caution: "光泽型底妆控油力有限，油皮需要搭配定妆。"
  },
  {
    id: "chanel-lip", brandId: "chanel", category: "makeup", name: "炫亮魅力唇膏 暖调", type: "唇妆",
    positioning: "lip", price: 380, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["natural", "glow"],
    image: "assets/products/chanel-lip.jpg",
    reason: "暖调唇色更适合暖黄皮与小麦肤色，提气色不显突兀。",
    caution: "膏体较软，高温环境注意存放。"
  },
  {
    id: "chanel-eye", brandId: "chanel", category: "makeup", name: "四色眼影 大地色", type: "眼妆",
    positioning: "eye", price: 650, efficacy: 4, beginner: 3,
    depths: [], undertones: [], finishes: ["natural", "flawless"],
    image: "assets/products/chanel-eye.jpg",
    reason: "大地色眼影不挑肤色，适合日常通勤与自然晕染。",
    caution: "深色需要少量多次叠加，避免眼妆显脏。"
  },
  {
    id: "chanel-setting", brandId: "chanel", category: "makeup", name: "柔光蜜粉", type: "定妆",
    positioning: "setting", price: 520, efficacy: 3, beginner: 4,
    depths: [], undertones: [], finishes: ["natural", "matte"],
    image: "assets/products/chanel-setting.jpg",
    reason: "细柔蜜粉适合轻定妆，保留底妆的自然柔光。",
    caution: "干区用量过多可能显粉，建议轻压使用。"
  },
  {
    id: "nars-base", brandId: "nars", category: "makeup", name: "流光美肌粉底液", type: "底妆",
    positioning: "base", price: 380, efficacy: 4, beginner: 3,
    depths: ["fair", "natural", "tan"], undertones: ["neutral", "warm", "olive"], finishes: ["glow", "natural"],
    image: "assets/products/nars-base.jpg",
    reason: "自然光泽底妆适合中性至暖调肤色，妆感通透。",
    caution: "遮瑕力偏中等，明显瑕疵需要局部叠加。"
  },
  {
    id: "nars-blush", brandId: "nars", category: "makeup", name: "腮红 Orgasm", type: "颊彩",
    positioning: "cheek", price: 320, efficacy: 4, beginner: 4,
    depths: ["fair", "natural", "tan"], undertones: ["warm", "neutral"], finishes: ["glow", "natural"],
    image: "assets/products/nars-blush.jpg",
    reason: "带细闪的暖粉调更适合自然与小麦肤色，提气色明显。",
    caution: "细闪在毛孔明显区域可能放大纹理，建议薄扫。"
  },
  {
    id: "nars-lip", brandId: "nars", category: "makeup", name: "哑光唇膏笔 Dolce Vita", type: "唇妆",
    positioning: "lip", price: 280, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral", "olive"], finishes: ["matte", "natural"],
    image: "assets/products/nars-lip.jpg",
    reason: "柔和玫瑰棕更衬自然至小麦肤色，日常且不挑妆。",
    caution: "哑光唇膏笔偏干，使用前建议做好唇部打底。"
  },
  {
    id: "nars-concealer", brandId: "nars", category: "makeup", name: "亮采柔肤遮瑕膏", type: "底妆",
    positioning: "base", price: 300, efficacy: 4, beginner: 4,
    depths: [], undertones: [], finishes: ["flawless", "natural"],
    image: "assets/products/nars-concealer.jpg",
    reason: "可叠加的遮瑕质地，适合局部提亮与修饰瑕疵。",
    caution: "眼下使用需少量，用量过多容易卡纹。"
  },
  {
    id: "lancome-serum", brandId: "lancome", category: "skincare", name: "小黑瓶精华", type: "精华",
    positioning: "serum", price: 780, efficacy: 4, beginner: 4,
    needs: [], sensitive: false, concerns: ["hydration", "anti-aging"],
    image: "assets/products/lancome-serum.jpg",
    reason: "轻润精华适合日常修护，肤感顺滑不厚重。",
    caution: "含香精体系，极敏感期建议先局部试用。"
  },
  {
    id: "lancome-cream", brandId: "lancome", category: "skincare", name: "菁纯面霜", type: "面霜",
    positioning: "cream", price: 1980, efficacy: 5, beginner: 2,
    needs: ["dry", "combo-dry"], sensitive: false, concerns: ["anti-aging"],
    image: "assets/products/lancome-cream.jpg",
    reason: "丰润抗老面霜更适合干皮与混干皮的夜间滋养。",
    caution: "质地滋润，油皮或炎热季节可能觉得偏厚。"
  },
  {
    id: "lancome-sunscreen", brandId: "lancome", category: "skincare", name: "轻透防晒乳", type: "防晒",
    positioning: "sunscreen", price: 495, efficacy: 4, beginner: 4,
    needs: [], sensitive: true, concerns: [],
    image: "assets/products/lancome-sunscreen.jpg",
    reason: "日常防晒肤感轻盈，后续上妆不易搓泥。",
    caution: "户外活动需补涂，单次用量不足会影响防护。"
  },
  {
    id: "lancome-base", brandId: "lancome", category: "makeup", name: "菁纯粉底液", type: "底妆",
    positioning: "base", price: 980, efficacy: 5, beginner: 3,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["natural", "flawless"],
    image: "assets/products/lancome-base.jpg",
    reason: "冷调柔光底妆更适合冷白皮与自然肤色，妆效细腻。",
    caution: "滋润型底妆遮瑕有限，明显瑕疵需局部叠加。"
  },
  {
    id: "lancome-lip", brandId: "lancome", category: "makeup", name: "菁纯唇膏 暖玫瑰", type: "唇妆",
    positioning: "lip", price: 360, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["natural", "glow"],
    image: "assets/products/lancome-lip.jpg",
    reason: "暖玫瑰色更衬暖黄皮与小麦肤色，日常显气色。",
    caution: "膏体较软，夏季高温时注意存放避免断裂。"
  },
  {
    id: "lancome-eye", brandId: "lancome", category: "makeup", name: "天鹅颈睫毛膏", type: "眼妆",
    positioning: "eye", price: 380, efficacy: 4, beginner: 4,
    depths: [], undertones: [], finishes: ["natural"],
    image: "assets/products/lancome-eye.jpg",
    reason: "刷头易操作，适合打造自然卷翘的日常眼妆。",
    caution: "温水卸除型也需要充分清洁，避免残留。"
  },
  {
    id: "ysl-serum", brandId: "ysl", category: "skincare", name: "夜皇后精华", type: "精华",
    positioning: "serum", price: 850, efficacy: 5, beginner: 2,
    needs: [], sensitive: false, concerns: ["brightening", "anti-aging"],
    image: "assets/products/ysl-serum.jpg",
    reason: "夜用修护精华适合日常提亮与细腻肤感。",
    caution: "功效较强，敏感期建议降低使用频率。"
  },
  {
    id: "ysl-cream", brandId: "ysl", category: "skincare", name: "藏金奢妍面霜", type: "面霜",
    positioning: "cream", price: 2280, efficacy: 5, beginner: 2,
    needs: ["dry", "combo-dry"], sensitive: false, concerns: ["anti-aging"],
    image: "assets/products/ysl-cream.jpg",
    reason: "滋润型面霜适合干皮夜间滋养，帮助缓解干燥细纹。",
    caution: "质地丰润，油皮夏季建议减量或局部使用。"
  },
  {
    id: "ysl-sunscreen", brandId: "ysl", category: "skincare", name: "亮白防晒乳", type: "防晒",
    positioning: "sunscreen", price: 520, efficacy: 4, beginner: 4,
    needs: [], sensitive: true, concerns: ["brightening"],
    image: "assets/products/ysl-sunscreen.jpg",
    reason: "日常防晒兼顾轻薄与光泽感，适合妆前使用。",
    caution: "妆前叠加过多可能搓泥，注意精简步骤。"
  },
  {
    id: "ysl-base", brandId: "ysl", category: "makeup", name: "恒久粉底液", type: "底妆",
    positioning: "base", price: 650, efficacy: 5, beginner: 3,
    depths: ["fair", "natural"], undertones: ["cool", "neutral"], finishes: ["matte", "flawless"],
    image: "assets/products/ysl-base.jpg",
    reason: "冷调持妆底妆更适合冷白皮与自然肤色，妆面干净。",
    caution: "持妆力强，干皮妆前保湿不足时可能卡纹。"
  },
  {
    id: "ysl-lip", brandId: "ysl", category: "makeup", name: "黑管唇釉 暖棕", type: "唇妆",
    positioning: "lip", price: 360, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["glow", "natural"],
    image: "assets/products/ysl-lip.jpg",
    reason: "暖棕色调更适合暖黄皮与小麦肤色，显色浓郁。",
    caution: "镜面质地可能黏发，风大时注意使用。"
  },
  {
    id: "ysl-eye", brandId: "ysl", category: "makeup", name: "绒密睫毛膏", type: "眼妆",
    positioning: "eye", price: 360, efficacy: 4, beginner: 4,
    depths: [], undertones: [], finishes: ["natural", "flawless"],
    image: "assets/products/ysl-eye.jpg",
    reason: "浓密型睫毛膏适合快速完成眼妆，不挑肤色。",
    caution: "膏体较厚，建议用前擦去多余膏体避免结块。"
  },
  {
    id: "loreal-serum", brandId: "loreal", category: "skincare", name: "玻尿酸水光精华", type: "精华",
    positioning: "serum", price: 249, efficacy: 4, beginner: 5,
    needs: [], sensitive: true, concerns: ["hydration"],
    image: "assets/products/loreal-serum.jpg",
    reason: "水感玻尿酸精华适合日常补水，肤感清爽好吸收。",
    caution: "单独保湿力有限，干区需要叠加面霜。"
  },
  {
    id: "loreal-cream", brandId: "loreal", category: "skincare", name: "金致臻颜面霜", type: "面霜",
    positioning: "cream", price: 329, efficacy: 4, beginner: 4,
    needs: ["dry", "combo-dry"], sensitive: false, concerns: ["anti-aging"],
    image: "assets/products/loreal-cream.jpg",
    reason: "滋润型面霜更适合干皮与混干皮的日常抗初老护理。",
    caution: "质地偏丰润，油皮夏季使用可能偏厚。"
  },
{
    id: "loreal-sunscreen", brandId: "loreal", category: "skincare", name: "小金管防晒", type: "防晒",
    positioning: "sunscreen", price: 159, efficacy: 4, beginner: 5,
    needs: [], sensitive: true, concerns: [],
    image: "assets/products/loreal-sunscreen.jpg",
    reason: "日常防晒肤感轻盈，适合作为通勤最后一步。",
    caution: "户外强光下需补涂，别忽略耳颈位置。"
  },
{
    id: "estee-serum", brandId: "esteelauder", category: "skincare", name: "特润修护肌活精华露", type: "精华",
    positioning: "serum", price: 900, efficacy: 5, beginner: 4,
    needs: [], sensitive: false, concerns: ["hydration", "anti-aging"],
    image: "assets/products/estee-serum.jpg",
    reason: "经典修护精华适合日常维稳，长期使用更偏抗初老。",
    caution: "含香精体系，极敏感期建议先局部试用。"
  },
  {
    id: "estee-cream", brandId: "esteelauder", category: "skincare", name: "智妍紧塑焕白精华霜", type: "面霜",
    positioning: "cream", price: 920, efficacy: 5, beginner: 3,
    needs: ["dry", "combo-dry"], sensitive: false, concerns: ["anti-aging", "brightening"],
    image: "assets/products/estee-cream.jpg",
    reason: "滋润型抗老面霜更适合干皮夜间使用，兼顾提亮。",
    caution: "质地较丰润，油皮夏季建议减量。"
  },
  {
    id: "estee-toner", brandId: "esteelauder", category: "skincare", name: "樱花微精华水", type: "精华水",
    positioning: "toner", price: 460, efficacy: 4, beginner: 4,
    needs: [], sensitive: false, concerns: ["hydration"],
    image: "assets/products/estee-toner.jpg",
    reason: "轻润精华水适合日常补水打底，肤感不黏。",
    caution: "含香精与发酵成分，敏感期建议先试用。"
  },
  {
    id: "estee-base", brandId: "esteelauder", category: "makeup", name: "Double Wear 持妆粉底液", type: "底妆",
    positioning: "base", price: 430, efficacy: 5, beginner: 3,
    depths: ["fair", "natural", "tan"], undertones: ["neutral", "warm", "cool"], finishes: ["matte", "flawless"],
    image: "assets/products/estee-base.jpg",
    reason: "高持妆哑光底妆，适合需要长效遮瑕的通勤场景。",
    caution: "持妆力强且偏干，干皮需要充分妆前保湿。"
  },
  {
    id: "estee-lip", brandId: "esteelauder", category: "makeup", name: "倾慕唇膏 暖调", type: "唇妆",
    positioning: "lip", price: 320, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["natural"],
    image: "assets/products/estee-lip.jpg",
    reason: "暖调唇色更衬暖黄皮与小麦肤色，妆效优雅。",
    caution: "膏体较软，使用和存放时注意避免断裂。"
  },
  {
    id: "estee-eye", brandId: "esteelauder", category: "makeup", name: "纤长睫毛膏", type: "眼妆",
    positioning: "eye", price: 300, efficacy: 4, beginner: 4,
    depths: [], undertones: [], finishes: ["natural"],
    image: "assets/products/estee-eye.jpg",
    reason: "纤长型刷头适合日常自然眼妆，不挑肤色。",
    caution: "防水型配方需要充分卸除，避免眼周残留。"
  },
  {
    id: "shiseido-serum", brandId: "shiseido", category: "skincare", name: "红妍肌活精华露", type: "精华",
    positioning: "serum", price: 660, efficacy: 4, beginner: 4,
    needs: [], sensitive: true, concerns: ["hydration"],
    image: "assets/products/shiseido-serum.jpg",
    reason: "偏维稳修护的精华，适合日常打底与换季护理。",
    caution: "含香精体系，对香味敏感者建议先试用。"
  },
  {
    id: "shiseido-cream", brandId: "shiseido", category: "skincare", name: "悦薇珀翡塑颜亮肤霜", type: "面霜",
    positioning: "cream", price: 1080, efficacy: 5, beginner: 2,
    needs: ["dry", "combo-dry"], sensitive: false, concerns: ["anti-aging", "brightening"],
    image: "assets/products/shiseido-cream.jpg",
    reason: "滋润型抗老面霜更适合干皮夜间使用，兼顾提亮。",
    caution: "功效较强，敏感期建议降低使用频率。"
  },
  {
    id: "shiseido-sunscreen", brandId: "shiseido", category: "skincare", name: "新艳阳夏臻效水动力防晒乳", type: "防晒",
    positioning: "sunscreen", price: 380, efficacy: 5, beginner: 4,
    needs: [], sensitive: true, concerns: [],
    image: "assets/products/shiseido-sunscreen.jpg",
    reason: "户外通勤都适用的防晒，成膜快且防水力较好。",
    caution: "防水型防晒建议使用卸妆产品充分清洁。"
  },
  {
    id: "shiseido-base", brandId: "shiseido", category: "makeup", name: "随肌应变持妆粉底液", type: "底妆",
    positioning: "base", price: 420, efficacy: 4, beginner: 4,
    depths: ["fair", "natural", "tan"], undertones: ["neutral", "warm", "cool"], finishes: ["natural", "flawless"],
    image: "assets/products/shiseido-base.jpg",
    reason: "自然持妆型底妆适合多种肤色，妆感轻薄。",
    caution: "极端干燥环境使用前需加强保湿。"
  },
  {
    id: "shiseido-lip", brandId: "shiseido", category: "makeup", name: "臻红唇膏 暖红", type: "唇妆",
    positioning: "lip", price: 280, efficacy: 4, beginner: 4,
    depths: ["natural", "tan", "deep"], undertones: ["warm", "neutral"], finishes: ["natural", "matte"],
    image: "assets/products/shiseido-lip.jpg",
    reason: "暖红调更适合暖黄皮与小麦肤色，显色饱满。",
    caution: "膏体顺滑柔软，使用时不要旋出过多。"
  },
  {
    id: "shiseido-eye", brandId: "shiseido", category: "makeup", name: "心机彩妆星魅睫毛膏", type: "眼妆",
    positioning: "eye", price: 260, efficacy: 4, beginner: 4,
    depths: [], undertones: [], finishes: ["natural", "flawless"],
    image: "assets/products/shiseido-eye.jpg",
    reason: "细齿刷头适合自然纤长眼妆，不挑肤色。",
    caution: "叠加过多可能结块，建议薄涂并趁湿梳理。"
  }
];
