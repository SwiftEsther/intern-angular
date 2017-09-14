var app = angular.module('whatsApp',[]);
app.controller('namesCtrl',function($scope){
	$scope.contacts = [
		{name: 'Akinloose Esther', phone: 08160211811},
		{name: 'Yewande Ojo', phone: 07068487500}
	];
	$scope.orderByMe=function(contact){
		$scope.myOrderBy = contact;
	}
});