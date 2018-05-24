function setSub() {
    //body onload 时 动态设置 div 的 left
    var wid = parseInt($(".subway-map").css("width"));
    var bo = parseInt($("body").css("width"));
    $(".subway-map").css("left", (bo - wid) / 2 + 'px');
}

//实现地图的上下左右移动

$(document).ready(function () {
    var originleft = $(".subway-map").offset().left;
    $(".move-div").on('click', '#up', function () {
        //向上移动canvas
        var scale = parseFloat($(".subway-map").css("width")) / 790;
        var step = 360;
        var top = $(".subway-map").offset().top;
        if (720 * scale + top <= 360) { //留最后一屏幕显示
            return false;
        }
        $(".subway-map").css("top", (top - step) + "px")
    });


    $(".move-div").on('click', '#down', function () {
        //向上移动canvas
        var scale = parseFloat($(".subway-map").css("width")) / 790;
        var step = 360;
        var top = $(".subway-map").offset().top;
        if (top >= 360) { //留最后一屏幕显示
            console.log("false");
            return false;
        }
        $(".subway-map").css("top", (top + step) + "px")
    });


    $(".move-div").on('click', '#right', function () {
        //向上移动canvas
        var scale = parseFloat($(".subway-map").css("width")) / 790;
        var step = 395;
        var left = $(".subway-map").offset().left;
        if (left >= originleft+395) { //留最后一屏幕显示
            console.log("false");
            return false;
        }
        $(".subway-map").css("left", (left + step) + "px")
    });


    $(".move-div").on('click', '#left', function () {
        //向上移动canvas
        var scale = parseFloat($(".subway-map").css("width")) / 790;
        var step = 395;
        var left = $(".subway-map").offset().left;
        if (790 * scale +left <= 395) { //留最后一屏幕显示
            console.log("false");
            return false;
        }
        $(".subway-map").css("left", (left - step) + "px")
    });
});