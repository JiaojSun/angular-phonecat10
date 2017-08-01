'use strict';
/*我们利用$http服务请求JSON文件，来增强手机详情组件的控制器。
这与手机列表控件控制器的工作原理相同。*/
// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
        });
      }
    ]
  });

 /* angular.
   module('phoneDetail').
   component('phoneDetail',{
    templateUrl:'phone-detail/phone-detail.template.html',
    controller:['$http','routeParams',
      function PhoneDetailController($http,$routeParams){
          var self=this;

          $http.get('phones/'+$routeParams.phoneId+'.json').then(function(response){
            self.phone=response.data;
          });
        }
     ]
   });
*/