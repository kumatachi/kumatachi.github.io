(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by desmond on 11/3/2014.
 */
angular.module('app', ['templates', require('./ngKuma')]);

},{"./ngKuma":3}],2:[function(require,module,exports){
/**
 * Created by desmond on 11/6/2014.
 */
angular.module(require('../module.js'))
  .config(function($routeProvider, $locationProvider){
    console.log('load home module');
    $routeProvider.when('/', {
      templateUrl: 'home.html',
      controller: function($scope) {
        $scope.foo = 'bar';
      }
    });
  });

},{"../module.js":4}],3:[function(require,module,exports){
/**
 * Created by desmond on 11/3/2014.
 */

// list all the modules of OpportunityFinder
require('./topBar/topBar.js');
require('./home/home.js');
require('./projects/projects.js');

module.exports = require('./module.js');

},{"./home/home.js":2,"./module.js":4,"./projects/projects.js":5,"./topBar/topBar.js":6}],4:[function(require,module,exports){
/**
 * Created by desmond on 11/3/2014.
 */
var name = 'opportunityFinder';

angular.module(name, [
  'ngRoute'
]);

module.exports = name;

},{}],5:[function(require,module,exports){
/**
 * Created by desmond on 11/6/2014.
 */
angular.module(require('../module.js'))
  .config(function($routeProvider, $locationProvider){
    console.log('load projects module');
    $routeProvider.when('/projects', {
      templateUrl: 'projects.html',
      controller: function($scope) {
        $scope.foo = 'bar';
      }
    });
  });

},{"../module.js":4}],6:[function(require,module,exports){
/**
 * Created by desmond on 11/3/2014.
 */
angular.module(require('../module.js'))
  .directive('topBar', function() {
    return {
      templateUrl: 'topBar.html',
      scope: {
        title: "@",
        subTitle: "@"
      }
    }
  });

},{"../module.js":4}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcQmVubmlseW5cXERvY3VtZW50c1xcR2l0SHViXFxrdW1hdGFjaGkuZ2l0aHViLmlvXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOi9Vc2Vycy9CZW5uaWx5bi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL21haW4uanMiLCJjOi9Vc2Vycy9CZW5uaWx5bi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9ob21lL2hvbWUuanMiLCJjOi9Vc2Vycy9CZW5uaWx5bi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9pbmRleC5qcyIsImM6L1VzZXJzL0Jlbm5pbHluL0RvY3VtZW50cy9HaXRIdWIva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL21vZHVsZS5qcyIsImM6L1VzZXJzL0Jlbm5pbHluL0RvY3VtZW50cy9HaXRIdWIva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL3Byb2plY3RzL3Byb2plY3RzLmpzIiwiYzovVXNlcnMvQmVubmlseW4vRG9jdW1lbnRzL0dpdEh1Yi9rdW1hdGFjaGkuZ2l0aHViLmlvL2FwcC9uZ0t1bWEvdG9wQmFyL3RvcEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndGVtcGxhdGVzJywgcmVxdWlyZSgnLi9uZ0t1bWEnKV0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzYvMjAxNC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKHJlcXVpcmUoJy4uL21vZHVsZS5qcycpKVxyXG4gIC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkIGhvbWUgbW9kdWxlJyk7XHJcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICRzY29wZS5mb28gPSAnYmFyJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxyXG4gKi9cclxuXHJcbi8vIGxpc3QgYWxsIHRoZSBtb2R1bGVzIG9mIE9wcG9ydHVuaXR5RmluZGVyXHJcbnJlcXVpcmUoJy4vdG9wQmFyL3RvcEJhci5qcycpO1xyXG5yZXF1aXJlKCcuL2hvbWUvaG9tZS5qcycpO1xyXG5yZXF1aXJlKCcuL3Byb2plY3RzL3Byb2plY3RzLmpzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxyXG4gKi9cclxudmFyIG5hbWUgPSAnb3Bwb3J0dW5pdHlGaW5kZXInO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobmFtZSwgW1xyXG4gICduZ1JvdXRlJ1xyXG5dKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmFtZTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS82LzIwMTQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcclxuICAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XHJcbiAgICBjb25zb2xlLmxvZygnbG9hZCBwcm9qZWN0cyBtb2R1bGUnKTtcclxuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9wcm9qZWN0cycsIHtcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwcm9qZWN0cy5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcclxuICAuZGlyZWN0aXZlKCd0b3BCYXInLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAndG9wQmFyLmh0bWwnLFxyXG4gICAgICBzY29wZToge1xyXG4gICAgICAgIHRpdGxlOiBcIkBcIixcclxuICAgICAgICBzdWJUaXRsZTogXCJAXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4iXX0=
