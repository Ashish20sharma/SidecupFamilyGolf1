var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})

gsap.to("#navbar", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})
gsap.to("#main", {
    backgroundColor: "black",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 2,
    }
})
gsap.from(".about-us ", {
    opacity: 0,
    duration: 1,
    y: 90,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 1
    }
})
gsap.from(".card", {
    opacity: 0,
    duration: 1,
    y: 90,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 1
    }
})
gsap.from(".green-div", {
    opacity: 0,
    duration: 1,
    y: 90,
    scrollTrigger: {
        trigger: ".green-div",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 1
    }
})
gsap.from("#img1 ", {
    x: -70,
    y: -70,
   
    scrollTrigger: {
        trigger: "#img1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#img2", {
    x: 70,
    y: 70,

    scrollTrigger: {
        trigger: "#img2",
        scroller: "body",
        // start: "top 55%",
        // end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
})




 /*type casting*/