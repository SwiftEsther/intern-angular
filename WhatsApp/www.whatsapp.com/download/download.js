angular.module("downloadApp", [])
.controller("downloadController", function($scope) {
	$scope.downloadPageTitle="Download WhatsApp";
	$scope.whatsappLink="Download WhatsApp";
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

	$scope.sectionDownload={intro:"Download WhatsApp for",title1:"Phones",installLink:"whatsapp.com/dl",installMsg:"on your mobile phone to install.",platforms:"Other platforms",S40:"Nokia S40",BB:"BlackBerry"};
	$scope.blockActionActions=["Android", "iPhone", "Mac or Windows PC","Windows Phone"];
	$scope.visit="Visit";
	$scope.privacy="Terms & Privacy policy";
	$scope.hintText1="WhatsApp must be installed on your phone.";
	$scope.hintText2="By clicking the Download button, you agree to our";
	$scope.versions={title:"Supported versions:",Mac:"Mac OS X 10.9 and higher",Windows:"Windows 8 and higher",v1:"(64-bit version)",v2:"(32-bit version)"};
	$scope.featureTxt2="to send and receive messages from your browser?";
	$scope.featureTxt1="Did you try";
	$scope.webLink="WhatsApp Web";

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

