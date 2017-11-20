angular.module("homeApp", [])
.controller("homeController", function($scope) {
	$scope.homeTitle="WhatsApp";
	$scope.whatsappLink="WhatsApp";
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
	$scope.hero={simple:"Simple.",
		secure:"Secure.",
		relMsg:"Reliable messaging.", 
		msg:"With WhatsApp, you'll get fast, simple, secure messaging and calling for",
		msg2:"available on phones all over the world.",
		hint:"Data charges may apply. Contact your provider for details."
	};
	$scope.free="free";
	$scope.downloadBtn="Download now";
	$scope.blockActionActions=["Android", "iPhone", "Mac or Windows PC","Windows Phone"];
	$scope.desktop="desktop";
	$scope.windowsPhone="wp";

	$scope.callsParagraph={Title:"WhatsApp Voice and Video Calls",
		subTitle:"Speak Freely",
		firstPart:"With voice calls, you can talk to your friends and family for",
		secondPart:"even if they're in another country. And with",
		lastPart:"video calls, you can have face-to-face conversations for when voice or text just isn't enough.                    WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges."
	};

	$scope.securityText="Security by Default";
	$scope.encryptText="End-to-end encryption";
	$scope.featureText="Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.";
	$scope.featuresBtnLabel="Explore Features";
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

