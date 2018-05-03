# create-react-native-project


该项目完成的主要工作有

```
(1)、初始化rn工程

(2)、安装mobx并配置

(3)、配置eslint

(4)、添加导航器

(5)、npm安装工程基本所需的组件库

(6)、登录、主页等逻辑
```

## 使用方法


1、下载工程里面的build.sh放置到工作空间

```js
curl -O https://raw.githubusercontent.com/fengshanjian/create-react-native-project/master/build.sh

```

2、运行脚本


基本使用

```js
sh build.sh {ProjectName}

```

#### 注：

(1)、ios需要设置启动页为Image,并选择LaunchImage

(2)、ios添加CustomApi.h和.m文件到工程

(3)、android需要在androidManifest.xml中添加

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE/>
```



## 脚本打包

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

## 使用详解

### 1、选择根导航模式

```SwitchNavigator```为App的主入口导航器(建议先去了解下SwitchNavigator的操作流程)

```AuthLoading```为鉴权等待页面

```Auth```为鉴权页面(如果鉴权页面为多个页面，则需该项为Stack导航器对象)

```MainApp```为用户登录后的所有页面

1、使用Stack栈导航为home

```
AppSwitch.js

SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    MainApp: AppStack,
    Auth: LoginPage,
  }
  ...
```

2、使用Tab导航为home

```
AppSwitch.js

SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    MainApp: AppDraw,
    Auth: LoginPage,
  }
  ...
```

3、使用Draw抽屉导航为home

```
AppStack.js

 StackNavigator({
  AppTab: { screen: AppTab, navigationOptions: { headerLeft: null, headerRight: null } },
  ChildPage: { screen: ChildPage },
}
...
```
### 2、组件使用
1、该工程集成了```react-native-elements```, 所以工程的UI组件尽可能的使用该组件库的组件，其次是为系统组件

2、工程中同时集成了```teaset```组件库，如果组件在```react-native-elements```找不到，可参考该库（例如```Toast```组件），工程中的common文件夹中的```Loader```也是基于```Toast```实现的

3、工程集成了```react-native-vector-icons```，所以很多图标都可以直接使用矢量图标，省去一些美工成本

### 3、工程目录
1、```main```目录

   该目录是App的入口，以及存放各种导航器
   
2、```common```目录

   该目录存放一些常量以及通用型Api
    
3、```config```目录

   该目录存放app的各种配置型变量的文件
   
4、```http```目录
   
   网络请求
   
5、```screen```目录

   各个页面
   
