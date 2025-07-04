
import json
import os

# 如果有 cards.json，可以讀取外部資料
# 這裡直接在程式中定義範例資料，可依需求改為讀取檔案
cards_data = [
    {
        "word": "pirate",
        "zh": "海盜",
        "image": "https://i.imgur.com/your-card-image.jpg",
        "rarity": "超稀有",
        "category": "神族",
        "active": {
            "name": "符石激發·光",
            "desc": "直接引爆暗符石造成敵全體光屬性傷害，並產生強化符石",
            "cd": 13,
            "maxLv": False
        },
        "leader": {
            "name": "聖之怒",
            "desc": "光屬性攻擊 2 倍"
        },
        "stats": {
            "hp": 1553,
            "atk": 763,
            "rcv": 287,
            "cd": 13,
            "type": "人類",
            "lvl": 62,
            "maxLvl": 99,
            "expPct": 77
        },
        "id": 16,
        "cost": 9,
        "audio": ""
    }
    # 可以在此處添加更多卡片資料
]

# HTML 模板
html_template = """<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <title>英漢單字卡—{word}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    /* ====== 全域樣式 ====== */
    body {{
      margin: 0;
      font-family: 'Orbitron', sans-serif;
      background: linear-gradient(to bottom, #000010, #020111);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }}

    /* ====== 卡片外框 ====== */
    .card-container {{
      width: 360px;
      background: #1a1a1a;
      border: 2px solid #333;
      border-radius: 14px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.8);
      overflow: hidden;
      color: #eee;
    }}

    /* ====== 頂部：Title + Translation + Cost ====== */
    .card-header {{
      background: #222;
      padding: 16px;
      text-align: center;
      border-bottom: 1px solid #333;
    }}
    .card-title {{
      font-size: 1.6rem;
      font-weight: bold;
      color: #0ff;
      text-shadow: 0 0 6px rgba(0,255,255,0.6);
      margin-bottom: 4px;
    }}
    .card-translation {{
      font-size: 1.1rem;
      color: #f0c000;
      text-shadow: 0 0 4px rgba(255,255,0,0.6);
    }}
    .card-cost {{
      margin-top: 8px;
      font-size: 0.95rem;
      color: #f0c000;
      font-weight: bold;
      letter-spacing: 1px;
      text-shadow: 0 0 3px rgba(0,0,0,0.7);
    }}

    /* ====== 圖片區 ====== */
    .card-image-wrapper {{
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
    }}
    .card-image-wrapper img {{
      width: 100%;
      max-height: 180px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 0 12px rgba(0,0,0,0.6);
    }}

    /* ====== 基本數值欄 ====== */
    .stats-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin: 12px 16px;
      font-size: 0.9rem;
      color: #ddd;
      text-shadow: 0 0 3px rgba(0,0,0,0.6);
    }}
    .stats-grid div {{
      display: flex;
      justify-content: space-between;
    }}
    .stats-grid label {{
      color: #999;
    }}

    /* ====== 技能區塊 ====== */
    .skill-section {{
      margin: 10px 16px;
      background: #2a2a2a;
      border-radius: 8px;
      padding: 10px 12px;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }}
    .skill-section h3 {{
      font-size: 1rem;
      margin-bottom: 6px;
      color: #ffb74d;
      text-shadow: 0 0 4px rgba(255,183,77,0.7);
    }}
    .skill-section .skill-desc {{
      font-size: 0.88rem;
      line-height: 1.4;
      color: #ccc;
      margin-bottom: 6px;
    }}
    .skill-section .skill-meta {{
      font-size: 0.85rem;
      color: #bbb;
      text-align: right;
    }}

    /* ====== 底部卡號 ====== */
    .card-footer {{
      margin: 12px 16px 16px 16px;
      font-size: 0.85rem;
      color: #666;
      text-align: right;
      border-top: 1px solid #333;
      padding-top: 8px;
    }}
  </style>
</head>
<body>

  <div class="card-container">
    <!-- 頂部 Header -->
    <div class="card-header">
      <div class="card-title">{word}</div>
      <div class="card-translation">{zh}</div>
      <div class="card-cost">Cost: {cost}</div>
    </div>

    <!-- 圖片區 -->
    <div class="card-image-wrapper">
      <img src="{image}" alt="{zh} ({word})">
    </div>

    <!-- 數值欄 -->
    <div class="stats-grid">
      <div><label>HP</label><span>{hp}</span></div>
      <div><label>ATK</label><span>{atk}</span></div>
      <div><label>RCV</label><span>{rcv}</span></div>
      <div><label>Type</label><span>{type}</span></div>
      <div><label>CD</label><span>{cd}</span></div>
      <div><label>ID</label><span>#{id}</span></div>
    </div>

    <!-- 主動技能區 -->
    <div class="skill-section">
      <h3>Active Skill: {active_name}</h3>
      <div class="skill-desc">
        {active_desc}
      </div>
      <div class="skill-meta">CD: {active_cd}</div>
    </div>

    <!-- 隊長技能區 -->
    <div class="skill-section">
      <h3>Leader Skill: {leader_name}</h3>
      <div class="skill-desc">
        {leader_desc}
      </div>
    </div>

    <!-- 底部 Footer -->
    <div class="card-footer">
      Card No. {id}
    </div>
  </div>

</body>
</html>
"""

def generate_html_files(output_dir="output_cards"):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for card in cards_data:
        # 填入模板
        html_content = html_template.format(
            word=card["word"],
            zh=card["zh"],
            cost=card["cost"],
            image=card["image"],
            hp=card["stats"]["hp"],
            atk=card["stats"]["atk"],
            rcv=card["stats"]["rcv"],
            type=card["stats"]["type"],
            cd=card["stats"]["cd"],
            id=card["id"],
            active_name=card["active"]["name"],
            active_desc=card["active"]["desc"],
            active_cd=card["active"]["cd"],
            leader_name=card["leader"]["name"],
            leader_desc=card["leader"]["desc"]
        )

        filename = f"{card['word']}.html"
        filepath = os.path.join(output_dir, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html_content)

    print(f"Generated HTML files in folder: {output_dir}")

if __name__ == "__main__":
    generate_html_files()
