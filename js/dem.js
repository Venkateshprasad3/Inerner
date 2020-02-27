
var com = angular.module('com', []);

com.controller('ListCtrl', function($scope) {
  
  $scope.com = [
            {
              "Company": "Google",
              "link": "google.html",
              "price":"3.2M",
              "Rank":"",

            },

            {
                "Company": "Windows",
                "link": "omicro2.html",
                "price":"2.3M",
                "Rank":"",
            },

            { 
                "Company": "Amazon",
                "link": "am2.html",
                "price":"2.9M",
                "Rank":""
            },

            {
                "Company": "Flipkart",
                "link": "flip2.html",
                "price":"0.9M",
                "Rank":"",
              },

              {
                "Company": "IBM",
                "link": "ibm2.html",
                "price":"1.2M",
                "Rank":"",
  
              },

              {
                "Company": "Apple",
                "link": "apple2.html",
                "price":"3.2M",
                "Rank":"",
  
              },
    ];
    $scope.orderList = "Company";
  });
    com.filter('venky',function() {
      return function(txt) {
        return(txt.toUpperCase());
        
      }
      
    
    });

    com.filter('venky1',function() {
      return function(txt) {
      var n = parseFloat(txt);
      var t = n*1000000;
      return(t);
        
      }

     
    
    });

    

