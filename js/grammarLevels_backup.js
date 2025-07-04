// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
// 文法關卡字庫
const grammarLevels = {
  // 關卡1：現在式BE動詞肯定句
  level1: {
    title: "現在式BE動詞肯定句",
    description: "學習 am, is, are 的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我是學生。"
      },
      {
        type: "fill",
        question: "You ___ my friend.",
        answer: "are",
        explanation: "第二人稱用 are",
        translation: "你是我的朋友。"
      },
      {
        type: "fill",
        question: "He ___ a teacher.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "他是一位老師。"
      },
      {
        type: "fill",
        question: "She ___ beautiful.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她很漂亮。"
      },
      {
        type: "fill",
        question: "It ___ a cat.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "那是一隻貓。"
      },
      {
        type: "fill",
        question: "We ___ students.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們是學生。"
      },
      {
        type: "fill",
        question: "They ___ happy.",
        answer: "are",
        explanation: "第三人稱複數用 are",
        translation: "他們很快樂。"
      },
      {
        type: "choice",
        question: "Tom and Jerry ___ friends.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "Tom 和 Jerry 是朋友。"
      },
      {
        type: "choice",
        question: "My mother ___ a nurse.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "我母親是一位護士。"
      },
      {
        type: "choice",
        question: "The weather ___ cold today.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "今天天氣很冷。"
      },
      {
        type: "fill",
        question: "My name ___ John.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我的名字是 John。"
      },
      {
        type: "fill",
        question: "You and I ___ classmates.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "你和我是同學。"
      },
      {
        type: "choice",
        question: "The book ___ interesting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這本書很有趣。"
      },
      {
        type: "fill",
        question: "My parents ___ doctors.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的父母是醫生。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "Her hair ___ long.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "她的頭髮很長。"
      },
      {
        type: "choice",
        question: "The sky ___ blue.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "天空是藍色的。"
      },
      {
        type: "fill",
        question: "My brothers ___ tall.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "我的兄弟們很高。"
      },
      {
        type: "choice",
        question: "The movie ___ exciting.",
        options: ["am", "is", "are"],
        answer: 1,
        explanation: "第三人稱單數用 is",
        translation: "這部電影很刺激。"
      },
      {
        type: "fill",
        question: "I ___ from Taiwan.",
        answer: "am",
        explanation: "第一人稱單數用 am",
        translation: "我來自台灣。"
      }
    ]
  },

  // 關卡2：現在式BE動詞否定句
  level2: {
    title: "現在式BE動詞否定句",
    description: "學習 am not, is not, are not 的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a teacher.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不是老師。"
      },
      {
        type: "fill",
        question: "You ___ late.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你不遲到。"
      },
      {
        type: "fill",
        question: "He ___ busy.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不忙。"
      },
      {
        type: "fill",
        question: "She ___ tired.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "她不累。"
      },
      {
        type: "fill",
        question: "It ___ expensive.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "它不貴。"
      },
      {
        type: "choice",
        question: "We ___ ready.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第一人稱複數否定用 are not",
        translation: "我們還沒準備好。"
      },
      {
        type: "choice",
        question: "They ___ here.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "第三人稱複數否定用 are not",
        translation: "他們沒在這裡。"
      },
      {
        type: "fill",
        question: "My sister ___ at home.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "我姊姊不在家。"
      },
      {
        type: "choice",
        question: "The weather ___ nice.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ coming.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的朋友們不會來。"
      },
      {
        type: "choice",
        question: "The food ___ hot.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "這食物不熱。"
      },
      {
        type: "fill",
        question: "I ___ hungry.",
        answer: "am not",
        explanation: "第一人稱單數否定用 am not",
        translation: "我不餓。"
      },
      {
        type: "choice",
        question: "The students ___ quiet.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "學生們不安靜。"
      },
      {
        type: "fill",
        question: "Her eyes ___ blue.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "她的眼睛不是藍色的。"
      },
      {
        type: "choice",
        question: "The movie ___ boring.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那部電影不無聊。"
      },
      {
        type: "fill",
        question: "My parents ___ working.",
        answer: "are not",
        explanation: "複數主詞否定用 are not",
        translation: "我的父母沒有在工作。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeping.",
        options: ["am not", "is not", "are not"],
        answer: 1,
        explanation: "第三人稱單數否定用 is not",
        translation: "那隻貓沒有在睡覺。"
      },
      {
        type: "fill",
        question: "You ___ wrong.",
        answer: "are not",
        explanation: "第二人稱否定用 are not",
        translation: "你沒有錯。"
      },
      {
        type: "choice",
        question: "The books ___ heavy.",
        options: ["am not", "is not", "are not"],
        answer: 2,
        explanation: "複數主詞否定用 are not",
        translation: "這些書不重。"
      },
      {
        type: "fill",
        question: "He ___ my brother.",
        answer: "is not",
        explanation: "第三人稱單數否定用 is not",
        translation: "他不是我兄弟。"
      }
    ]
  },

  // 關卡3：現在式BE動詞問句
  level3: {
    title: "現在式BE動詞問句",
    description: "學習 am, is, are 的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you a student?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你是學生嗎？"
      },
      {
        type: "fill",
        question: "___ he your friend?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你的朋友嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "她漂亮嗎？"
      },
      {
        type: "fill",
        question: "___ it expensive?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "它貴嗎？"
      },
      {
        type: "choice",
        question: "___ we late?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第一人稱複數問句用 Are",
        translation: "我們遲到了嗎？"
      },
      {
        type: "choice",
        question: "___ they coming?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "第三人稱複數問句用 Are",
        translation: "他們來嗎？"
      },
      {
        type: "fill",
        question: "___ your mother a teacher?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "你媽媽是老師嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends here?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的朋友在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ the food hot?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "這食物熱嗎？"
      },
      {
        type: "fill",
        question: "___ I right?",
        answer: "Am",
        explanation: "第一人稱單數問句用 Am",
        translation: "我對嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "學生們安靜嗎？"
      },
      {
        type: "fill",
        question: "___ her eyes blue?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "她的眼睛是藍色的嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ your parents working?",
        answer: "Are",
        explanation: "複數主詞問句用 Are",
        translation: "你的父母在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the cat sleeping?",
        options: ["Am", "Is", "Are"],
        answer: 1,
        explanation: "第三人稱單數問句用 Is",
        translation: "那隻貓在睡覺嗎？"
      },
      {
        type: "fill",
        question: "___ you tired?",
        answer: "Are",
        explanation: "第二人稱問句用 Are",
        translation: "你累嗎？"
      },
      {
        type: "choice",
        question: "___ the books heavy?",
        options: ["Am", "Is", "Are"],
        answer: 2,
        explanation: "複數主詞問句用 Are",
        translation: "這些書重嗎？"
      },
      {
        type: "fill",
        question: "___ he your brother?",
        answer: "Is",
        explanation: "第三人稱單數問句用 Is",
        translation: "他是你兄弟嗎？"
      }
    ]
  },

  // 關卡4：名詞所有格
  level4: {
    title: "名詞所有格",
    description: "學習名詞所有格的用法",
    questions: [
      {
        type: "fill",
        question: "This is ___ book.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的書。"
      },
      {
        type: "fill",
        question: "That is ___ car.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你的車。"
      },
      {
        type: "fill",
        question: "This is ___ house.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的房子。"
      },
      {
        type: "fill",
        question: "That is ___ bag.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的包包。"
      },
      {
        type: "choice",
        question: "This is ___ dog.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的狗。"
      },
      {
        type: "choice",
        question: "These are ___ books.",
        options: ["our", "ours"],
        answer: 0,
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的書。"
      },
      {
        type: "fill",
        question: "Those are ___ friends.",
        answer: "their",
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的朋友。"
      },
      {
        type: "choice",
        question: "This is ___ mother.",
        options: ["my", "mine"],
        answer: 0,
        explanation: "第一人稱所有格用 my",
        translation: "這是我母親。"
      },
      {
        type: "fill",
        question: "That is ___ father.",
        answer: "your",
        explanation: "第二人稱所有格用 your",
        translation: "那是你父親。"
      },
      {
        type: "choice",
        question: "This is ___ sister.",
        options: ["his", "her"],
        answer: 0,
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他妹妹。"
      },
      {
        type: "fill",
        question: "That is ___ brother.",
        answer: "her",
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她兄弟。"
      },
      {
        type: "choice",
        question: "This is ___ name.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的名字。"
      },
      {
        type: "fill",
        question: "These are ___ children.",
        answer: "our",
        explanation: "第一人稱複數所有格用 our",
        translation: "這些是我們的孩子。"
      },
      {
        type: "choice",
        question: "Those are ___ parents.",
        options: ["their", "theirs"],
        answer: 0,
        explanation: "第三人稱複數所有格用 their",
        translation: "那些是他們的父母。"
      },
      {
        type: "fill",
        question: "This is ___ school.",
        answer: "my",
        explanation: "第一人稱所有格用 my",
        translation: "這是我的學校。"
      },
      {
        type: "choice",
        question: "That is ___ teacher.",
        options: ["your", "yours"],
        answer: 0,
        explanation: "第二人稱所有格用 your",
        translation: "那是你老師。"
      },
      {
        type: "fill",
        question: "This is ___ cat.",
        answer: "his",
        explanation: "第三人稱男性所有格用 his",
        translation: "這是他的貓。"
      },
      {
        type: "choice",
        question: "That is ___ dog.",
        options: ["his", "her"],
        answer: 1,
        explanation: "第三人稱女性所有格用 her",
        translation: "那是她的狗。"
      },
      {
        type: "fill",
        question: "This is ___ toy.",
        answer: "its",
        explanation: "第三人稱中性所有格用 its",
        translation: "這是它的玩具。"
      }
    ]
  },

  // 關卡5：數字與名詞複數
  level5: {
    title: "數字與名詞複數",
    description: "學習基數詞以及名詞複數形式用法",
    questions: [
      // 基數詞填空（10 題）
      {
        type: "fill",
        question: "I ___ apples.",
        answer: "three",
        explanation: "基數詞表示數量",
        translation: "我有三個蘋果。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "基數詞表示數量",
        translation: "一週有七天。"
      },
      {
        type: "fill",
        question: "She has ___ cats.",
        answer: "two",
        explanation: "基數詞表示數量",
        translation: "她有兩隻貓。"
      },
      {
        type: "fill",
        question: "We need ___ chairs.",
        answer: "five",
        explanation: "基數詞表示數量",
        translation: "我們需要五把椅子。"
      },
      {
        type: "fill",
        question: "He buys ___ books every month.",
        answer: "six",
        explanation: "基數詞表示數量",
        translation: "他每個月買六本書。"
      },
      {
        type: "fill",
        question: "They own ___ cars.",
        answer: "four",
        explanation: "基數詞表示數量",
        translation: "他們有四輛車。"
      },
      {
        type: "fill",
        question: "My sister ate ___ bananas.",
        answer: "nine",
        explanation: "基數詞表示數量",
        translation: "我妹妹吃了九根香蕉。"
      },
      {
        type: "fill",
        question: "The teacher gave us ___ questions.",
        answer: "ten",
        explanation: "基數詞表示數量",
        translation: "老師給了我們十題問題。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "基數詞表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "fill",
        question: "We saw ___ birds in the park.",
        answer: "eight",
        explanation: "基數詞表示數量",
        translation: "我們在公園看到了八隻鳥。"
      },

      // 名詞複數選擇（10 題）
      {
        type: "choice",
        question: "They own two house___.",
        options: ["", "s"],
        answer: 1,
        explanation: "兩棟房子要用複數，加 -s",
        translation: "他們擁有兩棟房子。"
      },
      {
        type: "choice",
        question: "She bought five flower___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一朵要用複數，加 -s",
        translation: "她買了五朵花。"
      },
      {
        type: "choice",
        question: "They have three dog___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他們有三隻狗。"
      },
      {
        type: "choice",
        question: "He saw four cat___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一隻要用複數，加 -s",
        translation: "他看到了四隻貓。"
      },
      {
        type: "choice",
        question: "We read six book___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一本要用複數，加 -s",
        translation: "我們讀了六本書。"
      },
      {
        type: "choice",
        question: "The store sells ten computer___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一台要用複數，加 -s",
        translation: "商店賣十台電腦。"
      },
      {
        type: "choice",
        question: "My friend has eight friend___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一位要用複數，加 -s",
        translation: "我的朋友有八位朋友。"
      },
      {
        type: "choice",
        question: "We need seven chair___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一把要用複數，加 -s",
        translation: "我們需要七把椅子。"
      },
      {
        type: "choice",
        question: "She collected four stamp___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一枚要用複數，加 -s",
        translation: "她收集了四枚郵票。"
      },
      {
        type: "choice",
        question: "He owns five car___.",
        options: ["", "s"],
        answer: 1,
        explanation: "多於一輛要用複數，加 -s",
        translation: "他擁有五輛車。"
      }
    ]
  },

  // 關卡6：現在式一般動詞肯定句
  level6: {
    title: "現在式一般動詞肯定句",
    description: "學習一般動詞現在式的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ English every day.",
        answer: "study",
        explanation: "第一人稱用原形動詞",
        translation: "我每天學習英文。"
      },
      {
        type: "fill",
        question: "He ___ to school by bus.",
        answer: "goes",
        explanation: "第三人稱單數要加 s",
        translation: "他搭公車去學校。"
      },
      {
        type: "fill",
        question: "She ___ in a hospital.",
        answer: "works",
        explanation: "第三人稱單數要加 s",
        translation: "她在醫院工作。"
      },
      {
        type: "choice",
        question: "They ___ basketball after school.",
        options: ["play", "plays"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "他們放學後打籃球。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cook", "cooks"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ TV in the living room.",
        answer: "watch",
        explanation: "第一人稱複數用原形動詞",
        translation: "我們在客廳看電視。"
      },
      {
        type: "fill",
        question: "The cat ___ milk.",
        answer: "drinks",
        explanation: "第三人稱單數要加 s",
        translation: "那隻貓喝牛奶。"
      },
      {
        type: "choice",
        question: "You ___ very well.",
        options: ["dance", "dances"],
        answer: 0,
        explanation: "第二人稱用原形動詞",
        translation: "你跳舞跳得很好。"
      },
      {
        type: "fill",
        question: "My brother ___ computer games.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "我兄弟玩電腦遊戲。"
      },
      {
        type: "choice",
        question: "The students ___ their homework.",
        options: ["do", "does"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "學生們做他們的功課。"
      },
      {
        type: "fill",
        question: "I ___ coffee in the morning.",
        answer: "drink",
        explanation: "第一人稱用原形動詞",
        translation: "我早上喝咖啡。"
      },
      {
        type: "fill",
        question: "She ___ the piano beautifully.",
        answer: "plays",
        explanation: "第三人稱單數要加 s",
        translation: "她彈鋼琴彈得很美。"
      },
      {
        type: "choice",
        question: "My parents ___ in the garden.",
        options: ["work", "works"],
        answer: 0,
        explanation: "複數主詞用原形動詞",
        translation: "我的父母在花園工作。"
      },
      {
        type: "fill",
        question: "The dog ___ in the park.",
        answer: "runs",
        explanation: "第三人稱單數要加 s",
        translation: "那隻狗在公園跑步。"
      },
      {
        type: "choice",
        question: "Tom ___ brushing his teeth.",
        options: ["brush", "brushes"],
        answer: 1,
        explanation: "第三人稱單數要加 s",
        translation: "Tom 刷牙。"
      },
      {
        type: "fill",
        question: "We ___ having dinner.",
        answer: "are",
        explanation: "第一人稱複數用 are",
        translation: "我們正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The teacher ___ explaining the lesson.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "老師正在解釋課程。"
      },
      {
        type: "choice",
        question: "The children ___ playing.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "複數主詞用 are",
        translation: "孩子們正在玩。"
      },
      {
        type: "fill",
        question: "My sister ___ reading a book.",
        answer: "is",
        explanation: "第三人稱單數用 is",
        translation: "我姊姊正在讀書。"
      },
      {
        type: "choice",
        question: "You ___ doing well.",
        options: ["am", "is", "are"],
        answer: 2,
        explanation: "第二人稱用 are",
        translation: "你做得很好。"
      },
      {
        type: "fill",
        question: "The birds ___ singing.",
        answer: "are",
        explanation: "複數主詞用 are",
        translation: "鳥兒正在唱歌。"
      }
    ]
  },

  // 關卡7：一般動詞否定句
  level7: {
    title: "一般動詞否定句",
    description: "學習一般動詞現在式的否定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ like coffee.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不喜歡咖啡。"
      },
      {
        type: "fill",
        question: "He ___ speak French.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "他不說法語。"
      },
      {
        type: "fill",
        question: "She ___ work on weekends.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她週末不工作。"
      },
      {
        type: "choice",
        question: "They ___ play football.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "他們不踢足球。"
      },
      {
        type: "choice",
        question: "My brother ___ watch TV.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "我兄弟不看電視。"
      },
      {
        type: "fill",
        question: "We ___ eat meat.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不吃肉。"
      },
      {
        type: "fill",
        question: "The cat ___ like water.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻貓不喜歡水。"
      },
      {
        type: "choice",
        question: "You ___ understand this.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不理解這個。"
      },
      {
        type: "fill",
        question: "My sister ___ cook.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我姊姊不會煮飯。"
      },
      {
        type: "choice",
        question: "The students ___ study hard.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "學生們不用功讀書。"
      },
      {
        type: "fill",
        question: "I ___ smoke.",
        answer: "do not",
        explanation: "第一人稱否定用 do not",
        translation: "我不抽菸。"
      },
      {
        type: "fill",
        question: "She ___ drive a car.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "她不會開車。"
      },
      {
        type: "choice",
        question: "My parents ___ drink alcohol.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "我的父母不喝酒。"
      },
      {
        type: "fill",
        question: "The dog ___ bark at night.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "那隻狗晚上不叫。"
      },
      {
        type: "choice",
        question: "Tom ___ play the guitar.",
        options: ["do not", "does not"],
        answer: 1,
        explanation: "第三人稱單數否定用 does not",
        translation: "Tom 不會彈吉他。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies often.",
        answer: "do not",
        explanation: "第一人稱複數否定用 do not",
        translation: "我們不常去看電影。"
      },
      {
        type: "fill",
        question: "The teacher ___ speak Chinese.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "老師不說中文。"
      },
      {
        type: "choice",
        question: "The children ___ eat vegetables.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "複數主詞否定用 do not",
        translation: "孩子們不吃蔬菜。"
      },
      {
        type: "fill",
        question: "My friend ___ live in Taipei.",
        answer: "does not",
        explanation: "第三人稱單數否定用 does not",
        translation: "我的朋友不住在台北。"
      },
      {
        type: "choice",
        question: "You ___ need to worry.",
        options: ["do not", "does not"],
        answer: 0,
        explanation: "第二人稱否定用 do not",
        translation: "你不需要擔心。"
      },
      {
        type: "fill",
        question: "The birds ___ fly south in winter.",
        answer: "do not",
        explanation: "複數主詞否定用 do not",
        translation: "這些鳥冬天不往南飛。"
      }
    ]
  },

  // 關卡8：一般動詞問句
  level8: {
    title: "一般動詞問句",
    description: "學習一般動詞現在式的問句用法",
    questions: [
      {
        type: "fill",
        question: "___ you like coffee?",
        answer: "Do",
        explanation: "第二人稱問句用 Do",
        translation: "你喜歡咖啡嗎？"
      },
      {
        type: "fill",
        question: "___ he speak English?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "他說英文嗎？"
      },
      {
        type: "fill",
        question: "___ she work here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她在這裡工作嗎？"
      },
      {
        type: "choice",
        question: "___ they play football?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "他們踢足球嗎？"
      },
      {
        type: "choice",
        question: "___ your brother study hard?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "你兄弟用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ we need to go?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們需要去嗎？"
      },
      {
        type: "fill",
        question: "___ the cat like fish?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻貓喜歡魚嗎？"
      },
      {
        type: "choice",
        question: "___ you understand this?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你理解這個嗎？"
      },
      {
        type: "fill",
        question: "___ your sister cook well?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你姊姊煮飯煮得好嗎？"
      },
      {
        type: "choice",
        question: "___ the students study hard?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "學生們用功讀書嗎？"
      },
      {
        type: "fill",
        question: "___ I need to come?",
        answer: "Do",
        explanation: "第一人稱問句用 Do",
        translation: "我需要來嗎？"
      },
      {
        type: "fill",
        question: "___ she drive a car?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "她會開車嗎？"
      },
      {
        type: "choice",
        question: "___ your parents work?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "你的父母工作嗎？"
      },
      {
        type: "fill",
        question: "___ the dog bark at night?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "那隻狗晚上會叫嗎？"
      },
      {
        type: "choice",
        question: "___ Tom play the guitar?",
        options: ["Do", "Does"],
        answer: 1,
        explanation: "第三人稱單數問句用 Does",
        translation: "Tom 會彈吉他嗎？"
      },
      {
        type: "fill",
        question: "___ we have time?",
        answer: "Do",
        explanation: "第一人稱複數問句用 Do",
        translation: "我們有時間嗎？"
      },
      {
        type: "fill",
        question: "___ the teacher speak Chinese?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "老師說中文嗎？"
      },
      {
        type: "choice",
        question: "___ the children eat vegetables?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "複數主詞問句用 Do",
        translation: "孩子們吃蔬菜嗎？"
      },
      {
        type: "fill",
        question: "___ your friend live here?",
        answer: "Does",
        explanation: "第三人稱單數問句用 Does",
        translation: "你的朋友住在這裡嗎？"
      },
      {
        type: "choice",
        question: "___ you want to go?",
        options: ["Do", "Does"],
        answer: 0,
        explanation: "第二人稱問句用 Do",
        translation: "你想要去嗎？"
      },
      {
        type: "fill",
        question: "___ the birds sing in the morning?",
        answer: "Do",
        explanation: "複數主詞問句用 Do",
        translation: "鳥兒早上唱歌嗎？"
      }
    ]
  },

  // 關卡9：WH問句
  level9: {
    title: "WH問句",
    description: "學習 Where, When, What, Who, How, Which 的用法",
    questions: [
      {
        type: "fill",
        question: "___ do you live?",
        answer: "Where",
        explanation: "詢問地點用 Where",
        translation: "你住在哪裡？"
      },
      {
        type: "fill",
        question: "___ do you go to school?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你什麼時候去學校？"
      },
      {
        type: "fill",
        question: "___ is your name?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你的名字是什麼？"
      },
      {
        type: "choice",
        question: "___ is your teacher?",
        options: ["Where", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你的老師是誰？"
      },
      {
        type: "choice",
        question: "___ do you go to school?",
        options: ["How", "Where"],
        answer: 1,
        explanation: "詢問地點用 Where",
        translation: "你去哪裡上學？"
      },
      {
        type: "fill",
        question: "___ do you like better, tea or coffee?",
        answer: "Which",
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，茶還是咖啡？"
      },
      {
        type: "fill",
        question: "___ do you feel today?",
        answer: "How",
        explanation: "詢問狀態或方式用 How",
        translation: "你今天感覺如何？"
      },
      {
        type: "choice",
        question: "___ do you study English?",
        options: ["When", "Where"],
        answer: 0,
        explanation: "詢問時間用 When",
        translation: "你什麼時候學習英文？"
      },
      {
        type: "fill",
        question: "___ is your favorite color?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的顏色是什麼？"
      },
      {
        type: "choice",
        question: "___ do you travel to school?",
        options: ["How", "Where"],
        answer: 0,
        explanation: "詢問方式用 How",
        translation: "你怎麼去學校？"
      },
      {
        type: "fill",
        question: "___ do you want to be when you grow up?",
        answer: "What",
        explanation: "詢問職業用 What",
        translation: "你長大後想要做什麼？"
      },
      {
        type: "choice",
        question: "___ is your best friend?",
        options: ["What", "Who"],
        answer: 1,
        explanation: "詢問人物用 Who",
        translation: "你最好的朋友是誰？"
      },
      {
        type: "fill",
        question: "___ do you like to eat?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你喜歡吃什麼？"
      },
      {
        type: "choice",
        question: "___ do you prefer, summer or winter?",
        options: ["Which", "What"],
        answer: 0,
        explanation: "在選項中選擇用 Which",
        translation: "你比較喜歡哪一個，夏天還是冬天？"
      },
      {
        type: "fill",
        question: "___ do you usually wake up?",
        answer: "When",
        explanation: "詢問時間用 When",
        translation: "你通常什麼時候起床？"
      },
      {
        type: "choice",
        question: "___ do you live in Taiwan?",
        options: ["Why", "Where"],
        answer: 0,
        explanation: "詢問原因用 Why",
        translation: "你為什麼住在台灣？"
      },
      {
        type: "fill",
        question: "___ do you speak English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼說英文？"
      },
      {
        type: "choice",
        question: "___ do you like to go on weekends?",
        options: ["Where", "When"],
        answer: 0,
        explanation: "詢問地點用 Where",
        translation: "你週末喜歡去哪裡？"
      },
      {
        type: "fill",
        question: "___ is your favorite subject?",
        answer: "What",
        explanation: "詢問事物用 What",
        translation: "你最喜歡的科目是什麼？"
      },
      {
        type: "choice",
        question: "___ do you think is the best movie?",
        options: ["What", "Which"],
        answer: 0,
        explanation: "詢問事物用 What",
        translation: "你認為最好的電影是什麼？"
      },
      {
        type: "fill",
        question: "___ do you learn English?",
        answer: "How",
        explanation: "詢問方式用 How",
        translation: "你怎麼學習英文？"
      }
    ]
  },

  // 關卡10：現在式和現在進行式
  level10: {
    title: "現在式和現在進行式",
    description: "學習現在簡單式與現在進行式的用法與辨識",
    questions: [
      {
        type: "choice",
        question: "She ___ to school every day.",
        options: ["goes", "is going"],
        answer: 0,
        explanation: "every day 表示習慣，使用現在簡單式。",
        translation: "她每天去學校。"
      },
      {
        type: "choice",
        question: "Look! The cat ___ on the roof.",
        options: ["sits", "is sitting"],
        answer: 1,
        explanation: "Look! 表示現在正在發生，使用現在進行式。",
        translation: "看！貓正在屋頂上。"
      },
      {
        type: "fill",
        question: "I ___ my homework now.",
        answer: "am doing",
        explanation: "now 表示現在正在進行，主詞 I 用 am doing。",
        translation: "我現在正在做作業。"
      },
      {
        type: "fill",
        question: "They ___ basketball every weekend.",
        answer: "play",
        explanation: "every weekend 表示習慣，使用現在簡單式。",
        translation: "他們每個週末打籃球。"
      },
      {
        type: "choice",
        question: "Listen! The birds ___.",
        options: ["sing", "are singing"],
        answer: 1,
        explanation: "Listen! 表示現在正在發生，使用現在進行式。",
        translation: "聽！鳥兒正在唱歌。"
      },
      {
        type: "fill",
        question: "My father ___ TV every night.",
        answer: "watches",
        explanation: "every night 表示習慣，使用現在簡單式。",
        translation: "我爸爸每天晚上看電視。"
      },
      {
        type: "choice",
        question: "Right now, I ___ to music.",
        options: ["listen", "am listening"],
        answer: 1,
        explanation: "Right now 表示現在正在發生，使用現在進行式。",
        translation: "現在，我正在聽音樂。"
      },
      {
        type: "fill",
        question: "He ___ breakfast at the moment.",
        answer: "is eating",
        explanation: "at the moment 表示現在正在發生，使用現在進行式。",
        translation: "他現在正在吃早餐。"
      },
      {
        type: "choice",
        question: "We ___ English at school.",
        options: ["study", "are studying"],
        answer: 0,
        explanation: "at school（泛指）表示習慣，使用現在簡單式。",
        translation: "我們在學校學英文。"
      },
      {
        type: "fill",
        question: "The children ___ in the park now.",
        answer: "are playing",
        explanation: "now 表示現在正在發生，使用現在進行式。",
        translation: "孩子們現在正在公園玩。"
      },
      {
        type: "choice",
        question: "Right now, she ___ a book.",
        options: ["reads", "is reading"],
        answer: 1,
        explanation: "right now 表示現在正在進行，使用現在進行式。",
        translation: "現在她正在看書。"
      },
      {
        type: "fill",
        question: "He ___ to music every morning.",
        answer: "listens",
        explanation: "every morning 表示習慣，使用現在簡單式。",
        translation: "他每天早上聽音樂。"
      },
      {
        type: "choice",
        question: "We ___ dinner at the moment.",
        options: ["eat", "are eating"],
        answer: 1,
        explanation: "at the moment 表示現在正在進行，使用現在進行式。",
        translation: "我們現在正在吃晚餐。"
      },
      {
        type: "fill",
        question: "The sun ___ in the east.",
        answer: "rises",
        explanation: "自然現象、事實，使用現在簡單式。",
        translation: "太陽從東方升起。"
      },
      {
        type: "choice",
        question: "Look! The children ___ in the park.",
        options: ["play", "are playing"],
        answer: 1,
        explanation: "Look! 表示現在正在發生，使用現在進行式。",
        translation: "看！孩子們正在公園玩耍。"
      },
      {
        type: "fill",
        question: "She ___ English every day.",
        answer: "studies",
        explanation: "every day 表示習慣，使用現在簡單式。",
        translation: "她每天學英文。"
      },
      {
        type: "choice",
        question: "Listen! Someone ___ at the door.",
        options: ["knocks", "is knocking"],
        answer: 1,
        explanation: "Listen! 表示現在正在發生，使用現在進行式。",
        translation: "聽！有人正在敲門。"
      },
      {
        type: "fill",
        question: "My friends ___ to school by bus.",
        answer: "go",
        explanation: "習慣性動作，使用現在簡單式。",
        translation: "我的朋友們搭公車上學。"
      },
      {
        type: "choice",
        question: "He ___ his teeth every morning.",
        options: ["brushes", "is brushing"],
        answer: 0,
        explanation: "every morning 表示習慣，使用現在簡單式。",
        translation: "他每天早上刷牙。"
      },
      {
        type: "fill",
        question: "I ___ my homework every day.",
        answer: "do",
        explanation: "every day 表示習慣，使用現在簡單式。",
        translation: "我每天做作業。"
      },
      {
        type: "choice",
        question: "Right now, they ___ a movie.",
        options: ["watch", "are watching"],
        answer: 1,
        explanation: "right now 表示現在正在進行，使用現在進行式。",
        translation: "他們現在正在看電影。"
      },
      {
        type: "fill",
        question: "The baby ___ now.",
        answer: "is sleeping",
        explanation: "now 表示現在正在進行，使用現在進行式。",
        translation: "嬰兒現在正在睡覺。"
      },
      {
        type: "choice",
        question: "My mother ___ dinner every evening.",
        options: ["cooks", "is cooking"],
        answer: 0,
        explanation: "every evening 表示習慣，使用現在簡單式。",
        translation: "我媽媽每天晚上煮晚餐。"
      },
      {
        type: "fill",
        question: "We ___ to music at the moment.",
        answer: "are listening",
        explanation: "at the moment 表示現在正在進行，使用現在進行式。",
        translation: "我們現在正在聽音樂。"
      }
    ]
  },

  // 關卡11：過去式be動詞肯定句
  level11: {
    title: "過去式be動詞肯定句",
    description: "學習過去式be動詞（was/were）的肯定句用法",
    questions: [
      {
        type: "fill",
        question: "I ___ at home yesterday.",
        answer: "was",
        explanation: "第一人稱單數過去式用 was",
        translation: "我昨天在家。"
      },
      {
        type: "fill",
        question: "She ___ happy last week.",
        answer: "was",
        explanation: "第三人稱單數女性過去式用 was",
        translation: "她上週很開心。"
      },
      {
        type: "fill",
        question: "He ___ tired yesterday.",
        answer: "was",
        explanation: "第三人稱單數男性過去式用 was",
        translation: "他昨天很累。"
      },
      {
        type: "fill",
        question: "It ___ cold last winter.",
        answer: "was",
        explanation: "第三人稱單數中性過去式用 was",
        translation: "去年冬天很冷。"
      },
      {
        type: "fill",
        question: "We ___ at school yesterday.",
        answer: "were",
        explanation: "第一人稱複數過去式用 were",
        translation: "我們昨天在學校。"
      },
      {
        type: "fill",
        question: "You ___ late for class.",
        answer: "were",
        explanation: "第二人稱過去式用 were",
        translation: "你上課遲到了。"
      },
      {
        type: "fill",
        question: "They ___ busy last weekend.",
        answer: "were",
        explanation: "第三人稱複數過去式用 were",
        translation: "他們上週末很忙。"
      },
      {
        type: "choice",
        question: "My sister ___ sick last month.",
        options: ["was", "were"],
        answer: 0,
        explanation: "第三人稱單數女性過去式用 was",
        translation: "我妹妹上個月生病了。"
      },
      {
        type: "choice",
        question: "The children ___ excited about the party.",
        options: ["was", "were"],
        answer: 1,
        explanation: "複數主詞過去式用 were",
        translation: "孩子們對派對很興奮。"
      },
      {
        type: "fill",
        question: "My father ___ at work yesterday.",
        answer: "was",
        explanation: "第三人稱單數男性過去式用 was",
        translation: "我爸爸昨天在工作。"
      },
      {
        type: "choice",
        question: "The weather ___ nice last summer.",
        options: ["was", "were"],
        answer: 0,
        explanation: "第三人稱單數中性過去式用 was",
        translation: "去年夏天天氣很好。"
      },
      {
        type: "fill",
        question: "My friends ___ at the park yesterday.",
        answer: "were",
        explanation: "複數主詞過去式用 were",
        translation: "我的朋友們昨天在公園。"
      },
      {
        type: "choice",
        question: "The cat ___ hungry this morning.",
        options: ["was", "were"],
        answer: 0,
        explanation: "第三人稱單數中性過去式用 was",
        translation: "貓今天早上很餓。"
      },
      {
        type: "fill",
        question: "I ___ very busy last week.",
        answer: "was",
        explanation: "第一人稱單數過去式用 was",
        translation: "我上週很忙。"
      },
      {
        type: "choice",
        question: "The students ___ quiet in class.",
        options: ["was", "were"],
        answer: 1,
        explanation: "複數主詞過去式用 were",
        translation: "學生們在課堂上很安靜。"
      },
      {
        type: "fill",
        question: "She ___ beautiful in that dress.",
        answer: "was",
        explanation: "第三人稱單數女性過去式用 was",
        translation: "她穿那件裙子很美。"
      },
      {
        type: "choice",
        question: "My parents ___ happy about my grades.",
        options: ["was", "were"],
        answer: 1,
        explanation: "複數主詞過去式用 were",
        translation: "我的父母對我的成績很滿意。"
      },
      {
        type: "fill",
        question: "He ___ angry about the news.",
        answer: "was",
        explanation: "第三人稱單數男性過去式用 was",
        translation: "他對這個消息很生氣。"
      },
      {
        type: "choice",
        question: "The movie ___ interesting.",
        options: ["was", "were"],
        answer: 0,
        explanation: "第三人稱單數中性過去式用 was",
        translation: "那部電影很有趣。"
      },
      {
        type: "fill",
        question: "We ___ surprised by the gift.",
        answer: "were",
        explanation: "第一人稱複數過去式用 were",
        translation: "我們對這個禮物很驚訝。"
      }
    ]
  },

  // 關卡12：過去式一般動詞否定句
  level12: {
    title: "過去式一般動詞否定句",
    description: "學習過去式一般動詞的否定句用法（didn't + 原形動詞）",
    questions: [
      {
        type: "fill",
        question: "I ___ go to school yesterday.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "我昨天沒有去學校。"
      },
      {
        type: "fill",
        question: "She ___ finish her homework.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "她沒有完成作業。"
      },
      {
        type: "fill",
        question: "He ___ watch TV last night.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "他昨晚沒有看電視。"
      },
      {
        type: "choice",
        question: "They ___ come to the party.",
        options: ["didn't", "don't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 don't",
        translation: "他們沒有來派對。"
      },
      {
        type: "fill",
        question: "We ___ eat dinner at home.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "我們沒有在家吃晚餐。"
      },
      {
        type: "choice",
        question: "My sister ___ study for the test.",
        options: ["didn't", "doesn't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 doesn't",
        translation: "我妹妹沒有為考試讀書。"
      },
      {
        type: "fill",
        question: "The children ___ play outside.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "孩子們沒有在外面玩。"
      },
      {
        type: "choice",
        question: "My father ___ work yesterday.",
        options: ["didn't", "doesn't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 doesn't",
        translation: "我爸爸昨天沒有工作。"
      },
      {
        type: "fill",
        question: "I ___ buy anything at the store.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "我沒有在商店買任何東西。"
      },
      {
        type: "choice",
        question: "She ___ call me last week.",
        options: ["didn't", "doesn't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 doesn't",
        translation: "她上週沒有打電話給我。"
      },
      {
        type: "fill",
        question: "They ___ visit their grandparents.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "他們沒有拜訪祖父母。"
      },
      {
        type: "choice",
        question: "The dog ___ bark at night.",
        options: ["didn't", "doesn't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 doesn't",
        translation: "狗昨晚沒有叫。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "我們沒有去看電影。"
      },
      {
        type: "choice",
        question: "My brother ___ help me with homework.",
        options: ["didn't", "doesn't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 doesn't",
        translation: "我哥哥沒有幫我做作業。"
      },
      {
        type: "fill",
        question: "He ___ understand the question.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "他沒有理解這個問題。"
      },
      {
        type: "choice",
        question: "The students ___ listen to the teacher.",
        options: ["didn't", "don't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 don't",
        translation: "學生們沒有聽老師的話。"
      },
      {
        type: "fill",
        question: "I ___ sleep well last night.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "我昨晚沒有睡好。"
      },
      {
        type: "choice",
        question: "She ___ cook dinner yesterday.",
        options: ["didn't", "doesn't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 doesn't",
        translation: "她昨天沒有煮晚餐。"
      },
      {
        type: "fill",
        question: "They ___ arrive on time.",
        answer: "didn't",
        explanation: "過去式否定句用 didn't + 原形動詞",
        translation: "他們沒有準時到達。"
      },
      {
        type: "choice",
        question: "My friends ___ like the movie.",
        options: ["didn't", "don't"],
        answer: 0,
        explanation: "過去式否定句用 didn't，不是 don't",
        translation: "我的朋友們不喜歡那部電影。"
      }
    ]
  },

  // 關卡13：過去式BE動詞否定句
  level13: {
    title: "過去式BE動詞否定句",
    description: "學習過去式BE動詞的否定句用法（wasn't/weren't）",
    questions: [
      {
        type: "fill",
        question: "I ___ at home yesterday.",
        answer: "wasn't",
        explanation: "第一人稱單數過去式否定用 wasn't",
        translation: "我昨天不在家。"
      },
      {
        type: "fill",
        question: "She ___ happy last week.",
        answer: "wasn't",
        explanation: "第三人稱單數女性過去式否定用 wasn't",
        translation: "她上週不開心。"
      },
      {
        type: "fill",
        question: "He ___ tired yesterday.",
        answer: "wasn't",
        explanation: "第三人稱單數男性過去式否定用 wasn't",
        translation: "他昨天不累。"
      },
      {
        type: "fill",
        question: "It ___ cold last winter.",
        answer: "wasn't",
        explanation: "第三人稱單數中性過去式否定用 wasn't",
        translation: "去年冬天不冷。"
      },
      {
        type: "fill",
        question: "We ___ at school yesterday.",
        answer: "weren't",
        explanation: "第一人稱複數過去式否定用 weren't",
        translation: "我們昨天不在學校。"
      },
      {
        type: "fill",
        question: "You ___ late for class.",
        answer: "weren't",
        explanation: "第二人稱過去式否定用 weren't",
        translation: "你上課沒有遲到。"
      },
      {
        type: "fill",
        question: "They ___ busy last weekend.",
        answer: "weren't",
        explanation: "第三人稱複數過去式否定用 weren't",
        translation: "他們上週末不忙。"
      },
      {
        type: "choice",
        question: "My sister ___ sick last month.",
        options: ["wasn't", "weren't"],
        answer: 0,
        explanation: "第三人稱單數女性過去式否定用 wasn't",
        translation: "我妹妹上個月沒有生病。"
      },
      {
        type: "choice",
        question: "The children ___ excited about the party.",
        options: ["wasn't", "weren't"],
        answer: 1,
        explanation: "複數主詞過去式否定用 weren't",
        translation: "孩子們對派對不興奮。"
      },
      {
        type: "fill",
        question: "My father ___ at work yesterday.",
        answer: "wasn't",
        explanation: "第三人稱單數男性過去式否定用 wasn't",
        translation: "我爸爸昨天沒有在工作。"
      },
      {
        type: "choice",
        question: "The weather ___ nice last summer.",
        options: ["wasn't", "weren't"],
        answer: 0,
        explanation: "第三人稱單數中性過去式否定用 wasn't",
        translation: "去年夏天天氣不好。"
      },
      {
        type: "fill",
        question: "My friends ___ at the park yesterday.",
        answer: "weren't",
        explanation: "複數主詞過去式否定用 weren't",
        translation: "我的朋友們昨天不在公園。"
      },
      {
        type: "choice",
        question: "The cat ___ hungry this morning.",
        options: ["wasn't", "weren't"],
        answer: 0,
        explanation: "第三人稱單數中性過去式否定用 wasn't",
        translation: "貓今天早上不餓。"
      },
      {
        type: "fill",
        question: "I ___ very busy last week.",
        answer: "wasn't",
        explanation: "第一人稱單數過去式否定用 wasn't",
        translation: "我上週不忙。"
      },
      {
        type: "choice",
        question: "The students ___ quiet in class.",
        options: ["wasn't", "weren't"],
        answer: 1,
        explanation: "複數主詞過去式否定用 weren't",
        translation: "學生們在課堂上不安靜。"
      },
      {
        type: "fill",
        question: "She ___ beautiful in that dress.",
        answer: "wasn't",
        explanation: "第三人稱單數女性過去式否定用 wasn't",
        translation: "她穿那件裙子不美。"
      },
      {
        type: "choice",
        question: "My parents ___ happy about my grades.",
        options: ["wasn't", "weren't"],
        answer: 1,
        explanation: "複數主詞過去式否定用 weren't",
        translation: "我的父母對我的成績不滿意。"
      },
      {
        type: "fill",
        question: "He ___ angry about the news.",
        answer: "wasn't",
        explanation: "第三人稱單數男性過去式否定用 wasn't",
        translation: "他對這個消息不生氣。"
      },
      {
        type: "choice",
        question: "The movie ___ interesting.",
        options: ["wasn't", "weren't"],
        answer: 0,
        explanation: "第三人稱單數中性過去式否定用 wasn't",
        translation: "那部電影不有趣。"
      },
      {
        type: "fill",
        question: "We ___ surprised by the gift.",
        answer: "weren't",
        explanation: "第一人稱複數過去式否定用 weren't",
        translation: "我們對這個禮物不驚訝。"
      }
    ]
  },

  // 關卡14：過去式BE動詞問句
  level14: {
    title: "過去式BE動詞問句",
    description: "學習過去式BE動詞的問句用法（Was/Were + 主詞）",
    questions: [
      {
        type: "fill",
        question: "___ you at home yesterday?",
        answer: "Were",
        explanation: "第二人稱過去式問句用 Were",
        translation: "你昨天在家嗎？"
      },
      {
        type: "fill",
        question: "___ she happy last week?",
        answer: "Was",
        explanation: "第三人稱單數女性過去式問句用 Was",
        translation: "她上週開心嗎？"
      },
      {
        type: "fill",
        question: "___ he tired yesterday?",
        answer: "Was",
        explanation: "第三人稱單數男性過去式問句用 Was",
        translation: "他昨天累嗎？"
      },
      {
        type: "fill",
        question: "___ it cold last winter?",
        answer: "Was",
        explanation: "第三人稱單數中性過去式問句用 Was",
        translation: "去年冬天冷嗎？"
      },
      {
        type: "fill",
        question: "___ we at school yesterday?",
        answer: "Were",
        explanation: "第一人稱複數過去式問句用 Were",
        translation: "我們昨天在學校嗎？"
      },
      {
        type: "choice",
        question: "___ your sister sick last month?",
        options: ["Was", "Were"],
        answer: 0,
        explanation: "第三人稱單數女性過去式問句用 Was",
        translation: "你妹妹上個月生病了嗎？"
      },
      {
        type: "choice",
        question: "___ the children excited about the party?",
        options: ["Was", "Were"],
        answer: 1,
        explanation: "複數主詞過去式問句用 Were",
        translation: "孩子們對派對興奮嗎？"
      },
      {
        type: "fill",
        question: "___ your father at work yesterday?",
        answer: "Was",
        explanation: "第三人稱單數男性過去式問句用 Was",
        translation: "你爸爸昨天在工作嗎？"
      },
      {
        type: "choice",
        question: "___ the weather nice last summer?",
        options: ["Was", "Were"],
        answer: 0,
        explanation: "第三人稱單數中性過去式問句用 Was",
        translation: "去年夏天天氣好嗎？"
      },
      {
        type: "fill",
        question: "___ your friends at the park yesterday?",
        answer: "Were",
        explanation: "複數主詞過去式問句用 Were",
        translation: "你的朋友們昨天在公園嗎？"
      },
      {
        type: "choice",
        question: "___ the cat hungry this morning?",
        options: ["Was", "Were"],
        answer: 0,
        explanation: "第三人稱單數中性過去式問句用 Was",
        translation: "貓今天早上餓嗎？"
      },
      {
        type: "fill",
        question: "___ you very busy last week?",
        answer: "Were",
        explanation: "第二人稱過去式問句用 Were",
        translation: "你上週很忙嗎？"
      },
      {
        type: "choice",
        question: "___ the students quiet in class?",
        options: ["Was", "Were"],
        answer: 1,
        explanation: "複數主詞過去式問句用 Were",
        translation: "學生們在課堂上安靜嗎？"
      },
      {
        type: "fill",
        question: "___ she beautiful in that dress?",
        answer: "Was",
        explanation: "第三人稱單數女性過去式問句用 Was",
        translation: "她穿那件裙子美嗎？"
      },
      {
        type: "choice",
        question: "___ your parents happy about your grades?",
        options: ["Was", "Were"],
        answer: 1,
        explanation: "複數主詞過去式問句用 Were",
        translation: "你的父母對你的成績滿意嗎？"
      },
      {
        type: "fill",
        question: "___ he angry about the news?",
        answer: "Was",
        explanation: "第三人稱單數男性過去式問句用 Was",
        translation: "他對這個消息生氣嗎？"
      },
      {
        type: "choice",
        question: "___ the movie interesting?",
        options: ["Was", "Were"],
        answer: 0,
        explanation: "第三人稱單數中性過去式問句用 Was",
        translation: "那部電影有趣嗎？"
      },
      {
        type: "fill",
        question: "___ we surprised by the gift?",
        answer: "Were",
        explanation: "第一人稱複數過去式問句用 Were",
        translation: "我們對這個禮物驚訝嗎？"
      },
      {
        type: "choice",
        question: "___ your brother at home last night?",
        options: ["Was", "Were"],
        answer: 0,
        explanation: "第三人稱單數男性過去式問句用 Was",
        translation: "你哥哥昨晚在家嗎？"
      },
      {
        type: "fill",
        question: "___ they late for the meeting?",
        answer: "Were",
        explanation: "第三人稱複數過去式問句用 Were",
        translation: "他們開會遲到了嗎？"
      }
    ]
  },

  // 關卡15：過去式一般動詞肯定句
  level15: {
    title: "過去式一般動詞肯定句",
    description: "學習過去式一般動詞的肯定句用法（規則與不規則動詞）",
    questions: [
      {
        type: "fill",
        question: "I ___ to school yesterday.",
        answer: "went",
        explanation: "go 的過去式是不規則動詞 went",
        translation: "我昨天去學校。"
      },
      {
        type: "fill",
        question: "She ___ her homework last night.",
        answer: "finished",
        explanation: "finish 的過去式是規則動詞，加 -ed",
        translation: "她昨晚完成了作業。"
      },
      {
        type: "fill",
        question: "He ___ TV for two hours.",
        answer: "watched",
        explanation: "watch 的過去式是規則動詞，加 -ed",
        translation: "他看了兩個小時的電視。"
      },
      {
        type: "fill",
        question: "They ___ to the park yesterday.",
        answer: "went",
        explanation: "go 的過去式是不規則動詞 went",
        translation: "他們昨天去公園。"
      },
      {
        type: "fill",
        question: "We ___ dinner at 7 PM.",
        answer: "ate",
        explanation: "eat 的過去式是不規則動詞 ate",
        translation: "我們晚上七點吃晚餐。"
      },
      {
        type: "choice",
        question: "My sister ___ a book last week.",
        options: ["read", "reads"],
        answer: 0,
        explanation: "read 的過去式與原形相同，但發音不同",
        translation: "我妹妹上週讀了一本書。"
      },
      {
        type: "fill",
        question: "The children ___ in the garden.",
        answer: "played",
        explanation: "play 的過去式是規則動詞，加 -ed",
        translation: "孩子們在花園裡玩。"
      },
      {
        type: "choice",
        question: "My father ___ to work early.",
        options: ["went", "goes"],
        answer: 0,
        explanation: "go 的過去式是不規則動詞 went",
        translation: "我爸爸很早就去工作。"
      },
      {
        type: "fill",
        question: "I ___ a new car last month.",
        answer: "bought",
        explanation: "buy 的過去式是不規則動詞 bought",
        translation: "我上個月買了一輛新車。"
      },
      {
        type: "choice",
        question: "She ___ her keys at home.",
        options: ["left", "leaves"],
        answer: 0,
        explanation: "leave 的過去式是不規則動詞 left",
        translation: "她把鑰匙忘在家裡。"
      },
      {
        type: "fill",
        question: "They ___ the movie last night.",
        answer: "watched",
        explanation: "watch 的過去式是規則動詞，加 -ed",
        translation: "他們昨晚看了那部電影。"
      },
      {
        type: "choice",
        question: "The dog ___ at the mailman.",
        options: ["barked", "barks"],
        answer: 0,
        explanation: "bark 的過去式是規則動詞，加 -ed",
        translation: "狗對郵差叫了。"
      },
      {
        type: "fill",
        question: "We ___ to music all evening.",
        answer: "listened",
        explanation: "listen 的過去式是規則動詞，加 -ed",
        translation: "我們整晚都在聽音樂。"
      },
      {
        type: "choice",
        question: "My brother ___ me with homework.",
        options: ["helped", "helps"],
        answer: 0,
        explanation: "help 的過去式是規則動詞，加 -ed",
        translation: "我哥哥幫我做作業。"
      },
      {
        type: "fill",
        question: "He ___ the question correctly.",
        answer: "answered",
        explanation: "answer 的過去式是規則動詞，加 -ed",
        translation: "他正確地回答了這個問題。"
      },
      {
        type: "choice",
        question: "The students ___ to the teacher.",
        options: ["listened", "listen"],
        answer: 0,
        explanation: "listen 的過去式是規則動詞，加 -ed",
        translation: "學生們聽了老師的話。"
      },
      {
        type: "fill",
        question: "I ___ well last night.",
        answer: "slept",
        explanation: "sleep 的過去式是不規則動詞 slept",
        translation: "我昨晚睡得很好。"
      },
      {
        type: "choice",
        question: "She ___ dinner yesterday.",
        options: ["cooked", "cooks"],
        answer: 0,
        explanation: "cook 的過去式是規則動詞，加 -ed",
        translation: "她昨天煮了晚餐。"
      },
      {
        type: "fill",
        question: "They ___ on time for the meeting.",
        answer: "arrived",
        explanation: "arrive 的過去式是規則動詞，加 -ed",
        translation: "他們準時到達會議。"
      },
      {
        type: "choice",
        question: "My friends ___ the movie.",
        options: ["liked", "like"],
        answer: 0,
        explanation: "like 的過去式是規則動詞，加 -ed",
        translation: "我的朋友們喜歡那部電影。"
      }
    ]
  },

  // 關卡16：過去式一般動詞問句
  level16: {
    title: "過去式一般動詞問句",
    description: "學習過去式一般動詞的問句用法（Did + 主詞 + 原形動詞）",
    questions: [
      {
        type: "fill",
        question: "___ you go to school yesterday?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "你昨天去學校了嗎？"
      },
      {
        type: "fill",
        question: "___ she finish her homework?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "她完成作業了嗎？"
      },
      {
        type: "fill",
        question: "___ he watch TV last night?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "他昨晚看電視了嗎？"
      },
      {
        type: "fill",
        question: "___ they visit their grandparents?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "他們拜訪祖父母了嗎？"
      },
      {
        type: "fill",
        question: "___ we eat dinner at home?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "我們在家吃晚餐了嗎？"
      },
      {
        type: "choice",
        question: "___ your sister study for the test?",
        options: ["Did", "Does"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Does",
        translation: "你妹妹為考試讀書了嗎？"
      },
      {
        type: "fill",
        question: "___ the children play outside?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "孩子們在外面玩了嗎？"
      },
      {
        type: "choice",
        question: "___ your father work yesterday?",
        options: ["Did", "Does"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Does",
        translation: "你爸爸昨天工作了嗎？"
      },
      {
        type: "fill",
        question: "___ you buy anything at the store?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "你在商店買了什麼東西嗎？"
      },
      {
        type: "choice",
        question: "___ she call you last week?",
        options: ["Did", "Does"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Does",
        translation: "她上週打電話給你了嗎？"
      },
      {
        type: "fill",
        question: "___ they arrive on time?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "他們準時到達了嗎？"
      },
      {
        type: "choice",
        question: "___ the dog bark at night?",
        options: ["Did", "Does"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Does",
        translation: "狗昨晚叫了嗎？"
      },
      {
        type: "fill",
        question: "___ we go to the movies?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "我們去看電影了嗎？"
      },
      {
        type: "choice",
        question: "___ your brother help you with homework?",
        options: ["Did", "Does"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Does",
        translation: "你哥哥幫你做作業了嗎？"
      },
      {
        type: "fill",
        question: "___ he understand the question?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "他理解這個問題了嗎？"
      },
      {
        type: "choice",
        question: "___ the students listen to the teacher?",
        options: ["Did", "Do"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Do",
        translation: "學生們聽老師的話了嗎？"
      },
      {
        type: "fill",
        question: "___ you sleep well last night?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "你昨晚睡得好嗎？"
      },
      {
        type: "choice",
        question: "___ she cook dinner yesterday?",
        options: ["Did", "Does"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Does",
        translation: "她昨天煮晚餐了嗎？"
      },
      {
        type: "fill",
        question: "___ they like the movie?",
        answer: "Did",
        explanation: "過去式問句用 Did + 主詞 + 原形動詞",
        translation: "他們喜歡那部電影嗎？"
      },
      {
        type: "choice",
        question: "___ your friends come to the party?",
        options: ["Did", "Do"],
        answer: 0,
        explanation: "過去式問句用 Did，不是 Do",
        translation: "你的朋友們來派對了嗎？"
      }
    ]
  },

  // 關卡17：未來式肯定句
  level17: {
    title: "未來式肯定句",
    description: "學習未來式的肯定句用法（will + 原形動詞）",
    questions: [
      {
        type: "fill",
        question: "I ___ go to school tomorrow.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "我明天會去學校。"
      },
      {
        type: "fill",
        question: "She ___ finish her homework tonight.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "她今晚會完成作業。"
      },
      {
        type: "fill",
        question: "He ___ watch TV later.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "他等一下會看電視。"
      },
      {
        type: "fill",
        question: "They ___ visit their grandparents next week.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "他們下週會拜訪祖父母。"
      },
      {
        type: "fill",
        question: "We ___ eat dinner at 7 PM.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "我們晚上七點會吃晚餐。"
      },
      {
        type: "choice",
        question: "My sister ___ study for the test tomorrow.",
        options: ["will", "is"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 is",
        translation: "我妹妹明天會為考試讀書。"
      },
      {
        type: "fill",
        question: "The children ___ play in the park.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "孩子們會在公園玩。"
      },
      {
        type: "choice",
        question: "My father ___ work tomorrow.",
        options: ["will", "is"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 is",
        translation: "我爸爸明天會工作。"
      },
      {
        type: "fill",
        question: "I ___ buy a new car next month.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "我下個月會買一輛新車。"
      },
      {
        type: "choice",
        question: "She ___ call you later.",
        options: ["will", "is"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 is",
        translation: "她等一下會打電話給你。"
      },
      {
        type: "fill",
        question: "They ___ arrive on time.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "他們會準時到達。"
      },
      {
        type: "choice",
        question: "The weather ___ be nice tomorrow.",
        options: ["will", "is"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 is",
        translation: "明天天氣會很好。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies next weekend.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "我們下週末會去看電影。"
      },
      {
        type: "choice",
        question: "My brother ___ help you with homework.",
        options: ["will", "is"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 is",
        translation: "我哥哥會幫你做作業。"
      },
      {
        type: "fill",
        question: "He ___ answer the question correctly.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "他會正確地回答這個問題。"
      },
      {
        type: "choice",
        question: "The students ___ listen to the teacher.",
        options: ["will", "are"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 are",
        translation: "學生們會聽老師的話。"
      },
      {
        type: "fill",
        question: "I ___ sleep well tonight.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "我今晚會睡得很好。"
      },
      {
        type: "choice",
        question: "She ___ cook dinner tonight.",
        options: ["will", "is"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 is",
        translation: "她今晚會煮晚餐。"
      },
      {
        type: "fill",
        question: "They ___ like the movie.",
        answer: "will",
        explanation: "未來式肯定句用 will + 原形動詞",
        translation: "他們會喜歡那部電影。"
      },
      {
        type: "choice",
        question: "Your friends ___ come to the party.",
        options: ["will", "are"],
        answer: 0,
        explanation: "未來式肯定句用 will，不是 are",
        translation: "你的朋友們會來派對。"
      }
    ]
  },

  // 關卡18：未來式否定句
  level18: {
    title: "未來式否定句",
    description: "學習未來式的否定句用法（won't + 原形動詞）",
    questions: [
      {
        type: "fill",
        question: "I ___ go to school tomorrow.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "我明天不會去學校。"
      },
      {
        type: "fill",
        question: "She ___ finish her homework tonight.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "她今晚不會完成作業。"
      },
      {
        type: "fill",
        question: "He ___ watch TV later.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "他等一下不會看電視。"
      },
      {
        type: "fill",
        question: "They ___ visit their grandparents next week.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "他們下週不會拜訪祖父母。"
      },
      {
        type: "fill",
        question: "We ___ eat dinner at 7 PM.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "我們晚上七點不會吃晚餐。"
      },
      {
        type: "choice",
        question: "My sister ___ study for the test tomorrow.",
        options: ["won't", "isn't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 isn't",
        translation: "我妹妹明天不會為考試讀書。"
      },
      {
        type: "fill",
        question: "The children ___ play in the park.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "孩子們不會在公園玩。"
      },
      {
        type: "choice",
        question: "My father ___ work tomorrow.",
        options: ["won't", "isn't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 isn't",
        translation: "我爸爸明天不會工作。"
      },
      {
        type: "fill",
        question: "I ___ buy a new car next month.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "我下個月不會買一輛新車。"
      },
      {
        type: "choice",
        question: "She ___ call you later.",
        options: ["won't", "isn't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 isn't",
        translation: "她等一下不會打電話給你。"
      },
      {
        type: "fill",
        question: "They ___ arrive on time.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "他們不會準時到達。"
      },
      {
        type: "choice",
        question: "The weather ___ be nice tomorrow.",
        options: ["won't", "isn't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 isn't",
        translation: "明天天氣不會很好。"
      },
      {
        type: "fill",
        question: "We ___ go to the movies next weekend.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "我們下週末不會去看電影。"
      },
      {
        type: "choice",
        question: "My brother ___ help you with homework.",
        options: ["won't", "isn't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 isn't",
        translation: "我哥哥不會幫你做作業。"
      },
      {
        type: "fill",
        question: "He ___ answer the question correctly.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "他不會正確地回答這個問題。"
      },
      {
        type: "choice",
        question: "The students ___ listen to the teacher.",
        options: ["won't", "aren't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 aren't",
        translation: "學生們不會聽老師的話。"
      },
      {
        type: "fill",
        question: "I ___ sleep well tonight.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "我今晚不會睡得很好。"
      },
      {
        type: "choice",
        question: "She ___ cook dinner tonight.",
        options: ["won't", "isn't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 isn't",
        translation: "她今晚不會煮晚餐。"
      },
      {
        type: "fill",
        question: "They ___ like the movie.",
        answer: "won't",
        explanation: "未來式否定句用 won't + 原形動詞",
        translation: "他們不會喜歡那部電影。"
      },
      {
        type: "choice",
        question: "Your friends ___ come to the party.",
        options: ["won't", "aren't"],
        answer: 0,
        explanation: "未來式否定句用 won't，不是 aren't",
        translation: "你的朋友們不會來派對。"
      }
    ]
  },

  // 關卡19：未來式問句
  level19: {
    title: "未來式問句",
    description: "學習未來式的問句用法（Will + 主詞 + 原形動詞）",
    questions: [
      {
        type: "fill",
        question: "___ you go to school tomorrow?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "你明天會去學校嗎？"
      },
      {
        type: "fill",
        question: "___ she finish her homework tonight?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "她今晚會完成作業嗎？"
      },
      {
        type: "fill",
        question: "___ he watch TV later?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "他等一下會看電視嗎？"
      },
      {
        type: "fill",
        question: "___ they visit their grandparents next week?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "他們下週會拜訪祖父母嗎？"
      },
      {
        type: "fill",
        question: "___ we eat dinner at 7 PM?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "我們晚上七點會吃晚餐嗎？"
      },
      {
        type: "choice",
        question: "___ your sister study for the test tomorrow?",
        options: ["Will", "Is"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Is",
        translation: "你妹妹明天會為考試讀書嗎？"
      },
      {
        type: "fill",
        question: "___ the children play in the park?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "孩子們會在公園玩嗎？"
      },
      {
        type: "choice",
        question: "___ your father work tomorrow?",
        options: ["Will", "Is"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Is",
        translation: "你爸爸明天會工作嗎？"
      },
      {
        type: "fill",
        question: "___ you buy a new car next month?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "你下個月會買一輛新車嗎？"
      },
      {
        type: "choice",
        question: "___ she call you later?",
        options: ["Will", "Is"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Is",
        translation: "她等一下會打電話給你嗎？"
      },
      {
        type: "fill",
        question: "___ they arrive on time?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "他們會準時到達嗎？"
      },
      {
        type: "choice",
        question: "___ the weather be nice tomorrow?",
        options: ["Will", "Is"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Is",
        translation: "明天天氣會很好嗎？"
      },
      {
        type: "fill",
        question: "___ we go to the movies next weekend?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "我們下週末會去看電影嗎？"
      },
      {
        type: "choice",
        question: "___ your brother help you with homework?",
        options: ["Will", "Is"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Is",
        translation: "你哥哥會幫你做作業嗎？"
      },
      {
        type: "fill",
        question: "___ he answer the question correctly?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "他會正確地回答這個問題嗎？"
      },
      {
        type: "choice",
        question: "___ the students listen to the teacher?",
        options: ["Will", "Are"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Are",
        translation: "學生們會聽老師的話嗎？"
      },
      {
        type: "fill",
        question: "___ you sleep well tonight?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "你今晚會睡得很好嗎？"
      },
      {
        type: "choice",
        question: "___ she cook dinner tonight?",
        options: ["Will", "Is"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Is",
        translation: "她今晚會煮晚餐嗎？"
      },
      {
        type: "fill",
        question: "___ they like the movie?",
        answer: "Will",
        explanation: "未來式問句用 Will + 主詞 + 原形動詞",
        translation: "他們會喜歡那部電影嗎？"
      },
      {
        type: "choice",
        question: "___ your friends come to the party?",
        options: ["Will", "Are"],
        answer: 0,
        explanation: "未來式問句用 Will，不是 Are",
        translation: "你的朋友們會來派對嗎？"
      }
    ]
  },

  // 關卡20：打招呼用語
  level20: {
    title: "打招呼用語",
    description: "學習不同時間的打招呼用語與回應",
    questions: [
      {
        type: "fill",
        question: "Good morning! How ___ you?",
        answer: "are",
        explanation: "How are you? 是常見的問候語",
        translation: "早安！你好嗎？"
      },
      {
        type: "fill",
        question: "Good afternoon! Nice to ___ you.",
        answer: "meet",
        explanation: "Nice to meet you 是初次見面的問候語",
        translation: "午安！很高興認識你。"
      },
      {
        type: "fill",
        question: "Good evening! How ___ your day?",
        answer: "was",
        explanation: "How was your day? 詢問今天過得如何",
        translation: "晚安！你今天過得如何？"
      },
      {
        type: "choice",
        question: "Good morning! ___ are you today?",
        options: ["How", "What"],
        answer: 0,
        explanation: "How are you? 是標準的問候語",
        translation: "早安！你今天好嗎？"
      },
      {
        type: "fill",
        question: "Hello! ___ to meet you.",
        answer: "Nice",
        explanation: "Nice to meet you 是初次見面的問候語",
        translation: "你好！很高興認識你。"
      },
      {
        type: "choice",
        question: "Good afternoon! How ___ your weekend?",
        options: ["was", "is"],
        answer: 0,
        explanation: "詢問過去的週末用過去式 was",
        translation: "午安！你的週末過得如何？"
      },
      {
        type: "fill",
        question: "Hi! ___ are you doing?",
        answer: "How",
        explanation: "How are you doing? 是常見的問候語",
        translation: "嗨！你過得如何？"
      },
      {
        type: "choice",
        question: "Good evening! ___ you have a good day?",
        options: ["Did", "Do"],
        answer: 0,
        explanation: "詢問過去的一天用過去式 Did",
        translation: "晚安！你今天過得好嗎？"
      },
      {
        type: "fill",
        question: "Good morning! ___ is your name?",
        answer: "What",
        explanation: "What is your name? 詢問姓名",
        translation: "早安！你叫什麼名字？"
      },
      {
        type: "choice",
        question: "Hello! ___ to see you again.",
        options: ["Nice", "Good"],
        answer: 0,
        explanation: "Nice to see you again 是再次見面的問候語",
        translation: "你好！很高興再次見到你。"
      },
      {
        type: "fill",
        question: "Good afternoon! ___ are you from?",
        answer: "Where",
        explanation: "Where are you from? 詢問來自哪裡",
        translation: "午安！你來自哪裡？"
      },
      {
        type: "choice",
        question: "Hi! ___ is the weather today?",
        options: ["How", "What"],
        answer: 0,
        explanation: "How is the weather? 詢問天氣如何",
        translation: "嗨！今天天氣如何？"
      },
      {
        type: "fill",
        question: "Good evening! ___ you sleep well?",
        answer: "Did",
        explanation: "詢問昨晚睡眠用過去式 Did",
        translation: "晚安！你昨晚睡得好嗎？"
      },
      {
        type: "choice",
        question: "Good morning! ___ is your family?",
        options: ["How", "What"],
        answer: 0,
        explanation: "How is your family? 詢問家人狀況",
        translation: "早安！你的家人好嗎？"
      },
      {
        type: "fill",
        question: "Hello! ___ to hear from you.",
        answer: "Good",
        explanation: "Good to hear from you 是收到消息的回應",
        translation: "你好！很高興收到你的消息。"
      },
      {
        type: "choice",
        question: "Good afternoon! ___ you busy today?",
        options: ["Are", "Is"],
        answer: 0,
        explanation: "詢問對方是否忙碌用 Are you",
        translation: "午安！你今天忙嗎？"
      },
      {
        type: "fill",
        question: "Hi! ___ is your job?",
        answer: "What",
        explanation: "What is your job? 詢問職業",
        translation: "嗨！你的工作是什麼？"
      },
      {
        type: "choice",
        question: "Good evening! ___ you enjoy your dinner?",
        options: ["Did", "Do"],
        answer: 0,
        explanation: "詢問晚餐是否愉快用過去式 Did",
        translation: "晚安！你晚餐吃得愉快嗎？"
      },
      {
        type: "fill",
        question: "Good morning! ___ is your favorite color?",
        answer: "What",
        explanation: "What is your favorite color? 詢問最喜歡的顏色",
        translation: "早安！你最喜歡什麼顏色？"
      },
      {
        type: "choice",
        question: "Hello! ___ you like coffee?",
        options: ["Do", "Are"],
        answer: 0,
        explanation: "詢問喜好用 Do you like",
        translation: "你好！你喜歡咖啡嗎？"
      }
    ]
  },

  // 關卡21：can 肯定句
  level21: {
    title: "can 肯定句",
    description: "學習 can 的肯定句用法（表示能力、可能性、許可）",
    questions: [
      {
        type: "fill",
        question: "I ___ speak English.",
        answer: "can",
        explanation: "can 表示能力，我能說英語",
        translation: "我會說英語。"
      },
      {
        type: "fill",
        question: "She ___ swim very well.",
        answer: "can",
        explanation: "can 表示能力，她能游得很好",
        translation: "她游泳游得很好。"
      },
      {
        type: "fill",
        question: "He ___ drive a car.",
        answer: "can",
        explanation: "can 表示能力，他能開車",
        translation: "他能開車。"
      },
      {
        type: "fill",
        question: "They ___ play the piano.",
        answer: "can",
        explanation: "can 表示能力，他們能彈鋼琴",
        translation: "他們能彈鋼琴。"
      },
      {
        type: "fill",
        question: "We ___ help you with homework.",
        answer: "can",
        explanation: "can 表示能力，我們能幫你做作業",
        translation: "我們能幫你做作業。"
      },
      {
        type: "choice",
        question: "My sister ___ cook delicious food.",
        options: ["can", "is"],
        answer: 0,
        explanation: "can 表示能力，不是 is",
        translation: "我妹妹能煮美味的食物。"
      },
      {
        type: "fill",
        question: "The children ___ read books.",
        answer: "can",
        explanation: "can 表示能力，孩子們能讀書",
        translation: "孩子們能讀書。"
      },
      {
        type: "choice",
        question: "My father ___ fix computers.",
        options: ["can", "is"],
        answer: 0,
        explanation: "can 表示能力，不是 is",
        translation: "我爸爸能修理電腦。"
      },
      {
        type: "fill",
        question: "I ___ solve this problem.",
        answer: "can",
        explanation: "can 表示能力，我能解決這個問題",
        translation: "我能解決這個問題。"
      },
      {
        type: "choice",
        question: "She ___ speak three languages.",
        options: ["can", "is"],
        answer: 0,
        explanation: "can 表示能力，不是 is",
        translation: "她會說三種語言。"
      },
      {
        type: "fill",
        question: "They ___ arrive on time.",
        answer: "can",
        explanation: "can 表示可能性，他們能準時到達",
        translation: "他們能準時到達。"
      },
      {
        type: "choice",
        question: "The weather ___ be nice tomorrow.",
        options: ["can", "is"],
        answer: 0,
        explanation: "can 表示可能性，不是 is",
        translation: "明天天氣可能會很好。"
      },
      {
        type: "fill",
        question: "We ___ meet you at the station.",
        answer: "can",
        explanation: "can 表示可能性，我們能在車站見你",
        translation: "我們能在車站見你。"
      },
      {
        type: "choice",
        question: "My brother ___ help you move.",
        options: ["can", "is"],
        answer: 0,
        explanation: "can 表示能力，不是 is",
        translation: "我哥哥能幫你搬家。"
      },
      {
        type: "fill",
        question: "He ___ answer the question.",
        answer: "can",
        explanation: "can 表示能力，他能回答這個問題",
        translation: "他能回答這個問題。"
      },
      {
        type: "choice",
        question: "The students ___ finish the project.",
        options: ["can", "are"],
        answer: 0,
        explanation: "can 表示能力，不是 are",
        translation: "學生們能完成這個專案。"
      },
      {
        type: "fill",
        question: "I ___ sleep well tonight.",
        answer: "can",
        explanation: "can 表示可能性，我今晚能睡好",
        translation: "我今晚能睡好。"
      },
      {
        type: "choice",
        question: "She ___ cook dinner tonight.",
        options: ["can", "is"],
        answer: 0,
        explanation: "can 表示能力，不是 is",
        translation: "她今晚能煮晚餐。"
      },
      {
        type: "fill",
        question: "They ___ like the movie.",
        answer: "can",
        explanation: "can 表示可能性，他們可能會喜歡那部電影",
        translation: "他們可能會喜歡那部電影。"
      },
      {
        type: "choice",
        question: "Your friends ___ come to the party.",
        options: ["can", "are"],
        answer: 0,
        explanation: "can 表示可能性，不是 are",
        translation: "你的朋友們能來派對。"
      }
    ]
  },

  // 關卡22：can 否定句
  level22: {
    title: "can 否定句",
    description: "學習 can 的否定句用法（can't/cannot 表示不能、不可能）",
    questions: [
      {
        type: "fill",
        question: "I ___ speak French.",
        answer: "can't",
        explanation: "can't 表示不能，我不會說法語",
        translation: "我不會說法語。"
      },
      {
        type: "fill",
        question: "She ___ swim very well.",
        answer: "can't",
        explanation: "can't 表示不能，她游泳游得不好",
        translation: "她游泳游得不好。"
      },
      {
        type: "fill",
        question: "He ___ drive a car.",
        answer: "can't",
        explanation: "can't 表示不能，他不能開車",
        translation: "他不能開車。"
      },
      {
        type: "fill",
        question: "They ___ play the piano.",
        answer: "can't",
        explanation: "can't 表示不能，他們不能彈鋼琴",
        translation: "他們不能彈鋼琴。"
      },
      {
        type: "fill",
        question: "We ___ help you today.",
        answer: "can't",
        explanation: "can't 表示不能，我們今天不能幫你",
        translation: "我們今天不能幫你。"
      },
      {
        type: "choice",
        question: "My sister ___ cook well.",
        options: ["can't", "isn't"],
        answer: 0,
        explanation: "can't 表示不能，不是 isn't",
        translation: "我妹妹不會煮飯。"
      },
      {
        type: "fill",
        question: "The children ___ read yet.",
        answer: "can't",
        explanation: "can't 表示不能，孩子們還不會讀書",
        translation: "孩子們還不會讀書。"
      },
      {
        type: "choice",
        question: "My father ___ fix computers.",
        options: ["can't", "isn't"],
        answer: 0,
        explanation: "can't 表示不能，不是 isn't",
        translation: "我爸爸不會修理電腦。"
      },
      {
        type: "fill",
        question: "I ___ solve this problem.",
        answer: "can't",
        explanation: "can't 表示不能，我不能解決這個問題",
        translation: "我不能解決這個問題。"
      },
      {
        type: "choice",
        question: "She ___ speak Chinese.",
        options: ["can't", "isn't"],
        answer: 0,
        explanation: "can't 表示不能，不是 isn't",
        translation: "她不會說中文。"
      },
      {
        type: "fill",
        question: "They ___ arrive on time.",
        answer: "can't",
        explanation: "can't 表示不可能，他們不可能準時到達",
        translation: "他們不可能準時到達。"
      },
      {
        type: "choice",
        question: "The weather ___ be nice tomorrow.",
        options: ["can't", "isn't"],
        answer: 0,
        explanation: "can't 表示不可能，不是 isn't",
        translation: "明天天氣不可能很好。"
      },
      {
        type: "fill",
        question: "We ___ meet you today.",
        answer: "can't",
        explanation: "can't 表示不能，我們今天不能見你",
        translation: "我們今天不能見你。"
      },
      {
        type: "choice",
        question: "My brother ___ help you move.",
        options: ["can't", "isn't"],
        answer: 0,
        explanation: "can't 表示不能，不是 isn't",
        translation: "我哥哥不能幫你搬家。"
      },
      {
        type: "fill",
        question: "He ___ answer the question.",
        answer: "can't",
        explanation: "can't 表示不能，他不能回答這個問題",
        translation: "他不能回答這個問題。"
      },
      {
        type: "choice",
        question: "The students ___ finish the project.",
        options: ["can't", "aren't"],
        answer: 0,
        explanation: "can't 表示不能，不是 aren't",
        translation: "學生們不能完成這個專案。"
      },
      {
        type: "fill",
        question: "I ___ sleep well tonight.",
        answer: "can't",
        explanation: "can't 表示不能，我今晚不能睡好",
        translation: "我今晚不能睡好。"
      },
      {
        type: "choice",
        question: "She ___ cook dinner tonight.",
        options: ["can't", "isn't"],
        answer: 0,
        explanation: "can't 表示不能，不是 isn't",
        translation: "她今晚不能煮晚餐。"
      },
      {
        type: "fill",
        question: "They ___ like the movie.",
        answer: "can't",
        explanation: "can't 表示不能，他們不會喜歡那部電影",
        translation: "他們不會喜歡那部電影。"
      },
      {
        type: "choice",
        question: "Your friends ___ come to the party.",
        options: ["can't", "aren't"],
        answer: 0,
        explanation: "can't 表示不能，不是 aren't",
        translation: "你的朋友們今天不能來看你。"
      }
    ]
  },

  // 關卡23：can 問句
  level23: {
    title: "can 問句",
    description: "學習 can 的問句用法（Can + 主詞 + 原形動詞）",
    questions: [
      {
        type: "fill",
        question: "___ you speak English?",
        answer: "Can",
        explanation: "Can 問句詢問能力，你會說英語嗎？",
        translation: "你會說英語嗎？"
      },
      {
        type: "fill",
        question: "___ she swim well?",
        answer: "Can",
        explanation: "Can 問句詢問能力，她游泳游得好嗎？",
        translation: "她游泳游得好嗎？"
      },
      {
        type: "fill",
        question: "___ he drive a car?",
        answer: "Can",
        explanation: "Can 問句詢問能力，他能開車嗎？",
        translation: "他能開車嗎？"
      },
      {
        type: "fill",
        question: "___ they play the piano?",
        answer: "Can",
        explanation: "Can 問句詢問能力，他們能彈鋼琴嗎？",
        translation: "他們能彈鋼琴嗎？"
      },
      {
        type: "fill",
        question: "___ we help you?",
        answer: "Can",
        explanation: "Can 問句詢問可能性，我們能幫你嗎？",
        translation: "我們能幫你嗎？"
      },
      {
        type: "choice",
        question: "___ your sister cook well?",
        options: ["Can", "Is"],
        answer: 0,
        explanation: "Can 問句詢問能力，不是 Is",
        translation: "你妹妹會煮飯嗎？"
      },
      {
        type: "fill",
        question: "___ the children read?",
        answer: "Can",
        explanation: "Can 問句詢問能力，孩子們會讀書嗎？",
        translation: "孩子們會讀書嗎？"
      },
      {
        type: "choice",
        question: "___ your father fix computers?",
        options: ["Can", "Is"],
        answer: 0,
        explanation: "Can 問句詢問能力，不是 Is",
        translation: "你爸爸會修理電腦嗎？"
      },
      {
        type: "fill",
        question: "___ you solve this problem?",
        answer: "Can",
        explanation: "Can 問句詢問能力，你能解決這個問題嗎？",
        translation: "你能解決這個問題嗎？"
      },
      {
        type: "choice",
        question: "___ she speak Chinese?",
        options: ["Can", "Is"],
        answer: 0,
        explanation: "Can 問句詢問能力，不是 Is",
        translation: "她會說中文嗎？"
      },
      {
        type: "fill",
        question: "___ they arrive on time?",
        answer: "Can",
        explanation: "Can 問句詢問可能性，他們能準時到達嗎？",
        translation: "他們能準時到達嗎？"
      },
      {
        type: "choice",
        question: "___ the weather be nice tomorrow?",
        options: ["Can", "Is"],
        answer: 0,
        explanation: "Can 問句詢問可能性，不是 Is",
        translation: "明天天氣可能會很好嗎？"
      },
      {
        type: "fill",
        question: "___ we meet you tomorrow?",
        answer: "Can",
        explanation: "Can 問句詢問可能性，我們明天能見你嗎？",
        translation: "我們明天能見你嗎？"
      },
      {
        type: "choice",
        question: "___ your brother help you?",
        options: ["Can", "Is"],
        answer: 0,
        explanation: "Can 問句詢問能力，不是 Is",
        translation: "你哥哥能幫你嗎？"
      },
      {
        type: "fill",
        question: "___ he answer the question?",
        answer: "Can",
        explanation: "Can 問句詢問能力，他能回答這個問題嗎？",
        translation: "他能回答這個問題嗎？"
      },
      {
        type: "choice",
        question: "___ the students finish the project?",
        options: ["Can", "Are"],
        answer: 0,
        explanation: "Can 問句詢問能力，不是 Are",
        translation: "學生們能完成這個專案嗎？"
      },
      {
        type: "fill",
        question: "___ you sleep well tonight?",
        answer: "Can",
        explanation: "Can 問句詢問可能性，你今晚能睡好嗎？",
        translation: "你今晚能睡好嗎？"
      },
      {
        type: "choice",
        question: "___ she cook dinner tonight?",
        options: ["Can", "Is"],
        answer: 0,
        explanation: "Can 問句詢問能力，不是 Is",
        translation: "她會煮晚餐嗎？"
      },
      {
        type: "fill",
        question: "___ they come to the party?",
        answer: "Can",
        explanation: "Can 問句詢問可能性，他們能來派對嗎？",
        translation: "他們能來派對嗎？"
      },
      {
        type: "choice",
        question: "___ your friends visit you?",
        options: ["Can", "Are"],
        answer: 0,
        explanation: "Can 問句詢問可能性，不是 Are",
        translation: "你的朋友們能來看你嗎？"
      }
    ]
  },

  // 關卡24：比較級
  level24: {
    title: "比較級",
    description: "學習形容詞和副詞的比較級用法（-er, more, less）",
    questions: [
      {
        type: "fill",
        question: "This book is ___ than that one.",
        answer: "bigger",
        explanation: "big 的比較級是 bigger（短形容詞加 -er）",
        translation: "這本書比那本大。"
      },
      {
        type: "fill",
        question: "She is ___ than her sister.",
        answer: "taller",
        explanation: "tall 的比較級是 taller（短形容詞加 -er）",
        translation: "她比她妹妹高。"
      },
      {
        type: "fill",
        question: "He runs ___ than me.",
        answer: "faster",
        explanation: "fast 的比較級是 faster（短形容詞加 -er）",
        translation: "他跑得比我快。"
      },
      {
        type: "fill",
        question: "This movie is ___ than that one.",
        answer: "better",
        explanation: "good 的比較級是不規則變化 better",
        translation: "這部電影比那部好。"
      },
      {
        type: "fill",
        question: "The weather is ___ today.",
        answer: "worse",
        explanation: "bad 的比較級是不規則變化 worse",
        translation: "今天天氣更糟。"
      },
      {
        type: "choice",
        question: "This car is ___ than that car.",
        options: ["more expensive", "expensiver"],
        answer: 0,
        explanation: "expensive 是多音節形容詞，用 more expensive",
        translation: "這輛車比那輛貴。"
      },
      {
        type: "fill",
        question: "She studies ___ than her brother.",
        answer: "harder",
        explanation: "hard 的比較級是 harder（短形容詞加 -er）",
        translation: "她比她哥哥用功。"
      },
      {
        type: "choice",
        question: "This problem is ___ than the last one.",
        options: ["more difficult", "difficulter"],
        answer: 0,
        explanation: "difficult 是多音節形容詞，用 more difficult",
        translation: "這個問題比上一個難。"
      },
      {
        type: "fill",
        question: "I am ___ than you.",
        answer: "older",
        explanation: "old 的比較級是 older（短形容詞加 -er）",
        translation: "我比你大。"
      },
      {
        type: "choice",
        question: "This restaurant is ___ than that one.",
        options: ["more popular", "populareer"],
        answer: 0,
        explanation: "popular 是多音節形容詞，用 more popular",
        translation: "這家餐廳比那家受歡迎。"
      },
      {
        type: "fill",
        question: "He speaks English ___ than me.",
        answer: "better",
        explanation: "well 的比較級是不規則變化 better",
        translation: "他英語說得比我好。"
      },
      {
        type: "choice",
        question: "This computer is ___ than the old one.",
        options: ["more powerful", "powerfuller"],
        answer: 0,
        explanation: "powerful 是多音節形容詞，用 more powerful",
        translation: "這台電腦比舊的強。"
      },
      {
        type: "fill",
        question: "She is ___ than her friend.",
        answer: "younger",
        explanation: "young 的比較級是 younger（短形容詞加 -er）",
        translation: "她比她朋友年輕。"
      },
      {
        type: "choice",
        question: "This book is ___ than the other one.",
        options: ["more interesting", "interestinger"],
        answer: 0,
        explanation: "interesting 是多音節形容詞，用 more interesting",
        translation: "這本書比另一本有趣。"
      },
      {
        type: "fill",
        question: "He works ___ than before.",
        answer: "harder",
        explanation: "hard 的比較級是 harder（短形容詞加 -er）",
        translation: "他比以前更努力工作。"
      },
      {
        type: "choice",
        question: "This city is ___ than my hometown.",
        options: ["more crowded", "crowdeder"],
        answer: 0,
        explanation: "crowded 是多音節形容詞，用 more crowded",
        translation: "這個城市比我的家鄉擁擠。"
      },
      {
        type: "fill",
        question: "She sings ___ than her sister.",
        answer: "better",
        explanation: "well 的比較級是不規則變化 better",
        translation: "她比她妹妹唱得好。"
      },
      {
        type: "choice",
        question: "This movie is ___ than the book.",
        options: ["more exciting", "excitinger"],
        answer: 0,
        explanation: "exciting 是多音節形容詞，用 more exciting",
        translation: "這部電影比書更刺激。"
      },
      {
        type: "fill",
        question: "He is ___ than his brother.",
        answer: "stronger",
        explanation: "strong 的比較級是 stronger（短形容詞加 -er）",
        translation: "他比他哥哥強壯。"
      },
      {
        type: "choice",
        question: "This hotel is ___ than the other one.",
        options: ["more comfortable", "comfortabler"],
        answer: 0,
        explanation: "comfortable 是多音節形容詞，用 more comfortable",
        translation: "這家旅館比另一家舒適。"
      }
    ]
  },

  // 關卡25：星期幾
  level25: {
    title: "星期幾",
    description: "學習星期幾的英文表達與用法",
    questions: [
      {
        type: "fill",
        question: "What day is it today? It's ___.",
        answer: "Monday",
        explanation: "Monday 是星期一",
        translation: "今天是星期幾？今天是星期一。"
      },
      {
        type: "fill",
        question: "I have English class on ___.",
        answer: "Tuesday",
        explanation: "Tuesday 是星期二",
        translation: "我星期二有英語課。"
      },
      {
        type: "fill",
        question: "The meeting is on ___.",
        answer: "Wednesday",
        explanation: "Wednesday 是星期三",
        translation: "會議在星期三。"
      },
      {
        type: "fill",
        question: "She goes to the gym on ___.",
        answer: "Thursday",
        explanation: "Thursday 是星期四",
        translation: "她星期四去健身房。"
      },
      {
        type: "fill",
        question: "We have a party on ___.",
        answer: "Friday",
        explanation: "Friday 是星期五",
        translation: "我們星期五有派對。"
      },
      {
        type: "choice",
        question: "What day comes after Friday?",
        options: ["Saturday", "Sunday"],
        answer: 0,
        explanation: "星期五之後是星期六 Saturday",
        translation: "星期五之後是星期幾？星期六。"
      },
      {
        type: "fill",
        question: "I like to sleep late on ___.",
        answer: "Saturday",
        explanation: "Saturday 是星期六",
        translation: "我喜歡星期六睡懶覺。"
      },
      {
        type: "choice",
        question: "What day is the first day of the week?",
        options: ["Monday", "Sunday"],
        answer: 1,
        explanation: "一週的第一天是星期日 Sunday",
        translation: "一週的第一天是星期幾？星期日。"
      },
      {
        type: "fill",
        question: "The store is closed on ___.",
        answer: "Sunday",
        explanation: "Sunday 是星期日",
        translation: "商店星期日休息。"
      },
      {
        type: "choice",
        question: "What day comes before Tuesday?",
        options: ["Monday", "Wednesday"],
        answer: 0,
        explanation: "星期二之前是星期一 Monday",
        translation: "星期二之前是星期幾？星期一。"
      },
      {
        type: "fill",
        question: "I have a doctor's appointment on ___.",
        answer: "Wednesday",
        explanation: "Wednesday 是星期三",
        translation: "我星期三有醫生預約。"
      },
      {
        type: "choice",
        question: "What day is in the middle of the week?",
        options: ["Wednesday", "Thursday"],
        answer: 0,
        explanation: "一週的中間是星期三 Wednesday",
        translation: "一週的中間是星期幾？星期三。"
      },
      {
        type: "fill",
        question: "The movie starts on ___.",
        answer: "Friday",
        explanation: "Friday 是星期五",
        translation: "電影星期五開始。"
      },
      {
        type: "choice",
        question: "What day comes after Thursday?",
        options: ["Friday", "Saturday"],
        answer: 0,
        explanation: "星期四之後是星期五 Friday",
        translation: "星期四之後是星期幾？星期五。"
      },
      {
        type: "fill",
        question: "I go shopping on ___.",
        answer: "Saturday",
        explanation: "Saturday 是星期六",
        translation: "我星期六去購物。"
      },
      {
        type: "choice",
        question: "What day is the last day of the week?",
        options: ["Saturday", "Sunday"],
        answer: 0,
        explanation: "一週的最後一天是星期六 Saturday",
        translation: "一週的最後一天是星期幾？星期六。"
      },
      {
        type: "fill",
        question: "The library is open on ___.",
        answer: "Monday",
        explanation: "Monday 是星期一",
        translation: "圖書館星期一開放。"
      },
      {
        type: "choice",
        question: "What day comes before Wednesday?",
        options: ["Tuesday", "Thursday"],
        answer: 0,
        explanation: "星期三之前是星期二 Tuesday",
        translation: "星期三之前是星期幾？星期二。"
      },
      {
        type: "fill",
        question: "I have a meeting on ___.",
        answer: "Thursday",
        explanation: "Thursday 是星期四",
        translation: "我星期四有會議。"
      },
      {
        type: "choice",
        question: "What day is the weekend?",
        options: ["Saturday and Sunday", "Friday and Saturday"],
        answer: 0,
        explanation: "週末是星期六和星期日 Saturday and Sunday",
        translation: "週末是星期幾？星期六和星期日。"
      }
    ]
  },

  // 關卡26：動詞 + to + 動詞
  level26: {
    title: "動詞 + to + 動詞",
    description: "學習動詞後接 to + 原形動詞的用法（不定詞）",
    questions: [
      {
        type: "fill",
        question: "I want ___ go to school.",
        answer: "to",
        explanation: "want 後接 to + 原形動詞",
        translation: "我想去學校。"
      },
      {
        type: "fill",
        question: "She likes ___ read books.",
        answer: "to",
        explanation: "like 後接 to + 原形動詞",
        translation: "她喜歡讀書。"
      },
      {
        type: "fill",
        question: "He needs ___ study for the test.",
        answer: "to",
        explanation: "need 後接 to + 原形動詞",
        translation: "他需要為考試讀書。"
      },
      {
        type: "fill",
        question: "They plan ___ visit Japan.",
        answer: "to",
        explanation: "plan 後接 to + 原形動詞",
        translation: "他們計劃去日本。"
      },
      {
        type: "fill",
        question: "We hope ___ see you soon.",
        answer: "to",
        explanation: "hope 後接 to + 原形動詞",
        translation: "我們希望很快見到你。"
      },
      {
        type: "choice",
        question: "My sister wants ___ learn English.",
        options: ["to", "for"],
        answer: 0,
        explanation: "want 後接 to + 原形動詞，不是 for",
        translation: "我妹妹想學英語。"
      },
      {
        type: "fill",
        question: "The children love ___ play games.",
        answer: "to",
        explanation: "love 後接 to + 原形動詞",
        translation: "孩子們喜歡玩遊戲。"
      },
      {
        type: "choice",
        question: "My father needs ___ work late.",
        options: ["to", "for"],
        answer: 0,
        explanation: "need 後接 to + 原形動詞，不是 for",
        translation: "我爸爸需要工作到很晚。"
      },
      {
        type: "fill",
        question: "I decide ___ buy a new car.",
        answer: "to",
        explanation: "decide 後接 to + 原形動詞",
        translation: "我決定買一輛新車。"
      },
      {
        type: "choice",
        question: "She tries ___ finish her homework.",
        options: ["to", "for"],
        answer: 0,
        explanation: "try 後接 to + 原形動詞，不是 for",
        translation: "她試著完成作業。"
      },
      {
        type: "fill",
        question: "They agree ___ help us.",
        answer: "to",
        explanation: "agree 後接 to + 原形動詞",
        translation: "他們同意幫助我們。"
      },
      {
        type: "choice",
        question: "The students learn ___ speak English.",
        options: ["to", "for"],
        answer: 0,
        explanation: "learn 後接 to + 原形動詞，不是 for",
        translation: "學生們學習說英語。"
      },
      {
        type: "fill",
        question: "We expect ___ arrive on time.",
        answer: "to",
        explanation: "expect 後接 to + 原形動詞",
        translation: "我們期望準時到達。"
      },
      {
        type: "choice",
        question: "My brother promises ___ help me.",
        options: ["to", "for"],
        answer: 0,
        explanation: "promise 後接 to + 原形動詞，不是 for",
        translation: "我哥哥答應幫助我。"
      },
      {
        type: "fill",
        question: "He offers ___ drive us home.",
        answer: "to",
        explanation: "offer 後接 to + 原形動詞",
        translation: "他提議開車送我們回家。"
      },
      {
        type: "choice",
        question: "The teacher asks us ___ study hard.",
        options: ["to", "for"],
        answer: 0,
        explanation: "ask 後接 to + 原形動詞，不是 for",
        translation: "老師要求我們用功讀書。"
      },
      {
        type: "fill",
        question: "I forget ___ bring my keys.",
        answer: "to",
        explanation: "forget 後接 to + 原形動詞",
        translation: "我忘記帶鑰匙。"
      },
      {
        type: "choice",
        question: "She remembers ___ call her mother.",
        options: ["to", "for"],
        answer: 0,
        explanation: "remember 後接 to + 原形動詞，不是 for",
        translation: "她記得打電話給媽媽。"
      },
      {
        type: "fill",
        question: "They choose ___ stay home.",
        answer: "to",
        explanation: "choose 後接 to + 原形動詞",
        translation: "他們選擇待在家。"
      },
      {
        type: "choice",
        question: "My friends want ___ come to the party.",
        options: ["to", "for"],
        answer: 0,
        explanation: "want 後接 to + 原形動詞，不是 for",
        translation: "我的朋友們想來派對。"
      }
    ]
  },

  // 關卡27：be looking for 購物
  level27: {
    title: "be looking for 購物",
    description: "學習購物時使用 be looking for 的問句與回答",
    questions: [
      {
        type: "fill",
        question: "I am looking ___ a new book.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "我正在找一本新書。"
      },
      {
        type: "fill",
        question: "She is looking ___ a red dress.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "她正在找一件紅色洋裝。"
      },
      {
        type: "fill",
        question: "He is looking ___ his keys.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "他正在找他的鑰匙。"
      },
      {
        type: "fill",
        question: "They are looking ___ a gift.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "他們正在找禮物。"
      },
      {
        type: "fill",
        question: "We are looking ___ a restaurant.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "我們正在找餐廳。"
      },
      {
        type: "choice",
        question: "What are you looking ___?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問正在尋找什麼",
        translation: "你在找什麼？"
      },
      {
        type: "fill",
        question: "The children are looking ___ their toys.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "孩子們正在找他們的玩具。"
      },
      {
        type: "choice",
        question: "Are you looking ___ something?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問是否在尋找某物",
        translation: "你在找什麼東西嗎？"
      },
      {
        type: "fill",
        question: "I am looking ___ a birthday present.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "我正在找生日禮物。"
      },
      {
        type: "choice",
        question: "What is she looking ___?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問正在尋找什麼",
        translation: "她在找什麼？"
      },
      {
        type: "fill",
        question: "He is looking ___ his phone.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "他正在找他的手機。"
      },
      {
        type: "choice",
        question: "Are they looking ___ a hotel?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問是否在尋找某物",
        translation: "他們在找旅館嗎？"
      },
      {
        type: "fill",
        question: "We are looking ___ a good movie.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "我們正在找一部好電影。"
      },
      {
        type: "choice",
        question: "What are you looking ___ today?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問今天在尋找什麼",
        translation: "你今天在找什麼？"
      },
      {
        type: "fill",
        question: "She is looking ___ a new job.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "她正在找新工作。"
      },
      {
        type: "choice",
        question: "Is he looking ___ his wallet?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問是否在尋找某物",
        translation: "他在找他的錢包嗎？"
      },
      {
        type: "fill",
        question: "They are looking ___ a parking space.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "他們正在找停車位。"
      },
      {
        type: "choice",
        question: "What is everyone looking ___?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問大家在尋找什麼",
        translation: "大家在找什麼？"
      },
      {
        type: "fill",
        question: "I am looking ___ my glasses.",
        answer: "for",
        explanation: "be looking for 表示正在尋找某物",
        translation: "我正在找我的眼鏡。"
      },
      {
        type: "choice",
        question: "Are you looking ___ anything special?",
        options: ["for", "at"],
        answer: 0,
        explanation: "be looking for 詢問是否在尋找特別的東西",
        translation: "你在找什麼特別的東西嗎？"
      }
    ]
  },

  // 關卡28：look like / be like / like
  level28: {
    title: "look like / be like / like",
    description: "學習 look like（長得像）、be like（像）、like（喜歡）的用法",
    questions: [
      {
        type: "fill",
        question: "She looks ___ her mother.",
        answer: "like",
        explanation: "look like 表示長得像某人",
        translation: "她長得像她媽媽。"
      },
      {
        type: "fill",
        question: "I like ___ pizza.",
        answer: "to eat",
        explanation: "like to + 動詞表示喜歡做某事",
        translation: "我喜歡吃披薩。"
      },
      {
        type: "fill",
        question: "What is your teacher ___?",
        answer: "like",
        explanation: "be like 詢問某人的性格或特徵",
        translation: "你的老師是什麼樣的人？"
      },
      {
        type: "fill",
        question: "He looks ___ a movie star.",
        answer: "like",
        explanation: "look like 表示長得像某人",
        translation: "他長得像電影明星。"
      },
      {
        type: "fill",
        question: "They like ___ music.",
        answer: "listening to",
        explanation: "like + 動名詞表示喜歡做某事",
        translation: "他們喜歡聽音樂。"
      },
      {
        type: "choice",
        question: "What does your sister look ___?",
        options: ["like", "as"],
        answer: 0,
        explanation: "look like 詢問外表長相",
        translation: "你妹妹長什麼樣子？"
      },
      {
        type: "fill",
        question: "My brother is ___ my father.",
        answer: "like",
        explanation: "be like 表示性格或行為像某人",
        translation: "我哥哥像我爸爸。"
      },
      {
        type: "choice",
        question: "Do you like ___ coffee?",
        options: ["drinking", "to drink"],
        answer: 0,
        explanation: "like + 動名詞表示喜歡做某事",
        translation: "你喜歡喝咖啡嗎？"
      },
      {
        type: "fill",
        question: "She looks ___ an angel.",
        answer: "like",
        explanation: "look like 表示長得像某人或某物",
        translation: "她長得像天使。"
      },
      {
        type: "choice",
        question: "What is your job ___?",
        options: ["like", "as"],
        answer: 0,
        explanation: "be like 詢問工作性質或狀況",
        translation: "你的工作是什麼樣的？"
      },
      {
        type: "fill",
        question: "I like ___ books.",
        answer: "reading",
        explanation: "like + 動名詞表示喜歡做某事",
        translation: "我喜歡讀書。"
      },
      {
        type: "choice",
        question: "Does he look ___ his brother?",
        options: ["like", "as"],
        answer: 0,
        explanation: "look like 詢問是否長得像某人",
        translation: "他長得像他哥哥嗎？"
      },
      {
        type: "fill",
        question: "The weather is ___ spring.",
        answer: "like",
        explanation: "be like 表示像某個季節",
        translation: "天氣像春天。"
      },
      {
        type: "choice",
        question: "Do you like ___ movies?",
        options: ["watching", "to watch"],
        answer: 0,
        explanation: "like + 動名詞表示喜歡做某事",
        translation: "你喜歡看電影嗎？"
      },
      {
        type: "fill",
        question: "He looks ___ he is tired.",
        answer: "like",
        explanation: "look like 表示看起來像某種狀態",
        translation: "他看起來很累。"
      },
      {
        type: "choice",
        question: "What is your house ___?",
        options: ["like", "as"],
        answer: 0,
        explanation: "be like 詢問房子的狀況或特徵",
        translation: "你的房子是什麼樣的？"
      },
      {
        type: "fill",
        question: "She likes ___ shopping.",
        answer: "going",
        explanation: "like + 動名詞表示喜歡做某事",
        translation: "她喜歡購物。"
      },
      {
        type: "choice",
        question: "Does it look ___ rain?",
        options: ["like", "as"],
        answer: 0,
        explanation: "look like 詢問是否看起來要下雨",
        translation: "看起來要下雨嗎？"
      },
      {
        type: "fill",
        question: "My friend is ___ a brother to me.",
        answer: "like",
        explanation: "be like 表示像某種關係",
        translation: "我的朋友對我來說像兄弟。"
      },
      {
        type: "choice",
        question: "Do they like ___ sports?",
        options: ["playing", "to play"],
        answer: 0,
        explanation: "like + 動名詞表示喜歡做某事",
        translation: "他們喜歡運動嗎？"
      }
    ]
  },

  // 關卡29：現在式一般動詞和be動詞混合題型
  level29: {
    title: "現在式一般動詞和be動詞混合題型",
    description: "學習現在式一般動詞和be動詞的混合用法",
    questions: [
      {
        type: "fill",
        question: "I ___ a student and I ___ English.",
        answer: "am, study",
        explanation: "第一句用be動詞am，第二句用一般動詞study",
        translation: "我是學生，我學習英語。"
      },
      {
        type: "fill",
        question: "She ___ happy and she ___ to school.",
        answer: "is, goes",
        explanation: "第一句用be動詞is，第二句用一般動詞goes",
        translation: "她很開心，她去學校。"
      },
      {
        type: "fill",
        question: "They ___ students and they ___ hard.",
        answer: "are, study",
        explanation: "第一句用be動詞are，第二句用一般動詞study",
        translation: "他們是學生，他們用功讀書。"
      },
      {
        type: "fill",
        question: "He ___ tall and he ___ basketball.",
        answer: "is, plays",
        explanation: "第一句用be動詞is，第二句用一般動詞plays",
        translation: "他很高，他打籃球。"
      },
      {
        type: "fill",
        question: "We ___ friends and we ___ together.",
        answer: "are, play",
        explanation: "第一句用be動詞are，第二句用一般動詞play",
        translation: "我們是朋友，我們一起玩。"
      },
      {
        type: "choice",
        question: "My sister ___ beautiful and she ___ music.",
        options: ["is, likes", "are, like"],
        answer: 0,
        explanation: "第三人稱單數用is和likes",
        translation: "我妹妹很美，她喜歡音樂。"
      },
      {
        type: "fill",
        question: "The children ___ young and they ___ games.",
        answer: "are, play",
        explanation: "複數主詞用are和play",
        translation: "孩子們很年輕，他們玩遊戲。"
      },
      {
        type: "choice",
        question: "My father ___ busy and he ___ late.",
        options: ["is, works", "are, work"],
        answer: 0,
        explanation: "第三人稱單數用is和works",
        translation: "我爸爸很忙，他工作到很晚。"
      },
      {
        type: "fill",
        question: "I ___ hungry and I ___ food.",
        answer: "am, want",
        explanation: "第一人稱單數用am和want",
        translation: "我很餓，我想要食物。"
      },
      {
        type: "choice",
        question: "She ___ smart and she ___ books.",
        options: ["is, reads", "are, read"],
        answer: 0,
        explanation: "第三人稱單數用is和reads",
        translation: "她很聰明，她讀書。"
      },
      {
        type: "fill",
        question: "They ___ tired and they ___ to sleep.",
        answer: "are, want",
        explanation: "複數主詞用are和want",
        translation: "他們很累，他們想睡覺。"
      },
      {
        type: "choice",
        question: "The dog ___ big and it ___ loudly.",
        options: ["is, barks", "are, bark"],
        answer: 0,
        explanation: "第三人稱單數用is和barks",
        translation: "狗很大，它叫得很大聲。"
      },
      {
        type: "fill",
        question: "We ___ happy and we ___ songs.",
        answer: "are, sing",
        explanation: "第一人稱複數用are和sing",
        translation: "我們很開心，我們唱歌。"
      },
      {
        type: "choice",
        question: "My brother ___ strong and he ___ sports.",
        options: ["is, plays", "are, play"],
        answer: 0,
        explanation: "第三人稱單數用is和plays",
        translation: "我哥哥很強壯，他運動。"
      },
      {
        type: "fill",
        question: "You ___ kind and you ___ others.",
        answer: "are, help",
        explanation: "第二人稱用are和help",
        translation: "你很善良，你幫助別人。"
      },
      {
        type: "choice",
        question: "The cat ___ small and it ___ milk.",
        options: ["is, drinks", "are, drink"],
        answer: 0,
        explanation: "第三人稱單數用is和drinks",
        translation: "貓很小，它喝牛奶。"
      },
      {
        type: "fill",
        question: "I ___ thirsty and I ___ water.",
        answer: "am, drink",
        explanation: "第一人稱單數用am和drink",
        translation: "我很渴，我喝水。"
      },
      {
        type: "choice",
        question: "She ___ quiet and she ___ to music.",
        options: ["is, listens", "are, listen"],
        answer: 0,
        explanation: "第三人稱單數用is和listens",
        translation: "她很安靜，她聽音樂。"
      },
      {
        type: "fill",
        question: "They ___ excited and they ___ to the park.",
        answer: "are, go",
        explanation: "複數主詞用are和go",
        translation: "他們很興奮，他們去公園。"
      },
      {
        type: "choice",
        question: "My mother ___ kind and she ___ delicious food.",
        options: ["is, cooks", "are, cook"],
        answer: 0,
        explanation: "第三人稱單數用is和cooks",
        translation: "我媽媽很善良，她煮美味的食物。"
      }
    ]
  },

  // 關卡30：一般動詞現在式混合題型
  level30: {
    title: "一般動詞現在式混合題型",
    description: "學習一般動詞現在式的混合用法（原形與第三人稱單數）",
    questions: [
      {
        type: "fill",
        question: "I ___ English and he ___ French.",
        answer: "speak, speaks",
        explanation: "第一人稱用原形speak，第三人稱單數用speaks",
        translation: "我說英語，他說法語。"
      },
      {
        type: "fill",
        question: "She ___ to school and they ___ to work.",
        answer: "goes, go",
        explanation: "第三人稱單數用goes，複數用go",
        translation: "她去學校，他們去工作。"
      },
      {
        type: "fill",
        question: "We ___ basketball and he ___ soccer.",
        answer: "play, plays",
        explanation: "第一人稱複數用play，第三人稱單數用plays",
        translation: "我們打籃球，他踢足球。"
      },
      {
        type: "fill",
        question: "They ___ books and she ___ magazines.",
        answer: "read, reads",
        explanation: "複數用read，第三人稱單數用reads",
        translation: "他們讀書，她讀雜誌。"
      },
      {
        type: "fill",
        question: "You ___ TV and I ___ movies.",
        answer: "watch, watch",
        explanation: "第二人稱和第一人稱都用原形watch",
        translation: "你看電視，我看電影。"
      },
      {
        type: "choice",
        question: "My sister ___ music and my brothers ___ sports.",
        options: ["likes, like", "like, likes"],
        answer: 0,
        explanation: "第三人稱單數用likes，複數用like",
        translation: "我妹妹喜歡音樂，我兄弟們喜歡運動。"
      },
      {
        type: "fill",
        question: "The children ___ games and the dog ___ in the park.",
        answer: "play, runs",
        explanation: "複數用play，第三人稱單數用runs",
        translation: "孩子們玩遊戲，狗在公園跑。"
      },
      {
        type: "choice",
        question: "My father ___ late and my mother ___ early.",
        options: ["works, works", "work, work"],
        answer: 0,
        explanation: "第三人稱單數都用works",
        translation: "我爸爸工作到很晚，我媽媽工作很早。"
      },
      {
        type: "fill",
        question: "I ___ homework and she ___ piano.",
        answer: "do, plays",
        explanation: "第一人稱用do，第三人稱單數用plays",
        translation: "我做作業，她彈鋼琴。"
      },
      {
        type: "choice",
        question: "He ___ fast and they ___ slowly.",
        options: ["runs, walk", "run, walks"],
        answer: 0,
        explanation: "第三人稱單數用runs，複數用walk",
        translation: "他跑得快，他們走得慢。"
      },
      {
        type: "fill",
        question: "We ___ dinner and he ___ lunch.",
        answer: "cook, cooks",
        explanation: "第一人稱複數用cook，第三人稱單數用cooks",
        translation: "我們煮晚餐，他煮午餐。"
      },
      {
        type: "choice",
        question: "The students ___ hard and the teacher ___ clearly.",
        options: ["study, explains", "studies, explain"],
        answer: 0,
        explanation: "複數用study，第三人稱單數用explains",
        translation: "學生們用功讀書，老師清楚地解釋。"
      },
      {
        type: "fill",
        question: "They ___ to music and she ___ songs.",
        answer: "listen, sings",
        explanation: "複數用listen，第三人稱單數用sings",
        translation: "他們聽音樂，她唱歌。"
      },
      {
        type: "choice",
        question: "My brother ___ computers and I ___ phones.",
        options: ["fixes, fix", "fix, fixes"],
        answer: 0,
        explanation: "第三人稱單數用fixes，第一人稱用fix",
        translation: "我哥哥修理電腦，我修理手機。"
      },
      {
        type: "fill",
        question: "You ___ English and he ___ Chinese.",
        answer: "speak, speaks",
        explanation: "第二人稱用speak，第三人稱單數用speaks",
        translation: "你說英語，他說中文。"
      },
      {
        type: "choice",
        question: "The cat ___ milk and the dogs ___ water.",
        options: ["drinks, drink", "drink, drinks"],
        answer: 0,
        explanation: "第三人稱單數用drinks，複數用drink",
        translation: "貓喝牛奶，狗喝水。"
      },
      {
        type: "fill",
        question: "I ___ books and she ___ newspapers.",
        answer: "read, reads",
        explanation: "第一人稱用read，第三人稱單數用reads",
        translation: "我讀書，她讀報紙。"
      },
      {
        type: "choice",
        question: "We ___ in the morning and he ___ at night.",
        options: ["exercise, exercises", "exercises, exercise"],
        answer: 0,
        explanation: "第一人稱複數用exercise，第三人稱單數用exercises",
        translation: "我們早上運動，他晚上運動。"
      },
      {
        type: "fill",
        question: "They ___ pictures and she ___ paintings.",
        answer: "draw, draws",
        explanation: "複數用draw，第三人稱單數用draws",
        translation: "他們畫圖，她畫畫。"
      },
      {
        type: "choice",
        question: "My friends ___ movies and my sister ___ TV.",
        options: ["watch, watches", "watches, watch"],
        answer: 0,
        explanation: "複數用watch，第三人稱單數用watches",
        translation: "我的朋友們看電影，我妹妹看電視。"
      }
    ]
  },

  // 關卡31：人稱代名詞受格
  level31: {
    title: "人稱代名詞受格",
    description: "學習人稱代名詞受格的用法（me, you, him, her, it, us, them）",
    questions: [
      {
        type: "fill",
        question: "She likes ___ very much.",
        answer: "me",
        explanation: "me 是第一人稱單數受格，在動詞後作受詞",
        translation: "她很喜歡我。"
      },
      {
        type: "fill",
        question: "I see ___ every day.",
        answer: "you",
        explanation: "you 是第二人稱受格，在動詞後作受詞",
        translation: "我每天見到你。"
      },
      {
        type: "fill",
        question: "The teacher helps ___ with homework.",
        answer: "him",
        explanation: "him 是第三人稱單數男性受格",
        translation: "老師幫助他做作業。"
      },
      {
        type: "fill",
        question: "My mother loves ___ very much.",
        answer: "her",
        explanation: "her 是第三人稱單數女性受格",
        translation: "我媽媽很愛她。"
      },
      {
        type: "fill",
        question: "We like ___ because it's cute.",
        answer: "it",
        explanation: "it 是第三人稱單數中性受格",
        translation: "我們喜歡它，因為它很可愛。"
      },
      {
        type: "choice",
        question: "The students follow ___ to the library.",
        options: ["us", "we"],
        answer: 0,
        explanation: "us 是第一人稱複數受格，不是主格we",
        translation: "學生們跟隨我們到圖書館。"
      },
      {
        type: "fill",
        question: "I give ___ a book.",
        answer: "them",
        explanation: "them 是第三人稱複數受格",
        translation: "我給他們一本書。"
      },
      {
        type: "choice",
        question: "She calls ___ every night.",
        options: ["me", "I"],
        answer: 0,
        explanation: "me 是受格，不是主格I",
        translation: "她每天晚上打電話給我。"
      },
      {
        type: "fill",
        question: "The dog follows ___ home.",
        answer: "us",
        explanation: "us 是第一人稱複數受格",
        translation: "狗跟隨我們回家。"
      },
      {
        type: "choice",
        question: "My brother teaches ___ English.",
        options: ["me", "I"],
        answer: 0,
        explanation: "me 是受格，不是主格I",
        translation: "我哥哥教我英語。"
      },
      {
        type: "fill",
        question: "They invite ___ to the party.",
        answer: "us",
        explanation: "us 是第一人稱複數受格",
        translation: "他們邀請我們參加派對。"
      },
      {
        type: "choice",
        question: "The teacher asks ___ a question.",
        options: ["him", "he"],
        answer: 0,
        explanation: "him 是受格，不是主格he",
        translation: "老師問他一個問題。"
      },
      {
        type: "fill",
        question: "I send ___ a message.",
        answer: "her",
        explanation: "her 是第三人稱單數女性受格",
        translation: "我發訊息給她。"
      },
      {
        type: "choice",
        question: "My friends help ___ with homework.",
        options: ["me", "I"],
        answer: 0,
        explanation: "me 是受格，不是主格I",
        translation: "我的朋友們幫助我做作業。"
      },
      {
        type: "fill",
        question: "We show ___ the pictures.",
        answer: "them",
        explanation: "them 是第三人稱複數受格",
        translation: "我們給他們看照片。"
      },
      {
        type: "choice",
        question: "The cat likes ___ very much.",
        options: ["it", "its"],
        answer: 0,
        explanation: "it 是受格，its 是所有格",
        translation: "貓很喜歡它。"
      },
      {
        type: "fill",
        question: "He tells ___ a story.",
        answer: "us",
        explanation: "us 是第一人稱複數受格",
        translation: "他給我們講故事。"
      },
      {
        type: "choice",
        question: "My sister visits ___ every weekend.",
        options: ["me", "I"],
        answer: 0,
        explanation: "me 是受格，不是主格I",
        translation: "我妹妹每個週末來看我。"
      },
      {
        type: "fill",
        question: "They bring ___ some food.",
        answer: "us",
        explanation: "us 是第一人稱複數受格",
        translation: "他們帶給我們一些食物。"
      },
      {
        type: "choice",
        question: "The teacher explains the lesson to ___.",
        options: ["them", "they"],
        answer: 0,
        explanation: "them 是受格，不是主格they",
        translation: "老師向他們解釋課程。"
      }
    ]
  },

  // 關卡32：所有格代名詞
  level32: {
    title: "所有格代名詞",
    description: "學習所有格代名詞的用法（mine, yours, his, hers, its, ours, theirs）",
    questions: [
      {
        type: "fill",
        question: "This book is ___.",
        answer: "mine",
        explanation: "mine 是第一人稱單數所有格代名詞",
        translation: "這本書是我的。"
      },
      {
        type: "fill",
        question: "That car is ___.",
        answer: "yours",
        explanation: "yours 是第二人稱所有格代名詞",
        translation: "那輛車是你的。"
      },
      {
        type: "fill",
        question: "The red bag is ___.",
        answer: "hers",
        explanation: "hers 是第三人稱單數女性所有格代名詞",
        translation: "紅色包包是她的。"
      },
      {
        type: "fill",
        question: "The blue shirt is ___.",
        answer: "his",
        explanation: "his 是第三人稱單數男性所有格代名詞",
        translation: "藍色襯衫是他的。"
      },
      {
        type: "fill",
        question: "This house is ___.",
        answer: "ours",
        explanation: "ours 是第一人稱複數所有格代名詞",
        translation: "這棟房子是我們的。"
      },
      {
        type: "choice",
        question: "The dog's food is ___.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "its 是所有格代名詞，it's 是 it is 的縮寫",
        translation: "狗的食物是它的。"
      },
      {
        type: "fill",
        question: "Those books are ___.",
        answer: "theirs",
        explanation: "theirs 是第三人稱複數所有格代名詞",
        translation: "那些書是他們的。"
      },
      {
        type: "choice",
        question: "This pencil is not ___.",
        options: ["mine", "my"],
        answer: 0,
        explanation: "mine 是所有格代名詞，my 是所有格形容詞",
        translation: "這支鉛筆不是我的。"
      },
      {
        type: "fill",
        question: "The computer is ___.",
        answer: "his",
        explanation: "his 是第三人稱單數男性所有格代名詞",
        translation: "電腦是他的。"
      },
      {
        type: "choice",
        question: "These toys are ___.",
        options: ["ours", "our"],
        answer: 0,
        explanation: "ours 是所有格代名詞，our 是所有格形容詞",
        translation: "這些玩具是我們的。"
      },
      {
        type: "fill",
        question: "That phone is ___.",
        answer: "yours",
        explanation: "yours 是第二人稱所有格代名詞",
        translation: "那支手機是你的。"
      },
      {
        type: "choice",
        question: "The cat's bed is ___.",
        options: ["its", "it's"],
        answer: 0,
        explanation: "its 是所有格代名詞，it's 是 it is 的縮寫",
        translation: "貓的床是它的。"
      },
      {
        type: "fill",
        question: "The keys are ___.",
        answer: "mine",
        explanation: "mine 是第一人稱單數所有格代名詞",
        translation: "鑰匙是我的。"
      },
      {
        type: "choice",
        question: "This room is ___.",
        options: ["hers", "her"],
        answer: 0,
        explanation: "hers 是所有格代名詞，her 是所有格形容詞",
        translation: "這個房間是她的。"
      },
      {
        type: "fill",
        question: "The money is ___.",
        answer: "theirs",
        explanation: "theirs 是第三人稱複數所有格代名詞",
        translation: "錢是他們的。"
      },
      {
        type: "choice",
        question: "That bike is not ___.",
        options: ["yours", "your"],
        answer: 0,
        explanation: "yours 是所有格代名詞，your 是所有格形容詞",
        translation: "那輛腳踏車不是你的。"
      },
      {
        type: "fill",
        question: "The garden is ___.",
        answer: "ours",
        explanation: "ours 是第一人稱複數所有格代名詞",
        translation: "花園是我們的。"
      },
      {
        type: "choice",
        question: "This hat is ___.",
        options: ["his", "he's"],
        answer: 0,
        explanation: "his 是所有格代名詞，he's 是 he is 的縮寫",
        translation: "這頂帽子是他的。"
      },
      {
        type: "fill",
        question: "The shoes are ___.",
        answer: "hers",
        explanation: "hers 是第三人稱單數女性所有格代名詞",
        translation: "鞋子是她的。"
      },
      {
        type: "choice",
        question: "Those cars are ___.",
        options: ["theirs", "their"],
        answer: 0,
        explanation: "theirs 是所有格代名詞，their 是所有格形容詞",
        translation: "那些車是他們的。"
      }
    ]
  },

  // 關卡33：反身代名詞
  level33: {
    title: "反身代名詞",
    description: "學習反身代名詞的用法（myself, yourself, himself, herself, itself, ourselves, yourselves, themselves）",
    questions: [
      {
        type: "fill",
        question: "I hurt ___ when I fell.",
        answer: "myself",
        explanation: "myself 是第一人稱單數反身代名詞",
        translation: "我跌倒時傷到自己。"
      },
      {
        type: "fill",
        question: "You should take care of ___.",
        answer: "yourself",
        explanation: "yourself 是第二人稱單數反身代名詞",
        translation: "你應該照顧自己。"
      },
      {
        type: "fill",
        question: "He cut ___ while cooking.",
        answer: "himself",
        explanation: "himself 是第三人稱單數男性反身代名詞",
        translation: "他煮飯時割到自己。"
      },
      {
        type: "fill",
        question: "She looked at ___ in the mirror.",
        answer: "herself",
        explanation: "herself 是第三人稱單數女性反身代名詞",
        translation: "她在鏡子裡看自己。"
      },
      {
        type: "fill",
        question: "The cat cleaned ___.",
        answer: "itself",
        explanation: "itself 是第三人稱單數中性反身代名詞",
        translation: "貓清理自己。"
      },
      {
        type: "choice",
        question: "We enjoyed ___ at the party.",
        options: ["ourselves", "ourself"],
        answer: 0,
        explanation: "ourselves 是第一人稱複數反身代名詞",
        translation: "我們在派對上玩得很開心。"
      },
      {
        type: "fill",
        question: "They blamed ___ for the mistake.",
        answer: "themselves",
        explanation: "themselves 是第三人稱複數反身代名詞",
        translation: "他們為這個錯誤責怪自己。"
      },
      {
        type: "choice",
        question: "You should be proud of ___.",
        options: ["yourselves", "yourself"],
        answer: 0,
        explanation: "yourselves 是第二人稱複數反身代名詞",
        translation: "你們應該為自己感到驕傲。"
      },
      {
        type: "fill",
        question: "I taught ___ to swim.",
        answer: "myself",
        explanation: "myself 是第一人稱單數反身代名詞",
        translation: "我自學游泳。"
      },
      {
        type: "choice",
        question: "He talked to ___ in the mirror.",
        options: ["himself", "his"],
        answer: 0,
        explanation: "himself 是反身代名詞，his 是所有格",
        translation: "他在鏡子裡對自己說話。"
      },
      {
        type: "fill",
        question: "She bought ___ a new dress.",
        answer: "herself",
        explanation: "herself 是第三人稱單數女性反身代名詞",
        translation: "她為自己買了一件新洋裝。"
      },
      {
        type: "choice",
        question: "The dog scratched ___.",
        options: ["itself", "it's"],
        answer: 0,
        explanation: "itself 是反身代名詞，it's 是 it is 的縮寫",
        translation: "狗抓自己。"
      },
      {
        type: "fill",
        question: "We introduced ___ to the new neighbors.",
        answer: "ourselves",
        explanation: "ourselves 是第一人稱複數反身代名詞",
        translation: "我們向新鄰居介紹自己。"
      },
      {
        type: "choice",
        question: "They helped ___ to the food.",
        options: ["themselves", "their"],
        answer: 0,
        explanation: "themselves 是反身代名詞，their 是所有格",
        translation: "他們自己拿食物。"
      },
      {
        type: "fill",
        question: "I made ___ a sandwich.",
        answer: "myself",
        explanation: "myself 是第一人稱單數反身代名詞",
        translation: "我為自己做三明治。"
      },
      {
        type: "choice",
        question: "You should believe in ___.",
        options: ["yourself", "you"],
        answer: 0,
        explanation: "yourself 是反身代名詞，you 是人稱代名詞",
        translation: "你應該相信自己。"
      },
      {
        type: "fill",
        question: "He found ___ a good job.",
        answer: "himself",
        explanation: "himself 是第三人稱單數男性反身代名詞",
        translation: "他為自己找到好工作。"
      },
      {
        type: "choice",
        question: "She treated ___ to dinner.",
        options: ["herself", "her"],
        answer: 0,
        explanation: "herself 是反身代名詞，her 是所有格",
        translation: "她請自己吃晚餐。"
      },
      {
        type: "fill",
        question: "The children dressed ___.",
        answer: "themselves",
        explanation: "themselves 是第三人稱複數反身代名詞",
        translation: "孩子們自己穿衣服。"
      },
      {
        type: "choice",
        question: "We prepared ___ for the exam.",
        options: ["ourselves", "our"],
        answer: 0,
        explanation: "ourselves 是反身代名詞，our 是所有格",
        translation: "我們為考試做準備。"
      }
    ]
  },

  // 關卡34：可數和不可數名詞
  level34: {
    title: "可數和不可數名詞",
    description: "學習可數名詞和不可數名詞的用法與區別",
    questions: [
      {
        type: "fill",
        question: "I have three ___ in my bag.",
        answer: "books",
        explanation: "book 是可數名詞，可以用數字修飾",
        translation: "我包包裡有三本書。"
      },
      {
        type: "fill",
        question: "She drinks a lot of ___ every day.",
        answer: "water",
        explanation: "water 是不可數名詞，不能用數字修飾",
        translation: "她每天喝很多水。"
      },
      {
        type: "fill",
        question: "There are five ___ on the table.",
        answer: "apples",
        explanation: "apple 是可數名詞，可以用數字修飾",
        translation: "桌上有五顆蘋果。"
      },
      {
        type: "fill",
        question: "He needs some ___ for cooking.",
        answer: "salt",
        explanation: "salt 是不可數名詞，用 some 修飾",
        translation: "他需要一些鹽來煮飯。"
      },
      {
        type: "fill",
        question: "We bought two ___ yesterday.",
        answer: "cars",
        explanation: "car 是可數名詞，可以用數字修飾",
        translation: "我們昨天買了兩輛車。"
      },
      {
        type: "choice",
        question: "How much ___ do you need?",
        options: ["money", "dollars"],
        answer: 0,
        explanation: "money 是不可數名詞，用 how much",
        translation: "你需要多少錢？"
      },
      {
        type: "fill",
        question: "The children have many ___.",
        answer: "toys",
        explanation: "toy 是可數名詞，用 many 修飾",
        translation: "孩子們有很多玩具。"
      },
      {
        type: "choice",
        question: "How many ___ are there?",
        options: ["people", "person"],
        answer: 0,
        explanation: "people 是可數名詞複數，用 how many",
        translation: "有多少人？"
      },
      {
        type: "fill",
        question: "She has little ___ left.",
        answer: "time",
        explanation: "time 是不可數名詞，用 little 修飾",
        translation: "她剩下的時間很少。"
      },
      {
        type: "choice",
        question: "There is a lot of ___ in the room.",
        options: ["furniture", "chairs"],
        answer: 0,
        explanation: "furniture 是不可數名詞，用 a lot of",
        translation: "房間裡有很多家具。"
      },
      {
        type: "fill",
        question: "I have several ___ to read.",
        answer: "magazines",
        explanation: "magazine 是可數名詞，用 several 修飾",
        translation: "我有幾本雜誌要讀。"
      },
      {
        type: "choice",
        question: "How much ___ do you want?",
        options: ["bread", "sandwiches"],
        answer: 0,
        explanation: "bread 是不可數名詞，用 how much",
        translation: "你想要多少麵包？"
      },
      {
        type: "fill",
        question: "There are many ___ in the garden.",
        answer: "flowers",
        explanation: "flower 是可數名詞，用 many 修飾",
        translation: "花園裡有很多花。"
      },
      {
        type: "choice",
        question: "She has a little ___ in her cup.",
        options: ["coffee", "cups"],
        answer: 0,
        explanation: "coffee 是不可數名詞，用 a little",
        translation: "她杯子裡有一點咖啡。"
      },
      {
        type: "fill",
        question: "We need some ___ for the project.",
        answer: "information",
        explanation: "information 是不可數名詞，用 some 修飾",
        translation: "我們需要一些資訊來做這個專案。"
      },
      {
        type: "choice",
        question: "How many ___ do you have?",
        options: ["pencils", "paper"],
        answer: 0,
        explanation: "pencil 是可數名詞，用 how many",
        translation: "你有幾支鉛筆？"
      },
      {
        type: "fill",
        question: "There is much ___ in the air.",
        answer: "pollution",
        explanation: "pollution 是不可數名詞，用 much 修飾",
        translation: "空氣中有很多污染。"
      },
      {
        type: "choice",
        question: "He has few ___ in his wallet.",
        options: ["dollars", "money"],
        answer: 0,
        explanation: "dollar 是可數名詞，用 few",
        translation: "他錢包裡有很少的錢。"
      },
      {
        type: "fill",
        question: "The teacher gives us much ___.",
        answer: "homework",
        explanation: "homework 是不可數名詞，用 much 修飾",
        translation: "老師給我們很多作業。"
      },
      {
        type: "choice",
        question: "There are several ___ in the box.",
        options: ["books", "knowledge"],
        answer: 0,
        explanation: "book 是可數名詞，用 several",
        translation: "盒子裡有幾本書。"
      }
    ]
  },

  // 關卡35：數詞量詞
  level35: {
    title: "數詞量詞",
    description: "學習數詞和量詞的用法（基數詞、序數詞、量詞）",
    questions: [
      {
        type: "fill",
        question: "I have ___ apples.",
        answer: "three",
        explanation: "three 是基數詞，表示數量",
        translation: "我有三顆蘋果。"
      },
      {
        type: "fill",
        question: "This is the ___ time I visit this place.",
        answer: "first",
        explanation: "first 是序數詞，表示第一次",
        translation: "這是我第一次來這個地方。"
      },
      {
        type: "fill",
        question: "She bought a ___ of milk.",
        answer: "bottle",
        explanation: "bottle 是量詞，用來計算液體",
        translation: "她買了一瓶牛奶。"
      },
      {
        type: "fill",
        question: "There are ___ students in the class.",
        answer: "twenty",
        explanation: "twenty 是基數詞，表示數量",
        translation: "班上有二十個學生。"
      },
      {
        type: "fill",
        question: "This is the ___ day of the week.",
        answer: "second",
        explanation: "second 是序數詞，表示第二天",
        translation: "這是一週的第二天。"
      },
      {
        type: "choice",
        question: "I need a ___ of paper.",
        options: ["piece", "pieces"],
        answer: 0,
        explanation: "piece 是量詞，表示一張紙",
        translation: "我需要一張紙。"
      },
      {
        type: "fill",
        question: "He is the ___ person in line.",
        answer: "third",
        explanation: "third 是序數詞，表示第三個人",
        translation: "他是隊伍中的第三個人。"
      },
      {
        type: "fill",
        question: "We have ___ books on the shelf.",
        answer: "fifteen",
        explanation: "fifteen 是基數詞，表示數量",
        translation: "我們書架上有十五本書。"
      },
      {
        type: "choice",
        question: "She drinks a ___ of water every morning.",
        options: ["glass", "glasses"],
        answer: 0,
        explanation: "glass 是量詞，表示一杯水",
        translation: "她每天早上喝一杯水。"
      },
      {
        type: "fill",
        question: "This is the ___ month of the year.",
        answer: "fourth",
        explanation: "fourth 是序數詞，表示第四個月",
        translation: "這是一年的第四個月。"
      },
      {
        type: "fill",
        question: "There are ___ days in a week.",
        answer: "seven",
        explanation: "seven 是基數詞，表示數量",
        translation: "一週有七天。"
      },
      {
        type: "choice",
        question: "I bought a ___ of bread.",
        options: ["loaf", "loaves"],
        answer: 0,
        explanation: "loaf 是量詞，表示一條麵包",
        translation: "我買了一條麵包。"
      },
      {
        type: "fill",
        question: "She is the ___ child in her family.",
        answer: "fifth",
        explanation: "fifth 是序數詞，表示第五個孩子",
        translation: "她是家中的第五個孩子。"
      },
      {
        type: "fill",
        question: "We have ___ fingers on each hand.",
        answer: "five",
        explanation: "five 是基數詞，表示數量",
        translation: "我們每隻手有五根手指。"
      },
      {
        type: "choice",
        question: "He needs a ___ of rice.",
        options: ["bag", "bags"],
        answer: 0,
        explanation: "bag 是量詞，表示一袋米",
        translation: "他需要一袋米。"
      },
      {
        type: "fill",
        question: "This is the ___ time I tell you.",
        answer: "last",
        explanation: "last 是序數詞，表示最後一次",
        translation: "這是我最後一次告訴你。"
      },
      {
        type: "fill",
        question: "There are ___ months in a year.",
        answer: "twelve",
        explanation: "twelve 是基數詞，表示數量",
        translation: "一年有十二個月。"
      },
      {
        type: "choice",
        question: "She has a ___ of tea.",
        options: ["cup", "cups"],
        answer: 0,
        explanation: "cup 是量詞，表示一杯茶",
        translation: "她有一杯茶。"
      },
      {
        type: "fill",
        question: "He is the ___ person to arrive.",
        answer: "first",
        explanation: "first 是序數詞，表示第一個到達的人",
        translation: "他是第一個到達的人。"
      },
      {
        type: "choice",
        question: "I need a ___ of sugar.",
        options: ["spoonful", "spoonfuls"],
        answer: 0,
        explanation: "spoonful 是量詞，表示一匙糖",
        translation: "我需要一匙糖。"
      }
    ]
  },

  // 關卡36：多少？
  level36: {
    title: "多少？",
    description: "學習詢問數量和程度的問句（How many, How much, How long, How far, How often）",
    questions: [
      {
        type: "fill",
        question: "How ___ books do you have?",
        answer: "many",
        explanation: "How many 用來詢問可數名詞的數量",
        translation: "你有多少本書？"
      },
      {
        type: "fill",
        question: "How ___ water do you drink?",
        answer: "much",
        explanation: "How much 用來詢問不可數名詞的數量",
        translation: "你喝多少水？"
      },
      {
        type: "fill",
        question: "How ___ is this book?",
        answer: "much",
        explanation: "How much 用來詢問價格",
        translation: "這本書多少錢？"
      },
      {
        type: "fill",
        question: "How ___ students are in your class?",
        answer: "many",
        explanation: "How many 用來詢問可數名詞的數量",
        translation: "你班上有多少學生？"
      },
      {
        type: "fill",
        question: "How ___ does it take to get there?",
        answer: "long",
        explanation: "How long 用來詢問時間長度",
        translation: "到那裡要多久？"
      },
      {
        type: "choice",
        question: "How ___ money do you need?",
        options: ["many", "much"],
        answer: 1,
        explanation: "money 是不可數名詞，用 How much",
        translation: "你需要多少錢？"
      },
      {
        type: "fill",
        question: "How ___ is it from here to the station?",
        answer: "far",
        explanation: "How far 用來詢問距離",
        translation: "從這裡到車站有多遠？"
      },
      {
        type: "fill",
        question: "How ___ do you exercise?",
        answer: "often",
        explanation: "How often 用來詢問頻率",
        translation: "你多久運動一次？"
      },
      {
        type: "choice",
        question: "How ___ people live in your city?",
        options: ["many", "much"],
        answer: 0,
        explanation: "people 是可數名詞，用 How many",
        translation: "你的城市有多少人？"
      },
      {
        type: "fill",
        question: "How ___ sugar do you want in your coffee?",
        answer: "much",
        explanation: "How much 用來詢問不可數名詞的數量",
        translation: "你的咖啡要加多少糖？"
      },
      {
        type: "fill",
        question: "How ___ is your brother?",
        answer: "tall",
        explanation: "How tall 用來詢問身高",
        translation: "你哥哥多高？"
      },
      {
        type: "choice",
        question: "How ___ cars do you own?",
        options: ["many", "much"],
        answer: 0,
        explanation: "car 是可數名詞，用 How many",
        translation: "你有多少輛車？"
      },
      {
        type: "fill",
        question: "How ___ do you sleep every night?",
        answer: "long",
        explanation: "How long 用來詢問時間長度",
        translation: "你每天晚上睡多久？"
      },
      {
        type: "fill",
        question: "How ___ is the movie?",
        answer: "long",
        explanation: "How long 用來詢問時間長度",
        translation: "這部電影多長？"
      },
      {
        type: "choice",
        question: "How ___ homework do you have?",
        options: ["many", "much"],
        answer: 1,
        explanation: "homework 是不可數名詞，用 How much",
        translation: "你有多少作業？"
      },
      {
        type: "fill",
        question: "How ___ do you visit your grandparents?",
        answer: "often",
        explanation: "How often 用來詢問頻率",
        translation: "你多久去看祖父母一次？"
      },
      {
        type: "fill",
        question: "How ___ is the river?",
        answer: "deep",
        explanation: "How deep 用來詢問深度",
        translation: "這條河多深？"
      },
      {
        type: "choice",
        question: "How ___ friends do you have?",
        options: ["many", "much"],
        answer: 0,
        explanation: "friend 是可數名詞，用 How many",
        translation: "你有多少朋友？"
      },
      {
        type: "fill",
        question: "How ___ is it to the airport?",
        answer: "far",
        explanation: "How far 用來詢問距離",
        translation: "到機場有多遠？"
      },
      {
        type: "choice",
        question: "How ___ time do you need?",
        options: ["many", "much"],
        answer: 1,
        explanation: "time 是不可數名詞，用 How much",
        translation: "你需要多少時間？"
      }
    ]
  },

  // 關卡37：詞類變化
  level37: {
    title: "詞類變化",
    description: "學習同一詞根的不同詞類變化（名詞、動詞、形容詞、副詞）",
    questions: [
      {
        type: "fill",
        question: "She is a good ___ (teach).",
        answer: "teacher",
        explanation: "teach（動詞）→ teacher（名詞）",
        translation: "她是一位好老師。"
      },
      {
        type: "fill",
        question: "He ___ (work) very hard.",
        answer: "works",
        explanation: "work（名詞）→ works（動詞）",
        translation: "他工作很努力。"
      },
      {
        type: "fill",
        question: "The movie is very ___ (interest).",
        answer: "interesting",
        explanation: "interest（名詞）→ interesting（形容詞）",
        translation: "這部電影很有趣。"
      },
      {
        type: "fill",
        question: "She speaks English ___ (fluent).",
        answer: "fluently",
        explanation: "fluent（形容詞）→ fluently（副詞）",
        translation: "她英語說得很流利。"
      },
      {
        type: "fill",
        question: "He is a famous ___ (sing).",
        answer: "singer",
        explanation: "sing（動詞）→ singer（名詞）",
        translation: "他是一位著名的歌手。"
      },
      {
        type: "choice",
        question: "The children play ___ (happy).",
        options: ["happily", "happy"],
        answer: 0,
        explanation: "happy（形容詞）→ happily（副詞）",
        translation: "孩子們開心地玩。"
      },
      {
        type: "fill",
        question: "This is a ___ (beauty) garden.",
        answer: "beautiful",
        explanation: "beauty（名詞）→ beautiful（形容詞）",
        translation: "這是一個美麗的花園。"
      },
      {
        type: "fill",
        question: "She ___ (write) a book.",
        answer: "writes",
        explanation: "write（動詞）→ writes（第三人稱單數）",
        translation: "她寫書。"
      },
      {
        type: "choice",
        question: "He runs very ___ (quick).",
        options: ["quickly", "quick"],
        answer: 0,
        explanation: "quick（形容詞）→ quickly（副詞）",
        translation: "他跑得很快。"
      },
      {
        type: "fill",
        question: "The ___ (build) is very tall.",
        answer: "building",
        explanation: "build（動詞）→ building（名詞）",
        translation: "這棟建築物很高。"
      },
      {
        type: "fill",
        question: "She is a good ___ (dance).",
        answer: "dancer",
        explanation: "dance（動詞）→ dancer（名詞）",
        translation: "她是一位好舞者。"
      },
      {
        type: "choice",
        question: "The weather is ___ (sun) today.",
        options: ["sunny", "sun"],
        answer: 0,
        explanation: "sun（名詞）→ sunny（形容詞）",
        translation: "今天天氣晴朗。"
      },
      {
        type: "fill",
        question: "He studies ___ (careful).",
        answer: "carefully",
        explanation: "careful（形容詞）→ carefully（副詞）",
        translation: "他認真地讀書。"
      },
      {
        type: "fill",
        question: "The ___ (drive) is very careful.",
        answer: "driver",
        explanation: "drive（動詞）→ driver（名詞）",
        translation: "這位司機很小心。"
      },
      {
        type: "choice",
        question: "She sings ___ (beautiful).",
        options: ["beautifully", "beautiful"],
        answer: 0,
        explanation: "beautiful（形容詞）→ beautifully（副詞）",
        translation: "她唱得很美。"
      },
      {
        type: "fill",
        question: "The ___ (paint) is very famous.",
        answer: "painter",
        explanation: "paint（動詞）→ painter（名詞）",
        translation: "這位畫家很有名。"
      },
      {
        type: "fill",
        question: "The story is very ___ (excite).",
        answer: "exciting",
        explanation: "excite（動詞）→ exciting（形容詞）",
        translation: "這個故事很刺激。"
      },
      {
        type: "choice",
        question: "He walks ___ (slow).",
        options: ["slowly", "slow"],
        answer: 0,
        explanation: "slow（形容詞）→ slowly（副詞）",
        translation: "他走得慢。"
      },
      {
        type: "fill",
        question: "The ___ (cook) is very good.",
        answer: "cook",
        explanation: "cook（動詞）→ cook（名詞）",
        translation: "這位廚師很好。"
      },
      {
        type: "choice",
        question: "She dances ___ (graceful).",
        options: ["gracefully", "graceful"],
        answer: 0,
        explanation: "graceful（形容詞）→ gracefully（副詞）",
        translation: "她優雅地跳舞。"
      }
    ]
  },

  // 關卡38：動名詞和不定詞
  level38: {
    title: "動名詞和不定詞",
    description: "學習動名詞（V-ing）和不定詞（to V）的用法",
    questions: [
      {
        type: "fill",
        question: "I enjoy ___ books.",
        answer: "reading",
        explanation: "enjoy 後接動名詞 reading",
        translation: "我喜歡讀書。"
      },
      {
        type: "fill",
        question: "She wants ___ to the movies.",
        answer: "to go",
        explanation: "want 後接不定詞 to go",
        translation: "她想去看電影。"
      },
      {
        type: "fill",
        question: "He likes ___ basketball.",
        answer: "playing",
        explanation: "like 後可接動名詞 playing",
        translation: "他喜歡打籃球。"
      },
      {
        type: "fill",
        question: "We plan ___ a trip.",
        answer: "to take",
        explanation: "plan 後接不定詞 to take",
        translation: "我們計劃去旅行。"
      },
      {
        type: "fill",
        question: "They finish ___ their homework.",
        answer: "doing",
        explanation: "finish 後接動名詞 doing",
        translation: "他們完成做作業。"
      },
      {
        type: "choice",
        question: "My sister loves ___ music.",
        options: ["listening to", "to listen to"],
        answer: 0,
        explanation: "love 後可接動名詞 listening to",
        translation: "我妹妹喜歡聽音樂。"
      },
      {
        type: "fill",
        question: "He needs ___ English.",
        answer: "to study",
        explanation: "need 後接不定詞 to study",
        translation: "他需要學習英語。"
      },
      {
        type: "choice",
        question: "The children stop ___ games.",
        options: ["playing", "to play"],
        answer: 0,
        explanation: "stop 後接動名詞 playing",
        translation: "孩子們停止玩遊戲。"
      },
      {
        type: "fill",
        question: "I decide ___ a new car.",
        answer: "to buy",
        explanation: "decide 後接不定詞 to buy",
        translation: "我決定買一輛新車。"
      },
      {
        type: "choice",
        question: "She starts ___ dinner.",
        options: ["cooking", "to cook"],
        answer: 0,
        explanation: "start 後可接動名詞 cooking",
        translation: "她開始煮晚餐。"
      },
      {
        type: "fill",
        question: "They hope ___ you soon.",
        answer: "to see",
        explanation: "hope 後接不定詞 to see",
        translation: "他們希望很快見到你。"
      },
      {
        type: "choice",
        question: "My father enjoys ___ TV.",
        options: ["watching", "to watch"],
        answer: 0,
        explanation: "enjoy 後接動名詞 watching",
        translation: "我爸爸喜歡看電視。"
      },
      {
        type: "fill",
        question: "We try ___ the problem.",
        answer: "to solve",
        explanation: "try 後接不定詞 to solve",
        translation: "我們試著解決這個問題。"
      },
      {
        type: "choice",
        question: "The students finish ___ the test.",
        options: ["taking", "to take"],
        answer: 0,
        explanation: "finish 後接動名詞 taking",
        translation: "學生們完成考試。"
      },
      {
        type: "fill",
        question: "She agrees ___ help us.",
        answer: "to",
        explanation: "agree 後接不定詞 to help",
        translation: "她同意幫助我們。"
      },
      {
        type: "choice",
        question: "He likes ___ in the morning.",
        options: ["exercising", "to exercise"],
        answer: 0,
        explanation: "like 後可接動名詞 exercising",
        translation: "他喜歡早上運動。"
      },
      {
        type: "fill",
        question: "I forget ___ my keys.",
        answer: "to bring",
        explanation: "forget 後接不定詞 to bring",
        translation: "我忘記帶鑰匙。"
      },
      {
        type: "choice",
        question: "They stop ___ at the red light.",
        options: ["driving", "to drive"],
        answer: 0,
        explanation: "stop 後接動名詞 driving",
        translation: "他們在紅燈前停車。"
      },
      {
        type: "fill",
        question: "We expect ___ on time.",
        answer: "to arrive",
        explanation: "expect 後接不定詞 to arrive",
        translation: "我們期望準時到達。"
      },
      {
        type: "choice",
        question: "My brother enjoys ___ computer games.",
        options: ["playing", "to play"],
        answer: 0,
        explanation: "enjoy 後接動名詞 playing",
        translation: "我哥哥喜歡玩電腦遊戲。"
      }
    ]
  },

  // 關卡39：頻率副詞
  level39: {
    title: "頻率副詞",
    description: "學習頻率副詞的用法（always, usually, often, sometimes, rarely, never）",
    questions: [
      {
        type: "fill",
        question: "I ___ go to school every day.",
        answer: "always",
        explanation: "always 表示總是，頻率最高",
        translation: "我總是每天去學校。"
      },
      {
        type: "fill",
        question: "She ___ drinks coffee in the morning.",
        answer: "usually",
        explanation: "usually 表示通常，頻率很高",
        translation: "她通常早上喝咖啡。"
      },
      {
        type: "fill",
        question: "He ___ plays basketball after school.",
        answer: "often",
        explanation: "often 表示經常，頻率較高",
        translation: "他經常放學後打籃球。"
      },
      {
        type: "fill",
        question: "They ___ go to the movies.",
        answer: "sometimes",
        explanation: "sometimes 表示有時候，頻率中等",
        translation: "他們有時候去看電影。"
      },
      {
        type: "fill",
        question: "We ___ eat fast food.",
        answer: "rarely",
        explanation: "rarely 表示很少，頻率很低",
        translation: "我們很少吃速食。"
      },
      {
        type: "choice",
        question: "My sister ___ watches TV.",
        options: ["never", "always"],
        answer: 0,
        explanation: "never 表示從不，頻率最低",
        translation: "我妹妹從不看電視。"
      },
      {
        type: "fill",
        question: "The children ___ play in the park.",
        answer: "often",
        explanation: "often 表示經常，頻率較高",
        translation: "孩子們經常在公園玩。"
      },
      {
        type: "choice",
        question: "My father ___ works late.",
        options: ["usually", "rarely"],
        answer: 0,
        explanation: "usually 表示通常，頻率很高",
        translation: "我爸爸通常工作到很晚。"
      },
      {
        type: "fill",
        question: "I ___ study English on weekends.",
        answer: "sometimes",
        explanation: "sometimes 表示有時候，頻率中等",
        translation: "我有時候週末學習英語。"
      },
      {
        type: "choice",
        question: "She ___ forgets her keys.",
        options: ["never", "always"],
        answer: 0,
        explanation: "never 表示從不，頻率最低",
        translation: "她從不忘記鑰匙。"
      },
      {
        type: "fill",
        question: "They ___ visit their grandparents.",
        answer: "often",
        explanation: "often 表示經常，頻率較高",
        translation: "他們經常拜訪祖父母。"
      },
      {
        type: "choice",
        question: "The weather ___ rains in summer.",
        options: ["sometimes", "never"],
        answer: 0,
        explanation: "sometimes 表示有時候，頻率中等",
        translation: "夏天有時候下雨。"
      },
      {
        type: "fill",
        question: "We ___ eat dinner at 7 PM.",
        answer: "usually",
        explanation: "usually 表示通常，頻率很高",
        translation: "我們通常晚上七點吃晚餐。"
      },
      {
        type: "choice",
        question: "He ___ goes to bed early.",
        options: ["always", "rarely"],
        answer: 0,
        explanation: "always 表示總是，頻率最高",
        translation: "他總是早睡。"
      },
      {
        type: "fill",
        question: "My friends ___ come to my house.",
        answer: "sometimes",
        explanation: "sometimes 表示有時候，頻率中等",
        translation: "我的朋友們有時候來我家。"
      },
      {
        type: "choice",
        question: "The bus ___ arrives on time.",
        options: ["usually", "never"],
        answer: 0,
        explanation: "usually 表示通常，頻率很高",
        translation: "公車通常準時到達。"
      },
      {
        type: "fill",
        question: "She ___ cooks dinner.",
        answer: "always",
        explanation: "always 表示總是，頻率最高",
        translation: "她總是煮晚餐。"
      },
      {
        type: "choice",
        question: "They ___ travel abroad.",
        options: ["rarely", "often"],
        answer: 0,
        explanation: "rarely 表示很少，頻率很低",
        translation: "他們很少出國旅行。"
      },
      {
        type: "fill",
        question: "I ___ read books before bed.",
        answer: "often",
        explanation: "often 表示經常，頻率較高",
        translation: "我經常睡前讀書。"
      },
      {
        type: "choice",
        question: "The cat ___ sleeps during the day.",
        options: ["usually", "never"],
        answer: 0,
        explanation: "usually 表示通常，頻率很高",
        translation: "貓通常白天睡覺。"
      }
    ]
  },
   // 關卡40：現在完成式
   level40: {
    title: "現在完成式",  // <--- 加上2個空格縮排
  description: "學習現在完成式的用法（have/has + 過去分詞）",
  questions: [
    {
      type: "fill",
      question: "I ___ finished my homework.",
      answer: "have",
      explanation: "第一人稱單數用 have + 過去分詞",
      translation: "我已經完成作業了。"
    },
    {
      type: "fill",
      question: "She ___ visited Japan twice.",
      answer: "has",
      explanation: "第三人稱單數用 has + 過去分詞",
      translation: "她已經去過日本兩次了。"
    },
    {
      type: "fill",
      question: "They ___ lived here for five years.",
      answer: "have",
      explanation: "第三人稱複數用 have + 過去分詞",
      translation: "他們已經在這裡住了五年了。"
    },
    {
      type: "fill",
      question: "He ___ never been to Paris.",
      answer: "has",
      explanation: "第三人稱單數用 has + 過去分詞",
      translation: "他從未去過巴黎。"
    },
    {
      type: "fill",
      question: "We ___ studied English for three years.",
      answer: "have",
      explanation: "第一人稱複數用 have + 過去分詞",
      translation: "我們已經學習英語三年了。"
    },
    {
      type: "choice",
      question: "My sister ___ just arrived home.",
      options: ["has", "have"],
      answer: 0,
      explanation: "第三人稱單數用 has",
      translation: "我妹妹剛到家。"
    },
    {
      type: "fill",
      question: "The children ___ eaten their lunch.",
      answer: "have",
      explanation: "複數主詞用 have + 過去分詞",
      translation: "孩子們已經吃完午餐了。"
    },
    {
      type: "choice",
      question: "My father ___ worked here since 2010.",
      options: ["has", "have"],
      answer: 0,
      explanation: "第三人稱單數用 has",
      translation: "我爸爸從2010年就在這裡工作。"
    },
    {
      type: "fill",
      question: "I ___ already seen this movie.",
      answer: "have",
      explanation: "第一人稱單數用 have + 過去分詞",
      translation: "我已經看過這部電影了。"
    },
    {
      type: "choice",
      question: "She ___ never tried sushi.",
      options: ["has", "have"],
      answer: 0,
      explanation: "第三人稱單數用 has",
      translation: "她從未試過壽司。"
    },
    {
      type: "fill",
      question: "They ___ just finished the project.",
      answer: "have",
      explanation: "第三人稱複數用 have + 過去分詞",
      translation: "他們剛完成這個專案。"
    },
    {
      type: "choice",
      question: "The weather ___ been nice this week.",
      options: ["has", "have"],
      answer: 0,
      explanation: "第三人稱單數用 has",
      translation: "這週天氣一直很好。"
    },
    {
      type: "fill",
      question: "We ___ known each other for ten years.",
      answer: "have",
      explanation: "第一人稱複數用 have + 過去分詞",
      translation: "我們已經認識十年了。"
    },
    {
      type: "choice",
      question: "He ___ already bought the tickets.",
      options: ["has", "have"],
      answer: 0,
      explanation: "第三人稱單數用 has",
      translation: "他已經買了票了。"
    },
    {
      type: "fill",
      question: "You ___ never been to my house.",
      answer: "have",
      explanation: "第二人稱用 have + 過去分詞",
      translation: "你從未來過我家。"
    },
    {
      type: "choice",
      question: "My friends ___ just left the party.",
      options: ["have", "has"],
      answer: 0,
      explanation: "複數主詞用 have",
      translation: "我的朋友們剛離開派對。"
    },
    {
      type: "fill",
      question: "She ___ lived in this city since 2015.",
      answer: "has",
      explanation: "第三人稱單數用 has + 過去分詞",
      translation: "她從2015年就住在這個城市。"
    },
    {
      type: "choice",
      question: "The students ___ finished their exams.",
      options: ["have", "has"],
      answer: 0,
      explanation: "複數主詞用 have",
      translation: "學生們已經完成考試了。"
    },
    {
      type: "fill",
      question: "I ___ just received your message.",
      answer: "have",
      explanation: "第一人稱單數用 have + 過去分詞",
      translation: "我剛收到你的訊息。"
    },
    {
      type: "choice",
      question: "The movie ___ already started.",
      options: ["has", "have"],
      answer: 0,
      explanation: "第三人稱單數用 has",
      translation: "電影已經開始了。"
    }
  ]
}
};

// 導出字庫
if (typeof module !== 'undefined' && module.exports) {
  module.exports = grammarLevels;
} else {
  window.grammarLevels = grammarLevels;
} 