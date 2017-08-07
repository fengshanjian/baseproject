# baseproject


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

(1)、使用react-native-loader，ios版本需要手动添加Library:ART,添加方法参考http://facebook.github.io/react-native/releases/0.44/docs/linking-libraries-ios.html#linking-libraries  ,ART目录在node_modules/react-native/Library/ART/ART.xcodeproj

(2)、ios需要设置启动页为Image,并选择LaunchImage

(3)、ios添加CustomApi.h和.m文件到工程

(4)、android需要在androidManifest.xml中添加

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




##android返回键适配
由于采用react-navigation作为导航器，导航器默认监听了安卓的返回按钮，但是在首页返回时并不能返回到桌面

所以在```react-navigation```的```src```目录下的```createNavigationContainer.js```文件中在back监听的代码中加入自己想做的监听

例如我们在```react-navigation 1.0.0-beta.12```的```createNavigationContainer.js```文件的154行修改如下：

原来代码

```
 this.subs = BackHandler.addEventListener('hardwareBackPress', () =>
    this.dispatch(NavigationActions.back())
 );
      
```

修改代码

```
  this.subs = BackHandler.addEventListener('hardwareBackPress', () => {         
    const { nav } = this.state;
    if (nav.routes[nav.index].routeName === 'MainApp'||nav.routes[nav.index].routeName === 'LoginPage') {
       NativeModules.CustomApi.exitApp();
       return false;
    }
    else {
       return this.dispatch(NavigationActions.back());
    }
 });
 ```



