#/bin/bash

env=$1

ps -a | grep 'edp webserver' | grep -v 'grep' | cut -d " " -f2 | xargs kill
NODE_ENV=$env edp webserver start &

if [ "$env" != 'preview' ]; then
    if [ "$JS_ENV" = 'es6' ]; then
        webpack-dev-server --config=webpack-es6.config.js --inline --hot
    else
        webpack-dev-server --inline --hot
    fi
fi
