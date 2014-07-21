exports.randomString = function (stringLength) {

    stringLength = stringLength || 12;
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var results = '';

    for(var i = 0; i < stringLength; i++){
        var rnum = Math.floor(Math.random() * chars.length);
        results += chars.substring(rnum, rnum + 1);
    }

    return results;
};