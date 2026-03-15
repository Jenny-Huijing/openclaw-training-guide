# 🦞 OpenClaw 培训指南

> 从零打造你的 24h 超能数字员工

## 📁 项目结构

```
openclaw-training-guide/
├── src/
│   └── index.html          # 主页面
├── images/
│   ├── header-banner-v4.png    # 头图背景
│   ├── chapter1-cloud-vs-local.jpg
│   ├── chapter2-image.jpg
│   ├── chapter3-image.jpg
│   ├── chapter4-image.jpg
│   ├── chapter5-image.jpg
│   ├── chapter6-image.jpg
│   ├── tencent-openclaw-hd.jpg # 腾讯云部署截图
│   └── huawei-openclaw.jpg     # 华为云部署截图
├── docs/
│   └── (文档资料)
├── .vscode/
│   ├── settings.json       # VSCode 设置
│   └── extensions.json     # 推荐插件
└── README.md
```

## 🚀 快速开始

### 方式 1：VSCode Live Server
1. 安装 VSCode 插件 `Live Server`
2. 右键 `src/index.html` → `Open with Live Server`
3. 自动打开浏览器预览

### 方式 2：命令行
```bash
cd src
python3 -m http.server 8080
# 访问 http://localhost:8080
```

## 📖 内容大纲

1. **第一章**：初识这只"神虾" —— 它是谁？能干啥？
2. **第二章**：解剖"小龙虾" —— 揭秘 Agent 运作的底层黑科技
3. **第三章**："龙虾"拎包入住 —— 从一键部署到"开门接客"
4. **第四章**：特种兵训练 —— Skills 技能系统与自动化
5. **第五章**：防炸预警 —— 安全防护与防范"反杀"
6. **第六章**：养虾进阶 —— 开启"赛博分身"新生活

## 🛠️ 技术栈

- HTML5
- CSS3 (自定义样式)
- 无 JavaScript 框架（纯静态页面）

## 📝 开发建议

1. 使用 Prettier 格式化 HTML/CSS
2. 图片放在 `images/` 目录
3. 修改后刷新浏览器查看效果

## 📄 许可证

MIT License