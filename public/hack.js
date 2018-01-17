import $ from 'jquery';
import './less/main.less';
import chrome from 'ui/chrome';


var securityBannerText = chrome.getInjected('securityBannerText');
var securityBannerColor = chrome.getInjected('securityBannerColor');
debugger;

$(document.body).ready( function(){
    $(".content").prepend(`<div class="securitybanner" style="background-color: ${securityBannerColor}"> ${securityBannerText} </div>`);
    $(".global-nav").css("top", "25px");
    $(".app-wrapper").css("top", "25px");
});
