
function loadingPageAnimaiton(){
    let g = gsap.timeline()
    g.fromTo(".loading-page .rotate .g2",{
        opacity:0
    },{
        opacity:1,
        duration:0.8,
   
    }).fromTo(".loading-page .rotate .g1",{
        opacity:0
    },{
        opacity:1,
        duration:0.8,
   
    },"<+0.4").fromTo(".loading-page .rotate .g3",{
        opacity:0
    },{
        opacity:1,
        duration:0.8,
   
    },"<+0.4")
    let gg = gsap.timeline()
    gg.fromTo(".loading-page .g1 .circle1",{
        strokeDasharray: 1000,
        strokeDashoffset:230,
    },{
     
        strokeDashoffset: 1000,
        duration:1.5,
        ease: "none"
    }).fromTo(".loading-page .g1 .circle2",{
        strokeDasharray: 1000,
        strokeDashoffset: 100
    },{
        strokeDashoffset:1000,
        duration:1.5,
        ease: "none"
    },"<+0.1")
    .fromTo(".loading-page .g1 .circle3",{
        strokeDasharray: 1050,
        strokeDashoffset: 0
    },{
        strokeDashoffset:1050,
        duration:1.5,
        ease: "none"
    },"<+0.1").fromTo(".loading-page .g1 .circle1",{
   
    },{
     
        strokeDashoffset: 230,
        duration:1.5,
        ease: "none"
    }).fromTo(".loading-page .g1 .circle2",{
        strokeDasharray: 1000,
       
    },{
        strokeDashoffset:100,
        duration:1.5,
        ease: "none"
    },"<+0.1")
    .fromTo(".loading-page .g1 .circle3",{
        strokeDasharray: 1050,
      
    },{
        strokeDashoffset:0,
        duration:1.5,
        ease: "none"
    },"<+0.1")





    let gg2 = gsap.timeline()
    
    gg2.fromTo(".loading-page .g2 .circle1",{
        strokeDasharray: 1000,
        strokeDashoffset:230,
    },{
     
        strokeDashoffset: 1000,
        duration:1.5,
        ease: "none"
    },"<+0.7").fromTo(".loading-page .g2 .circle2",{
        strokeDasharray: 1000,
        strokeDashoffset: 100
    },{
        strokeDashoffset:1000,
        duration:1.5,
        ease: "none"
    },"<+0.1")
    .fromTo(".loading-page .g2 .circle3",{
        strokeDasharray: 1050,
        strokeDashoffset: 0
    },{
        strokeDashoffset:1050,
        duration:1.5,
        ease: "none"
    },"<+0.1").fromTo(".loading-page .g2 .circle1",{
        strokeDasharray: 1000,
 
    },{
     
        strokeDashoffset: 230,
        duration:1.5,
        ease: "none"
    }).fromTo(".loading-page .g2 .circle2",{
        strokeDasharray: 1000,
    
    },{
        strokeDashoffset:100,
        duration:1.5,
        ease: "none"
    },"<+0.1")
    .fromTo(".loading-page .g2 .circle3",{
        strokeDasharray: 1050,
      
    },{
        strokeDashoffset:0,
        duration:1.5,
        ease: "none",
      
    },"<+0.1")




    let gg3 = gsap.timeline()

   gg3.fromTo(".loading-page .g3 .circle1",{
        strokeDasharray: 1000,
        strokeDashoffset:230,
    },{
     
        strokeDashoffset: 1000,
        duration:1.5,
        ease: "none"
    },"<+0.3").fromTo(".loading-page .g3 .circle2",{
        strokeDasharray: 1000,
        strokeDashoffset: 100
    },{
        strokeDashoffset:1000,
        duration:1.5,
        ease: "none"
    },"<+0.1").fromTo(".loading-page .g3 .circle3",{
        strokeDasharray: 1050,
        strokeDashoffset: 0
    },{
        strokeDashoffset:1050,
        duration:1.5,
        ease: "none"
    },"<+0.1").fromTo(".loading-page .g3 .circle1",{
        strokeDasharray: 1000,
  
    },{
     
        strokeDashoffset: 230,
        duration:1.5,
        ease: "none"
    }).fromTo(".loading-page .g3 .circle2",{
        strokeDasharray: 1000,
  
    },{
        strokeDashoffset:100,
        duration:1.5,
        ease: "none"
    },"<+0.1")
    .fromTo(".loading-page .g3 .circle3",{
        strokeDasharray: 1050,
 
    },{
        strokeDashoffset:0,
        duration:1.5,
        ease: "none"
    },"<+0.1")
    let gg4 = gsap.timeline()
    Promise.resolve(gg3).then(res=>{
    
        gg4.to(".g2",
        {
            x:"50%",
            duration:0.8,
        }).to(".g3",
        {
            x:"-50%",
            duration:0.8,
        },"<").to(".g1",
        {
            opacity:0,
            duartion:0.01
        },">").to(".rotate",
         {
           
            rotate:90,
            scale:0.2,
            transformOrigin:"center",
             duration:0.8,
            x:"-1.7%"
         },"<").fromTo(".loading-page .g2 .circle1",{
            strokeDasharray: 1000,
            strokeDashoffset:230,
        },{
         
            strokeDashoffset:890,
            duration:0.5,
            ease: "none"
        },"<").fromTo(".loading-page .g2 .circle2",{
            strokeDasharray: 1000,
            strokeDashoffset: 100
        },{
            strokeDashoffset:835,
            duration:0.5,
            ease: "none"
        },"<+0.1")
        .fromTo(".loading-page .g2 .circle3",{
            strokeDasharray: 1050,
            strokeDashoffset: 0
        },{
            strokeDashoffset:830,
            duration:0.5,
            ease: "none"
        },"<+0.1").fromTo(".loading-page .g3 .circle1",{
            strokeDasharray: 1000,
            strokeDashoffset:230,
        },{
         
            strokeDashoffset:890,
            duration:0.5,
            ease: "none"
        },"<").fromTo(".loading-page .g3 .circle2",{
            strokeDasharray: 1000,
            strokeDashoffset: 100
        },{
            strokeDashoffset:835,
            duration:0.5,
            ease: "none"
        },"<+0.1")
        .fromTo(".loading-page .g3 .circle3",{
            strokeDasharray: 1050,
            strokeDashoffset: 0
        },{
            strokeDashoffset:830,
            duration:0.5,
            ease: "none"
        },"<+0.1").to(".g2",{
            y:"-20%"
        },"<+0.5").to(".g3",{
            y:"-5%"
        },"<").to(".loading-page .g4 line",{
            strokeDashoffset:720,
            duration:1
        },"<+0.3").to(".rotate",
        {
          
           rotate:0,
           scaleY:0.45,
           scaleX:0.4,
           transformOrigin:"center",
            duration:0.8,
        
        },"<+0.5").fromTo(".loading-page .titleBox h1",{
           y:30,
           opacity:0
        },{
           y:0,
           opacity:1,
           duration:0.8
        },"<+0.3").fromTo(".loading-page .titleBox h5",{
            y:30,
            opacity:0
         },{
            y:0,
            opacity:1,
            duration:0.8
         },"<+0.5").to(".loading-page",{
            opacity:0,
            duration:2,

         })
    })

    
  
}
loadingPageAnimaiton()

//menu的下拉式選單
function selectMenu(event){
    $('.sub').each((i,item)=>{
        if(event.target == item){
            $('.sub').eq(i).toggleClass('active');/*新增class*/
            $('.sub-open').eq(i).slideToggle(); /*下拉選單被展開*/
        }
    })
   
  
}
$('.sub').click(function(event) {
    event.preventDefault();
    selectMenu(event)
});

//menu的下拉式選單


//menu開啟關閉
   
    $(".close").click(()=>{
        $(".menu").css("right","-20%")
        $(".index").css({
            filter:"blur(0px)"
        })
    })
    $(".menu-button").click(()=>{
        $(".menu").css("right","0")
        var filterVal = 'blur(0px)';
        $(".index").css({
            filter:"blur(5px)"
        })
    })
//Menu開啟關閉