// ===============================
// 影片功能添加輔助工具
// 用於安全地為現有卡片添加影片功能，不影響其他屬性
// ===============================

/**
 * 安全地為指定卡片添加影片網址
 * @param {string} cardWord - 卡片的英文名稱
 * @param {string} videoUrl - YouTube影片網址
 * @returns {boolean} - 是否成功添加
 */
function addVideoToCard(cardWord, videoUrl) {
    // 檢查是否已載入卡片資料
    if (!window.allCards || !Array.isArray(window.allCards)) {
        console.error('❌ 卡片資料未載入');
        return false;
    }
    
    // 尋找指定的卡片
    const cardIndex = window.allCards.findIndex(card => card.word === cardWord);
    if (cardIndex === -1) {
        console.error(`❌ 找不到卡片: ${cardWord}`);
        return false;
    }
    
    // 只修改影片相關屬性，不影響其他資料
    window.allCards[cardIndex].video = videoUrl;
    
    console.log(`✅ 成功為 ${cardWord} 添加影片: ${videoUrl}`);
    return true;
}

/**
 * 批量添加影片功能
 * @param {Array} videoMappings - 包含 {word, video} 的陣列
 */
function addMultipleVideos(videoMappings) {
    let successCount = 0;
    let failCount = 0;
    
    console.log('🎬 開始批量添加影片功能...');
    
    videoMappings.forEach(mapping => {
        if (addVideoToCard(mapping.word, mapping.video)) {
            successCount++;
        } else {
            failCount++;
        }
    });
    
    console.log(`📊 批量添加結果: 成功 ${successCount} 個，失敗 ${failCount} 個`);
}

/**
 * 檢查哪些卡片有影片功能
 */
function checkVideoCards() {
    if (!window.allCards) {
        console.error('❌ 卡片資料未載入');
        return;
    }
    
    const videoCards = window.allCards.filter(card => card.video);
    console.log(`🎬 目前有 ${videoCards.length} 張卡片有影片功能:`);
    
    videoCards.forEach(card => {
        console.log(`- ${card.zh} (${card.word}): ${card.video}`);
    });
    
    return videoCards;
}

/**
 * 移除指定卡片的影片功能
 * @param {string} cardWord - 卡片的英文名稱
 */
function removeVideoFromCard(cardWord) {
    if (!window.allCards) {
        console.error('❌ 卡片資料未載入');
        return false;
    }
    
    const cardIndex = window.allCards.findIndex(card => card.word === cardWord);
    if (cardIndex === -1) {
        console.error(`❌ 找不到卡片: ${cardWord}`);
        return false;
    }
    
    delete window.allCards[cardIndex].video;
    console.log(`✅ 成功移除 ${cardWord} 的影片功能`);
    return true;
}

// 暴露函數到全域
window.addVideoToCard = addVideoToCard;
window.addMultipleVideos = addMultipleVideos;
window.checkVideoCards = checkVideoCards;
window.removeVideoFromCard = removeVideoFromCard;

console.log('🎬 影片功能輔助工具載入完成！');
console.log('可用函數: addVideoToCard(), addMultipleVideos(), checkVideoCards(), removeVideoFromCard()');

// ===============================
// 使用範例
// ===============================

/*
// 單個添加影片
addVideoToCard('Snow White', 'https://www.youtube.com/watch?v=6boKndR4P7Y');

// 批量添加影片
addMultipleVideos([
    { word: 'Howl', video: 'https://www.youtube.com/watch?v=iwROgK94zcM' },
    { word: 'Sophie', video: 'https://www.youtube.com/watch?v=UwxatzcYf9Q' },
    { word: 'Calcifer', video: 'https://www.youtube.com/watch?v=d6Dxs_3tpeg' }
]);

// 檢查有影片的卡片
checkVideoCards();

// 移除影片功能
removeVideoFromCard('Snow White');
*/ 