(function(){
angular.module("downloadApp", [])
.controller("downloadController", function($scope) {
	$scope.downloadPageTitle="Download WhatsApp";
	$scope.whatsappLink="Download WhatsApp";
	$scope.helpTranslate="Help translate WhatsApp into your language";
	$scope.lngOpenTxt="Select your language";
	$scope.languages= [
		{language: "Azərbaycanca", dataLng:"az", href:"indexf3e6.html?l=az",value:"?l=az"},
		{language: "Afrikaans", dataLng:"af", href:"indexc4c5.html?l=af",value:"?l=af"},
		{language: "Bahasa Indonesia", dataLng:"id", href:"indexe102.html?l=id",value:"?l=id"},
		{language: "Bahasa Melayu", dataLng:"ms", href:"index706d.html?l=ms",value:"?l=ms"}, 
		{language: "Català", dataLng:"ca", href:"indexb14c.html?l=ca",value:"?l=ca"}, 
		{language: "Česky", dataLng:"cs", href:"index33ef.html?l=cs",value:"?l=cs"}, 
		{language: "Dansk", dataLng:"da", href:"index05eb.html?l=da",value:"?l=da"}, 
		{language: "Deutsch", dataLng:"de", href:"index8c8a.html?l=de",value:"?l=de"}, 
		{language: "Eesti", dataLng:"et", href:"indexac65.html?l=et",value:"?l=et"}, 
		{language: "English", dataLng:"en", href:"indexd8cc.html?l=en",value:"?l=en"}, 
		{language: "Español", dataLng:"es", href:"indexb8c2.html?l=es",value:"?l=es"}, 
		{language: "Français", dataLng:"fr", href:"index0ee9.html?l=fr",value:"?l=fr"}, 
		{language: "Gaeilge", dataLng:"ga", href:"index86eb.html?l=ga",value:"?l=ga"}, 
		{language: "Hrvatski", dataLng:"hr", href:"indexf0f2.html?l=hr",value:"?l=hr"}, 
		{language: "Italiano", dataLng:"it", href:"index1876.html?l=it",value:"?l=it"}, 
		{language: "Kiswahili", dataLng:"sw", href:"index6034.html?l=sw",value:"?l=sw"}, 
		{language: "Latviešu", dataLng:"lv", href:"index7158.html?l=lv",value:"?l=lv"}, 
		{language: "Lietuviškai", dataLng:"lt", href:"indexa3df.html?l=lt",value:"?l=lt"}, 
		{language: "Magyar", dataLng:"hu", href:"index490c.html?l=hu",value:"?l=hu"}, 
		{language: "Nederlands", dataLng:"nl", href:"index175d.html?l=nl",value:"?l=nl"}, 
		{language: "Norsk", dataLng:"nb", href:"index52c3.html?l=nb",value:"?l=nb"}, 
		{language: "Oʻzbekcha", dataLng:"uz", href:"indexa2ce.html?l=uz",value:"?l=uz"}, 
		{language: "Pilipino", dataLng:"fil", href:"index7d26.html?l=fil",value:"?l=fil"}, 
		{language: "Polski", dataLng:"pl", href:"index1d17.html?l=pl",value:"?l=pl"}, 
		{language: "Português (BR)", dataLng:"pt_br", href:"index544b.html?l=pt_br",value:"?l=pt_br"}, 
		{language: "Português (PT)", dataLng:"pt_pt", href:"indexd28f.html?l=pt_pt",value:"?l=pt_pt"}, 
		{language: "Română", dataLng:"ro", href:"index0dcd.html?l=ro",value:"?l=ro"}, 
		{language: "Shqip", dataLng:"sq", href:"indexcb69.html?l=sq",value:"?l=sq"}, 
		{language: "Slovenčina", dataLng:"sk", href:"index87a3.html?l=sk",value:"?l=sk"}, 
		{language: "Slovenščina", dataLng:"sl", href:"index362b.html?l=sl",value:"?l=sl"}, 
		{language: "Suomi", dataLng:"fi", href:"indexf022.html?l=fi",value:"?l=fi"}, 
		{language: "Svensk", dataLng:"sv", href:"index3837.html?l=sv",value:"?l=sv"}, 
		{language: "Tiếng Việt", dataLng:"vi", href:"index7ce2.html?l=vi",value:"?l=vi"}, 
		{language: "Türkçe", dataLng:"tr", href:"index6d5f.html?l=tr",value:"?l=tr"}, 
		{language: "Ελληνικά", dataLng:"el", href:"index0943.html?l=el",value:"?l=el"}, 
		{language: "Български", dataLng:"bg", href:"indexa413.html?l=bg",value:"?l=bg"}, 
		{language: "Қазақша", dataLng:"kk", href:"indexe82e.html?l=kk",value:"?l=kk"}, 
		{language: "Македонски", dataLng:"mk", href:"indexb4cf.html?l=mk",value:"?l=mk"}, 
		{language: "Pусский", dataLng:"ru", href:"index8580.html?l=ru",value:"?l=ru"}, 
		{language: "Српски", dataLng:"sr", href:"index996b.html?l=sr",value:"?l=sr"}, 
		{language: "Українська‏", dataLng:"uk", href:"index47f1.html?l=uk",value:"?l=uk"}, 
		{language: "עברית‏", dataLng:"he", href:"index60db.html?l=he",value:"?l=he"}, 
		{language: "العربية", dataLng:"ar", href:"index57e5.html?l=ar",value:"?l=ar"}, 
		{language: "فارسی", dataLng:"fa", href:"indexcce4.html?l=fa",value:"?l=fa"}, 
		{language: "اردو", dataLng:"ur", href:"index6302.html?l=ur",value:"?l=ur"}, 
		{language: "বাংলা ", dataLng:"bn", href:"indexfd20.html?l=bn",value:"?l=bn"}, 
		{language: "हिंदी", dataLng:"hi", href:"index0873.html?l=hi",value:"?l=hi"}, 
		{language: "ગુજરાતી", dataLng:"gu", href:"indexb7cf.html?l=gu",value:"?l=gu"}, 
		{language: "ಕನ್ನಡ", dataLng:"kn", href:"index6a4e.html?l=kn",value:"?l=kn"}, 
		{language: "मराठी", dataLng:"mr", href:"indexb280.html?l=mr",value:"?l=mr"}, 
		{language: "தமிழ்", dataLng:"ta", href:"index2fc9.html?l=ta",value:"?l=ta"}, 
		{language: "తెలుగు", dataLng:"te", href:"index522e.html?l=te",value:"?l=te"}, 
		{language: "മലയാളം", dataLng:"ml", href:"index2518.html?l=ml",value:"?l=ml"}, 
		{language: "ภาษาไทย", dataLng:"th", href:"index04a4.html?l=th",value:"?l=th"}, 
		{language: "简体中文", dataLng:"zh_cn", href:"indexa3e4.html?l=zh_cn",value:"?l=zh_cn"}, 
		{language: "繁體中文", dataLng:"zh_tw", href:"index6503.html?l=zh_tw",value:"?l=zh_tw"}, 
		{language: "日本語", dataLng:"ja", href:"index4356.html?l=ja",value:"?l=ja"}, 
		{language: "한국어", dataLng:"ko", href:"indexe743.html?l=ko",value:"?l=ko"}
		];
	$scope.myLanguage = $scope.languages[9];
	
	$scope.onChange=function(){
		$location.path('/edit/'+$scope.language.id);
	};
	$scope.siteNav=["WhatsApp Web","Features","Download","Security","FAQ"];
	
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

	$scope.show = false;
	$scope.toggle_lng_menu = function() {
		$scope.show = !$scope.show;
    console.log($scope.show);
    };

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

	
});
})();
