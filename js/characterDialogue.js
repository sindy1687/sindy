// 角色對話系統
const CharacterDialogue = {
  // 角色對話數據
  dialogues: {
    warrior: {
      name: "勇敢戰士",
      avatar: "img/avatars/avatar_TL.png",
      greetings: [
        "🌟 歡迎回來，勇敢的戰士！準備好迎接今天的挑戰了嗎？",
        "⚔️ 你的劍已經準備好了，讓我們一起征服新的關卡！",
        "🛡️ 戰士的榮耀在等待著你，準備好展現你的勇氣了嗎？"
      ],
      encouragements: [
        "💪 你的實力讓我印象深刻！繼續保持這種氣勢！",
        "🔥 燃燒的鬥志！這就是真正的戰士精神！",
        "⚡ 你的速度越來越快了，真是令人讚嘆！"
      ],
      victories: [
        "🏆 完美的勝利！你的戰鬥技巧越來越精湛了！",
        "🎯 精準的攻擊！這就是我期待的戰士表現！",
        "🌟 勝利的光芒照耀著你，繼續前進吧！"
      ],
      defeats: [
        "💪 失敗只是暫時的，真正的戰士從不放棄！",
        "🛡️ 讓我們從這次失敗中學習，下次會更強大！",
        "⚔️ 休息一下，然後重新站起來戰鬥！"
      ]
    },
    speedster: {
      name: "閃電戰士",
      avatar: "img/avatars/avatar_TR.png",
      greetings: [
        "⚡ 閃電般的速度！準備好展現你的極速了嗎？",
        "💨 風一樣的速度，讓我們一起衝向勝利！",
        "🚀 準備好體驗超音速的學習了嗎？"
      ],
      encouragements: [
        "⚡ 你的速度真是令人眼花繚亂！",
        "💨 像風一樣自由，像閃電一樣快速！",
        "🚀 你的進步速度比閃電還快！"
      ],
      victories: [
        "🏆 閃電般的勝利！你的速度無人能敵！",
        "⚡ 完美的速度表現！這就是真正的閃電戰士！",
        "💨 風一樣的勝利！繼續保持這種速度！"
      ],
      defeats: [
        "⚡ 閃電也有休息的時候，下次會更快！",
        "💨 風停了，但你的速度不會停止！",
        "🚀 重新充電，準備下一次的超音速衝刺！"
      ]
    },
    defender: {
      name: "防禦戰士",
      avatar: "img/avatars/avatar_BL.png",
      greetings: [
        "🛡️ 堅不可摧的防禦，準備好守護你的學習之路了嗎？",
        "🏰 像堡壘一樣穩固，讓我們一起建立知識的防線！",
        "💪 你的防禦力讓我感到安心，準備好迎接挑戰！"
      ],
      encouragements: [
        "🛡️ 你的防禦力真是令人印象深刻！",
        "🏰 穩固如山的表現，繼續保持這種堅定！",
        "💪 你的堅持讓我感到驕傲！"
      ],
      victories: [
        "🏆 完美的防禦勝利！你的堅定得到了回報！",
        "🛡️ 穩固的勝利！這就是真正的防禦戰士！",
        "🏰 堡壘般的勝利！你的防線無人能破！"
      ],
      defeats: [
        "🛡️ 防線被破，但你的意志不會被擊垮！",
        "🏰 堡壘需要修復，但你的精神依然堅固！",
        "💪 重新築起防線，下次會更堅固！"
      ]
    },
    sharpshooter: {
      name: "精準射手",
      avatar: "img/avatars/avatar_BR.png",
      greetings: [
        "🎯 精準的瞄準，準備好展現你的準確度了嗎？",
        "🏹 百發百中的射手，讓我們一起命中目標！",
        "🎯 你的準確度讓我期待，準備好挑戰了嗎？"
      ],
      encouragements: [
        "🎯 你的準確度真是令人讚嘆！",
        "🏹 百發百中的表現，繼續保持這種精準！",
        "🎯 你的專注力讓我印象深刻！"
      ],
      victories: [
        "🏆 完美的精準勝利！你的準確度無人能及！",
        "🎯 百發百中的勝利！這就是真正的精準射手！",
        "🏹 完美的命中！你的準確度得到了證明！"
      ],
      defeats: [
        "🎯 準星需要調整，但你的專注力依然準確！",
        "🏹 箭矢偏離目標，但你的意志依然堅定！",
        "🎯 重新瞄準，下次會更精準！"
      ]
    },
    explorer: {
      name: "探險家",
      avatar: "img/avatars/avatar_astro1.png",
      greetings: [
        "🚀 探索未知的宇宙，準備好發現新的知識了嗎？",
        "🌌 星際探險家，讓我們一起探索學習的奧秘！",
        "🔍 好奇的探險家，準備好揭開新的謎題了嗎？"
      ],
      encouragements: [
        "🚀 你的探索精神真是令人敬佩！",
        "🌌 發現新知識的喜悅，繼續保持這種好奇心！",
        "🔍 你的觀察力讓我印象深刻！"
      ],
      victories: [
        "🏆 探索的勝利！你發現了新的知識寶藏！",
        "🚀 完美的探險勝利！這就是真正的探險家！",
        "🌌 星際探索成功！你的好奇心得到了回報！"
      ],
      defeats: [
        "🚀 探險路上有挫折，但你的好奇心不會停止！",
        "🌌 星際迷航，但你的探索精神依然閃耀！",
        "🔍 重新探索，下次會發現更多寶藏！"
      ]
    },
    magician: {
      name: "魔法師",
      avatar: "img/avatars/avatar_spacekid.png",
      greetings: [
        "🌈 純真的心靈，準備好施展你的魔法了嗎？",
        "✨ 奇蹟的創造者，讓我們一起創造學習的魔法！",
        "🌟 魔法師的智慧，準備好展現你的魔力了嗎？"
      ],
      encouragements: [
        "🌈 你的魔法真是令人驚嘆！",
        "✨ 奇蹟般的表現，繼續保持這種魔力！",
        "🌟 你的智慧讓我感到神奇！"
      ],
      victories: [
        "🏆 魔法的勝利！你創造了學習的奇蹟！",
        "🌈 完美的魔法勝利！這就是真正的魔法師！",
        "✨ 奇蹟般的勝利！你的魔力得到了證明！"
      ],
      defeats: [
        "🌈 魔法暫時失效，但你的魔力不會消失！",
        "✨ 奇蹟需要時間，但你的智慧依然閃耀！",
        "🌟 重新凝聚魔力，下次會更強大！"
      ]
    },
    idol: {
      name: "虛擬偶像",
      avatar: "img/avatars/vatar_astro1.png",
      greetings: [
        "🎭 神秘的虛擬偶像，準備好展現你的魅力了嗎？",
        "💫 星光閃耀的偶像，讓我們一起創造精彩的表演！",
        "🎪 舞台上的明星，準備好迎接粉絲的歡呼了嗎？"
      ],
      encouragements: [
        "🎭 你的魅力真是令人著迷！",
        "💫 星光般的表現，繼續保持這種魅力！",
        "🎪 你的表演讓我感到驚艷！"
      ],
      victories: [
        "🏆 偶像的勝利！你的魅力征服了所有人！",
        "🎭 完美的表演勝利！這就是真正的虛擬偶像！",
        "💫 星光閃耀的勝利！你的魅力得到了證明！"
      ],
      defeats: [
        "🎭 表演暫時結束，但你的魅力不會消失！",
        "💫 星光暫時暗淡，但你的魅力依然閃耀！",
        "🎪 重新登上舞台，下次會更精彩！"
      ]
    },
    fairy: {
      name: "櫻花精靈",
      avatar: "img/avatars/vDS8zQP9HdvxX0g (1).png",
      greetings: [
        "🌸 溫柔的櫻花精靈，準備好散播美好與希望了嗎？",
        "🌺 美麗的精靈，讓我們一起創造溫馨的學習時光！",
        "🌼 善良的精靈，準備好展現你的溫柔了嗎？"
      ],
      encouragements: [
        "🌸 你的溫柔真是令人感動！",
        "🌺 美麗的表現，繼續保持這種善良！",
        "🌼 你的愛心讓我感到溫暖！"
      ],
      victories: [
        "🏆 精靈的勝利！你的溫柔感動了所有人！",
        "🌸 完美的溫柔勝利！這就是真正的櫻花精靈！",
        "🌺 美麗的勝利！你的善良得到了回報！"
      ],
      defeats: [
        "🌸 花瓣暫時凋零，但你的溫柔不會消失！",
        "🌺 美麗暫時暗淡，但你的善良依然閃耀！",
        "🌼 重新綻放，下次會更美麗！"
      ]
    }
  },

  // 當前角色設定
  currentCharacter: null,
  
  // 語音管理
  isCharacterSpeaking: false,
  pendingAudioQueue: [],

  // 初始化對話系統
  init() {
    this.loadCharacterSettings();
    this.showWelcomeDialogue();
  },

  // 載入角色設定
  loadCharacterSettings() {
    const savedVoiceSettings = localStorage.getItem('selectedVoiceSettings');
    if (savedVoiceSettings) {
      try {
        const voiceSettings = JSON.parse(savedVoiceSettings);
        this.currentCharacter = voiceSettings.characterType || 'warrior';
      } catch (e) {
        console.log('角色設定載入失敗:', e);
        this.currentCharacter = 'warrior';
      }
    } else {
      this.currentCharacter = 'warrior';
    }
  },

  // 顯示歡迎對話
  showWelcomeDialogue() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const greetings = character.greetings;
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    this.showDialogueBox(randomGreeting, character.name, character.avatar, true);
  },

  // 暫停所有其他音效
  pauseAllAudio() {
    // 暫停背景音樂
    const bgMusic = document.getElementById('backgroundMusic');
    if (bgMusic && !bgMusic.paused) {
      bgMusic.pause();
      this.pendingAudioQueue.push(() => {
        if (bgMusic) bgMusic.play();
      });
    }
    
    // 暫停其他音效
    const audioElements = document.querySelectorAll('audio:not(#backgroundMusic)');
    audioElements.forEach(audio => {
      if (!audio.paused) {
        audio.pause();
        this.pendingAudioQueue.push(() => {
          audio.currentTime = 0;
          audio.play();
        });
      }
    });
    
    // 暫停語音合成
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      this.pendingAudioQueue.push(() => {
        window.speechSynthesis.resume();
      });
    }
  },

  // 恢復所有音效
  resumeAllAudio() {
    this.pendingAudioQueue.forEach(resumeFunction => {
      try {
        resumeFunction();
      } catch (e) {
        console.log('恢復音效失敗:', e);
      }
    });
    this.pendingAudioQueue = [];
  },

  // 顯示對話框（包含頭像）
  showDialogueBox(message, characterName, avatarPath, playVoice = false) {
    // 移除現有的對話框
    const existingDialogue = document.getElementById('character-dialogue-box');
    if (existingDialogue) {
      existingDialogue.remove();
    }

    // 創建對話框
    const dialogueBox = document.createElement('div');
    dialogueBox.id = 'character-dialogue-box';
    dialogueBox.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      background: linear-gradient(135deg, rgba(10, 20, 40, 0.95), rgba(30, 40, 60, 0.95));
      border: 2px solid #00ffff;
      border-radius: 15px;
      padding: 15px;
      max-width: 350px;
      width: auto;
      z-index: 10000;
      box-shadow: 0 0 20px #00ffff, 0 0 40px #a259ff;
      backdrop-filter: blur(10px);
      animation: dialogueAppear 0.5s ease-out;
      display: flex;
      align-items: center;
      gap: 12px;
    `;

    // 角色頭像
    const avatarElement = document.createElement('div');
    avatarElement.style.cssText = `
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #00ffff;
      box-shadow: 0 0 15px #00ffff;
      overflow: hidden;
      background: #222;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarPath || 'img/avatars/avatar_TL.png';
    avatarImg.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    `;
    avatarImg.onerror = function() {
      // 如果頭像載入失敗，顯示預設頭像
      this.src = 'img/avatars/avatar_TL.png';
    };
    avatarElement.appendChild(avatarImg);

    // 對話內容容器
    const contentContainer = document.createElement('div');
    contentContainer.style.cssText = `
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
    `;

    // 角色名稱
    const nameElement = document.createElement('div');
    nameElement.style.cssText = `
      font-size: 1rem;
      color: #ffd700;
      font-weight: bold;
      text-align: left;
      text-shadow: 0 0 8px #ffd700;
      font-family: 'Orbitron', sans-serif;
      white-space: nowrap;
    `;
    nameElement.textContent = characterName;

    // 對話內容
    const messageElement = document.createElement('div');
    messageElement.style.cssText = `
      font-size: 0.9rem;
      color: #f3f6fa;
      line-height: 1.4;
      text-align: left;
      font-family: 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;
    messageElement.textContent = message;

    // 確認按鈕
    const confirmButton = document.createElement('button');
    confirmButton.style.cssText = `
      background: linear-gradient(135deg, #00ffff 0%, #a259ff 100%);
      color: #222b3a;
      border: none;
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 0.8rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Orbitron', sans-serif;
      box-shadow: 0 0 10px #00ffff;
      align-self: flex-start;
      margin-top: 5px;
    `;
    confirmButton.textContent = '確定';
    confirmButton.onclick = () => {
      this.hideDialogueBox();
    };

    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes dialogueAppear {
        from {
          opacity: 0;
          transform: translateX(-100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes dialogueDisappear {
        from {
          opacity: 1;
          transform: translateX(0);
        }
        to {
          opacity: 0;
          transform: translateX(-100%);
        }
      }
      
      #character-dialogue-box button:hover {
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 0 15px #00ffff, 0 0 30px #a259ff;
      }
    `;
    document.head.appendChild(style);

    // 組裝對話框
    contentContainer.appendChild(nameElement);
    contentContainer.appendChild(messageElement);
    contentContainer.appendChild(confirmButton);
    
    dialogueBox.appendChild(avatarElement);
    dialogueBox.appendChild(contentContainer);

    // 添加到頁面
    document.body.appendChild(dialogueBox);

    // 只有歡迎對話才播放語音
    if (playVoice) {
      this.pauseAllAudio();
      setTimeout(() => {
        this.playCharacterVoice(message);
      }, 500);
    }

    // 5秒後自動隱藏對話框
    setTimeout(() => {
      this.hideDialogueBox();
    }, 5000);
  },

  // 隱藏對話框
  hideDialogueBox() {
    const dialogueBox = document.getElementById('character-dialogue-box');
    if (dialogueBox) {
      dialogueBox.style.animation = 'dialogueDisappear 0.3s ease-out';
      setTimeout(() => {
        dialogueBox.remove();
      }, 300);
    }
  },

  // 播放角色語音
  playCharacterVoice(message) {
    if (!('speechSynthesis' in window)) {
      console.log('瀏覽器不支援語音合成');
      this.resumeAllAudio();
      return;
    }

    // 停止之前的語音
    window.speechSynthesis.cancel();

    // 獲取語音設定
    const savedVoiceSettings = localStorage.getItem('selectedVoiceSettings');
    let voiceSettings = { rate: 0.85, pitch: 1.05, volume: 0.9 };
    
    if (savedVoiceSettings) {
      try {
        voiceSettings = JSON.parse(savedVoiceSettings);
      } catch (e) {
        console.log('語音設定解析失敗:', e);
      }
    }

    // 創建語音合成
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = message.replace(/[🌟⚡🛡️🎯🚀🌈🎭🌸]/g, '');
    utterance.rate = voiceSettings.rate || 0.85;
    utterance.pitch = voiceSettings.pitch || 1.05;
    utterance.volume = voiceSettings.volume || 0.9;
    utterance.lang = 'zh-TW';

    // 設置語音結束事件
    utterance.onend = () => {
      console.log('角色語音播放完成');
      this.isCharacterSpeaking = false;
      // 延遲一點時間再恢復其他音效
      setTimeout(() => {
        this.resumeAllAudio();
      }, 500);
    };

    utterance.onerror = (event) => {
      console.log('角色語音播放失敗:', event);
      this.isCharacterSpeaking = false;
      this.resumeAllAudio();
    };

    // 播放語音
    try {
      this.isCharacterSpeaking = true;
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.log('語音播放失敗:', error);
      this.isCharacterSpeaking = false;
      this.resumeAllAudio();
    }
  },

  // 顯示鼓勵對話
  showEncouragement() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const encouragements = character.encouragements;
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    
    this.showDialogueBox(randomEncouragement, character.name, character.avatar, false);
  },

  // 顯示勝利對話
  showVictoryDialogue() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const victories = character.victories;
    const randomVictory = victories[Math.floor(Math.random() * victories.length)];
    
    this.showDialogueBox(randomVictory, character.name, character.avatar, false);
  },

  // 顯示失敗對話
  showDefeatDialogue() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const defeats = character.defeats;
    const randomDefeat = defeats[Math.floor(Math.random() * defeats.length)];
    
    this.showDialogueBox(randomDefeat, character.name, character.avatar, false);
  }
};

// 頁面載入時初始化對話系統
document.addEventListener('DOMContentLoaded', function() {
  // 延遲一點時間確保其他系統都已載入
  setTimeout(() => {
    CharacterDialogue.init();
  }, 1000);
});

// 導出到全局
window.CharacterDialogue = CharacterDialogue;
