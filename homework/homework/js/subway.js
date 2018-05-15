function enlargeCan() { //放大画布
    var isGoOn = true;
    $("canvas").each(function () {
        var width = $(this).css("width");
        widNum = width.split("px")[0];
        if (widNum >= 790 * 1.7) { //限制最多放大倍数
            isGoOn = false;
            return false;
        }
        $(this).css("width", widNum * 1.1 + "px");
    });
    if (!isGoOn) return false;
    var font = parseInt($("span").css("font-size").split("px")[0]);
    $("span.text").css("font-size", (font + 1) + "px");
    $("span.text").each(function () {
        var top = $(this).css("top");
        var left = $(this).css("left");
        var topNum = top.split("px")[0];
        var leftNum = left.split("px")[0];
        //放大span 标签 坐标
        $(this).css("top", topNum * 1.1 + "px");
        $(this).css("left", ((leftNum - 192.0) * 1.1 + 192.0) + "px");
    });

}

function narrowCan() { //缩小画布
    var isGoOn = true;
    $("canvas").each(function () {
        var width = $(this).css("width");
        widNum = width.split("px")[0];
        if (widNum <= 790 / 1.4) { //限制最多缩小倍数 
            isGoOn = false;
            return false;
        }
        $(this).css("width", widNum / 1.1 + "px");
    });
    if (!isGoOn) return false;
    var font = parseInt($("span").css("font-size").split("px")[0]);
    $("span.text").css("font-size", (font - 1) + "px");
    $("span.text").each(function () {

        var top = $(this).css("top");
        var left = $(this).css("left");
        var topNum = top.split("px")[0];
        var leftNum = left.split("px")[0];
        //缩小span 标签 坐标
        $(this).css("top", topNum / 1.1 + "px");
        $(this).css("left", ((leftNum - 192.0) / 1.1 + 192.0) + "px");
    });

}