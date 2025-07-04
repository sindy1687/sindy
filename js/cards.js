// 載入卡片資料
let baseCardsData = [];

// 載入 cards.json 檔案
fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    baseCardsData = data;
    console.log(`📚 已載入 ${data.length} 張基礎卡片`);
    initializeCards();
  })
  .catch(error => {
    console.error('❌ 載入 cards.json 失敗:', error);
    // 如果載入失敗，使用空陣列繼續執行
    baseCardsData = [];
    initializeCards();
  });

// 如果 vocabData 不存在，使用空物件
const vocabData = window.vocabData || {};

const planet20Cards = (vocabData['planet20'] || []).map(item => ({
    ...item,
    id: 0, // initial id
    image: `img/planets/planet20_clean.png`,
    rarity: "普通",
    category: "生活",
    description: "生活中的常見詞彙"
}));

// ===============================
// 4. 合併與最終處理
// ===============================

function createAllCards() {
  // 合併所有卡片來源
  const combinedCards = [
    ...baseCardsData, // 使用載入的 JSON 資料
    ...(window.baseCards || []), // 使用 window.baseCards 如果存在
    ...planet20Cards
  ];

  // ✨【防重複機制】✨
  // 使用 Set 和 word 作為唯一標識，過濾掉重複的卡片
  const uniqueCards = [];
  const seenWords = new Set();

  for (const card of combinedCards) {
    if (card && card.word && !seenWords.has(card.word)) {
      seenWords.add(card.word);
      uniqueCards.push(card);
    }
  }

  // 為每張卡片添加一個從 1 開始的唯一 ID
  return uniqueCards.map((card, index) => ({
    ...card,
    id: index + 1
  }));
}

// 初始化卡片系統
function initializeCards() {
  // 最終的卡片陣列
  const allCards = createAllCards();

  console.log(`📀 卡片總數: ${allCards.length}`);
  console.log("✅ 所有卡片已成功載入並去重。");

  // 將 allCards 暴露到 window 物件，供其他頁面使用
  // 如果 window.allCards 已經存在（來自主 cards.js），則合併卡片
  if (window.allCards && window.allCards.length > 0) {
    // 合併現有的 allCards 和新的 allCards，避免重複
    const existingWords = new Set(window.allCards.map(card => card.word));
    const newCards = allCards.filter(card => !existingWords.has(card.word));
    window.allCards = [...window.allCards, ...newCards];
    console.log(`🔄 已合併卡片，總數: ${window.allCards.length}`);
  } else {
    window.allCards = allCards;
    console.log(`📀 已設定 allCards，總數: ${allCards.length}`);
  }
}

function canStartNextFloor() {
  const cooldown = localStorage.getItem('towerCooldown');
  if (cooldown && Date.now() < parseInt(cooldown)) {
    alert('請等待冷卻時間結束再挑戰下一關！');
    return false;
  }
  // 檢查是否已通過上一層
  // ...（根據您的樓層資料結構判斷）
  return true;
}

function startChallenge() {
  if (!canStartNextFloor()) return;
  showChallengeAnimation('start');
  // ...原本開始挑戰的邏輯
}

function onChallengeEnd(success) {
  if (success) {
    // 設定冷卻
    localStorage.setItem('towerCooldown', Date.now() + 3*60*60*1000);
    // 解鎖下一層
    // ...
    showChallengeAnimation('end');
  } else {
    showChallengeAnimation('fail');
  }
  // ...顯示結果
} 