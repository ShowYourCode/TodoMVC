(function (angular) {
	'use strict';
	angular
	.module('todoApp',[])
	.controller('TodoController',['$scope',function($scope){

		$scope.itemList=[
			{
				id:1,name:'抽烟',isFinished:false
			},
			{
				id:2,name:'喝酒',isFinished:true
			},
			{
				id:3,name:'赌博',isFinished:false
			},
			{
				id:4,name:'大宝剑',isFinished:false
			}
		]
		$scope.itemTask='';
		$scope.add=function(){
			if($scope.itemTask.trim()===''){
				return;
			}

			var id,
				length=$scope.itemList.length;
			if(length===0){
				id=1;
			}else{
				id=length+1;
			}
			$scope.itemList.push({
				id:id,
				name:$scope.itemTask,
				isFinished:false
			})
			$scope.itemTask='';
		}



	}])






})(angular);
