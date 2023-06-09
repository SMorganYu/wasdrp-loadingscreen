"use sctrict";

var isGmod = false;
var isTest = false;
var totalFiles = 50;
var totalCalled = false;
var downloadingFileCalled = false;
var percentage = 0;

/**
 * Gmod Called functions
 */
 
 function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

 
function GameDetails(
  servername,
  serverurl,
  mapname,
  maxplayers,
  steamid,
  gamemode
) {
  debug("GameDetails called");
  isGmod = true;

  if (Config.title) {
    $("#title").html(Config.title);
  } else {
    $("#title").html(servername);
  }
  $("#title").fadeIn();

  if (Config.enableMap) {
    $("#map").append(mapname);
    $("#map").fadeIn();
  } else {
    $("#map").hide();
  }

  if (Config.enableGameMode) {
    $("#gamemode").append(gamemode);
    $("#gamemode").fadeIn();
  } else {
    $("#gamemode").hide();
  }

  if (Config.enableSteamID) {
    $("#steamid").html(steamid);
  }
  $("#steamid").fadeIn();
}

function SetFilesTotal(total) {
  debug("SetFilesTotal called total: " + total);
  totalCalled = true;
  totalFiles = total;
}

function SetFilesNeeded(needed) {
  debug("SetFilesNeeded called needed: " + needed);
  if (totalCalled) {
    var sPercentage = 100 - Math.round((needed / totalFiles) * 100);
    percentage = sPercentage;
    setLoad(sPercentage);
  }
}

var fileCount = 0;
function DownloadingFile(filename) {
  filename = filename.replace("'", "").replace("?", "");
  debug("DownloadingFile called '" + filename + "'");
  downloadingFileCalled = true;
  $("#history").prepend('<div class="history-item">' + filename + "</div>");
  $(".history-item").each(function(i, el) {
    if (i > 10) {
      $(el).remove();
    }
    $(el).css("opacity", "" + 1 - i * 0.1);
  });
}

var allow_increment = true;
function SetStatusChanged(status) {
  debug("SetStatusChanged called '" + status + "'");
  $("#history").prepend('<div class="history-item">' + status + "</div>");
  $(".history-item").each(function(i, el) {
    if (i > 10) {
      $(el).remove();
    }
    $(el).css("opacity", "" + 1 - i * 0.1);
  });
  if (status === "Workshop Complete") {
    allow_increment = false;
    setLoad(80);
  } else if (status === "Client info sent!") {
    allow_increment = false;
    setLoad(95);
  } else if (status === "Starting Lua...") {
    setLoad(100);
  } else {
    if (allow_increment) {
      percentage = percentage + 0.1;
      setLoad(percentage);
    }
  }
}

/**
 * External Functions
 */
function loadAll() {
  $("nav").fadeIn();
  $("main").fadeIn();

  // first time loading if DownloadingFile isn't called after some time
  setTimeout(function() {
    debug("Checking if first time loading.. " + downloadingFileCalled);
    if (downloadingFileCalled) {
      announce(
        "Если вы заходите на сервер впервые, возможно у вас будет долго загружать workshop.",
        true
      );
    }
  }, 10000);
}
function loadBackground() {
  //if (Config.backgroundImage) {
  //  $(".background").css(
  //    "background-image",
  //    'url("images/' + Config.backgroundImage + '")'
  //  );
  //}
}

function setMusicName(name) {
	$("#music-name").fadeOut(2000, function() {
		$(this).html(name);
		$(this).fadeIn(2000);
	});
}

var youtubePlayer;
var actualMusic = -1;

function setLoad(percentage) {
  debug(percentage + "%");
  $(".overhaul").css("left", percentage + "%");
}
var permanent = false;
function announce(message, ispermanent) {
  if (Config.enableAnnouncements && !permanent) {
    $("#announcement").hide();
    $("#announcement").html(message);
    $("#announcement").fadeIn();
  }
  if (ispermanent) {
    permanent = true;
  }
}
function debug(message) {
  if (Config.enableDebug) {
    console.log(message);
    $("#debug").prepend(message + "<br>");
  }
}

function loadYoutube() {
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
	youtubePlayer = new YT.Player('player', {
	  height: '390',
	  width: '640',
	  events: {
	    'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange
	  }
	});
}

function onPlayerReady(event) {
	youtubePlayer.setVolume(l_musicVolume);
	if (youtubePlayer.isMuted()) youtubePlayer.unMute();
	nextMusic();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
    	nextMusic();
	}
}

$(function() {

	if (l_musicRandom)
		l_musicPlaylist = shuffle(l_musicPlaylist);

	if (l_bgImagesRandom)
		l_bgImages = shuffle(l_bgImages);	
	
	if (l_music) {
		loadYoutube();
		if (l_musicDisplay)
			$("#music").fadeIn(2000);		
	}

  if (l_bgVideo) {
		$("body").append("<video loop autoplay muted><source src='"+l_background+"' type='video/webm'></video>");
	}else{
		$.backstretch(l_bgImages, {duration: l_bgImageDuration, fade: l_bgImageFadeVelocity});
	}
	
});



function nextMusic() {
	actualMusic++;

	if (actualMusic >= l_musicPlaylist.length) {
		actualMusic = 0;
	}

	var atual = l_musicPlaylist[actualMusic];

	if (atual.youtube) {
		youtubePlayer.loadVideoById(atual.youtube);
	}else{
		$("body").append('<audio src="'+atual.ogg+'" autoplay>');
		$("audio").prop('volume', l_musicVolume/100);
		$("audio").bind("ended", function() {
			$(this).remove();
			nextMusic();
		});
	}

	setMusicName(atual.name);
}

function showMessage(message) {
	if (message >= l_messages.length)
		message = 0;

	$("#messages").fadeOut(l_messagesFade, function() {
		$(this).html(l_messages[message]);
		$(this).fadeIn(l_messagesFade);
	});

	setTimeout(function() {
		showMessage(message+1);
	}, l_messagesDelay + l_messagesFade*2);
}

/**
 * Initial function
 */
$(document).ready(function() {
  // load everything in when ready
  loadBackground();

  // print announcement messages every few seconds
  if (
    Config.announceMessages &&
    Config.enableAnnouncements &&
    Config.announcementLength
  ) {
    if (Config.announceMessages.length > 0) {
      var i = 0;
      setInterval(function() {
        announce(Config.announceMessages[i]);
        i++;
        if (i > Config.announceMessages.length - 1) {
          i = 0;
        }
      }, Config.announcementLength);
    }
  }

  // if it isn't loaded by gmod load manually
  setTimeout(function() {
    if (!isGmod) {
      debug("No Garry's mod testing..");
      isTest = true;
      loadAll();

      GameDetails(
        "wasdrp",
        "Serverurl",
        "",
        "Maxplayers",
        "SteamID",
        ""
      );

      //var totalTestFiles = 100;
      //SetFilesTotal(totalTestFiles);

      //var needed = totalTestFiles;
      setInterval(function() {
        if (needed > 0) {
          needed = needed - 1;
          SetFilesNeeded(needed);
          DownloadingFile("" + needed);
        }
      }, 500);

      //SetStatusChanged("Testing..");
    }
  }, 1000);
});
