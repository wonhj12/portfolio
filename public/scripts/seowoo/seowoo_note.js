// // Define the flight path
// var flightpath = {
//     entry: {
//         curviness: 1.25,
//         autoRotate: true,
//         values: [
//             { x: 100, y: -20 },
//             { x: 300, y: 10 },
//         ],
//     },
//     looping: {
//         curviness: 1.25,
//         autoRotate: true,
//         values: [
//             { x: 510, y: 60 },
//             { x: 620, y: -60 },
//             { x: 500, y: -100 },
//             { x: 380, y: 20 },
//             { x: 500, y: 60 },
//             { x: 580, y: 20 },
//             { x: 620, y: 15 },
//         ],
//     },
//     leave: {
//         curviness: 1.25,
//         autoRotate: true,
//         values: [
//             { x: 660, y: 20 },
//             { x: 800, y: 130 },
//             { x: screen.width + 300, y: -100 },
//         ],
//     },
// };

// // Initialize ScrollMagic controller
// var controller = new ScrollMagic.Controller();

// // Get the plane element
// var plane = document.getElementById('plane');

// // Create tween
// var tween = new TimelineMax()
//     .add(
//         TweenMax.to(plane, 1.2, {
//             css: { bezier: flightpath.entry },
//             ease: Power1.easeInOut,
//         })
//     )
//     .add(
//         TweenMax.to(plane, 2, {
//             css: { bezier: flightpath.looping },
//             ease: Power1.easeInOut,
//         })
//     )
//     .add(
//         TweenMax.to(plane, 1, {
//             css: { bezier: flightpath.leave },
//             ease: Power1.easeInOut,
//         })
//     );

// // Build ScrollMagic scene
// var scene = new ScrollMagic.Scene({
//     triggerElement: document.getElementById('trigger'),
//     duration: 500,
//     offset: 100,
// })
//     .setPin(document.getElementById('target'))
//     .setTween(tween)
//     .addIndicators() // Add indicators (requires plugin)
//     .addTo(controller);

// $(function () {
//     var controller = new ScrollMagic.Controller();
//     var animateElem1 = ['.animate_1'];
//     var left_show1 = ['.left_show1'];
//     var right_show1 = ['.right_show1'];
//     var left_show2 = ['.left_show2'];
//     var triggerElem1 = ['.trigger_1'];

//     var animateElem2 = ['.animate_2'];
//     var under_show1 = ['.under_show1'];
//     var under_show2 = ['.under_show2'];
//     var triggerElem2 = ['.trigger_2'];

//     var animateElem3 = ['.animate_3'];
//     var fade_show1 = ['.fade_show1'];
//     var fade_show2 = ['.fade_show2'];
//     var fade_show3 = ['.fade_show3'];
//     var triggerElem3 = ['.trigger_3'];

//     /* =================================================================== */
//     // 첫번째 페이지 효과
//     for (var i = 0; i < animateElem1.length; i++) {
//         var currentAnimateElem = animateElem1[i];
//         var currentTriggerElem = triggerElem1[i];

//         var timeline = new TimelineMax();

//         var tween_move = TweenMax.fromTo(
//             currentAnimateElem,
//             1,
//             {
//                 ease: SlowMo.ease.config(0.3, 0.7, false),
//                 y: 1,
//             },
//             {
//                 ease: SlowMo.ease.config(0.3, 0.7, false),
//                 y: -1,
//             }
//         );

//         var tween_opacity = new TimelineMax();
//         tween_opacity
//             .to(currentAnimateElem, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 1,
//             })
//             .to(left_show1, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .to(right_show1, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .to(left_show2, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .add('start')
//             .to(left_show1, 3.5, {
//                 ease: SlowMo.ease.config(1, 1, false),
//                 opacity: 1,
//                 x: 100,
//             })
//             .to(
//                 right_show1,
//                 3.5,
//                 {
//                     ease: SlowMo.ease.config(1, 1, false),
//                     opacity: 1,
//                     x: -100,
//                 },
//                 'start'
//             )
//             .to(
//                 left_show2,
//                 3.5,
//                 {
//                     ease: SlowMo.ease.config(1, 1, false),
//                     opacity: 1,
//                 },
//                 'start'
//             )
//             .to(currentAnimateElem, 1, {
//                 ease: SlowMo.ease.config(0.7, 1, false),
//                 opacity: 0,
//             });

//         timeline.add(tween_move, 0).add(tween_opacity, 0);
//         var scene_main = new ScrollMagic.Scene({
//             triggerElement: currentTriggerElem,
//             duration: '1500px',
//         })
//             .setTween(timeline)
//             .addTo(controller);
//     }
//     /* =================================================================== */

//     /* =================================================================== */
//     // 두번째 페이지 효과
//     for (var i = 0; i < animateElem2.length; i++) {
//         var currentAnimateElem = animateElem2[i];
//         var currentTriggerElem = triggerElem2[i];

//         var timeline = new TimelineMax();

//         var tween_move = TweenMax.fromTo(
//             currentAnimateElem,
//             1,
//             {
//                 ease: SlowMo.ease.config(0.3, 0.7, false),
//                 y: 10,
//             },
//             {
//                 ease: SlowMo.ease.config(0.3, 0.7, false),
//                 y: -10,
//             }
//         );

//         var tween_opacity = new TimelineMax();
//         tween_opacity
//             .to(currentAnimateElem, 0.3, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 1,
//             })
//             .to(under_show1, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .to(under_show2, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .to(under_show1, 3.5, {
//                 ease: Sine.ease,
//                 opacity: 1,
//                 y: -160,
//             })
//             .to(under_show2, 5, {
//                 ease: Sine.ease,
//                 opacity: 1,
//                 y: -160,
//             })
//             .to(currentAnimateElem, 5, {
//                 ease: SlowMo.ease.config(0.1, 1, false),
//                 opacity: 0,
//             });

//         timeline.add(tween_move, 0).add(tween_opacity, 0);

//         var scene_main = new ScrollMagic.Scene({
//             triggerElement: currentTriggerElem,
//             duration: '1200px',
//         })
//             .setTween(timeline)
//             .addTo(controller);
//     }
//     /* =================================================================== */

//     /* =================================================================== */
//     // 세번째 페이지 효과
//     for (var i = 0; i < animateElem3.length; i++) {
//         var currentAnimateElem = animateElem3[i];
//         var currentTriggerElem = triggerElem3[i];

//         var timeline = new TimelineMax();

//         var tween_move = TweenMax.fromTo(
//             currentAnimateElem,
//             1,
//             {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 y: 0,
//             },
//             {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 y: 0,
//             }
//         );

//         var tween_opacity = new TimelineMax();
//         tween_opacity
//             .to(currentAnimateElem, 3, {
//                 ease: Circ.easeOut,
//                 opacity: 0,
//             })
//             .to(fade_show1, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .to(fade_show2, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .to(fade_show3, 1, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 0,
//             })
//             .to(currentAnimateElem, 6, {
//                 ease: Circ.easeOut,
//                 opacity: 1,
//             })
//             .to(fade_show1, 4, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 1,
//             })
//             .to(fade_show2, 4, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 1,
//             })
//             .to(fade_show3, 4, {
//                 ease: SlowMo.ease.config(0.7, 0.7, false),
//                 opacity: 1,
//             })
//             .to(currentAnimateElem, 3, {
//                 ease: Circ.easeOut,
//                 opacity: 0,
//             });

//         timeline.add(tween_move, 0).add(tween_opacity, 0);

//         var scene_main = new ScrollMagic.Scene({
//             triggerElement: currentTriggerElem,
//             duration: '1500px',
//         })
//             .setTween(timeline)
//             .addTo(controller);
//     }
//     /* =================================================================== */
// });
