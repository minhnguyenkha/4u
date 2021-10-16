
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
}
)
wow.init();
var i = 0;
var txt = 'Tặng Ánh Sao nè !'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(text) {
  if (i < txt.length) {
    document.getElementById("text1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if(i == txt.length){
    var couple = document.querySelector('.couple');
    couple.classList.add('wow', 'animate__fadeOut', 'animate__faster');
couple.addEventListener('animationend', function(){
  couple.style.visibility = "hidden";
  couple.classList.add('animate__faster');
})
  }
}
setTimeout(() => {
  typeWriter();
}, 1700);






var couple = document.querySelector('.couple');
couple.addEventListener('animationend', function(){
  couple.style.visibility = "hidden";
  couple.classList.add('animate__faster');
})
var app = document.getElementById('app');
var body = document.querySelector('body');
var button1 = document.getElementById('b1');
button1.onclick = show1;
function show1(){
  var thisMd = create1();
  body.appendChild(thisMd);
  setTimeout(() => {
    thisMd.remove();
  }, 2000);
}
  function create1(){
    var div = document.createElement('div');
    div.classList.add('md1', 'fixed', 'x');
    div.innerHTML = 
              `<h1>Woo ! Đó là vì sao còn <span class="as">Ánh&nbspSao</span> thì ở trong anh</h1>`;
    return div;
  }

var button2 = document.getElementById('b2');
button2.onclick = show2;
function show2(){
  var thisMd = create2();
  body.appendChild(thisMd);
  setTimeout(() => {
    thisMd.remove();
  }, 2500);
}

    function create2(){
      var div = document.createElement('div');
    div.classList.add('md2', 'fixed', 'x','sw');
    div.innerHTML = 
              `<h1>Yeah...Bởi vì anh lấy <span class="as">Ánh&nbspSao</span> bỏ túi rồi</h1>`;
    return div;
    }


var button3 = document.getElementById('b3');
button3.onclick = show3;
function show3(){
  var thisMd = create3();
  body.appendChild(thisMd);
  setTimeout(() => {
    thisMd.remove();
  }, 3000);
}

    function create3(){
      var div = document.createElement('div');
      div.classList.add('md3', 'fixed', 'x','sw');
      div.innerHTML = 
              `<h1>Yup...chỉ bầu trời và vì sao, nhưng <span class="as">Ánh&nbspSao</span> ở trong anh</h1>`;
      return div;
    }


var t1 = document.getElementById('t1');
var img = document.querySelector('.content2 .img img')
t1.addEventListener('animationend', function(){
  t1.innerText = "Anh tặng em sự bí ẩn này!";
  t1.style.color = "#fff";
  img.classList.add('animate__animated', 'animate__fadeIn');
  document.querySelector('.overlay2').style.visibility = "hidden";
})


var yesBtn = document.querySelector('.yes');
yesBtn.onclick = showA;
function showA(){
  var md = createA();
  body.appendChild(md);
  setTimeout(() => {
    activeText();
  }, 2000);
  setTimeout(() => {
    md.remove();
  }, 3500);
}
var noBtn = document.querySelector('.no');
noBtn.onclick = showB;
function showB(){
  var md = createA();
  body.appendChild(md);
  setTimeout(() => {
    activeText();
  }, 1500);
  setTimeout(() => {
    activeText2();
  }, 2000);
  setTimeout(() => {
    activeText();
  }, 2500);
  setTimeout(() => {
    activeText2();
  }, 3000);
  setTimeout(() => {
    activeText();
  }, 3100);
  setTimeout(() => {
    md.remove();
  }, 4000);
}
  function activeText(){
    var spanX = document.querySelector('.sa h2 span');
    spanX.innerHTML = 
            `True`;
    spanX.style.background = "#AAFFA9";
    spanX.style.background = "-webkit-linear-gradient(to right, #11FFBD, #AAFFA9)";
    spanX.style.background = "linear-gradient(to right, #11FFBD, #AAFFA9)";
    spanX.style.webkitBackgroundClip = "text";
    spanX.style.webkitTextFillColor = "transparent";
  }
  function activeText2(){
    var spanX = document.querySelector('.sa h2 span');
    spanX.innerHTML = 
            `False`;
    spanX.style.background = "#e52d27";
    spanX.style.background = "-webkit-linear-gradient(to right, #b31217, #e52d27)";
    spanX.style.background = "linear-gradient(to right, #b31217, #e52d27)";
    spanX.style.webkitBackgroundClip = "text";
    spanX.style.webkitTextFillColor = "transparent";
  }
  function createA(){
    var div = document.createElement('div');
    div.classList.add('fixed', 'sa');
    div.innerHTML = 
          `<div class="img">
          <svg width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="tickIcon 1">
              <g id="tickIcon">
              <path id="border" d="M98.7538 197.508C153.294 197.508 197.508 153.294 197.508 98.7538C197.508 44.2136 153.294 0 98.7538 0C44.2136 0 0 44.2136 0 98.7538C0 153.294 44.2136 197.508 98.7538 197.508Z" fill="#C21E56" fill-opacity="0.5"/>
              <path id="bg-tick" d="M98.7538 181.049C144.204 181.049 181.049 144.204 181.049 98.7538C181.049 53.3036 144.204 16.459 98.7538 16.459C53.3036 16.459 16.459 53.3036 16.459 98.7538C16.459 144.204 53.3036 181.049 98.7538 181.049Z" fill="#C21E56" fill-opacity="0.8"/>
              <path id="tick" d="M84.6395 131.977C84.479 131.977 84.3183 131.973 84.1574 131.966C82.7373 131.897 81.3488 131.522 80.0871 130.867C78.8255 130.211 77.7205 129.291 76.8481 128.168L63.0742 110.459C61.4704 108.392 60.7519 105.773 61.0763 103.177C61.4007 100.581 62.7415 98.22 64.8047 96.6114L65.3001 96.2257C67.3672 94.6219 69.986 93.9035 72.582 94.2279C75.1781 94.5523 77.5395 95.893 79.1484 97.9561C79.9247 98.9543 80.9075 99.7729 82.0295 100.356C83.1516 100.939 84.3864 101.273 85.6494 101.334C86.9124 101.396 88.1738 101.184 89.3472 100.713C90.5207 100.242 91.5784 99.5224 92.4481 98.6045L120.416 69.0814C121.307 68.1406 122.375 67.3846 123.559 66.8565C124.742 66.3284 126.018 66.0386 127.313 66.0036C128.609 65.9686 129.899 66.1891 131.109 66.6526C132.319 67.1161 133.426 67.8134 134.367 68.7048L134.823 69.1374C136.723 70.9373 137.83 73.4181 137.901 76.0342C137.971 78.6502 137 81.1872 135.2 83.087L91.8009 128.896C90.8795 129.869 89.7692 130.645 88.5379 131.175C87.3065 131.705 85.98 131.978 84.6395 131.977Z" fill="white"/>
              </g>
              </g>
          </svg>                
      </div>
      <h2>In relationship:&nbsp;<span class="w">False</span></h2>
      <h2><a href = "http://www.facebook.com/khaminh01022002" target="_blank"><i class="fab fa-facebook"></i></a></h2>`;
      
      return div;
  }

 
  

    