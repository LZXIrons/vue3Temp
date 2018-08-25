"use strict";
var PubSub=(function(global){
    var defaultSpace="default",
        nameSpace = {},
        _arrslice=Array.prototype.slice;
    function EventObj(_name){
        this._name=_name;
        this.cache={};
    }
    EventObj.prototype={
        constructor:EventObj,
        one:function(key,fn,notlast){
            this.cache[key] = this.cache[key] || {};
            var _cacheByKey=this.cache[key],
                args=_arrslice.call(arguments),
                _ckey=getUuid();
            if(!notlast && _cacheByKey.last){
                fn.apply(this,args.slice(3).concat(_cacheByKey.last));
                return true;
            }
            _cacheByKey[_ckey]=args;
            _cacheByKey[_ckey].once=true;
        },
        on:function(key,fn,notlast){
            this.cache[key] = this.cache[key] || {};
            var _cacheByKey=this.cache[key],
                _ckey=getUuid();
            _cacheByKey[_ckey]=_arrslice.call(arguments);
            if(!notlast && _cacheByKey.last){
                fn.apply(this,_cacheByKey[_ckey].slice(3).concat(_cacheByKey.last));
            }
        },
        emit:function(key,notlast){
            this.cache[key] = this.cache[key] || {};
            var params=_arrslice.call(arguments,2);
            if(!notlast){
                this.cache[key].last=params;
            }
            this.carryOut(this.cache[key],params);
        },
        remove:function(key,fn){
            if(fn){
                var _cacheByKey= this.cache[key],
                    ccnum=0;
                for(var c in _cacheByKey){
                    if(_cacheByKey.hasOwnProperty(c)){
                        if(_cacheByKey[c][1]==fn){
                            delete _cacheByKey[c];
                            continue;
                        }
                        ++ccnum;
                    }
                }
                !ccnum && (delete this.cache[key]);
            }else if(key){
                delete this.cache[key];
            }else{
                delete nameSpace[this._name];
                return;
            }
            var keynum=0;
            for(var i in this.cache){
                if(!this.cache.hasOwnProperty(i)){
                    continue;
                }
                ++keynum;
                break;
            }
            !keynum && (delete nameSpace[this._name]);
        },
        carryOut:function(_cacheByKey,params){
            for(var _ckey in _cacheByKey){
                if(!_cacheByKey.hasOwnProperty(_ckey)){
                    continue;
                }
                var _cck=_cacheByKey[_ckey];
                if(!_cck[1]){
                    continue;
                }
                _cck[1].apply(this,_cck.slice(3).concat(params));
                _cck.once && delete _cacheByKey[_ckey];
            }
        }
    };
    return {
        space:function(_name){
            _name = _name || defaultSpace;
            return nameSpace[_name] || (nameSpace[_name] = new EventObj(_name));
        },
        one:function(){
            var _temp=this.space();
            return _temp.one.apply(_temp,_arrslice.call(arguments));
        },
        on:function(){
            var _temp=this.space();
            return _temp.on.apply(_temp,_arrslice.call(arguments));
        },
        emit:function(){
            var _temp=this.space();
            return _temp.emit.apply(_temp,_arrslice.call(arguments));
        },
        remove:function(){
            var _temp=this.space();
            return _temp.remove.apply(_temp,_arrslice.call(arguments));
        }
    };
})(this);
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
        extend : function(child,father){
            var obj=function(){};
            obj.prototype=father.prototype;
            child.prototype=new obj();
            child.prototype.constructor = child;
            child.uber=father.prototype;
        },
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
        querySearch : function(){
            var _sarr=location.search.substring(1).split('&'),
                _sobj={};
            for(var i=0,len=_sarr.length;i<len;i++){
                var _sasingle=_sarr[i].split('=');
                _sobj[_sasingle[0]]=_sasingle[1];
            }
            return _sobj;
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
