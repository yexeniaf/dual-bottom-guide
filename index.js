// Toggle functionality for IN and CM button
let btn = document.getElementById("marked");
let newClass = '';

btn.addEventListener('change', function () {
  if (this.checked) {
   newClass = document.querySelectorAll('.centimeters');
   oldClass = document.querySelectorAll('.inches');
   oldRow = document.querySelectorAll('.inches-row');
   newRow = document.querySelectorAll('.centimeters-row');
  } else {
    newClass = document.querySelectorAll('.inches');
    oldClass = document.querySelectorAll('.centimeters');
    oldRow = document.querySelectorAll('.centimeters-row');
    newRow = document.querySelectorAll('.inches-row');
  }

  for (var i = 0; i < newClass.length; i++) {
    newClass[i].classList.add('active');
    newClass[i].classList.remove('hidden');
}

for (var i = 0; i < oldClass.length; i++) {
  oldClass[i].classList.remove('active');
  oldClass[i].classList.add('hidden');
}

for (var i = 0; i < newRow.length; i++) {
  newRow[i].classList.add('active-row');
  newRow[i].classList.remove('hidden');
}

for (var i = 0; i < oldRow.length; i++) {
  oldRow[i].classList.add('hidden');
  oldRow[i].classList.remove('active-row');
}

});

// Function for Image Guide Toggle Button //

function imageExtraSmall() {
  document.getElementById("model-image").src = "https://cdn.shopify.com/s/files/1/0382/1223/9492/files/MeasuringGuide-04.jpg?v=1658957156";
  document.getElementById("xs-info").style.display = "block";
  document.getElementById("s-info").style.display = "none";
  document.getElementById("xl-info").style.display = "none";
}

function imageSmall() {
  document.getElementById("model-image").src = "https://cdn.shopify.com/s/files/1/0382/1223/9492/files/MeasuringGuide-05.jpg?v=1658957036";
  document.getElementById("xs-info").style.display = "none";
  document.getElementById("s-info").style.display = "block";
  document.getElementById("xl-info").style.display = "none";

}

function imageExtraLarge() {
  document.getElementById("model-image").src = "https://cdn.shopify.com/s/files/1/0382/1223/9492/files/MeasuringGuide-06.jpg?v=1658956407";
  document.getElementById("xs-info").style.display = "none";
  document.getElementById("s-info").style.display = "none";
  document.getElementById("xl-info").style.display = "block";

 
}