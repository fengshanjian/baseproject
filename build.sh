# @Author: will
# @Date:   2017-05-26T20:44:52+08:00
# @Filename: build.sh
# @Last modified by:   smartrabbit
# @Last modified time: 2017-05-27T09:50:16+08:00
#!/bin/sh

if [ "bundle" = "$1" ];then
    react-native bundle --entry-file index.ios.js --bundle-output ./ios/bundle/index.ios.jsbundle --platform ios --assets-dest ./ios/bundle --dev false
    react-native bundle --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.bundle --platform android --assets-dest ./android/app/src/main/res/ --dev false
else
    react-native init $1
    mv build.sh $1
    cd $1
    npm install mobx --save
    npm install mobx-react --save
    npm install mobx-form-validate --save
    npm install react-navigation --save
    if [ "-nl" = "$2" ];then
      echo 'without react-native-loader'
    else
      npm install react-native-loader --save
    fi
    npm install babel-plugin-transform-decorators-legacy --save-dev
    # 使 eslint 支持 AirBnb 编码规范和ES7 编码规范,
    export PKG=eslint-config-airbnb;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
    npm install babel-eslint --save-dev
    npm install react-native-splash-screen --save
    react-native link react-native-splash-screen
    git clone https://github.com/fengshanjian/demo_project.git
    mv demo_project src
    cd src
    rm -rf .git
    if [ "-nl" = "$2" ];then
      rm component/loginpage/LoginPage.js
      rm common/Loader.js
      mv component/loginpage/LoginPage2.js component/loginpage/LoginPage.js
    else
      rm component/loginpage/LoginPage2.js
    fi
    mv others/resource ../
    mv others/.babelrc ../
    mv others/.editorconfig ../
    mv others/.eslintrc ../
    mv others/.gitignore ../
    echo "AppRegistry.registerComponent('$1', () => RootApp);" >>others/index.android.js
    echo "AppRegistry.registerComponent('$1', () => RootApp);" >>others/index.ios.js
    mv others/index.android.js ../
    mv others/index.ios.js ../
    mv others/layout ../android/app/src/main/res/
    mv others/drawable-xxhdpi ../android/app/src/main/res/
    mv others/drawable-xhdpi ../android/app/src/main/res/
    mv others/LaunchImage.launchimage ../ios/$1/Images.xcassets/
    sed  "s/@TestProject/$1/g"  others/AppDelegate.m > others/AppDelegate.m.tmp
    mv others/AppDelegate.m.tmp others/AppDelegate.m
    mv others/AppDelegate.m ../ios/$1/

    sed  "s/@TestProject/$1/g"  others/MainActivity.java > others/MainActivity.java.tmp
    mv others/MainActivity.java.tmp others/MainActivity.java
    projectName=`echo $1 | tr A-Z a-z `
    mv others/MainActivity.java ../android/app/src/main/java/com/$projectName/
    rm -rf others
    sed  's/minifyEnabled enableProguardInReleaseBuilds/minifyEnabled true/g'  ../android/app/build.gradle > ../android/app/build.gradle.tmp
    mv ../android/app/build.gradle.tmp ../android/app/build.gradle
    mkdir ../ios/bundle
    mkdir ../android/app/src/main/assets/
fi
