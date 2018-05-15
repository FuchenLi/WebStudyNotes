function record_XY(e) {
    var x = e.clientX;
    var y = e.clientY;
    var p = document.getElementById("dis");
    var txt = p.textContent;
    p.innerHTML = txt + ' ' + x + ',' + y;
}