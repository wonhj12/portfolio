// Init Scroll Magic controller
let controller = new ScrollMagic.Controller();

// 하트 애니메이션 섹셔
let heartTimeline = new TimelineMax();
const heart = document.querySelector('.path-heart');

lineLength = heart.getTotalLength();
heart.style.strokeDasharray = lineLength;
heart.style.strokeDashoffset = lineLength;

heartTimeline.add(
    TweenMax.to(heart, { duration: 1, strokeDashoffset: 0, ease: 'none' })
);

let heartScene = new ScrollMagic.Scene({
    triggerElement: '.heart-trigger',
    duration: 300,
    tweenChanges: true,
})
    .setTween(heartTimeline)
    .addTo(controller);

// '우리가 함께한지 어느덧' 애니메이션 섹션
let textDayTimeline = new TimelineMax();

const textDay = document.querySelector('.text-day');
const textDay1 = document.querySelector('.text-day-1');
const textDay2 = document.querySelector('.text-day-2');

textDayTimeline
    .to(textDay, {
        duration: 0.3,
        ease: 'power2.inOut',
        opacity: 1,
    })
    .to(textDay1, {
        duration: 3,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(textDay2, {
        duration: 5,
        ease: 'sine.inOut',
        opacity: 1,
    });

let textDayScene = new ScrollMagic.Scene({
    triggerElement: '.text-day-trigger',
    duration: '200',
})
    .on('enter', function (event) {
        if (event.target.controller().info('scrollDirection') == 'FORWARD')
            counter();
    })
    .setTween(textDayTimeline)
    .addTo(controller);

// 사귄 일수 계산하는 함수
function countDays() {
    const startDate = new Date('2022-10-10');
    const endDate = new Date();
    const differenceMs = endDate - startDate;
    const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    return days + 1;
}

// 사귄 일수 카운터 애니메이션
function counter() {
    const countTo = countDays();

    /* 입력한 숫자를 n번에 걸쳐 1부터 올림. */
    const each = Math.ceil(countTo / 80);
    let time = 0;

    for (let i = 1; i <= countTo; i += each) {
        setTimeout(() => {
            textDay2.textContent = `${i}일`;
        }, 20 * time);
        /* 딱 떨어지지 않는 숫자를 마지막에 그 숫자로 만들어주기 위함 */
        if (i + each > this.countTo) {
            setTimeout(() => {
                textDay2.textContent = `${countTo}일`;
            }, 20 * (time + 1));
        }
        time++;
    }
}

// 사진 애니메이션 섹션
let imgTimeline = new TimelineMax();

let imgs = document.querySelectorAll('.img-slide');

for (let i = 0; i < imgs.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: imgs[i],
        triggerHook: 'onLeave',
        duration: '100%',
    })
        .setPin(imgs[i], { pushFollowers: false })
        .addTo(controller);
}

// '우리가 함께한지 어느덧' 애니메이션 섹션
let textLoveTimeline = new TimelineMax();

const textLove = document.querySelector('.text-love');
const textLove1 = document.querySelector('.text-love-1');
const textLove2 = document.querySelector('.text-love-2');
const textLove3 = document.querySelector('.text-love-3');

textLoveTimeline
    .to(textLove, {
        duration: 0.3,
        ease: 'power2.inOut',
        opacity: 1,
    })
    .to(textLove1, {
        duration: 3,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(textLove2, {
        duration: 5,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(textLove3, {
        duration: 5,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(textLove3, {
        duration: 2,
        ease: 'power2.inOut',
        opacity: 0,
    })
    .to(textLove2, {
        duration: 2,
        ease: 'power2.inOut',
        opacity: 0,
    })
    .to(textLove1, {
        duration: 2,
        ease: 'power2.inOut',
        opacity: 0,
    });

let textLoveScene = new ScrollMagic.Scene({
    triggerElement: '.text-love-trigger',
    duration: '800',
})
    .setTween(textLoveTimeline)
    .addIndicators()
    .addTo(controller);
