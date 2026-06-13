const diagnostic = {
  title: "ギフター称号診断",
  dimensions: [
    {
      key: "recognition",
      left: "R",
      right: "S",
      leftName: "認知",
      rightName: "応援",
      color: "#21c7b6",
      description: "配信者に気づいてほしいか、それとも純粋に支えたいか。"
    },
    {
      key: "visibility",
      left: "O",
      right: "H",
      leftName: "オープン",
      rightName: "ひっそり",
      color: "#ff6b57",
      description: "見える形で参加したいか、静かに支えたいか。"
    },
    {
      key: "emotion",
      left: "E",
      right: "C",
      leftName: "感情",
      rightName: "クール",
      color: "#f2b84b",
      description: "愛着や気分で動くか、タイミングや分析で動くか。"
    },
    {
      key: "participation",
      left: "B",
      right: "A",
      leftName: "バトル",
      rightName: "空気感",
      color: "#8f7cff",
      description: "競争や順位を楽しむか、居心地やコミュニティを大切にするか。"
    }
  ],
  questions: [
    {
      text: "ギフトを送ったあと、一番うれしいのは？",
      options: [
        { label: "配信者が反応して、自分の名前を呼んでくれる。", scores: { R: 2, O: 1 } },
        { label: "自分の応援で、枠の空気が少し温かくなる。", scores: { S: 2, A: 1 } },
        { label: "ここぞというタイミングでバトルの流れが変わる。", scores: { C: 1, B: 2 } }
      ]
    },
    {
      text: "理想のギフトタイミングは？",
      options: [
        { label: "みんなの記憶に残る、見える大きな一撃。", scores: { O: 2, R: 1, B: 1 } },
        { label: "配信者が少し落ちている時に、そっと送る応援。", scores: { H: 2, S: 1, E: 1 } },
        { label: "枠の空気を安定させる、無理のない継続支援。", scores: { S: 1, A: 2, C: 1 } }
      ]
    },
    {
      text: "配信者があなたのギフトに気づかなかった時、あなたは？",
      options: [
        { label: "平気なふりをしつつ、正直ちょっと気になる。", scores: { R: 2, E: 1 } },
        { label: "役に立ったなら、そこまで気にしない。", scores: { S: 2, C: 1 } },
        { label: "傾向として覚えておき、次からタイミングを変える。", scores: { C: 2, H: 1 } }
      ]
    },
    {
      text: "ランキングイベント中、あなたがしがちな動きは？",
      options: [
        { label: "接戦になった瞬間、一気に入る。", scores: { B: 2, E: 1, O: 1 } },
        { label: "効くタイミングを見て、使いどころを考える。", scores: { B: 1, C: 2 } },
        { label: "イベントで枠の雰囲気が壊れないように支える。", scores: { A: 2, S: 1 } }
      ]
    },
    {
      text: "自分が応援していることは、どれくらい見えていてほしい？",
      options: [
        { label: "自分もこの枠の一員だと、ちゃんと見えていてほしい。", scores: { O: 2, R: 1 } },
        { label: "認知はうれしいけど、毎回目立ちたいわけではない。", scores: { R: 1, H: 1, E: 1 } },
        { label: "表に出るより、裏で役に立てるほうが落ち着く。", scores: { H: 2, S: 1 } }
      ]
    },
    {
      text: "もう一度ギフトを送ろうと思うきっかけは？",
      options: [
        { label: "感情が動く瞬間や、配信者への愛着。", scores: { E: 2, S: 1 } },
        { label: "反応が返ってきて、やりとりが盛り上がる感覚。", scores: { R: 1, O: 1, E: 1 } },
        { label: "タイミング、目標、順位、コスパなどの理由。", scores: { C: 2, B: 1 } }
      ]
    },
    {
      text: "人が多い配信では、自然とどの役回りになる？",
      options: [
        { label: "場のテンションを上げる人。", scores: { O: 1, E: 1, A: 1 } },
        { label: "配信者がしんどくならないよう守る人。", scores: { S: 2, A: 1 } },
        { label: "数字や状況を見ている人。", scores: { C: 2, B: 1, H: 1 } }
      ]
    },
    {
      text: "言われたら一番うれしい言葉は？",
      options: [
        { label: "あのバトル、あなたが救ったね。", scores: { B: 2, R: 1 } },
        { label: "あなたがいると、このコミュニティが安心する。", scores: { A: 2, S: 1 } },
        { label: "いつもタイミングがうまいよね。", scores: { C: 2, H: 1 } }
      ]
    },
    {
      text: "ギフト予算が限られているなら、どう使いたい？",
      options: [
        { label: "記憶に残る一回に使いたい。", scores: { R: 1, O: 1, B: 1 } },
        { label: "継続的に支えられるよう分散したい。", scores: { S: 2, A: 1 } },
        { label: "重要な場面まで温存したい。", scores: { C: 2, B: 1 } }
      ]
    },
    {
      text: "あなたのギフト面の弱点に近いのは？",
      options: [
        { label: "認知目的じゃないと言いながら、反応を追ってしまう。", scores: { R: 2, E: 1 } },
        { label: "静かに支えすぎて、察してほしい気持ちが出る。", scores: { H: 2, S: 1 } },
        { label: "人のいる枠を、ついスコアボードとして見てしまう。", scores: { C: 1, B: 2 } }
      ]
    }
  ],
  types: {
    ROEB: {
      name: "ヒーローギフター",
      icon: "⚡",
      palette: ["#21c7b6", "#f2b84b"],
      description: "感情のこもった応援を、バトルの勢いに変える目立つ流れ作り役。",
      strengths: ["記憶に残る存在感", "感情を動かす力", "枠を一気に盛り上げられる"],
      weaknesses: ["反応を追いがち", "熱くなると使いすぎる", "認知されないと落ちやすい"],
      tendencies: ["大きく見えるギフト", "バトル救済", "リアクション重視の一撃"]
    },
    ROEA: {
      name: "エモーショナルサポーター",
      icon: "💬",
      palette: ["#21c7b6", "#ff8f70"],
      description: "配信者に「ちゃんと見ているよ」と伝える、温度のある見える応援者。",
      strengths: ["愛着の表現がうまい", "枠の士気を上げる", "印象に残りやすい"],
      weaknesses: ["無反応を個人的に受け取りやすい", "気分で送ってしまう", "感情の返報を求めやすい"],
      tendencies: ["慰めのギフト", "コメント連動ギフト", "見える形の励まし"]
    },
    ROCB: {
      name: "タクティカルコマンダー",
      icon: "🎯",
      palette: ["#2fb8ff", "#f2b84b"],
      description: "ギフトをタイミング、圧、実行力で動かす、見える戦略プレイヤー。",
      strengths: ["タイミングが鋭い", "バトル状況を読める", "指揮官のような存在感"],
      weaknesses: ["場をコントロールしすぎる", "空気を見落とすことがある", "スコア至上になりやすい"],
      tendencies: ["時間指定の押し上げ", "順位防衛", "イベント特化ギフト"]
    },
    ROCA: {
      name: "プロデューサー",
      icon: "🧭",
      palette: ["#44d4a8", "#6e8cff"],
      description: "ギフトで流れ、テンポ、空気を設計する、見える進行役。",
      strengths: ["枠の方向づけがうまい", "判断のバランスが良い", "混乱させずに影響力を出せる"],
      weaknesses: ["管理しすぎる", "周囲にも段取りを求めがち", "計算っぽく見えることがある"],
      tendencies: ["テンポ調整ギフト", "企画的な盛り上げ", "目標に沿った応援"]
    },
    RHEB: {
      name: "隠れ情熱型",
      icon: "🔥",
      palette: ["#ef476f", "#f2b84b"],
      description: "普段は静かでも、感情の爆発でバトルを変える内燃型サポーター。",
      strengths: ["意外性のあるインパクト", "深い愛着", "強い忠誠心"],
      weaknesses: ["気持ちを溜め込みやすい", "急に衝動的になる", "周囲から読まれにくい"],
      tendencies: ["突然の大きなギフト", "密かな忠誠", "ピンチ時の一撃"]
    },
    RHEA: {
      name: "エモーショナルロイヤリスト",
      icon: "🫶",
      palette: ["#ef476f", "#21c7b6"],
      description: "派手さよりも、個人的で本物のつながりを求める静かな認知派。",
      strengths: ["静かな献身", "感情の機微に敏感", "長期的に支えられる"],
      weaknesses: ["見られていないと感じやすい", "察してほしくなる", "距離感の変化に敏感"],
      tendencies: ["やさしい継続ギフト", "記念日的なタイミング", "個人的な励まし"]
    },
    RHCB: {
      name: "戦略シャドウ",
      icon: "♟",
      palette: ["#6e8cff", "#f2b84b"],
      description: "注目より成果を選ぶ、裏側の戦術家。",
      strengths: ["プレッシャー下でも冷静", "使い方が効率的", "バトルの理解が深い"],
      weaknesses: ["距離があるように見える", "説明が足りない", "警戒心が強くなりやすい"],
      tendencies: ["終盤の一手", "隠れた救済", "効率重視のギフト"]
    },
    RHCA: {
      name: "静かな認知欲型",
      icon: "🔎",
      palette: ["#8f7cff", "#44d4a8"],
      description: "中心には立ちたくないけれど、ちゃんと気づかれたい繊細な支援者。",
      strengths: ["品のあるタイミング", "空気を読む力", "安定した存在感"],
      weaknesses: ["本音が伝わりにくい", "見落とされると引きずる", "期待を隠しがち"],
      tendencies: ["小さく意味のあるギフト", "低姿勢の参加", "空気を見た応援"]
    },
    SOEB: {
      name: "チアリーダー",
      icon: "📣",
      palette: ["#ff6b57", "#f2b84b"],
      description: "みんなを巻き込み、枠のテンションを上げるオープンな応援役。",
      strengths: ["熱量が伝染する", "コミュニティを元気にする", "気前のよさがある"],
      weaknesses: ["無理をしがち", "流れに飲まれやすい", "境界線を曖昧にしやすい"],
      tendencies: ["盛り上げギフト", "みんなで沸く瞬間", "お祝いの連投"]
    },
    SOEA: {
      name: "コミュニティサポーター",
      icon: "🌐",
      palette: ["#21c7b6", "#ff6b57"],
      description: "ギフトを通じて、枠そのものを強くする見えるケア役。",
      strengths: ["迎え入れる雰囲気", "信頼できる温かさ", "コミュニティへの忠誠"],
      weaknesses: ["背負い込みやすい", "平和維持のために送ってしまう", "健全な上限が必要"],
      tendencies: ["歓迎ギフト", "安心感のある継続支援", "配信者の士気サポート"]
    },
    SOCB: {
      name: "アナリストサポーター",
      icon: "📊",
      palette: ["#2fb8ff", "#f2b84b"],
      description: "応援心と戦略的なタイミングを両立する、見える分析支援者。",
      strengths: ["役に立つ戦略", "リソース管理", "判断が明確"],
      weaknesses: ["冷たく聞こえることがある", "感情を軽視しがち", "圧をかける動きになりやすい"],
      tendencies: ["データを見たギフト", "目標押し上げ", "予算を意識したバトル"]
    },
    SOCA: {
      name: "空気感ガーディアン",
      icon: "🛡",
      palette: ["#44d4a8", "#8f7cff"],
      description: "居心地、流れ、コミュニティの温度を守る見える安定役。",
      strengths: ["空気を守る力", "大人の応援", "人間関係の勘が良い"],
      weaknesses: ["競争を避けすぎる", "枠の緊張を受け取りやすい", "責任を感じすぎる"],
      tendencies: ["空気を救うギフト", "やさしい公開支援", "場をリセットする一手"]
    },
    SHEB: {
      name: "サイレントバースト",
      icon: "💥",
      palette: ["#ef476f", "#f2b84b"],
      description: "感情と競争が重なった瞬間に動く、静かな爆発型。",
      strengths: ["爆発力がある", "忠誠心が強い", "予想外の救済ができる"],
      weaknesses: ["衝動リスクがある", "普段の意思表示が少ない", "自分でも驚く動きをしがち"],
      tendencies: ["突然のバトルギフト", "無言の忠誠", "感情的な救済"]
    },
    SHEA: {
      name: "コージーコンパニオン",
      icon: "☕",
      palette: ["#21c7b6", "#d99bff"],
      description: "近さと居心地を守るためにギフトを送る、やさしい静かな伴走者。",
      strengths: ["落ち着く存在", "継続的なケア", "感情に根ざした忠誠"],
      weaknesses: ["傷つくと黙って離れやすい", "自分の欲求を小さく見せる", "目立つ衝突を避ける"],
      tendencies: ["小さな安定ギフト", "癒やしの支援", "深夜枠への忠誠"]
    },
    SHCB: {
      name: "バックライン戦略家",
      icon: "🧩",
      palette: ["#2fb8ff", "#44d4a8"],
      description: "慎重で効率的な支援で配信者を助ける、静かな計画型。",
      strengths: ["予算管理がうまい", "長期視点がある", "低トラブルで信頼できる"],
      weaknesses: ["感情的な距離を感じさせる", "最適化しすぎる", "評価を求めなさすぎる"],
      tendencies: ["効率的なタイミング", "目標の追跡", "裏方支援"]
    },
    SHCA: {
      name: "静かなパトロン",
      icon: "🏛",
      palette: ["#8f7cff", "#44d4a8"],
      description: "目立つ必要はなく、配信者の世界を静かに支える後援者。",
      strengths: ["安定した寛大さ", "距離感への配慮", "品のある支援"],
      weaknesses: ["存在が見えなさすぎる", "境界線を言葉にしにくい", "感情が読まれにくい"],
      tendencies: ["静かな継続ギフト", "空気の維持", "長期的な後援"]
    }
  }
};

const state = {
  index: 0,
  gender: null,
  scores: { R: 0, S: 0, O: 0, H: 0, E: 0, C: 0, B: 0, A: 0 },
  answers: []
};

const axisGrid = document.querySelector("#axisGrid");
const typeGrid = document.querySelector("#typeGrid");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const questionCounter = document.querySelector("#questionCounter");
const progressFill = document.querySelector("#progressFill");
const questionText = document.querySelector("#questionText");
const answerGrid = document.querySelector("#answerGrid");

function init() {
  renderAxes();
  renderTypePreview();
  document.querySelectorAll("[data-start]").forEach((button) => {
    button.addEventListener("click", startQuiz);
  });
  document.querySelector("#resetQuiz").addEventListener("click", startQuiz);
  document.querySelector("#downloadCard").addEventListener("click", downloadCard);
  document.querySelector("#shareResult").addEventListener("click", shareResult);
}

function renderAxes() {
  axisGrid.innerHTML = diagnostic.dimensions
    .map(
      (axis) => `
        <article class="axis-card">
          <span class="axis-code" style="background:${axis.color}">${axis.left}/${axis.right}</span>
          <h3>${axis.leftName} 対 ${axis.rightName}</h3>
          <p>${axis.description}</p>
          <p><strong>${axis.left} = ${axis.leftName}</strong><strong>${axis.right} = ${axis.rightName}</strong></p>
        </article>
      `
    )
    .join("");
}

function renderTypePreview() {
  typeGrid.innerHTML = Object.entries(diagnostic.types)
    .map(([code, type]) => typeCard(code, type))
    .join("");
}

function typeCard(code, type) {
  return `
    <article class="type-card" style="--type-a:${type.palette[0]}; --type-b:${type.palette[1]}">
      <div class="type-image-pair">
        <img class="type-image" src="${pictureImagePath(code, "female")}" alt="${code} ${type.name} 女性のキャラクター" loading="lazy">
        <img class="type-image" src="${pictureImagePath(code, "male")}" alt="${code} ${type.name} 男性のキャラクター" loading="lazy">
      </div>
      <div class="type-top">
        <span class="type-code">${code}</span>
        <span class="type-icon" aria-hidden="true">${type.icon}</span>
      </div>
      <h3>${type.name}</h3>
      <p>${type.description}</p>
    </article>
  `;
}

function startQuiz() {
  state.index = 0;
  state.gender = null;
  state.answers = [];
  state.scores = { R: 0, S: 0, O: 0, H: 0, E: 0, C: 0, B: 0, A: 0 };
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderGenderQuestion();
  quiz.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderGenderQuestion() {
  const total = diagnostic.questions.length + 1;
  questionCounter.textContent = `1 / ${total} 性別選択`;
  progressFill.style.width = "0%";
  questionText.textContent = "診断結果に表示する画像の性別を選んでください。";
  answerGrid.innerHTML = `
    <button class="answer-option gender-option" type="button" data-gender="male">
      <span>男</span>
      <strong>男性の画像で表示する</strong>
    </button>
    <button class="answer-option gender-option" type="button" data-gender="female">
      <span>女</span>
      <strong>女性の画像で表示する</strong>
    </button>
  `;
  answerGrid.querySelectorAll("[data-gender]").forEach((button) => {
    button.addEventListener("click", () => chooseGender(button.dataset.gender));
  });
}

function chooseGender(gender) {
  state.gender = gender;
  renderQuestion();
}

function renderQuestion() {
  const question = diagnostic.questions[state.index];
  const total = diagnostic.questions.length + 1;
  questionCounter.textContent = `${state.index + 2} / ${total} 問目`;
  progressFill.style.width = `${((state.index + 1) / total) * 100}%`;
  questionText.textContent = question.text;
  answerGrid.innerHTML = question.options
    .map(
      (option, index) => `
        <button class="answer-option" type="button" data-answer="${index}">
          <span>${index + 1}</span>
          <strong>${option.label}</strong>
        </button>
      `
    )
    .join("");
  answerGrid.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.answer)));
  });
}

function chooseAnswer(optionIndex) {
  const question = diagnostic.questions[state.index];
  const option = question.options[optionIndex];
  Object.entries(option.scores).forEach(([key, value]) => {
    state.scores[key] += value;
  });
  state.answers.push({ question: question.text, option: option.label, scores: option.scores });
  state.index += 1;

  if (state.index >= diagnostic.questions.length) {
    progressFill.style.width = "100%";
    showResult();
    return;
  }

  renderQuestion();
}

function calculateCode() {
  return diagnostic.dimensions
    .map((axis) => {
      const leftScore = state.scores[axis.left];
      const rightScore = state.scores[axis.right];
      return leftScore >= rightScore ? axis.left : axis.right;
    })
    .join("");
}

function showResult() {
  const code = calculateCode();
  const type = diagnostic.types[code];
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  document.querySelector("#resultCode").textContent = code;
  document.querySelector("#resultName").textContent = type.name;
  document.querySelector("#resultDescription").textContent = type.description;
  const resultImage = document.querySelector("#resultImage");
  resultImage.src = resultImagePath(code);
  resultImage.alt = `${code} ${type.name} ${genderLabel()}のキャラクター`;
  document.querySelector("#resultArt").style.setProperty("--type-a", type.palette[0]);
  document.querySelector("#resultArt").style.setProperty("--type-b", type.palette[1]);
  document.querySelector("#strengthsList").innerHTML = listItems(type.strengths);
  document.querySelector("#weaknessesList").innerHTML = listItems(type.weaknesses);
  document.querySelector("#tendenciesList").innerHTML = listItems(type.tendencies);
  document.querySelector("#traitRow").innerHTML = diagnostic.dimensions
    .map((axis) => {
      const letter = code.includes(axis.left) ? axis.left : axis.right;
      const label = letter === axis.left ? axis.leftName : axis.rightName;
      return `<span>${letter}: ${label}</span>`;
    })
    .concat(`<span>画像: ${genderLabel()}</span>`)
    .join("");
  document.querySelector("#personalComment").textContent = createPersonalComment(code);
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function typeImagePath(code) {
  return `assets/types/${code}.png`;
}

function resultImagePath(code) {
  return pictureImagePath(code, state.gender);
}

function pictureImagePath(code, gender) {
  const suffix = gender === "male" ? "男" : "女";
  const fileName = code === "ROEA" && suffix === "女" ? "ROEA 女.png" : `${code}${suffix}.png`;
  return `assets/picture/${fileName}`;
}

function genderLabel() {
  return state.gender === "male" ? "男性" : "女性";
}

function createPersonalComment(code) {
  const has = (letter) => code.includes(letter);
  const comments = [];

  if (has("R") && has("H")) {
    comments.push("あなたは「認知が目的じゃない」と言いながら、誰が気づいてくれたかはかなり覚えているタイプです。");
  } else if (has("R")) {
    comments.push("あなたは、ギフトを送ってよかったと思えたリアクションをかなり具体的に覚えているはずです。");
  } else {
    comments.push("あなたは自分の名前が中心に出ることより、配信者がちゃんと支えられているかを重視します。");
  }

  if (has("E") && has("B")) {
    comments.push("感情が動いたところに接戦が重なると、普段のブレーキが急に弱くなります。");
  } else if (has("C") && has("A")) {
    comments.push("あなたは静かに空気を読み、枠全体の流れを守るように使いどころを選びます。");
  } else if (has("C")) {
    comments.push("あなたにとってギフトは、タイミング、効果、リソース配分を含む判断です。");
  } else {
    comments.push("あなたのギフトは、愛着、気分、個人的なつながりの感覚と強く結びついています。");
  }

  return comments.join(" ");
}

async function shareResult() {
  const code = document.querySelector("#resultCode").textContent;
  const name = document.querySelector("#resultName").textContent;
  const text = `ギフター称号診断で「${code} ${name}」になりました。`;
  const button = document.querySelector("#shareResult");
  const previous = button.textContent;

  try {
    if (navigator.share) {
      await navigator.share({ title: diagnostic.title, text, url: window.location.href });
      return;
    }

    await navigator.clipboard.writeText(`${text} ${window.location.href}`);
    button.textContent = "コピーしました";
  } catch (error) {
    button.textContent = "共有できません";
  }

  setTimeout(() => {
    button.textContent = previous;
  }, 1600);
}

async function downloadCard() {
  const code = document.querySelector("#resultCode").textContent;
  const type = diagnostic.types[code];
  const canvas = document.querySelector("#shareCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1080;
  canvas.height = 1620;
  const width = canvas.width;
  const height = canvas.height;
  const margin = 64;
  const contentWidth = width - margin * 2;

  ctx.clearRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, type.palette[0]);
  gradient.addColorStop(1, type.palette[1]);
  const character = await loadCanvasImage(resultImagePath(code));
  drawCoverImage(ctx, character, 0, 0, width, height);

  const imageShade = ctx.createLinearGradient(0, 0, 0, height);
  imageShade.addColorStop(0, "rgba(16,17,20,0.14)");
  imageShade.addColorStop(0.34, "rgba(16,17,20,0.18)");
  imageShade.addColorStop(0.58, "rgba(16,17,20,0.74)");
  imageShade.addColorStop(1, "rgba(16,17,20,0.96)");
  ctx.fillStyle = imageShade;
  ctx.fillRect(0, 0, width, height);

  const sideShade = ctx.createLinearGradient(0, 0, width, 0);
  sideShade.addColorStop(0, "rgba(16,17,20,0.7)");
  sideShade.addColorStop(0.38, "rgba(16,17,20,0.2)");
  sideShade.addColorStop(1, "rgba(16,17,20,0.54)");
  ctx.fillStyle = sideShade;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(255,255,255,0.13)";
  for (let i = 0; i < 12; i += 1) {
    ctx.beginPath();
    ctx.arc(86 + i * 78, 80 + (i % 5) * 114, 48, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = gradient;
  roundRect(ctx, margin, 54, 288, 56, 8);
  ctx.fill();
  ctx.font = "900 28px 'Yu Gothic', 'Meiryo', Arial";
  ctx.fillStyle = "#101114";
  ctx.fillText("ギフター称号診断", margin + 24, 92);

  ctx.fillStyle = "#f2b84b";
  ctx.font = "900 132px Arial";
  ctx.fillText(code, margin, 600);
  ctx.fillStyle = "#f5f2ea";
  fitCanvasText(ctx, type.name, margin, 672, contentWidth, 58, 38, "900");

  ctx.fillStyle = "rgba(16,17,20,0.76)";
  roundRect(ctx, 40, 718, width - 80, 840, 8);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.14)";
  ctx.lineWidth = 2;
  roundRect(ctx, 40, 718, width - 80, 840, 8);
  ctx.stroke();

  ctx.fillStyle = "#b7b1a5";
  setCanvasFont(ctx, 32, "500");
  wrapCanvasTextWithFont(ctx, type.description, margin, 802, contentWidth, 44, 3);

  const traitText = diagnostic.dimensions
    .map((axis) => {
      const letter = code.includes(axis.left) ? axis.left : axis.right;
      const label = letter === axis.left ? axis.leftName : axis.rightName;
      return `${letter}:${label}`;
    })
    .concat(genderLabel())
    .join("  /  ");
  ctx.fillStyle = "#f5f2ea";
  setCanvasFont(ctx, 26, "800");
  wrapCanvasTextWithFont(ctx, traitText, margin, 956, contentWidth, 34, 2);

  drawCanvasSection(ctx, "強み", type.strengths, margin, 1036, contentWidth, type.palette[0]);
  drawCanvasSection(ctx, "注意点", type.weaknesses, margin, 1202, contentWidth, "#ffdf7b");
  drawCanvasSection(ctx, "ギフト傾向", type.tendencies, margin, 1368, contentWidth, type.palette[1]);

  ctx.fillStyle = "#f5f2ea";
  ctx.globalAlpha = 0.78;
  setCanvasFont(ctx, 22, "800");
  ctx.fillText("shindan result card", margin, 1588);
  ctx.globalAlpha = 1;

  const link = document.createElement("a");
  link.download = `gifter-type-${code}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function drawCanvasSection(ctx, title, items, x, y, width, accent) {
  ctx.fillStyle = "rgba(16,17,20,0.58)";
  roundRect(ctx, x, y, width, 132, 8);
  ctx.fill();
  ctx.fillStyle = accent;
  roundRect(ctx, x, y, 8, 132, 4);
  ctx.fill();
  ctx.fillStyle = "#f5f2ea";
  setCanvasFont(ctx, 30, "900");
  ctx.fillText(title, x + 28, y + 42);
  ctx.fillStyle = "#d7d1c5";
  setCanvasFont(ctx, 25, "600");
  wrapCanvasTextWithFont(ctx, items.slice(0, 3).join(" / "), x + 28, y + 84, width - 56, 32, 2);
}

function setCanvasFont(ctx, size, weight) {
  ctx.font = `${weight} ${size}px 'Yu Gothic', 'Meiryo', Arial`;
}

function wrapCanvasTextWithFont(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = Array.from(text);
  let line = "";
  let lines = 0;

  words.forEach((word) => {
    if (lines >= maxLines) {
      return;
    }

    const testLine = `${line}${word}`;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      if (lines === maxLines - 1) {
        ctx.fillText(trimToWidth(ctx, `${line}…`, maxWidth), x, y);
        lines += 1;
        return;
      }

      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
      lines += 1;
    } else {
      line = testLine;
    }
  });

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y);
  }
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const maxLines = arguments.length > 5 ? arguments[5] : Infinity;
  ctx.font = "400 28px 'Yu Gothic', 'Meiryo', Arial";
  const words = Array.from(text);
  let line = "";
  let lines = 0;

  words.forEach((word) => {
    if (lines >= maxLines) {
      return;
    }

    const testLine = `${line}${word}`;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      if (lines === maxLines - 1) {
        ctx.fillText(trimToWidth(ctx, `${line}…`, maxWidth), x, y);
        lines += 1;
        return;
      }

      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
      lines += 1;
    } else {
      line = testLine;
    }
  });

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y);
  }
}

function fitCanvasText(ctx, text, x, y, maxWidth, startSize, minSize, weight) {
  let size = startSize;

  do {
    ctx.font = `${weight} ${size}px 'Yu Gothic', 'Meiryo', Arial`;
    if (ctx.measureText(text).width <= maxWidth) {
      ctx.fillText(text, x, y);
      return;
    }
    size -= 2;
  } while (size >= minSize);

  ctx.fillText(trimToWidth(ctx, `${text}…`, maxWidth), x, y);
}

function trimToWidth(ctx, text, maxWidth) {
  let output = text;

  while (ctx.measureText(output).width > maxWidth && output.length > 1) {
    output = `${output.slice(0, -2)}…`;
  }

  return output;
}

function loadCanvasImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", reject);
    image.src = src;
  });
}

function drawCoverImage(ctx, image, x, y, width, height) {
  const sourceRatio = image.width / image.height;
  const targetRatio = width / height;
  let sourceWidth = image.width;
  let sourceHeight = image.height;
  let sourceX = 0;
  let sourceY = 0;

  if (sourceRatio > targetRatio) {
    sourceWidth = image.height * targetRatio;
    sourceX = (image.width - sourceWidth) / 2;
  } else {
    sourceHeight = image.width / targetRatio;
    sourceY = (image.height - sourceHeight) / 2;
  }

  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

init();
