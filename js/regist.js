"use strict";define(["jquery"],function(){var l=[{ele:$("#J-phone-email"),reg:/^[0-9]{1,30}$/,reg1:/^((13[0-9])|(14[57])|(15[0-35-9])|18[05-9])\d{8}$/,reg2:/^[a-z0-9]+[\._a-z0-9]+@[a-z0-9]{1,20}\.[\.0-9a-z]{1,20}$/,flag:!1},{ele:$("#J-inp-pwd"),reg:/^[A-Za-z0-9`~!@#$%^&*()_\.{}|:<>?,/]{6,20}$/,flag:!1},{ele:$("#J-inp-pwd2"),flag:!1},{ele:$("#J-chkbox-readMe"),flag:!1},{ele:$("#J-chkbox-readMeToo"),flag:!1}];$("#J-phone-email").on("blur",function(){var e=l[0].ele.val();if(l[0].flag=!1,""==e.trim())return $(this).parent().parent().removeClass("form-verify-success"),$(this).parent().parent().addClass("form-verify-error"),void $("#phoneoremailmessage").html('<i class="icon"></i>请输入手机/邮箱');l[0].reg.test(e)?l[0].reg1.test(e)?($(this).parent().parent().addClass("form-verify-success"),$(this).parent().parent().removeClass("form-verify-error"),$("#phoneoremailmessage").html('<i class="icon"></i>'),l[0].flag=!0):($(this).parent().parent().removeClass("form-verify-success"),$(this).parent().parent().addClass("form-verify-error"),$("#phoneoremailmessage").html('<i class="icon"></i>手机号码格式不正确')):l[0].reg2.test(e)?($(this).parent().parent().addClass("form-verify-success"),$(this).parent().parent().removeClass("form-verify-error"),$("#phoneoremailmessage").html('<i class="icon"></i>'),l[0].flag=!0):($(this).parent().parent().removeClass("form-verify-success"),$(this).parent().parent().addClass("form-verify-error"),$("#phoneoremailmessage").html('<i class="icon"></i>邮箱格式不正确'))}),$("#J-inp-pwd").on("blur",function(){var e=l[1].ele.val();if(l[1].flag=!1,""==e.trim())return $("#J-item-level").css({display:"none"}),$(this).parent().parent().removeClass("form-verify-success"),$(this).parent().parent().addClass("form-verify-error"),void $("#pwdmessage").html('<i class="icon"></i>请输入密码');if(l[1].reg.test(e)){l[1].flag=!0,$("#J-item-level").css({display:"block","margin-top":"-35px"}),$(this).parent().parent().addClass("form-verify-success"),$(this).parent().parent().removeClass("form-verify-error"),$("#pwdmessage").html('<i class="icon"></i>');var s=0;if(/\d/.test(e)&&s++,/[a-z]+/.test(e)&&s++,/[A-Z]+/.test(e)&&s++,/[`~!@#$%^&*()_\.{}|:<>?,/]+/.test(e)&&s++,1==s)return $("#J-item-level").find(".level-list").removeClass("level-default level-second level-three"),$("#J-item-level").find(".level-list").addClass("level-default"),void $(".level-txt").html("弱");if(2==s||3==s)return $("#J-item-level").find(".level-list").removeClass("level-default level-second level-three"),$("#J-item-level").find(".level-list").addClass("level-second"),void $(".level-txt").html("中");if(4==s)return $("#J-item-level").find(".level-list").removeClass("level-default level-second level-three"),$("#J-item-level").find(".level-list").addClass("level-three"),void $(".level-txt").html("强")}else $("#J-item-level").css({display:"none"}),$(this).parent().parent().removeClass("form-verify-success"),$(this).parent().parent().addClass("form-verify-error"),$("#pwdmessage").html('<i class="icon"></i>请输入6-20位字符，可使用数字、字母或符号进行组合')}),$("#J-inp-pwd2").on("blur",function(){l[2].flag=!1;var e=$("#J-inp-pwd").val();if($(this).val().length<6)return $(this).parent().parent().addClass("form-verify-error"),$(this).parent().parent().removeClass("form-verify-success"),void $("#pwd2message").html('<i class="icon"></i>至少需要6个字符');$(this).val()==e?(l[2].flag=!0,$(this).parent().parent().addClass("form-verify-success"),$(this).parent().parent().removeClass("form-verify-error"),$("#pwd2message").html('<i class="icon"></i>')):($(this).parent().parent().addClass("form-verify-error"),$(this).parent().parent().removeClass("form-verify-success"),$("#pwd2message").html('<i class="icon"></i>两次输入密码不一致'))}),l[3].ele.on("click",function(){l[3].flag=this.checked}),l[4].ele.on("click",function(){l[4].flag=this.checked}),$("#btnSubmit").on("click",function(){for(var e=0;e<l.length;e++)if(!l[e].flag)return;var s=l[0].ele.val(),r=l[1].ele.val();$.ajax({type:"POST",url:"./php/regist.php",data:"username="+s+"&password="+r+"&type=register",success:function(e){"注册成功成功"==e?window.location.href="./login.html":alert(e)}})})});