# xmpush-api
支持小米v3版本，只实现推送到android，Alias消息, UserAccount消息(单个用户消息),广播消息(使用Topic)

使用的小米的官方信息有：
https://dev.mi.com/console/doc/detail?pId=1163

我司一开始使用的是alias消息，所以这个是测试过，可以参考examples里面的用例；
我司现在使用的是：UserAccount消息(单个用户消息),广播消息(使用Topic)

# Installation
using npm:

``` bash
npm install --save xmpush-api
```

In Node.js

``` bash
var SendUserAccountMessage = require('xmpush-api').SendUserAccountMessage;

SendAliasMessage('your appSecret', {
    payload: 'hello workd',
    title: 'hello workd',
    description: 'hello workd',
    notifyType: 5,
    restrictedPackageNames: ['your apk name'],
    passThrough: 0, //0: 通知栏消息，1: 透传消息
    notifyId : -1,
    alias: 'wolrd',
    extra: {
        'notify_foreground': 1,
        'notify_effect': 2,
        'click_intent_uri': 'hahhahha'
    }
}, function(err, body, res) {
    console.log('err-> %j', err);
    console.log('body-> %j', body);
    console.log('res-> %j', res);
})
```
