//javascript code for calculator
var screen = document.getElementById('display');
    //to display data on input
    function addtoscreen(x) {            
        screen.value+=x;
        if(x==='C'){
        screen.value='';
       
    }
}
    function answer(){
        x=screen.value;
        x=eval(x);
        screen.value=x;
    
}
    function power(){
        x=screen.value;
        x=eval(x*x);
        screen.value=x;
}
    function backspace(){
        var num=screen.value;
        var len=num.length-1;
        var newNum=num.substring(0,len);
        screen.value=newNum;
}