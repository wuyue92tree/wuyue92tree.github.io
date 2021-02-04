(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{467:function(a,s,e){"use strict";e.r(s);var t=e(12),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"cdh集成tez计算引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdh集成tez计算引擎"}},[a._v("#")]),a._v(" CDH集成tez计算引擎")]),a._v(" "),e("blockquote",[e("p",[a._v("经测试tez在CDH集群环境中表现一般，经常出现找不到jar包的情况，故将之前的tez业务切换到"),e("code",[a._v("spark on yarn")]),a._v("，该教程仅供参考")])]),a._v(" "),e("p",[a._v("update at: 2020-05-09")]),a._v(" "),e("blockquote",[e("p",[a._v("CHD部署相关信息：http://note.youdao.com/noteshare?id=6bfb7bb2805ddedbc3e06816532d480b")])]),a._v(" "),e("h2",{attrs:{id:"软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件包"}},[a._v("#")]),a._v(" 软件包")]),a._v(" "),e("ul",[e("li",[a._v("maven")]),a._v(" "),e("li",[a._v("tez")]),a._v(" "),e("li",[a._v("Protobuf-2.5.0")])]),a._v(" "),e("h2",{attrs:{id:"编译环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译环境准备"}},[a._v("#")]),a._v(" 编译环境准备")]),a._v(" "),e("h3",{attrs:{id:"安装maven"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装maven"}},[a._v("#")]),a._v(" 安装maven")]),a._v(" "),e("blockquote",[e("p",[a._v("下载地址: http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -xvf apache-maven-3.6.3-bin.tar.gz\nsudo mv apache-maven-3.6.3 /usr/local/maven\n\n# 加入环境变量\nexport MVN_HOME=/usr/local/maven\nexport PATH=$MVN_HOME/bin:$PATH\n\n# 验证\nmvn -v\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h3",{attrs:{id:"安装protobuf-2-5-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装protobuf-2-5-0"}},[a._v("#")]),a._v(" 安装protobuf-2.5.0")]),a._v(" "),e("blockquote",[e("p",[a._v("下载地址：https://github.com/protocolbuffers/protobuf/releases/download/v2.5.0/protobuf-2.5.0.tar.gz")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -xvf protobuf-2.5.0.tar.gz\ncd protobuf-2.5.0\n\n# 编译依赖\nsudo yum install -y gcc make gcc-c++\n./configure\nmake\nsudo make install\n\n# 验证\nprotoc --version\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("h3",{attrs:{id:"安装tez"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装tez"}},[a._v("#")]),a._v(" 安装tez")]),a._v(" "),e("blockquote",[e("p",[a._v("下载地址：http://apache.claz.org/tez/0.9.2/apache-tez-0.9.2-src.tar.gz")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -xvf apache-tez-0.9.2-src.tar.gz \ncd apache-tez-0.9.2-src\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"修改pom-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改pom-xml"}},[a._v("#")]),a._v(" 修改pom.xml")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("在"),e("code",[a._v("properties")]),a._v("中修改hadoop版本为cdh版本\n"),e("img",{attrs:{src:"https://gitee.com/wuyue92tree/oss/raw/master/blog/BQu9J6.png",alt:""}})])]),a._v(" "),e("li",[e("p",[a._v("在"),e("code",[a._v("repositories")]),a._v("中添加cdh的maven库")])])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<repository>\n  <id>cloudera</id>\n  <url>https://repository.cloudera.com/artifactory/cloudera-repos/</url>\n  <name>Cloudera Repositories</name>\n  <snapshots>\n    <enabled>false</enabled>\n  </snapshots>\n </repository>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://gitee.com/wuyue92tree/oss/raw/master/blog/A6cnpG.png",alt:""}})]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("在"),e("code",[a._v("pluginRepositories")]),a._v("中添加cdh库")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<pluginRepository>\n  <id>cloudera</id>\n  <name>Cloudera Repositories</name>\n  <url>https://repository.cloudera.com/artifactory/cloudera-repos/</url>\n</pluginRepository>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://gitee.com/wuyue92tree/oss/raw/master/blog/nNSLho.png",alt:""}})]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("注释掉"),e("code",[a._v("modules")]),a._v("中下列模块\n"),e("img",{attrs:{src:"https://gitee.com/wuyue92tree/oss/raw/master/blog/YmxNb0.png",alt:""}})])]),a._v(" "),e("h4",{attrs:{id:"编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mvn clean package -DskipTests=true -Dmaven.javadoc.skip=true\n\n# 编译完成后，会在tez-dist/target中生成我们需要的文件\n╰─$ ll tez-dist/target \ntotal 78M\ndrwxrwxr-x 2 centos centos    6 Mar  4 14:42 archive-tmp\ndrwxrwxr-x 2 centos centos   28 Mar  4 14:43 maven-archiver\ndrwxrwxr-x 3 centos centos 4.0K Mar  4 14:42 tez-0.9.2\ndrwxrwxr-x 3 centos centos 4.0K Mar  4 14:43 tez-0.9.2-minimal\n-rw-rw-r-- 1 centos centos  13M Mar  4 14:43 tez-0.9.2-minimal.tar.gz\n-rw-rw-r-- 1 centos centos  65M Mar  4 14:43 tez-0.9.2.tar.gz\n-rw-rw-r-- 1 centos centos 2.8K Mar  4 14:43 tez-dist-0.9.2-tests.jar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("h4",{attrs:{id:"将tez部署到hdfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将tez部署到hdfs"}},[a._v("#")]),a._v(" 将tez部署到hdfs")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd tez-dist/target\n# 从hadoop lib jars中拷贝kryo-2.22.jar到tez文件夹下的lib文件夹下，否则会出现java.lang.ClassNotFoundException: com.esotericsoftware.kryo.Serializer异常\nsudo cp /opt/cloudera/parcels/CDH-6.3.2-1.cdh6.3.2.p0.1605554/jars/kryo-2.22.jar tez/tez-0.9.2/lib/\n\nhdfs dfs -mkdir -p /apps/tez-0.9.2\n\n# 在实际测试时，发现上传tez-0.9.2.tar.gz包在执行操作时，会引发yarn异常：org.apache.hadoop.yarn.exceptions.YarnException: Download and unpack failed，提示无法下载解压下面的压缩包，所以我直接将解压后的包put到了hdfs\n# hdfs dfs -put tez-0.9.2.tar.gz /apps/tez-0.9.2\n\nhdfs dfs -put tez-0.9.2 /apps/tez-0.9.2/\nhdfs dfs -chmod -R 777 /apps/tez-0.9.2/\nhdfs dfs -ls /apps/tez-0.9.2/\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("h4",{attrs:{id:"生成配置文件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成配置文件包"}},[a._v("#")]),a._v(" 生成配置文件包")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 操作目录为`tez-dist/target`\n\nsudo cp -r tez-0.9.2-mimimal tez\nsudo mkdir tez/conf\nsudo vi tez/conf/tez-site.xml\n# tez-site.xml内容===\n<configuration>\n    <property>\n        <name>tez.lib.uris</name>\n        <value>${fs.defaultFS}/apps/tez-0.9.2/tez-0.9.2/,${fs.defaultFS}/apps/tez-0.9.2/tez-0.9.2/lib/</value>\n    </property>\n    <property>\n          <name>tez.use.cluster.hadoop-libs</name>\n          <value>false</value>\n    </property>\n</configuration>\n# ===================\n\n# tez/lib中包含slf4j的jar包，会打印较多日志，可以在客户端中去掉slf4j-api-1.7.10.jar、slf4j-log4j12-1.7.10.jar这两个jar包，减少日志打印。\n\n# 至此客户端配置完成，将/opt/cloudera/parcels/CDH-6.3.2-1.cdh6.3.2.p0.1605554/lib/tez分发到所有节点，即完成客户端部署。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br")])]),e("h4",{attrs:{id:"配置hadoop-classpath-使tez生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置hadoop-classpath-使tez生效"}},[a._v("#")]),a._v(" 配置"),e("code",[a._v("HADOOP_CLASSPATH")]),a._v("，使tez生效")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wuyue92tree/oss/raw/master/blog/0Pih5s.png",alt:""}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 配置内容\nHADOOP_CLASSPATH=/opt/cloudera/parcels/CDH-6.3.2-1.cdh6.3.2.p0.1605554/lib/tez/conf:/opt/cloudera/parcels/CDH-6.3.2-1.cdh6.3.2.p0.1605554/lib/tez/*:/opt/cloudera/parcels/CDH-6.3.2-1.cdh6.3.2.p0.1605554/lib/tez/lib/*\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("保存后，重启集群。")]),a._v(" "),e("h2",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),e("p",[a._v("如下便是成功了~")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("hive> set hive.execution.engine=tez;\nhive> set hive.tez.container.size=4096;\nhive> select count(1) from stg.s_crm_leads_origin;\nQuery ID = centos_20200305181459_dc52801d-f3c0-41a3-905c-97679a8f11ff\nTotal jobs = 1\nLaunching Job 1 out of 1\n\n\nStatus: Running (Executing on YARN cluster with App id application_1583397767119_0013)\n\n----------------------------------------------------------------------------------------------\n        VERTICES      MODE        STATUS  TOTAL  COMPLETED  RUNNING  PENDING  FAILED  KILLED  \n----------------------------------------------------------------------------------------------\nMap 1 .......... container     SUCCEEDED      1          1        0        0       0       0  \nReducer 2 ...... container     SUCCEEDED      1          1        0        0       0       0  \n----------------------------------------------------------------------------------------------\nVERTICES: 02/02  [==========================>>] 100%  ELAPSED TIME: 6.24 s     \n----------------------------------------------------------------------------------------------\nOK\n85724\nTime taken: 21.222 seconds, Fetched: 1 row(s)\nhive> \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br")])]),e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[a._v("#")]),a._v(" FAQ")]),a._v(" "),e("ol",[e("li",[a._v("在测试的时候，这个问题花了我大半天的时间，后面发先竟然是hive的锅。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Status: Failed\nVertex failed, vertexName=Map 1, vertexId=vertex_1583397767119_0010_1_00, diagnostics=[Vertex vertex_1583397767119_0010_1_00 [Map 1] killed/failed due to:ROOT_INPUT_INIT_FAILURE, Vertex Input: s_crm_leads_origin initializer failed, vertex=vertex_1583397767119_0010_1_00 [Map 1], java.lang.ArithmeticException: / by zero\n        at org.apache.hadoop.hive.ql.exec.tez.HiveSplitGenerator.initialize(HiveSplitGenerator.java:179)\n        at org.apache.tez.dag.app.dag.RootInputInitializerManager$InputInitializerCallable$1.run(RootInputInitializerManager.java:278)\n        at org.apache.tez.dag.app.dag.RootInputInitializerManager$InputInitializerCallable$1.run(RootInputInitializerManager.java:269)\n        at java.security.AccessController.doPrivileged(Native Method)\n        at javax.security.auth.Subject.doAs(Subject.java:422)\n        at org.apache.hadoop.security.UserGroupInformation.doAs(UserGroupInformation.java:1875)\n        at org.apache.tez.dag.app.dag.RootInputInitializerManager$InputInitializerCallable.call(RootInputInitializerManager.java:269)\n        at org.apache.tez.dag.app.dag.RootInputInitializerManager$InputInitializerCallable.call(RootInputInitializerManager.java:253)\n        at java.util.concurrent.FutureTask.run(FutureTask.java:266)\n        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n        at java.lang.Thread.run(Thread.java:748)\n]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("p",[a._v("解决方案：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 设置hive.tez.container.size，默认值是-1，大坑一个\nset hive.tez.container.size=4096;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);