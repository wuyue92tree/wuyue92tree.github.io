(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{485:function(s,a,n){"use strict";n.r(a);var t=n(12),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[s._v("org开源")]),s._v(" "),n("p",[s._v("com私有")]),s._v(" "),n("h1",{attrs:{id:"步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),n("h2",{attrs:{id:"创建gh-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建gh-token"}},[s._v("#")]),s._v(" 创建GH_TOKEN")]),s._v(" "),n("ol",[n("li",[s._v("打开 https://github.com/settings/tokens")]),s._v(" "),n("li",[s._v("点击 Personal access tokens")]),s._v(" "),n("li",[s._v("点击 Generate new token")]),s._v(" "),n("li",[s._v("勾选repo选项框，并输入名字，点击Generate token")]),s._v(" "),n("li",[s._v("生成的token只会显示一次，复制保存以备用")])]),s._v(" "),n("h2",{attrs:{id:"关联github账号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关联github账号"}},[s._v("#")]),s._v(" 关联github账号")]),s._v(" "),n("ol",[n("li",[s._v("打开 https://travis-ci.org")]),s._v(" "),n("li",[s._v("使用github登录")])]),s._v(" "),n("h2",{attrs:{id:"关联github-repo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关联github-repo"}},[s._v("#")]),s._v(" 关联github repo")]),s._v(" "),n("ol",[n("li",[s._v("打开 https://travis-ci.org/account/repositories")]),s._v(" "),n("li",[s._v("选中要执行ci的repo")])]),s._v(" "),n("h2",{attrs:{id:"配置gh-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置gh-token"}},[s._v("#")]),s._v(" 配置GH_TOKEN")]),s._v(" "),n("ol",[n("li",[s._v("打开 https://travis-ci.org/wuyue92tree/beyondWeb/settings")]),s._v(" "),n("li",[s._v("配置GH_TOKEN及其他选项")])]),s._v(" "),n("h2",{attrs:{id:"生成travis-api-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成travis-api-key"}},[s._v("#")]),s._v(" 生成travis api_key")]),s._v(" "),n("ol",[n("li",[s._v("安装travis客户端")]),s._v(" "),n("li",[s._v("认证及生成api_key")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("travis login\ntravis setup releases -r wuyue92tree/beyondWeb --org -f\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"travis-yml示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#travis-yml示例"}},[s._v("#")]),s._v(" .travis.yml示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# .travis.yml\nosx_image: xcode8.3\nsudo: required\ndist: trusty\nlanguage: c\nmatrix:\n  include:\n  - os: osx\n  - os: linux\n    env: CC=clang CXX=clang++ npm_config_clang=1\n    compiler: clang\ncache:\n  directories:\n  - node_modules\n  - &quot;$HOME/.electron&quot;\n  - &quot;$HOME/.cache&quot;\naddons:\n  apt:\n    packages:\n    - libgnome-keyring-dev\n    - icnsutils\nbefore_install:\n- mkdir -p /tmp/git-lfs &amp;&amp; curl -L https://github.com/github/git-lfs/releases/download/v1.2.1/git-lfs-$([\n  &quot;$TRAVIS_OS_NAME&quot; == &quot;linux&quot; ] &amp;&amp; echo &quot;linux&quot; || echo &quot;darwin&quot;)-amd64-1.2.1.tar.gz\n  | tar -xz -C /tmp/git-lfs --strip-components 1 &amp;&amp; /tmp/git-lfs/git-lfs pull\n- if [[ &quot;$TRAVIS_OS_NAME&quot; == &quot;linux&quot; ]]; then sudo apt-get install --no-install-recommends -y icnsutils graphicsmagick xz-utils; fi\ninstall:\n- nvm install 10\n- curl -o- -L https://yarnpkg.com/install.sh | bash\n- source ~/.bashrc\n- npm install -g xvfb-maybe\n- yarn\nscript:\n- yarn run build\n\ndeploy:\n  provider: releases\n  skip_cleanup: true\n  api_key:\n    secure: NHyEKpcM4J7AF/6JvAN7pdF16LrLM4rYlRS5bt+BQ2h1xE8rDzIhASy1DKt2ByYvvgXOd1OBJVHN69SQm2fDt8XD7Hi21w8G+es2COO6nCdW96EinhkoLEHzrnSkaD0enlRsbwNau3p6BNRvciqQG/xRraeDn0hMF/9DcffrATSY0nxlqGdgOXheaedtXw2MMtgQbIBffyfJ50cNhpAVm6c8fB6fEJF1tAbhVjtG1oPqGTkzuoZfjnAHq5qTj2A5BYchsI0pZrcPSuncfewCnbGGRpXLd5Ojkn4ys+XtMuEVW/enlpy5CBw6VlkWoA5a1lMF8G/P+h2g99Pzy9gNtADJNOF3pr/gebJdBSrnbFcZ6egWW5VT9CR7XA2/68bGCJwKNWdf2YdItxt6KNzFWKOmZG5fCxBbEXnAyccKZwU/BZVKUZwFIc8F03uAAkrrDg4BbyqujDhCRDm2IkcxZhmKUtu2SMlBCVOO78jHxvipVMdYt19VyCNWFlgFYqST4XBRJCdbCPJEWhyPK88kv3T9SeG7woKycjBM8dqAfPKlsARjTnITWC3+t1QdxwT525bYHLZbnlxSIh+AtQ5JoAgGVRoF+vYxHyoSr5fWo+ikrpaL+dawjk4IwpcAaHW7f+ceIWtFk1dObcfPDR/OAJqYgNyY+SP5U+Jh9bMpTGs=\n  on:\n    repo: wuyue92tree/beyondWeb\n    tag: true\n    all_branches: true\nbranches:\n  except:\n  - develop\n  - master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);