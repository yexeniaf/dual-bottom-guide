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
