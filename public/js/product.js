(function(){
    var app = angular.module('store-product',[ ]);
    
    app.directive('productTitle',function(){
    return {
        restrict:'E',
        templateUrl:'customDirectives.html'
    };
});
   app.directive('productGallery',function(){
    return {
        restrict: 'E',
        templateUrl: 'product-gallery.html'
    }
}); 
    app.directive('cartAddition',function(){
    return {
        restrict : 'E',
        templateUrl:'controllDirectives.html',
        controller:function(){
            this.total = 100000
        },
        controllerAs:'cartCtrl'
    }
});
    
})();