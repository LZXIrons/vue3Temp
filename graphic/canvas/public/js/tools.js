"use strict";
/*
  *brower utils
  @author liuyong
  */
;(function(window) {
    /*DOM操作*/
    var DomHandle={
        q: function(csssel, fa) {
            fa = fa || document;
            return fa.querySelector(csssel);
        },
        qall: function(csssel, fa) {
            fa = fa || document;
            return fa.querySelectorAll(csssel);
        },
        qid: function(elid, fa) {
            fa = fa || document;
            return fa.getElementById(elid);
        },
        visualState: function(elem, type, value) {
            switch (type) {
                case 'visibility':
                    elem.style.visibility = value || 'visible';
                    break;
                case 'opacity':
                    elem.style.opacity = value || 1;
                    elem.style.filter = "alpha(opacity=" + (typeof value == 'undefined' ? 100 : value * 100) + ")";
                    break;
                default:
                    elem.style.display = value || 'block';
                    break;
            }
        },
        showStatus: function(elem, type) {
            var status = '';
            switch (type) {
                case 'visibility':
                    status = getStyle(elem, 'visibility');
                    if (status == 'hidden' || status == 'collapse') {
                        return false;
                    }
                    break;
                case 'opacity':
                    status = getStyle(elem, 'opacity');
                    if (status === '0') {
                        return false;
                    }
                    break;
                default:
                    status = getStyle(elem, 'display');
                    if (status == 'none') {
                        return false;
                    }
                    break;
            }
            return true;
        },
        getScTop : function() {
            if (document.documentElement) {
                return document.documentElement.scrollTop || document.body.scrollTop || document.pageYOffset || 0;
            }
            return document.body.scrollTop || document.pageYOffset;
        },
        getElementTop : function(elem, fa) {
            var elemTop = elem.offsetTop;
            elem = elem.offsetParent;
            while (elem != null && ((fa && fa.contains(elem)) || (!fa))) {
                elemTop += elem.offsetTop;
                elem = elem.offsetParent;
            }
            return elemTop;
        }
    };
    function Tools() {};
    Tools.prototype = {
        constructor: Tools,
        jsonExtend : function(child, father, deep, attrs) {
            for (var i in father) {
                if (attrs && attrs.indexOf(i) == -1) {
                    continue;
                }
                if (deep && typeof father[i] === 'object' && Object.prototype.toString.call(father[i]) != '[object Array]') {
                    if (typeof child[i] === 'undefined') {
                        child[i] = {};
                    }
                    jsonExtend(child[i], father[i]);
                } else {
                    child[i] = father[i];
                }
            }
            return child;
        },
        formatDate : function(time, format, errtxt) {
            if (!time) {
                return errtxt || '&nbsp;';
            }
            time = parseInt(time);
            if ((time + '').length == 10) {
                time *= 1000;
            }
            var timer = new Date(time),
                fullYear = timer.getFullYear(),
                month = timer.getMonth() + 1,
                day = timer.getDate(),
                hour = timer.getHours(),
                minute = timer.getMinutes(),
                sec = timer.getSeconds();
            return format.replace(/%Y/ig, fullYear).replace(/%m/ig, month).replace(/%d/ig, day).replace(/%H/ig, hour).replace(/%M/ig, minute).replace(/%S/ig, sec);
        },
        dom:DomHandle
    };
    window._ = window.TOOLS = new Tools();
})(this);
