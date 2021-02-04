(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{460:function(e,r,i){"use strict";i.r(r);var n=i(12),s=Object(n.a)({},(function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",[e._v("介绍")]),e._v(" "),i("p",[e._v("Selenium是一个用于Web应用程序测试的工具。Selenium测试直接运行在浏览器中，就像真正的用户在操作一样。支持的浏览器包括IE（7, 8, 9, 10, 11），Mozilla Firefox，Safari，Google Chrome，Opera等。这个工具的主要功能包括：测试与浏览器的兼容性——测试你的应用程序看是否能够很好得工作在不同浏览器和操作系统之上。测试系统功能——创建回归测试检验软件功能和用户需求。支持自动录制动作和自动生成 .Net、Java、Perl等不同语言的测试脚本。")]),e._v(" "),i("h1",[e._v("软件清单")]),e._v(" "),i("ul",[i("li",[e._v("docker")]),e._v(" "),i("li",[e._v("selenium/hub")]),e._v(" "),i("li",[e._v("selenium/node-firefox")]),e._v(" "),i("li",[e._v("selenium/node-firefox-debug")]),e._v(" "),i("li",[e._v("selenium/node-chrome")]),e._v(" "),i("li",[e._v("selenium/node-chrome-debug")]),e._v(" "),i("li",[e._v("python模块：selenium-3.6.0\n"),i("h1",[e._v("部署")]),e._v(" "),i("h2",[e._v("安装docker")]),e._v(" "),i("p",[e._v("rancher推荐安装脚本")])])]),e._v(" "),i("p",[i("a",{attrs:{href:"http://rancher.com/docs/rancher/v1.6/en/hosts/#supported-docker-versions"}},[e._v("http://rancher.com/docs/rancher/v1.6/en/hosts/#supported-docker-versions")])]),e._v(" "),i("pre",[i("code",[e._v("# 安装过程中提示输入管理员密码\n"),i("p",[e._v("curl https://releases.rancher.com/install-docker/17.12.sh | sh")]),e._v("\n"),i("h1",{attrs:{id:"完成后可将当前账户加入docker组中-免去输入sudo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#完成后可将当前账户加入docker组中-免去输入sudo"}},[e._v("#")]),e._v(" 完成后可将当前账户加入docker组中，免去输入sudo")])])]),e._v(" "),i("h2",[e._v("pull镜像")]),e._v(" "),i("pre",[i("code",[e._v("# hub\ndocker pull selenium/hub\n"),i("h1",{attrs:{id:"node-with-vncserver-default-password-secret"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#node-with-vncserver-default-password-secret"}},[e._v("#")]),e._v(" node with vncserver; default password: secret")]),e._v("\n"),i("p",[e._v("docker pull selenium/node-firefox-debug\ndocker pull selenium/node-chrome-debug")])])]),e._v(" "),i("h2",[e._v("启动")]),e._v(" "),i("pre",[i("code",[e._v("# hub\ndocker run -d -p 4444:4444 --name selenium-hub selenium/hub"),i("p"),e._v("\n"),i("h1",{attrs:{id:"node-the-same-host-with-hub"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#node-the-same-host-with-hub"}},[e._v("#")]),e._v(" node the same host with hub")]),e._v("\n"),i("p",[e._v("docker run -d -P -p 5901:5900 --link selenium-hub selenium/node-firefox-debug\ndocker run -d -P -p 5902:5900 --link selenium-hub selenium/node-chrome-debug")]),e._v("\n"),i("h1",{attrs:{id:"node-the-diff-host-with-hub"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#node-the-diff-host-with-hub"}},[e._v("#")]),e._v(" node the diff host with hub")]),e._v("\n"),i("p",[e._v("docker run -d -P -p 5901:5900 -e HUB_HOST=<hub_host> -e HUB_PORT=<hub_port> selenium-hub selenium/node-firefox-debug\ndocker run -d -P -p 5901:5900 -e HUB_HOST=<hub_host> -e HUB_PORT=<hub_port> selenium-hub selenium/node-chrome-debug")]),e._v("\n"),i("h1",{attrs:{id:"setup-shm-size"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setup-shm-size"}},[e._v("#")]),e._v(" setup --shm-size")]),e._v("\n"),i("p",[e._v("docker run --shm-size=2g -d -P -p 5901:5900 -e HUB_HOST=<hub_host> -e HUB_PORT=<hub_port> selenium-hub selenium/node-firefox-debug\ndocker run --shm-size=2g -d -P -p 5901:5900 -e HUB_HOST=<hub_host> -e HUB_PORT=<hub_port> selenium-hub selenium/node-chrome-debug")])])]),e._v(" "),i("h2",[e._v("测试")]),e._v(" "),i("h3",[e._v("python模块")]),e._v(" "),i("pre",[i("code",[e._v("pip install selenium==3.6.0")])]),e._v(" "),i("h3",[e._v("测试示例")]),e._v(" "),i("p",[e._v("chrome")]),e._v(" "),i("pre",[i("code",[e._v("import time\nfrom selenium import webdriver"),i("p"),e._v("\n"),i("p",[e._v('def main():\nchrome_options = webdriver.ChromeOptions()\ndesired_capabilities = chrome_options.to_capabilities()\ndriver = webdriver.Remote(\ncommand_executor="http://127.0.0.1:4444/wd/hub",\ndesired_capabilities=desired_capabilities\n)\n# driver.set_page_load_timeout(300)\ndriver.set_window_position(1280, 900)')]),e._v("\n"),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("try:\n    print(&#039;begin&#039;)\n    driver.get(&#039;https://www.baidu.com&#039;)\n    print driver.page_source\n    time.sleep(60)\n    print(&#039;finish&#039;)\nexcept Exception as e:\n    print(e)\n\nfinally:\n    driver.close()\n    driver.quit()\n")])])]),i("p",[e._v("if "),i("strong",[e._v("name")]),e._v(" == '"),i("strong",[e._v("main")]),e._v("':\nmain()")])])]),e._v(" "),i("p",[e._v("firefox")]),e._v(" "),i("pre",[i("code",[e._v("import time\nfrom selenium import webdriver\nfrom selenium.webdriver import DesiredCapabilities"),i("p"),e._v("\n"),i("p",[e._v('def main():\nfirefox_profile = webdriver.FirefoxProfile()\nfirefox_profile.update_preferences()\ndesired_capabilities = DesiredCapabilities.FIREFOX\ndriver = webdriver.Remote(\ncommand_executor="http://127.0.0.1:4444/wd/hub",\ndesired_capabilities=desired_capabilities,\nbrowser_profile=firefox_profile,\n)\n# driver.set_page_load_timeout(300)\ndriver.set_window_position(1280, 900)')]),e._v("\n"),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("try:\n    print(&#039;begin&#039;)\n    driver.get(&#039;https://www.baidu.com&#039;)\n    print driver.page_source\n    time.sleep(60)\n    print(&#039;finish&#039;)\nexcept Exception as e:\n    print(e)\n\nfinally:\n    driver.close()\n    driver.quit()\n")])])]),i("p",[e._v("if "),i("strong",[e._v("name")]),e._v(" == '"),i("strong",[e._v("main")]),e._v("':\nmain()")])])]),i("p")])}),[],!1,null,null,null);r.default=s.exports}}]);