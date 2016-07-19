angular.module('movieWebAppApp')
  .factory('movieService', function ($http) {
    return {
      
      var : API_KEY = "2ff5b0a0e4aaf26e82e1ca18321fc605",
      
      getPopularMovies: function () {
        return $http({
          url : 'http://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY,
          methods : 'GET'
        });
      },

      getTopRatedMovies: function() {
        return $http({
          url : 'http://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY,
          methods : 'GET'
        })
      },

      getAggieFeedActivity: function() {
        return {
          "activity": {
            "icon": "icon-comment-alt",
            "actor": {
              "id": "department identifier",
              "objectType": "person",
              "displayName": "Department Name",
              "author": {
                "id": "kName",
                "displayName": "FirstName LastName"
              },
              "image": {
                "color": "#f1c40f"
              }
            },
            "verb": "post",
            "title": "Test Event",
            "object": {
              "ucdSrcId": "content identifier",
              "objectType": "notification",
              "content": "This is a test notification",
              "contentImage": {
                "source": "aggiefeed",
                "dimensions": {
                  "normal": {
                    "url": "/content/uploads-normal/someId.jpg",
                    "width": 400,
                    "height": 280
                  },
                  "high": {
                    "url": "/content/uploads-hight/someId.jpg",
                    "width": 650,
                    "height": 460
                  }
                },
                "ucdEdusModel": {
                  "url": "http://ucdavis.edu",
                  "urlDisplayName": "UC Davis",
                  "event": {
                    "location": "Event Location",
                    "hasStartTime": true,
                    "startDate": "date string",
                    "endDate": "date string",
                    "isAllDay": false,
                    "iCalendar": "iCal string",
                    "addToGoogleCalendar": "string"
                  }
                },
                "location": {
                  "displayName": "Mount Everest",
                  "geo": {
                    "latitude": "27.9881",
                    "longitude": "86.9253"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [86.9253, 27.9881]
                  }
                }
              },
              "to": [
                {
                  "id": "<kName>",
                  "g": false,
                  "i": false
                }
              ],
              "ucdEdusMeta": {
                "labels": ["~academic", "some-label"],
                "startDate": "date string",
                "endDate": "date string"
              }
            }
          }
        }
      }
    };
  });
