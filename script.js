var passBase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()_{}"; //67文字
var password = "";


function genPass() {

    var iPass = document.querySelector(".input-password");
    var passLen = document.querySelector(".input-len");

    password = "";
        
    //パスワード生成
    for (var n = 0; n < passLen.value; n++) {
        password += passBase.charAt(Math.floor(Math.random() * (passBase.length + 1)))
    };

    iPass.value = password;
}

function recordPass() {
    var iPass = document.querySelector(".input-password");
    var purpose = document.querySelector(".input-purpose");

    if (purpose.value == "") {
        alert("用途の欄が空白になっています。");
    } else {
        stringForRecord = `${purpose.value},${iPass.value}\n`;
        navigator.clipboard.writeText(stringForRecord);
        alert("用途,パスワードをクリップボードにコピーしました。")
    }
}