# Findhorn River Farmers Market — GitHub Pages 发布版

这是已完成构建的静态网站包，专门用于 https://lorraine373737.github.io/findhorn-market/ 。
包含首页四张轮播图、全部商品图片及现有购物篮功能。不需要在 GitHub 上运行 npm。

## 修复当前空白页

1. 解压 `findhorn-market-pages-ready.zip`。
2. 打开 https://github.com/Lorraine373737/findhorn-market 的 Code 页面，回到仓库最外层。
3. 选择 Add file → Upload files，将解压目录内的全部文件和文件夹一起拖进去。应能看到 `index.html`、`assets/`、`catalog/`、`hero/`、`logo.png` 等；不要拖入外面的包装文件夹，不要只上传 ZIP。
4. 此包应替换仓库根目录已有的 `index.html`。图片目录应位于根目录，不要放入 `public/`。原有 `src/`、`public/` 和旧 assets 文件可以暂时保留，无需先删除。
5. 点击 Commit changes，提交到 `main`。
6. 在 Settings → Pages 确认 Source 为 Deploy from a branch，Branch 为 main，Folder 为 /(root)。如已有相同设置，不必更改。
7. 等 Actions 中该次 pages build and deployment 完成且显示绿色对勾后，打开网站并按 Ctrl+F5 刷新。

`.nojekyll` 是随包附带的隐藏文件，请一并上传；文件选择器不显示时，启用显示隐藏文件。

## 当前空白的原因

2026-09-16 检查时，线上 index.html 仍包含 `/src/main.jsx` 和 `%BASE_URL%`，说明开发源码直接被发布了。浏览器不能直接运行 Vite 的 JSX 项目。仓库也缺少此前源码包中的 `.github/workflows/pages.yml`，所以没有执行该项目需要的 Vite 构建。

这个发布版 index.html 已指向打包后的 `/findhorn-market/assets/*.js` 和 CSS。以后更新网站应重新构建后上传发布版；不要再用源码版 index.html 覆盖它。

本包只用于已编译网站的上传。可编辑源码仍保存在本地项目和先前源码包中。网站依旧是学生演示项目，预约按钮没有后端、支付或邮件服务。图片来源见 IMAGE_SOURCES.md。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
