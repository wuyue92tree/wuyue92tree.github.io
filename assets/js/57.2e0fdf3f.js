(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{473:function(s,a,n){"use strict";n.r(a);var e=n(12),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[s._v("Splash是一个Javascript渲染服务。它是一个实现了HTTP API的轻量级浏览器，Splash是用Python实现的，同时使用Twisted和QT。Twisted（QT）用来让服务具有异步处理能力，以发挥webkit的并发能力。")]),s._v(" "),n("h1",{attrs:{id:"服务器部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器部署"}},[s._v("#")]),s._v(" 服务器部署")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run -p 5023:5023 -p 8050:8050 -p 8051:8051 scrapinghub/splash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h1",{attrs:{id:"代码示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[s._v("#")]),s._v(" 代码示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# splash server 地址\nsplash_url = 'http://splash.server/render.html'\n\ndef splash_render(self, url, cookies=None, proxy=None, wait=5):\n        \"\"\"\n        splash请求\n        :param url:\n        :param cookies: dict like {'a': '1', 'b': 'c'}\n        :param proxy: string like '127.0.0.1:1080'\n        :param wait: int\n        :return:\n        \"\"\"\n        headers = {\n            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) '\n                          'AppleWebKit/537.36 (KHTML, like Gecko) '\n                          'Chrome/72.0.3626.119 Safari/537.36',\n        }\n\n        if cookies:\n            headers['Cookie'] = cookie2str(cookies)\n\n        args = {\n            'url': url,\n            'wait': wait,\n            'headers': headers,\n        }\n        if proxy:\n            args['proxy'] = 'http://{}'.format(proxy)\n        return requests.post(splash_url, json=args)\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);