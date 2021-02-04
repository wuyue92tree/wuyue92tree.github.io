(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{465:function(s,n,e){"use strict";e.r(n);var a=e(12),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"简单示例-helloworld"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单示例-helloworld"}},[s._v("#")]),s._v(" 简单示例 helloworld")]),s._v(" "),e("h2",{attrs:{id:"flume配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flume配置文件"}},[s._v("#")]),s._v(" flume配置文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# angent名称为`demo`\n\n# sources/channels/sinks分别为r1/c1/k1\ndemo.sources  = r1\ndemo.channels = c1\ndemo.sinks    = k1\n\n# 以netcat为例，监听socket接口`9999`输入\ndemo.sources.r1.type     = netcat\ndemo.sources.r1.bind     = 127.0.0.1\ndemo.sources.r1.port     = 9999\n\ndemo.channels.c1.type = memory\ndemo.channels.c1.capacity = 1000\ndemo.channels.c1.transactionCapacity = 100\n\n# 将采集到的日志直接输出到flume日志中\ndemo.sinks.k1.type         = logger\n\n\ndemo.sources.r1.channels   = c1\ndemo.sinks.k1.channel      = c1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h2",{attrs:{id:"启动flume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动flume"}},[s._v("#")]),s._v(" 启动flume")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("./bin/flume-ng agent -c conf -f conf/flume-conf.properties -name demo -Dflume.root.logger"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INFO,console\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("telnet localhost "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入`helloworld`，回车")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查日志中是否输出了`helloworld`")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-05-11 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":03:47,544 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SinkRunner-PollingRunner-DefaultSinkProcessor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO - org.apache.flume.sink.LoggerSink.process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LoggerSink.java:95"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Event: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" headers:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" body: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("68")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v(" 6C 6C 6F "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(" 6F "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v(" 6C "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" 0D                helloworld. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h1",{attrs:{id:"flume输出到hdfs示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flume输出到hdfs示例"}},[s._v("#")]),s._v(" flume输出到hdfs示例")]),s._v(" "),e("p",[s._v("以nginx日志为例，将nginx日志通过flume采集到hdfs中")]),s._v(" "),e("h2",{attrs:{id:"一级flume配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一级flume配置文件"}},[s._v("#")]),s._v(" 一级flume配置文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# angent名称为`demo_hdfs`\n\n# sources/channels/sinks分别为r1/c1/k1\ndemo_hdfs.sources  = r1\ndemo_hdfs.channels = c1\ndemo_hdfs.sinks    = k1\n\ndemo_hdfs.sources.r1.type = TAILDIR\ndemo_hdfs.sources.r1.positionFile     = /bigdata/flume/taildir_position.json\ndemo_hdfs.sources.r1.filegroups     = f1 f2\ndemo_hdfs.sources.r1.filegroups.f1 = /var/log/nginx/access.log\n\ndemo_hdfs.channels.c1.type = memory\ndemo_hdfs.channels.c1.capacity = 1000\ndemo_hdfs.channels.c1.transactionCapacity = 100\n\n# 将采集到的日志直接输出到`二级flume`中\ndemo_hdfs.sinks.k1.type         = avro\ndemo_hdfs.sinks.k1.hostname = 10.0.4.60\ndemo_hdfs.sinks.k1.port = 54321\n\n\ndemo_hdfs.sources.r1.channels   = c1\ndemo_hdfs.sinks.k1.channel      = c1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h2",{attrs:{id:"二级flume配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二级flume配置文件"}},[s._v("#")]),s._v(" 二级flume配置文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# angent名称为`demo_hdfs`\n\n# sources/channels/sinks分别为r1/c1/k1\ndemo_hdfs.sources  = r1\ndemo_hdfs.channels = c1\ndemo_hdfs.sinks    = k1 k2\n\ndemo_hdfs.sources.r1.type = avro\ndemo_hdfs.sources.r1.bind = 0.0.0.0\ndemo_hdfs.sources.r1.port = 54321\n\ndemo_hdfs.channels.c1.type = memory\ndemo_hdfs.channels.c1.capacity = 1000\ndemo_hdfs.channels.c1.transactionCapacity = 1000\n\n# 将采集到的日志直接输出到flume日志中\ndemo_hdfs.sinks.k1.type = hdfs\ndemo_hdfs.sinks.k1.hdfs.path = /test/nginx_log\ndemo_hdfs.sinks.k1.hdfs.filePrefix = web_access_log\ndemo_hdfs.sinks.k1.hdfs.rollInterval = 600\ndemo_hdfs.sinks.k1.hdfs.rollSize  = 0\ndemo_hdfs.sinks.k1.hdfs.rollCount = 0\ndemo_hdfs.sinks.k1.hdfs.round = true\ndemo_hdfs.sinks.k1.hdfs.roundValue = 30\ndemo_hdfs.sinks.k1.hdfs.roundUnit = minute\ndemo_hdfs.sinks.k1.hdfs.useLocalTimeStamp = false\ndemo_hdfs.sinks.k1.hdfs.writeFormat = Text\ndemo_hdfs.sinks.k1.hdfs.fileType = DataStream\ndemo_hdfs.sinks.k1.hdfs.batchSize = 1000\n\n# 将采集到的日志直接输出到flume日志中\n# demo.sinks.k2.type         = logger\n\n\ndemo_hdfs.sources.r1.channels   = c1\ndemo_hdfs.sinks.k1.channel      = c1\n# demo_hdfs.sinks.k2.channel      = c1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])]),e("h2",{attrs:{id:"启动flume-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动flume-2"}},[s._v("#")]),s._v(" 启动flume")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("./bin/flume-ng agent -c conf -f conf/flume-conf.properties -name demo_hdfs -Dflume.root.logger"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INFO,console\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);