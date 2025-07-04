// 修復版 cards.js
console.log('🔧 cards_fixed.js 開始載入...');

// 基本卡片資料
const baseCards = [
  {
    "word": "Cinderella",
    "zh": "辛德瑞拉",
    "image": "https://www.bing.com/th/id/OGC.4f658e6dd75a9541f7567299e24729fa?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fFz7nXV5N8JP20%2fgiphy.gif&ehk=4bQEQlwZCYKzP7usk07s8CVwGK6CD9SRZbt%2bGTu2cR0%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "灰姑娘在暮色南瓜馬車裡奔向夢想，用一隻水晶鞋書寫逆轉人生的詩篇。",
    "effect": {
      "type": "time_extend",
      "value": 60,
      "description": "增加答題時間 60 秒"
    }
  },
  {
    "word": "Snow White",
    "zh": "白雪公主",
    "image": "https://www.bing.com/th/id/OGC.0f6e0c6aa2cf28e28d418b46e58b2760?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.tenor.com%2fCnQeiIla_r4AAAAC%2fsnow-white-snow-white-and-the-seven-dwarfs.gif&ehk=wGIyAftPN%2bI9redCZbf27tMmVNsZOqA16%2bMDFRYItFA%3d",
    "video": "https://www.youtube.com/watch?v=6boKndR4P7Y",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "被蘋果詛咒的純真少女，以微笑融化王子的真愛魔咒。",
    "effect": {
      "type": "shield",
      "value": 1,
      "description": "抵擋一次答錯懲罰"
    }
  },
  {
    "word": "Aurora",
    "zh": "奧蘿拉",
    "image": "https://www.bing.com/th/id/OGC.91bac983035ac66f014e2fa5b71e7004?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fn.sinaimg.cn%2fastro%2ftransform%2f729%2fw500h229%2f20181119%2fBLVB-hnyuqhi2165817.gif&ehk=xZUrpYHpm5I4TlHhWPvfxJq7oRtUtxtOnac4e89M82Y%3d",
    "video": "https://youtu.be/_xP12x6FIsM?si=zJWRBcKWod6FFQ6c",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "沉睡千年的公主，在晨曦中甦醒，舞動皇宮的光影韻律。",
    "effect": {
      "type": "energy_restore",
      "value": 2,
      "description": "恢復 2 點能量"
    }
  },
  {
    "word": "astronaut",
    "zh": "太空人",
    "image": "https://www.bing.com/th/id/OGC.444b04a2dc5d7fc03cc7c2f5a9e79f61?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3o6Zt2AUBd8zEa9aMw%2fgiphy.gif&ehk=gJDc22cgsxjYqbCrJU18oD2ptYwGVL%2brX%2brGKgmYtHg%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "稀有",
    "category": "space",
    "description": "穿著太空衣探索太空的英雄，需要承受極端環境挑戰。"
  },
  {
    "word": "satellite",
    "zh": "衛星",
    "image": "https://www.bing.com/th/id/OGC.5b8419ac0f0a6049ad4936040d179f0b?pid=1.7&rurl=https%3a%2f%2f3.bp.blogspot.com%2f-Nvrm8Nq7PrM%2fUWoX9A9Rs0I%2fAAAAAAAAPi0%2fbjxOKTwK9gE%2fs1600%2fgifanim.nc.387599366.558465.Zi6ZUO.gif&ehk=o3vb595rnvNvDDyEDhOBOR50POJOPrq8qHIfCF2SYpA%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "普通",
    "category": "space",
    "description": "環繞地球運行的科技裝置，為人類提供通訊和觀測服務。"
  },
  {
    "word": "dark_matter",
    "zh": "暗物質",
    "image": "https://www.bing.com/th/id/OGC.5b8419ac0f0a6049ad4936040d179f0b?pid=1.7&rurl=https%3a%2f%2f3.bp.blogspot.com%2f-Nvrm8Nq7PrM%2fUWoX9A9Rs0I%2fAAAAAAAAPi0%2fbjxOKTwK9gE%2fs1600%2fgifanim.nc.387599366.558465.Zi6ZUO.gif&ehk=o3vb595rnvNvDDyEDhOBOR50POJOPrq8qHIfCF2SYpA%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "超稀有",
    "category": "space",
    "description": "宇宙中神秘的存在，佔據大部分物質但不可見。"
  },
  {
    "word": "Rapunzel",
    "zh": "樂佩",
    "image": "https://www.bing.com/th/id/OGC.5b8419ac0f0a6049ad4936040d179f0b?pid=1.7&rurl=https%3a%2f%2f3.bp.blogspot.com%2f-Nvrm8Nq7PrM%2fUWoX9A9Rs0I%2fAAAAAAAAPi0%2fbjxOKTwK9gE%2fs1600%2fgifanim.nc.387599366.558465.Zi6ZUO.gif&ehk=o3vb595rnvNvDDyEDhOBOR50POJOPrq8qHIfCF2SYpA%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "長髮公主，用金髮編織夢想與自由的詩篇。"
  },
  {
    "word": "Goofy",
    "zh": "高飛",
    "image": "https://www.bing.com/th/id/OGC.5b8419ac0f0a6049ad4936040d179f0b?pid=1.7&rurl=https%3a%2f%2f3.bp.blogspot.com%2f-Nvrm8Nq7PrM%2fUWoX9A9Rs0I%2fAAAAAAAAPi0%2fbjxOKTwK9gE%2fs1600%2fgifanim.nc.387599366.558465.Zi6ZUO.gif&ehk=o3vb595rnvNvDDyEDhOBOR50POJOPrq8qHIfCF2SYpA%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "米奇的好朋友，總是帶來歡笑與冒險。"
  },
  {
    "word": "Hestia",
    "zh": "赫斯提亞",
    "image": "https://www.bing.com/th/id/OGC.5b8419ac0f0a6049ad4936040d179f0b?pid=1.7&rurl=https%3a%2f%2f3.bp.blogspot.com%2f-Nvrm8Nq7PrM%2fUWoX9A9Rs0I%2fAAAAAAAAPi0%2fbjxOKTwK9gE%2fs1600%2fgifanim.nc.387599366.558465.Zi6ZUO.gif&ehk=o3vb595rnvNvDDyEDhOBOR50POJOPrq8qHIfCF2SYpA%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "爐灶女神，守護家庭與溫暖的火焰。"
  }
];

console.log('📚 baseCards 載入完成，共', baseCards.length, '張卡片');

// 稀有度設定
const rarityConfig = {
  "普通":   { multiplier: 1.0,  cost: 5  },
  "稀有":   { multiplier: 1.5,  cost: 10 },
  "超稀有": { multiplier: 2.0,  cost: 15 }
};

// 生成 allCards
const allCards = baseCards.map((card, index) => {
  const cfg = rarityConfig[card.rarity] || rarityConfig["普通"];
  
  const baseHp  = Math.round(1000 * cfg.multiplier + Math.random() * 200);
  const baseAtk = Math.round(500  * cfg.multiplier + Math.random() * 100);
  const baseRcv = Math.round(200  * cfg.multiplier + Math.random() * 50);
  
  let baseCd;
  if (card.rarity === "超稀有")      baseCd = 10;
  else if (card.rarity === "稀有")   baseCd = 12;
  else                               baseCd = 15;

  return {
    word:        card.word,
    zh:          card.zh,
    image:       card.image,
    video:       card.video,
    video_url:   card.video_url,
    rarity:      card.rarity,
    category:    card.category,
    description: card.description,
    effect:      card.effect,
    id:          index + 1,
    cost:        cfg.cost,
    stats: {
      hp:     baseHp,
      atk:    baseAtk,
      rcv:    baseRcv,
      cd:     baseCd,
      type:   card.category,
      lvl:    1,
      maxLvl: 99,
      expPct: 0
    }
  };
});

console.log('🎴 allCards 生成完成，共', allCards.length, '張卡片');

// 設定到 window 物件
if (typeof window !== 'undefined') {
  window.baseCards = baseCards;
  window.allCards = allCards;
  console.log('✅ window.baseCards 已設定，長度:', window.baseCards.length);
  console.log('✅ window.allCards 已設定，長度:', window.allCards.length);
} else {
  console.log('⚠️ 非瀏覽器環境，無法設定 window 物件');
}

console.log('🎉 cards_fixed.js 載入完成！'); 