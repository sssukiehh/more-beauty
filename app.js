const CATEGORY_META = {
  skincare: {
    label: "护肤",
    description: "日常护理与功效"
  },
  makeup: {
    label: "彩妆",
    description: "底妆、唇妆与定妆"
  }
};

const ANSWER_LABELS = {
  skinType: {
    dry: "干皮",
    oily: "油皮",
    "combo-oily": "混油",
    "combo-dry": "混干"
  },
  sensitivity: {
    sensitive: "容易敏感",
    stable: "状态稳定"
  },
  concern: {
    hydration: "补水维稳",
    oil: "控油清痘",
    brightening: "提亮淡斑",
    "anti-aging": "紧致抗老"
  },
  depth: {
    fair: "白皙",
    natural: "自然",
    tan: "小麦",
    deep: "深肤色"
  },
  undertone: {
    cool: "冷调",
    warm: "暖调",
    neutral: "中性调",
    olive: "橄榄调"
  },
  finish: {
    natural: "自然日常",
    matte: "哑光持妆",
    flawless: "无瑕遮瑕",
    glow: "水光透亮"
  }
};

const QUESTION_STEPS = {
  skincare: [
    {
      key: "skinType",
      title: "你的肌肤更接近哪一种状态？",
      hint: "选择最接近的一项即可，不需要精确判断。",
      options: [
        { value: "dry", label: "干皮", description: "容易紧绷、起皮" },
        { value: "oily", label: "油皮", description: "容易泛油、脱妆" },
        { value: "combo-oily", label: "混油", description: "T 区偏油、两颊中性" },
        { value: "combo-dry", label: "混干", description: "T 区微油、两颊偏干" }
      ]
    },
    {
      key: "sensitivity",
      title: "你的皮肤容易敏感吗？",
      hint: "这会用于调整产品选择与避雷提示。",
      options: [
        { value: "sensitive", label: "容易敏感", description: "偶发泛红、刺痛或换季不稳" },
        { value: "stable", label: "状态稳定", description: "耐受度较高，较少突发敏感" }
      ]
    },
    {
      key: "concern",
      title: "现在最想改善的是哪一点？",
      hint: "选择当前最在意的一项即可。",
      options: [
        { value: "hydration", label: "补水维稳", description: "干燥、粗糙、屏障不稳" },
        { value: "oil", label: "控油清痘", description: "出油、闭口、毛孔困扰" },
        { value: "brightening", label: "提亮淡斑", description: "暗沉、肤色不均" },
        { value: "anti-aging", label: "紧致抗老", description: "细纹、松弛、弹性下降" }
      ]
    }
  ],
  makeup: [
    {
      key: "depth",
      title: "你的肤色深浅更接近哪一种？",
      hint: "选择最接近的肤色深浅即可。",
      options: [
        { value: "fair", label: "白皙", description: "整体偏浅、容易被说白" },
        { value: "natural", label: "自然", description: "不深不浅、自然肤色" },
        { value: "tan", label: "小麦", description: "偏深、健康肤色" },
        { value: "deep", label: "深肤色", description: "肤色较深、偏浓郁" }
      ]
    },
    {
      key: "undertone",
      title: "你的肤色更偏哪种冷暖调？",
      hint: "不确定时观察手腕血管：偏蓝紫多为冷调，偏绿多为暖调。",
      options: [
        { value: "cool", label: "冷调", description: "偏粉、蓝调更显气色" },
        { value: "warm", label: "暖调", description: "偏黄、金调更自然" },
        { value: "neutral", label: "中性调", description: "冷暖之间、选择空间大" },
        { value: "olive", label: "橄榄调", description: "偏绿灰、易显暗沉" }
      ]
    },
    {
      key: "finish",
      title: "你更想要什么妆效？",
      hint: "选择你日常最常使用的一种即可。",
      options: [
        { value: "natural", label: "自然日常", description: "轻薄、贴肤、不刻意" },
        { value: "matte", label: "哑光持妆", description: "控油、持久、妆面干净" },
        { value: "flawless", label: "无瑕遮瑕", description: "高遮瑕、精致完整" },
        { value: "glow", label: "水光透亮", description: "光泽、通透、有呼吸感" }
      ]
    }
  ]
};

const POSITION_LABELS = {
  skincare: {
    serum: "精华",
    cream: "面霜",
    lotion: "乳液 / 凝露",
    cleanser: "洁面",
    sunscreen: "防晒",
    toner: "精华水",
    mask: "面膜",
    "eye-care": "眼霜"
  },
  makeup: {
    base: "底妆",
    cheek: "颊彩",
    lip: "唇妆",
    eye: "眼妆",
    setting: "定妆"
  }
};

const els = {
  form: document.getElementById("brand-form"),
  input: document.getElementById("brand-input"),
  message: document.getElementById("brand-message"),
  hotBrands: document.getElementById("hot-brands"),
  overlay: document.getElementById("overlay"),
  veil: document.getElementById("overlay-veil"),
  sheet: document.getElementById("sheet"),
  sheetEyebrow: document.getElementById("sheet-eyebrow"),
  backButton: document.getElementById("back-button"),
  closeButton: document.getElementById("close-button"),
  questionView: document.getElementById("question-view"),
  questionProgress: document.getElementById("question-progress"),
  questionTitle: document.getElementById("question-title"),
  questionHint: document.getElementById("question-hint"),
  answerOptions: document.getElementById("answer-options"),
  reportView: document.getElementById("report-view")
};

const state = {
  brand: null,
  category: null,
  stage: null,
  questions: [],
  stepIndex: 0,
  answers: {},
  recommendations: [],
  entryId: null,
  alternatives: [],
  transitioning: false,
  choiceTimer: null,
  closeTimer: null,
  lastFocused: null
};

const normalizePattern = /[\s\u3000·•・\-—–_.,，。'’"“”‘`´（）()【】\[\]{}<>《》\/\\|:：;；!！?？+&]/g;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function normalizeName(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(normalizePattern, "");
}

function brandNames(brand) {
  return [brand.name, ...brand.aliases];
}

function findBrand(rawValue) {
  const query = normalizeName(rawValue);

  if (!query) {
    return { kind: "empty" };
  }

  const exact = BRANDS.find((brand) =>
    brandNames(brand).some((name) => normalizeName(name) === query)
  );

  if (exact) {
    return { kind: "one", brand: exact };
  }

  if (query.length < 2) {
    return { kind: "none" };
  }

  const partial = BRANDS.filter((brand) =>
    brandNames(brand).some((name) => {
      const normalized = normalizeName(name);
      return normalized.length >= 2 && (normalized.includes(query) || query.includes(normalized));
    })
  );

  if (partial.length === 1) {
    return { kind: "one", brand: partial[0] };
  }

  if (partial.length > 1) {
    return { kind: "multiple", brands: partial };
  }

  return { kind: "none" };
}

function setMessage(text) {
  els.message.textContent = text;

  if (text) {
    els.input.setAttribute("aria-invalid", "true");
  } else {
    els.input.removeAttribute("aria-invalid");
  }
}

function renderHotBrands() {
  els.hotBrands.replaceChildren();

  POPULAR_BRAND_IDS.forEach((brandId) => {
    const brand = getBrand(brandId);
    if (!brand) {
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "hot-brand";
    button.textContent = brand.name;
    button.setAttribute("aria-label", `填入品牌 ${brand.name}`);
    button.addEventListener("click", () => {
      els.input.value = brand.name;
      setMessage("");
      els.input.focus({ preventScroll: true });
    });
    els.hotBrands.append(button);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  if (state.transitioning) {
    return;
  }

  const raw = els.input.value.trim();
  const found = findBrand(raw);

  if (found.kind === "empty") {
    setMessage("请输入一个品牌名称。");
    els.input.focus();
    return;
  }

  if (found.kind === "none") {
    setMessage(`暂未收录「${raw}」。可以试试：兰蔻、修丽可 或 花西子。`);
    els.input.focus();
    return;
  }

  if (found.kind === "multiple") {
    const names = found.brands.map((brand) => brand.name).join("、");
    setMessage(`找到多个可能的品牌：${names}。请把品牌名写得更完整一些。`);
    els.input.focus();
    return;
  }

  setMessage("");
  startSession(found.brand);
}

function startSession(brand) {
  clearTimeout(state.closeTimer);
  clearTimeout(state.choiceTimer);
  state.brand = brand;
  state.category = brand.categories.length === 1 ? brand.categories[0] : null;
  state.questions = [];
  state.stepIndex = 0;
  state.answers = {};
  state.recommendations = [];
  state.entryId = null;
  state.alternatives = [];
  state.transitioning = false;
  state.lastFocused = document.activeElement;
  els.input.blur();

  if (brand.categories.length === 1) {
    setupQuestions();
    showQuestion(0, false);
  } else {
    showCategoryQuestion(false);
  }

  openOverlay();
}

function openOverlay() {
  clearTimeout(state.closeTimer);
  clearTimeout(state.choiceTimer);
  els.overlay.hidden = false;
  document.body.classList.add("is-locked");

  requestAnimationFrame(() => {
    els.overlay.classList.add("is-open");
  });

  window.setTimeout(() => {
    if (!els.overlay.hidden && state.stage === "question") {
      focusQuestionTitle();
    }
  }, 420);
}

function closeOverlay() {
  if (els.overlay.hidden) {
    return;
  }

  clearTimeout(state.choiceTimer);
  clearTimeout(state.closeTimer);
  state.transitioning = false;
  els.overlay.classList.remove("is-open");
  document.body.classList.remove("is-locked");

  state.closeTimer = window.setTimeout(() => {
    els.overlay.hidden = true;
    els.sheet.classList.remove("is-report");
    els.questionView.hidden = false;
    els.reportView.hidden = true;
    els.reportView.innerHTML = "";
    els.answerOptions.replaceChildren();
    els.questionProgress.replaceChildren();
    els.questionProgress.hidden = true;
    els.questionTitle.textContent = "";
    els.questionHint.textContent = "";
    els.sheetEyebrow.textContent = "";
    els.backButton.hidden = true;
    els.sheet.setAttribute("aria-labelledby", "question-title");
    els.sheet.scrollTop = 0;

    Object.assign(state, {
      brand: null,
      category: null,
      stage: null,
      questions: [],
      stepIndex: 0,
      answers: {},
      recommendations: [],
      entryId: null,
      alternatives: [],
      transitioning: false
    });

    if (state.lastFocused instanceof HTMLElement && document.contains(state.lastFocused)) {
      state.lastFocused.focus({ preventScroll: true });
    }
  }, 420);
}

function setupQuestions() {
  state.questions = QUESTION_STEPS[state.category];
  state.stepIndex = 0;
  state.answers = {};
}

function focusQuestionTitle() {
  els.questionTitle.focus({ preventScroll: true });
}

function renderProgress() {
  const hidden = state.stage !== "question";
  els.questionProgress.hidden = hidden;
  els.questionProgress.replaceChildren();

  if (hidden) {
    return;
  }

  state.questions.forEach((_, index) => {
    const segment = document.createElement("span");
    if (index < state.stepIndex) {
      segment.className = "is-complete";
    } else if (index === state.stepIndex) {
      segment.className = "is-current";
    }
    els.questionProgress.append(segment);
  });
}

function renderChoices(items, selectedValue) {
  els.answerOptions.replaceChildren();

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pill";
    button.dataset.choice = item.value;

    if (selectedValue === item.value) {
      button.classList.add("is-selected");
    }

    const label = document.createElement("span");
    label.className = "pill__label";
    label.textContent = item.label;

    const description = document.createElement("span");
    description.className = "pill__desc";
    description.textContent = item.description;

    button.append(label, description);
    button.addEventListener("click", () => chooseAnswer(button, item.value));
    els.answerOptions.append(button);
  });
}

function setQuestionShell(title, hint) {
  els.questionView.hidden = false;
  els.reportView.hidden = true;
  els.sheet.classList.remove("is-report");
  els.sheet.setAttribute("aria-labelledby", "question-title");
  els.questionTitle.textContent = title;
  els.questionHint.textContent = hint;
  els.sheet.scrollTop = 0;
}

function showCategoryQuestion(animateFocus = true) {
  state.stage = "category";
  state.category = null;
  state.questions = [];
  state.stepIndex = 0;
  state.answers = {};
  state.recommendations = [];
  state.entryId = null;
  state.alternatives = [];
  els.sheetEyebrow.textContent = state.brand.name;
  els.backButton.hidden = true;
  setQuestionShell("想先了解护肤，还是彩妆？", "选择后，只会展示对应类别的产品。");
  renderProgress();
  renderChoices(
    state.brand.categories.map((category) => ({
      value: category,
      label: CATEGORY_META[category].label,
      description: CATEGORY_META[category].description
    }))
  );

  if (animateFocus) {
    window.setTimeout(focusQuestionTitle, 80);
  }
}

function showQuestion(index, animateFocus = true) {
  if (!state.category || !state.questions[index]) {
    closeOverlay();
    return;
  }

  state.stage = "question";
  state.stepIndex = index;
  const step = state.questions[index];
  els.sheetEyebrow.textContent = `${state.brand.name} · ${CATEGORY_META[state.category].label}`;
  els.backButton.hidden = false;
  setQuestionShell(step.title, step.hint);
  renderProgress();
  renderChoices(step.options, state.answers[step.key]);

  if (animateFocus) {
    window.setTimeout(focusQuestionTitle, 80);
  }
}

function chooseAnswer(button, value) {
  if (state.transitioning) {
    return;
  }

  state.transitioning = true;
  const stage = state.stage;
  const step = stage === "question" ? state.questions[state.stepIndex] : null;
  const buttons = Array.from(els.answerOptions.querySelectorAll(".pill"));
  buttons.forEach((item) => {
    item.disabled = true;
    item.classList.remove("is-selected");
  });
  button.classList.add("is-selected");

  state.choiceTimer = window.setTimeout(() => {
    state.transitioning = false;

    if (stage === "category") {
      state.category = value;
      setupQuestions();
      showQuestion(0);
      return;
    }

    if (stage === "question" && step) {
      state.answers[step.key] = value;

      if (state.stepIndex < state.questions.length - 1) {
        showQuestion(state.stepIndex + 1);
        return;
      }

      prepareReport();
      showReport();
    }
  }, reduceMotion.matches ? 20 : 330);
}

function scoreProduct(product, answers) {
  let score = 0;

  if (product.category === "skincare") {
    if (product.needs.length === 0) {
      score += 16;
    } else if (product.needs.includes(answers.skinType)) {
      score += 35;
    } else {
      score -= 22;
    }

    if (answers.sensitivity === "sensitive") {
      score += product.sensitive ? 18 : -13;
    }

    if (product.concerns.includes(answers.concern)) {
      score += 22;
    }
  } else {
    if (product.depths.length === 0) {
      score += 10;
    } else if (product.depths.includes(answers.depth)) {
      score += 24;
    } else {
      score -= 20;
    }

    if (product.undertones.length === 0) {
      score += 8;
    } else if (product.undertones.includes(answers.undertone)) {
      score += 20;
    } else {
      score -= 16;
    }

    if (product.finishes.length === 0) {
      score += 7;
    } else if (product.finishes.includes(answers.finish)) {
      score += 18;
    } else {
      score -= 7;
    }
  }

  score += product.efficacy * 1.5;
  score += product.beginner * 1.2;

  return score;
}

function rankProducts(products) {
  return products
    .map((product) => ({ product, score: scoreProduct(product, state.answers) }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      if (b.product.efficacy !== a.product.efficacy) {
        return b.product.efficacy - a.product.efficacy;
      }
      if (b.product.beginner !== a.product.beginner) {
        return b.product.beginner - a.product.beginner;
      }
      return a.product.price - b.product.price;
    })
    .map((item) => item.product);
}

function findEntryId(products) {
  if (!products.length) {
    return null;
  }

  return [...products].sort((a, b) =>
    b.beginner - a.beginner ||
    a.price - b.price ||
    b.efficacy - a.efficacy
  )[0].id;
}

function getRecommendations() {
  const products = PRODUCTS.filter((product) =>
    product.brandId === state.brand.id &&
    product.category === state.category
  );

  return rankProducts(products).slice(0, 3);
}

function isLikelyCompatible(product) {
  if (product.category === "skincare") {
    return product.needs.length === 0 || product.needs.includes(state.answers.skinType);
  }

  return product.depths.length === 0 || product.depths.includes(state.answers.depth);
}

function getAlternatives(anchor) {
  if (!anchor) {
    return [];
  }

  const candidates = PRODUCTS
    .filter((product) =>
      product.brandId !== state.brand.id &&
      product.category === state.category &&
      isLikelyCompatible(product)
    )
    .map((product) => ({
      product,
      score: scoreProduct(product, state.answers) +
        (product.positioning === anchor.positioning ? 8 : 0)
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.product.price - b.product.price;
    });

  const seenBrands = new Set();
  const alternatives = [];

  candidates.forEach(({ product }) => {
    if (seenBrands.has(product.brandId)) {
      return;
    }

    seenBrands.add(product.brandId);
    alternatives.push(product);
  });

  return alternatives.slice(0, 2);
}

function prepareReport() {
  state.recommendations = getRecommendations();
  state.entryId = findEntryId(state.recommendations);
  state.alternatives = getAlternatives(state.recommendations[0]);
}

function getAnswerMeta() {
  const answers = state.answers;

  if (state.category === "skincare") {
    return {
      primary: ANSWER_LABELS.skinType[answers.skinType],
      sensitivity: ANSWER_LABELS.sensitivity[answers.sensitivity],
      concern: ANSWER_LABELS.concern[answers.concern]
    };
  }

  return {
    depth: ANSWER_LABELS.depth[answers.depth],
    undertone: ANSWER_LABELS.undertone[answers.undertone],
    finish: ANSWER_LABELS.finish[answers.finish]
  };
}

function buildConclusion() {
  const count = state.recommendations.length;
  const answer = getAnswerMeta();
  let opening;

  if (state.category === "skincare") {
    opening = `根据你的${answer.primary}肤质、${answer.sensitivity}的肤况与${answer.concern}重点`;
  } else {
    opening = `根据你的${answer.depth}${answer.undertone}肤色与${answer.finish}偏好`;
  }

  if (count === 0) {
    return `${opening}，${state.brand.name}目前没有足够贴合的产品。你可以返回调整需求，或看看其他品牌的相近选择。`;
  }

  if (count === 1) {
    return `${opening}，${state.brand.name}中有 1 款更匹配的选择，也更适合作为入门首选。`;
  }

  return `${opening}，${state.brand.name}中有 ${count} 款更匹配的选择，其中 1 款更适合作为入门首选。`;
}

function showReport() {
  state.stage = "report";
  els.questionView.hidden = true;
  els.reportView.hidden = false;
  els.sheet.classList.add("is-report");
  els.sheetEyebrow.textContent = "BRAND FIT REPORT";
  els.backButton.hidden = false;
  els.sheet.setAttribute("aria-labelledby", "report-title");
  els.reportView.innerHTML = buildReportMarkup();
  bindProductImages();
  els.sheet.scrollTop = 0;

  window.setTimeout(() => {
    if (state.stage !== "report") {
      return;
    }
    const title = document.getElementById("report-title");
    if (title) {
      title.focus({ preventScroll: true });
    }
  }, reduceMotion.matches ? 20 : 430);
}

function buildReportMarkup() {
  const count = state.recommendations.length;
  const answer = getAnswerMeta();
  const metaItems = state.category === "skincare"
    ? [
        CATEGORY_META[state.category].label,
        `${answer.primary}肤质`,
        answer.sensitivity,
        answer.concern
      ]
    : [
        CATEGORY_META[state.category].label,
        `${answer.depth} / ${answer.undertone}`,
        answer.finish
      ];
  const matchDescription = state.category === "skincare"
    ? "综合肤质、敏感与重点"
    : "综合肤色、色调与妆效";
  const productMarkup = count
    ? state.recommendations.map((product, index) => renderProduct(product, index)).join("")
    : '<p class="empty-report">暂时没有可展示的产品，请返回重新选择。</p>';

  return `
    <header class="report-head">
      <h2 class="report-brand" id="report-title" tabindex="-1">${escapeHtml(state.brand.name)}</h2>
      <p class="report-conclusion">${escapeHtml(buildConclusion())}</p>
      <div class="report-meta">
        ${metaItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        <span>${count} 款适配</span>
      </div>
    </header>
    <section class="report-products" aria-label="品牌内推荐产品">
      ${productMarkup}
    </section>
    <section class="ranking" aria-labelledby="ranking-title">
      <p class="ranking__label">Ranking Logic</p>
      <h3 class="ranking__title" id="ranking-title">这份排序怎么来的</h3>
      <ol class="ranking__steps">
        <li>
          <span class="ranking__num">01</span>
          <strong class="ranking__name">匹配度</strong>
          <span class="ranking__desc">${matchDescription}</span>
        </li>
        <li>
          <span class="ranking__num">02</span>
          <strong class="ranking__name">功效强度</strong>
          <span class="ranking__desc">同层级优先功效更明确</span>
        </li>
        <li>
          <span class="ranking__num">03</span>
          <strong class="ranking__name">入门门槛</strong>
          <span class="ranking__desc">再优先更易上手的产品</span>
        </li>
        <li>
          <span class="ranking__num">04</span>
          <strong class="ranking__name">参考价格</strong>
          <span class="ranking__desc">最后比较参考价格</span>
        </li>
      </ol>
      <p class="ranking__note">排序先看是否符合你的三项需求，再比较功效、上手难度和参考价格。</p>
    </section>
    ${buildAlternativesMarkup()}
    <p class="report-disclaimer">产品图片与价格仅作演示参考，图片版权归品牌或原权利人所有，请以品牌官方信息为准。个体感受存在差异，使用前建议先做局部测试。</p>
  `;
}

function renderProduct(product, index) {
  const entry = product.id === state.entryId;
  const positionLabel = POSITION_LABELS[state.category][product.positioning] || product.type;
  const brand = getBrand(product.brandId);

  return `
    <article class="product">
      <div class="product__art">
        <img
          class="product__photo"
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(`${brand ? brand.name : ""} ${product.name}`)}"
          width="480"
          height="480"
          loading="lazy"
          decoding="async"
        >
        <div class="product__fallback" aria-hidden="true">
          <span>${escapeHtml(product.type)}</span>
        </div>
      </div>
      <div class="product__head">
        <div class="product__meta">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <span>${escapeHtml(product.type)}</span>
          ${entry ? '<span class="product__entry">入门首选</span>' : ""}
        </div>
        <h3 class="product__name">${escapeHtml(product.name)}</h3>
      </div>
      <div class="product__details">
        <div class="product__note product__note--why">
          <span class="product__note-label">为什么适合你</span>
          <p>${escapeHtml(product.reason)}</p>
        </div>
        <div class="product__note product__note--caution">
          <span class="product__note-label">需要注意</span>
          <p>${escapeHtml(product.caution)}</p>
        </div>
        <div class="product__foot">
          <span>参考价 ¥${formatPrice(product.price)}</span>
          <span>${escapeHtml(positionLabel)}</span>
        </div>
      </div>
    </article>
  `;
}

function buildAlternativesMarkup() {
  if (!state.alternatives.length) {
    return "";
  }

  const anchor = state.recommendations[0];
  const rows = state.alternatives.map((product) => {
    const brand = getBrand(product.brandId);
    const position = POSITION_LABELS[product.category][product.positioning] || product.type;
    const brandLabel = brand ? brand.name : "";
    const difference = describeAlternative(anchor, product);

    return `
      <div class="alt-item">
        <div>
          <span class="alt-item__brand">${escapeHtml(brandLabel)}</span>
          <span class="alt-item__name">${escapeHtml(product.name)}</span>
        </div>
        <span class="alt-item__price">参考价 ¥${formatPrice(product.price)}</span>
        <p class="alt-item__detail">相近定位：${escapeHtml(position)} · ${escapeHtml(difference)}</p>
      </div>
    `;
  }).join("");

  return `
    <section class="secondary">
      <p class="secondary__prompt">如果这个品牌不完全合适</p>
      <button class="text-link" type="button" data-alt-toggle aria-expanded="false" aria-controls="alt-panel">
        看看其他品牌中类似定位的产品
        <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="alt-panel" id="alt-panel" hidden>
        <div class="alt-panel__head">
          <span class="alt-panel__label">Cross-brand Reference</span>
          <p class="alt-panel__note">仅作不同定位参考，不改变上面的品牌结论。</p>
        </div>
        <div class="alt-list">${rows}</div>
        <button class="text-link alt-panel__back" type="button" data-alt-close>回到本品牌报告</button>
      </div>
    </section>
  `;
}

function describeAlternative(anchor, alternative) {
  if (alternative.price <= anchor.price * 0.7) {
    return "同类定位里参考价更低，适合先试。";
  }

  if (alternative.beginner > anchor.beginner) {
    return "上手门槛更低，更适合日常稳定使用。";
  }

  if (alternative.efficacy > anchor.efficacy) {
    return "功效方向更进取，适合已有护理经验的人。";
  }

  return "定位相近，可作为质地与价格不同的替换。";
}

function bindProductImages() {
  els.reportView.querySelectorAll(".product__photo").forEach((image) => {
    const fail = () => {
      const frame = image.closest(".product__art");
      if (frame) {
        frame.classList.add("is-fallback");
      }
      image.remove();
    };

    if (image.complete && image.naturalWidth === 0) {
      fail();
      return;
    }

    image.addEventListener("error", fail, { once: true });
  });
}

function getBrand(brandId) {
  return BRANDS.find((brand) => brand.id === brandId);
}

function formatPrice(price) {
  return new Intl.NumberFormat("zh-CN").format(price);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function goBack() {
  if (state.transitioning) {
    return;
  }

  if (state.stage === "report") {
    showQuestion(state.questions.length - 1);
    return;
  }

  if (state.stage === "question") {
    if (state.stepIndex > 0) {
      showQuestion(state.stepIndex - 1);
      return;
    }

    if (state.brand && state.brand.categories.length > 1) {
      showCategoryQuestion();
      return;
    }
  }

  closeOverlay();
}

function handleReportClick(event) {
  const toggle = event.target.closest("[data-alt-toggle]");
  const close = event.target.closest("[data-alt-close]");

  if (toggle) {
    const panel = els.reportView.querySelector("#alt-panel");
    if (!panel) {
      return;
    }

    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    toggle.setAttribute("aria-expanded", String(willOpen));

    if (willOpen) {
      panel.scrollIntoView({
        block: "nearest",
        behavior: reduceMotion.matches ? "auto" : "smooth"
      });
    }
  }

  if (close) {
    const panel = els.reportView.querySelector("#alt-panel");
    const button = els.reportView.querySelector("[data-alt-toggle]");
    if (panel) {
      panel.hidden = true;
    }
    if (button) {
      button.setAttribute("aria-expanded", "false");
      button.focus({ preventScroll: true });
    }
  }
}

function handleDialogKeydown(event) {
  if (els.overlay.hidden) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeOverlay();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusable = Array.from(
    els.sheet.querySelectorAll(
      'button:not([disabled]):not([hidden]), [href], [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => element.getClientRects().length > 0);

  if (!focusable.length) {
    event.preventDefault();
    els.sheet.focus({ preventScroll: true });
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey) {
    if (document.activeElement === first || !els.sheet.contains(document.activeElement)) {
      event.preventDefault();
      last.focus();
    }
    return;
  }

  if (document.activeElement === last || !els.sheet.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
  }
}

function init() {
  renderHotBrands();
  els.form.addEventListener("submit", handleSubmit);
  els.input.addEventListener("input", () => {
    if (els.message.textContent) {
      setMessage("");
    }
  });
  els.veil.addEventListener("click", closeOverlay);
  els.closeButton.addEventListener("click", closeOverlay);
  els.backButton.addEventListener("click", goBack);
  els.reportView.addEventListener("click", handleReportClick);
  document.addEventListener("keydown", handleDialogKeydown);
}

init();
