import gsap from 'gsap';

const labBtn = document.querySelectorAll('.enter-lab');

const logo = document.querySelector('.logo');

const body = document.querySelector('body');
const videoOverlay = document.querySelector('.video-overlay');
// const video = videoOverlay.querySelector('video');
const canvas = document.querySelector('canvas');
const title = document.querySelector('.title h1');
const hamburger = document.querySelector('header i');


body.style.overflow = 'hidden';

function playIntro() {

    // document.documentElement.requestFullscreen();
    const tl = gsap.timeline();


    tl.to(labBtn, {
        duration: 0.6,
        opacity: 0,
        y: -20,
        ease: 'ease'
    });

    tl.to(title, {
        duration: 0.6,
        opacity: 0,
        y: -20,
        ease: 'ease'
    })

    tl?.to('nav ul li', {
        duration: 0.7,
        opacity: 0,
        y: -15,
        stagger: 0.1,
        ease: 'ease'
    });

    tl?.to(hamburger,{
        duration: 0.6,
        opacity: 0,
        y: -50,
        ease: 'ease',
    })

    tl.to(logo, {
        duration: 0.6,
        opacity: 0,
        x: -50,
        ease: 'ease',
    });

    // tl.to(canvas, {
    //     duration: 5,
    //     y: -100,
    //     scale: 0,
    //     opacity: 0,
    //     ease: 'ease'
    // });


    // tl.to(videoOverlay, {
    //     opacity: 10,
    //     display: 'block',
    //     zIndex:20,
    //     onStart: () => video.play(),
    //     ease: 'ease'
    // });


    // video.addEventListener('ended', () => {
    //     videoOverlay.style.display = 'none';
    //     body.style.overflowY = 'auto';
    // });
    setTimeout(() => {
    window.location.href =  "/lab.html";
        
    }, 7000);
}

labBtn.forEach(btn => btn.addEventListener('click', () => {
    
    playIntro();
}))

