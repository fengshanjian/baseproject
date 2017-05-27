# demo-project

使用方法

1、下载工程里面的build.sh放置到工作空间


2、运行脚本


基本使用

#sh build.sh {ProjectName}


不使用react-native-loader

#sh build.sh {ProjectName} -nl


注：

(1)、使用react-native-loader，ios版本需要手动添加Library:ART,添加方法参考http://facebook.github.io/react-native/releases/0.44/docs/linking-libraries-ios.html#linking-libraries  ,ART目录在node_modules/react-native/Library/ART/ART.xcodeproj

(2)、ios需要设置启动页为Image,并选择LaunchImage


脚本打包

#cd ProjectName

#sh build.sh bundle


自动完成ios与android的打包，ios需要手动添加文件到工程
