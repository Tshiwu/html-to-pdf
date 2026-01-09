# GitHub Pages 部署指南

本指南将帮助您将 Vue 项目部署到 GitHub Pages 并实现在线访问。

## 📋 前置要求

1. 已安装 Git
2. 已安装 Node.js 和 pnpm
3. 拥有 GitHub 账号

## 🚀 部署步骤

### 1. 在 GitHub 上创建新仓库

1. 登录 GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `html-to-pdf`（或您喜欢的名称）
   - **Description**: 可选
   - **Visibility**: 选择 Public（GitHub Pages 免费版需要公开仓库）
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

### 2. 初始化本地 Git 仓库并关联 GitHub

在项目根目录执行以下命令：

```bash
# 进入项目目录
cd /Users/ethann/Desktop/updf/github/browser_tools/html-to-pdf

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库（将 YOUR_USERNAME 替换为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/html-to-pdf.git

# 重命名分支为 main（如果当前分支不是 main）
git branch -M main

# 推送到 GitHub
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入您的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分：
   - 选择 **GitHub Actions** 作为部署源
5. 保存设置

### 4. 修改 base 路径（重要！）

如果您的 GitHub 仓库名不是 `html-to-pdf`，需要修改 `vite.config.js` 中的 `base` 配置：

```javascript
// 如果仓库名是 your-repo-name，则修改为：
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

例如，如果仓库名是 `my-vue-app`，则应该设置为：
```javascript
base: process.env.NODE_ENV === 'production' ? '/my-vue-app/' : '/',
```

### 5. 触发部署

有两种方式触发部署：

#### 方式一：自动部署（推荐）
- 每次推送到 `main` 或 `master` 分支时，GitHub Actions 会自动构建并部署

#### 方式二：手动触发
1. 进入仓库的 **Actions** 标签页
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮

### 6. 访问您的网站

部署完成后（通常需要 1-2 分钟），您的网站可以通过以下地址访问：

```
https://YOUR_USERNAME.github.io/html-to-pdf/
```

将 `YOUR_USERNAME` 替换为您的 GitHub 用户名，`html-to-pdf` 替换为您的仓库名。

## 🔧 常见问题

### 问题 1: 页面显示 404 或空白页

**解决方案**：
- 检查 `vite.config.js` 中的 `base` 路径是否正确（必须与仓库名匹配）
- 确保路径以 `/` 开头和结尾，例如：`/html-to-pdf/`

### 问题 2: 资源文件（CSS/JS）加载失败

**解决方案**：
- 检查 `base` 配置是否正确
- 清除浏览器缓存后重新加载

### 问题 3: GitHub Actions 部署失败

**解决方案**：
- 检查仓库的 Settings > Pages 中是否选择了 "GitHub Actions" 作为源
- 查看 Actions 标签页中的错误日志
- 确保 `package.json` 中有正确的构建脚本

### 问题 4: 如何更新网站内容

只需将代码更改推送到 GitHub：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新构建和部署。

## 📝 注意事项

1. **仓库必须是公开的**：GitHub Pages 免费版只支持公开仓库
2. **base 路径必须正确**：这是最常见的部署问题
3. **首次部署可能需要几分钟**：请耐心等待
4. **自定义域名**：如果需要使用自定义域名，可以在 GitHub Pages 设置中配置，并将 `base` 改为 `/`

## 🎉 完成！

部署成功后，您就可以通过 GitHub Pages 提供的 URL 在线访问您的 Vue 应用了！

