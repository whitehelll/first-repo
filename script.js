var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x -12 +"px"
    crsr.style.top=dets.y -12 +"px"
    blur.style.left=dets.x -100 + "px"
    blur.style.top=dets.y -100+ "px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    delay:2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",

        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})



gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60% ",
        end:"end 58%",
        scrub:1
    }
})


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60% ",
        end:"end 58%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})


gsap.from("#colon2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})


gsap.from(".box",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        start:"top 60% ",
        end:"end 58%",
        scrub:1
    }
})