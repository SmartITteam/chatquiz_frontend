(function () {
    'use strict';

    angular
        .module('App')
        .factory('MockService', MockService);

    MockService.$inject = ['$http', '$q'];
    function MockService($http, $q) {
        var me = {};

        me.getUserMessages = function (d) {
            /*
            var endpoint =
              'http://www.mocky.io/v2/547cf341501c337f0c9a63fd?callback=JSON_CALLBACK';
            return $http.jsonp(endpoint).then(function(response) {
              return response.data;
            }, function(err) {
              console.log('get user messages error, err: ' + JSON.stringify(
                err, null, 2));
            });
            */
            var deferred = $q.defer();

            setTimeout(function () {
                deferred.resolve(getMockMessages());
            }, 1500);

            return deferred.promise;
        };
        me.getMockQuizs = function () {
          return {
            "data": [
              {
                "id": "1",
                "title": "Example quaestion",
                "quaestions":[
                  {
                    "id":"1",
                    "title": "Option 1"
                  },
                  {
                    "id":"2",
                    "title": "Option 2"
                  },
                  {
                    "id":"3",
                    "title": "Option 3"
                  },
                  {
                    "id":"4",
                    "title": "Option 2"
                  }
                ],
                "result": false
              },
              {
                "id": "2",
                "title": "Example quaestion",
                "quaestions":[
                  {
                    "id":"1",
                    "title": "Option 1"
                  },
                  {
                    "id":"2",
                    "title": "Option 2"
                  },
                  {
                    "id":"3",
                    "title": "Option 3"
                  }
                ],
                "result": false
              },
              {
                "id": "3",
                "title": "Example quaestion",
                "quaestions":[
                  {
                    "id":"1",
                    "title": "Option 1"
                  },
                  {
                    "id":"2",
                    "title": "Option 2"
                  },
                  {
                    "id":"3",
                    "title": "Option 3"
                  },
                  {
                    "id":"4",
                    "title": "Option 3"
                  }
                ],
                "result": false
              },
              {
                "id": "1",
                "title": "Example quaestion",
                "quaestions":[
                  {
                    "id":"1",
                    "title": "Option 1"
                  },
                  {
                    "id":"2",
                    "title": "Option 2"
                  },
                  {
                    "id":"3",
                    "title": "Option 3"
                  },
                  {
                    "id":"4",
                    "title": "Option 2"
                  }
                ],
                "result": false
              },
              {
                "id": "1",
                "title": "Example quaestion",
                "quaestions":[
                  {
                    "id":"1",
                    "title": "Option 1"
                  },
                  {
                    "id":"2",
                    "title": "Option 2"
                  },
                  {
                    "id":"3",
                    "title": "Option 3"
                  },
                  {
                    "id":"4",
                    "title": "Option 2"
                  }
                ],
                "result": false
              },
              {
                "id": "1",
                "title": "Example quaestion",
                "quaestions":[
                  {
                    "id":"1",
                    "title": "Option 1"
                  },
                  {
                    "id":"2",
                    "title": "Option 2"
                  },
                  {
                    "id":"3",
                    "title": "Option 3"
                  },
                  {
                    "id":"4",
                    "title": "Option 2"
                  }
                ],
                "result": false
              },
              {
                "id": "1",
                "title": "Example quaestion",
                "quaestions":[
                  {
                    "id":"1",
                    "title": "Option 1"
                  },
                  {
                    "id":"2",
                    "title": "Option 2"
                  },
                  {
                    "id":"3",
                    "title": "Option 3"
                  },
                  {
                    "id":"4",
                    "title": "Option 2"
                  }
                ],
                "result": false
              },
            ]
          };
          return me;
        };

        me.getMockMessage = function () {
            return {
                userId: '534b8e5aaa5e7afc1b23e69b',
                date: new Date(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            };
        };
        me.getMockAuth = function () {
            return {
              "data": [
                {
                  "id": "2212123321",
                  "birthday": "1986-03-19",
                  "firstName": "Monica",
                  "imageUrl": "http://media.vanityfair.com/photos/58c2f5aa0a144505fae9e9ee/master/pass/avatar-sequels-delayed.jpg",
                  "lastName": "Lupo",
                  "taxCode": "SDASDFDASFFSD",
                  "token": "asdfsadlkflkasdf==sadfasdfasdfklksdflgklgergok="
                }
              ]
            }
          }

        return me;
    }

    function getMockMessages() {
        return {
            "messages": [
                { "_id": "535d625f898df4e80e2a125e", "text": "Ionic has changed the game for hybrid app development.", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-04-27T20:02:39.082Z", "read": true, "readDate": "2014-12-01T06:27:37.944Z" }, { "_id": "535f13ffee3b2a68112b9fc0", "text": "I like Ionic better than ice cream!", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-04-29T02:52:47.706Z", "read": true, "readDate": "2014-12-01T06:27:37.944Z" }, { "_id": "546a5843fd4c5d581efa263a", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-17T20:19:15.289Z", "read": true, "readDate": "2014-12-01T06:27:38.328Z" }, { "_id": "54764399ab43d1d4113abfd1", "text": "Am I dreaming?", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-26T21:18:17.591Z", "read": true, "readDate": "2014-12-01T06:27:38.337Z" }, { "_id": "547643aeab43d1d4113abfd2", "text": "Is this magic?", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-26T21:18:38.549Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "547815dbab43d1d4113abfef", "text": "Gee wiz, this is something special.", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-28T06:27:40.001Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "54781c69ab43d1d4113abff0", "text": "I think I like Ionic more than I like ice cream!", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-28T06:55:37.350Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "54781ca4ab43d1d4113abff1", "text": "Yea, it's pretty sweet", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-28T06:56:36.472Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "5478df86ab43d1d4113abff4", "text": "Wow, this is really something huh?", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-28T20:48:06.572Z", "read": true, "readDate": "2014-12-01T06:27:38.339Z" }, { "_id": "54781ca4ab43d1d4113abff1", "text": "Create amazing apps - ionicframework.com", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-29T06:56:36.472Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" },
                { "_id": "535d625f898df4e80e2a126e", "photo": "http://ionicframework.com/img/homepage/phones-viewapp_2x.png", "userId": "546a5843fd4c5d581efa263a", "date": "2015-08-25T20:02:39.082Z", "read": true, "readDate": "2014-13-02T06:27:37.944Z" }], "unread": 0
        };
    }


    function login(data) {
      return $http.post(api, data);
    }

})();
