var x = 1


var print = function(){
    console.log(x)
    var x = 10
}

print() // * undefiend


// * why?
/*
JS make all (variable define) at the top of variabl's block
so that mean .. 
var print=function(){
    var x;
    console.log(x)
    x=10 
    * this make sense .. why the result is undefined
    
}

* That what javascript do .. 
*/