var passBase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()_{}"; //67文字
var password = "";


function genPass() {

    var cFilled = document.querySelector(".input-password");

    if (cFilled.value == "") {
        var passLen = document.querySelector(".input-len");

        
        password = "";        

        //パスワード生成
        for (var i = 0; i < passLen.value; i++) {
            password += passBase.charAt(Math.floor(Math.random() * passBase.length))
        };

        cFilled.value = password;

    } else {
        recordPass();
    }

};


function reGen() {

    var cFilled = document.querySelector(".input-password");
    var passLen = document.querySelector(".input-len");

    password = "";
        
    //パスワード生成
    for (var n = 0; n < passLen.value; n++) {
        password += passBase.charAt(Math.floor(Math.random() * (passBase.length + 1)))
    };

    cFilled.value = password;
}

function recordPass() {
    return;
    //ファイルにパスワードを書き込む
}