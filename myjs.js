document.getElementById("open").addEventListener("click", function(){
    if (document.getElementById("control").style.left == "0px"){
        document.getElementById("control").style.left = "-200px";
    }
    else {
    document.getElementById("control").style.left = "0px";
    }
    
});

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("control").style.left = "-200px"; 
});


document.getElementById("bground1").addEventListener("click", function(){
    document.getElementById("bgImg").style.backgroundImage = "url(img/bg1.jpg)";
    
});

document.getElementById("bground2").addEventListener("click", function(){
    document.getElementById("bgImg").style.backgroundImage = "url(img/bg3.png)";
    
});

document.getElementById("bground3").addEventListener("click", function(){
    document.getElementById("bgImg").style.backgroundImage = "url(img/bg4.jpg)";
    
});

document.getElementById("bground4").addEventListener("click", function(){
    document.getElementById("bgImg").style.backgroundImage = "url(img/bg2.jpg)";
    
});