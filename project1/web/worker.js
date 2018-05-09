var h = 0;//hour
var m = 0;//min
var s = 0;//sec
function timeCount(){
    var ss='';
    var mm='';
    var hh = '';
    s = s+1;
    if(s >= 60){
        s = s-60;
        m = m+1;
    }
    if(m >= 60){
        m = m-60;
        h = h+1;
    }
    if(h >= 24){

    }
    else{
        if(s<10){
            ss = '0';
        }
        if(m<10){
            mm = '0';
        }
        if(h<10){
            hh = '0';
        }
        postMessage(hh+h+":"+mm+m+":"+ss+s);

        setTimeout("timeCount()", 1000);
    }
}

timeCount();//启动