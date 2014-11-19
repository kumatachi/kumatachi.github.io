(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by desmond on 11/3/2014.
 */
angular.module('app', ['templates', require('./ngKuma')]);

},{"./ngKuma":4}],2:[function(require,module,exports){
/**
 * Created by desmond on 11/6/2014.
 */
angular.module(require('../module.js'))
  .config(function($routeProvider, $locationProvider){
    console.log('load contact module');
    $routeProvider.when('/contact', {
      templateUrl: 'contact.html',
      controller: function($scope) {
        $scope.foo = 'bar';
      }
    });
  });

},{"../module.js":5}],3:[function(require,module,exports){
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

},{"../module.js":5}],4:[function(require,module,exports){
/**
 * Created by desmond on 11/3/2014.
 */

// list all the modules of OpportunityFinder
//require('./topBar/topBar.js');
require('./home/home.js');
require('./projects/projects.js');
require('./contact/contact.js');
module.exports = require('./module.js');

},{"./contact/contact.js":2,"./home/home.js":3,"./module.js":5,"./projects/projects.js":6}],5:[function(require,module,exports){
/**
 * Created by desmond on 11/3/2014.
 */
var name = 'opportunityFinder';

angular.module(name, [
  'ngRoute'
]);

module.exports = name;

},{}],6:[function(require,module,exports){
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

},{"../module.js":5}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcZGVzbW9uZFxcUHJvamVjdHNcXGt1bWF0YWNoaS5naXRodWIuaW9cXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsImM6L1VzZXJzL2Rlc21vbmQvUHJvamVjdHMva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbWFpbi5qcyIsImM6L1VzZXJzL2Rlc21vbmQvUHJvamVjdHMva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL2NvbnRhY3QvY29udGFjdC5qcyIsImM6L1VzZXJzL2Rlc21vbmQvUHJvamVjdHMva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL2hvbWUvaG9tZS5qcyIsImM6L1VzZXJzL2Rlc21vbmQvUHJvamVjdHMva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL2luZGV4LmpzIiwiYzovVXNlcnMvZGVzbW9uZC9Qcm9qZWN0cy9rdW1hdGFjaGkuZ2l0aHViLmlvL2FwcC9uZ0t1bWEvbW9kdWxlLmpzIiwiYzovVXNlcnMvZGVzbW9uZC9Qcm9qZWN0cy9rdW1hdGFjaGkuZ2l0aHViLmlvL2FwcC9uZ0t1bWEvcHJvamVjdHMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzMvMjAxNC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3RlbXBsYXRlcycsIHJlcXVpcmUoJy4vbmdLdW1hJyldKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS82LzIwMTQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcclxuICAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XHJcbiAgICBjb25zb2xlLmxvZygnbG9hZCBjb250YWN0IG1vZHVsZScpO1xyXG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2NvbnRhY3QnLCB7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29udGFjdC5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS82LzIwMTQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcclxuICAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XHJcbiAgICBjb25zb2xlLmxvZygnbG9hZCBob21lIG1vZHVsZScpO1xyXG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcclxuICAgICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICAgICAkc2NvcGUuZm9vID0gJ2Jhcic7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzMvMjAxNC5cclxuICovXHJcblxyXG4vLyBsaXN0IGFsbCB0aGUgbW9kdWxlcyBvZiBPcHBvcnR1bml0eUZpbmRlclxyXG4vL3JlcXVpcmUoJy4vdG9wQmFyL3RvcEJhci5qcycpO1xyXG5yZXF1aXJlKCcuL2hvbWUvaG9tZS5qcycpO1xyXG5yZXF1aXJlKCcuL3Byb2plY3RzL3Byb2plY3RzLmpzJyk7XHJcbnJlcXVpcmUoJy4vY29udGFjdC9jb250YWN0LmpzJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9tb2R1bGUuanMnKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXHJcbiAqL1xyXG52YXIgbmFtZSA9ICdvcHBvcnR1bml0eUZpbmRlcic7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShuYW1lLCBbXHJcbiAgJ25nUm91dGUnXHJcbl0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuYW1lO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzYvMjAxNC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKHJlcXVpcmUoJy4uL21vZHVsZS5qcycpKVxyXG4gIC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkIHByb2plY3RzIG1vZHVsZScpO1xyXG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL3Byb2plY3RzJywge1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3Byb2plY3RzLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICAgICAkc2NvcGUuZm9vID0gJ2Jhcic7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iXX0=
