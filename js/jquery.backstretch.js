/*
 * jQuery Backstretch
 * Version 1.2.2
 * http://srobbin.com/jquery-plugins/jquery-backstretch/
 * 
 * Modified by Steven Vondruska for personal website
 * http://stevenvondruska.com/
 * http://github.com/vondruska/jquery-backstretch
 *
 * Add a dynamically-resized background image to the page
 *
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
 * Dual licensed under the MIT and GPL licenses.
*/
(function(a){a.backstretch=function(k,g,q,j){var c={centeredX:true,centeredY:true,speed:0,width:0,height:0},p=a("#backstretch"),s=p.data("settings")||c,n=p.data("settings"),i=("onorientationchange" in window)?a(document):a(window),e,f,h,r,o,l;if(g&&typeof g=="object"){a.extend(s,g)}a(document).ready(m);return this;function m(){if(k){var t;if(p.length==0){p=a("<div />").attr("id","backstretch").css({left:0,top:0,position:"fixed",overflow:"hidden",zIndex:-999999,margin:0,padding:0,height:"100%",width:"100%",display:"none"})}else{p.find("img").addClass("deleteable")}if(typeof q=="function"){q.call(p.get(0))}t=a("<img />").css({position:"absolute",margin:0,padding:0,border:"none",zIndex:-999999,opacity:".9"}).bind("load",function(x){var w=a(this),v,u;w.css({width:"auto",height:"auto"});v=this.width||a(x.target).width()||s.width;u=this.height||a(x.target).height()||s.height;e=v/u;if(a(".deleteable",p).length>0){t.fadeIn(s.speed)}else{p.fadeIn(s.speed)}d(function(){p.find(".deleteable").remove();if(typeof j=="function"){j()}})}).appendTo(p);if(a("body #backstretch").length==0){a("body").append(p)}p.data("settings",s);t.attr("src",k);a(window).resize(d)}}function d(t){try{l={left:0,top:0};h=i.width();r=h/e;if(r>=i.height()){o=(r-i.height())/2;if(s.centeredY){a.extend(l,{top:"-"+o+"px"})}}else{r=i.height();h=r*e;o=(h-i.width())/2;if(s.centeredX){a.extend(l,{left:"-"+o+"px"})}}a("#backstretch, #backstretch img:last").width(h).height(r).filter("img").css(l)}catch(u){}if(typeof t=="function"){t()}}function b(t){}}})(jQuery);