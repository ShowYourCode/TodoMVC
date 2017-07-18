(function (angular) {
	'use strict';
	angular
	.module('todoApp',[])
	.controller('TodoController',['$scope','$location',function($scope,$location){
		//赋值一个数组，给当前页面也最初的展示效果
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
		//form表单  添加任务名称
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
		//通过绑定的id删除要删除的项
		$scope.del=function(id){
			for(var i=0;i<$scope.arr.length;i++){
				if($scope.arr[i].id===id){
					$scope.arr.splice(i,1);
				}
			}
		}

		//通过id对当前任务进行编辑并保存
		$scope.editingId=-1;

		$scope.edit=function(id){
			$scope.editingId=id;
		};

		$scope.editSave=function(){
			$scope.editingId=-1;
		};


		//批量切换任务的选中状态
		
		$scope.isChecked=false;
		$scope.check=function(){
			for(var i =0;i<$scope.arr.length;i++){
				$scope.arr[i].isFinished=$scope.isChecked;
			}	
		}

		//点击删除完成的，留下为完成的
		$scope.clearCompleted=function(){
			// console.log(1);
			var newArr=[];
			for(var i =0;i<$scope.arr.length;i++){
				if(!$scope.arr[i].isFinished){
					newArr.push($scope.arr[i]);
				}
			}
			$scope.arr=newArr;
		}

		//点击按钮在没有任务完成是隐藏，有任务完成时显示；
		$scope.hasCompleted=function(){
			var ret=false;
			for(var i =0;i<$scope.arr.length;i++){
				if($scope.arr[i].isFinished){
					ret=$scope.arr[i].isFinished;
					break;
				}
			}
			return ret;
		}


		//计算没有完成的任务，并在下方显示
		$scope.calCount=function(){
			var count=0;
			for(var i =0;i<$scope.arr.length;i++){
				if(!$scope.arr[i].isFinished){
					count++;
				}
			}
			return count;
		}


		//通过地址栏锚点，决定显示的任务的类型
		$scope.status=undefined;

		$scope.location=$location;
		//$watch中监视的只能是$scope中的属性，所以把$location赋值给$scope.location,然后在$watch中监视$location的变化
		$scope.$watch('location.url()',function(newVal,oldVal){
			switch(newVal){
				case '/active':
					$scope.status=false;
					break;
				case '/completed':
					$scope.status=true;
					break;
				default:
					$scope.status=undefined;
					break;
			}
		})

	}])
})(angular);
