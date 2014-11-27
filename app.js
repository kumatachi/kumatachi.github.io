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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcSnVud29uXFxEb2N1bWVudHNcXEdpdEh1Ylxca3VtYXRhY2hpLmdpdGh1Yi5pb1xcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvSnVud29uL0RvY3VtZW50cy9HaXRIdWIva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbWFpbi5qcyIsImM6L1VzZXJzL0p1bndvbi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9jb250YWN0L2NvbnRhY3QuanMiLCJjOi9Vc2Vycy9KdW53b24vRG9jdW1lbnRzL0dpdEh1Yi9rdW1hdGFjaGkuZ2l0aHViLmlvL2FwcC9uZ0t1bWEvaG9tZS9ob21lLmpzIiwiYzovVXNlcnMvSnVud29uL0RvY3VtZW50cy9HaXRIdWIva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL2luZGV4LmpzIiwiYzovVXNlcnMvSnVud29uL0RvY3VtZW50cy9HaXRIdWIva3VtYXRhY2hpLmdpdGh1Yi5pby9hcHAvbmdLdW1hL21vZHVsZS5qcyIsImM6L1VzZXJzL0p1bndvbi9Eb2N1bWVudHMvR2l0SHViL2t1bWF0YWNoaS5naXRodWIuaW8vYXBwL25nS3VtYS9wcm9qZWN0cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndGVtcGxhdGVzJywgcmVxdWlyZSgnLi9uZ0t1bWEnKV0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzYvMjAxNC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKHJlcXVpcmUoJy4uL21vZHVsZS5qcycpKVxyXG4gIC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkIGNvbnRhY3QgbW9kdWxlJyk7XHJcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvY29udGFjdCcsIHtcclxuICAgICAgdGVtcGxhdGVVcmw6ICdjb250YWN0Lmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICAgICAkc2NvcGUuZm9vID0gJ2Jhcic7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzYvMjAxNC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKHJlcXVpcmUoJy4uL21vZHVsZS5qcycpKVxyXG4gIC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkIGhvbWUgbW9kdWxlJyk7XHJcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICRzY29wZS5mb28gPSAnYmFyJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMy8yMDE0LlxyXG4gKi9cclxuXHJcbi8vIGxpc3QgYWxsIHRoZSBtb2R1bGVzIG9mIE9wcG9ydHVuaXR5RmluZGVyXHJcbi8vcmVxdWlyZSgnLi90b3BCYXIvdG9wQmFyLmpzJyk7XHJcbnJlcXVpcmUoJy4vaG9tZS9ob21lLmpzJyk7XHJcbnJlcXVpcmUoJy4vcHJvamVjdHMvcHJvamVjdHMuanMnKTtcclxucmVxdWlyZSgnLi9jb250YWN0L2NvbnRhY3QuanMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21vZHVsZS5qcycpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkZXNtb25kIG9uIDExLzMvMjAxNC5cclxuICovXHJcbnZhciBuYW1lID0gJ29wcG9ydHVuaXR5RmluZGVyJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtcclxuICAnbmdSb3V0ZSdcclxuXSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5hbWU7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvNi8yMDE0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUocmVxdWlyZSgnLi4vbW9kdWxlLmpzJykpXHJcbiAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQgcHJvamVjdHMgbW9kdWxlJyk7XHJcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvcHJvamVjdHMnLCB7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncHJvamVjdHMuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICRzY29wZS5mb28gPSAnYmFyJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiJdfQ==
