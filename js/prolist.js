"use strict";define(["jquery","cookie"],function(){$.ajax({type:"GET",url:"json/list.json",dataType:"json"}).done(function(o){for(var t="",n=0;n<o.length;n++){t+='<li class="ui-repeater-item product-items  ">\n\t\t\t<div class="product-photo">\n\t\t\t<div class="pro-photo-big">\n\t\t\t<a href="./pro.html" target="_blank" data-id='+o[n].id+">\n\t\t\t<img src="+o[n].imgSrc+' width="206" height="206" class="pic-big" alt='+o[n].description+' />\n\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class="pro-kinds">\n\t\t\t<ul class="pro-photo-small">\n\t\t\t<li class="pro-kinds-item J-pro-small-item">\n\t\t\t</li>\n\t\t\t</ul>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="product-info  mt10">\n\t\t\t<div class="product-price">\n\t\t\t<span>￥ '+o[n].prices+'</span>\n\t\t\t</div>\n\t\t\t<div style="color: #E31939;margin-bottom: 5px;">元宝最高抵扣: &yen;10</div>\n\t\t\t<div class="product-name">\n\t\t\t<a href="/pro24120.html" target="_blank">\n\t\t\t'+o[n].description+'</a>\n\t\t\t</div>\n\t\t\t<div class="product-ohter mt10">\n\t\t\t<span>'+o[n].volume+"</span>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</li>"}$(".module-cont").html(t),$(".module-cont").on("click",function(t){if(t.preventDefault(),"IMG"==t.target.nodeName){var n=$(t.target).parent().attr("data-id"),i=JSON.stringify(o[n-1]);$.cookie("produce",i),window.open("./pro.html")}})})});