// ==UserScript==
// @name           Youtube HTML5 Stop AutoPlay
// @namespace      http://smiler.se/
// @description    Prevent HTML5 videos on YouTube from autoplaying
// @include        *://youtube.com/watch?*
// @include        *://*.youtube.com/watch?*
// @include        *://youtube.com/watch#*
// @include        *://*.youtube.com/watch#*
// @include        *://*.youtube.com/embed/*
// @include        *://youtube.com/embed/*
// @grant          none
// ==/UserScript==

function onLoad() {
	setTimeout(function(){
    video = document.getElementsByTagName('video')[0];
		if (video) {
		    video.pause();
		}
	}, 300);
}

window.addEventListener('load', onLoad, false);
