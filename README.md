# create-react-native-project


该项目完成的主要工作有

```
(1)、初始化rn工程

(2)、安装mobx并配置

(3)、配置eslint

(4)、添加导航器

(5)、登录、主页等逻辑
```

##使用方法

1、下载工程里面的build.sh放置到工作空间

```js
curl -O https://raw.githubusercontent.com/fengshanjian/baseproject/master/build.sh

```

2、运行脚本


基本使用

```js
sh build.sh {ProjectName}

```

##注：

(1)、ios需要设置启动页为Image,并选择LaunchImage

(2)、ios添加CustomApi.h和.m文件到工程

(3)、android需要在androidManifest.xml中添加

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE/>
```



##脚本打包

```js
cd ProjectName

#打android和ios包

sh build.sh bundle  

#打ios包

sh build.sh ios

#打android包

sh build.sh android

```

自动完成ios与android的打包，ios需要手动添加文件到工程




