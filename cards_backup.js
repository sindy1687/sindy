// cards.js

// ===============================
// 1. 原始卡片資料（baseCards）
//    只包含：word, zh, image, rarity, category, description, effect
// ===============================
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
    "word": "Tinker Bell",
    "zh": "小仙子",
    "image": "https://th.bing.com/th/id/OIP.Z_ZU6jgIki13xqMjEmtj4QHaFj?r=0&pid=ImgDet&w=175&h=130&c=7&dpr=2",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "飄散魔法塵的精靈，用一縷微光點亮夢幻永不陳舊。",
    "effect": {
      "type": "hint",
      "value": 1,
      "description": "排除一個錯誤選項"
    }
  },
  {
    "word": "Peter Pan",
    "zh": "彼得潘",
    "image": "https://www.bing.com/th/id/OGC.d50dd8e6eac324098f6bf64aa91ae08a?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia3.giphy.com%2fmedia%2f10ZucsW5gDl4kg%2fgiphy.gif&ehk=KM%2fHBD5VT6ppUgaJEfHKyVwdepkkuL4BracYn2gZMMo%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "永遠不肯長大的男孩，在奇幻夢島揮舞冒險的翅膀。",
    "effect": {
      "type": "skip_level",
      "value": 1,
      "description": "直接跳過當前樓層"
    }
  },
  {
    "word": "Captain Hook",
    "zh": "虎克船長",
    "image": "https://s.yimg.com/ny/api/res/1.2/PMfFBLlDMCACKI7TyK1cdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU3Ng--/https://media.zenfs.com/zh-Hant-TW/homerun/niusnews.com.tw/e8a037dff6db661518ae4eb998c3ea19",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "時鐘滴答聲中狩獵彼得潘的海盜，詮釋復仇的優雅與忐忑。"
  },
  {
    "word": "Wendy",
    "zh": "溫蒂",
    "image": "https://th.bing.com/th/id/OIP.4ya4g4nWM9iLEjI-cLKTFAAAAA?r=0&rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "夢島上的溫柔說書人，低語中編織家與想像的溫暖。"
  },
  {
    "word": "Pinocchio",
    "zh": "匹諾曹",
    "image": "https://www.bing.com/th/id/OGC.97bba700295540ac6971d43228982b1e?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fn.sinaimg.cn%2fsinakd20112%2f700%2fw400h300%2f20220629%2fa86a-e6322abac7da186ebda982b8074eb95a.gif&ehk=D5cX2%2bbTp%2bBgsETHDVWDzAtdqRslsoLrYH0G%2fp11X%2f4%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "木偶男孩追尋真的自我，每一次心跳都化作勇氣的節拍。"
  },
  {
    "word": "Jiminy Cricket",
    "zh": "蟋蟀吉米尼",
    "image": "https://th.bing.com/th/id/OIP.vDc3CxsoUQY87Fg_psfwFQAAAA?r=0&rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "躡手躡腳的良心使者，低吟中提醒我們道德的律動。"
  },
  {
    "word": "Sebastian",
    "zh": "賽巴斯汀",
    "image": "https://i.pinimg.com/originals/04/80/03/04800399a1415c06d712c73ff6ddfddd.jpg",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "一見鍾情的皇宮小螃蟹，用加勒比海的旋律守護美人魚之夢。"
  },
  {
    "word": "Ursula",
    "zh": "烏蘇拉",
    "image": "https://24.media.tumblr.com/tumblr_mbp7jgLjCi1rncdgao1_500.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "深海女巫用詭譎歌聲編織欲望，換來權力卻失去對明天的掌控。"
  },
  {
    "word": "Hades",
    "zh": "哈迪斯",
    "image": "https://www.bing.com/th/id/OGC.3a0748f410c080b2fba5313f9d410938?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.tenor.com%2fDQXgQEFWAb4AAAAC%2fhades-angry.gif&ehk=EHeKejYAhawa96%2bob61%2bc7tRR7dxPdHi5xlIeq%2bN6Zc%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "陰間之王嘴角含笑，在火焰中演繹命運的幽冥狂想。"
  },
  {
    "word": "Hercules",
    "zh": "海克力士",
    "image": "https://www.bing.com/th/id/OGC.80d322dce5320316e274c1f4c8755ef4?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fimg.playbuzz.com%2fimage%2fupload%2ff_auto%2cfl_lossy%2cq_auto%2fcdn%2fd1965108-9223-4a5b-b98d-b3f7b370380c%2fa21da147-7912-4f2b-941c-ef262ac9778f.gif&ehk=BfYwueGqNpYOEsYVbO0tGC6CAEfkJ0b1b1npBByYHgk%3d",
    "video": "https://youtu.be/rJwJfHp4Osc?si=lnuoBy6hXCSPk6X7",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "半神之軀躍向星空，以熱血與真誠書寫英雄的詩篇。"
  },
  {
    "word": "Mowgli",
    "zh": "毛格",
    "image": "https://mistergif.com/media/6/mowgli-aullando-82890.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "叢林人之子在狼群之間奔跑，學習野性的自由與歸屬。"
  },
  {
    "word": "Baloo",
    "zh": "巴魯",
    "image": "https://th.bing.com/th/id/OIP.xnQpa_fz7qYUKEDa1P7VZwAAAA?r=0&rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "憨厚大熊，用輕鬆節奏教會毛格生命的愉悅。"
  },
  {
    "word": "Shere Khan",
    "zh": "雪狐",
    "image": "https://th.bing.com/th/id/R.8022b22e624273d818dcb722e8dded69?rik=p4JLqJl94QXnyQ&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fpw5ziR4HL7ksg%2fgiphy.gif&ehk=8GZhwWwgS8LpzMgdAzekLsmb7zx2c4K%2fvp3HtsGD6h0%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "叢林之王以冰冷目光狩獵，讓每聲低吼都震顫心靈。"
  },
  {
    "word": "Cruella de Vil",
    "zh": "庫伊拉",
    "image": "https://4.bp.blogspot.com/-cqTEgwerQBM/UoLpBMCICFI/AAAAAAAAE98/258LlOYrmAo/s1600/tumblr_lv5hrxcoLS1qhigt0o1_500.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "時尚魅影背後的瘋狂夢想家，毛皮的慾望燃燒人性。"
  },
  {
    "word": "Fairy Godmother",
    "zh": "仙女教母",
    "image": "https://figurinepop.com/public/2019/12/fairygodmother1_2.jpg",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "揮動魔杖的慈愛守護者，在一瞬間點亮奇蹟之光。"
  },
  {
    "word": "Lady",
    "zh": "小姐",
    "image": "https://hips.hearstapps.com/hmg-prod/images/0505bd7cf187d5852d39388f81a933e1-1597219629.gif?crop=1xw:1xh;center",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "優雅灰狗在煙火下邂逅流浪狗，愛的旋律在午夜迴盪。"
  },
  {
    "word": "Tramp",
    "zh": "流浪狗",
    "image": "https://images6.fanpop.com/image/photos/38200000/Lady-and-the-Tramp-char-and-anj-38254201-245-324.gif",
    "video": "https://youtu.be/sLrWNuGl6ks?si=9BsHctiQ7ZORmLMd",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "街頭浪子以自由靈魂帶領小姐踏上冒險與浪漫之旅。"
  },
  {
    "word": "Mickey Mouse",
    "zh": "米奇老鼠",
    "image": "https://www.gifcen.com/wp-content/uploads/2023/06/mickey-mouse-gif-6.gif",
    "video": "https://www.youtube.com/watch?v=REHJ1lz_HLQ",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "迪士尼經典吉祥物，充滿活力與幽默感，帶給觀眾無窮歡笑。"
  },
  {
    "word": "Donald Duck",
    "zh": "唐老鴨",
    "image": "https://www.bing.com/th/id/OGC.6056896deb5520bcb82d0c05fa704fbc?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fbc%2f38%2f8c%2fbc388c6b24df2d081239efd48121da4c.gif&ehk=z5e1CUqqbXFE5Mv70ujh7eGemMJhih%2fL5z6X6E%2bpZmQ%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "性格急躁卻心地善良的鴨子，標誌性的咕噥聲融化人心。"
  },
  {
    "word": "Goofy",
    "zh": "高飛",
    "image": "https://tse1.mm.bing.net/th/id/OIP.W4og2IrTDCN7Q0rNjJwfcQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/rdBYmk4dfLE?si=QPgRyHgKbM_a73JZ",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "笨拙可愛的狗狗角色，總在傻氣中點亮天真與友誼。"
  },
  {
    "word": "Minnie Mouse",
    "zh": "米妮老鼠",
    "image": "https://www.bing.com/th/id/OGC.d69bb4b0b211656f160664bea95a6a51?r=0&pid=1.7&rurl=http%3a%2f%2fimg.soogif.com%2f3zTApQTIwC7VdEVSffjiP7lbSI48SSv5.gif&ehk=BH12WKNhfiAz8b3jHVytvQJyPCmouOzoH%2fQx0nJxTy0%3dg",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "樣貌優雅甜美的女主角，蝴蝶結與心形裙下藏著堅定信念。"
  },
  {
    "word": "Pluto",
    "zh": "布魯托",
    "image": "https://th.bing.com/th/id/OIP.K2-e74680VR-KBJjeo8eNwHaKC?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "米奇忠誠的寵物狗，勇氣與好奇心讓他在冒險中閃耀。"
  },
  {
    "word": "Olaf",
    "zh": "奧拉夫",
    "image": "https://www.bing.com/th/id/OGC.6b08f26e069ea17eae84925fea503e2e?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.zenfs.com%2fen%2felle.tw%2f5464f4be22f53e5e838ac06e3283b292&ehk=N3SaS16UtDPe7liS%2fv%2bUlUulpJXpj317Yz2JrSoWPfc%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《冰雪奇緣》中的雪人，純真樂觀，渴望擁抱溫暖與友情。"
  },
  {
    "word": "Simba",
    "zh": "辛巴",
    "image": "https://th.bing.com/th/id/R.cc9c56af0addebadde3843565b19a27c?rik=QO6iEtOM9w3e3w&riu=http%3a%2f%2fimg.japhub.com%2f201606%2fYdQWr7JX.gif&ehk=O%2fnhoIkFTn2U3tk4Zb5cZL%2bIYu6bbBNOALUEUcDrCJo%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《獅子王》中勇敢的獅子王子，經歷責任與成長後重登王座。"
  },
  {
    "word": "Nala",
    "zh": "娜拉",
    "image": "https://th.bing.com/th/id/R.5744c05e0c74f79c60e86f98bc5120f5?rik=D1dLGEiWG0Qx%2fw&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fpolls%2f596000%2f596895_1292268112939_full.jpg%3fv%3d1292268217&ehk=Wcnh5jkupkQ3i%2f9URWWwVlr%2bIQWFqMCH5QJvLe%2bZmy8%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "智慧果敢的獅子公主，與辛巴並肩守護榮耀與愛。"
  },
  {
    "word": "Anna",
    "zh": "安娜",
    "image": "https://th.bing.com/th/id/R.25d24c57ecbd811a3d82d13a2ff49192?rik=98T1cwK8gnKKzw&riu=http%3a%2f%2fimg.soogif.com%2fzGQwoJNuKMjjdGvK4aZggCnZ8xAr3rqX.gif&ehk=2Yj7dCfUbi%2fwfdTFdDRkl4aAqKeq0jnblfhrCKVBQkQ%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《冰雪奇緣》裡的熱情公主，為了家人踏上冒險，展現無畏之心。"
  },
  {
    "word": "Ariel",
    "zh": "愛麗兒",
    "image": "https://www.bing.com/th/id/OGC.807b572168a991d930a687b75e0eb78f?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fs.yimg.com%2fuu%2fapi%2fres%2f1.2%2fBoENJU12iqvXfTOYmn3M0g--%7eB%2faD0zMDM7dz01MDA7YXBwaWQ9eXRhY2h5b24-%2fhttp%3a%2f%2f66.media.tumblr.com%2fdc0e8cc27b9b34e0de06511d674ba0d5%2ftumblr_inline_o8g6a2sXl51tvjluf_500.gif&ehk=I0qvOxuvdu5ijJYYksXp27eqSSL%2fS1lkmS148RJ9Qag%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《小美人魚》的人魚公主，好奇心驅使她追逐陸地與愛的聲音。"
  },
  {
    "word": "Belle",
    "zh": "貝兒",
    "image": "https://live.staticflickr.com/536/31713483003_8ac91363a4_b.jpg",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《美女與野獸》中愛讀書的少女，用溫柔與智慧感化野獸。"
  },
  {
    "word": "Aladdin",
    "zh": "阿拉丁",
    "image": "https://th.bing.com/th/id/OIP.CGV6Xwx8nWqY_tgCUMFxBgAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《阿拉丁》中的街頭少年，機智與勇氣助他逆轉命運。"
  },
  {
    "word": "Jasmine",
    "zh": "茉莉公主",
    "image": "https://th.bing.com/th/id/R.e5e2b1256bed6c13ad3d1159aa1f3857?rik=zKxjU%2bnnaHi9Ow&riu=http%3a%2f%2fwww.elisabethdautriche.fr%2fwp-content%2fuploads%2f2014%2f05%2fSissi-Disney-06.jpg&ehk=kCwmmqdqQCA05YTCIho%2fhTS9KHS%2bugXv%2frcoSVfYBaI%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "擁有自由之心的公主，不願被束縛，追尋真愛與自主。"
  },
  {
    "word": "Mulan",
    "zh": "花木蘭",
    "image": "https://th.bing.com/th/id/R.6cf5f0fd277e7865d5b8bea1e2f41231?rik=vNCj%2fEezcAmtuQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2400000%2fMulan-Wallpaper-mulan-2471043-1024-768.jpg&ehk=MxKVM1EZa9YmMN%2fGsCInTmaJVKZ32YPClj6uFQR7Wjc%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "以勇氣與智慧代父從軍，打破性別桎梏的女戰士。"
  },
  {
    "word": "Pocahontas",
    "zh": "波卡洪塔斯",
    "image": "https://th.bing.com/th/id/OIP.vwcYWaXSo3xaKtSCfy94rgHaMV?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《風中奇緣》裡的印第安公主，與自然共鳴，橋接不同文化。"
  },
  {
    "word": "Tiana",
    "zh": "蒂安娜",
    "image": "https://wallpapercave.com/wp/wp4294583.png",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《公主與青蛙》的女主角，憑藉勤奮與夢想實現願望。"
  },
  {
    "word": "Scar",
    "zh": "刀疤",
    "image": "https://media.giphy.com/media/l1l3TCGoCsY0g/giphy.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《獅子王》中的複雜反派，陰影中編織權力與復仇。"
  },
  {
    "word": "Elsa",
    "zh": "艾莎",
    "image": "https://hips.hearstapps.com/hmg-prod/images/frozen-2-elsa-the-snow-queen-42638065-540-226-1573763977.gif?crop=1xw:1xh;center",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《冰雪奇緣》的冰雪女王，掌握元素力量，同時背負孤獨與責任。"
  },
  {
    "word": "Rapunzel",
    "zh": "樂佩",
    "image": "https://www.bing.com/th/id/OGC.bf716abdcdcaafb98bacc65eb9492250?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2faf%2f4a%2f3b%2faf4a3b315f0f4b359470f8bb7f9f6fe4.gif&ehk=DrXvXgiUccXmR95xQYCuDA0E0%2b1XLG8%2fFQsYXv6rO58%3d",
    "video": "https://youtu.be/X89OK3a2j14?si=hTSg8hEw8cr__-md",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《魔髮奇緣》中的長髮公主，放下束縛後展翅追尋世界。"
  },
  {
    "word": "Beast",
    "zh": "野獸",
    "image": "https://media.giphy.com/media/n9AXiCSNv3E0E/giphy.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《美女與野獸》中的王子詛咒形態，內心深處隱藏真摯溫暖。"
  },
 // 太空類型 (共20張)
  { word: "rocket", zh: "火箭", image: "img/cards/rocket.jpg", video: "https://youtu.be/Lssd08AYjFI?si=0ge4cefpmbZ062zN", rarity: "普通", category: "太空", description: "搭載宇航員飛向太空的載具，壯觀又神秘。" },
  { word: "galaxy", zh: "銀河", image: "https://www.bing.com/th/id/OGC.e2a46e1f690f991da06c60f236d233ed?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2ftigercat3.up.seesaa.net%2fimage%2f7F5Xgui0kpxd4f8RZJW41697959101-1697959112-thumbnail2.gif&ehk=ekpGI5h2lJsrm3oPoNm6TVd%2fXpk5P%2b8IUDJbLi66ViM%3d", video: "https://youtu.be/g5RKRUGvFTE?si=uMyUdpXMgiArbyg3", rarity: "稀有", category: "太空", description: "包含數百億顆恆星的巨大星系，我們的家園僅是微塵。" },
  { word: "astronaut", zh: "太空人", image: "https://th.bing.com/th/id/OIP.ysExHkAfR6VfA_B_VZFbRAHaEZ?w=312&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/Hz2F_S3Tl0Y?si=3Wj6YwjJJZwev47h", rarity: "稀有", category: "太空", description: "穿著太空衣的探險者，跨出地心，追尋星辰夢。" },
  { word: "spaceship", zh: "太空船", image: "https://www.bing.com/th/id/OGC.9864c8cf473553e922d523a4b47f3d13?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fbkimg.cdn.bcebos.com%2fpic%2fcaef76094b36acaf2eddc49e8a819a1001e939013602&ehk=Qye%2b4vrvIdUj%2fH5cXCZbrQZ7O5p8ek8os4bENwLtshY%3d", video: "videos/spaceship.mp4", rarity: "稀有", category:   { word: "blackhole", zh: "黑洞", image: "https://www.bing.com/th/id/OGC.c2b2a0846988d7ef8760c24750836149?o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fpic.rmb.bdstatic.com%2fc2b2a0846988d7ef8760c247508361491963.gif&ehk=%2bsgr%2bVv%2bc7989RARw%2fTTq8wA9Ti50x6hKlIx2mQdoaE%3d", video: "videos/blackhole.mp4", rarity: "超稀有", category: "太空", description: "吞噬一切的暗影漩渦，宇宙深處的謎團。", youtube: "https://www.youtube.com/watch?v=QqsLTNkzvaY" },
  { word: "nebula", zh: "星雲", image: "https://th.bing.com/th/id/OIP.XsdCywDNVLIqANIyJCBTrwHaFC?w=277&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "videos/nebula.mp4", rarity: "普通", category: "太空", description: "色彩斑斕的氣體雲海，新星的搖籃。" },
  { word: "universe", zh: "宇宙", image: "https://th.bing.com/th/id/OIP._YHm83oYxSUPYi9Mb2VFvQHaFj?w=249&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "videos/universe.mp4", rarity: "超稀有", category: "太空", description: "一切存在與未知，浩瀚無垠的宏闊舞台。", youtube: "https://www.youtube.com/watch?v=libKVRa01L8" },
  { word: "comet", zh: "彗星", image: "https://www.bing.com/th/id/OGC.6c57d011a28aef4450198f37d6ab97ef?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.indiatimes.in%2fmedia%2fcontent%2f2017%2fSep%2fezgif_com-optimize_1506074453.gif&ehk=ndhvfqlo2tcvWGWfyZPLMVtPAURrLJ6su%2fl3xMhj2NY%3d", video: "videos/comet.mp4", rarity: "普通", category: "太空", description: "冰塵連綿的旅行者，尾跡畫出流光飛影。" },
  { word: "meteor", zh: "流星", image: "https://www.bing.com/th/id/OGC.01d122050190cfc835fb0e285280046b?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fimg95.699pic.com%2fphoto%2f40151%2f9222.gif_wh300.gif&ehk=RKVatLUX7lpmAIWShwClECix7qzSMoWQCbMfAl3dlVo%3d", video: "videos/meteor.mp4", rarity: "普通", category: "太空", description: "劃過天幕的瞬間焰光，許願者的祈盼。" },
  { word: "moon", zh: "月球", image: "https://th.bing.com/th/id/OIP.HFpJ6wfJ1ldLtExhJAG1ygAAAA?w=270&h=166&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "videos/moon.mp4", rarity: "普通", category: "太空", description: "夜的銀盤，潮汐的呼喚。" },
  { word: "supernova", zh: "超新星", image: "https://www.bing.com/th/id/OGC.74ab16ad8869ceae22c2ce23a30abc73?o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fe0.ifengimg.com%2f06%2f2019%2f0210%2f1E39F751439123BAC603F4EEFA72A864CE86B993_size1946_w700_h394.gif&ehk=plYnQrzRI1vy3syUa6oHmsAiP%2biLGSFIvZ3%2bhbOmrGs%3d", video: "videos/supernova.mp4", rarity: "超稀有", category: "太空", description: "星辰的末路華章，化作塵埃與榮光。", youtube: "https://www.youtube.com/watch?v=H8Jm7qO4AqE" },
  { word: "pulsar", zh: "脈衝星", image: "https://th.bing.com/th/id/OIP.NeVX-kZ_hnY2OGf2a6oElQHaFj?w=224&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", video: "videos/pulsar.mp4", rarity: "稀有", category: "太空", description: "節律閃爍的天體燈塔，引領宇宙航路。" },
  { word: "darkmatter", zh: "暗物質", image: "https://th.bing.com/th/id/OIP.RmbUeTZ0H8S0z2CZ5RUXrQHaGE?w=203&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", video: "https://youtu.be/ZBejmNIyRvI?si=lt0S2kIcBSVFf_Jp", rarity: "超稀有", category: "太空", description: "隱匿於星河間的無形之網，撐起虛空之軀。", youtube: "https://www.youtube.com/watch?v=QAa2O_3wBDU" },
  // 魔法類型 (共20張)
  { word: "wand", zh: "魔杖", image: "https://www.bing.com/th/id/OGC.be4fc7a5eccc21638fc2da9d86dee90a?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fdl.bbs.9game.cn%2fattachments%2fforum%2f201911%2f05%2f113421knnct3ce53igez34.gif&ehk=OsjYN1hmITzHxl%2bhkJqLxkDRXAut%2f%2fa%2fNxJZG9zS4Xo%3d", rarity: "普通", category: "魔法", description: "咒語的導管，將意志化作魔力流轉。" },
  { word: "spellbook", zh: "魔法書", image: "https://th.bing.com/th/id/OIP.AeZwnsWVVlHCWyz5gQ8wPgHaE3?w=281&h=184&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "稀有", category: "魔法", description: "封印古老符文的卷頁，知識與力量並存。" },
  
  { word: "wizard", zh: "巫師", image: "https://www.bing.com/th/id/OGC.232ddda9d78a57dd6efd41e2a9be749a?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fWLxnzjxV7aIiQ%2fgiphy.gif&ehk=jIz5PCJCw1XNw0LU9nLMYfb0Rgc63KLyxMHZ%2bUSxHf4%3d", rarity: "稀有", category: "魔法", description: "掌控元素的智者，星塵與雷電的呼喚者。" },
  { word: "dragon", zh: "龍", image: "img/cards/dragon.png", rarity: "超稀有", category: "魔法", description: "古老鱗片與火焰，傳說在它的咆哮中重生。", youtube: "https://www.youtube.com/watch?v=1A-Nf3QIJjM" },
  { word: "crystal", zh: "魔晶", image: "https://www.bing.com/th/id/OGC.aa307f3e616aba71a8dcbb0d596d41bb?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f52%2fec%2f59%2f52ec5977f5d05417cd1693e23b40351b.gif&ehk=u%2bnVXopVhiMxL9zFfxGtgLaGPoDPBm7j%2fC9i6aDmmAU%3d", rarity: "普通", category: "魔法", description: "儲存元素與時間的礦石，光影中低語。" },
  { word: "cloak", zh: "斗篷", image: "https://i.pinimg.com/originals/e2/c4/fe/e2c4feee2edb851af5244d8ac534845f.gif", rarity: "普通", category: "魔法", description: "隱匿與防護的織物，夜色中的影舞者。" },
  { word: "enchant", zh: "附魔", image: "https://www.bing.com/th/id/OGC.7aa157841523e1566d385669afce9253?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.redd.it%2fgd10dymj6gea1.gif&ehk=k8tc8GHjoQoir0EDUtYI0FEYlyX8LHmzb1deDYAN50w%3d", rarity: "稀有", category: "魔法", description: "將靈光注入凡物，綻放奇蹟能量。" },
  { word: "portal", zh: "傳送門", image: "https://www.bing.com/th/id/OGC.e70540ca945f95f2972a6da91d02d32a?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fhugelolcdn.com%2fi%2f342794.gif&ehk=1aFp%2fL3uBPoxhJZUM1agjPRq013cOWvqaYExKmsx7hU%3d", rarity: "超稀有", category: "魔法", description: "跨越時空的裂縫，瞬移的詩篇。", youtube: "https://www.youtube.com/watch?v=3pAnRKD4raY" },
  { word: "familiar", zh: "侍從獸", image: "https://th.bing.com/th/id/R.39f563a74a197d11332d179774bdee6b?rik=CgHST3U4CJNoog&riu=http%3a%2f%2fimg.soogif.com%2f6AVk9RoJly2kJ4JOWM3EYdy9rcgrccSf.gif&ehk=nWxRrAdPQTzVhy4OMRQ73F4qwXPOewdA4osOeMrk4jw%3d&risl=&pid=ImgRaw&r=0", rarity: "稀有", category: "魔法", description: "忠誠之靈，魔法旅途的默契夥伴。" },
  { word: "runestone", zh: "符文石", image: "https://th.bing.com/th/id/OIP.HzrlhHVYgnn4NDBChKx_3gHaLI?pid=ImgDet&w=175&h=262&c=7&dpr=2", rarity: "普通", category: "魔法", description: "刻畫元素之印的古石，召喚與封印之鑰。" },
  { word: "cauldron", zh: "鍋爐", image: "https://png.pngtree.com/png-vector/20240519/ourlarge/pngtree-witch-cauldron-with-poison-cartoon-png-image_12487936.png", rarity: "普通", category: "魔法", description: "翻騰的藥湯，蒸氣中蘊含變化奧秘。" },
  { word: "magicmirror", zh: "魔鏡", image: "https://th.bing.com/th/id/OIP.rjXNEaJeWhBR2UeDHkbe2AAAAA?r=0&pid=ImgDet&w=208&h=208&c=7&dpr=1.5&cb=idpwebpc2", rarity: "稀有", category: "魔法", description: "穿著太空衣的探險者，跨出地心，追尋星辰夢。" },

  // 科幻類型 (共7張)
  { word: "cyborg", zh: "賽博人", image: "https://image.cdn2.seaart.ai/2023-06-27/38974824558661/3e1ad08578685ce4c078f1407da7ed831107f0ef_high.webp", rarity: "稀有", category: "科幻", description: "半人半機械的強化戰士，擁有驚人的反應與力量。" },
  { word: "ai", zh: "人工智慧", image: "https://www.bing.com/th/id/OGC.5ad350b1154e38a969a0472cd4a3ba12?r=0&pid=1.7&rurl=https%3a%2f%2fimg.php.cn%2fupload%2farticle%2f000%2f887%2f227%2f171013381653493.gif&ehk=7TOP5a4GfICodUTadt%2b7OFZai1ZP2%2ffCPnYtoq4wy9o%3d", rarity: "超稀有", category: "科幻", description: "具備自我意識與超高邏輯的智慧核心，可掌控整個系統。", youtube: "https://www.youtube.com/watch?v=4V2xXqFgB_c" },
  { word: "mecha", zh: "機甲", image: "https://www.bing.com/th/id/OGC.8aebde8056def027cb605936d32e2f50?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fwww.niusnews.com%2fupload%2fimgs%2fdefault%2f2018JUNedie%2fbumblebee%2f4.gif&ehk=gZ7uM93yrZghL83i0CYy%2bJKNytfEd%2fr514yKaNaNfdI%3d", rarity: "稀有", category: "科幻", description: "由人類駕駛的大型機器戰甲，是未來戰爭的主力。" },
  { word: "hologram", zh: "全息影像", image: "https://www.techhub.in.th/wp-content/uploads/2017/01/technology-2017-9.jpg", rarity: "普通", category: "科幻", description: "利用光學與投影技術創造的虛擬實像，用於戰術偽裝或通訊。" },
  { word: "nanobot", zh: "奈米機器人", image: "https://th.bing.com/th/id/OIP.bFDr8-wQMsKwrfdH30LuwgHaDV?w=305&h=157&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "普通", category: "科幻", description: "極小的機械單位，可進入體內修復細胞或進行滲透作戰。" },
  { word: "quantumchip", zh: "量子晶片", image: "https://th.bing.com/th/id/OIP.89-tisQ9Wdbp8X55JABaVgHaEo?w=234&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "超稀有", category: "科幻", description: "利用量子原理運作的核心晶片，能大幅提升運算效能。" },
  { word: "warpdrive", zh: "曲速引擎", image: "https://th.bing.com/th/id/OIP.y5WYkui8k6IP_Vn6Q7G8wAHaEK?w=322&h=181&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "超稀有", category: "科幻", description: "能扭曲時空以超光速旅行的高科技裝置。" },

  // 神話生物類型 (共7張)
  { word: "phoenix", zh: "鳳凰", image: "https://th.bing.com/th/id/OIP.UkQZzWL9blyqMhrOvjpYxQHaJ4?w=600&h=800&rs=1&pid=ImgDetMain", rarity: "超稀有", category: "神話生物", description: "浴火重生于曠野，尾羽如朝陽，靈魂永不熄滅。", youtube: "https://www.youtube.com/watch?v=8jLOx1hD3_o" },
  { word: "unicorn", zh: "獨角獸", image: "https://m.media-amazon.com/images/I/71i1VApBYzL._AC_SL1500_.jpg", rarity: "超稀有", category: "神話生物", description: "白蹄踏露，角尖閃耀純潔光芒，守護夢境邊界。", youtube: "https://www.youtube.com/watch?v=4V2xXqFgB_c" },
  { word: "sphinx", zh: "斯芬克斯", image: "https://th.bing.com/th/id/R.1023971c501aa1fb00578146b3d94136?rik=0He4O%2fZh%2bQGmbg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-OqzM-wtK8Zg%2fUfE1U6gvpJI%2fs1600%2fimages%2b(1).jpg&ehk=oJRDRPqwIRJuuG8iBwUqDOYeZSSly4gFFhgVAtJG%2fBU%3d&risl=&pid=ImgRaw&r=0", rarity: "稀有", category: "神話生物", description: "石躯默立沙漠，智慧深邃，謎語如風語般迴盪。" },
  { word: "hydra", zh: "九頭蛇", image: "https://www.iamag.co/wp-content/uploads/2019/01/The-Art-of-Bryan-Sola-20.jpg", rarity: "超稀有", category: "神話生物", description: "每斬一頭，兩頭再生，深淵之水燃起不朽傳說。" },
  { word: "centaur", zh: "半人馬", image: "https://i.pinimg.com/originals/ce/ba/5c/ceba5ca2cd30348a7009bed55acab8d2.jpg", rarity: "普通", category: "神話生物", description: "半人馬多半都是勇猛善戰的暴烈戰士，他們可以快速的追擊敵人，也都擁有百步穿楊的神技。" },
  { word: "minotaur", zh: "牛頭人", image: "https://i.pinimg.com/originals/79/0f/8f/790f8f8c05b941d0b36dc8f89ad506a3.jpg", rarity: "稀有", category: "神話生物", description: "迷宮之心的守衛，怒吼如雷，角尖染血。" },
  { word: "griffin", zh: "獅鷲獸", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6bac9e7-4240-4e9f-9a7d-9097d6ff6365/dgadoo9-a1b3e7a5-f1d1-4c6b-be45-c0c0a8cea945.png/v1/fill/w_350,h_350,q_70,strp/mazo_by_saraheferya_dgadoo9-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Q2YmFjOWU3LTQyNDAtNGU5Zi05YTdkLTkwOTdkNmZmNjM2NVwvZGdhZG9vOS1hMWIzZTdhNS1mMWQxLTRjNmItYmU0NS1jMGMwYThjZWE5NDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5ty2LOFGZAs8nEZMqpQSRqzqVmFKyXLBjD_-YzsLTas", rarity: "稀有", category: "神話生物", description: "金羽展翅，獅身鷲首，天空與大地的守望者。" },

  // 蒸汽龐克類型 (共7張)
  { word: "goggles", zh: "護目鏡", image: "https://bpic.588ku.com/element_origin_min_pic/24/01/23/901e8f6e8c00c998d631270b0491c7bf.jpg", rarity: "普通", category: "蒸汽龐克", description: "銅框琉璃，在蒸汽迷霧中捕捉時間之光。" },
  { word: "steamengine", zh: "蒸汽機", image: "https://bpic.588ku.com/element_origin_min_pic/24/03/10/c1c7d3124fb920ef7d357de3fde09c0d.jpg!r650", rarity: "稀有", category: "蒸汽龐克", description: "咆哮的鍋爐與齒輪共舞，動力源源不絕。" },
  { word: "airship", zh: "蒸汽飛船", image: "https://th.bing.com/th/id/OIP.klqOym812SkWyRPpRSV1TgAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3", rarity: "超稀有", category: "蒸汽龐克", description: "錨鏈與飛槳間，雲海的旅程由此啟程。" },
  { word: "gear", zh: "齒輪", image: "https://png.pngtree.com/png-vector/20230809/ourlarge/pngtree-instative-vector-illustration-doodle-of-a-set-of-colorful-gears-png-image_6838811.png", rarity: "普通", category: "蒸汽龐克", description: "齒與齒咬合之際，時間與命運運轉無休。" },
  { word: "brasskey", zh: "黃銅鑰匙", image: "https://png.pngtree.com/png-vector/20240921/ourmid/pngtree-old-vintage-key-png-image_13882194.png", rarity: "普通", category: "蒸汽龐克", description: "微小卻精緻，開啟未知機匣的黃金符咒。" },
  { word: "mechanicalowl", zh: "機械貓頭鷹", image: "https://th.bing.com/th/id/OIP.n35jNX2twLu6NTuUXYqkvwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3", rarity: "稀有", category: "蒸汽龐克", description: "銅羽靜寂飛行，夜幕中洞察每個秘密。" },
  { word: "clockworkautomaton", zh: "發條機械人", image: "https://forbesafrique.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-30-at-10.20.52-2.jpeg", rarity: "超稀有", category: "蒸汽龐克", description: "齒輪心臟跳動，機械與靈魂的邊界模糊。" },

  // 未來都市類型 (共7張)
  { word: "neoncity", zh: "霓虹都市", image: "https://th.bing.com/th/id/OIP.ecqHXnof2qkj2k4HSZ_zVgHaE7?w=626&h=417&rs=1&pid=ImgDetMain", rarity: "稀有", category: "未來都市", description: "光影交織的街道，夢想與現實在霓虹中共舞。" },
  { word: "hovercar", zh: "懸浮車", image: "https://img.freepik.com/premium-photo/amazing-flying-car-combining-futuristic-technology_951992-2843.jpg", rarity: "稀有", category: "未來都市", description: "車輪消逝於街面，未來的律動在空中飛馳。" },
  { word: "cybertower", zh: "賽博塔", image: "https://img.freepik.com/premium-photo/a-futuristic-cityscape-illuminated-by-the-glow-of-computer-science-technology_349863-1434.jpg", rarity: "超稀有", category: "未來都市", description: "高聳入雲，霧化之光刷洗每層記憶。" },
  { word: "aiassistant", zh: "人工助手", image: "img/cards/aiassistant.png", rarity: "稀有", category: "未來都市", description: "數據流中誕生的微笑，智慧比肩人心。" },
  { word: "dronepolice", zh: "警用無人機", image: "https://th.bing.com/th/id/OIP.FEduWQQ7mvqjQTGuV-DOowAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "普通", category: "未來都市", description: "金屬翅膀巡弋，秩序的守護者從天而降。" },
  { word: "skybridge", zh: "空中廊橋", image: "https://image.archiposition.com/2022/07/71658314181.jpg", rarity: "稀有", category: "未來都市", description: "連結高樓的透明之路，踩夢踏歌而行。" },
  { word: "holomarket", zh: "全息市場", image: "https://thumbs.dreamstime.com/b/holographic-interface-displaying-blueprints-301152804.jpg", rarity: "普通", category: "未來都市", description: "數位擺攤，買賣停留於光與影的交界。" },
{word: "anglerfish",
    "zh": "鮟鱇魚",
    "image": "https://i.pinimg.com/736x/13/67/8f/13678fb8d82ff252a356308f90bc2db2.jpg",
    "video": "https://www.youtube.com/watch?v=Z-BbpaNXbxg",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "燈籠魚的本名是鮟鱇魚。這種魚的長度在80釐米左右，身體扁平，而且很柔軟。它的徒步很大，呈圓盤狀，尾巴則很細小，下頜吐出，兩頜上有大量尖銳的牙齒，鰓孔很大，體表沒有鱗片。由於它不常遊動，捕食機會少，所以需要用到頭頂的小燈籠來引誘獵物。"
  },
   {
    word: "vampiresquid",
    "zh": "吸血烏賊",
    "image": "https://www.mbari.org/wp-content/uploads/2020/06/Vampyroteuthis-infernalis_vamp-T1152-09_15_43_14-1030x579.jpg",
    "video": "https://www.youtube.com/watch?v=eiUCLG2Ue5I",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "披著黑紅披風，游走於生與死的邊界之間。"
  },
  {
    word: "gulper eel",
    "zh": "翻鬥鰻",
    "image": "https://th.bing.com/th/id/OIP.Z7gkgO8GLrOpFgDBqXvGGQHaDv?w=650&h=329&rs=1&pid=ImgDetMain",
    "video": "https://www.youtube.com/watch?v=QNL3aZ_vGAM",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "一口吞噬整片夜色，肚裡藏著無垠的深海夢魘。"
  },
{
    "word": "oarfish",
    "zh": "王帶魚",
    "image": "https://coastalanglermag.com/wp-content/uploads/2019/12/oar-fish.jpg",
    "video": "https://www.youtube.com/watch?v=YMKlhYzjhYI",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "長如銀絲的身軀，在深海中緩緩舞動，彷若古老的水晶旗幟。"
  },
  {
    "word": "fangtooth",
    "zh": "尖齒魚",
    "image": "https://i.pinimg.com/originals/a6/cd/3f/a6cd3f0a9cc47b9794fa89633e4b119d.jpg",
    "video": "https://www.youtube.com/watch?v=jCWop491Q9Y",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "比身軀更長的利牙，吞噬每一道入侵的陰影。"
  },
 {
    "word": "barreleye",
    "zh": "桶眼魚",
    "image": "https://th.bing.com/th/id/R.c22825941a287453b48d50dc07dfc1d0?rik=seFt%2bWIurOD8XA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GBe3T8Tl7OI%2fUn7fZPzqJ7I%2fAAAAAAAABL8%2fV6rHlHOKtFg%2fs1600%2fBarreleye.jpg&ehk=n9GJFy5emOZedWNHVXD3KHEXA8ufbLXUPxSQHWnqBJA%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "透明的頭蓋，映照著深海最隱秘的星辰",
    "video_url": "https://youtu.be/Akv36y8WLYA?si=mIkOKSAyTfYwBykR"  
  },
  {
    "word": "tripod fish",
    "zh": "三腳魚",
    "image": "https://th.bing.com/th/id/OIP.66k0Y-Tym-KtNGf1zwp5fgAAAA?rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "三隻纖細支腳，穩立於海床，靜候命運的浪潮。"
  },
  {
    "word": "viperfish",
    "zh": "毒蛇魚",
    "image": "https://i.redd.it/h91daiv3q9811.jpg",
    "video": "https://www.youtube.com/watch?v=jCWop491Q9Y",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "血紅的觸手，刺破黑暗的瞬間，獵物已無處可逃。"
  },
  {
    "word": "hatchetfish",
    "zh": "斧魚",
    "image": "img/cards/hatchetfish.png",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "銀色身板薄如刃鋒，橫切深淵中最沉重的寂靜。"
  },
  {
    "word": "ghost_shark",
    "zh": "幽靈鯊",
    "image": "img/cards/ghost_shark.png",
    "video": "https://www.youtube.com/watch?v=rJGZTiNEFRs",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "身形若有若無，幽魂般掠過前方，留下一縷寒意。"
  },
  {
    "word": "pelican_eel",
    "zh": "鵜鶘鰻",
    "image": "img/cards/pelican_eel.png",
    "video": "https://www.youtube.com/watch?v=QNL3aZ_vGAM",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "大口似鵜鶘，吞噬周遭一切光明與陰影。"
  },
  {
    "word": "blobfish",
    "zh": "黏魚",
    "image": "https://cdn.openart.ai/stable_diffusion/4e6a1927b2e1d97c5bfaf3b7c85902038ef28886_2000x2000.webp",
    "video": "https://www.youtube.com/watch?v=_y4DbZivHCY",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "如軟泥般的身形，卻保存著最原始的生命密碼。"
  },
  {
    "word": "frilled_shark",
    "zh": "褶鯊",
    "image": "https://stylesatlife.com/wp-content/uploads/2023/08/Frilled-shark.jpg",
    "video": "https://www.youtube.com/watch?v=GXrRC3pfLnE",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "古老如化石，卻依舊在黑暗中低吟遠古的詩篇。"
  },
  {
    "word": "sixgill_shark",
    "zh": "六鰓鯊",
    "image": "https://66.media.tumblr.com/300e4f7cacc6ddf4f4cab7345258ab01/tumblr_inline_ott9ri96jf1te25u3_540.gifv",
    "video": "https://www.youtube.com/watch?v=4r7wHMg5Yjg",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "六瓣呼吸孔，如深海的節拍，跳動著生命的韻律。"
  },
  {
    "word": "black_swallower",
    "zh": "吞天鱵",
    "image": "https://i.ytimg.com/vi/tcaIM-iC-Z8/maxresdefault.jpg",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "黑暗中探出巨口，連影子都無從逃脫。"
  },
  {
    "word": "snailfish",
    "zh": "蝸牛魚",
    "image": "https://www.bing.com/th/id/OGC.28732d765f6f1f0591b65138d7b4eaa8?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia-cdn-v2.laodong.vn%2fStorage%2fNewsPortal%2f2023%2f4%2f3%2f1175112%2fCon-Ca.gif&ehk=SnTKJMw8dPU7t%2fa13hRa0Pl%2bkrSQBifxTWf8l5R3YSs%3d",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "柔軟如蝸殼，感知著海底最微弱的顫動。"
  },
  {
    "word": "lantern_shark",
    "zh": "燈籠鯊",
    "image": "https://www.bing.com/th/id/OGC.a1dccfcebdefc0d691c1e47e496771dc?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2f64.media.tumblr.com%2f4eafd1be475d4e9792f5378254d91dae%2ftumblr_oku7alxf4B1vyihqco2_400.gif&ehk=2wtEPk4qYyQFQdJY36jEY7bfA%2f8SvkAfpV2NovvvcNY%3d",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "沿側散發微光，化作深海的流動火炬。"
  },
  {
    "word": "polka_dot_batfish",
    "zh": "圓點蝙蝠魚",
    "image": "https://www.bing.com/th/id/OGC.a051a4412de6dd95e477807ad6fc06f9?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.licdn.com%2fdms%2fimage%2fv2%2fD5622AQHgTmgbhGHiTw%2ffeedshare-shrink_2048_1536%2ffeedshare-shrink_2048_1536%2f0%2f1732545930757%3fe%3d2147483647%26v%3dbeta%26t%3dUQvQdAz_jdZo--qs7qrQc8kBYg9q_g8BC_l6VAIJ1N4&ehk=9gAWNggWqRxVq0YMG34jTib4zaWYTvs%2bTPltD1g2nXc%3d",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "圓斑如夜空星點，靜靜佇立於深淵之底。"
  },
  {
    "word": "thornyhead",
    "zh": "刺頭魚",
    "image": "https://th.bing.com/th/id/R.501b709810059c1c9b30899542be3c4a?rik=slZvkxkwy1Qj6w&pid=ImgRaw&r=0",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "頭頂荊棘，如同深海的王冠，守護著未知王國。"
  },
  {
    "word": "tubeshoulder",
    "zh": "管肩魚",
    "image": "https://media.australian.museum/media/dd/images/Spangled_Tubeshoulder_Persparsia_kopua_Philli.width-1200.7f9f776.jpg",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "身旁如管，捕捉每一縷飄忽的水流低語。"
  },
  {
    "word": "deepwater cardinalfish",
    "zh": "深水朱雀魚",
    "image": "https://www.meerwasser-lexikon.de/imgHaupt/47469_rngM7aCXFJ.jpg",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "猩紅如焰，照亮深海最孤寂的角落。"
  },
  {
    "word": "longnosed_chimaera",
    "zh": "長吻軛鰻",
    "image": "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVqem93dHp3anRnYTB5Y3N1aG5vaDkwY3V1aGhmb2d5YnpmazYzZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BZaITVys8RxALUSAhX/giphy.gif",
    "video": "https://www.youtube.com/watch?v=rJGZTiNEFRs",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "長鼻探索深海秘密，優雅游弋於海底峽谷間。"
  },
  {
    "word": "Cinderella",
    "zh": "辛德瑞拉",
    "image": "https://media.giphy.com/media/V5VOpz6bkWgpO/giphy.gif",
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
    "word": "Tinker Bell",
    "zh": "小仙子",
    "image": "https://th.bing.com/th/id/OIP.Z_ZU6jgIki13xqMjEmtj4QHaFj?r=0&pid=ImgDet&w=175&h=130&c=7&dpr=2",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "飄散魔法塵的精靈，用一縷微光點亮夢幻永不陳舊。",
    "effect": {
      "type": "hint",
      "value": 1,
      "description": "排除一個錯誤選項"
    }
  },
  {
    "word": "Peter Pan",
    "zh": "彼得潘",
    "image": "https://www.bing.com/th/id/OGC.d50dd8e6eac324098f6bf64aa91ae08a?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia3.giphy.com%2fmedia%2f10ZucsW5gDl4kg%2fgiphy.gif&ehk=KM%2fHBD5VT6ppUgaJEfHKyVwdepkkuL4BracYn2gZMMo%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "永遠不肯長大的男孩，在奇幻夢島揮舞冒險的翅膀。",
    "effect": {
      "type": "skip_level",
      "value": 1,
      "description": "直接跳過當前樓層"
    }
  },
  {
    "word": "Captain Hook",
    "zh": "虎克船長",
    "image": "https://s.yimg.com/ny/api/res/1.2/PMfFBLlDMCACKI7TyK1cdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU3Ng--/https://media.zenfs.com/zh-Hant-TW/homerun/niusnews.com.tw/e8a037dff6db661518ae4eb998c3ea19",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "時鐘滴答聲中狩獵彼得潘的海盜，詮釋復仇的優雅與忐忑。"
  },
  {
    "word": "Wendy",
    "zh": "溫蒂",
    "image": "https://th.bing.com/th/id/OIP.4ya4g4nWM9iLEjI-cLKTFAAAAA?r=0&rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "夢島上的溫柔說書人，低語中編織家與想像的溫暖。"
  },
  {
    "word": "Pinocchio",
    "zh": "匹諾曹",
    "image": "https://www.bing.com/th/id/OGC.97bba700295540ac6971d43228982b1e?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fn.sinaimg.cn%2fsinakd20112%2f700%2fw400h300%2f20220629%2fa86a-e6322abac7da186ebda982b8074eb95a.gif&ehk=D5cX2%2bbTp%2bBgsETHDVWDzAtdqRslsoLrYH0G%2fp11X%2f4%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "木偶男孩追尋真的自我，每一次心跳都化作勇氣的節拍。"
  },
  {
    "word": "Jiminy Cricket",
    "zh": "蟋蟀吉米尼",
    "image": "https://th.bing.com/th/id/OIP.vDc3CxsoUQY87Fg_psfwFQAAAA?r=0&rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "躡手躡腳的良心使者，低吟中提醒我們道德的律動。"
  },
  {
    "word": "Sebastian",
    "zh": "賽巴斯汀",
    "image": "https://i.pinimg.com/originals/04/80/03/04800399a1415c06d712c73ff6ddfddd.jpg",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "一見鍾情的皇宮小螃蟹，用加勒比海的旋律守護美人魚之夢。"
  },
  {
    "word": "Ursula",
    "zh": "烏蘇拉",
    "image": "https://24.media.tumblr.com/tumblr_mbp7jgLjCi1rncdgao1_500.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "深海女巫用詭譎歌聲編織欲望，換來權力卻失去對明天的掌控。"
  },
  {
    "word": "Hades",
    "zh": "哈迪斯",
    "image": "https://www.bing.com/th/id/OGC.3a0748f410c080b2fba5313f9d410938?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.tenor.com%2fDQXgQEFWAb4AAAAC%2fhades-angry.gif&ehk=EHeKejYAhawa96%2bob61%2bc7tRR7dxPdHi5xlIeq%2bN6Zc%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "陰間之王嘴角含笑，在火焰中演繹命運的幽冥狂想。"
  },
  {
    "word": "Hercules",
    "zh": "海克力士",
    "image": "https://www.bing.com/th/id/OGC.80d322dce5320316e274c1f4c8755ef4?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fimg.playbuzz.com%2fimage%2fupload%2ff_auto%2cfl_lossy%2cq_auto%2fcdn%2fd1965108-9223-4a5b-b98d-b3f7b370380c%2fa21da147-7912-4f2b-941c-ef262ac9778f.gif&ehk=BfYwueGqNpYOEsYVbO0tGC6CAEfkJ0b1b1npBByYHgk%3d",
    "video": "https://youtu.be/rJwJfHp4Osc?si=lnuoBy6hXCSPk6X7",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "半神之軀躍向星空，以熱血與真誠書寫英雄的詩篇。"
  },
  {
    "word": "Mowgli",
    "zh": "毛格",
    "image": "https://mistergif.com/media/6/mowgli-aullando-82890.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "叢林人之子在狼群之間奔跑，學習野性的自由與歸屬。"
  },
  {
    "word": "Baloo",
    "zh": "巴魯",
    "image": "https://th.bing.com/th/id/OIP.xnQpa_fz7qYUKEDa1P7VZwAAAA?r=0&rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "憨厚大熊，用輕鬆節奏教會毛格生命的愉悅。"
  },
  {
    "word": "Shere Khan",
    "zh": "雪狐",
    "image": "https://th.bing.com/th/id/R.8022b22e624273d818dcb722e8dded69?rik=p4JLqJl94QXnyQ&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fpw5ziR4HL7ksg%2fgiphy.gif&ehk=8GZhwWwgS8LpzMgdAzekLsmb7zx2c4K%2fvp3HtsGD6h0%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "叢林之王以冰冷目光狩獵，讓每聲低吼都震顫心靈。"
  },
  {
    "word": "Cruella de Vil",
    "zh": "庫伊拉",
    "image": "https://4.bp.blogspot.com/-cqTEgwerQBM/UoLpBMCICFI/AAAAAAAAE98/258LlOYrmAo/s1600/tumblr_lv5hrxcoLS1qhigt0o1_500.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "時尚魅影背後的瘋狂夢想家，毛皮的慾望燃燒人性。"
  },
  {
    "word": "Fairy Godmother",
    "zh": "仙女教母",
    "image": "https://figurinepop.com/public/2019/12/fairygodmother1_2.jpg",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "揮動魔杖的慈愛守護者，在一瞬間點亮奇蹟之光。"
  },
  {
    "word": "Lady",
    "zh": "小姐",
    "image": "https://hips.hearstapps.com/hmg-prod/images/0505bd7cf187d5852d39388f81a933e1-1597219629.gif?crop=1xw:1xh;center",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "優雅灰狗在煙火下邂逅流浪狗，愛的旋律在午夜迴盪。"
  },
  {
    "word": "Tramp",
    "zh": "流浪狗",
    "image": "https://images6.fanpop.com/image/photos/38200000/Lady-and-the-Tramp-char-and-anj-38254201-245-324.gif",
    "video": "https://youtu.be/sLrWNuGl6ks?si=9BsHctiQ7ZORmLMd",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "街頭浪子以自由靈魂帶領小姐踏上冒險與浪漫之旅。"
  },
  {
    "word": "Mickey Mouse",
    "zh": "米奇老鼠",
    "image": "https://www.gifcen.com/wp-content/uploads/2023/06/mickey-mouse-gif-6.gif",
    "video": "https://www.youtube.com/watch?v=REHJ1lz_HLQ",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "迪士尼經典吉祥物，充滿活力與幽默感，帶給觀眾無窮歡笑。"
  },
  {
    "word": "Donald Duck",
    "zh": "唐老鴨",
    "image": "https://www.bing.com/th/id/OGC.6056896deb5520bcb82d0c05fa704fbc?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fbc%2f38%2f8c%2fbc388c6b24df2d081239efd48121da4c.gif&ehk=z5e1CUqqbXFE5Mv70ujh7eGemMJhih%2fL5z6X6E%2bpZmQ%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "性格急躁卻心地善良的鴨子，標誌性的咕噥聲融化人心。"
  },
   {
    "word": "Minnie Mouse",
    "zh": "米妮老鼠",
    "image": "https://www.bing.com/th/id/OGC.d69bb4b0b211656f160664bea95a6a51?r=0&pid=1.7&rurl=http%3a%2f%2fimg.soogif.com%2f3zTApQTIwC7VdEVSffjiP7lbSI48SSv5.gif&ehk=BH12WKNhfiAz8b3jHVytvQJyPCmouOzoH%2fQx0nJxTy0%3dg",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "樣貌優雅甜美的女主角，蝴蝶結與心形裙下藏著堅定信念。"
  },
  {
    "word": "Pluto",
    "zh": "布魯托",
    "image": "https://th.bing.com/th/id/OIP.K2-e74680VR-KBJjeo8eNwHaKC?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "普通",
    "category": "迪士尼",
    "description": "米奇忠誠的寵物狗，勇氣與好奇心讓他在冒險中閃耀。"
  },
  {
    "word": "Olaf",
    "zh": "奧拉夫",
    "image": "https://www.bing.com/th/id/OGC.6b08f26e069ea17eae84925fea503e2e?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.zenfs.com%2fen%2felle.tw%2f5464f4be22f53e5e838ac06e3283b292&ehk=N3SaS16UtDPe7liS%2fv%2bUlUulpJXpj317Yz2JrSoWPfc%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《冰雪奇緣》中的雪人，純真樂觀，渴望擁抱溫暖與友情。"
  },
  {
    "word": "Simba",
    "zh": "辛巴",
    "image": "https://th.bing.com/th/id/R.cc9c56af0addebadde3843565b19a27c?rik=QO6iEtOM9w3e3w&riu=http%3a%2f%2fimg.japhub.com%2f201606%2fYdQWr7JX.gif&ehk=O%2fnhoIkFTn2U3tk4Zb5cZL%2bIYu6bbBNOALUEUcDrCJo%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《獅子王》中勇敢的獅子王子，經歷責任與成長後重登王座。"
  },
  {
    "word": "Nala",
    "zh": "娜拉",
    "image": "https://th.bing.com/th/id/R.5744c05e0c74f79c60e86f98bc5120f5?rik=D1dLGEiWG0Qx%2fw&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fpolls%2f596000%2f596895_1292268112939_full.jpg%3fv%3d1292268217&ehk=Wcnh5jkupkQ3i%2f9URWWwVlr%2bIQWFqMCH5QJvLe%2bZmy8%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "智慧果敢的獅子公主，與辛巴並肩守護榮耀與愛。"
  },
  {
    "word": "Anna",
    "zh": "安娜",
    "image": "https://th.bing.com/th/id/R.25d24c57ecbd811a3d82d13a2ff49192?rik=98T1cwK8gnKKzw&riu=http%3a%2f%2fimg.soogif.com%2fzGQwoJNuKMjjdGvK4aZggCnZ8xAr3rqX.gif&ehk=2Yj7dCfUbi%2fwfdTFdDRkl4aAqKeq0jnblfhrCKVBQkQ%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《冰雪奇緣》裡的熱情公主，為了家人踏上冒險，展現無畏之心。"
  },
  {
    "word": "Ariel",
    "zh": "愛麗兒",
    "image": "https://www.bing.com/th/id/OGC.807b572168a991d930a687b75e0eb78f?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fs.yimg.com%2fuu%2fapi%2fres%2f1.2%2fBoENJU12iqvXfTOYmn3M0g--%7eB%2faD0zMDM7dz01MDA7YXBwaWQ9eXRhY2h5b24-%2fhttp%3a%2f%2f66.media.tumblr.com%2fdc0e8cc27b9b34e0de06511d674ba0d5%2ftumblr_inline_o8g6a2sXl51tvjluf_500.gif&ehk=I0qvOxuvdu5ijJYYksXp27eqSSL%2fS1lkmS148RJ9Qag%3d",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《小美人魚》的人魚公主，好奇心驅使她追逐陸地與愛的聲音。"
  },
  {
    "word": "Belle",
    "zh": "貝兒",
    "image": "https://live.staticflickr.com/536/31713483003_8ac91363a4_b.jpg",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《美女與野獸》中愛讀書的少女，用溫柔與智慧感化野獸。"
  },
  {
    "word": "Aladdin",
    "zh": "阿拉丁",
    "image": "https://th.bing.com/th/id/OIP.CGV6Xwx8nWqY_tgCUMFxBgAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《阿拉丁》中的街頭少年，機智與勇氣助他逆轉命運。"
  },
  {
    "word": "Jasmine",
    "zh": "茉莉公主",
    "image": "https://th.bing.com/th/id/R.e5e2b1256bed6c13ad3d1159aa1f3857?rik=zKxjU%2bnnaHi9Ow&riu=http%3a%2f%2fwww.elisabethdautriche.fr%2fwp-content%2fuploads%2f2014%2f05%2fSissi-Disney-06.jpg&ehk=kCwmmqdqQCA05YTCIho%2fhTS9KHS%2bugXv%2frcoSVfYBaI%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "擁有自由之心的公主，不願被束縛，追尋真愛與自主。"
  },
  {
    "word": "Mulan",
    "zh": "花木蘭",
    "image": "https://th.bing.com/th/id/R.6cf5f0fd277e7865d5b8bea1e2f41231?rik=vNCj%2fEezcAmtuQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2400000%2fMulan-Wallpaper-mulan-2471043-1024-768.jpg&ehk=MxKVM1EZa9YmMN%2fGsCInTmaJVKZ32YPClj6uFQR7Wjc%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "以勇氣與智慧代父從軍，打破性別桎梏的女戰士。"
  },
  {
    "word": "Pocahontas",
    "zh": "波卡洪塔斯",
    "image": "https://th.bing.com/th/id/OIP.vwcYWaXSo3xaKtSCfy94rgHaMV?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《風中奇緣》裡的印第安公主，與自然共鳴，橋接不同文化。"
  },
  {
    "word": "Tiana",
    "zh": "蒂安娜",
    "image": "https://wallpapercave.com/wp/wp4294583.png",
    "rarity": "稀有",
    "category": "迪士尼",
    "description": "《公主與青蛙》的女主角，憑藉勤奮與夢想實現願望。"
  },
  {
    "word": "Scar",
    "zh": "刀疤",
    "image": "https://media.giphy.com/media/l1l3TCGoCsY0g/giphy.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《獅子王》中的複雜反派，陰影中編織權力與復仇。"
  },
  {
    "word": "Elsa",
    "zh": "艾莎",
    "image": "https://hips.hearstapps.com/hmg-prod/images/frozen-2-elsa-the-snow-queen-42638065-540-226-1573763977.gif?crop=1xw:1xh;center",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《冰雪奇緣》的冰雪女王，掌握元素力量，同時背負孤獨與責任。"
  },
   {
    "word": "Beast",
    "zh": "野獸",
    "image": "https://media.giphy.com/media/n9AXiCSNv3E0E/giphy.gif",
    "rarity": "超稀有",
    "category": "迪士尼",
    "description": "《美女與野獸》中的王子詛咒形態，內心深處隱藏真摯溫暖。"
  },
 // 太空類型 (共20張)
  { word: "rocket", zh: "火箭", image: "img/cards/rocket.jpg", video: "https://youtu.be/Lssd08AYjFI?si=0ge4cefpmbZ062zN", rarity: "普通", category: "太空", description: "搭載宇航員飛向太空的載具，壯觀又神秘。" },
  { word: "galaxy", zh: "銀河", image: "https://www.bing.com/th/id/OGC.e2a46e1f690f991da06c60f236d233ed?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2ftigercat3.up.seesaa.net%2fimage%2f7F5Xgui0kpxd4f8RZJW41697959101-1697959112-thumbnail2.gif&ehk=ekpGI5h2lJsrm3oPoNm6TVd%2fXpk5P%2b8IUDJbLi66ViM%3d", video: "https://youtu.be/g5RKRUGvFTE?si=uMyUdpXMgiArbyg3", rarity: "稀有", category: "太空", description: "包含數百億顆恆星的巨大星系，我們的家園僅是微塵。" },
  { word: "astronaut", zh: "太空人", image: "https://th.bing.com/th/id/OIP.ysExHkAfR6VfA_B_VZFbRAHaEZ?w=312&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/Hz2F_S3Tl0Y?si=3Wj6YwjJJZwev47h", rarity: "稀有", category: "太空", description: "穿著太空衣的探險者，跨出地心，追尋星辰夢。" },
  { word: "spaceship", zh: "太空船", image: "https://www.bing.com/th/id/OGC.9864c8cf473553e922d523a4b47f3d13?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fbkimg.cdn.bcebos.com%2fpic%2fcaef76094b36acaf2eddc49e8a819a1001e939013602&ehk=Qye%2b4vrvIdUj%2fH5cXCZbrQZ7O5p8ek8os4bENwLtshY%3d", video: "videos/spaceship.mp4", rarity: "稀有", category: "太空", description: "星際航行的鋼鐵巨艦，承載無限可能。" },
  { word: "satellite", zh: "衛星", image: "https://th.bing.com/th/id/OIP.wNfZipTjynDkrGreGz5sWgHaEK?w=246&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/-S1xnAimqXg?si=_X7WkR1gOfxp8Zjc", rarity: "普通", category: "太空", description: "繞行於軌道之上，傳遞地球的聲音與光影。" },
  { word: "blackhole", zh: "黑洞", image: "https://www.bing.com/th/id/OGC.c2b2a0846988d7ef8760c24750836149?o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fpic.rmb.bdstatic.com%2fc2b2a0846988d7ef8760c247508361491963.gif&ehk=%2bsgr%2bVv%2bc7989RARw%2fTTq8wA9Ti50x6hKlIx2mQdoaE%3d", video: "videos/blackhole.mp4", rarity: "超稀有", category: "太空", description: "吞噬一切的暗影漩渦，宇宙深處的謎團。", youtube: "https://www.youtube.com/watch?v=QqsLTNkzvaY" },
  { word: "nebula", zh: "星雲", image: "https://th.bing.com/th/id/OIP.XsdCywDNVLIqANIyJCBTrwHaFC?w=277&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "videos/nebula.mp4", rarity: "普通", category: "太空", description: "色彩斑斕的氣體雲海，新星的搖籃。" },
  { word: "universe", zh: "宇宙", image: "https://th.bing.com/th/id/OIP._YHm83oYxSUPYi9Mb2VFvQHaFj?w=249&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "videos/universe.mp4", rarity: "超稀有", category: "太空", description: "一切存在與未知，浩瀚無垠的宏闊舞台。", youtube: "https://www.youtube.com/watch?v=libKVRa01L8" },
  { word: "comet", zh: "彗星", image: "https://www.bing.com/th/id/OGC.6c57d011a28aef4450198f37d6ab97ef?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.indiatimes.in%2fmedia%2fcontent%2f2017%2fSep%2fezgif_com-optimize_1506074453.gif&ehk=ndhvfqlo2tcvWGWfyZPLMVtPAURrLJ6su%2fl3xMhj2NY%3d", video: "videos/comet.mp4", rarity: "普通", category: "太空", description: "冰塵連綿的旅行者，尾跡畫出流光飛影。" },
  { word: "meteor", zh: "流星", image: "https://www.bing.com/th/id/OGC.01d122050190cfc835fb0e285280046b?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fimg95.699pic.com%2fphoto%2f40151%2f9222.gif_wh300.gif&ehk=RKVatLUX7lpmAIWShwClECix7qzSMoWQCbMfAl3dlVo%3d", video: "videos/meteor.mp4", rarity: "普通", category: "太空", description: "劃過天幕的瞬間焰光，許願者的祈盼。" },
  { word: "moon", zh: "月球", image: "https://th.bing.com/th/id/OIP.HFpJ6wfJ1ldLtExhJAG1ygAAAA?w=270&h=166&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "videos/moon.mp4", rarity: "普通", category: "太空", description: "夜的銀盤，潮汐的呼喚。" },
  { word: "supernova", zh: "超新星", image: "https://www.bing.com/th/id/OGC.74ab16ad8869ceae22c2ce23a30abc73?o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fe0.ifengimg.com%2f06%2f2019%2f0210%2f1E39F751439123BAC603F4EEFA72A864CE86B993_size1946_w700_h394.gif&ehk=plYnQrzRI1vy3syUa6oHmsAiP%2biLGSFIvZ3%2bhbOmrGs%3d", video: "videos/supernova.mp4", rarity: "超稀有", category: "太空", description: "星辰的末路華章，化作塵埃與榮光。", youtube: "https://www.youtube.com/watch?v=H8Jm7qO4AqE" },
  { word: "pulsar", zh: "脈衝星", image: "https://th.bing.com/th/id/OIP.NeVX-kZ_hnY2OGf2a6oElQHaFj?w=224&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", video: "videos/pulsar.mp4", rarity: "稀有", category: "太空", description: "節律閃爍的天體燈塔，引領宇宙航路。" },
  { word: "darkmatter", zh: "暗物質", image: "https://th.bing.com/th/id/OIP.RmbUeTZ0H8S0z2CZ5RUXrQHaGE?w=203&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", video: "https://youtu.be/ZBejmNIyRvI?si=lt0S2kIcBSVFf_Jp", rarity: "超稀有", category: "太空", description: "隱匿於星河間的無形之網，撐起虛空之軀。", youtube: "https://www.youtube.com/watch?v=QAa2O_3wBDU" },
  // 魔法類型 (共20張)
  { word: "wand", zh: "魔杖", image: "https://www.bing.com/th/id/OGC.be4fc7a5eccc21638fc2da9d86dee90a?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fdl.bbs.9game.cn%2fattachments%2fforum%2f201911%2f05%2f113421knnct3ce53igez34.gif&ehk=OsjYN1hmITzHxl%2bhkJqLxkDRXAut%2f%2fa%2fNxJZG9zS4Xo%3d", rarity: "普通", category: "魔法", description: "咒語的導管，將意志化作魔力流轉。" },
  { word: "spellbook", zh: "魔法書", image: "https://th.bing.com/th/id/OIP.AeZwnsWVVlHCWyz5gQ8wPgHaE3?w=281&h=184&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "稀有", category: "魔法", description: "封印古老符文的卷頁，知識與力量並存。" },
  
  { word: "wizard", zh: "巫師", image: "https://www.bing.com/th/id/OGC.232ddda9d78a57dd6efd41e2a9be749a?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fWLxnzjxV7aIiQ%2fgiphy.gif&ehk=jIz5PCJCw1XNw0LU9nLMYfb0Rgc63KLyxMHZ%2bUSxHf4%3d", rarity: "稀有", category: "魔法", description: "掌控元素的智者，星塵與雷電的呼喚者。" },
  { word: "dragon", zh: "龍", image: "img/cards/dragon.png", rarity: "超稀有", category: "魔法", description: "古老鱗片與火焰，傳說在它的咆哮中重生。", youtube: "https://www.youtube.com/watch?v=1A-Nf3QIJjM" },
  { word: "crystal", zh: "魔晶", image: "https://www.bing.com/th/id/OGC.aa307f3e616aba71a8dcbb0d596d41bb?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f52%2fec%2f59%2f52ec5977f5d05417cd1693e23b40351b.gif&ehk=u%2bnVXopVhiMxL9zFfxGtgLaGPoDPBm7j%2fC9i6aDmmAU%3d", rarity: "普通", category: "魔法", description: "儲存元素與時間的礦石，光影中低語。" },
  { word: "cloak", zh: "斗篷", image: "https://i.pinimg.com/originals/e2/c4/fe/e2c4feee2edb851af5244d8ac534845f.gif", rarity: "普通", category: "魔法", description: "隱匿與防護的織物，夜色中的影舞者。" },
  { word: "enchant", zh: "附魔", image: "https://www.bing.com/th/id/OGC.7aa157841523e1566d385669afce9253?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.redd.it%2fgd10dymj6gea1.gif&ehk=k8tc8GHjoQoir0EDUtYI0FEYlyX8LHmzb1deDYAN50w%3d", rarity: "稀有", category: "魔法", description: "將靈光注入凡物，綻放奇蹟能量。" },
  { word: "portal", zh: "傳送門", image: "https://www.bing.com/th/id/OGC.e70540ca945f95f2972a6da91d02d32a?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fhugelolcdn.com%2fi%2f342794.gif&ehk=1aFp%2fL3uBPoxhJZUM1agjPRq013cOWvqaYExKmsx7hU%3d", rarity: "超稀有", category: "魔法", description: "跨越時空的裂縫，瞬移的詩篇。", youtube: "https://www.youtube.com/watch?v=3pAnRKD4raY" },
  { word: "familiar", zh: "侍從獸", image: "https://th.bing.com/th/id/R.39f563a74a197d11332d179774bdee6b?rik=CgHST3U4CJNoog&riu=http%3a%2f%2fimg.soogif.com%2f6AVk9RoJly2kJ4JOWM3EYdy9rcgrccSf.gif&ehk=nWxRrAdPQTzVhy4OMRQ73F4qwXPOewdA4osOeMrk4jw%3d&risl=&pid=ImgRaw&r=0", rarity: "稀有", category: "魔法", description: "忠誠之靈，魔法旅途的默契夥伴。" },
  { word: "runestone", zh: "符文石", image: "https://th.bing.com/th/id/OIP.HzrlhHVYgnn4NDBChKx_3gHaLI?pid=ImgDet&w=175&h=262&c=7&dpr=2", rarity: "普通", category: "魔法", description: "刻畫元素之印的古石，召喚與封印之鑰。" },
  { word: "cauldron", zh: "鍋爐", image: "https://png.pngtree.com/png-vector/20240519/ourlarge/pngtree-witch-cauldron-with-poison-cartoon-png-image_12487936.png", rarity: "普通", category: "魔法", description: "翻騰的藥湯，蒸氣中蘊含變化奧秘。" },
  { word: "magicmirror", zh: "魔鏡", image: "https://th.bing.com/th/id/OIP.rjXNEaJeWhBR2UeDHkbe2AAAAA?r=0&pid=ImgDet&w=208&h=208&c=7&dpr=1.5&cb=idpwebpc2", rarity: "稀有", category: "魔法", description: "穿著太空衣的探險者，跨出地心，追尋星辰夢。" },

  // 科幻類型 (共7張)
  { word: "cyborg", zh: "賽博人", image: "https://image.cdn2.seaart.ai/2023-06-27/38974824558661/3e1ad08578685ce4c078f1407da7ed831107f0ef_high.webp", rarity: "稀有", category: "科幻", description: "半人半機械的強化戰士，擁有驚人的反應與力量。" },
  { word: "ai", zh: "人工智慧", image: "https://www.bing.com/th/id/OGC.5ad350b1154e38a969a0472cd4a3ba12?r=0&pid=1.7&rurl=https%3a%2f%2fimg.php.cn%2fupload%2farticle%2f000%2f887%2f227%2f171013381653493.gif&ehk=7TOP5a4GfICodUTadt%2b7OFZai1ZP2%2ffCPnYtoq4wy9o%3d", rarity: "超稀有", category: "科幻", description: "具備自我意識與超高邏輯的智慧核心，可掌控整個系統。", youtube: "https://www.youtube.com/watch?v=4V2xXqFgB_c" },
  { word: "mecha", zh: "機甲", image: "https://www.bing.com/th/id/OGC.8aebde8056def027cb605936d32e2f50?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fwww.niusnews.com%2fupload%2fimgs%2fdefault%2f2018JUNedie%2fbumblebee%2f4.gif&ehk=gZ7uM93yrZghL83i0CYy%2bJKNytfEd%2fr514yKaNaNfdI%3d", rarity: "稀有", category: "科幻", description: "由人類駕駛的大型機器戰甲，是未來戰爭的主力。" },
  { word: "hologram", zh: "全息影像", image: "https://www.techhub.in.th/wp-content/uploads/2017/01/technology-2017-9.jpg", rarity: "普通", category: "科幻", description: "利用光學與投影技術創造的虛擬實像，用於戰術偽裝或通訊。" },
  { word: "nanobot", zh: "奈米機器人", image: "https://th.bing.com/th/id/OIP.bFDr8-wQMsKwrfdH30LuwgHaDV?w=305&h=157&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "普通", category: "科幻", description: "極小的機械單位，可進入體內修復細胞或進行滲透作戰。" },
  { word: "quantumchip", zh: "量子晶片", image: "https://th.bing.com/th/id/OIP.89-tisQ9Wdbp8X55JABaVgHaEo?w=234&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "超稀有", category: "科幻", description: "利用量子原理運作的核心晶片，能大幅提升運算效能。" },
  { word: "warpdrive", zh: "曲速引擎", image: "https://th.bing.com/th/id/OIP.y5WYkui8k6IP_Vn6Q7G8wAHaEK?w=322&h=181&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "超稀有", category: "科幻", description: "能扭曲時空以超光速旅行的高科技裝置。" },

  // 神話生物類型 (共7張)
  { word: "phoenix", zh: "鳳凰", image: "https://th.bing.com/th/id/OIP.UkQZzWL9blyqMhrOvjpYxQHaJ4?w=600&h=800&rs=1&pid=ImgDetMain", rarity: "超稀有", category: "神話生物", description: "浴火重生于曠野，尾羽如朝陽，靈魂永不熄滅。", youtube: "https://www.youtube.com/watch?v=8jLOx1hD3_o" },
  { word: "unicorn", zh: "獨角獸", image: "https://m.media-amazon.com/images/I/71i1VApBYzL._AC_SL1500_.jpg", rarity: "超稀有", category: "神話生物", description: "白蹄踏露，角尖閃耀純潔光芒，守護夢境邊界。", youtube: "https://www.youtube.com/watch?v=4V2xXqFgB_c" },
  { word: "sphinx", zh: "斯芬克斯", image: "https://th.bing.com/th/id/R.1023971c501aa1fb00578146b3d94136?rik=0He4O%2fZh%2bQGmbg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-OqzM-wtK8Zg%2fUfE1U6gvpJI%2fs1600%2fimages%2b(1).jpg&ehk=oJRDRPqwIRJuuG8iBwUqDOYeZSSly4gFFhgVAtJG%2fBU%3d&risl=&pid=ImgRaw&r=0", rarity: "稀有", category: "神話生物", description: "石躯默立沙漠，智慧深邃，謎語如風語般迴盪。" },
  { word: "hydra", zh: "九頭蛇", image: "https://www.iamag.co/wp-content/uploads/2019/01/The-Art-of-Bryan-Sola-20.jpg", rarity: "超稀有", category: "神話生物", description: "每斬一頭，兩頭再生，深淵之水燃起不朽傳說。" },
  { word: "centaur", zh: "半人馬", image: "https://i.pinimg.com/originals/ce/ba/5c/ceba5ca2cd30348a7009bed55acab8d2.jpg", rarity: "普通", category: "神話生物", description: "半人馬多半都是勇猛善戰的暴烈戰士，他們可以快速的追擊敵人，也都擁有百步穿楊的神技。" },
  { word: "minotaur", zh: "牛頭人", image: "https://i.pinimg.com/originals/79/0f/8f/790f8f8c05b941d0b36dc8f89ad506a3.jpg", rarity: "稀有", category: "神話生物", description: "迷宮之心的守衛，怒吼如雷，角尖染血。" },
  { word: "griffin", zh: "獅鷲獸", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6bac9e7-4240-4e9f-9a7d-9097d6ff6365/dgadoo9-a1b3e7a5-f1d1-4c6b-be45-c0c0a8cea945.png/v1/fill/w_350,h_350,q_70,strp/mazo_by_saraheferya_dgadoo9-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Q2YmFjOWU3LTQyNDAtNGU5Zi05YTdkLTkwOTdkNmZmNjM2NVwvZGdhZG9vOS1hMWIzZTdhNS1mMWQxLTRjNmItYmU0NS1jMGMwYThjZWE5NDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5ty2LOFGZAs8nEZMqpQSRqzqVmFKyXLBjD_-YzsLTas", rarity: "稀有", category: "神話生物", description: "金羽展翅，獅身鷲首，天空與大地的守望者。" },

  // 蒸汽龐克類型 (共7張)
  { word: "goggles", zh: "護目鏡", image: "https://bpic.588ku.com/element_origin_min_pic/24/01/23/901e8f6e8c00c998d631270b0491c7bf.jpg", rarity: "普通", category: "蒸汽龐克", description: "銅框琉璃，在蒸汽迷霧中捕捉時間之光。" },
  { word: "steamengine", zh: "蒸汽機", image: "https://bpic.588ku.com/element_origin_min_pic/24/03/10/c1c7d3124fb920ef7d357de3fde09c0d.jpg!r650", rarity: "稀有", category: "蒸汽龐克", description: "咆哮的鍋爐與齒輪共舞，動力源源不絕。" },
  { word: "airship", zh: "蒸汽飛船", image: "https://th.bing.com/th/id/OIP.klqOym812SkWyRPpRSV1TgAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3", rarity: "超稀有", category: "蒸汽龐克", description: "錨鏈與飛槳間，雲海的旅程由此啟程。" },
  { word: "gear", zh: "齒輪", image: "https://png.pngtree.com/png-vector/20230809/ourlarge/pngtree-instative-vector-illustration-doodle-of-a-set-of-colorful-gears-png-image_6838811.png", rarity: "普通", category: "蒸汽龐克", description: "齒與齒咬合之際，時間與命運運轉無休。" },
  { word: "brasskey", zh: "黃銅鑰匙", image: "https://png.pngtree.com/png-vector/20240921/ourmid/pngtree-old-vintage-key-png-image_13882194.png", rarity: "普通", category: "蒸汽龐克", description: "微小卻精緻，開啟未知機匣的黃金符咒。" },
  { word: "mechanicalowl", zh: "機械貓頭鷹", image: "https://th.bing.com/th/id/OIP.n35jNX2twLu6NTuUXYqkvwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3", rarity: "稀有", category: "蒸汽龐克", description: "銅羽靜寂飛行，夜幕中洞察每個秘密。" },
  { word: "clockworkautomaton", zh: "發條機械人", image: "https://forbesafrique.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-30-at-10.20.52-2.jpeg", rarity: "超稀有", category: "蒸汽龐克", description: "齒輪心臟跳動，機械與靈魂的邊界模糊。" },

  // 未來都市類型 (共7張)
  { word: "neoncity", zh: "霓虹都市", image: "https://th.bing.com/th/id/OIP.ecqHXnof2qkj2k4HSZ_zVgHaE7?w=626&h=417&rs=1&pid=ImgDetMain", rarity: "稀有", category: "未來都市", description: "光影交織的街道，夢想與現實在霓虹中共舞。" },
  { word: "hovercar", zh: "懸浮車", image: "https://img.freepik.com/premium-photo/amazing-flying-car-combining-futuristic-technology_951992-2843.jpg", rarity: "稀有", category: "未來都市", description: "車輪消逝於街面，未來的律動在空中飛馳。" },
  { word: "cybertower", zh: "賽博塔", image: "https://img.freepik.com/premium-photo/a-futuristic-cityscape-illuminated-by-the-glow-of-computer-science-technology_349863-1434.jpg", rarity: "超稀有", category: "未來都市", description: "高聳入雲，霧化之光刷洗每層記憶。" },
  { word: "aiassistant", zh: "人工助手", image: "img/cards/aiassistant.png", rarity: "稀有", category: "未來都市", description: "數據流中誕生的微笑，智慧比肩人心。" },
  { word: "dronepolice", zh: "警用無人機", image: "https://th.bing.com/th/id/OIP.FEduWQQ7mvqjQTGuV-DOowAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "普通", category: "未來都市", description: "金屬翅膀巡弋，秩序的守護者從天而降。" },
  { word: "skybridge", zh: "空中廊橋", image: "https://image.archiposition.com/2022/07/71658314181.jpg", rarity: "稀有", category: "未來都市", description: "連結高樓的透明之路，踩夢踏歌而行。" },
  { word: "holomarket", zh: "全息市場", image: "https://thumbs.dreamstime.com/b/holographic-interface-displaying-blueprints-301152804.jpg", rarity: "普通", category: "未來都市", description: "數位擺攤，買賣停留於光與影的交界。" },
{word: "anglerfish",
    "zh": "鮟鱇魚",
    "image": "https://i.pinimg.com/736x/13/67/8f/13678fb8d82ff252a356308f90bc2db2.jpg",
    "video": "https://www.youtube.com/watch?v=Z-BbpaNXbxg",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "燈籠魚的本名是鮟鱇魚。這種魚的長度在80釐米左右，身體扁平，而且很柔軟。它的徒步很大，呈圓盤狀，尾巴則很細小，下頜吐出，兩頜上有大量尖銳的牙齒，鰓孔很大，體表沒有鱗片。由於它不常遊動，捕食機會少，所以需要用到頭頂的小燈籠來引誘獵物。"
  },
   {
    word: "vampiresquid",
    "zh": "吸血烏賊",
    "image": "https://www.mbari.org/wp-content/uploads/2020/06/Vampyroteuthis-infernalis_vamp-T1152-09_15_43_14-1030x579.jpg",
    "video": "https://www.youtube.com/watch?v=eiUCLG2Ue5I",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "披著黑紅披風，游走於生與死的邊界之間。"
  },
  {
    word: "gulper eel",
    "zh": "翻鬥鰻",
    "image": "https://th.bing.com/th/id/OIP.Z7gkgO8GLrOpFgDBqXvGGQHaDv?w=650&h=329&rs=1&pid=ImgDetMain",
    "video": "https://www.youtube.com/watch?v=QNL3aZ_vGAM",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "一口吞噬整片夜色，肚裡藏著無垠的深海夢魘。"
  },
{
    "word": "oarfish",
    "zh": "王帶魚",
    "image": "https://coastalanglermag.com/wp-content/uploads/2019/12/oar-fish.jpg",
    "video": "https://www.youtube.com/watch?v=YMKlhYzjhYI",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "長如銀絲的身軀，在深海中緩緩舞動，彷若古老的水晶旗幟。"
  },
  {
    "word": "fangtooth",
    "zh": "尖齒魚",
    "image": "https://i.pinimg.com/originals/a6/cd/3f/a6cd3f0a9cc47b9794fa89633e4b119d.jpg",
    "video": "https://www.youtube.com/watch?v=jCWop491Q9Y",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "比身軀更長的利牙，吞噬每一道入侵的陰影。"
  },
 {
    "word": "barreleye",
    "zh": "桶眼魚",
    "image": "https://th.bing.com/th/id/R.c22825941a287453b48d50dc07dfc1d0?rik=seFt%2bWIurOD8XA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GBe3T8Tl7OI%2fUn7fZPzqJ7I%2fAAAAAAAABL8%2fV6rHlHOKtFg%2fs1600%2fBarreleye.jpg&ehk=n9GJFy5emOZedWNHVXD3KHEXA8ufbLXUPxSQHWnqBJA%3d&risl=&pid=ImgRaw&r=0",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "透明的頭蓋，映照著深海最隱秘的星辰",
    "video_url": "https://youtu.be/Akv36y8WLYA?si=mIkOKSAyTfYwBykR"  
  },
  {
    "word": "tripod fish",
    "zh": "三腳魚",
    "image": "https://th.bing.com/th/id/OIP.66k0Y-Tym-KtNGf1zwp5fgAAAA?rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "三隻纖細支腳，穩立於海床，靜候命運的浪潮。"
  },
  {
    "word": "viperfish",
    "zh": "毒蛇魚",
    "image": "https://i.redd.it/h91daiv3q9811.jpg",
    "video": "https://www.youtube.com/watch?v=jCWop491Q9Y",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "血紅的觸手，刺破黑暗的瞬間，獵物已無處可逃。"
  },
  {
    "word": "hatchetfish",
    "zh": "斧魚",
    "image": "img/cards/hatchetfish.png",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "銀色身板薄如刃鋒，橫切深淵中最沉重的寂靜。"
  },
  {
    "word": "ghost_shark",
    "zh": "幽靈鯊",
    "image": "img/cards/ghost_shark.png",
    "video": "https://www.youtube.com/watch?v=rJGZTiNEFRs",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "身形若有若無，幽魂般掠過前方，留下一縷寒意。"
  },
  {
    "word": "pelican_eel",
    "zh": "鵜鶘鰻",
    "image": "img/cards/pelican_eel.png",
    "video": "https://www.youtube.com/watch?v=QNL3aZ_vGAM",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "大口似鵜鶘，吞噬周遭一切光明與陰影。"
  },
  {
    "word": "blobfish",
    "zh": "黏魚",
    "image": "https://cdn.openart.ai/stable_diffusion/4e6a1927b2e1d97c5bfaf3b7c85902038ef28886_2000x2000.webp",
    "video": "https://www.youtube.com/watch?v=_y4DbZivHCY",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "如軟泥般的身形，卻保存著最原始的生命密碼。"
  },
  {
    "word": "frilled_shark",
    "zh": "褶鯊",
    "image": "https://stylesatlife.com/wp-content/uploads/2023/08/Frilled-shark.jpg",
    "video": "https://www.youtube.com/watch?v=GXrRC3pfLnE",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "古老如化石，卻依舊在黑暗中低吟遠古的詩篇。"
  },
  {
    "word": "sixgill_shark",
    "zh": "六鰓鯊",
    "image": "https://66.media.tumblr.com/300e4f7cacc6ddf4f4cab7345258ab01/tumblr_inline_ott9ri96jf1te25u3_540.gifv",
    "video": "https://www.youtube.com/watch?v=4r7wHMg5Yjg",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "六瓣呼吸孔，如深海的節拍，跳動著生命的韻律。"
  },
  {
    "word": "black_swallower",
    "zh": "吞天鱵",
    "image": "https://i.ytimg.com/vi/tcaIM-iC-Z8/maxresdefault.jpg",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "黑暗中探出巨口，連影子都無從逃脫。"
  },
  {
    "word": "snailfish",
    "zh": "蝸牛魚",
    "image": "https://www.bing.com/th/id/OGC.28732d765f6f1f0591b65138d7b4eaa8?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia-cdn-v2.laodong.vn%2fStorage%2fNewsPortal%2f2023%2f4%2f3%2f1175112%2fCon-Ca.gif&ehk=SnTKJMw8dPU7t%2fa13hRa0Pl%2bkrSQBifxTWf8l5R3YSs%3d",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "柔軟如蝸殼，感知著海底最微弱的顫動。"
  },
  {
    "word": "lantern_shark",
    "zh": "燈籠鯊",
    "image": "https://www.bing.com/th/id/OGC.a1dccfcebdefc0d691c1e47e496771dc?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2f64.media.tumblr.com%2f4eafd1be475d4e9792f5378254d91dae%2ftumblr_oku7alxf4B1vyihqco2_400.gif&ehk=2wtEPk4qYyQFQdJY36jEY7bfA%2f8SvkAfpV2NovvvcNY%3d",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "沿側散發微光，化作深海的流動火炬。"
  },
  {
    "word": "polka_dot_batfish",
    "zh": "圓點蝙蝠魚",
    "image": "https://www.bing.com/th/id/OGC.a051a4412de6dd95e477807ad6fc06f9?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.licdn.com%2fdms%2fimage%2fv2%2fD5622AQHgTmgbhGHiTw%2ffeedshare-shrink_2048_1536%2ffeedshare-shrink_2048_1536%2f0%2f1732545930757%3fe%3d2147483647%26v%3dbeta%26t%3dUQvQdAz_jdZo--qs7qrQc8kBYg9q_g8BC_l6VAIJ1N4&ehk=9gAWNggWqRxVq0YMG34jTib4zaWYTvs%2bTPltD1g2nXc%3d",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "圓斑如夜空星點，靜靜佇立於深淵之底。"
  },
  {
    "word": "thornyhead",
    "zh": "刺頭魚",
    "image": "https://th.bing.com/th/id/R.501b709810059c1c9b30899542be3c4a?rik=slZvkxkwy1Qj6w&pid=ImgRaw&r=0",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "頭頂荊棘，如同深海的王冠，守護著未知王國。"
  },
  {
    "word": "tubeshoulder",
    "zh": "管肩魚",
    "image": "https://media.australian.museum/media/dd/images/Spangled_Tubeshoulder_Persparsia_kopua_Philli.width-1200.7f9f776.jpg",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "身旁如管，捕捉每一縷飄忽的水流低語。"
  },
  {
    "word": "deepwater cardinalfish",
    "zh": "深水朱雀魚",
    "image": "https://www.meerwasser-lexikon.de/imgHaupt/47469_rngM7aCXFJ.jpg",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "猩紅如焰，照亮深海最孤寂的角落。"
  },
  {
    "word": "longnosed_chimaera",
    "zh": "長吻軛鰻",
    "image": "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVqem93dHp3anRnYTB5Y3N1aG5vaDkwY3V1aGhmb2d5YnpmazYzZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BZaITVys8RxALUSAhX/giphy.gif",
    "video": "https://www.youtube.com/watch?v=rJGZTiNEFRs",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "長吻探向未知，彷彿要刺破深海的面紗。"
  },
  {
    "word": "blackdragon",
    "zh": "黑龍魚",
    "image": "https://shopstore-manage.shopstore.tw/upload/1947/product/1947_616c18eaa3fe0.jpeg",
    "video": "https://www.youtube.com/watch?v=jCWop491Q9Y",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "身披鱗甲如夜，游動間釋放寒光龍息。"
  },
  {
    "word": "slickhead",
    "zh": "光頭魚",
    "image": "https://th.bing.com/th/id/OIP.6vKXX5piLonp5tIxbi143AHaEx?r=0&rs=1&pid=ImgDetMain",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "光滑無鱗，像遺落於深淵的水晶之髮。"
  },
  {
    "word": "faceless_cusk",
    "zh": "無面咕斯克",
    "image": "https://th.bing.com/th/id/OIP.C77f6__gsS_lUP03SDAgfAHaGe?w=200&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "沒有面孔，卻讀得懂深海最隱秘的秘密。"
  },
  {
    "word": "slender_snipe_eel",
    "zh": "細鷺鰻",
    "image": "https://th.bing.com/th/id/OIP.x1yAPA6274dO8139sP7nvAHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "rarity": "稀有",
    "category": "深海奇觀",
    "description": "纖長如絲的身影，靜靜滑過無垠黑幕。"
  },
  {
    "word": "dragonfish",
    "zh": "龍魚",
    "image": "https://www.bing.com/th/id/OGC.edbe1e4cf6cb3a234a570adb804c1a3c?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2f64.media.tumblr.com%2f684e1724083713d0476c4101e023130d%2f7537b3524e5b9287-b3%2fs400x600%2f48208d699efa6e495190abbb2d877443cce88e7e.gifv&ehk=MdmHxoNJKKRzKEOohSGh4j%2bEkojZnEo3Tv%2bbRYDCU6M%3d",
    "rarity": "超稀有",
    "category": "深海奇觀",
    "description": "體內發光器宛如龍珠，破開深海的重重暗影。"
  },
  {
    "word": "bristlemouth",
    "zh": "刺口魚",
    "image": "https://hakaimagazine.com/wp-content/uploads/banner_6.jpg",
    "rarity": "普通",
    "category": "深海奇觀",
    "description": "無數細刺如微光利刃，切割著黑暗的寂靜。"
  },
  {
    "word": "oni",
    "zh": "鬼",
    "image": "https://mythlok.b-cdn.net/wp-content/uploads/2024/06/Mythlok-Oni.jpg",
    "rarity": "稀有",
    "category": "日本妖怪傳說",
    "description": "赤角鋼牙，揮舞鐵棒，惡鬼嘶吼震碎人間怨靈。",
    "multiplier": 3.0,
    "cost": 25
  },
  {
    "word": "tengu",
    "zh": "天狗",
    "image": "https://budou-chan.jp/wp-content/uploads/2019/11/84491995_10216816781394950_3113422230957064192_o.jpg",
    "rarity": "稀有",
    "category": "日本妖怪傳說",
    "description": "長喙紅面，掌風如颶，俯瞰山林守護或淩遲旅人。",
    "multiplier": 2.5,
    "cost": 20
  },
  {
    "word": "kappa",
    "zh": "河童",
    "image": "https://i.pinimg.com/736x/11/a2/fe/11a2fe7b4a2d44ff4e741dbebf34f199.jpg",
    "rarity": "稀有",
    "category": "日本妖怪傳說",
    "description": "頭頂水窪，戲水調皮，又可奪人靈魂於川澤之間。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "jorogumo",
    "zh": "絡新婦",
    "image": "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1686744764/catalog/1668686441780506624/y8id46izjublc5bbg69q.jpg",
    "rarity": "稀有",
    "category": "日本妖怪傳說",
    "description": "蛛絲編織紅色誘惑，妄圖吞噬入網的凡人。",
    "multiplier": 2.5,
    "cost": 20
  },
  {
    "word": "umibozu",
    "zh": "海坊主",
    "image": "https://img.3dmgame.com/uploads/allimg/170218/135409E19-28.jpg",
    "rarity": "超稀有",
    "category": "日本妖怪傳說",
    "description": "黑影駕雲，掀起巨浪，只因船上一句咒語。",
    "multiplier": 3.0,
    "cost": 25
  },
  {
    "word": "bakekujira",
    "zh": "化鯨",
    "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb02170c-6ab6-4096-80a6-b10de78ccdc8/dfm5e17-0273232a-66eb-45ab-85f4-6eb2ef50914d.png/v1/fill/w_894,h_894,q_70,strp/bake_kujira_by_olaskaart_dfm5e17-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2ViMDIxNzBjLTZhYjYtNDA5Ni04MGE2LWIxMGRlNzhjY2RjOFwvZGZtNWUxNy0wMjczMjMyYS02NmViLTQ1YWItODVmNC02ZWIyZWY1MDkxNGQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VraeCp9DdxiaklpcllCEsNOIUFxdr-E66enc_HJgpdI",
    "rarity": "稀有",
    "category": "日本妖怪傳說",
    "description": "鬼魂鯨影漂浮於海面，帶來不祥的枯骨暴雨。",
    "multiplier": 3.0,
    "cost": 25
  },
   {
    "word": "pompeii",
    "zh": "龐貝城",
    "image": "img/cards/pompeii.png",
    "rarity": "稀有",
    "category": "失落城市",
    "description": "火山灰掩埋了榮華，如今沉默的石徑訴說亡靈的低語。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "machu_picchu",
    "zh": "馬丘比丘",
    "image": "https://1.bp.blogspot.com/-JzRS-D_azj8/U2ZIC_o-qqI/AAAAAAAAQIg/8vc8x9L8Pn0/s1600/MACCHU+PICCHU.gif",
    "rarity": "超稀有",
    "category": "失落城市",
    "description": "雲霧繚繞的石階，昔日王朝的輝煌在山谷間回響。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "petra",
    "zh": "佩特拉",
    "image": "https://th.bing.com/th/id/R.2789ff490764221bdca6b6499d78eb91?rik=9Iej6YaM9nLxeg&pid=ImgRaw&r=0",
    "rarity": "超稀有",
    "category": "失落城市",
    "description": "玫瑰色的石窟建築，刻畫出納巴泰人的秘密與傳奇。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "angkor_wat",
    "zh": "吳哥窟",
    "image": "https://th.bing.com/th/id/OIP.zDsdl8bdoEKYTTSZtGjTKwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "rarity": "超稀有",
    "category": "失落城市",
    "description": "石雕神像與森林藤蔓共舞，每一尊微笑都是千年凝視。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "tikal",
    "zh": "提卡爾",
    "image": "https://cdn.britannica.com/30/9030-050-9EB64E8E/Great-Plaza-stelae-Guatemala-Tikal-Temple-Jaguar.jpg?w=300",
    "rarity": "稀有",
    "category": "失落城市",
    "description": "高聳金字塔隱於熱帶雨林，猶如古瑪雅人的天空階梯。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "catalhoyuk",
    "zh": "差塔霍伊克",
    "image": "https://th.bing.com/th/id/R.535ef1ea01267a08323e31ebcecdef92?rik=QZjc8%2fqED%2fdADQ&pid=ImgRaw&r=0",
    "rarity": "普通",
    "category": "失落城市",
    "description": "泥磚築就的聚落，將新石器時代的生活印跡凝固於時光中。",
    "multiplier": 1.0,
    "cost": 5
  },
  {
    "word": "dodo",
    "zh": "渡渡鳥",
    "image": "https://wr-images.chinatimes.com/newsphoto/2023-02-01/1024/20230201900778.jpg",
    "rarity": "稀有",
    "category": "滅絕動物",
    "description": "無法飛翔的巨鳥，於毛里求斯的樹影間永遠消逝。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "passenger pigeon",
    "zh": "旅鴿",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV5CdONPqYrgRvNWLiQz2dp28bCcXwjFudG5iwps24iV7Ch0Q8GnRilD-w0lMiLnw-q-fuY7s8QIMuvioGkz85Jjix0Jl0otpLXlVeqSt-ZGoGe8_3-L7KWEC4IfZQs1N0BwdyfKhyOkaw/w1200-h630-p-k-no-nu/passenger+pigeon.jpg",
    "rarity": "普通",
    "category": "滅絕動物",
    "description": "曾遮天蔽日的鴿群，如今只剩沉靜的羽毛傳說。",
    "multiplier": 1.0,
    "cost": 5
  },
  {
    "word": "tasmanian tiger",
    "zh": "袋狼",
    "image": "https://www.tanmizhi.com/img/allimg/11/48-22112110501X22.jpg",
    "rarity": "稀有",
    "category": "滅絕動物",
    "description": "斑紋似鬼魅，於塔斯馬尼亞的夜幕中消散無蹤。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "woolly_mammoth",
    "zh": "長毛象",
    "image": "https://www.bing.com/th/id/OGC.2cd9095436b36e90b8727e404875bb7c?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fcoffeeand.tv%2fwp-content%2fuploads%2f2021%2f06%2f3.gif&ehk=32VR1Z6wpnLESNJDfB7K9NPjPhShAwBamamH7bCrvec%3d",
    "rarity": "超稀有",
    "category": "滅絕動物",
    "description": "冰原巨獸的足跡，永遠凍結在史前的霜雪裡。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "howl",
    "zh": "霍爾",
    "image": "https://www.bing.com/th/id/OGC.8bc2ba6bdc5bc6f1429defacf7e2ac91?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmegapx-assets.dcard.tw%2fimages%2ff0f51b38-17ea-4208-bb05-54f6a88c5311%2ffull.jpeg&ehk=N2IH8foq7dfoimQyUreZdh3w7dP8F9hl1%2bcW9Dg9CNc%3d",
    "rarity": "超稀有",
    "category": "霍爾移動城堡",
    "description": "魔法師霍爾，紅髮飛揚如火，心底藏著守護與逃避的勇氣。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "sophie",
    "zh": "蘇菲",
    "image": "https://c-ssl.duitang.com/uploads/item/201510/03/20151003221647_wdWBa.jpeg",
    "rarity": "稀有",
    "category": "霍爾移動城堡",
    "description": "溫柔理髮師，被詛咒成老太婆，卻以堅韌與愛化解一切魔障。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "calcifer",
    "zh": "卡爾西法",
    "image": "https://www.bing.com/th/id/OGC.94de9a0075dd0136eae80f9f290d3a77?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fc-ssl.duitang.com%2fuploads%2fitem%2f201404%2f04%2f20140404225525_WZrBE.gif&ehk=svSmD6Oec9%2fa%2b%2b9Cz1SlJOoG39oS4gR3VYLKfBAffmA%3d",
    "rarity": "超稀有",
    "category": "霍爾移動城堡",
    "description": "被封印的火焰惡魔，暖心又鬧騰，與霍爾共築漂浮城堡之心臟。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "markl",
    "zh": "馬克魯",
    "image": "https://i.pinimg.com/736x/11/04/98/110498925e7af2214f3a33c0e5b42d27.jpg",
    "rarity": "稀有",
    "category": "霍爾移動城堡",
    "description": "霍爾的小徒弟，懷抱憧憬，學習魔法的第一步，如晨光般清新。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "moving castle",
    "zh": "移動城堡",
    "image": "https://www.bing.com/th/id/OGC.100976d66bad27aed1176837c74f3927?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f7b2x9yAkhXL6o%2fgiphy.gif&ehk=TQDkDOKcqMcNvYBRHYLBIKMRlj4qwzN66CLF07toEVw%3d",
    "rarity": "超稀有",
    "category": "霍爾移動城堡",
    "description": "歪歪扭扭的奇幻建築，跟隨卡爾西法的火焰心跳，於荒野間漫遊。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "turnip head",
    "zh": "蘿蔔頭",
    "image": "https://www.bing.com/th/id/OGC.36148dda67e003f76e1fa6c7dc07497e?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2f64.media.tumblr.com%2f0de0f68d887dbdf39a3f56dbce5da728%2ftumblr_p85y1ofTlN1rejibwo3_540.gifv&ehk=dQAukMvob0zOaakhc0VMA%2b5NpidAvhHE7jTIP7h5q0Y%3d",
    "rarity": "稀有",
    "category": "霍爾移動城堡",
    "description": "被詛咒的守門番薯頭，沉默而忠誠，直到真愛之吻破除咒語。",
    "multiplier": 1.5,
    "cost": 10
  },
  {
    "word": "saber toothed_tiger",
    "zh": "劍齒虎",
    "image": "https://64.media.tumblr.com/43d8772aba4cb34dde9b09a247de49fc/tumblr_nwhj8jBoqI1rx2ovqo1_400.gifv",
    "rarity": "超稀有",
    "category": "滅絕動物",
    "description": "尖牙如劍，曾縱橫草原，今成傳說囈語。",
    "multiplier": 2.0,
    "cost": 15
  },
  {
    "word": "great auk",
    "zh": "大海雀",
    "image": "https://alchetron.com/cdn/great-auk-fd757280-ba58-4de3-99f1-b66ca50f837-resize-750.jpeg",
    "rarity": "普通",
    "category": "滅絕動物",
    "description": "笨重無翼的海鳥，只剩沉默石岸上的幽影。",
    "multiplier": 1.0,
    "cost": 5
  },
  {
    "word": "moa",
    "zh": "巨鳥莫亞",
    "image": "https://natgeo.nikkeibp.co.jp/atcl/news/19/070100383/ph_thumb.jpg",
    "rarity": "普通",
    "category": "滅絕動物",
    "description": "新西蘭巨型鳥類，草原風聲還能聽見它的悠長呼嘯。",
    "multiplier": 1.0,
    "cost": 5
  },
  {
    "word": "great zimbabwe",
    "zh": "大津巴布韋",
    "image": "https://th.bing.com/th/id/OIP.xSVd-KX4-GjYf0WznXO3ZwHaEU?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "失落城市",
    "description": "壯闊石牆無需砂漿，見證古非洲帝國的神秘力量。",
    "multiplier": 1.5,
    "cost": 10
   },
  {
    "word": "Aries",
    "zh": "白羊座",
    "image": "https://cdn.pixabay.com/photo/2023/05/25/05/15/ai-generated-8016343_1280.jpg",
    "rarity": "稀有",
    "category": "星座神話",
    "description": "象徵勇氣與新生的火焰公羊，引領冒險的旅程。"
  },
  {
    "word": "Taurus",
    "zh": "金牛座",
    "image": "https://img.freepik.com/premium-photo/illustrations-zodiac-sign-taurus-starry-sky_1125254-4287.jpg",
    "rarity": "普通",
    "category": "星座神話",
    "description": "宙斯化身白牛，帶來愛與力量的傳奇。"
  },
  {
    "word": "Gemini",
    "zh": "雙子座",
    "image": "https://th.bing.com/th/id/OIP.gACtpvNld0fRVGTg-ikBSAHaE7?r=0&w=626&h=417&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "超稀有",
    "category": "星座神話",
    "description": "雙胞胎的羈絆，映照永恆的友情與犧牲。"
  },
  {
    "word": "Cancer",
    "zh": "巨蟹座",
    "image": "https://th.bing.com/th/id/OIP.giukpII0lDXsHM1oPblyegHaHa?r=0&w=2000&h=2000&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "星座神話",
    "description": "赫拉的殉職巨蟹，忠誠而英勇。"
  },
  {
    "word": "Leo",
    "zh": "獅子座",
    "image": "https://static.vecteezy.com/system/resources/previews/023/505/071/large_2x/backdrop-of-sacred-zodiac-leo-symbols-astrology-alchemy-magic-sorcery-and-fortune-telling-generative-ai-digital-painting-zodiac-sign-leo-on-the-starry-sky-close-up-photo.jpg",
    "rarity": "超稀有",
    "category": "星座神話",
    "description": "奈緹阿凱里昂巨獅，力量與榮耀的化身。"
  },
  {
    "word": "Virgo",
    "zh": "處女座",
    "image": "https://as1.ftcdn.net/v2/jpg/05/73/61/84/1000_F_573618446_UjuvtpXdlEaGGcMMJ8kKkafB4W9iGCHl.jpg",
    "rarity": "普通",
    "category": "星座神話",
    "description": "農業女神的化身，純潔與豐饒的象徵。"
  },
  {
    "word": "Libra",
    "zh": "天秤座",
    "image": "https://i.pinimg.com/736x/c9/82/ce/c982cee66d74e3feeaf08a3605bbd077.jpg",
    "rarity": "超稀有",
    "category": "星座神話",
    "description": "正義女神的天秤，平衡與公平的守護者。"
  },
  {
    "word": "Scorpio",
    "zh": "天蠍座",
    "image": "https://th.bing.com/th/id/OIP.W6-uoh_XtswdUyVcXjJcmAHaE7?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "普通",
    "category": "星座神話",
    "description": "為阿耳忒彌斯獻身的巨蠍，毒性與變革同在。"
  },
  {
    "word": "Sagittarius",
    "zh": "射手座",
    "image": "https://th.bing.com/th/id/OIP.EMD6bga2n570V3AxSuELFgHaE8?r=0&w=2048&h=1366&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "星座神話",
    "description": "半人馬導師，智慧與仁慈的傳承者。"
  },
  {
    "word": "Capricorn",
    "zh": "摩羯座",
    "image": "https://www.2spirits.com/wp-content/uploads/2023/08/Capricorn-Zodiac-Sign-1.jpg",
    "rarity": "超稀有",
    "category": "星座神話",
    "description": "山羊魚怪的堅韌，跨越天海的冒險家。"
  },
  {
    "word": "Aquarius",
    "zh": "水瓶座",
    "image": "https://punnypulse.com/wp-content/uploads/2024/06/Aquarius-Puns.jpg",
    "rarity": "普通",
    "category": "星座神話",
    "description": "甘露仙子的甘霖，滋潤世間乾涸的心田。"
  },
  {
    "word": "Pisces",
    "zh": "雙魚座",
    "image": "https://i.pinimg.com/originals/35/71/e4/3571e4dd72c04bb69fc2bff767e60b4c.jpg",
    "rarity": "稀有",
    "category": "星座神話",
    "description": "兩條魚的團結，愛與逃脫的交織。"
   },
  {
    "word": "Zeus",
    "zh": "宙斯",
    "image": "https://viking.style/wp-content/uploads/2024/05/God-Zeus-768x384.jpg",
    "rarity": "超稀有",
    "category": "希臘神話",
    "description": "眾神之王，雷霆萬鈞，掌控天界的主宰。"
  },
  {
    "word": "Hera",
    "zh": "赫拉",
    "image": "https://i.etsystatic.com/50423120/r/il/99a417/5822929447/il_1080xN.5822929447_22rt.jpg",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "婚姻與家庭的守護女神，威儀莊嚴。"
  },
  {
    "word": "Poseidon",
    "zh": "波賽頓",
    "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c8937e03-8e98-45e4-b348-f5feacc0373d/dh2rdi9-04a95663-6554-4b95-af14-1179ed272557.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4OTM3ZTAzLThlOTgtNDVlNC1iMzQ4LWY1ZmVhY2MwMzczZFwvZGgycmRpOS0wNGE5NTY2My02NTU0LTRiOTUtYWYxNC0xMTc5ZWQyNzI1NTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ErI4gVC8jGLZBPfiw3ojJCU2AchbX9VsfxDVZV0Dnzc",
    "rarity": "超稀有",
    "category": "希臘神話",
    "description": "海洋之神，駕馭海浪與地震的三叉戟主人。"
  },
  {
    "word": "Demeter",
    "zh": "德墨忒耳",
    "image": "https://i.pinimg.com/736x/5e/55/f3/5e55f31c21d96c2055d39d07fa72eea2.jpg",
    "rarity": "普通",
    "category": "希臘神話",
    "description": "豐饒與農業女神，四季輪轉的恩賜者。"
  },
  {
    "word": "Athena",
    "zh": "雅典娜",
    "image": "https://i.pinimg.com/originals/45/09/04/45090436c02480c7d472774ba38bf682.jpg",
    "rarity": "超稀有",
    "category": "希臘神話",
    "description": "智慧與戰略女神，雅典城的守護聖靈。"
  },
  {
    "word": "Apollo",
    "zh": "阿波羅",
    "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/952f171b-68e0-4c92-b133-a8fb4b5234d6/dhv05hk-c643a9f6-34f3-44de-9cfb-339ec5a2dce6.jpg/v1/fill/w_894,h_894,q_70,strp/greek_god___apolo_by_anvadi_dhv05hk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk1MmYxNzFiLTY4ZTAtNGM5Mi1iMTMzLWE4ZmI0YjUyMzRkNlwvZGh2MDVoay1jNjQzYTlmNi0zNGYzLTQ0ZGUtOWNmYi0zMzllYzVhMmRjZTYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.A7Y6Iw1Ku1Q-IH79j_a7iwzHSrJJ7pMmmFa-NGhFP8I",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "光明與音樂之神，金色琴聲迴盪天際。"
  },
  {
    "word": "Artemis",
    "zh": "阿耳忒彌斯",
    "image": "https://as2.ftcdn.net/v2/jpg/07/11/84/53/1000_F_711845312_FrFR9WTehywtZl3bO20csc48OSmqKRcU.jpg",
    "rarity": "普通",
    "category": "希臘神話",
    "description": "狩獵與月光女神，林間的孤傲獵手。"
  },
  {
    "word": "Ares",
    "zh": "阿瑞斯",
    "image": "https://i.pinimg.com/originals/e6/bc/f7/e6bcf7f460a50f2c2700122554c4386e.png",
    "rarity": "超稀有",
    "category": "希臘神話",
    "description": "戰爭之神，戰場上無畏的血色狂潮。"
  },
  {
    "word": "Aphrodite",
    "zh": "阿芙蘿黛蒂",
    "image": "https://img.freepik.com/premium-photo/timeless-beauty-capturing-ancient-greek-goddess-athena-ultrarealistic-splendor_960911-22038.jpg?w=2000",
    "rarity": "普通",
    "category": "希臘神話",
    "description": "愛與美之女神，魅惑眾生的玫瑰光芒。"
  },
  {
    "word": "Hermes",
    "zh": "赫耳墨斯",
    "image": "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/49e898d3-33e8-4355-8049-5b32b6fa2695_1024x1024.png",
    "rarity": "超稀有",
    "category": "希臘神話",
    "description": "眾神的信使，靈巧的翅膀帶來消息。"
  },
  {
    "word": "Hades",
    "zh": "哈迪斯",
    "image": "https://th.bing.com/th/id/OIP.jh5PoCyBjLDW-PQlC9_1dAHaHa?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "冥界之王，黑暗王座下的靜謐與威嚴。"
  },
  {
    "word": "Hephaestus",
    "zh": "赫淮斯托斯",
    "image": "https://th.bing.com/th/id/OIP.c9pf5fdxkTIC4f58Wwk7SQHaHa?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    "rarity": "普通",
    "category": "希臘神話",
    "description": "火與鍛造之神，熔爐中鑄造神器的匠師。"
  },
  {
    "word": "Dionysus",
    "zh": "狄俄倪索斯",
    "image": "https://www.paradijsvogelsmagazine.nl/wp-content/uploads/2023/10/dionysus-7683512_1920.jpg",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "酒神與狂歡之主，葡萄美酒與歡笑的化身。"
  },
  {
    "word": "Persephone",
    "zh": "珀耳塞福涅",
    "image": "https://cdn.openart.ai/stable_diffusion/af3394f52d952263c6c773045bcc5391f6702033_2000x2000.webp",
    "rarity": "超稀有",
    "category": "希臘神話",
    "description": "冥后與春之女神，往返陰陽界的季節女王。"
  },
  {
    "word": "Hestia",
    "zh": "赫斯提亞",
    "image": "https://i.etsystatic.com/10441898/c/2143/2143/0/0/il/b01774/5669551924/il_600x600.5669551924_g09a.jpg",
    "video": "https://youtu.be/7ySaAMY7Xp4?si=NkuFFnR3JegMOmZh",
    "rarity": "普通",
    "category": "希臘神話",
    "description": "爐灶與家園女神，溫暖與團聚的象徵。"
  },
  {
    "word": "Eros",
    "zh": "伊洛斯",
    "image": "https://example.com/images/eros.png",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "愛神之子，金箭一射即中，牽動心弦。"
  },
  {
    "word": "Nike",
    "zh": "勝利女神",
    "image": "https://example.com/images/nike.png",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "翱翔戰場之上，將勝利之冠賜予英雄。"
  },
  {
    "word": "Helios",
    "zh": "赫利俄斯",
    "image": "https://example.com/images/helios.png",
    "rarity": "超稀有",
    "category": "希臘神話",
    "description": "日輪駕馭者，每日馳騁天際，光芒萬丈。"
  },
  {
    "word": "Selene",
    "zh": "賽勒涅",
    "image": "https://example.com/images/selene.png",
    "rarity": "稀有",
    "category": "希臘神話",
    "description": "月亮女神，銀光灑落人間的溫柔使者。"
  },
  {
    "word": "Pan",
    "zh": "潘神",
    "image": "https://example.com/images/pan.png",
    "rarity": "普通",
    "category": "希臘神話",
    "description": "牧神與山林守護者，笛聲迴盪野外。"
  },
  {
    "word": "Nausicaä",
    "zh": "娜烏西卡",
    "image": "https://example.com/images/nausicaa_character.png",
    "rarity": "超稀有",
    "category": "宮崎駿",
    "description": "風之谷的少女公主，擁有與自然溝通的能力。"
  },
  {
    "word": "Sheeta",
    "zh": "希達",
    "image": "https://example.com/images/sheeta.png",
    "rarity": "稀有",
    "category": "宮崎駿",
    "description": "天空之城的神秘公主，承載古代文明的秘密。"
  },
  {
    "word": "Mei Kusakabe",
    "zh": "草壁梅",
    "image": "https://example.com/images/mei.png",
    "rarity": "普通",
    "category": "宮崎駿",
    "description": "龍貓中的活潑小女孩，好奇心驅使她探索森林。"
  },
  {
    "word": "Kiki",
    "zh": "奇奇",
    "image": "https://example.com/images/kiki_character.png",
    "rarity": "稀有",
    "category": "宮崎駿",
    "description": "魔女宅急便的年輕魔女，以飛行麂皮掃帚送達夢想。"
  },
  {
    "word": "Porco Rosso",
    "zh": "紅豬",
    "image": "https://example.com/images/porco_character.png",
    "rarity": "超稀有",
    "category": "宮崎駿",
    "description": "紅豬中的飛行王牌，豬鼻下的英雄靈魂。"
  },
  {
    "word": "Shoukichi",
    "zh": "小吉",
    "image": "https://example.com/images/shoukichi.png",
    "rarity": "普通",
    "category": "宮崎駿",
    "description": "平成狸合戰的年輕狸貓，帶領夥伴對抗人類侵擾。"
  },
  {
    "word": "San",
    "zh": "珊",
    "image": "https://example.com/images/san.png",
    "rarity": "稀有",
    "category": "宮崎駿",
    "description": "幽靈公主中被狼群撫養的少女，捍衛森林靈魂。"
  },
  {
    "word": "Chihiro Ogino",
    "zh": "荻野千尋",
    "image": "https://example.com/images/chihiro.png",
    "rarity": "超稀有",
    "category": "宮崎駿",
    "description": "千與千尋的勇敢少女，在神祕浴場中尋找自我。"
  },
  {
    "word": "Ponyo",
    "zh": "波妞",
    "image": "https://example.com/images/ponyo_character.png",
    "rarity": "稀有",
    "category": "宮崎駿",
    "description": "崖上的波妞，小金魚渴望成為人類的奇幻化身。"
  },
  {
    "word": "Jiro Horikoshi",
    "zh": "堀越二郎",
    "image": "https://example.com/images/jiro.png",
    "rarity": "超稀有",
    "category": "宮崎駿",
    "description": "風起中的飛機設計師，用夢想雕塑天空。"
  },
  {
    "word": "The Man",
    "zh": "漂流者",
    "image": "https://example.com/images/red_turtle_man.png",
    "rarity": "普通",
    "category": "宮崎駿",
    "description": "紅龜樹島中的無名漂流者，與巨龜展開生命對話。"
  },
  {
    "word": "Haku",
    "zh": "白龍",
    "image": "https://example.com/images/haku.png",
    "rarity": "超稀有",
    "category": "宮崎駿",
    "description": "千尋的守護者，化作龍形帶來救贖。"
  },
  {
    "word": "No-Face",
    "zh": "無臉男",
    "image": "https://example.com/images/no_face.png",
    "rarity": "稀有",
    "category": "宮崎駿",
    "description": "如幽影般流動，吞噬寂寞卻渴望被看見的神秘存在。"
  }

];

// ===自動為稀有與超稀有卡片加上高等級卡牌效果===
(function enhanceRareCards() {
  const rareEffects = [
    { type: 'time_extend', value: 30, description: '增加答題時間 30 秒' },
    { type: 'energy_restore', value: 1, description: '恢復 1 點能量' },
    { type: 'shield', value: 1, description: '抵擋一次答錯懲罰' }
  ];
  const epicEffects = [
    { type: 'time_freeze', value: 20, description: '暫停答題計時 20 秒' },
    { type: 'energy_restore', value: 2, description: '恢復 2 點能量' },
    { type: 'shield', value: 2, description: '抵擋兩次答錯懲罰' },
    { type: 'score_multiply', value: 1.5, description: '本局分數加倍 1.5 倍' }
  ];
  baseCards.forEach(card => {
    if ((card.rarity === '稀有' || card.rarity === '超稀有') && !card.effect) {
      if (card.rarity === '稀有') {
        const idx = Math.floor(Math.random() * rareEffects.length);
        card.effect = { ...rareEffects[idx] };
      } else if (card.rarity === '超稀有') {
        const idx = Math.floor(Math.random() * epicEffects.length);
        card.effect = { ...epicEffects[idx] };
      }
    }
  });
})();

// ===============================
// 2. 稀有度設定（用來決定 cost 與 stats 計算倍率）
// ===============================
const rarityConfig = {
  "普通":   { multiplier: 1.0,  cost: 5  },   // 普通卡：倍率 1、花費星數 5
  "稀有":   { multiplier: 1.5,  cost: 10 },   // 稀有卡：倍率 1.5、花費星數 10
  "超稀有": { multiplier: 2.0,  cost: 15 }    // 超稀有卡：倍率 2、花費星數 15
};


// ===============================
// 3. 自動 map 生成「完整版」的 allCards
//    每張卡都會多出：active, leader, stats, id, cost
// ===============================
const allCards = baseCards.map((card, index) => {
  // 取出該稀有度的設定（如果沒找到就用「普通」）
  const cfg = rarityConfig[card.rarity] || rarityConfig["普通"];

  // 隨機生成 stats：HP / ATK / RCV
  // 你可以自行調整下面的公式，以下只是示範
  const baseHp  = Math.round(1000 * cfg.multiplier + Math.random() * 200);
  const baseAtk = Math.round(500  * cfg.multiplier + Math.random() * 100);
  const baseRcv = Math.round(200  * cfg.multiplier + Math.random() * 50);

  // 根據稀有度決定技能冷卻（cd）
  let baseCd;
  if (card.rarity === "超稀有")      baseCd = 10;
  else if (card.rarity === "稀有")   baseCd = 12;
  else /* 普通 */                   baseCd = 15;

  // 為沒有效果的卡片添加預設效果
  let cardEffect = card.effect;
  if (!cardEffect) {
    // 根據稀有度分配預設效果
    if (card.rarity === '超稀有') {
      const epicEffects = [
        { type: 'time_extend', value: 90, description: '增加答題時間 90 秒' },
        { type: 'time_freeze', value: 45, description: '暫停計時器 45 秒' },
        { type: 'energy_restore', value: 3, description: '恢復 3 點能量' },
        { type: 'shield', value: 2, description: '抵擋兩次答錯懲罰' },
        { type: 'score_multiply', value: 3, description: '答對時獲得三倍分數' },
        { type: 'skip_level', value: 1, description: '直接跳過當前樓層' }
      ];
      cardEffect = epicEffects[index % epicEffects.length];
    } else if (card.rarity === '稀有') {
      const rareEffects = [
        { type: 'time_extend', value: 60, description: '增加答題時間 60 秒' },
        { type: 'hint', value: 2, description: '排除兩個錯誤選項' },
        { type: 'energy_restore', value: 2, description: '恢復 2 點能量' },
        { type: 'combo_protect', value: 2, description: '答錯不中斷連擊（持續 2 次）' },
        { type: 'shield', value: 1, description: '抵擋一次答錯懲罰' },
        { type: 'score_multiply', value: 2, description: '答對時獲得雙倍分數' }
      ];
      cardEffect = rareEffects[index % rareEffects.length];
    } else {
      // 普通卡片
      const commonEffects = [
        { type: 'time_extend', value: 30, description: '增加答題時間 30 秒' },
        { type: 'hint', value: 1, description: '排除一個錯誤選項' },
        { type: 'energy_restore', value: 1, description: '恢復 1 點能量' },
        { type: 'combo_protect', value: 1, description: '答錯不中斷連擊' },
        { type: 'shield', value: 1, description: '抵擋一次答錯懲罰' },
        { type: 'score_multiply', value: 1.5, description: '答對時獲得 1.5 倍分數' }
      ];
      cardEffect = commonEffects[index % commonEffects.length];
    }
  }

  return {
    // ==== 保留原本欄位 ====
    word:        card.word,
    zh:          card.zh,
    image:       card.image,
    video:       card.video,        // 保留影片屬性
    video_url:   card.video_url,    // 保留影片URL屬性
    rarity:      card.rarity,
    category:    card.category,
    description: card.description,
    effect:      cardEffect, // 使用預設效果或原有效果

    // ==== 新增的「主動技能」欄位（預設空值，之後可手動填） ====
    active: {
      name:  "",
      desc:  "",
      cd:    baseCd,
      maxLv: false
    },

    // ==== 新增的「隊長技能」欄位（預設空值，之後可手動填） ====
    leader: {
      name: "",
      desc: ""
    },

    // ==== 新增的「能力值」欄位 ====
    stats: {
      hp:     baseHp,
      atk:    baseAtk,
      rcv:    baseRcv,
      cd:     baseCd,
      type:   card.category, // 暫時直接拿 category 當 type
      lvl:    1,             // 初始就 1 級
      maxLvl: 99,            // 最高 99
      expPct: 0              // 經驗進度 0%
    },

    // ==== 新增的「id」與「cost」欄位 ====
    id:   index + 1,    // id 從 1 開始依序編號
    cost: cfg.cost      // 依稀有度決定花費星數
  };
});

// （可選）測試用：在開發時期可以把它印到 console 看看
console.log(">> 已生成 allCards，共", allCards.length, "張卡片");

// 將 baseCards 和 allCards 暴露到 window 物件，供其他頁面使用
if (typeof window !== 'undefined') {
  window.baseCards = baseCards;
  window.allCards = allCards;
  console.log(">> window.baseCards 已設定，長度:", window.baseCards.length);
  console.log(">> window.allCards 已設定，長度:", window.allCards.length);
} else {
  console.log(">> 非瀏覽器環境，無法設定 window.allCards");
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
