var app = angular.module('Minions',['store-product']);
//var figurehead =[ {
//                name : 'Assassins Creed',
//                price : 12.5,
//                description : '.....',
//                image : {
//                        full:'/data/Minion-3D-Assassin.jpg'
//                        },
//                reviews:[ 
//                    {
//                    star:4,
//                        quote:"this is cool assassins",
//                        by:"rajes@gmail.coms"
//                }
//                    
//                ]//reviews aaray
//    
//                  },{
//                name : 'Wolverine',
//                price : 22.4,
//                description : '.....',
//                image : {
//                        full:'/data/Minion-3D-X-Men-Wolverine.jpg'
//                        },
//                reviews:[
//                    
//                ]//reviews aaray
//    
//                  },{
//                       name : 'Madara Uchiha',
//                price : 55,
//                description : '.....',
//                image : {
//                        full:'/data/Minion-3D-Madara-Uchiha.jpg'
//                        },
//                reviews:[
//                    
//                ]//reviews aaray      
//                  }
//                 
//                 ]
app.controller('StoreController',['$http',function($http) {
    var store = this;
    store.products =[ ];
    $http.get('/data/minionsDetail.json').then(function(data){
        store.products=data.data;
        console.log(data.data);
    });
}]);
app.controller('ReviewController',function(){
    this.review = {};
    
   this.productReview=function(product){ //we are accessing the current product of products.reviews
         product.reviews.push(this.review);
         this.review={};
     }
    
    
});
app.controller('panelCtrl', function(){
    this.tab = 2;
//    console.log(tab);
     this.isSelected  = function(selected){
        this.tab = selected;
    };
    
});


//app.directive('reviewForm',function(){
//    return{
//        restrict:'E',
//        templateURL:'productPanel.html',
//        controller: function(){
//    this.review = {};
//    
//   this.productReview=function(product){ //we are accessing the current product of products.reviews
//         product.reviews.push(this.review);
//         this.review={};
//     }
//    },
//    controllerAs:'reviewCtrl'
//}})


