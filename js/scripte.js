//^^^Side Bar^^^
$(".close-btn").on("click", function () {
  $(".side-bar").animate({ right: "100%" }, 1000);
  $(".close-btn,.list-ul").fadeOut(200);
});

$(".open-side-bar").on("click", function () {
  $(".side-bar").animate({ right: "75%" }, 1000);
  $(".close-btn,.list-ul").fadeIn(2300);
});

$(".tar").on("click", function (e) {
  e.preventDefault(); //*to disable create a new link
  let target = $(e.target).attr("href");
  let setOff = $(target).offset().top;
  $("html, body").animate({ scrollTop: setOff }, 1000);
});

//^^^Singer Slide^^^
$(".name-one").on("click", function () {
  $(".about-one").slideToggle(1000);
  $(".about-two,.about-three,.about-four").slideUp(1000);
});
$(".name-two").on("click", function () {
  $(".about-two").slideToggle(1000);
  $(".about-one,.about-three,.about-four").slideUp(1000);
});
$(".name-three").on("click", function () {
  $(".about-three").slideToggle(1000);
  $(".about-one,.about-two,.about-four").slideUp(1000);
});
$(".name-four").on("click", function () {
  $(".about-four").slideToggle(1000);
  $(".about-one,.about-two,.about-three").slideUp(1000);
});

//^^^Event Time^^^
function gettime() {
  let timer = new Date("Apr 12, 2025 00:00:00").getTime();
  let time = setInterval(function () {
    let current = new Date().getTime();
    let dist = timer - current;
    let day = Math.floor(dist / (1000 * 60 * 60 * 24));
    let hour = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hour < 10) {
      hour = "0" + hour;
    }
    let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = Math.floor((dist % (1000 * 60)) / 1000);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#second").innerHTML = seconds;

    if (dist < 0) {
      clearInterval(time);
      {
        document.querySelector("#day").innerHTML = "00";
        document.querySelector("#hour").innerHTML = "00";
        document.querySelector("#minutes").innerHTML = "00";
        document.querySelector("#second").innerHTML = "00";
      }
    }
  }, setTimeout(gettime, 1000));
}
gettime();

//^^^Character Limit^^^
let textArea = document.querySelector("textarea");
let counter = document.querySelector("#counter");
counter.textContent = 100;

textArea.addEventListener("input", function () {
  let count = textArea.value.length;
  counter.textContent = 100 - count;
  if (counter.textContent < 1) {
    counter.textContent = "You crossed the limit";
  }
});
