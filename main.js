var accordion = document.getElementsByClassName("accordion");
var box = document.querySelector(".box");
var left = document.querySelector(".left");

var listFunction = {
    mouseOver: function(){
        this.style.color = "hsl(14, 88%, 65%)";
    },
    mouseOut: function(){
        this.style.color = "hsl(240, 6%, 50%)";
    }
}


function frame1(){
        if(screen.width > 1000){
            box.style.transform = "translateY(-40%)";
            left.style.backgroundPosition = "-90px center, calc(105%) 65%";
        }
        
}

function frame2(){
        if(screen.width > 1000){
            box.style.transform = "translateY(-30%)";
            left.style.backgroundPosition = "-80px center, calc(105%) 65%";
        }
}



    setInterval(frame1, 1000);
    setInterval(frame2, 2000);
    




for(let i = 0; i < accordion.length; i++){
    if(screen.width > 1150){
        accordion[i].addEventListener("mouseover", listFunction.mouseOver);
    }
    accordion[i].addEventListener("mouseout", listFunction.mouseOut);
    accordion[i].addEventListener("click", function(){
        let title = this.childNodes[0];
        let arrow = this.childNodes[1];
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
            title.style.fontWeight = 400;
            if(screen.width > 1150){
                this.addEventListener("mouseover", listFunction.mouseOver);
            }
            arrow.style.transform ="rotate(0deg)";
        }else{
            panel.style.display = "block";
            title.style.fontWeight = 700;
            this.removeEventListener("mouseover", listFunction.mouseOver);
            arrow.style.transform ="rotate(180deg)";
        }
    });
}

