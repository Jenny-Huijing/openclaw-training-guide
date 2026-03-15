# GitHub Pages 部署指南

## 步骤 1：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 仓库名称：`openclaw-training-guide`
3. 选择 **Public**（公开）
4. 不要勾选 "Add a README"
5. 点击 **Create repository**

## 步骤 2：推送代码

```bash
cd /Users/irvinglu/.openclaw/workspace/openclaw-training-guide

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/openclaw-training-guide.git

# 推送代码
git push -u origin main
```

## 步骤 3：启用 GitHub Pages

1. 打开仓库页面 → Settings → Pages
2. Source 选择 **Deploy from a branch**
3. Branch 选择 **main** → **/ (root)**
4. 点击 **Save**

## 步骤 4：移动 index.html

为了让 GitHub Pages 正确识别主页：

```bash
cd /Users/irvinglu/.openclaw/workspace/openclaw-training-guide
mv src/index.html .
git add .
git commit -m "Move index.html to root for GitHub Pages"
git push
```

## 步骤 5：访问网站

等待 1-2 分钟后，访问：

```
https://YOUR_USERNAME.github.io/openclaw-training-guide
```

## 🎉 完成！

每次修改后推送代码，网站会自动更新：

```bash
git add .
git commit -m "更新内容"
git push
```

---

## 备选方案：腾讯云 COS 托管

如果不想用 GitHub，也可以用腾讯云对象存储：

1. 开通腾讯云 COS 服务
2. 创建存储桶（选择公有读私有写）
3. 开启静态网站托管
4. 上传所有文件
5. 绑定自定义域名（可选）

详细步骤：https://cloud.tencent.com/document/product/436/32635