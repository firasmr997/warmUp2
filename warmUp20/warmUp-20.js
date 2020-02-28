// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverseStr(string) {
    var array=[];
    var arr=string.split(" ");
    var result="";
    for (var i=arr.length-1; i >= 0; i--) {
        array.push(arr[i]);
    }
    for (var j=0; j < array.length; j++){
        result=result+" "+array[j];
    }
    return result
}