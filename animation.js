let tl = gsap.timeline();

tl.from("li , .logo",{
    y:-100,
    delay:0.5,
    duration:1,
    stagger:0.1
})

tl.from(".header h1 , .header p",{
    scale: 0,
    y:100,
    duration:1,
    stagger:0.5
})

gsap.from(".services .container",{
    y:100,
    x:-100,
    opacity:0,
    scale:0,
    duration:1,
    delay:1,
    stagger:0.5,
    ease: "Power2.easeInOut",
})

gsap.from(".testimonials .clients , .testimonials .t-container",{
    x:-500,
    duration:1.5,
    scrollTrigger:{
        trigger:".clients",
        scroller:"body",
        start:"top 90%"
    },
    stagger:0.1,
})

gsap.from(".about .ab-container",{
   y:20,
   repeat:-1,
   yoyo:true
})
