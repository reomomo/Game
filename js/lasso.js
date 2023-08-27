/* global $*/
/* global i*/

let switchBtnReset = document.getElementById("reset");
const switchBtnSmallLasso = document.getElementById("smallLasso");
const switchBtnBigLasso = document.getElementById("bigLasso");

function changeElement(max) {
  return Math.floor(Math.random() * max);
}

for (i = 1; i <= 25; i++) {
  if (changeElement(2) == 0) {
    $(`.p${i}`).css({
      'visibility': 'hidden'
    });
  } else if (changeElement(2) == 1) {
    $(`.p${i}`).css({
      'visibility': 'visible'
    });
  }
}

const lassoesOpacity = [...Array(25)].map((_, i) => i + 1);
let copy = lassoesOpacity;

switchBtnReset.addEventListener('click', () => {
  for (i = 1; i <= 25; i++) {
    if (changeElement(2) == 0) {
      $(`.p${i}`).css({
        'visibility': 'hidden'
      });
    } else if (changeElement(2) == 1) {
      $(`.p${i}`).css({
        'visibility': 'visible'
      });
    }
  }
  $('.lasso').css({
    'opacity': '0'
  });
  document.getElementById("bigLasso").removeAttribute("disabled");
  document.getElementById("smallLasso").removeAttribute("disabled");
}, false);

switchBtnSmallLasso.addEventListener('click', () => {
  let selectedSmall = [...Array(3)].map(() =>
  copy.splice(Math.floor(Math.random() * lassoesOpacity.length), 1)[0]);
  console.log(copy.length);
  selectedSmall.forEach((e) => {
    $(`.l${e}`).css({
      'opacity': '0.6',
      'width': '90%',
    });
  });
  document.getElementById("bigLasso").setAttribute("disabled", true);
  document.getElementById("smallLasso").setAttribute("disabled", true);
});

const lassoBigOpacity = [1,2,3,4,6,7,8,9,11,12,13,14,16,17,18,19];
switchBtnBigLasso.addEventListener('click', () => {
  let selectedBig = lassoBigOpacity[Math.floor(Math.random() * lassoBigOpacity.length)];
  $(`.l${selectedBig}`).css({
    'opacity': '0.6',
    'width': '180%',
  });
  document.getElementById("bigLasso").setAttribute("disabled", true);
  document.getElementById("smallLasso").setAttribute("disabled", true);
});


// lassoesOpacityが減っていく問題を解決する！
