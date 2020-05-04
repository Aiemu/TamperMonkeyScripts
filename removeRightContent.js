// ==UserScript==
// @name         Bilibili直播去除弹幕栏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove right content of live in bilibili.
// @author       Aiemu
// @match        https://live.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var del = document.getElementById("aside-area-vm").remove();
    var main = document.getElementsByClassName("player-ctnr left-container p-relative z-player-ctnr");
    main[0].style.cssText = "width: 86%; margin-left: 7%;";
})();
