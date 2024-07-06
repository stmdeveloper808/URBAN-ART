var tl = gsap.timeline({scrollTrigger:{
trigger:"#page",
start:"0% 30%",
end:"10% 0%",
scrub:true,
duration:1,
delay:2,
}})

tl.to("#ig1",{
    x:"-40%",
    top:"90%",
    scrub:true,
    duration:4,
    delay:4,
    ease:Expo,

   
})
tl.to("#ig2",{
x:"-425%",
ease:Expo,
delay:3,
duration:5,
scrub:true,
  
})

tl.to("#ig3",{
    x:"-519%",
    ease:Expo,
    delay:5,
    duration:6,
    scrub:true,
      
    })
    tl.to("h1",{
        x:"-134%",
        delay:5,
        duration:7,
        scrub:true,
          
        })
        tl.to("#ig4",{
            x:"-523%",
            ease:Expo,
            delay:2,
            scrub:true,
              
            })
            
            