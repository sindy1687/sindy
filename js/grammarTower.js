// Grammar Tower 遊戲邏輯
class GrammarTowerGame {
  constructor() {
    this.currentFloor = 1;
    this.maxFloor = 20;
    this.shards = 0;
    this.energy = 5;
    this.maxEnergy = 5;
    this.combo = 0;
    this.currentQuestion = 0;
    this.correctAnswers = 0;
    this.totalQuestions = 0;
    this.currentQuestionData = null;
    this.timer = null;
    this.timeLimit = null;
    this.energyTimer = null;
    this.lastEnergyTime = Date.now();
    this.sounds = {};
    this.cardShop = []; // 卡牌商店 (從 cards.js 載入)
    this.ownedCards = {}; // 玩家擁有的卡牌
    this.cardShards = {}; // 玩家擁有的碎片
    this.floors = [];
    this.completedLevels = [];
    this.isSoundEnabled = true;
    this.activeEffects = []; // 當前生效的卡牌效果
    this.usedCards = []; // 本局已使用的卡牌
    this.wrongCount = 0; // 錯誤次數
    this.excludedOptionIndexes = []; // 新增的屬性來記錄要排除的選項 index
    this.resultModalShown = false; // 新增的屬性來記錄是否已顯示過結果彈窗
    this.cheatMode = false; // 新增作弊模式狀態
    this.kidsHappyMusic = null; // 新增的屬性來記錄通關音樂
    
    this.init();
  }

  init() {
    this.loadUserData();
    this.createStarsBackground();
    this.loadFloors();
    this.loadCards();
    this.loadSounds();
    this.renderTower();
    // this.renderCards(); // 預設不自動顯示卡牌，需使用者自行選擇
    this.updateDisplay();
    this.setupEventListeners();
    this.startEnergyTimer();
    // this.checkLoginStatus(); // 移除登入檢查
  }

  // 載入音效
  loadSounds() {
    try {
      this.sounds = {
        correct: new Audio('sound/correct.mp3'),
        wrong: new Audio('sound/wrong.mp3'),
        unlock: new Audio('sound/unlock.mp3'),
        click: new Audio('sound/click.mp3'),
        complete: new Audio('sound/completeSound.mp3'),
        shine: new Audio('sound/shine.mp3'),
        levelup: new Audio('sound/unlock.mp3'),
        cardUse: new Audio('sound/shine.mp3') // 卡牌使用音效
      };

      Object.values(this.sounds).forEach(sound => {
        sound.load();
        sound.volume = 0.4;
        sound.preload = 'auto';
        sound.addEventListener('ended', () => {
          sound.currentTime = 0;
        });
      });
    } catch (error) {
      console.log('音效載入失敗:', error);
      this.isSoundEnabled = false;
    }
  }

  // 播放音效
  playSound(soundName) {
    if (!this.isSoundEnabled || !this.sounds[soundName]) {
      return;
    }

    try {
      const sound = this.sounds[soundName];
      sound.pause();
      sound.currentTime = 0;
      
      const playPromise = sound.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('音效播放失敗:', error);
        });
      }
    } catch (error) {
      console.log('音效播放錯誤:', error);
    }
  }

  // 停止所有音效
  stopAllSounds() {
    Object.values(this.sounds).forEach(sound => {
      try {
        sound.pause();
        sound.currentTime = 0;
      } catch (error) {
        console.log('停止音效失敗:', error);
      }
    });
  }

  // 切換音效開關
  toggleSound() {
    this.isSoundEnabled = !this.isSoundEnabled;
    if (!this.isSoundEnabled) {
      this.stopAllSounds();
    }
    console.log('音效狀態:', this.isSoundEnabled ? '開啟' : '關閉');
  }

  // 創建星空背景
  createStarsBackground() {
    const starsBg = document.getElementById('starsBg');
    if (!starsBg) return;
    
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + 's';
      starsBg.appendChild(star);
    }
  }

  // 載入樓層資料
  loadFloors() {
    // 外部題庫設定
    const floorConfigs = [
      { theme: "現在式be動詞肯定句" },
      { theme: "數字應用1-12單複數" },
      { theme: "所有格" },
      { theme: "現在式be動詞否定句" },
      { theme: "現在式be動詞問句" },
      { theme: "一般動詞現在式" },
      { theme: "一般動詞否定句" },
      { theme: "一般動詞問句" },
      { theme: "Wh問句" },
      { theme: "過去式be動詞" },
      { theme: "未來式will" },
      { theme: "未來式否定" },
      { theme: "未來式問句" },
      { theme: "現在進行式" },
      { theme: "時態混合1" },
      { theme: "現在進行式2" },
      { theme: "未來式問句2" },
      { theme: "過去式be動詞2" },
      { theme: "現在進行式3" },
      { theme: "時態混合2" }
    ];
    // 主題對應自動生成文法提醒
    const grammarTips = {
      "現在式be動詞肯定句": "主詞+am/is/are，根據主詞選正確be動詞。",
      "數字應用1-12單複數": "數字後名詞要注意單複數變化。",
      "所有格": "my/your/his/her/its/our/their，所有格修飾名詞。",
      "現在式be動詞否定句": "be動詞+not 構成否定句。",
      "現在式be動詞問句": "be動詞移到句首構成問句。",
      "一般動詞現在式": "主詞為三單時動詞+s，其餘用原形。",
      "一般動詞否定句": "do/does + not + 原形動詞。",
      "一般動詞問句": "Do/Does + 主詞 + 原形動詞？",
      "Wh問句": "Who/What/Where/When/Why/How 開頭的問句。",
      "過去式be動詞": "主詞為I/he/she/it用was，其餘用were。",
      "未來式will": "will + 原形動詞表未來。",
      "未來式否定": "will not/won't + 原形動詞。",
      "未來式問句": "Will + 主詞 + 原形動詞？",
      "現在進行式": "be動詞(am/is/are) + V-ing。",
      "時態混合1": "根據時間副詞判斷時態。",
      "現在進行式2": "be動詞(am/is/are) + V-ing。",
      "未來式問句2": "Will + 主詞 + 原形動詞？",
      "過去式be動詞2": "主詞為I/he/she/it用was，其餘用were。",
      "現在進行式3": "be動詞(am/is/are) + V-ing。",
      "時態混合2": "根據時間副詞判斷時態。"
    };
    this.floors = [];
    for (let i = 1; i <= 20; i++) {
      const theme = floorConfigs[i-1]?.theme || `第${i}層`;
      const poem = grammarTips[theme] || `請注意本關主題：${theme}`;
      // 樓層時間隨機產生（60~120秒）
      const timeLimit = Math.floor(Math.random() * 61) + 60;
      this.floors.push({
        floor: i,
        theme,
        questions: GRAMMAR_TOWER_QUESTIONS[i] || [],
        timeLimit,
        threshold: 0.8,
        poem,
        questionType: "choice"
      });
    }
  }

  // 載入卡牌資料
  loadCards() {
    // 使用 window.allCards 載入卡牌資料
    if (window.allCards) {
      this.cardShop = window.allCards;
      console.log('成功載入卡牌資料，共', this.cardShop.length, '張卡片');
    } else {
      console.error("卡牌資料庫 (cards.js) 未成功載入！");
    }
  }

  // 載入使用者資料
  loadUserData() {
    try {
      this.ownedCards = JSON.parse(localStorage.getItem('ownedCards') || '{}');
      this.cardShards = JSON.parse(localStorage.getItem('cardShards') || '{}');
      this.currentFloor = 1;
      this.shards = 50;
      this.energy = 5;
      this.combo = 0;
      this.lastEnergyTime = Date.now();
      // 從 localStorage 讀取已通關樓層
      this.completedLevels = JSON.parse(localStorage.getItem('grammarTowerCompletedLevels') || '[]');
    } catch (e) {
      console.error('讀取卡牌資料失敗:', e);
    }
  }

  // 儲存使用者資料
  saveUserData() {
    // 卡牌資料直接操作 localStorage，其他遊戲進度透過 LinkageSystem
    localStorage.setItem('ownedCards', JSON.stringify(this.ownedCards));
    localStorage.setItem('cardShards', JSON.stringify(this.cardShards));
    
    try {
      const username = getCurrentUser();
      if (username) {
        // 使用 LinkageSystem 更新遊戲進度數據
        LinkageSystem.grammarTower.updateData({
          floor: this.currentFloor,
          shards: this.shards, // 流光碎片
          energy: this.energy,
          combo: this.combo,
          lastEnergyTime: this.lastEnergyTime,
          completedLevels: this.completedLevels,
        });
      } else {
        console.log('用戶未登入，遊戲進度不會保存');
      }
    } catch (error) {
      console.log('儲存用戶數據失敗:', error);
    }
  }

  // 渲染高塔
  renderTower() {
    const towerLevels = document.getElementById('towerLevels');
    if (!towerLevels) return;
    
    towerLevels.innerHTML = '';

    for (let i = this.maxFloor; i >= 1; i--) {
      const level = document.createElement('div');
      level.className = 'tower-level';
      level.textContent = i;
      level.title = `第${i}層：${this.floors[i-1]?.theme || '未知主題'}`;

      // 判斷是否已完成
      if (this.completedLevels.includes(i)) {
        level.classList.add('completed');
      }
      // 解鎖邏輯：第一層永遠解鎖，其餘樓層需前一層已通關
      let unlocked = false;
      if (i === 1) {
        unlocked = true;
      } else if (this.completedLevels.includes(i - 1)) {
        unlocked = true;
      }
      if (unlocked) {
        level.classList.add('unlocked');
        level.addEventListener('click', () => {
          this.playSound('click');
          this.selectFloor(i);
        });
      } else {
        level.classList.add('locked');
        // 不再手動加鎖頭，交給 CSS ::after 處理
      }
      if (i === this.currentFloor) {
        level.classList.add('current');
      }
      towerLevels.appendChild(level);
    }
    this.updatePlayerPosition();
    if (typeof loadPlayerAvatar === 'function') loadPlayerAvatar();
  }

  // 更新玩家位置
  updatePlayerPosition() {
    const player = document.getElementById('player');
    if (!player) return;
    
    const towerContainer = document.getElementById('towerContainer');
    if (!towerContainer) return;
    
    const containerHeight = towerContainer.offsetHeight;
    const playerHeight = (this.currentFloor - 1) / (this.maxFloor - 1);
    const bottomPosition = 20 + (playerHeight * (containerHeight - 80));
    
    player.style.bottom = bottomPosition + 'px';
  }

  // 選擇樓層
  selectFloor(floor) {
    // 允許自由選擇任何樓層，不再檢查冷卻
    this.currentFloor = floor;
    this.updateDisplay();
    this.renderTower();
    // 同步更新高塔區塊主題名稱
    const theme = this.floors[this.currentFloor - 1]?.theme || '';
    const towerFloorTheme = document.getElementById('towerFloorTheme');
    if (towerFloorTheme) towerFloorTheme.textContent = theme;
  }

  // 渲染卡牌
  renderCards() {
    const cardPreview = document.getElementById('cardPreview');
    if (!cardPreview) return;
    
    cardPreview.innerHTML = '';

    // 從所有卡牌中，篩選出玩家擁有的卡牌
    const ownedCardList = window.allCards ? window.allCards.filter(card => this.ownedCards[card.word]) : [];

    // 顯示玩家擁有的前4張卡牌
    ownedCardList.slice(0, 4).forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = `card ${card.rarity === '普通' ? 'common' : card.rarity === '稀有' ? 'rare' : 'epic'}`;
      
      // 檢查是否已在本局使用過
      if (this.usedCards.includes(card.word)) {
        cardElement.classList.add('used');
      }
      
      // 根據稀有度決定邊框底圖
      if (card.rarity === '普通') {
        cardElement.style.backgroundImage = "url('img/border/common.jpg')";
      } else if (card.rarity === '稀有') {
        cardElement.style.backgroundImage = "url('img/border/rare.png')";
      } else if (card.rarity === '超稀有') {
        cardElement.style.backgroundImage = "url('img/border/epic.png')";
      }
      
      // 星星圖示
      let starIcons = '';
      if (card.rarity === '普通') starIcons = '★';
      else if (card.rarity === '稀有') starIcons = '★★';
      else if (card.rarity === '超稀有') starIcons = '★★★';
      
      // 準備卡片內容
      let mediaContent = '';
      let videoButton = '';
      
      // 檢查是否有影片（包括 video 和 video_url 屬性）
      const hasVideo = card.video || card.video_url;
      
      if (hasVideo) {
        // 有影片的卡片：顯示圖片 + 影片按鈕
        mediaContent = `<img class="card-media" src="${card.image}" alt="${card.word}">`;
        const videoUrl = card.video || card.video_url;
        videoButton = `
          <div class="video-button" onclick="event.stopPropagation(); game.playVideo('${videoUrl.replace(/'/g, "\\'")}', '${card.word}')">
            <div class="video-icon">▶</div>
          </div>
        `;
      } else {
        // 沒有影片的卡片：只顯示圖片
        mediaContent = `<img class="card-media" src="${card.image}" alt="${card.word}">`;
      }
      
      // 稀有度標記
      const rankMap = { '普通': 'A', '稀有': 'R', '超稀有': 'SSR' };
      
      cardElement.innerHTML = `
        ${mediaContent}
        ${videoButton}
        <div class="stars">${starIcons}</div>
        <div class="label">
          <div class="chinese-text">${card.zh}</div>
          <div class="english-text">${card.word}</div>
        </div>
        <div class="category-tag">類別：${card.category}</div>
        <div class="rank-badge">${rankMap[card.rarity]}</div>
        <div class="shard-count shard-unlocked">✔</div>
      `;
      
      // 如果已使用，添加已使用標記
      if (this.usedCards.includes(card.word)) {
        cardElement.innerHTML += '<div class="used-stamp">已使用</div>';
      }
      
      cardElement.addEventListener('click', () => {
        this.playSound('click');
        this.showCardUseModal(card);
      });
      
      cardPreview.appendChild(cardElement);
    });

    if (ownedCardList.length === 0) {
      cardPreview.innerHTML = '<p style="font-size: 0.9rem; text-align: center; color: #a3b8ff; width: 100%;">尚未擁有任何卡牌</p>';
    }
  }

  // 顯示卡牌使用 Modal
  showCardUseModal(card) {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    if (!modal || !overlay) return;
    // 只有在挑戰進行中才可用
    const inChallenge = !!this.currentQuestionData;
    const canUse = inChallenge && canUseCard(card, this);
    modal.innerHTML = `
      <div class="card-effect" style="text-align:center;min-width:260px;min-height:120px;position:relative;">
        <h3 style="color:#00ffff;">卡牌效果</h3>
        <div class="effect-desc" style="color:#ffd700; font-size:1.1rem; margin-bottom:16px;">
          ${card.effect ? card.effect.description : '此卡牌沒有特殊效果'}
        </div>
        ${canUse ? 
          '<button class=\'btn use-card-btn\' style=\'margin-top:10px;\' onclick=\'game.useCard("' + card.word + '")\'>使用卡牌</button>' :
          '<p class=\'cannot-use\'>此卡牌目前無法使用</p>'
        }
        <div class="close-btn" onclick="closeCardModal()" style="position:absolute;top:10px;right:10px;">✕</div>
      </div>
    `;
    overlay.style.display = 'block';
    modal.classList.add('show');
    this.stopTimer(); // 顯示彈窗時暫停計時
  }

  // 使用卡牌
  useCard(cardWord) {
    if (this.cheatMode) {
      this.showEffectMessage('作弊模式：卡片無限使用', cardWord);
      return;
    }
    // 從 allCards 中查找卡片
    const card = window.allCards ? window.allCards.find(c => c.word === cardWord) : null;
    if (!card) {
      console.error('找不到指定的卡牌:', cardWord);
      alert('找不到指定的卡牌');
      return;
    }

    // 檢查是否已經使用過
    if (this.usedCards.includes(cardWord)) {
      alert('此卡牌在本局遊戲中已經使用過了！');
      return;
    }

    console.log('準備使用卡片:', card);

    // 使用卡牌效果
    const result = useCardEffect(card, this);
    console.log('卡片效果結果:', result);
    
    // 若效果為排除選項，記錄要排除的選項 index
    if (result.success && result.effects) {
      result.effects.forEach(effect => {
        if (effect.type === 'hint' && effect.excludedOptions) {
          // 找到要排除的 index
          this.excludedOptionIndexes = [];
          const options = this.currentQuestionData.options;
          effect.excludedOptions.forEach(exOpt => {
            const idx = options.indexOf(exOpt);
            if (idx !== -1) this.excludedOptionIndexes.push(idx);
          });
          // 重新渲染選項
          this.loadNextQuestion();
        }
      });
    }
    if (result.success) {
      // 記錄已使用的卡牌
      this.usedCards.push(cardWord);
      
      // 顯示效果訊息
      this.showEffectMessage(result.message, result.cardName);
      
      // 更新顯示
      this.updateDisplay();
      
      // 播放音效
      this.playSound('cardUse');
      
      console.log(`使用了卡牌「${card.zh}」：${result.message}`);
    } else {
      console.error('卡片使用失敗:', result.message);
      alert(`無法使用卡牌：${result.message}`);
    }
  }

  // 顯示效果訊息
  showEffectMessage(message, cardName) {
    // 創建效果訊息元素
    const effectMsg = document.createElement('div');
    effectMsg.className = 'effect-message';
    effectMsg.innerHTML = `
      <div class="effect-content">
        <div class="effect-icon">✨</div>
        <div class="effect-text">
          <div class="card-name">${cardName}</div>
          <div class="effect-desc">${message}</div>
        </div>
      </div>
    `;
    
    // 添加到頁面
    document.body.appendChild(effectMsg);
    
    // 動畫效果
    setTimeout(() => {
      effectMsg.classList.add('show');
    }, 100);
    
    // 自動移除
    setTimeout(() => {
      effectMsg.classList.remove('show');
      setTimeout(() => {
        if (effectMsg.parentNode) {
          effectMsg.parentNode.removeChild(effectMsg);
        }
      }, 500);
    }, 3000);
  }

  // 重置卡牌使用狀態（每局遊戲開始時呼叫）
  resetCardUsage() {
    this.usedCards = [];
    this.activeEffects = [];
  }

  // 檢查是否有護盾保護
  hasShield() {
    return this.shields > 0;
  }

  // 使用護盾（答錯時呼叫）
  useShield() {
    if (this.shields > 0) {
      this.shields--;
      this.showEffectMessage('護盾抵擋了答錯懲罰！', '護盾');
      return true;
    }
    return false;
  }

  // 檢查連擊保護
  hasComboProtection() {
    return this.comboProtection > 0;
  }

  // 使用連擊保護（答錯時呼叫）
  useComboProtection() {
    if (this.comboProtection > 0) {
      this.comboProtection--;
      this.showEffectMessage('連擊保護生效！', '連擊保護');
      return true;
    }
    return false;
  }

  // 開始遊戲時初始化卡牌系統
  startGame() {
    this.resetCardUsage();
    this.shields = 0;
    this.comboProtection = 0;
    this.scoreMultiplier = 1;
    // ... 其他遊戲開始邏輯
  }

  // 答題時應用分數倍率
  applyScoreMultiplier(baseScore) {
    return Math.floor(baseScore * this.scoreMultiplier);
  }

  // 顯示卡牌資訊
  showCardInfo(card) {
    const modal = document.getElementById('resultModal');
    const title = document.getElementById('modalTitle');
    const text = document.getElementById('modalText');

    if (modal && title && text) {
      title.textContent = card.name;
      text.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 15px;">${card.icon}</div>
        <p><strong>效果：</strong>${card.effect}</p>
        <p><strong>稀有度：</strong>${this.getCardRarityText(card.type)}</p>
      `;

      modal.style.display = 'block';
      this.stopTimer(); // 顯示彈窗時暫停計時
    }
  }

  // 取得卡牌稀有度文字
  getCardRarityText(type) {
    const rarityMap = {
      'common': '普通',
      'rare': '稀有',
      'epic': '超稀有'
    };
    return rarityMap[type] || type;
  }

  // 開始挑戰
  startChallenge() {
    if (this.cheatMode) {
      // 不消耗能量、不增加挑戰次數
      this.updateDisplay();
      this.saveUserData();
      setTimeout(() => {
        const currentFloorData = this.floors[this.currentFloor - 1];
        if (!currentFloorData || !currentFloorData.questions || currentFloorData.questions.length === 0) {
          alert('本樓層沒有題目，請選擇其他樓層或檢查題庫設定！');
          const towerSection = document.getElementById('towerSection');
          if (towerSection) towerSection.style.display = 'block';
          const questionCard = document.getElementById('questionCard');
          if (questionCard) questionCard.style.display = 'none';
          return;
        }
        this.resetCardUsage();
        this.shields = 0;
        this.comboProtection = 0;
        this.scoreMultiplier = 1;
        this.timeRemaining = currentFloorData.timeLimit;
        this.currentQuestion = 0;
        this.correctAnswers = 0;
        this.totalQuestions = currentFloorData.questions.length;
        this.combo = 0;
        const towerSection = document.getElementById('towerSection');
        if (towerSection) towerSection.style.display = 'none';
        const questionCard = document.getElementById('questionCard');
        if (questionCard) questionCard.style.display = 'block';
        const grammarPoem = document.getElementById('grammarPoem');
        if (grammarPoem) grammarPoem.textContent = currentFloorData.poem;
        this.loadNextQuestion();
        this.startTimer();
        this.updateDisplay();
        this.saveUserData();
      }, 1200);
      return;
    }
    // 進入關卡前先檢查今日挑戰次數（台灣時區）
    let multiPlayRecord = JSON.parse(localStorage.getItem('grammarTowerPlayCount') || '{}');
    const todayStr = this.getTaipeiTodayStr();
    let playTimes = multiPlayRecord[this.currentFloor]?.[todayStr] || 0;
    if (playTimes >= 3) {
      alert('今日已達本樓層挑戰上限（3次），請明天再來！');
      return;
    }
    // 累加今日挑戰次數
    if (!multiPlayRecord[this.currentFloor]) multiPlayRecord[this.currentFloor] = {};
    if (!multiPlayRecord[this.currentFloor][todayStr]) multiPlayRecord[this.currentFloor][todayStr] = 0;
    multiPlayRecord[this.currentFloor][todayStr]++;
    localStorage.setItem('grammarTowerPlayCount', JSON.stringify(multiPlayRecord));
    // 先消耗能量
    this.energy--;
    this.updateDisplay();
    this.saveUserData();
    if (this.energy < 0) {
      alert('能量不足！請等待能量回復或使用碎片補充。');
      this.energy = 0;
      this.updateDisplay();
      this.saveUserData();
      return;
    }
    // 顯示「挑戰開始」動畫，動畫結束後才繼續
    if (typeof window.showChallengeAnimation === 'function') {
      window.showChallengeAnimation('start');
    }
    setTimeout(() => {
      const currentFloorData = this.floors[this.currentFloor - 1];
      if (!currentFloorData || !currentFloorData.questions || currentFloorData.questions.length === 0) {
        alert('本樓層沒有題目，請選擇其他樓層或檢查題庫設定！');
        // 可以自動返回高塔或停留
        return;
      }
      // 初始化卡牌系統
      this.resetCardUsage();
      this.shields = 0;
      this.comboProtection = 0;
      this.scoreMultiplier = 1;
      this.timeRemaining = currentFloorData.timeLimit;
      this.currentQuestion = 0;
      this.correctAnswers = 0;
      this.totalQuestions = currentFloorData.questions.length;
      this.combo = 0;
      this.stopAllSounds(); // 先停止所有音效
      // 新增：播放通關音樂
      try {
        if (!this.kidsHappyMusic) {
          this.kidsHappyMusic = new Audio('sound/kids-happy-background-music-366043.mp3');
          this.kidsHappyMusic.volume = 0.7;
        }
        this.kidsHappyMusic.pause();
        this.kidsHappyMusic.currentTime = 0;
        const playPromise = this.kidsHappyMusic.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // 顯示錯誤提示
            const modal = document.getElementById('resultModal');
            const text = document.getElementById('modalText');
            if (modal && text) {
              text.innerHTML += '<br><span style="color:#ff6b6b;font-size:1rem;">🎵 通關音樂播放失敗，請檢查瀏覽器設定</span>';
            }
            console.warn('通關音樂播放失敗', error);
          });
        }
      } catch (e) {
        const modal = document.getElementById('resultModal');
        const text = document.getElementById('modalText');
        if (modal && text) {
          text.innerHTML += '<br><span style="color:#ff6b6b;font-size:1rem;">🎵 通關音樂播放失敗，請檢查瀏覽器設定</span>';
        }
        console.warn('通關音樂播放失敗', e);
      }
      this.playSound('complete');
      // 通關成功時移除失敗紀錄
      let failRecord = JSON.parse(localStorage.getItem('grammarTowerFail') || '{}');
      if (failRecord[this.currentFloor]) {
        delete failRecord[this.currentFloor];
        localStorage.setItem('grammarTowerFail', JSON.stringify(failRecord));
      }
      // 標記今日已解鎖
      let unlockRecord = JSON.parse(localStorage.getItem('grammarTowerUnlock') || '{}');
      unlockRecord[this.currentFloor] = todayStr;
      localStorage.setItem('grammarTowerUnlock', JSON.stringify(unlockRecord));
      // 顯示剛通過樓層的資訊
      this.updateDisplay(this.currentFloor);
      // 延遲切換到新樓層
      setTimeout(() => {
        this.currentFloor = Math.max(...this.completedLevels, 0) + 1;
        this.currentFloor = Math.min(this.currentFloor, this.maxFloor);
        this.updateDisplay();
      }, 1400); // 與動畫時長同步
    }, 1200);
  }

  // 載入下一題
  loadNextQuestion() {
    console.log('loadNextQuestion 被調用');
    console.log('當前樓層:', this.currentFloor);
    console.log('當前題目:', this.currentQuestion);
    console.log('總題數:', this.totalQuestions);
    
    const currentFloorData = this.floors[this.currentFloor - 1];
    if (!currentFloorData || this.currentQuestion >= currentFloorData.questions.length) {
      console.log('題目載入完成或沒有更多題目');
      this.completeFloor();
      return;
    }

    this.currentQuestionData = currentFloorData.questions[this.currentQuestion];
    console.log('當前題目資料:', this.currentQuestionData);

    // 更新題目顯示
    const questionText = document.getElementById('questionText');
    const options = document.getElementById('options');
    // 新增：更新進度顯示
    const questionProgress = document.getElementById('questionProgress');
    if (questionProgress) {
      questionProgress.textContent = `${this.totalQuestions} / ${this.currentQuestion + 1}`;
    }
    
    console.log('題目文字元素:', questionText);
    console.log('選項容器元素:', options);
    
    if (questionText && options) {
      questionText.textContent = this.currentQuestionData.question;
      options.innerHTML = '';
      this.currentQuestionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        // 若該選項被排除則打叉變灰
        if (this.excludedOptionIndexes && this.excludedOptionIndexes.includes(index)) {
          optionElement.textContent = option + '  ❌';
          optionElement.style.color = '#aaa';
          optionElement.style.background = '#eee';
          optionElement.style.textDecoration = 'line-through';
          optionElement.style.pointerEvents = 'none';
        } else {
          optionElement.textContent = option;
          optionElement.onclick = () => this.selectAnswer(index);
        }
        options.appendChild(optionElement);
      });
      console.log('題目已更新到側邊欄');
    } else {
      console.error('找不到題目文字或選項容器元素');
    }
  }

  // 選擇答案
  selectAnswer(selectedIndex) {
    const options = document.querySelectorAll('.option');
    const correct = this.currentQuestionData.correct;

    options.forEach(option => {
      option.style.pointerEvents = 'none';
    });

    options.forEach((option, index) => {
      if (index === correct) {
        option.classList.add('correct');
      } else if (index === selectedIndex && index !== correct) {
        option.classList.add('wrong');
      }
    });

    const isCorrect = selectedIndex === correct;
    
    if (isCorrect) {
      this.playSound('correct');
      this.correctAnswers++;
      this.combo++;
      
      // 應用分數倍率
      const baseShards = 2;
      const actualShards = this.applyScoreMultiplier(baseShards);
      this.shards += actualShards;
      
      // 顯示分數倍率效果
      if (this.scoreMultiplier > 1) {
        this.showEffectMessage(`分數倍率生效！獲得 ${actualShards} 碎片`, '分數倍率');
      }
    } else {
      this.playSound('wrong');
      this.wrongCount = (this.wrongCount || 0) + 1;
      if (this.wrongCount >= 3) {
        setTimeout(() => {
          const modal = document.getElementById('resultModal');
          const title = document.getElementById('modalTitle');
          const text = document.getElementById('modalText');
          if (modal && title && text) {
            title.textContent = '❌ 遊戲結束';
            text.innerHTML = `
              <div style="font-size: 3rem; margin-bottom: 15px;">💥</div>
              <p><strong>已錯三次，遊戲結束！</strong></p>
            `;
            modal.style.display = 'block';
            if (typeof window.showEndAnimation === 'function') window.showEndAnimation(false);
          }
        }, 800);
        return;
      }
      // 檢查是否有護盾保護
      if (this.hasShield()) {
        this.useShield();
        // 有護盾時不中斷連擊，不扣能量
      } else if (this.hasComboProtection()) {
        this.useComboProtection();
        // 有連擊保護時不中斷連擊
      } else {
        // 沒有保護時正常懲罰
        this.combo = 0;
        this.energy = Math.max(0, this.energy - 1);
      }
    }
    
    setTimeout(() => {
      this.showResult(isCorrect);
    }, 1500);
  }

  // 顯示結果
  showResult(isCorrect) {
    const modal = document.getElementById('resultModal');
    const title = document.getElementById('modalTitle');
    const text = document.getElementById('modalText');

    if (!modal || !title || !text) return;

    if (isCorrect) {
      // 答對：不顯示彈窗，直接顯示獎勵動畫並自動進入下一題
      const baseShards = 2;
      const actualShards = this.applyScoreMultiplier(baseShards);
      this.showRewardAnimation();
      // 延遲 1 秒自動進入下一題
      setTimeout(() => {
        this.currentQuestion++;
        this.updateDisplay();
        this.saveUserData();
        this.loadNextQuestion();
      }, 1000);
      return;
    } else {
      // 答錯：維持原本彈窗顯示
      title.textContent = '❌ 答錯了';
      text.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 15px;">💡</div>
        <p><strong>正確答案：</strong>${this.currentQuestionData.options[this.currentQuestionData.correct]}</p>
        <p>${this.currentQuestionData.explanation}</p>
        ${this.hasShield() || this.hasComboProtection() ? 
          '<p style="color: #00ffff;">保護效果生效，連擊未中斷</p>' : 
          '<p>連擊中斷</p>'
        }
      `;
      modal.style.display = 'block';
      this.stopTimer(); // 顯示彈窗時暫停計時
      this.currentQuestion++;
      this.updateDisplay();
      this.saveUserData();
    }
  }

  // 完成樓層
  completeFloor() {
    if (this.resultModalShown) return; // 防止重複彈窗
    this.resultModalShown = true;
    const currentFloorData = this.floors[this.currentFloor - 1];
    const accuracy = this.correctAnswers / this.totalQuestions;
    const threshold = currentFloorData.threshold;
    this.stopTimer();
    // 取得今日日期字串
    const todayStr = new Date().toISOString().slice(0, 10);
    // 取得失敗紀錄
    let failRecord = JSON.parse(localStorage.getItem('grammarTowerFail') || '{}');
    Object.keys(failRecord).forEach(floor => { if (failRecord[floor] !== todayStr) delete failRecord[floor]; });
    // 取得今日已解鎖紀錄
    let unlockRecord = JSON.parse(localStorage.getItem('grammarTowerUnlock') || '{}');
    Object.keys(unlockRecord).forEach(floor => { if (unlockRecord[floor] !== todayStr) delete unlockRecord[floor]; });
    // 取得今日已挑戰紀錄
    let playRecord = JSON.parse(localStorage.getItem('grammarTowerPlay') || '{}');
    Object.keys(playRecord).forEach(floor => { if (playRecord[floor] !== todayStr) delete playRecord[floor]; });
    // 標記今日已玩過本關卡
    playRecord[this.currentFloor] = todayStr;
    localStorage.setItem('grammarTowerPlay', JSON.stringify(playRecord));
    // 新增：記錄今日挑戰次數
    let multiPlayRecord = JSON.parse(localStorage.getItem('grammarTowerPlayCount') || '{}');
    if (!multiPlayRecord[this.currentFloor]) multiPlayRecord[this.currentFloor] = {};
    if (!multiPlayRecord[this.currentFloor][todayStr]) multiPlayRecord[this.currentFloor][todayStr] = 0;
    multiPlayRecord[this.currentFloor][todayStr]++;
    localStorage.setItem('grammarTowerPlayCount', JSON.stringify(multiPlayRecord));
    // 判斷是否已鎖定
    if (failRecord[this.currentFloor] === todayStr) {
      setTimeout(() => {
        const modal = document.getElementById('resultModal');
        const title = document.getElementById('modalTitle');
        const text = document.getElementById('modalText');
        if (modal && title && text) {
          title.textContent = '⏳ 今日已挑戰失敗';
          text.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 15px;">🕒</div>
            <p><strong>今日已挑戰失敗，請明天再來挑戰！</strong></p>
          `;
          modal.style.display = 'block';
        }
      }, 1200);
      this.updateDisplay();
      this.saveUserData();
      return;
    }
    // 判斷今日是否已解鎖過新關卡
    let todayUnlocked = Object.values(unlockRecord).includes(todayStr);
    if (accuracy >= threshold && !todayUnlocked) {
      // 通關成功且今日尚未解鎖過新關卡
      const completedFloor = currentFloorData.floor;
      if (!this.completedLevels.includes(completedFloor)) {
        this.completedLevels.push(completedFloor);
        if (typeof LinkageSystem !== 'undefined' && LinkageSystem.grammarTower && typeof LinkageSystem.grammarTower.completeLevel === 'function') {
          LinkageSystem.grammarTower.completeLevel(completedFloor);
        }
      }
      this.shards += 10;
      this.combo = 0;
      this.playSound('complete');
      // 新增：播放通關音樂
      try {
        if (!this.kidsHappyMusic) {
          this.kidsHappyMusic = new Audio('sound/kids-happy-background-music-366043.mp3');
          this.kidsHappyMusic.volume = 0.7;
        }
        this.kidsHappyMusic.pause();
        this.kidsHappyMusic.currentTime = 0;
        const playPromise = this.kidsHappyMusic.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // 顯示錯誤提示
            const modal = document.getElementById('resultModal');
            const text = document.getElementById('modalText');
            if (modal && text) {
              text.innerHTML += '<br><span style="color:#ff6b6b;font-size:1rem;">🎵 通關音樂播放失敗，請檢查瀏覽器設定</span>';
            }
            console.warn('通關音樂播放失敗', error);
          });
        }
      } catch (e) {
        const modal = document.getElementById('resultModal');
        const text = document.getElementById('modalText');
        if (modal && text) {
          text.innerHTML += '<br><span style="color:#ff6b6b;font-size:1rem;">🎵 通關音樂播放失敗，請檢查瀏覽器設定</span>';
        }
        console.warn('通關音樂播放失敗', e);
      }
      const modal = document.getElementById('resultModal');
      const title = document.getElementById('modalTitle');
      const text = document.getElementById('modalText');
      if (modal && title && text) {
        title.textContent = '🎉 樓層完成！';
        text.innerHTML = `
          <div style="font-size: 3rem; margin-bottom: 15px;">🏆</div>
          <p><strong>恭喜完成第${completedFloor}層！</strong></p>
          <p>正確率：${Math.round(accuracy * 100)}%</p>
          <p>獲得 10 流光碎片</p>
          ${this.currentFloor <= this.maxFloor && this.currentFloor < this.maxFloor ? `<p style="color: #00ffff;">🌟 解鎖第${this.currentFloor+1}層</p>` : ''}
        `;
        modal.style.display = 'block';
        if (typeof window.showEndAnimation === 'function') window.showEndAnimation(true);
      }
      // 通關成功時移除失敗紀錄
      if (failRecord[this.currentFloor]) {
        delete failRecord[this.currentFloor];
        localStorage.setItem('grammarTowerFail', JSON.stringify(failRecord));
      }
      // 標記今日已解鎖
      unlockRecord[this.currentFloor] = todayStr;
      localStorage.setItem('grammarTowerUnlock', JSON.stringify(unlockRecord));
      // 顯示剛通過樓層的資訊
      this.updateDisplay(this.currentFloor);
      // 延遲切換到新樓層
      setTimeout(() => {
        this.currentFloor = Math.max(...this.completedLevels, 0) + 1;
        this.currentFloor = Math.min(this.currentFloor, this.maxFloor);
        this.updateDisplay();
      }, 1400); // 與動畫時長同步
    } else if (accuracy >= threshold && todayUnlocked) {
      // 今日已解鎖過新關卡，僅顯示通過但不解鎖
      const modal = document.getElementById('resultModal');
      const title = document.getElementById('modalTitle');
      const text = document.getElementById('modalText');
      if (modal && title && text) {
        title.textContent = '🎉 樓層完成！';
        text.innerHTML = `
          <div style="font-size: 3rem; margin-bottom: 15px;">🏆</div>
          <p><strong>恭喜完成本層！</strong></p>
          <p>正確率：${Math.round(accuracy * 100)}%</p>
          <p style="color:#ff6b6b;"><strong>今日已解鎖過新關卡，請明天再來挑戰其他樓層！</strong></p>
        `;
        modal.style.display = 'block';
        if (typeof window.showEndAnimation === 'function') window.showEndAnimation(true);
      }
      this.updateDisplay(this.currentFloor);
      setTimeout(() => {
        this.updateDisplay();
      }, 1400);
    } else {
      // 通關失敗，記錄今日失敗
      this.combo = 0;
      failRecord[this.currentFloor] = todayStr;
      localStorage.setItem('grammarTowerFail', JSON.stringify(failRecord));
      if (typeof window.showChallengeAnimation === 'function') {
        window.showChallengeAnimation('fail');
      }
      setTimeout(() => {
        const modal = document.getElementById('resultModal');
        const title = document.getElementById('modalTitle');
        const text = document.getElementById('modalText');
        if (modal && title && text) {
          title.textContent = '❌ 挑戰失敗';
          text.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 15px;">💔</div>
            <p><strong>正確率不足！</strong></p>
            <p>正確率：${Math.round(accuracy * 100)}% (需要 ${Math.round(threshold * 100)}%)</p>
            <p style="color:#ff6b6b;"><strong>今日已挑戰失敗，請明天再來挑戰！</strong></p>
          `;
          modal.style.display = 'block';
          if (typeof window.showEndAnimation === 'function') window.showEndAnimation(false);
        }
        this.updateDisplay(this.currentFloor);
        setTimeout(() => {
          this.updateDisplay();
        }, 1400);
      }, 1200);
    }
    this.saveUserData();
    this.wrongCount = 0; // 挑戰結束時重置錯誤次數
  }

  // 開始計時器
  startTimer() {
    const currentFloorData = this.floors[this.currentFloor - 1];
    if (!currentFloorData.timeLimit) {
      document.getElementById('timer').textContent = '時間：無限';
      return;
    }

    // 使用卡牌效果系統的時間
    if (this.timeRemaining === undefined) {
      this.timeRemaining = currentFloorData.timeLimit;
    }
    
    document.getElementById('timer').textContent = `時間：${this.timeRemaining}秒`;

    this.timer = setInterval(() => {
      this.timeRemaining--;
      document.getElementById('timer').textContent = `時間：${this.timeRemaining}秒`;
      
      if (this.timeRemaining <= 0) {
        this.stopTimer();
        this.completeFloor();
      }
    }, 1000);
  }

  // 停止計時器
  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  // 開始能量計時器
  startEnergyTimer() {
    this.energyTimer = setInterval(() => {
      const now = Date.now();
      const timeDiff = now - this.lastEnergyTime;
      const energyGain = Math.floor(timeDiff / (10 * 60 * 1000)); // 每10分鐘回復1點

      if (energyGain > 0 && this.energy < this.maxEnergy) {
        this.energy = Math.min(this.maxEnergy, this.energy + energyGain);
        this.lastEnergyTime = now;
        this.updateDisplay();
        this.saveUserData();
      }

      this.updateEnergyTimer();
    }, 1000);
  }

  // 更新能量計時器顯示
  updateEnergyTimer() {
    const energyTimer = document.getElementById('energyTimer');
    if (!energyTimer) return;

    if (this.energy >= this.maxEnergy) {
      energyTimer.textContent = '能量已滿';
      return;
    }

    const now = Date.now();
    const timeDiff = now - this.lastEnergyTime;
    const nextEnergyTime = (10 * 60 * 1000) - timeDiff; // 10分鐘
    const minutes = Math.floor(nextEnergyTime / (60 * 1000));
    const seconds = Math.floor((nextEnergyTime % (60 * 1000)) / 1000);
    
    energyTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // 使用碎片補充能量
  useShardForEnergy() {
    if (this.cheatMode) {
      this.showEffectMessage('作弊模式：碎片無限', '碎片');
      return;
    }
    if (this.shards < 5) {
      alert('需要 5 流光碎片才能補充能量！');
      return;
    }

    if (this.energy >= this.maxEnergy) {
      alert('能量已滿！');
      return;
    }

    this.shards -= 5;
    this.energy = Math.min(this.maxEnergy, this.energy + 2);
    this.updateDisplay();
    this.saveUserData();
    
    alert('成功補充 2 點能量！');
  }

  // 打開卡牌包
  openCardPack() {
    this.playSound('openPack');

    // 隨機選擇一張卡牌
    const randomCard = this.cardShop[Math.floor(Math.random() * this.cardShop.length)];
    
    let message = '';
    const isAlreadyOwned = this.ownedCards[randomCard.word];

    if (isAlreadyOwned) {
      // 如果已經擁有，增加碎片
      this.cardShards[randomCard.word] = (this.cardShards[randomCard.word] || 0) + 1;
      message = `抽到了重複的卡片，獲得了 1 個「${randomCard.zh}」碎片！`;
    } else {
      // 如果是新卡，解鎖卡片
      this.ownedCards[randomCard.word] = true;
      // 初始化碎片數量
      const requiredShards = getRequiredShards(randomCard.rarity);
      this.cardShards[randomCard.word] = requiredShards; // 直接給滿解鎖
      message = `恭喜！抽到了新卡片「${randomCard.zh}」！`;

      // 觸發新卡片標記
      if (typeof addNewCard === 'function') {
        addNewCard(randomCard.word);
      }
    }

    // 顯示抽到的卡牌
    const cardModal = document.getElementById('cardModal');
    const cardContent = document.getElementById('cardContent');
    cardContent.innerHTML = `
      <h2>${message}</h2>
      <div class="card-display ${randomCard.rarity === '普通' ? 'common' : randomCard.rarity === '稀有' ? 'rare' : 'epic'}">
        <div class="card-icon">${randomCard.icon || '❓'}</div>
        <div class="card-name">${randomCard.zh}</div>
        <div class="card-word">${randomCard.word}</div>
        <div class="card-rarity">${randomCard.rarity}</div>
      </div>
    `;
    cardModal.style.display = 'block';

    this.updateDisplay();
    this.saveUserData();
    this.renderCards(); // 重新渲染卡牌預覽
  }

  // 顯示獎勵動畫
  showRewardAnimation() {
    const animation = document.createElement('div');
    animation.className = 'reward-animation';
    animation.textContent = '⭐';
    document.body.appendChild(animation);

    setTimeout(() => {
      if (document.body.contains(animation)) {
        document.body.removeChild(animation);
      }
    }, 1000);
  }

  // 更新進度
  updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
      const progress = (this.currentQuestion / this.totalQuestions) * 100;
      progressFill.style.width = progress + '%';
      progressText.textContent = `${this.currentQuestion}/${this.totalQuestions}`;
    }
  }

  // 更新顯示（可選指定樓層）
  updateDisplay(showFloor) {
    document.getElementById('shards').textContent = this.shards;
    document.getElementById('energy').textContent = this.energy;
    document.getElementById('currentFloor').textContent = this.currentFloor;
    document.getElementById('combo').textContent = this.combo;

    // 更新能量條
    const energyFill = document.getElementById('energyFill');
    if (energyFill) {
      const energyPercent = (this.energy / this.maxEnergy) * 100;
      energyFill.style.width = energyPercent + '%';
    }

    // 更新樓層資訊
    const floorToShow = showFloor || this.currentFloor;
    const currentFloorData = this.floors[floorToShow - 1];
    if (currentFloorData) {
      document.getElementById('floorNumber').textContent = floorToShow;
      document.getElementById('floorTheme').textContent = currentFloorData.theme;
      // 同步更新高塔區塊主題名稱
      const towerFloorTheme = document.getElementById('towerFloorTheme');
      if (towerFloorTheme) towerFloorTheme.textContent = currentFloorData.theme;
      document.getElementById('floorQuestions').textContent = currentFloorData.questions.length;
      document.getElementById('floorTime').textContent = currentFloorData.timeLimit ? `${currentFloorData.timeLimit}秒` : '無限';
      document.getElementById('floorThreshold').textContent = Math.round(currentFloorData.threshold * 100) + '%';
    }

    // 更新連擊顯示
    const comboCounter = document.getElementById('comboCounter');
    if (comboCounter) {
      comboCounter.textContent = `連擊：${this.combo}`;
    }

    // 更新按鈕狀態
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
      startBtn.disabled = this.energy <= 0;
    }

    const cardBtn = document.getElementById('cardBtn');
    if (cardBtn) {
      cardBtn.disabled = this.shards < 20;
    }

    // 更新卡牌顯示
    this.renderCards();

    // 更新今日挑戰次數
    const floorChallenges = document.getElementById('floorChallenges');
    if (floorChallenges) {
      let multiPlayRecord = JSON.parse(localStorage.getItem('grammarTowerPlayCount') || '{}');
      const todayStr = new Date().toISOString().slice(0, 10);
      let playTimes = multiPlayRecord[floorToShow]?.[todayStr] || 0;
      floorChallenges.textContent = `${playTimes}/3`;
    }

    // 更新是否通關
    const floorPassed = document.getElementById('floorClearStatus');
    if (floorPassed) {
      let playRecord = JSON.parse(localStorage.getItem('grammarTowerPlay') || '{}');
      let failRecord = JSON.parse(localStorage.getItem('grammarTowerFail') || '{}');
      const todayStr = new Date().toISOString().slice(0, 10);
      const played = playRecord[floorToShow] === todayStr;
      const failed = failRecord[floorToShow] === todayStr;
      if (this.completedLevels.includes(floorToShow)) {
        floorPassed.textContent = '已通關';
        floorPassed.style.color = '#00d26a';
      } else if (played && failed) {
        floorPassed.textContent = '失敗';
        floorPassed.style.color = '#ff6b6b';
      } else if (played) {
        floorPassed.textContent = '失敗';
        floorPassed.style.color = '#ff6b6b';
      } else {
        floorPassed.textContent = '未通關';
        floorPassed.style.color = '#a3b8ff';
      }
    }
  }

  // 設置事件監聽器
  setupEventListeners() {
    // 添加音效開關按鈕
    this.addSoundToggleButton();
  }

  // 添加音效開關按鈕
  addSoundToggleButton() {
    const header = document.querySelector('.header');
    if (header) {
      const soundBtn = document.createElement('button');
      soundBtn.className = 'btn';
      soundBtn.style.marginTop = '10px';
      soundBtn.style.fontSize = '0.9rem';
      soundBtn.style.padding = '6px 12px';
      soundBtn.textContent = this.isSoundEnabled ? '🔊 音效開' : '🔇 音效關';
      
      soundBtn.addEventListener('click', () => {
        this.toggleSound();
        soundBtn.textContent = this.isSoundEnabled ? '🔊 音效開' : '🔇 音效關';
      });
      
      header.appendChild(soundBtn);
    }
  }

  // 關閉卡牌使用 Modal
  closeCardModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    if (modal) {
      modal.classList.remove('show');
    }
    if (overlay) {
      overlay.style.display = 'none';
    }
    this.startTimer(); // 關閉卡牌彈窗時恢復計時（僅在還有題目時）
  }

  // 播放影片函數
  playVideo(videoUrl, cardWord) {
    if (!videoUrl) {
      alert('沒有影片連結');
      return;
    }
    
    // 檢查是否為 YouTube 連結
    if (/youtu(be\.com|\.be)/.test(videoUrl)) {
      const youtubeId = this.extractYouTubeId(videoUrl);
      if (youtubeId) {
        // 開啟 YouTube 影片 Modal
        this.openVideoModal(youtubeId, cardWord, 'youtube');
      } else {
        alert('YouTube 連結格式錯誤');
      }
    } else {
      // 本地 MP4 影片
      this.openVideoModal(videoUrl, cardWord, 'mp4');
    }
  }
  
  // 開啟影片 Modal
  openVideoModal(videoSource, cardWord, type) {
    // 創建影片 Modal
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="video-modal-content">
        <div class="video-modal-header">
          <h3>${cardWord}</h3>
          <button class="video-modal-close" onclick="grammarTower.closeVideoModal()">×</button>
        </div>
        <div class="video-modal-body">
          ${type === 'youtube' 
            ? `<iframe src="https://www.youtube.com/embed/${videoSource}?autoplay=1&mute=0&controls=1&showinfo=1&rel=0&modestbranding=1" 
                 frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
            : `<video controls autoplay>
                 <source src="${videoSource}" type="video/mp4">
                 您的瀏覽器不支援影片播放
               </video>`
          }
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // 點擊背景關閉 Modal
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeVideoModal();
      }
    });
    
    // ESC 鍵關閉 Modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeVideoModal();
      }
    });
  }
  
  // 關閉影片 Modal
  closeVideoModal() {
    const modal = document.querySelector('.video-modal');
    if (modal) {
      modal.remove();
    }
  }
  
  extractYouTubeId(url) {
    const patterns = [
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
      /youtube\.com\/embed\/([\w-]{11})/,
      /youtu\.be\/([\w-]{11})/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }

  // 顯示題目
  showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const questionText = document.getElementById('questionText');
    if (!questionContainer || !questionText) return;
    // 取得目前樓層主題
    const theme = this.floors[this.currentFloor - 1]?.theme || '';
    // 顯示題目標題
    const titleHtml = `<div style='font-size:1.2rem;color:#00ffff;font-weight:700;margin-bottom:6px;'>${theme}｜第${this.currentQuestion + 1}題／共${this.totalQuestions}題</div>`;
    // 顯示題目內容
    questionText.innerHTML = titleHtml + this.currentQuestionData.question;
  }

  // 工具：取得台灣今天日期字串
  getTaipeiTodayStr() {
    const now = new Date();
    // 轉為台灣時區
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const taipeiOffset = 8 * 60 * 60000; // +8小時
    const taipei = new Date(utc + taipeiOffset);
    return taipei.toISOString().slice(0, 10);
  }

  // 啟用作弊模式
  enableCheatMode() {
    this.cheatMode = true;
    // 解鎖所有關卡
    this.completedLevels = [];
    for (let i = 1; i <= this.maxFloor; i++) {
      this.completedLevels.push(i);
    }
    // 強制刷新顯示
    this.updateDisplay();
    alert('🚀 無敵作弊模式已啟動！\n\n所有關卡立即解鎖，能量、碎片、卡片無限，挑戰次數不會增加。\n\n請盡情暢玩文法高塔！');
  }
}

// 全局函數
function startChallenge() {
  if (game) {
    game.startChallenge();
  }
}

function openCardPack() {
  if (game) {
    game.openCardPack();
  }
}

function useShardForEnergy() {
  if (game) {
    game.useShardForEnergy();
  }
}

function backToTower() {
  if (game) {
    game.stopTimer();
    // 恢復高塔區域顯示
    const towerSection = document.getElementById('towerSection');
    if (towerSection) {
      towerSection.style.display = 'block';
    }
    // 隱藏左邊的題目區域
    const questionCard = document.getElementById('questionCard');
    if (questionCard) {
      questionCard.style.display = 'none';
    }
  }
}

function closeModal() {
  const modal = document.getElementById('resultModal');
  if (modal) {
    modal.style.display = 'none';
  }
  if (game && game.currentQuestion < game.totalQuestions) {
    game.startTimer(); // 關閉彈窗時恢復計時
    game.loadNextQuestion();
  } else {
    backToTower();
  }
  if (window.grammarTower && typeof window.grammarTower.resultModalShown !== 'undefined') {
    window.grammarTower.resultModalShown = false;
  }
}

function closeCardModal() {
  if (game) {
    game.closeCardModal();
    // 關閉卡牌彈窗時恢復計時（僅在還有題目時）
    if (game.currentQuestion < game.totalQuestions) {
      game.startTimer();
    }
  }
}

// 初始化遊戲
let game;
document.addEventListener('DOMContentLoaded', () => {
  game = new GrammarTowerGame();
});

// 頁面卸載時停止所有音效和計時器
window.addEventListener('beforeunload', () => {
  if (game) {
    game.stopAllSounds();
    game.stopTimer();
    if (game.energyTimer) {
      clearInterval(game.energyTimer);
    }
  }
});

// 載入玩家頭像（全身圖）
window.loadPlayerAvatar = function() {
  const playerElement = document.getElementById('player');
  const avatarUrl = localStorage.getItem('selectedAvatar');
  playerElement.innerHTML = '';
  if (avatarUrl) {
    const img = document.createElement('img');
    img.src = avatarUrl;
    img.alt = '玩家頭像';
    playerElement.appendChild(img);
  }
};

// 頁面載入時自動清理過期挑戰次數
if (typeof window !== 'undefined') {
  try {
    let multiPlayRecord = JSON.parse(localStorage.getItem('grammarTowerPlayCount') || '{}');
    const todayStr = game.getTaipeiTodayStr();
    let changed = false;
    Object.keys(multiPlayRecord).forEach(floor => {
      Object.keys(multiPlayRecord[floor]).forEach(dateStr => {
        if (dateStr !== todayStr) {
          delete multiPlayRecord[floor][dateStr];
          changed = true;
        }
      });
      if (Object.keys(multiPlayRecord[floor]).length === 0) {
        delete multiPlayRecord[floor];
        changed = true;
      }
    });
    if (changed) {
      localStorage.setItem('grammarTowerPlayCount', JSON.stringify(multiPlayRecord));
    }
  } catch (e) {}
}

// ====== 作弊模式偵測 ======
document.addEventListener('keydown', (function() {
  let cheatBuffer = '';
  return function(e) {
    if (e.key.length === 1) {
      cheatBuffer += e.key;
      if (cheatBuffer.length > 10) cheatBuffer = cheatBuffer.slice(-10);
    }
    if (e.key === 'Enter' && /clean$/i.test(cheatBuffer)) {
      if (window.grammarTower) {
        window.grammarTower.enableCheatMode();
      }
      cheatBuffer = '';
    }
  };
})()); 