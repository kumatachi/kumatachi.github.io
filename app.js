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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvaS9Qcm9ncmFtbWluZy9rdW1hc2l0ZS9rdW1hdGFjaGkuZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2tvaS9Qcm9ncmFtbWluZy9rdW1hc2l0ZS9rdW1hdGFjaGkuZ2l0aHViLmlvL2FwcC9tYWluLmpzIiwiL2hvbWUva29pL1Byb2dyYW1taW5nL2t1bWFzaXRlL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9ob21lL2hvbWUuanMiLCIvaG9tZS9rb2kvUHJvZ3JhbW1pbmcva3VtYXNpdGUva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL2luZGV4LmpzIiwiL2hvbWUva29pL1Byb2dyYW1taW5nL2t1bWFzaXRlL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9tb2R1bGUuanMiLCIvaG9tZS9rb2kvUHJvZ3JhbW1pbmcva3VtYXNpdGUva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL3Byb2plY3RzL3Byb2plY3RzLmpzIiwiL2hvbWUva29pL1Byb2dyYW1taW5nL2t1bWFzaXRlL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS90b3BCYXIvdG9wQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd0ZW1wbGF0ZXMnLCByZXF1aXJlKCcuL25nS3VtYScpXSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS82LzIwMTQuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKHJlcXVpcmUoJy4uL21vZHVsZS5qcycpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XG4gICAgY29uc29sZS5sb2coJ2xvYWQgaG9tZSBtb2R1bGUnKTtcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS5mb28gPSAnYmFyJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGVzbW9uZCBvbiAxMS8zLzIwMTQuXG4gKi9cblxuLy8gbGlzdCBhbGwgdGhlIG1vZHVsZXMgb2YgT3Bwb3J0dW5pdHlGaW5kZXJcbnJlcXVpcmUoJy4vdG9wQmFyL3RvcEJhci5qcycpO1xucmVxdWlyZSgnLi9ob21lL2hvbWUuanMnKTtcbnJlcXVpcmUoJy4vcHJvamVjdHMvcHJvamVjdHMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21vZHVsZS5qcycpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxuICovXG52YXIgbmFtZSA9ICdvcHBvcnR1bml0eUZpbmRlcic7XG5cbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtcbiAgJ25nUm91dGUnXG5dKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYW1lO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxuICovXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xuICAgIGNvbnNvbGUubG9nKCdsb2FkIHByb2plY3RzIG1vZHVsZScpO1xuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9wcm9qZWN0cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAncHJvamVjdHMuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzMvMjAxNC5cbiAqL1xuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXG4gIC5kaXJlY3RpdmUoJ3RvcEJhcicsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3RvcEJhci5odG1sJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIHRpdGxlOiBcIkBcIixcbiAgICAgICAgc3ViVGl0bGU6IFwiQFwiXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiJdfQ==
