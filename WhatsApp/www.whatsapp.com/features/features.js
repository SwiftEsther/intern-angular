angular.module("featuresApp", [])
.controller("featuresController", function($scope) {
	$scope.FeaturesPageTitle="WhatsApp Features";
	$scope.whatsappLink="Features";
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
	$scope.hint="Data charges may apply. Contact your provider for details.";
	$scope.text={intro:"Texts",title:"Simple, Reliable messaging", 
		msg1:"Message your friends and family for",
		msg2:"WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.",
	};
	$scope.free="free";
	$scope.groups={intro:"Group Chat",title:"Keep the Conversation Going", 
		text:"Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos with up to 256 people at once. You can also name your group, mute or customize notifications, and more.",
		friends:"Friends",
		family:"Family",
		weekend:"Weekend"
	};
	$scope.web={intro:"WhatsApp on Web and Desktop",title:"Groups to keep in touch", 
		text1:"With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you.",
		text2:"or visit",
		text3:"to get started.",
		downloadLink:"Download the desktop app",
		webLink:"web.whatsapp.com"
	};
	$scope.calls={intro:"WhatsApp Voice and Video Calls",title:"Speak Freely", 
		text1:"With voice calls, you can talk to your friends and family for",
		text2:"even if they're in another country. And with",
		text3:"video calls, you can have face-to-face conversations for when voice or text just isn't enough.                WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges."
	};
	$scope.security={intro:"End-to-end encryption",title:"Share Moments that Matter", 
		text:"Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp."
	};
	$scope.media={intro:"Photos and Videos",title:"Security by Default", 
		text:"Send photos and videos on WhatsApp instantly. You can even capture the moments that matter to you most with a built-in camera. With WhatsApp, photos and videos send quickly even if you're on a slow connection."
	};
	$scope.voice={intro:"Voice Messages",title:"Say What's On Your Mind", 
		text:"Sometimes, your voice says it all. With just one tap you can record a Voice Message, perfect for a quick hello or a longer story."
	};
	$scope.docs={intro:"Documents",title:"Document Sharing Made Easy", 
		text:"Send PDFs, documents, spreadsheets, slideshows and more, without the hassle of email or file sharing apps. You can send documents up to 100 MB, so it's easy to get what you need over to who you want."
	};
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

