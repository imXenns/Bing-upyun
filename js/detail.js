"use strict";var daydata=getUrlParam("daydata"),bigImgStr='\n            <a href="https://bing.nxingcloud.co/api/?day='+daydata+'" alt=""><img data-src="https://bing.nxingcloud.co/api/?day='+daydata+'" src="https://bing.nxingcloud.co/api/?day='+daydata+'&thumbnail=1" class="d-block w-100 rounded preview lazy" alt="bing"></a>\n';const Swal = require('sweetalert2');const Toast=Swal.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:3000});function getImgMsg(a){var e="";return $.ajax({type:"GET",async:!1,url:"https://bing.nxingcloud.co/api/",data:"type=json&day="+a,success:function(a){e=$.parseJSON(a)}}),e}$("#bigimg-wrap").children(".progressive").empty().append(bigImgStr),imgpro("#bigimg-wrap");var detailMsg=getImgMsg(daydata),imgSubDate=detailMsg.submission_date,imgTit=detailMsg.bing_title,imgUrlHd=detailMsg.bing_imgurl,imgUrlUhd=detailMsg.bing_imgurluhd;$("title").text(imgTit),$(".bigimg-text").empty().append('<span class="badge badge-secondary">'+imgSubDate+"</span>&nbsp;"+imgTit),new Artalk({el:'#vcomments',pageKey:`/?d=${imgSubDate}`,pageTitle:'',server:'https://artalk.nxingcloud.co',site:'必应每日一图', emoticons: ["https://cdn.nxingcloud.co/images/emoji/bilibili2233/bilibili2233.json","https://cdn.nxingcloud.co/images/emoji/Tieba/Tieba.json"],});var modalImgStr='\n<img class="rounded img-fluid" src="https://bing.nxingcloud.co/api/?day='+daydata+'" alt="">\n';$(".modal-img-wrap").empty().append(modalImgStr),$("#btnHd").click(function(){var n=new XMLHttpRequest;n.open("GET",imgUrlHd,!0),n.responseType="blob",n.onload=function(a){if(navigator.msSaveBlob){return navigator.msSaveBlob(n.response,"bingHd")}var e=window.URL.createObjectURL(n.response),t=document.createElement("a");t.href=e,t.download=imgUrlHd.substr(-15, 15),t.click()},n.send(),swal({title: "下载已开始！",icon: "success",button: "确定",});}),$("#btnUhd").click(function(){var n=new XMLHttpRequest;n.open("GET",imgUrlUhd,!0),n.responseType="blob",n.onload=function(a){if(navigator.msSaveBlob){return navigator.msSaveBlob(n.response,"bingUhd")}var e=window.URL.createObjectURL(n.response),t=document.createElement("a");t.href=e,t.download=imgUrlUhd.substring(26),t.click()},n.send(),Toast.fire({type:'success',title:'下载已开始！'});});