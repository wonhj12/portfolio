// 오늘 날짜 설정
const today = document.querySelector('.today');
const now = new Date();
today.textContent = now
    .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    .toString();

// Init Scroll Magic controller
let controller = new ScrollMagic.Controller();

/* 하트 애니메이션 */
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
    duration: 200,
    tweenChanges: true,
})
    .setTween(heartTimeline)
    .addTo(controller);

/* '우리가 함께한지 어느덧' 애니메이션 */
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
    const startDate = new Date('2022-10-10T00:00:00+09:00');
    const currentDate = new Date(
        now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
    );
    const differenceMs = currentDate - startDate;
    const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    console.log(days);
    return days;
}

// 사귄 일수 카운터 애니메이션
function counter() {
    const countTo = countDays();
    const textDate = document.querySelector('.text-date');

    /* 입력한 숫자를 n번에 걸쳐 1부터 올림. */
    const each = Math.ceil(countTo / 80);
    let time = 0;

    for (let i = 1; i <= countTo; i += each) {
        setTimeout(() => {
            textDate.innerHTML = `${i}`;
        }, 20 * time);
        time++;
    }

    /* 딱 떨어지지 않는 숫자를 마지막에 그 숫자로 만들어주기 위함 */
    setTimeout(() => {
        textDate.innerHTML = `${countTo}`;
    }, 20 * (time + 1));
}

/* '사랑해 좋아해 애정해' 애니메이션 */
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
        duration: 2,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(textLove2, {
        duration: 2,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(textLove3, {
        duration: 2,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(textLove3, {
        duration: 1,
        delay: 2,
        ease: 'power2.inOut',
        opacity: 0,
    })
    .to(textLove2, {
        duration: 1,
        ease: 'power2.inOut',
        opacity: 0,
    })
    .to(textLove1, {
        duration: 1,
        ease: 'power2.inOut',
        opacity: 0,
    });

let textLoveScene = new ScrollMagic.Scene({
    triggerElement: '.text-love-trigger',
    duration: '450',
})
    .setTween(textLoveTimeline)
    .addTo(controller);

/* 편지 애니메이션 */
let letterTimeline = new TimelineMax();

const letter = document.querySelector('.letter');
const letter1 = document.querySelector('.letter-1');
const letter2 = document.querySelector('.letter-2');
const letter3 = document.querySelector('.letter-3');
const letter4 = document.querySelector('.letter-4');
const letter5 = document.querySelector('.letter-5');
const letter6 = document.querySelector('.letter-6');
const letter7 = document.querySelector('.letter-7');
const letter8 = document.querySelector('.letter-8');

letterTimeline
    .to(letter, {
        duration: 0.3,
        ease: 'power2.inOut',
        opacity: 1,
    })
    .to(letter1, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(letter2, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(letter3, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(letter4, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(letter5, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(letter6, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(letter7, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    })
    .to(letter8, {
        duration: 1,
        ease: 'sine.inOut',
        opacity: 1,
    });

let letterScene = new ScrollMagic.Scene({
    triggerElement: '.letter-trigger',
    duration: '300',
})
    .setTween(letterTimeline)
    .addTo(controller);
