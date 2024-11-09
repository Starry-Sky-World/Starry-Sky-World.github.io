# BPB-Worker-Panel Installation Guide

## Github
[BPB-Worker-Panel](https://github.com/Starry-Sky-World/BPB-Worker-Panel-Chinese) 是一款开源的面板，基于 Cloudflare Workers 构建。
## 前言
您可能知道，有两种方法可以使用 Worker 和 Pages 在 Cloudflare 上创建代理。更常见的 Worker 方法有一个限制，即每天最多允许发送十万次请求，这对 2-3 人的使用已经足够。通过将域名连接到 Worker，可以绕过这个限制，虽然看起来这是 Cloudflare 的一个漏洞。Pages 没有这个限制，尽管会收到邮件通知 100k 容量已满，但服务不会中断。

另一个显著优点是更新的简便性。当项目代码更新时，您可以轻松更新您的面板。更多详情请参考[更新](#更新)。

此外，使用 Pages 的步骤非常简单，您可以轻松地在手机上完成这些操作。

---

## 第一步 - GitHub
1. 在 [Github](https://github.com/signup) 网站上创建一个账户（只需一个邮箱即可注册）。
2. 登录 GitHub 后，前往 [BPB-Worker-Panel](https://github.com/bia-pain-bache/BPB-Worker-Panel) 仓库，点击顶部的 Fork 按钮。

![Fork 仓库](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Fork_repo.jpg?raw=true)

---

## 第二步 - Cloudflare Pages
1. 如果没有 Cloudflare 账户，请从 [这里](https://dash.cloudflare.com/sign-up) 创建一个账户（同样只需要一个邮箱注册）。
2. 登录后，从左侧菜单进入 `Workers and Pages` 部分，点击 `Create Application`，选择 `Pages`。

![Pages 应用程序](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Pages_application.jpg?raw=true)

3. 点击 `Connect to Git` 并继续下一步。

![连接到 Git](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Connect_to_git.jpg?raw=true)

4. 点击 `BPB-Worker-Panel`，激活并点击 `Begin Setup`。在 `Project Name` 中输入一个自定义名称，然后点击 `Save and Deploy`。
5. 等待几秒钟，直到 `Continue to Project` 按钮出现，然后点击进入项目页面。

---

## 第三步 - 创建 Cloudflare KV
1. 从左侧菜单进入 `KV` 部分，点击 `Create a namespace`，输入一个自定义名称并添加。

![导航到 KV](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Nav_dash_kv.jpg?raw=true)

2. 返回 `Workers and Pages` 部分，进入已创建的 Pages 项目，按照下图进入 `Settings` 部分。

![Pages 绑定 KV](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Pages_bind_kv.jpg?raw=true)

3. 在 `Bindings` 部分点击 `Add` 并选择 `KV Namespace`，`Variable name` 应为 `bpb`，选择刚创建的 KV namespace 并保存。
4. 回到 `Deployment` 部分，点击 `Production` 下的 `view details`。

![查看详细信息](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Pages_production_details.jpg?raw=true)

5. 在 `Deployment detail` 部分，点击 `Manage Deployment` 并选择 `Retry deployment`。

![重试部署](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Pages_retry_deployment.jpg?raw=true)

等待几秒钟完成部署，然后可以访问面板。

---

<h1 align="center">高级设置（可选）</h1>

若需要更改 UUID、Proxy IP 或 Trojan 密码，可以在 `Environment variables` 部分进行设置。以下为步骤：

![环境变量](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Pages_env_vars.jpg?raw=true)

1. 点击 `Add variable`，分别添加 `UUID`、`PROXYIP` 和 `TROJAN_PASS` 变量，并保存。

![添加变量](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Pages_add_variables.jpg?raw=true)

2. 根据需要输入变量值，如从 [这里](https://www.uuidgenerator.net/) 生成 UUID。

若部署时未进行设置，之后也可从 `Settings` 部分添加。

---

## 连接自定义域名
1. 在 Cloudflare 仪表盘的 `Workers and Pages` 部分，选择项目并进入 `Custom domains`。
2. 输入域名并完成设置。

---

<h1 align="center">更新面板</h1>

使用 Pages 更新面板非常简单。只需前往 GitHub 仓库，点击 `Sync fork` 并更新分支即可，Cloudflare Pages 会自动进行更新。

![同步 fork](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/assets/images/Sync_fork.jpg?raw=true)
