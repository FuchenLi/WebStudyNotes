// 实现legnd可被移动的功能
var isMouseDown = false;
var pointX, pointY;
$(document).ready(function () {
    $("#legend").mousedown(function (event) { //鼠标 按下
        var e = event || window.event;
        isMouseDown = true;
        pointX = e.clientX;
        pointY = e.clientY;
        $(".box").css("display", "block");
    });
    $(document).mouseup(function () { //鼠标 抬起
        isMouseDown = false;
        $(".box").css("display", "none");
    });
    $("#legend").mousemove(function (event) { //鼠标移动
        if (!isMouseDown)
            return false;
        var e = event || window.event;
        var px, py;
        var moveX, moveY;
        px = e.clientX;
        py = e.clientY;
        moveX = px - pointX;
        moveY = py - pointY;
        pointX = px;
        pointY = py;
        var divX = $(this).offset().left;
        var divY = $(this).offset().top;
        console.log(document.body.clientHeight);
        var changedivX, changedivY;
        changedivX = divX + moveX;
        changedivY = divY + moveY;
        if (changedivX <= 0 || (changedivX + 220) >= parseInt($("body").css("width")))
            moveX = 0;
        if (changedivY >= document.body.clientHeight - 60 || changedivY <= 0)
            moveY = 0;
        $(this).css("left", divX + moveX + 'px');
        $(this).css("top", divY + moveY + 'px');
    });
});