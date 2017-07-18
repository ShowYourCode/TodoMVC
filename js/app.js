(function (angular) {
	'use strict';
	angular
	.module('todoApp',[])
	.controller('TodoController',['$scope',function($scope){
		$scope.arr=[
			{
				id:1,name:'抽烟',isFinished:false
			},
			{
				id:2,name:'喝酒',isFinished:false
			},
			{
				id:3,name:'赌博',isFinished:false
			},
			{
				id:4,name:'大宝剑',isFinished:true
			}
		];
		$scope.taskName='';
		$scope.add=function(){
			if($scope.taskName.trim()===''){
				return;
			}
			var id,
				length=$scope.arr.length;
			
			if(length===0){
				id=1;
			}
			$scope.arr.push({
				id:id,
				name:$scope.taskName,
				isFinished:false
			})
			$scope.taskName='';
		}
		$scope.del=function(id){
			for(var i=0;i<$scope.arr.length;i++){
				if($scope.arr[i].id===id){
					$scope.arr.splice(i,1);
				}
			}
		}

		$scope.editingId=-1;

		$scope.edit=function(id){
			$scope.editingId=id;
		}

		$scope.editSave=function(){
			$scope.editingId=-1;
		}



	}])
})(angular);
