var gifs = [];
var staticGif;
var randomGif;
//var badImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.gif', '6.jpg', '7.jpg', ];
//var goodImages = [];
// var overlayImages = [];
// var audio = [];

//var sayings = ['lessen your leavings', 'slash your trash', 'trim your trash', 'dwindle your rubbish','step down your scraps', 'think about your trash'];

window.addEventListener('load', function() {
    for (var i = 0; i < 24; i++) {
        gifs.push(document.getElementById(i));
    }

    staticGif = document.getElementById('static');

    // for (var i = 0; i < 9; i++) {
    //     goodImages.push(document.getElementById('good'+i));
    // }

    // for (var i = 0; i < 8; i++) {
    //     audio.push(document.getElementById('audio' + i));
    // }

    // overlayImages.push(document.getElementById('buzzimg'));
    // overlayImages.push(document.getElementById('dingimg'));

    console.log(gifs);
    //document.getElementById('3').style.display = 'block';
    
});
var socket = io.connect('http://localhost:8080/');

socket.on('connect', function() {
    console.log("Connected");
    //document.getElementById('static').style.display = 'block';
});

// Receive a message
var playing = false;
socket.on('message', function(data) { 

    console.log(data);
    console.log('about to play gifs')
    document.getElementById('static').style.display = 'block';

    console.log('data received');

    // if (playing === false) {
    //     playing = true;
    //     var randInt = randomIntFromInterval(0, audio.length - 1);
    //     audio[randInt].play();
    //     setTimeout(startShow, 300);
    // }
    if (data === 0) {
      // document.body.style.backgroundColor = 'blue';
      //hideAll(gifs);
          for (var i = 0; i < 24; i++) {
        document.getElementById(i).style.display = 'none';
    }
      document.getElementById('static').style.display = 'block';

    } else if (data === 1) {
        
        document.getElementById('static').style.display = 'none';
        //gifs[i].style.display = 'none';
        for (var i = 0; i < 24; i++) {
        document.getElementById(i).style.display = 'none';
    }
        // randomGif =  Math.floor(Math.random(0, gifs.length));
        // gifs[randomGif].style.display = 'block';
        var randInt = randomIntFromInterval(0, gifs.length -1);
        gifs[randInt].style.display = 'block';
        // document.getElementById('7').style.display = 'block';


    //   document.body.style.backgroundColor = 'green';
    }

});

// function startShow() {
//     // Start the show 
//     playing = true;


//     imageCounter = 0;
//     var timer = setInterval(function() {
//         if (imageCounter > badImages.length) {imageCounter = 0;}
//         // Hide all images
//         hideAll(badImages);
//         hideAll(overlayImages);
//         document.getElementById('buzz').play();
     
//         badImages[randInt].style.display = 'block';
//         overlayImages[0].style.display = 'block';
//         imageCounter++;
//     }, 1000);

//     // Stop showing bad images
//     // Show good image, then final screen
//     setTimeout(function() {
//         clearInterval(timer);
//         hideAll(badImages);
//         hideAll(overlayImages);

//         //Show good image
//         randInt = randomIntFromInterval(0, goodImages.length -1);
//         console.log(randInt);
//         document.getElementById('ding').play();
//         overlayImages[1].style.display = 'block';
//         goodImages[randInt].style.display = 'block';
//         setTimeout(function() {
//             hideAl(overlayImages);
//             hideAll(goodImages);l
//             document.getElementById('finalscreen').style.display = 'flex';
//             var randSayingInt = randomIntFromInterval(0, sayings.length - 1);
//             document.getElementById('finalmessage').innerHTML = sayings[randSayingInt];
//             setTimeout(function() {
//                 // show final screen

//                 setTimeout(function() {
//                     document.getElementById('finalscreen').style.display = 'none';
//                     document.getElementById('startscreen').style.display = 'block';
//                 }, 2000);

//                 playing = false;
//             }, 2000);

//         }, 2000);
//     }, 4900);

//     // When done, set playing = false again

// }

// function hideAll(images) {
//     for (var i = 0; i < gifs.length; i++) {
//         gifs[i].style.display = 'none';
//     }
// }

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
