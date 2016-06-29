var module = (function(){
    var counter = 0,
        module = {};
    
    module.incrementCounter = function(){
            return ++counter;    
    };
    module.resetCounter = function(){
            return counter = 0;
    };
    module.getCounter = function(){
            return counter;
    };
    
    return module;
//    return {
//        incrementCounter: function(){
//            return ++counter;    
//        },
//        resetCounter: function(){
//            return counter = 0;
//        },
//        getCounter: function(){
//            return counter;
//        }
//    }
    
})();


