





Shery.makeMagnet("#nav-part1 h3, #nav-part3 h3, #nav-part1 #dot-menu", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });





//selecting Area+
let video = document.querySelector("#container2 video");
let heroTxt = document.querySelector(".flag-hero");
const videoBox = document.querySelector("#container2");
const videoBtn = document.querySelector("#video-play-btn")
const mouseMove = document.querySelector("#crsr");
let progress = document.querySelector("#counter");
let flag = document.querySelector("#flag");
let tl = gsap.timeline();
let main = document.querySelector("#main");
document.body.style.overflow = "hidden";
let menu = document.querySelector("#menu img");
let fullMenu = document.querySelector("#full-menu");
let menuClose = document.querySelector("#menu-after button");
function smoothScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    videoBtn.addEventListener("click",function(){
        video.play();
        gsap.to("#container2 img",{
            opacity : 0
        })
    })
    
    videoBtn.addEventListener("dblclick",function(){
        video.pause();
        gsap.to("#container2 img",{
            opacity  : 1
        })
    })






    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    

    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

};


menu.addEventListener("click",function(){

fullMenu.style.display = "block";

})
menuClose.addEventListener("click",function(){
fullMenu.style.display = "none";
})

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 



// function declaration area
// function follower(){
//     document.addEventListener("mousemove",function(ev){

//         gsap.set("#crsr",{
//             x : ev.clientX,
//             y : ev.clientY
//         })
//     })
// }


// videoBox.addEventListener("mousemove",function(eve){
//     const rect = videoBox.getBoundingClientRect();
//         gsap.set("#video-play-btn",{
//             x : eve.clientX,
//             y : eve.clientY,
//             top : `-50%`,
//             left : `-50`,
//         })
//     })

videoBox.addEventListener("mouseleave",function(){

})


function flagAnimation(){
heroTxt.addEventListener("mousemove", function(event){
    flag.style.display = "block";
    const rect = heroTxt.getBoundingClientRect();
    flag.style.left = `${event.clientX}px`;
    flag.style.top = `${event.clientY}px`;
})
heroTxt.addEventListener("mouseleave",function(){
    flag.style.display = "none";
})}

function playBtnAnimation(){
        videoBox.addEventListener("mousemove",function(event){
            const rect = videoBox.getBoundingClientRect();
            let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // Ensure the circular div stays within bounds
    const maxLeft = rect.width;
    const maxTop = rect.height;

    if (x < 0 || x > maxLeft || y < 0 || y > maxTop) {
        
        // If outside, reset to the specified position
        videoBtn.style.left = "70%";
        videoBtn.style.top = "-5%";
    } else {
        videoBtn.style.left = `${x}px`;
        videoBtn.style.top = `${y}px`;
    }
    
 
        })
    videoBox.addEventListener("mouseleave",function(){
        videoBtn.style.left = "70%";     // Reset to specified position
        videoBtn.style.top = "-5%";
    })

}

function follower(){
    document.addEventListener("mousemove", (event) => {
    mouseMove.style.transform = `translate(${event.clientX}px,${event.clientY}px)`        

      });
    }
    function loader(){
    document.body.style.overflow = "hidden";
    gsap.from("#counting", {
        opacity : 0,
        delay : .2
    })
    gsap.to("#counting",
        {
            opacity : 0,
            delay : 2.6
        }
    )
    tl.from(".line, #tagline",{
        y : 150,
        opacity : 0,
        duration : .6,
        stagger : .4
    })
    tl.to(".l, #tagline",{
        opacity : 0,
        delay : .8,
        duration : .5,
        stagger : .3
    })

    tl.to("#loader",{
        y : -1500,
        duration : .7,
        opacity : 0,
        onComplete : ()=>{document.body.style.overflow = "auto"}
})  
}
function contentLoad(){
    gsap.from(".hero h1, .hero span, #navbar",{
        y : 150,
        opacity : 0,
        delay : 3.6,
        stagger : .1,

    })
}
function counter(){
gsap.from("#counter",{
    onStart : function(){
        var count = 0;
        setInterval(function(){
            if(count<=100){
                progress.textContent = count;
                count++;}
                else{
                    count = 100;
                }   
        },20)
    }
})
}
function sheryAnimation(){
    Shery.imageEffect(".img-div",{
        style : 5,
        gooey : true,
        config :{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[9999999,9999999]},"aspect":{"value":0.7677212313983869},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.31,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    })
}
    
function removeAnimation(){
    const width = window.innerWidth;
    console.log(`${width}`)
    if(width <= 600){
        smoothScroll();
        loader();
        counter();
        contentLoad();
    }
    else if(width > 600){
    
    playBtnAnimation();
    smoothScroll();
    sheryAnimation()
    flagAnimation();
    follower();
    loader();
    counter();
    contentLoad();
}
}

//function calling area
removeAnimation();


