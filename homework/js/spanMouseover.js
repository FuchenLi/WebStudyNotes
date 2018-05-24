 // 当 鼠标 over span标签 放大字体
 $(document).ready(function () {
    $(".subway-map").on("mouseover", ".text", function () { //over span
        var font = parseInt($(this).css("font-size").split("px")[0]);
        $(this).css("font-size", (font + 5) + "px");
    });
    $(".subway-map").on("mouseout", ".text", function () { //out span
        var font = parseInt($(this).css("font-size").split("px")[0]);
        $(this).css("font-size", (font - 5) + "px");
    });
});