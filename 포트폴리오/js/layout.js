$(document).ready(function(){

  
    var k = 1;
    $(window).mousewheel(function(){//기본 휠 기능을 제거
       return false; 
    });

    
    //마우스 휠
    $(".contents").mousewheel(function(e, delta){
        k = $(this).attr("data-n") -delta;
        if(k==0){
            k=1;
            return false;
        }
        if(k==7){
            k=6;
            return false;
        }
        var target = $(".con" + k).offset().top;
        $("body,html").stop().animate({"scrollTop":target});
        return false;
    });
    
    
    //상단메뉴
    $("#main_menu ul li a, #btn li").click(function(){
        k = $(this).attr("data-n"); 
        target = $(".con" + k).offset().top;
        $("body,html").stop().animate({scrollTop:target});
        return false;
    });

    
    //home
    setTimeout(function(){
        $("#home img").animate({bottom:"-10px", opacity:"1"});
    },300);
    setTimeout(function() { 
        $('#home h2').animate({top:"24%", opacity:"1"}, 500); 
    }, 500);
    setTimeout(function() { 
        $('.home_txt').animate({left:"10%", opacity:"1"}, 500); 
    }, 1000);
    setTimeout(function() { 
        $('.medium, .vol').animate({opacity:"1"}, 1000);
    }, 1500);
    
    
    
    $(window).scroll(function(){
        
        $("#main_menu ul li a").removeClass("on"); //공통 Class 제거
        $("#btn li").removeClass("sel"); //공통 Class 제거
        
        
        var con1 = $(".con1").offset().top;
        var con2 = $(".con2").offset().top;
        var con3 = $(".con3").offset().top;
        var con4 = $(".con4").offset().top;
        var con5 = $(".con5").offset().top;
        var con6 = $(".con6").offset().top;
        
        var scroll = $(window).scrollTop();
        
        if(scroll < con2){//1페이지
            $("#main_menu ul li a:eq(0)").addClass("on");
            $(".btn1").addClass("sel");
            k = 1;
        }else if(scroll >= con2 && scroll < con3){//2페이지
            $("#main_menu ul li a:eq(1)").addClass("on");
            $(".btn2").addClass("sel");
            
            $('.title1').animate({opacity:"1"});
            $('.p_right').delay(700).animate({opacity:"1"});
            $('.pm_con1').delay(800).animate({opacity:"1"});
            $('.pm_con2').delay(1000).animate({opacity:"1"});
            $('.p_bottom').delay(1500).animate({opacity:"1"});
            k = 2;
        }else if(scroll >= con3 && scroll < con4){//3페이지
            $("#main_menu ul li a:eq(2)").addClass("on");
            $(".btn3").addClass("sel");
            
            $('.title2').animate({opacity:"1"},500);
            $('.skills_wrap').delay(300).animate({opacity:"1"},500);
            
            //skills
            $(".skl1").circleProgress({
                value: 0.85, //그래프에 표시될 값
                fill: "#30a6fc", //그래프 채우기색
                size: 130,  //그래프 크기
                thickness: 17, //그래프 두께
                startAngle: 30 //시작지점
            }).on("circle-animation-progress",function(event,k){
                $(this).find("strong").html(Math.round(85*k)+"<i>%</i>");
            });
            $(".skl2").circleProgress({
                value: 0.8, 
                size: 130,
                thickness: 17,
                startAngle: 30,
                fill: "#ff9a00"
            }).on("circle-animation-progress",function(event,k){
                $(this).find("strong").html(Math.round(80*k)+"<i>%</i>");
            });
            $(".skl3").circleProgress({
                value: 0.85,
                size: 130,
                thickness: 17,
                startAngle: 30,
                fill: {gradient : ["#facfaa","#f47933","#f15931"]}
                //emptyFill: "rgba(0,153,255,1)"
            }).on("circle-animation-progress",function(event,k){
                $(this).find("strong").html(Math.round(85*k)+"<i>%</i>");
            });
            $(".skl4").circleProgress({
                value: 0.8,
                size: 130,
                thickness: 17,
                startAngle: 30,
                fill: {gradient : ["#aad2fa","#0892d6","#007dc6"]}
            }).on("circle-animation-progress",function(event,k){
                $(this).find("strong").html(Math.round(80*k)+"<i>%</i>");
            });
            $(".skl5").circleProgress({
                value: 0.6,
                size: 130,
                thickness: 17,
                startAngle: 30,
                fill: {gradient : ["#fae8c5","#f99d34","#f58233"]}
            }).on("circle-animation-progress",function(event,k){
                $(this).find("strong").html(Math.round(60*k)+"<i>%</i>");
            });
    
            k = 3;
        }else if(scroll >= con4 && scroll < con5){//4페이지
            $("#main_menu ul li a:eq(3)").addClass("on");
            $(".btn4").addClass("sel");
            
            $('.title3').animate({opacity:"1"},500);
            $(".ptf_con1 > img").delay(500).animate({opacity:"1"});
            $(".ptf1_txt").delay(800).animate({opacity:"1"});
            $(".txt_w1").delay(1000).animate({opacity:"1"},500);
            $(".ptf1_txt > a").delay(1200).animate({opacity:"1"});
            k = 4;
        }else if(scroll >= con5 && scroll < con6){//5페이지
            $("#main_menu ul li a:eq(4)").addClass("on");
            $(".btn5").addClass("sel");
            
            $('.title4').animate({opacity:"1"},500);
            $('.ptf2_txt').delay(800).animate({opacity:"1"});
            $(".txt_w2").delay(1000).animate({opacity:"1"},500);
            $(".ptf_con2 > img").delay(500).animate({opacity:"1"});
            $(".ptf2_txt > a").delay(1200).animate({opacity:"1"});
            k = 5;
        }else{//6페이지
            $("#main_menu ul li a:eq(5)").addClass("on");
            $(".btn6").addClass("sel");
            
            $('.title5').animate({opacity:"1"},500);
            $(".flower").delay(300).animate({opacity:"1"},1500);
            
            $(".anim-typewriter").addClass("on").delay(900).animate({opacity:"1"});
            $(".anim-typewriter2").addClass("on").delay(3500).animate({opacity:"1"});
            k = 6;
            
        }
        return false;
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
});//end