(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{500:function(t,a,s){t.exports=s.p+"assets/img/init-project.98d85e85.png"},521:function(t,a,s){"use strict";s.r(a);var e=s(22),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",[t._v("0.9系列——无脑搭建篇")])]),t._v(" "),e("h2",{attrs:{id:"创建本地项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建本地项目"}},[t._v("#")]),t._v(" 创建本地项目")]),t._v(" "),e("h3",{attrs:{id:"method-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-1"}},[t._v("#")]),t._v(" Method 1")]),t._v(" "),e("p",[t._v("打开 "),e("a",{attrs:{href:"https://vuepress-reco-doc.vercel.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco官方文档"),e("OutboundLink")],1),t._v("，导航到”快速开始“，自己查看文档。。。")]),t._v(" "),e("p",[t._v("当然，觉得麻烦不想看文档的童鞋，可以直接运行：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("  npx @vuepress-reco/theme-cli init\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:s(500),alt:"init-project"}})]),t._v(" "),e("p",[t._v("回车! Wait a minute...")]),t._v(" "),e("p",[t._v("下载好之后改改名字配置就可以啦 😄")]),t._v(" "),e("h3",{attrs:{id:"method-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-2"}},[t._v("#")]),t._v(" Method 2")]),t._v(" "),e("p",[t._v("从github上把"),e("a",{attrs:{href:"https://github.com/QiYoe/c-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的项目"),e("OutboundLink")],1),t._v("clone下来，改一改名字啥的 🤣")]),t._v(" "),e("h2",{attrs:{id:"把本地项目推送到github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#把本地项目推送到github"}},[t._v("#")]),t._v(" 把本地项目推送到github")]),t._v(" "),e("p",[t._v("这个如果不懂的话可以"),e("a",{attrs:{href:"https://www.cnblogs.com/sdcs/p/8270029.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"自动化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署"}},[t._v("#")]),t._v(" 自动化部署")]),t._v(" "),e("h3",{attrs:{id:"travis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#travis"}},[t._v("#")]),t._v(" travis")]),t._v(" "),e("p",[t._v("目前不讲这个，但我的项目里已配置。如有需求。可自行"),e("a",{attrs:{href:"https://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"git-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-actions"}},[t._v("#")]),t._v(" git actions")]),t._v(" "),e("p",[t._v("请首先看这篇"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93829286",target:"_blank",rel:"noopener noreferrer"}},[t._v("说明"),e("OutboundLink")],1),t._v("。其中有几点注意事项：")]),t._v(" "),e("h4",{attrs:{id:"yaml文件配置之创建yaml文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml文件配置之创建yaml文件"}},[t._v("#")]),t._v(" yaml文件配置之创建yaml文件")]),t._v(" "),e("p",[t._v("在github项目tab栏点击actions，选择第一个模板。创建的模板yaml文件名字可以随意命名，比如main.yaml、cli.yaml等等（文件内容配置可看我的"),e("a",{attrs:{href:"https://github.com/QiYoe/c-blog/blob/main/.github/workflows/main.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflows配置"),e("OutboundLink")],1),t._v("）")]),t._v(" "),e("h4",{attrs:{id:"yaml文件配置之配置yaml文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml文件配置之配置yaml文件"}},[t._v("#")]),t._v(" yaml文件配置之配置yaml文件")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是项目主分支的名称，如果项目主分支名为master，此处就改为master")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个选项为手动触发actions，主要用于第一次第一次push没成功，然后手动触发actions事件")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#此处有两点注意：")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1、如果此处改为secrets.GITHUB_TOKEN，则无需额外配置ACCESS_TOKEN，但此种方法不安全而且无法兼容travis")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2、如果此处设为secrets.ACCESS_TOKEN，则需要配置ACCESS_TOKEN")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br")])]),e("h4",{attrs:{id:"yaml文件配置创建secrets-access-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml文件配置创建secrets-access-token"}},[t._v("#")]),t._v(" yaml文件配置创建secrets.ACCESS_TOKEN")]),t._v(" "),e("h5",{attrs:{id:"创建personal-access-token-个人访问令牌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建personal-access-token-个人访问令牌"}},[t._v("#")]),t._v(" 创建personal access token（个人访问令牌）")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网配置文档"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[e("strong",[t._v("创建token选择scopes一定选上"),e("code",[t._v("repo")]),t._v("和"),e("code",[t._v("workflow")]),t._v("，其他的自己看情况选择；最后获取到的token记得先"),e("code",[t._v("保存")]),t._v("下来")])])]),t._v(" "),e("h5",{attrs:{id:"创建secrets-access-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建secrets-access-token"}},[t._v("#")]),t._v(" 创建secrets.ACCESS_TOKEN")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93829286",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[e("strong",[t._v("name为"),e("code",[t._v("ACCESS_TOKEN")]),t._v("；value为刚才复制的值")])])]),t._v(" "),e("h4",{attrs:{id:"创建git-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建git-pages"}},[t._v("#")]),t._v(" 创建git pages")]),t._v(" "),e("h5",{attrs:{id:"创建站点仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建站点仓库"}},[t._v("#")]),t._v(" 创建站点仓库")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"创建项目gh-pages分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建项目gh-pages分支"}},[t._v("#")]),t._v(" 创建项目gh-pages分支")]),t._v(" "),e("p",[t._v("在github的项目上创建"),e("code",[t._v("gh_pages")]),t._v("分支。如不会，请自行"),e("a",{attrs:{href:"https://blog.csdn.net/qq_30607843/article/details/84404000",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"设置项目pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置项目pages"}},[t._v("#")]),t._v(" 设置项目pages")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.github.com/cn/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("source栏下的Branch选择为"),e("code",[t._v("gh-pages")]),t._v("，后面的选项选则"),e("code",[t._v("/(root)")]),t._v("，其他的都按官方文档")])]),t._v(" "),e("h4",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),e("h5",{attrs:{id:"method1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method1"}},[t._v("#")]),t._v(" Method1")]),t._v(" "),e("p",[t._v("本地push一次代码，然后看github上的actions的变化")]),t._v(" "),e("h5",{attrs:{id:"method2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method2"}},[t._v("#")]),t._v(" Method2")]),t._v(" "),e("p",[t._v("GitHub上随便修改一个文件内容，提交，然后观察github上的actions的变化")]),t._v(" "),e("h2",{attrs:{id:"go-for-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go-for-it"}},[t._v("#")]),t._v(" Go for it")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("阳光正好，未来可期")]),t._v("💪")])])])}),[],!1,null,null,null);a.default=r.exports}}]);