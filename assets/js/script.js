// adds the current date to the calender app
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

const d = new Date();
let hour = d.getHours();
//hour = 12;
let color;
//alert(hour);
/*if (hour === 17) {
  color = "green";
  document.getElementById("nine").style.backgroundColor = "lightgreen";
}*/

switch (hour) {
  case 9:
    document.getElementById("one").style.backgroundColor = "tomato";
    document.getElementById("two").style.backgroundColor = "lightgreen";
    document.getElementById("three").style.backgroundColor = "lightgreen";
    document.getElementById("four").style.backgroundColor = "lightgreen";
    document.getElementById("five").style.backgroundColor = "lightgreen";
    document.getElementById("six").style.backgroundColor = "lightgreen";
    document.getElementById("seven").style.backgroundColor = "lightgreen";
    document.getElementById("eight").style.backgroundColor = "lightgreen";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 10:
    document.getElementById("two").style.backgroundColor = "tomato";
    document.getElementById("three").style.backgroundColor = "lightgreen";
    document.getElementById("four").style.backgroundColor = "lightgreen";
    document.getElementById("five").style.backgroundColor = "lightgreen";
    document.getElementById("six").style.backgroundColor = "lightgreen";
    document.getElementById("seven").style.backgroundColor = "lightgreen";
    document.getElementById("eight").style.backgroundColor = "lightgreen";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 11:
    document.getElementById("three").style.backgroundColor = "tomato";
    document.getElementById("four").style.backgroundColor = "lightgreen";
    document.getElementById("five").style.backgroundColor = "lightgreen";
    document.getElementById("six").style.backgroundColor = "lightgreen";
    document.getElementById("seven").style.backgroundColor = "lightgreen";
    document.getElementById("eight").style.backgroundColor = "lightgreen";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 12:
    document.getElementById("four").style.backgroundColor = "tomato";
    document.getElementById("five").style.backgroundColor = "lightgreen";
    document.getElementById("six").style.backgroundColor = "lightgreen";
    document.getElementById("seven").style.backgroundColor = "lightgreen";
    document.getElementById("eight").style.backgroundColor = "lightgreen";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 13:
    document.getElementById("five").style.backgroundColor = "tomato";
    document.getElementById("six").style.backgroundColor = "lightgreen";
    document.getElementById("seven").style.backgroundColor = "lightgreen";
    document.getElementById("eight").style.backgroundColor = "lightgreen";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 14:
    document.getElementById("six").style.backgroundColor = "tomato";
    document.getElementById("seven").style.backgroundColor = "lightgreen";
    document.getElementById("eight").style.backgroundColor = "lightgreen";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 15:
    document.getElementById("seven").style.backgroundColor = "tomato";
    document.getElementById("eight").style.backgroundColor = "lightgreen";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 16:
    document.getElementById("eight").style.backgroundColor = "tomato";
    document.getElementById("nine").style.backgroundColor = "lightgreen";
    break;
  case 17:
    document.getElementById("nine").style.backgroundColor = "tomato";
    break;
  default:
  //alert("hello");
}

// allows text inputted in the time frames to be stored in local storage
document.getElementById("one").value = localStorage.getItem("one");

document.getElementById("save-one").addEventListener("click", function () {
  //alert("click");
  let textarea1 = document.getElementById("one").value;
  localStorage.setItem("one", textarea1);
});

document.getElementById("two").value = localStorage.getItem("two");

document.getElementById("save-two").addEventListener("click", function () {
  //alert("click");
  let textarea2 = document.getElementById("two").value;
  localStorage.setItem("two", textarea2);
});

document.getElementById("three").value = localStorage.getItem("three");

document.getElementById("save-three").addEventListener("click", function () {
  //alert("click");
  let textarea3 = document.getElementById("three").value;
  localStorage.setItem("three", textarea3);
});

document.getElementById("four").value = localStorage.getItem("four");

document.getElementById("save-four").addEventListener("click", function () {
  //alert("click");
  let textarea4 = document.getElementById("four").value;
  localStorage.setItem("four", textarea4);
});

document.getElementById("five").value = localStorage.getItem("five");

document.getElementById("save-five").addEventListener("click", function () {
  //alert("click");
  let textarea5 = document.getElementById("five").value;
  localStorage.setItem("five", textarea5);
});

document.getElementById("six").value = localStorage.getItem("six");

document.getElementById("save-six").addEventListener("click", function () {
  //alert("click");
  let textarea6 = document.getElementById("six").value;
  localStorage.setItem("six", textarea6);
});

document.getElementById("seven").value = localStorage.getItem("seven");

document.getElementById("save-seven").addEventListener("click", function () {
  //alert("click");
  let textarea7 = document.getElementById("seven").value;
  localStorage.setItem("seven", textarea7);
});

document.getElementById("eight").value = localStorage.getItem("eight");

document.getElementById("save-eight").addEventListener("click", function () {
  //alert("click");
  let textarea8 = document.getElementById("eight").value;
  localStorage.setItem("eight", textarea8);
});

document.getElementById("nine").value = localStorage.getItem("nine");

document.getElementById("save-nine").addEventListener("click", function () {
  //alert("click");
  let textarea9 = document.getElementById("nine").value;
  localStorage.setItem("nine", textarea9);
});

