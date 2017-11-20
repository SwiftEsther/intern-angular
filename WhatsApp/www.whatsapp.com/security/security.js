angular.module("securityApp", [])
.controller("securityController", function($scope) {
	$scope.securityPageTitle="WhatsApp Security";
	$scope.whatsappLink="WhatsApp Security";
	$scope.helpTranslate="Help translate WhatsApp into your language";
	$scope.lngOpenTxt="Select your language";
	$scope.languages= ["Azərbaycanca", "Afrikaans", "Bahasa Indonesia", "Bahasa Melayu", 
		"Català", "Česky", "Dansk", "Deutsch", 
		"Eesti", "English", "Español", "Français", 
		"Gaeilge", "Hrvatski", "Italiano", "Kiswahili", 
		"Latviešu", "Lietuviškai", "Magyar", "Nederlands", 
		"Norsk", "Oʻzbekcha", "Pilipino", "Polski", 
		"Português (BR)", "Português (PT)", "Română", "Shqip", 
		"Slovenčina", "Slovenščina", "Suomi", "Svensk", 
		"Tiếng Việt", "Türkçe", "Ελληνικά", "Български", 
		"Қазақша", "Македонски", "Pусский", "Српски", 
		"Українська‏", "עברית‏", "العربية", "فارسی", 
		"اردو", "বাংলা ", "हिंदी", "ગુજરાતી", 
		"ಕನ್ನಡ", "मराठी", "தமிழ்", "తెలుగు", 
		"മലയാളം", "ภาษาไทย", "简体中文", "繁體中文", 
		"日本語", "한국어"];
	$scope.siteNav=["WhatsApp Web","Features","Download","Security","FAQ"];
	$scope.blurb={title:"Privacy and Security is in our DNA",
		text1:"From day one, we built WhatsApp to help you stay in touch with friends, share vital information during",
		link1:"natural disasters", 
		text2:", reconnect with",
		link2:"separated families",
		text3:", or seek a",
		link3:"better life",
		text4:". Some of your most personal moments are shared with WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages, photos, videos, voice messages, documents, and calls are secured from falling into the wrong hands."
	};
	$scope.default={title:"Security by Default",
		text:"WhatsApp's end-to-end encryption is available when you and the people you message use the latest versions of our app. Many messaging apps only encrypt messages between you and them, but WhatsApp's end-to-end encryption ensures only you and the person you're communicating with can read what is sent, and nobody in between, not even WhatsApp. This is because your messages are secured with a lock, and only the recipient and you have the special key needed to unlock and read them. For added protection, every message you send has its own unique lock and key. All of this happens automatically: no need to turn on settings or set up special secret chats to secure your messages."
	};
	$scope.narrow={title1:"Speak Freely",title2:"Messages that Stay with You",title3:"See for Yourself",title4:"Get the Details",
		body1:"WhatsApp Calling lets you talk to your friends and family, even if they're in another country. Just like your messages, WhatsApp calls are end-to-end encrypted so WhatsApp and third parties can't listen to them.",
		body2:"Your messages should be in your hands. That's why WhatsApp doesn't store your messages on our servers once we deliver them, and end-to-end encryption means that WhatsApp and third parties can't read them anyway.",
		body3:"WhatsApp lets you check whether the calls you make and messages you send are end-to-end encrypted. Simply look for the indicator in contact info or group info.",
		bodyp:"Read an",
		bodya:"in-depth technical explanation",
		bodytext:"of WhatsApp's end-to-end encryption, developed in collaboration with Open Whisper Systems."
	};
	$scope.free="free";
	$scope.whatsappFooterListTitle="WhatsApp";
	$scope.whatsappFooterList=["Features","Security","Download","WhatsApp Web"];
	$scope.companyFooterListTitle="Company";
	$scope.companyFooterList=["About","Careers","Brand Center","Get in touch","Blog"];
	$scope.downloadFooterListTitle="Download";
	$scope.downloadFooterList=["Mac/pc","Android","iPhone","windows Phone","Nokia"];
	$scope.helpFooterListTitle="Help";
	$scope.helpFooterList=["FAQ","Twitter","Facebook"];
	$scope.footer="2017 © WhatsApp Inc.";
	$scope.privacyLink="Privacy & Terms";
	});

