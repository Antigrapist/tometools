(function(e,j){e.execute(function(){e.when("A","jQuery","SWFObject").register("AudibleAudioPlayer",function(e,p,n){function y(f,b){var a="adbl_smpl_";b===s?f.logFirstPlay?(f.logFirstPlay=0,b=t,a+="frst_play"):a+="play":b===w?a+="paus":b===r&&(a+="endd");typeof f.asin!=="undefined"?p.post("/gp/audible/sample-player/log/"+f.asin+"?s="+b+"&ref="+a):p.post("/gp/audible/sample-player/log?s="+b+"&ref="+a)}function J(f){function b(){a.audioObj.addEventListener("ended",function(){a.audioId.trigger("audioEnded");
a.isPlaying=0;y(a,r)});a.audioObj.addEventListener("playing",function(){a.audioId.trigger("audioPlaying");a.isPlaying=1;y(a,s)});a.audioObj.addEventListener("pause",function(){a.audioId.trigger("audioPaused");a.isPlaying=0;y(a,w)});a.audioObj.addEventListener("loadstart",function(){a.audioId.trigger("audioLoad");a.isPlaying=0})}var a={};a.initializePlayer=function(d){a.options=d;a.isFirstPlay=1;a.logFirstPlay=1;a.asin=d.asin};a.play=function(){if(a.isFirstPlay){var d=a.options,k=p("<audio />");k.attr("id",
d.audioId);k.attr("src",d.audioSrc);p("body").append(k);a.audioObj=p("#"+d.audioId).get(0);a.audioId=p("#"+d.audioId);b();typeof f.bindEventsCallback==="function"&&f.bindEventsCallback(a.audioId);a.isFirstPlay=0;u.push(a)}a.audioObj.play()};a.pause=function(){a.audioObj.pause()};return a}function H(f){var b={};if(!j.Mp3Interface)j.Mp3Interface={currentPlayer:null,setCurrentPlayer:function(a){if(a){var d=j.Mp3Interface;if(d.currentPlayer&&d.currentPlayer.options.audioId!==a.options.audioId&&d.currentPlayer.isPlaying)n.getObjectById(d.currentPlayer.options.audioId).pauseSong(),
d.currentPlayer.isPlaying=0;d.currentPlayer=a}},callback:function(a){var d=j.Mp3Interface;if(d.currentPlayer)if(a==="onLoad")d.currentPlayer.options.audioControllerId.trigger("audioLoad"),d.currentPlayer.isPlaying=0;else if(a==="onPlay")d.currentPlayer.options.audioControllerId.trigger("audioPlaying"),d.currentPlayer.isPlaying=1,y(d.currentPlayer,s);else if(a==="onPause")d.currentPlayer.options.audioControllerId.trigger("audioPaused"),d.currentPlayer.isPlaying=0,y(d.currentPlayer,w);else if(a==="onComplete")d.currentPlayer.options.audioControllerId.trigger("audioEnded"),
d.currentPlayer.isPlaying=0,y(d.currentPlayer,r)}};b.initializePlayer=function(a){var d=p("<div />");d.attr("id",a.audioId);p("body").append(d);var d=a.flashPlayerUrl,f=a.audioId,v=a.minFlashVersion,e={protocol:j.location.protocol.replace(":","")};n.embedSWF(d,f,1,1,v,null,e,{allowScriptAccess:"always"});b.isFirstPlay=1;b.isPlaying=0;b.logFirstPlay=1;b.options=a;typeof a.bindEventsCallback==="function"&&a.bindEventsCallback(b.options.audioControllerId)};b.play=function(){j.Mp3Interface.setCurrentPlayer(this);
if(!b.isPlaying)b.isFirstPlay?(n.getObjectById(b.options.audioId).playSong(f.audioSrc),b.isFirstPlay=0):n.getObjectById(b.options.audioId).pauseSong()};b.pause=function(){b.isPlaying&&n.getObjectById(b.options.audioId).pauseSong()};return b}var u=[],s="Play",t="FirstPlay",w="Paused",r="Ended";return function(){var f={};f.init=function(b){if(typeof b.audioSrc!=="undefined"&&typeof b.audioId!=="undefined"&&typeof b.audioControllerId!=="undefined"){var a=b.audioSrc,d=document.createElement("audio"),
k,v,a=a.match("[^.]+$");a!==null&&a.length>0&&(k=a[0],k==="mp3"?v="audio/mpeg":k==="ogg"?v="audio/ogg":k==="wav"&&(v="audio/wav"));k=v+'; codecs="'+k+'"';v=0;d&&d.canPlayType&&d.canPlayType(k)&&d.canPlayType(k).replace(/no/,"")&&(v=1);if(v)f.player=new J(b),f.player.initializePlayer(b),f.isPlayerAvailable=1;else if(b.flashPlayerUrl&&n&&n.hasFlashPlayerVersion("9.0.0"))b.minFlashVersion="9.0.0",f.player=new H(b),f.player.initializePlayer(b),f.isPlayerAvailable=1}};f.pause=function(){typeof f.player!==
"undefined"&&f.player.pause()};f.play=function(){if(typeof f.player!=="undefined"){f.player.play();for(var b=f.player.options.audioId,a=0;a<u.length;a++){var d=u[a];b!==d.options.audioId&&d.pause()}}};return f}});e.when("A","jQuery","AudibleAudioPlayer").register("AudibleSamplePlayer",function(e,p,n){var j=[];return{init:function(e){if(e&&e.flashPlayerUrl&&e.container){var H=p(e.container),u=e.pauseCallback,s=e.playCallback;H.each(function(){var t=p(this);if(typeof t!=="undefined"){var w=t.find(".audioPlaySample"),
r=t.find(".audioPlaying"),f=t.find(".audioPaused"),b=t.find(".audioLoading"),a=new n;j.push(a);var d={},k=t.prev();d.audioSrc=k.data("audiosource");d.audioId=k.data("audioid");d.asin=k.data("asin");d.flashPlayerUrl=e.flashPlayerUrl;d.audioControllerId=t;d.bindEventsCallback=function(a){a.bind("audioEnded",function(){f.hide();r.hide();w.show();b.hide()});a.bind("audioPlaying",function(){f.hide();w.hide();r.show();b.hide()});a.bind("audioPaused",function(){r.hide();w.hide();f.show();b.hide()});a.bind("audioLoad",
function(){r.hide();w.hide();f.hide();b.show()})};a.init(d);a&&a.isPlayerAvailable&&(r.hide(),f.hide(),b.hide(),w.show(),t.removeClass("a-hidden"),t.children().click(function(){a.player.isPlaying?(a.pause(),typeof u!=="undefined"&&u()):(a.play(),typeof s!=="undefined"&&s())}))}})}},pause:function(){j.forEach(function(e){e.player.isPlaying&&e.pause()})}}})})})(function(){var e=window.AmazonUIPageJS||window.P,j=e._namespace||e.attributeErrors;return j?j("AudibleSamplePlayerAssets"):e}(),window);