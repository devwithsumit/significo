function firstPage(){
    gsap.set(".rows", { scale: 10 })
    var tm = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            // markers : true,
        },
    })
    tm.to(".videocontainer", {
        duration: 2,
        ease: Power2,
        '--clip': "0%",
    }, 'a')
    tm.to(".videocontainer", {
        delay: 1.5,
        ease: Power2,
        opacity: 0,
    }, 'a')
        .to(".rows", {
            duration: 2,
            scale: 1,
            ease: Power2,
        }, 'a')
        .to(".rgt", {
            xPercent: -10,
            ease: Power3
        }, 'b')
        .to(".lft", {
            xPercent: 10,
            ease: Power3
        }, 'b')
}
function scrollerPage(){
    var tm = gsap.timeline({
        scrollTrigger:{
            trigger : ".page3",
            start: "top top",
            end : "bottom bottom",
            scrub : 1,
            // markers : true,
        },
    })
    tm.to(".scrollpage",{
        xPercent : -200,
        ease : Power3,
    },'a')
    .to(".slides .imgcircle", {
        x: -100,
        ease : Power3,
    },'a')
}
function phoneScroll(){
    gsap.to(".box",{
        xPercent: -300,
        ease: Power3,
        scrollTrigger: {
            trigger: ".page2",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            markers : true,
        },
    })
}
function hover(){
    var list = document.querySelectorAll(".staff")
        .forEach(function (e) {
            e.addEventListener("mousemove", (dets) => {
                var rect = e.getBoundingClientRect();
                gsap.to(e.querySelector(".picture"), {
                    opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    y: dets.y - rect.top,
                    ease: Power2, scale: 1.5, duration: .2
                });
            })
            e.addEventListener("mouseenter", (dets) => {
                var rect = e.getBoundingClientRect();
                gsap.to(e.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    y: dets.y - rect.top,
                    ease: "power2.inOut",
                    scale: 1.5,
                    duration: 0.1
                });
            });
            e.addEventListener("mouseleave", (dets) => {
                gsap.to(e.querySelector(".picture"), { opacity: 0, ease: Power2, scale: 1, duration: .2 });
            })
        })
    document.querySelectorAll(".staff")
        .forEach(function (e) {
            e.addEventListener("mouseenter", mouseLoc);
            e.addEventListener("mouseleave", mouseLoc);
            function mouseLoc(dets) {
                const origin = dets.target.clientHeight - dets.offsetY < dets.target.clientHeight / 2 ? "bottom" : "top";
                e.querySelector(".bluelayer").style.transformOrigin = origin;
            }
        })
}
function scrolling(){
    var clutter = "";
    document.querySelector(".splitpara1").textContent.split('')
    .forEach(function(e){
        if(e === " ") clutter += `<span>&nbsp;</span>`;
        clutter += `<span class="opacity-20">${e}</span>`
    })
    document.querySelector(".splitpara1").innerHTML = clutter
    gsap.to(".splitpara1 span", {
        opacity: 1,
        stagger: .1,
        ease : Power4,
        scrollTrigger: {
            trigger: ".splitpara1",
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
            // markers: true
        }
    })
}
function scrolling2(){
    var clutter2 = "";
    document.querySelector(".splitpara2").textContent.split('')
        .forEach((e) => {
            if (e === " ") clutter2 += `<span>&nbsp</span>`;
            clutter2 += `<span>${e}</span>`
        });
    document.querySelector(".splitpara2").innerHTML = clutter2;
    gsap.set(".splitpara2 span", {opacity : .2})
    gsap.to(".splitpara2 span",{
        opacity : 1,
        ease:Power4,
        stagger : .1,
        scrollTrigger: {
            trigger: ".splitpara2",
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
            // markers: true
        }
    })
}
function theming(){
    gsap.to(".slides .imgcircle", {
        opacity : 0,
        scrollTrigger:{
            trigger: ".page4",
            start: "top 60%",
            end: "10% 60%",
            scrub : true,
            // markers: true,
        }
    })
    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 60%",
                end: "bottom 60%",
                // markers: true,
                onEnter: function () {
                    document.body.setAttribute("Theme", e.dataset.color);
                },
                onEnterBack: function () {
                    document.body.setAttribute("Theme", e.dataset.color);
                }
            })
        })
}
function capsules() {
    gsap.to(".ovalstrip:nth-child(2)",{
        y : -50,
        ease : Power4,
        scrollTrigger:{
            trigger : ".page6",
            start : 'top bottom',
            end : 'top botom',
            scrub : 1,
            // markers : true,
        }
    })
}
function scrollbox(){
    if(window.innerWidth > 640){
        document.querySelectorAll(".rightscroller .box")
            .forEach(function (e) {
                gsap.to(e, {
                    backgroundColor: 'black',
                    color: '#AEDEE0',
                    width: '25rem',
                    scrollTrigger: {
                        trigger: e,
                        start: 'top 60%',
                        end: 'top 60%',
                        scrub: true,
                        // markers : true,
                    }
                })
            })
    }
    else{
        return 0;
    }
}
// phoneScroll();
theming();
firstPage();

scrollbox();
scrollerPage();
hover();
scrolling();
scrolling2();
capsules();