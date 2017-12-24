var querystring = require('querystring');

var message = {};

var defaultMsg = {
    payload: '',
    title: '',
    description: '',
    notifyType: -1,
    restrictedPackageNames: [],
    passThrough: 0, //0: 通知栏消息，1: 透传消息
    notifyId : 0,
    extra: []
}
//解析alias发送的数据
message.parseAliasMessage = function(options) {
    if (!options.payload || options.payload.length == 0) {
        return { status: 1, message: 'payload参数必须存在'};
    }
    if (!options.title || options.title.length == 0) {
        return { status: 1, message: 'title参数必须存在'};
    }
    if (!options.description || options.description.length == 0) {
        return { status: 1, message: 'description参数必须存在'};
    }
    if (!options.restrictedPackageNames || options.restrictedPackageNames.length == 0) {
        if (options.restrictedPackageName && options.restrictedPackageName.trim().length > 0) {
            options.restrictedPackageNames.push(options.restrictedPackageName.trim());
        } else {
            return { status: 1, message: 'restrictedPackageNames/restrictedPackageName参数必须存在'};
        }
    }
    if ( !options.passThrough ) {
        options.passThrough = 0;
    }
    if( !options.notifyId ) {
        options.notifyId = 0;
    }
    if( !options.notifyType ) {
        options.notifyType = 0;
    }
    if (!options.alias) {
        return { status:1, message: 'alias参数必须存在'};
    }
    MessageFormat = require('messageformat')
    var mfunc = new MessageFormat('en').
        compile('payload={0}&title={1}&description={2}&restrictedPackageNames={3}&passThrough={4}' + 
                    '&notifyId={5}&notifyType={6}&alias={7}' + 
                    (options.extra ? '&extra.notify_foreground={8}&extra.notify_effect={9}&extra.intent_uri={10}' : '') + 
                    (options.extra && options.extra.imgPath ? '&imgPath={11}' : ''));
    var postData = mfunc({
        0: encodeURIComponent(options.payload),
        1: encodeURIComponent(options.title),
        2: encodeURIComponent(options.description),
        3: encodeURIComponent(JSON.stringify(options.restrictedPackageNames)),
        4: options.passThrough,
        5: options.notifyId,
        6: options.notifyType,
        7: options.alias,
        8: (options.extra && options.extra.notify_foreground == 0) ? 0 : options.extra.notify_foreground,
        9: options.extra.notify_effect || 2,
        10: encodeURIComponent(options.extra.intent_uri || ''),
        11: encodeURIComponent( options.extra.imgPath || '')
    });
    return { status:0, message: postData };
}

//解析user_account发送的数据
message.parseUserAccountMessage = function(options) {
    if (!options.payload || options.payload.length == 0) {
        return { status: 1, message: 'payload参数必须存在'};
    }
    if (!options.title || options.title.length == 0) {
        return { status: 1, message: 'title参数必须存在'};
    }
    if (!options.description || options.description.length == 0) {
        return { status: 1, message: 'description参数必须存在'};
    }
    if (!options.restrictedPackageNames || options.restrictedPackageNames.length == 0) {
        if (options.restrictedPackageName && options.restrictedPackageName.trim().length > 0) {
            options.restrictedPackageNames.push(options.restrictedPackageName.trim());
        } else {
            return { status: 1, message: 'restrictedPackageNames/restrictedPackageName参数必须存在'};
        }
    }
    if ( !options.passThrough ) {
        options.passThrough = 0;
    }
    if( !options.notifyId ) {
        options.notifyId = 0;
    }
    if( !options.notifyType ) {
        options.notifyType = 0;
    }
    if (!options.user_account) {
        return { status:1, message: 'user_account参数必须存在'};
    }
    MessageFormat = require('messageformat')
    var mfunc = new MessageFormat('en').
        compile('payload={0}&title={1}&description={2}&restrictedPackageNames={3}&passThrough={4}' + 
                    '&notifyId={5}&notifyType={6}&user_account={7}' + 
                    (options.extra ? '&extra.notify_foreground={8}&extra.notify_effect={9}&extra.intent_uri={10}' : ''));
    var postData = mfunc({
        0: encodeURIComponent(options.payload),
        1: encodeURIComponent(options.title),
        2: encodeURIComponent(options.description),
        3: encodeURIComponent(JSON.stringify(options.restrictedPackageNames)),
        4: options.passThrough,
        5: options.notifyId,
        6: options.notifyType,
        7: options.user_account,
        8: (options.extra && options.extra.notify_foreground == 0) ? 0 : options.extra.notify_foreground,
        9: options.extra.notify_effect || 2,
        10: encodeURIComponent(options.extra.intent_uri || '')
    });
    return { status:0, message: postData };
}


//解析topic发送的数据
message.parseTopicMessage = function(options) {
    if (!options.payload || options.payload.length == 0) {
        return { status: 1, message: 'payload参数必须存在'};
    }
    if (!options.title || options.title.length == 0) {
        return { status: 1, message: 'title参数必须存在'};
    }
    if (!options.description || options.description.length == 0) {
        return { status: 1, message: 'description参数必须存在'};
    }
    if (!options.restrictedPackageNames || options.restrictedPackageNames.length == 0) {
        if (options.restrictedPackageName && options.restrictedPackageName.trim().length > 0) {
            options.restrictedPackageNames.push(options.restrictedPackageName.trim());
        } else {
            return { status: 1, message: 'restrictedPackageNames/restrictedPackageName参数必须存在'};
        }
    }
    if ( !options.passThrough ) {
        options.passThrough = 0;
    }
    if( !options.notifyId ) {
        options.notifyId = 0;
    }
    if( !options.notifyType ) {
        options.notifyType = 0;
    }
    if (!options.topic || options.topic.length == 0) {
        return { status:1, message: 'topic参数必须存在'};
    }
    //topic_op -> UNION : 并集, A∪B∪C∪D, INTERSECTION : 交集, A ∩B ∩C∩D, EXCEPT : 差集, A-B-C-D;
    if (!options.topic_op) {
        return { status:1, message: 'topic_op参数必须存在'};
    }
    MessageFormat = require('messageformat')
    var mfunc = new MessageFormat('en').
        compile('payload={0}&title={1}&description={2}&restrictedPackageNames={3}&passThrough={4}' + 
                    '&notifyId={5}&notifyType={6}&topic={7}&&topic_op={8}' + 
                    (options.extra ? '&extra.notify_foreground={9}&extra.notify_effect={10}&extra.intent_uri={11}' : '') + 
                    (options.extra && options.extra.imgPath ? '&imgPath={12}' : ''));
    var postData = mfunc({
        0: encodeURIComponent(options.payload),
        1: encodeURIComponent(options.title),
        2: encodeURIComponent(options.description),
        3: encodeURIComponent(JSON.stringify(options.restrictedPackageNames)),
        4: options.passThrough,
        5: options.notifyId,
        6: options.notifyType,
        7: encodeURIComponent(options.topic),
        8: options.topic_op,
        9: (options.extra && options.extra.notify_foreground == 0) ? 0 : options.extra.notify_foreground,
        10: options.extra.notify_effect || 2,
        11: encodeURIComponent(options.extra.intent_uri || ''),
        12: encodeURIComponent( options.extra.imgPath || '')
    });
    return { status:0, message: postData };
}

module.exports = message;