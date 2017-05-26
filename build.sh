# @Author: will
# @Date:   2017-05-26T20:44:52+08:00
# @Filename: build.sh
# @Last modified by:   smartrabbit
# @Last modified time: 2017-05-26T21:45:04+08:00


react-native init $1
cd $1
npm install mobx --save
npm install mobx-react --save
npm install mobx-form-validate --save
npm install react-navigation --save
npm install react-native-loader --save
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
sed  's/@TestProject/$1/g'  /others/AppDelegate.m > /others/AppDelegate.m.tmp
mv /others/AppDelegate.m.tmp /others/AppDelegate.m
mv others/AppDelegate.m ../ios/$1/

sed  's/@TestProject/$1/g'  /others/MainActivity.java > /others/MainActivity.java.tmp
mv /others/MainActivity.java.tmp /others/MainActivity.java
projectName=`echo $1 | tr A-Z a-z `
mv others/MainActivity.java ../android/app/src/main/java/com/$projectName/
rm -rf others

sed  's/minifyEnabled enableProguardInReleaseBuilds/minifyEnabled true/g'  ../android/app/build.gradle > ../android/app/build.gradle.tmp
mv../android/app/build.gradle.tmp ../android/app/build.gradle


