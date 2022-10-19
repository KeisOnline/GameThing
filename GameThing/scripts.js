function debugFunction() {
    console.log("this function is calling")
}
var audio = $("#audio-test")[0];
$("nav a").mouseenter(function() {
  audio.play();
});

function textScroll1() {
    var i1 = 0;
    var txt1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut massa odio. Ut fermentum tempus neque, in imperdiet est euismod at. Etiam condimentum vel turpis eget tincidunt. Vivamus interdum sit amet velit non cursus. Vivamus dapibus consectetur arcu vitae scelerisque. Etiam cursus nisl vitae leo aliquam, eu feugiat leo interdum. Fusce pharetra justo sed eros porta, at tincidunt purus efficitur.";
    let speed = -20;
    function typeWriter1() {
        if (i1 < txt1.length) {
            document.getElementById("para1").innerHTML += txt1.charAt(i1);
            i1++;
            setTimeout(typeWriter1, speed);
        }
    }
    typeWriter1();
}
function textScroll2() {
    var i2 = 0;
    var txt2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut massa odio. Ut fermentum tempus neque, in imperdiet est euismod at. Etiam condimentum vel turpis eget tincidunt. Vivamus interdum sit amet velit non cursus. Vivamus dapibus consectetur arcu vitae scelerisque. Etiam cursus nisl vitae leo aliquam, eu feugiat leo interdum. Fusce pharetra justo sed eros porta, at tincidunt purus efficitur.";
    let speed = -20;
    function typeWriter2() {
        if (i2 < txt2.length) {
            document.getElementById("para2").innerHTML += txt2.charAt(i2);
            i2++;
            setTimeout(typeWriter2, speed);
        }
    }
    typeWriter2();
}
function textScroll3() {
    var i3 = 0;
    var txt3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut massa odio. Ut fermentum tempus neque, in imperdiet est euismod at. Etiam condimentum vel turpis eget tincidunt. Vivamus interdum sit amet velit non cursus. Vivamus dapibus consectetur arcu vitae scelerisque. Etiam cursus nisl vitae leo aliquam, eu feugiat leo interdum. Fusce pharetra justo sed eros porta, at tincidunt purus efficitur.";
    let speed = -20;
    function typeWriter3() {
        if (i3 < txt3.length) {
            document.getElementById("para3").innerHTML += txt3.charAt(i3);
            i3++;
            setTimeout(typeWriter3, speed);
        }
    }
    typeWriter3();
}
function textScroll4() {
    var i4 = 0;
    var txt4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut massa odio. Ut fermentum tempus neque, in imperdiet est euismod at. Etiam condimentum vel turpis eget tincidunt. Vivamus interdum sit amet velit non cursus. Vivamus dapibus consectetur arcu vitae scelerisque. Etiam cursus nisl vitae leo aliquam, eu feugiat leo interdum. Fusce pharetra justo sed eros porta, at tincidunt purus efficitur.";
    let speed = -20;
    function typeWriter4() {
        if (i4 < txt4.length) {
            document.getElementById("para4").innerHTML += txt4.charAt(i4);
            i4++;
            setTimeout(typeWriter4, speed);
        }
    }
    typeWriter4();
}

function startFunction() {
    document.getElementById("para1").style.display = "block";
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("select-btn").style.display = "inline-block";
    document.getElementById("up-btn").style.display = "inline-block";
    document.getElementById("down-btn").style.display = "inline-block";
    


    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      
      delay(150).then(() => textScroll1());
      delay(2150).then(() => textScroll2());
      delay(3950).then(() => textScroll3());
      delay(5850).then(() => textScroll4());
      delay(7750).then(() => textScroll5());
}