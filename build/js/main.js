function init(){"use strict";function t(){$(document).mousemove(function(t){var e,o,a,n,s=$(".tilt-container"),r=$("#home"),c=r.offset().left,i=r.offset().top,l=c+r.width()/2,f=i+r.height()/2;t.pageX>r.width()+50||t.pageX<=0||t.pageY>r.height()+50||t.pageY<=0?(e=0,o=0):(e=(t.pageX-l)/90,o=(-t.pageY-f)/90,a=-(t.pageX-l)/70,n=(t.pageY-f)/90),s.css("transform","rotateX("+o+"deg) rotateY("+e+"deg) translateX("+a+"px) translateY("+n+"px)")})}$("body").removeClass("no-scroll"),setTimeout(function(){t()},2e3),$(document).on("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,e=($("body").outerHeight(!0),$("nav")),o=350,a=$(".nav-projects"),n=$("#projects"),s=$(".nav-about"),r=$("#about"),c=$(".nav-contact"),i=$("#contact-spacer");$("#school");t>=50?e.css("transform","translate(0, 0)"):e.css("transform","translate(0, -146px)"),t+o>n.offset().top&&t+o<n.offset().top+n.outerHeight(!0)?a.addClass("nav-active"):a.removeClass("nav-active"),t+o>r.offset().top&&t+o<r.offset().top+r.outerHeight(!0)?s.addClass("nav-active"):s.removeClass("nav-active"),t+o>i.offset().top?c.addClass("nav-active"):c.removeClass("nav-active")}),$('a[href^="#"]').on("click",function(t){var e=$(this.getAttribute("href")),o=40;e.length&&(t.preventDefault(),e.is("#about")&&(o=140),e.is("#contact")&&(o=-6500),$("html, body").stop().animate({scrollTop:e.offset().top-o},1e3))})}var initInterval=setInterval(function(){window.jQuery&&(clearInterval(initInterval),init())},20);
//# sourceMappingURL=../maps/main.js.map
