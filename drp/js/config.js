// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
//Config.title = "wasdRP";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

Config.enableGameMode = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = false;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Спасибо что играете на нашем сервере!",
  "На сервере имеется донат система. Тем самым, вы можете поддержать проект.",
  "У нас имеется форум! 'wasdrp.tk/forum'",
];

var l_bgVideo = false;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
/*var l_musicPlaylist = [
	{youtube: "NpU_aN54eJA", name: "Oliver Tree - Jerk"},
	{youtube: "acwrM21HL5o", name: "Eduardo Luzquiños - Like That x Sunday Best"},
	{youtube: "wP5RCUQGUJ8", name: "SHANGUY - Toukassé"},
	{youtube: "ZQTd8_838Oc", name: "Little Big - UNO"},
	{youtube: "J_QGZspO4gg", name: "Sia - Snowman"},
	{youtube: "q_iNBlzbxRs", name: "Dead or Alive - You Spin Me 'Round (Like a Record)"},
	{youtube: "_n3LYYrBRtc", name: "VIDEOCLUB - Amour Plastique"},
	{youtube: "papuvlVeZg8", name: "Clean Bandit - Rockabye"},
	{youtube: "hcuPAUdhJLg", name: "90sFlav - Ｃａｌｌ ｍｅ"},
	{youtube: "CAMWdvo71ls", name: "Stromae - Tous Les Mêmes"},
	{youtube: "nsXwi67WgOo", name: "Lil Nas X - MONTERO - (Call Me By Your Name)"},
	{youtube: "iOxzG3jjFkY", name: "Willy William - Ego"},
	{youtube: "gupf5Q1PzAU", name: "Время и Стекло - Имя 505"},
	{youtube: "cTM8mwRwpU4", name: "Время и Стекло - Песня 404"},
	{youtube: "CY8E6N5Nzec", name: "Marshmello & Anne-Marie - FRIENDS"},
	{youtube: "M84fFXooS5w", name: "Ariana Grande - 7 rings"},
	{youtube: "vRAfnul80ao", name: "347aidan - Dancing in My Room"},
	{youtube: "TRpSC_hWkGE", name: "Dua Lipa - New Rules"},
	{youtube: "LcrahEiFuUM", name: "Dua Lipa - Don’t Start Now"},
	{youtube: "vw3k_jWa-gI", name: "Yeah Yeah Yeahs - Heads Will Roll"},
	{youtube: "OE140zsQ08I", name: "Sub Urban - Cradles"},
	{youtube: "BJxudKhtd9c", name: "ElyOtto - SugarCrash!"},
	{youtube: "Lj9GzcHbJ-w", name: "Alice DJ - Better Off Alone"},
	{youtube: "VEe_yIbW64w", name: "真夜中のドア/Stay With Me"},
	{youtube: "7J-f8XPsHxE", name: "grover washington jr - just the two of us (slowed)"},
	{youtube: "pndGhXamZAI", name: "Twenty One Pilots - Chlorine"},
	{youtube: "QhPfq6SLdwI", name: "Camila Cabello - Don't Go Yet"},
	{youtube: "h-obAHlCcC4", name: "Måneskin - I WANNA BE YOUR SLAVE"},
	{youtube: "gXXySBAyZVo", name: "The Weeknd & Ariana Grande - Save Your Tears (Remix)"},
	{youtube: "yWHrYNP6j4k", name: "The Kid LAROI, Justin Bieber - Stay"},
	{youtube: "3vjkh-acmTE", name: "Mitski - Washing Machine Heart"},
	{youtube: "qooWnw5rEcI", name: "Mitski - Nobody"},
	{youtube: "NLi2v-Gq-5A", name: "Crystal Castles - Empathy"}, 
	{youtube: "qpQSjf-0Lc8", name: "Billie Eilish - bitches broken hearts"},
	{youtube: "Q2WcdaF8uL8", name: "Billie Eilish - Bored"},
	{youtube: "sLgz57tguKo", name: "Måneskin - Beggin"},
	{youtube: "V3DO4h9flY0", name: "Lordly - Feder (MDNZ Remix)"},
	{youtube: "sVx1mJDeUjY", name: "Mr.Kitty - After Dark"},
	{youtube: "A5Drgaa2zjg", name: "M|O|O|N - Crystals"},
	{youtube: "nZfb7GnoyBg", name: "Lucky Twice - Lucky"},
	{youtube: "XxaPjwdaX1g", name: "Kesha - Backstabber"},
	{youtube: "OcUDK4kAUIw", name: "Kali Uchis - Dead To Me"},
	{youtube: "_o_XqgU3MJU", name: "idfc slowed - blackbear"},
	{youtube: "JJlUTMxn7oc", name: "lady gaga - lovegame (sped up + reverb)"},
	{youtube: "KCZy5PWms70", name: "poker face - sped up"},
	{youtube: "SQVkYgkMzhY", name: "Eminem - The Monster ft. Rihanna "},
	{youtube: "K1FlAphL2p8", name: "twenty one pilots - Stressed Out"},
	{youtube: "cULQhvuq1Zc", name: "The Neighbourhood - Sweater Weather"},
	{youtube: "V0UZd0cccDw", name: "Just dance (sped up)"},
	{youtube: "lFwyNeLMmk4", name: "Sean Paul, Dua Lipa - No Lie"},
	{youtube: "sqVARC8zTmY", name: "天上太阳红彤彤"},
	{youtube: "CVxMTl6cUSE", name: "Psy - Gangnam Style"},
	{youtube: "Y7n5JX0zxSw", name: "Psy - Gentleman"},
	{youtube: "t6TxZn4zXB8", name: "Studio Killers - Jenny"},
	{youtube: "2Ax_EIb1zks", name: "TheFatRat - Xenogenesis"}

];
*/
var l_musicPlaylist = [
	{youtube: "IawWFY98Gmw", name: "West & Zander - Autumn Haze"},
	//{youtube: "fuHBJD3bEM0", name: "Lofive - Crazy like That"},
	//{youtube: "EUowhllNb1w", name: "Sum Wave - Sipping on Martinis"},
	//{youtube: "nwENZJ8c0aw", name: "Ooyy - Tei"},
];

var l_christmasmusicPlaylist = [
	{youtube: "E8gmARGvPlI", name: "Wham! - Last Christmas"},
	{youtube: "aAkMkVFwAoo", name: "Mariah Carey - All I Want for Christmas Is You"},
	{youtube: "Z0ajuTaHBtM", name: "Bobby Helms - Jingle Bell Rock"}
];

var l_bgImages = [
	"images/bg1.jpg",
	"images/bg2.jpg",
	"images/bg3.jpg",
	"images/bg4.jpg",
	"images/bg5.jpg",
	"images/bg6.png",
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 0.5;

var l_bgImagesRandom = true;

var l_bgImageDuration = 5000;

var l_bgImageFadeVelocity = 2000;
/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 10;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "bg1.jpg";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
