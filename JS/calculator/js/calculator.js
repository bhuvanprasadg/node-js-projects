let mapArray = new Map();

mapArray.set("add", function(){
    return this.x + this.y;
});
mapArray.set("subtract", function(){
    return this.x - this.y;
});
mapArray.set("multiply", function(){
    return this.x * this.y;
});
mapArray.set("divide", function(){
    return this.x / this.y;
});

function dropdownFn(){
    var calFn = document.querySelector(".dropdown").value;

    var calcy = mapArray.get(calFn);

    let input1 = parseInt(document.querySelector(".input1").value);
    let input2 = parseInt(document.querySelector(".input2").value);

    console.log(input1,input2);

    let res = calcy.call({x:input1,y:input2});
    
    document.querySelector(".submit").addEventListener("click",function(){
        console.log(res);
        document.querySelector(".data").value = res;
    });
}