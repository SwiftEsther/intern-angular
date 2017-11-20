angular.module("faqApp", [])
.controller("faqController", function($scope) {
	$scope.FAQPageTitle="WhatsApp FAQ";
	$scope.whatsappLink="FAQ";
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
	$scope.title="How can we help you?";
	$scope.hint="You can also browse the topics below to find what you are looking for.";
	$scope.FAQs="Frequently Asked Questions";
	$scope.more="View all questions";
	$scope.topic1={title:"General", 
		subTopic1:"Updating WhatsApp",
		subTopic2:"Changing WhatsApp's languages",
		subTopic3:"Lost and stolen phones"
	};
	$scope.topic2={title:"WhatsApp Web", 
		subTopic1:"How do I use WhatsApp on my computer?",
		subTopic2:"How do I use WhatsApp Web?",
		subTopic3:"Configuring your notifications"
		};
	$scope.topic3={title:"Android", 
		subTopic1:"Verifying your number",
		subTopic2:"Restoring your chat history",
		subTopic3:"Reinstalling WhatsApp"
		};
	$scope.topic4={title:"iPhone", 
		subTopic1:"Restoring your chat history",
		subTopic2:"Why don't I get notifications?",
		subTopic3:"Reinstalling WhatsApp"
		};
	$scope.topic5={title:"Windows Phone", 
		subTopic1:"Adding contacts",
		subTopic2:"Understanding last seen and online",
		subTopic3:"Problems sending or receiving messages"
		};
	$scope.topic6={title:"Nokia S40", 
		subTopic1:"Support for older operating systems",
		subTopic2:"How do I use WhatsApp Web?",
		subTopic3:"Changing phone numbers and/or phones"
		};
	$scope.topic7={title:"Nokia S60", 
		subTopic1:"Support for older operating systems"
		};
	$scope.topic8={title:"BlackBerry", 
		subTopic1:"Support for older operating systems",
		subTopic2:"How do I export my chat history?",
		subTopic3:"Changing phone numbers and/or phones"
		};
	$scope.topic9={title:"BlackBerry 10", 
		subTopic1:"Support for older operating systems",
		subTopic2:"How do I export my chat history?",
		subTopic3:"Changing phone numbers and/or phones"
		};
	$scope.whatsappFooterListTitle="WhatsApp";
	$scope.whatsappFooterList=["Features","Security","Download","WhatsApp Web"];
	$scope.companyFooterListTitle="Company";
	$scope.companyFooterList=["About","Careers","Brand Center","Get in touch","Blog"];
	$scope.downloadFooterListTitle="Download";
	$scope.downloadFooterList=["Mac/pc","Android","iPhone","windows Phone","BlackBerry","Nokia"];
	$scope.helpFooterListTitle="Help";
	$scope.helpFooterList=["FAQ","Twitter","Facebook"];
	$scope.footer="2017 © WhatsApp Inc.";
	$scope.privacyLink="Privacy & Terms";
	});

