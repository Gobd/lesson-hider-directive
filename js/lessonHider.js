angular.module('directivePractice').directive('lessonHider', function() {
	return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
			lesson: '=',
			dayAlert: '&',
			check: '=',
			checkChange: '&'
    },
		controller: function($scope, lessonService){
			$scope.getSchedule = lessonService.getSchedule();
		},
    link: function(scope, element, attrs){

			function lineT() {
				scope.schedule.forEach(function(scheduleDay){
			if (scheduleDay.lesson === scope.lesson && scope.check) {
					scope.lessonDay = scheduleDay.weekday;
					element.css('text-decoration', 'line-through');
						return;
					}
				});

			}
			scope.getSchedule.then(function(response){
				scope.schedule = response.data;
					lineT();
			});
    }


	};
});
