function firstScrollAnimation(){
    let paraBox={
        value:0
    };

    let p;
  
    let gg =gsap.timeline() //first-page paraBox
    let gg2 = gsap.timeline()
    let animate = gsap.timeline()
    ScrollTrigger.observe({
        target:window,
        type:"wheel",
        onUp:(self)=>{
            gg.clear(paraBox)
         
            animate.clear()
            p = paraBox.value+self.deltaY*-0.1
      
            if(p >= 0){
                p=0
            }
           
            gg.to(paraBox,{
                value:p
                })
            
        
         
            animation()
        },
        onDown:(self)=>{
            gg.clear(paraBox)
            console.log(self)
            animate.clear()
            p= paraBox.value+self.deltaY*-0.1
   
            gg.to(paraBox,{
            value:p
            })
        
           


        //main animate
            animation()
        //main animate
        },
    })
  
   let animation = ()=>{
    
    animate.to($(".first-page .paraBox"),{ 
        width:`${p}vw`,
    })
   }
//    let animates = ()=>{
//         $(".first-page .paraBox").css(`transform`,`translateY(${paraBox.value}vw)`)
//         //$(".first-page .imgBox").css(`transform`,`translateY(${paraBox.value}vw)`)
//    }
//    gsap.ticker.add(animates)
}
firstScrollAnimation()