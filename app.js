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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F3a3dhcmRoZXJvL1Byb2dyYW1taW5nL2t1bWF0YWNoaS5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvYXdrd2FyZGhlcm8vUHJvZ3JhbW1pbmcva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbWFpbi5qcyIsIi9ob21lL2F3a3dhcmRoZXJvL1Byb2dyYW1taW5nL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9jb250YWN0L2NvbnRhY3QuanMiLCIvaG9tZS9hd2t3YXJkaGVyby9Qcm9ncmFtbWluZy9rdW1hdGFjaGkuZ2l0aHViLmlvL2FwcC9uZ0t1bWEvaG9tZS9ob21lLmpzIiwiL2hvbWUvYXdrd2FyZGhlcm8vUHJvZ3JhbW1pbmcva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL2luZGV4LmpzIiwiL2hvbWUvYXdrd2FyZGhlcm8vUHJvZ3JhbW1pbmcva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL21vZHVsZS5qcyIsIi9ob21lL2F3a3dhcmRoZXJvL1Byb2dyYW1taW5nL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9wcm9qZWN0cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzMvMjAxNC5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndGVtcGxhdGVzJywgcmVxdWlyZSgnLi9uZ0t1bWEnKV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxuICovXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xuICAgIGNvbnNvbGUubG9nKCdsb2FkIGNvbnRhY3QgbW9kdWxlJyk7XG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2NvbnRhY3QnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzYvMjAxNC5cbiAqL1xuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcbiAgICBjb25zb2xlLmxvZygnbG9hZCBob21lIG1vZHVsZScpO1xuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzMvMjAxNC5cbiAqL1xuXG4vLyBsaXN0IGFsbCB0aGUgbW9kdWxlcyBvZiBPcHBvcnR1bml0eUZpbmRlclxuLy9yZXF1aXJlKCcuL3RvcEJhci90b3BCYXIuanMnKTtcbnJlcXVpcmUoJy4vaG9tZS9ob21lLmpzJyk7XG5yZXF1aXJlKCcuL3Byb2plY3RzL3Byb2plY3RzLmpzJyk7XG5yZXF1aXJlKCcuL2NvbnRhY3QvY29udGFjdC5qcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21vZHVsZS5qcycpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxuICovXG52YXIgbmFtZSA9ICdvcHBvcnR1bml0eUZpbmRlcic7XG5cbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtcbiAgJ25nUm91dGUnXG5dKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYW1lO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxuICovXG5hbmd1bGFyLm1vZHVsZShyZXF1aXJlKCcuLi9tb2R1bGUuanMnKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xuICAgIGNvbnNvbGUubG9nKCdsb2FkIHByb2plY3RzIG1vZHVsZScpO1xuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9wcm9qZWN0cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAncHJvamVjdHMuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLmZvbyA9ICdiYXInO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiJdfQ==
