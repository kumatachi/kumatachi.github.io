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

module.exports = require('./module.js');

},{"./home/home.js":2,"./module.js":4,"./topBar/topBar.js":5}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVzbW9uZFxcV2Vic3Rvcm1Qcm9qZWN0c1xcT0ZGcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvZGVzbW9uZC9XZWJzdG9ybVByb2plY3RzL09GRnJvbnRlbmQvYXBwL21haW4uanMiLCJDOi9Vc2Vycy9kZXNtb25kL1dlYnN0b3JtUHJvamVjdHMvT0ZGcm9udGVuZC9hcHAvbmdLdW1hL2hvbWUvaG9tZS5qcyIsIkM6L1VzZXJzL2Rlc21vbmQvV2Vic3Rvcm1Qcm9qZWN0cy9PRkZyb250ZW5kL2FwcC9uZ0t1bWEvaW5kZXguanMiLCJDOi9Vc2Vycy9kZXNtb25kL1dlYnN0b3JtUHJvamVjdHMvT0ZGcm9udGVuZC9hcHAvbmdLdW1hL21vZHVsZS5qcyIsIkM6L1VzZXJzL2Rlc21vbmQvV2Vic3Rvcm1Qcm9qZWN0cy9PRkZyb250ZW5kL2FwcC9uZ0t1bWEvdG9wQmFyL3RvcEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd0ZW1wbGF0ZXMnLCByZXF1aXJlKCcuL25nS3VtYScpXSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXHJcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQgaG9tZSBtb2R1bGUnKTtcclxuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXHJcbiAqL1xyXG5cclxuLy8gbGlzdCBhbGwgdGhlIG1vZHVsZXMgb2YgT3Bwb3J0dW5pdHlGaW5kZXJcclxucmVxdWlyZSgnLi90b3BCYXIvdG9wQmFyLmpzJyk7XHJcbnJlcXVpcmUoJy4vaG9tZS9ob21lLmpzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxyXG4gKi9cclxudmFyIG5hbWUgPSAnb3Bwb3J0dW5pdHlGaW5kZXInO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobmFtZSwgW1xyXG4gICduZ1JvdXRlJ1xyXG5dKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmFtZTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcclxuICAuZGlyZWN0aXZlKCd0b3BCYXInLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAndG9wQmFyLmh0bWwnLFxyXG4gICAgICBzY29wZToge1xyXG4gICAgICAgIHRpdGxlOiBcIkBcIixcclxuICAgICAgICBzdWJUaXRsZTogXCJAXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4iXX0=
