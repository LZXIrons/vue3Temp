"use strict";
;(function(window) {
    var mycanvas = _.dom.qid('mycanvas'),
    cxt = mycanvas.getContext('2d'),
    _body = document.body,
    _w,
    //容器的宽度，也是canvas的宽度
    _h; //容器的高度，也是canvas的高度
    var init = function() {
        windowResize();
        _.dom.visualState(mycanvas,'visibility');
        window.addEventListener('resize', windowResize);
        testTranslate();
        testRotate();
        testScale();
        testTransform();
        testWriteText();
        testAlignment();
        testtextBaseline();
        testmeasureText();
    },
    testTranslate=function(){
        cxt.save();
        cxt.beginPath();
        cxt.fillStyle="#EE00EE";
        cxt.translate(-100,-100);
        cxt.fillRect(100,100,200,200);
        cxt.restore();

        cxt.save();
        cxt.beginPath();
        cxt.fillStyle="#EE0000";
        cxt.translate(200,0);
        cxt.fillRect(0,0,100,200);
        cxt.restore();
    },
    testRotate=function(){
        cxt.beginPath();
        cxt.save();
        cxt.fillStyle="#CD6839";
        cxt.translate(350,50);
        cxt.rotate(.25*Math.PI);
        cxt.fillRect(0,0,50,50);
        cxt.restore();
        cxt.save();
        cxt.translate(350,50);
        cxt.rotate(.15*Math.PI);
        cxt.fillRect(0,0,50,50);
        cxt.restore();
        cxt.closePath();
    },
    testScale=function(){
        cxt.beginPath();
        cxt.save();
        cxt.strokeStyle="#B3EE3A";
        cxt.translate(400,50);
        cxt.scale(2,2);
        cxt.rect(0,0,50,50);
        cxt.stroke();
        cxt.restore();
        cxt.closePath();
    },
    testTransform=function(){
        cxt.beginPath();
        cxt.save();
        cxt.setTransform(1,0.1,-0.1,1,30,10);
        cxt.fillStyle="blue";
        cxt.fillRect(500,0,120,100);
        cxt.restore();
        cxt.closePath();
    },
    testWriteText=function(){
        /*context.font = "[font-style] [font-variant] [font-weight][font-size/line-height] [font-family]"
        fillText()与strokeText()的参数表是一样的，接受4个参数，分别是String，x，y与maxlen，
        如果文本的长度超过了这个maxlen，Canvas就会将显示文本横向压缩。*/
        cxt.beginPath();
        cxt.save();
        cxt.font='50px serif';
        cxt.fillStyle='#98FB98';
        cxt.fillText("测试write text 1",650,50);
        cxt.restore();
        cxt.closePath();

        cxt.beginPath();
        cxt.save();
        cxt.font='50px serif';
        var gradient = cxt.createLinearGradient(650,150,800,150);
        gradient.addColorStop("0","#6A5ACD");
        gradient.addColorStop("0.5","#5CACEE");
        gradient.addColorStop("1.0","#171717");
        cxt.fillStyle = gradient;
        cxt.strokeStyle = gradient;
        cxt.strokeText("测试write text 2", 650, 100);
        cxt.fillText("测试write text 3", 650, 150);
        cxt.restore();
        cxt.closePath();

        cxt.beginPath();
        cxt.save();
        cxt.font='italic small-caps bolder 50px/50px serif';
        cxt.fillText("测试write text 4", 650, 200,250);
        cxt.restore();
        cxt.closePath();
    },
    testAlignment=function(){
        cxt.beginPath();
        cxt.save();
        cxt.font='50px serif';
        cxt.fillStyle='#EECBAD';
        cxt.textAlign="start";
        cxt.fillText("textAlign=start", 400, 250);
        cxt.textAlign="end";
        cxt.fillText("textAlign=end", 400, 300);
        cxt.textAlign="left";
        cxt.fillText("textAlign=left", 400, 350);
        cxt.textAlign="center";
        cxt.fillText("textAlign=center", 400, 400);
        cxt.textAlign="right";
        cxt.fillText("textAlign=right", 400, 450);
        cxt.restore();
        cxt.closePath();
    },
    testtextBaseline=function(){
        cxt.beginPath();
        cxt.save();
        cxt.moveTo(600,300);
        cxt.lineTo(1200,300);
        cxt.strokeStyle='#D1EEEE';
        cxt.stroke();
        cxt.font='50px serif';
        cxt.fillStyle='#EECBAD';
        cxt.textBaseline="top";
        cxt.fillText("Top",550,300);
        cxt.textBaseline="bottom";
        cxt.fillText("Bottom",650,300);
        cxt.textBaseline="middle";
        cxt.fillText("Middle",750,300);
        cxt.textBaseline="alphabetic";
        cxt.fillText("Alphabetic",850,300);
        cxt.textBaseline="hanging";
        cxt.fillText("Hanging",950,300);
        cxt.restore();
        cxt.closePath();
    },
    testmeasureText=function(){
        cxt.beginPath();
        cxt.save();
        cxt.font='50px serif';
        cxt.fillStyle='#EECBAD';
        var txt="test measureText";
        cxt.fillText("width:" + cxt.measureText(txt).width+'px',0,550);
        cxt.fillText(txt,0,500);
        cxt.restore();
        cxt.closePath();
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
    };
    init();
})(this);
