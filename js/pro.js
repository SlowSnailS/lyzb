"use strict";define(["jquery","cookie"],function(){var l=JSON.parse($.cookie("produce")),n='<div class="x-wrap-1200">\n\t\t\t\t<div class="x-area">\n\t\t\t\t\t<i class="x-s-icon x-icon-home float-left"></i>\n\t\t\t\t\t<a class="" href="/" title="首页" target="_blank">\n\t\t\t\t\t\t首页\n\t\t\t\t\t</a>\n\t\t\t\t\t<span>></span><a href="/pro24061.html" title='+l.description+' target="_blank">'+l.description+'</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="x-product clear">\n\t\t\t\t\t<div class="x-product-img float-left">\n\n\t\t\t\t\t\t<div class="x-pro-preview">\n\n\t\t\t\t\t\t\t<div class="small-img x-small-img clear">\n\n\t\t\t\t\t\t\t\t<img src='+l.imgSrc+' style="float: right;" data-loading='+l.imgSrc+" alt="+l.description+' />\n\t\t\t\t\t\t\t\t<div class="x-zoom-box"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="breviary-bar">\n\t\t\t\t\t\t\t<div class="breviary-img">\n\t\t\t\t\t\t\t\t<ul class="clear">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;">\n\t\t\t\t\t\t\t\t\t\t\t<img src='+l.imgSrc+"  alt="+l.description+' />\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="breviary-btn">\n\t\t\t\t\t\t\t\t<a class="btn-prev" href="javascript:;"><i class="x-s-icon"></i></a>\n\t\t\t\t\t\t\t\t<a class="btn-next" href="javascript:;"><i class="x-s-icon"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="x-user-handle">\n\t\t\t\t\t\t\t<div class="x-share-bar float-left">\n\t\t\t\t\t\t\t\t<a class="x-share"><i class="x-u-icon"></i>分享</a>\n\t\t\t\t\t\t\t\t<div class="jiathis_style_24x24 x-share-link">\n\t\t\t\t\t\t\t\t\t<a class="jiathis_button_weixin"></a>\n\t\t\t\t\t\t\t\t\t<a class="jiathis_button_tsina"></a>\n\t\t\t\t\t\t\t\t\t<a class="jiathis_button_qzone"></a>\n\t\t\t\t\t\t\t\t\t<a class="jiathis_button_cqq"></a>\n\t\t\t\t\t\t\t\t\t<a class="jiathis_button_tqq"></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"><\/script>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a class="x-collect float-left " data-cid="24061" alt="收藏商品">\n\t\t\t\t\t\t\t\t<i class="x-u-icon"></i>\n\t\t\t\t\t\t\t\t收藏\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="x-product-intro float-right">\n\t\t\t\t\t\t<div class="x-intro-left float-left">\n\t\t\t\t\t\t\t<div class="x-product-name">\n\t\t\t\t\t\t\t\t<h2 class="title t-ellipsis">\n\t\t\t\t\t\t\t\t'+l.description+'                            </h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="x-product-information">\n\t\t\t\t\t\t\t\t<div class="x-product-price">\n\t\t\t\t\t\t\t\t\t<ul class="x-detail-list clear">\n\t\t\t\t\t\t\t\t\t\t<li class="x-bigger-item">\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-t">价　　格</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-c">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="x-price-new">￥'+l.prices+'</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="x-price-old">￥32.90</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="x-price-tips">销售价</span>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li style="padding-left: 23px !important;">\n\t\t\t\t\t\t\t\t\t\t\t<label style="color: #D42B2E; ">'+l.iscount+'</label>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="x-product-text">\n\t\t\t\t\t\t\t\t\t<ul class="x-detail-list clear">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-t">销　　量</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-c">已售出<span class="f-red">2</span>件</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li style="z-index: 10;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-t">配&nbsp;&nbsp;送&nbsp;&nbsp;至</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-c">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="x-arrive-area float-left">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>重庆 重庆市 渝北区</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="x-u-icon"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span id="txtDeliveryAreaPrompt" class="f-red">有货</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-t">运　　费</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-c">\n\t\t\t\t\t\t\t\t\t\t\t\t<span id="freight">￥0.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="x-product-text none-border">\n\t\t\t\t\t\t\t\t\t<ul class="x-detail-list clear" id="attr_div">\n\t\t\t\t\t\t\t\t\t\t<li class="x-item-40"><div class="x-t">数量</div><div class="x-c"><div class="x-count-bar"><label class="x-count-input"><input type="text" value="1" id="buyTotalNum"></label><label class="x-count-btn"><a class="x-add" href="javascript:;">+</a><a class="x-cut" href="javascript:;">-</a></label></div></div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="x-product-btn">\n\t\t\t\t\t\t\t\t\t<a class="buy-btn active" href="javascript:;" id="buy-btn"><i class="x-u-icon"></i>立即购买</a>\n\t\t\t\t\t\t\t\t\t<a class="car-btn active" href="javascript:;" id="car-btn"><i class="x-u-icon"></i>加入购物车</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="x-intro-right float-left">\n\t\t\t\t\t\t\t<div class="x-store-bar">\n\t\t\t\t\t\t\t\t<h2 class="x-store-name">辽宁省盘锦市大洼县01仓直供店</h2>\n\n\t\t\t\t\t\t\t\t<a class="x-store-btn" href="/Product/StoresProductList?SupplierID=1132"><i class="x-s-icon"></i>进店逛逛</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="x-container mar-t10 clear">\n\t\t\t\t\t<div class="x-container-left float-left">\n\t\t\t\t\t\t<div class="x-module">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="x-container-right float-right">\n\t\t\t\t\t\t<div class="x-info-bar">\n\t\t\t\t\t\t\t<ul class="x-tab-menu">\n\t\t\t\t\t\t\t\t<li class="active"><a href="javascript:;">商品介绍</a></li>\n\t\t\t\t\t\t\t\t<li class=""><a href="javascript:;">支付及配送范围</a></li>\n\t\t\t\t\t\t\t\t<li class=""><a href="javascript:;">售后保障</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class="x-tab-cont">\n\t\t\t\t\t\t\t\t<div class="x-tab-item" style="display: block">\n\t\t\t\t\t\t\t\t\t<ul class="x-info-list clear">\n\t\t\t\t\t\t\t\t\t\t<li class="x-info-item">\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-hd">商品名称：</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="x-bd t-ellipsis">'+l.description+'</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class="x-info-item">\n\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class="x-product-details mar-t10">\n\t\t\t\t\t\t\t\t\t\t<div align="center">\n\t\t\t\t\t\t\t\t\t\t\t<img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266295658362.jpg" alt="" width="790" height="285" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266300971487.jpg" alt="" width="790" height="1268" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301108568.jpg" alt="" width="790" height="682" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301174655.jpg" alt="" width="790" height="682" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301261397.jpg" alt="" width="790" height="880" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301343938.jpg" alt="" width="790" height="879" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301517393.jpg" alt="" width="790" height="815" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301769494.jpg" alt="" width="790" height="814" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301857368.jpg" alt="" width="790" height="787" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266301947819.jpg" alt="" width="790" height="787" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266302022764.jpg" alt="" width="790" height="653" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266302103519.jpg" alt="" width="790" height="652" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266302172319.jpg" alt="" width="790" height="1073" /><img src="http://lyzbimage.jbxgo.com/lyzbjbxgo/shop/1132/images/2018/05/18/15266302246832.jpg" alt="" width="790" height="1010" /><br />\n\t\t\t\t\t\t\t\t\t\t</div>                                </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';$(".x-wrap").html(n),$("#buyTotalNum").val(),$(".x-add").on("click",function(){var t=parseInt($("#buyTotalNum").val())+1;$("#buyTotalNum").val(t)}),$(".x-cut").on("click",function(){var t=parseInt($("#buyTotalNum").val())-1;if(t<=0)return 0;$("#buyTotalNum").val(t)}),$("#car-btn").on("click",function(t){if($.cookie("car")){var i=!1,a=$.cookie("car");l.num=$("#buyTotalNum").val()-0,a=JSON.parse(a),a=Array.from(a);for(var s=0;s<a.length;s++)l.id==a[s].id&&(a[s].num+=l.num,i=!0);i||a.push(l),a=JSON.stringify(a),$.cookie("car",a)}else l.num=$("#buyTotalNum").val()-0,n=JSON.stringify(l),$.cookie("car",n)})});