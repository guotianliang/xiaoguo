// 因此，如果想获得 [min, max], 可以使用 Math.floor(Math.random() * (max - min + 1)) + min;

// 如果想获得 [min, max）, 可以使用 Math.floor(Math.random() * (max - min )) + min;

// 如果想获得 (min, max], 可以使用 Math.ceil(Math.random() * (max - min )) + min;
function randomColor(){
    var rc=function(){
        return Math.floor(Math.random()*256);
    }
    return "rgb("+rc()+","+rc()+","+rc()+")";
}