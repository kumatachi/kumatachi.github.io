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
require('./topBar/topBar.js');
require('./home/home.js');
require('./projects/projects.js');
require('./contact/contact.js');
module.exports = require('./module.js');

},{"./contact/contact.js":2,"./home/home.js":3,"./module.js":5,"./projects/projects.js":6,"./topBar/topBar.js":7}],5:[function(require,module,exports){
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

},{"../module.js":5}],7:[function(require,module,exports){
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

},{"../module.js":5}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcQmVubmlseW5cXERvY3VtZW50c1xcR2l0SHViXFxrdW1hdGFjaGkuZ2l0aHViLmlvXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOi9Vc2Vycy9CZW5uaWx5bi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL21haW4uanMiLCJjOi9Vc2Vycy9CZW5uaWx5bi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9jb250YWN0L2NvbnRhY3QuanMiLCJjOi9Vc2Vycy9CZW5uaWx5bi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9ob21lL2hvbWUuanMiLCJjOi9Vc2Vycy9CZW5uaWx5bi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9pbmRleC5qcyIsImM6L1VzZXJzL0Jlbm5pbHluL0RvY3VtZW50cy9HaXRIdWIva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL21vZHVsZS5qcyIsImM6L1VzZXJzL0Jlbm5pbHluL0RvY3VtZW50cy9HaXRIdWIva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL3Byb2plY3RzL3Byb2plY3RzLmpzIiwiYzovVXNlcnMvQmVubmlseW4vRG9jdW1lbnRzL0dpdEh1Yi9rdW1hdGFjaGkuZ2l0aHViLmlvL2FwcC9uZ0t1bWEvdG9wQmFyL3RvcEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd0ZW1wbGF0ZXMnLCByZXF1aXJlKCcuL25nS3VtYScpXSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXHJcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQgY29udGFjdCBtb2R1bGUnKTtcclxuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9jb250YWN0Jywge1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICRzY29wZS5mb28gPSAnYmFyJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXHJcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQgaG9tZSBtb2R1bGUnKTtcclxuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXHJcbiAqL1xyXG5cclxuLy8gbGlzdCBhbGwgdGhlIG1vZHVsZXMgb2YgT3Bwb3J0dW5pdHlGaW5kZXJcclxucmVxdWlyZSgnLi90b3BCYXIvdG9wQmFyLmpzJyk7XHJcbnJlcXVpcmUoJy4vaG9tZS9ob21lLmpzJyk7XHJcbnJlcXVpcmUoJy4vcHJvamVjdHMvcHJvamVjdHMuanMnKTtcclxucmVxdWlyZSgnLi9jb250YWN0L2NvbnRhY3QuanMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21vZHVsZS5qcycpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzMvMjAxNC5cclxuICovXHJcbnZhciBuYW1lID0gJ29wcG9ydHVuaXR5RmluZGVyJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtcclxuICAnbmdSb3V0ZSdcclxuXSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5hbWU7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXHJcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQgcHJvamVjdHMgbW9kdWxlJyk7XHJcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvcHJvamVjdHMnLCB7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncHJvamVjdHMuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICRzY29wZS5mb28gPSAnYmFyJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXHJcbiAgLmRpcmVjdGl2ZSgndG9wQmFyJywgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3RvcEJhci5odG1sJyxcclxuICAgICAgc2NvcGU6IHtcclxuICAgICAgICB0aXRsZTogXCJAXCIsXHJcbiAgICAgICAgc3ViVGl0bGU6IFwiQFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuIl19
