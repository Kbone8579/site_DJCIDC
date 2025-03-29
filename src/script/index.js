window.addEventListener("DOMContentLoaded", function () {
  // 한 페이지씩 이동
  const elm = document.querySelectorAll(".page.p0");
  const elmCount = elm.length;
  
  // 각 요소에 휠 이벤트 리스너 추가
  elm.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== elmCount - 1) {
          try {
            // 다음 요소 찾기
            let nextElement = elmSelector.nextElementSibling;
            // display: none인 요소를 건너뛰고 다음 보이는 요소 찾기
            while (nextElement && window.getComputedStyle(nextElement).display === 'none') {
              nextElement = nextElement.nextElementSibling;
            }
            if (nextElement) {
              moveTop = window.pageYOffset + nextElement.getBoundingClientRect().top;
            }
          } catch (e) {}
        }
      }
      // wheel up : move to previous section
      else {
        if (elmSelector !== 0) {
          try {
            // 이전 요소 찾기
            let prevElement = elmSelector.previousElementSibling;
            // display: none인 요소를 건너뛰고 이전 보이는 요소 찾기
            while (prevElement && window.getComputedStyle(prevElement).display === 'none') {
              prevElement = prevElement.previousElementSibling;
            }
            if (prevElement) {
              moveTop = window.pageYOffset + prevElement.getBoundingClientRect().top;
            }
          } catch (e) {}
        }
      }

      const body = document.querySelector("html");
      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  });
});

// 오브젝트 애니메이션 AOS
$(document).ready(function(){
    new WOW().init();
    
  });

  // process 
$(document).ready(function(){
  // controller
  document
  .querySelector(".box.b1")
  .addEventListener("click", (e) => {
    document.querySelector(".page.p2").scrollIntoView({ behavior: "smooth" });
  });
  document
  .querySelector(".box.b2")
  .addEventListener("click", (e) => {
    document.querySelector(".page.p3").scrollIntoView({ behavior: "smooth" });
  });
  document
  .querySelector(".box.b3")
  .addEventListener("click", (e) => {
    document.querySelector(".page.p4").scrollIntoView({ behavior: "smooth" });
  });
  document
  .querySelector(".box.b4")
  .addEventListener("click", (e) => {
    document.querySelector(".page.p5").scrollIntoView({ behavior: "smooth" });
  });
  document
  .querySelector(".box.b5")
  .addEventListener("click", (e) => {
    document.querySelector(".page.p6").scrollIntoView({ behavior: "smooth" });
  });
  document
  .querySelector(".box.b6")
  .addEventListener("click", (e) => {
    document.querySelector(".page.p11").scrollIntoView({ behavior: "smooth" });
  });
});

// remote-control 스크립트
// JavaScript for animating the controller
document.addEventListener('DOMContentLoaded', function() {
  const remoteControl = document.querySelector('.remote-control');
  const controller = document.querySelector('.controller');
  
  // Initially hide the controller off-screen
  controller.style.transform = 'translateX(100%)';
  controller.style.transition = 'transform 0.5s ease-in-out';
  controller.style.visibility = 'hidden';
  
  let isControllerVisible = false;
  
  remoteControl.addEventListener('click', function() {
    if (!isControllerVisible) {
      // Show controller
      controller.style.visibility = 'visible';
      setTimeout(() => {
        controller.style.transform = 'translateX(0)';
      }, 10); // Small delay to ensure visibility is applied first
    } else {
      // Hide controller
      controller.style.transform = 'translateX(100%)';
      setTimeout(() => {
        controller.style.visibility = 'hidden';
      }, 500); // Wait for the animation to complete
    }
    
    isControllerVisible = !isControllerVisible;
  });
});

// 컨트롤러 애니매이션션
$(document).ready(function(){
  // contents-navigation 보임/숨김김
  $(".contents-navigation").hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){$(".contents-navigation").fadeIn();}
    else{$(".contents-navigation").fadeOut();}
  });

  // 탑버튼 이동동
  $('.top-btn').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
      return false;
  });

  // remote-control 아이콘 변화
  $(".remote-control").click(function () {
    const $this = $(this);
  
    if ($this.hasClass("active")) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
  });
});


// main page 
// main page p1 navigation hover 
$(document).ready(function(){
  $(".page.p1 .contents > .main-nav .topbar-title1").mouseover(function(){
    $(".page.p1 .top-bar .contents-sub.s1 .title-box").css('opacity', '1');
  });
  $(".page.p1 .contents > .main-nav .topbar-title1").mouseout(function(){
    $(".page.p1 .top-bar .contents-sub.s1 .title-box").css('opacity', '0');
  });
  $(".page.p1 .contents > .main-nav .topbar-title2").mouseover(function(){
    $(".page.p1 .top-bar .contents-sub.s2 .title-box").css('opacity', '1');
  });
  $(".page.p1 .contents > .main-nav .topbar-title2").mouseout(function(){
    $(".page.p1 .top-bar .contents-sub.s2 .title-box").css('opacity', '0');
  });
  $(".page.p1 .contents > .main-nav .topbar-title3").mouseover(function(){
    $(".page.p1 .top-bar .contents-sub.s3 .title-box").css('opacity', '1');
  });
  $(".page.p1 .contents > .main-nav .topbar-title3").mouseout(function(){
    $(".page.p1 .top-bar .contents-sub.s3 .title-box").css('opacity', '0');
  });
  $(".page.p1 .contents > .main-nav .topbar-title4").mouseover(function(){
    $(".page.p1 .top-bar .contents-sub.s4 .title-box").css('opacity', '1');
  });
  $(".page.p1 .contents > .main-nav .topbar-title4").mouseout(function(){
    $(".page.p1 .top-bar .contents-sub.s4 .title-box").css('opacity', '0');
  });
  $(".page.p1 .contents > .main-nav .topbar-title5").mouseover(function(){
    $(".page.p1 .top-bar .contents-sub.s5 .title-box").css('opacity', '1');
  });
  $(".page.p1 .contents > .main-nav .topbar-title5").mouseout(function(){
    $(".page.p1 .top-bar .contents-sub.s5 .title-box").css('opacity', '0');
  });
});

// sub-menu
$(document).ready(function(){
  $(".sub-menu-btn").click(function(){
    $(".sub-menu-btn").toggleClass("active")
  });
  
});

// main page p2 navigation hover
$(document).ready(function(){
  $(".nav-buttons button").click(function(){
    // 모든 버튼에서 active 클래스 제거
    $(".nav-buttons button").removeClass("active");
    
    // 클릭된 버튼에만 active 클래스 추가
    $(this).addClass("active");

    // 모든 news-list에서 active 클래스 제거
    $(".news-list").removeClass("active");

    // 해당 버튼에 맞는 news-list에 active 클래스 추가
    if ($(this).hasClass("btn-1")) {
      $(".news-list.l1").addClass("active");
    } else if ($(this).hasClass("btn-2")) {
      $(".news-list.l2").addClass("active");
    } else if ($(this).hasClass("btn-3")) {
      $(".news-list.l3").addClass("active");
    } else if ($(this).hasClass("btn-4")) {
      $(".news-list.l4").addClass("active");
    } else if ($(this).hasClass("btn-5")) {
      $(".news-list.l5").addClass("active");
    }
  });
});

$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    effect:'fade',
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
});


$(window).on('load', function () {
  slider();  
})

function slider(){
  $(".slider").each(function(index){
      let $this = $(this);
      let swiper = undefined;
      let slideNum =  $this.find('.swiper-slide').length //슬라이드 총 개수
      let slideInx = 0; //현재 슬라이드 index
      
      //디바이스 체크
      let oldWChk = window.innerWidth > 1381 ? 'pc' : 
                    window.innerWidth > 1024 ? 'tablet' : 
                    window.innerWidth > 768 ? 'mobile-tablet' : 'mo';
      sliderAct();
      $(window).on('resize', function () {
          let newWChk = window.innerWidth > 1381 ? 'pc' : 
                        window.innerWidth > 1024 ? 'tablet' : 
                        window.innerWidth > 768 ? 'mobile-tablet' : 'mo';
          if(newWChk != oldWChk){
              oldWChk = newWChk;
              sliderAct();
          }
      })

      function sliderAct(){
          //슬라이드 인덱스 클래스 추가
          $this.addClass(`slider${index}`);

          //슬라이드 초기화 
          if (swiper != undefined){ 
              swiper.destroy();
              swiper = undefined;
          }

          //slidesPerView 옵션 설정
          let viewNum = oldWChk == 'pc' ? 4 : 
                        oldWChk == 'tablet' ? 3 : 
                        oldWChk == 'mobile-tablet' ? 2 : 1;
          //loop 옵션 체크
          let loopChk = slideNum > viewNum;

          swiper = new Swiper(`.slider${index} .inner`, {
              slidesPerView: viewNum,
              initialSlide: slideInx,
              spaceBetween: 33,
              slidesPerGroup: 1,
              // loop: loopChk,
              navigation: {
                  prevEl: $(`.slider${index} .btn_prev`)[0],
                  nextEl: $(`.slider${index} .btn_next`)[0],
              },
              on: {
                  activeIndexChange: function () {
                      slideInx = this.realIndex; //현재 슬라이드 index 갱신
                  }
              },
          });
      }
  });
}





document.addEventListener('DOMContentLoaded', () => {
  const mainVideos = document.querySelectorAll('.main-video .video');
  const subVideos = document.querySelectorAll('.sub-video .video');
  const mainVideoScreen = document.querySelector('.main-video .video-screen');

  // Set initial state: sub-video v1 screen is transparent
  const subV1VideoScreen = document.querySelector('.sub-video .video.v1 .video-screen, .sub-video .video.v4 .video-screen, .sub-video .video.v7 .video-screen');
  if (subV1VideoScreen) {
      subV1VideoScreen.style.opacity = '0';
  }

  subVideos.forEach((subVideo, index) => {
      subVideo.addEventListener('click', () => {
          // Hide all main videos
          mainVideos.forEach(video => {
              video.style.opacity = '0';
          });

          // Show clicked video in main video area
          const targetMainVideo = document.querySelector(`.main-video .video.v${index + 1}`);
          if (targetMainVideo) {
              targetMainVideo.style.opacity = '1';
          }

          // Reset all sub-video screens to opaque
          document.querySelectorAll('.sub-video .video-screen').forEach(screen => {
              screen.style.opacity = '1';
          });

          // Make clicked sub-video screen transparent
          const videoScreen = subVideo.querySelector('.video-screen');
          if (videoScreen) {
              videoScreen.style.opacity = '0';
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.content-btn .btn');
  const videoSections = document.querySelectorAll('.content-video');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      
      // Remove display block from all video sections
      videoSections.forEach(section => {
        section.style.display = 'none';
      });

      // Add active class to clicked button
      button.classList.add('active');

      // Show corresponding video section
      if (button.classList.contains('s1')) {
        document.querySelector('.content-video.v1').style.display = 'grid';
      } else if (button.classList.contains('s2')) {
        document.querySelector('.content-video.v2').style.display = 'grid';
      } else if (button.classList.contains('s3')) {
        document.querySelector('.content-video.v3').style.display = 'grid';
      }
    });
  });

  // Initially show the first section (영상자료)
  document.querySelector('.btn.s1').click();
});


