#/bin/bash
# 版本
VERSION=$(date "+%Y%m%d%H%M")
# 输出目录
OUTPUT_PATH='./output'
[ -d $OUTPUT_PATH ] || mkdir $OUTPUT_PATH
rm -rf $OUTPUT_PATH/*

env NODE_ENV=production webpack -p

if [ "$JS_ENV" = 'es6' ]; then
    env NODE_ENV=production webpack -p --config=webpack-es6.config.js
else
    env NODE_ENV=production webpack -p
fi

# 移动
mv ./asset $OUTPUT_PATH
cp -r ./dep $OUTPUT_PATH

cat index.tpl | sed "s#{version}#$VERSION#g" > $OUTPUT_PATH/index.tpl
cat login.tpl | sed "s#{version}#$VERSION#g" > $OUTPUT_PATH/login.tpl

echo 'build done'
