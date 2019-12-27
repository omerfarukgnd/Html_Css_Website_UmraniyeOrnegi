var slideIndex = 1;

showSlide(slideIndex);

function plusSlides(n){

showSlide(slideIndex += n);

}

function currentSlide(n) {

showSlide(slideIndex = n);

}

function showSlide(n){

var i;

var slides = document.getElementsByClassName("myslides");

var dots = document.getElementsByClassName("dots");

if (n > slides.length) { slideIndex = 1};

if (n < 1) { slideIndex = slides.length};

for (i=0;i<slides.length;i++) {

slides[i].style.display = "none";

};

for (i=0;i<dots.length;i++) {

dots[i].className = dots[i].className.replace(" active","");

};

slides[slideIndex-1].style.display = "block";

dots[slideIndex-1].className += " active";

}





var slideIndex_1 = 1;

showSlide_1(slideIndex_1);


function plusSlides_1(n){

showSlide_1(slideIndex_1 += n);

}

function currentSlide_1(n) {

showSlide_1(slideIndex_1 = n);

}


function showSlide_1(n){

var k;

var slides_1 = document.getElementsByClassName("myslides_1");

var dots_1 = document.getElementsByClassName("dots_1");

if (n > slides_1.length) { slideIndex_1 = 1};

if (n < 1) { slideIndex_1 = slides_1.length};

for (k=0;k<slides_1.length;k++) {

slides_1[k].style.display = "none";

};

for (k=0;k<dots_1.length;k++) {

dots_1[k].className = dots_1[k].className.replace(" active","");

};

slides_1[slideIndex_1-1].style.display = "block";

dots_1[slideIndex_1-1].className += " active";

}




var slideIndex_2 = 1;

showSlide_2(slideIndex);


function plusSlides_2(n){

showSlide_2(slideIndex += n);

}


function currentSlide_2(n) {

showSlide_2(slideIndex_2 = n);

}


function showSlide_2(n){

var m;

var slides_2 = document.getElementsByClassName("myslides_2");

var dots_2 = document.getElementsByClassName("dots_2");

if (n > slides_2.length) { slideIndex_2 = 1};

if (n < 1) { slideIndex_2 = slides_2.length};

for (m=0;m<slides_2.length;m++) {

slides_2[m].style.display = "none";

};

for (m=0;m<dots_2.length;m++) {

dots_2[m].className = dots_2[m].className.replace(" active","");

};

slides_2[slideIndex_2-1].style.display = "block";

dots_2[slideIndex_2-1].className += " active";

}






var slideIndex_3 = 1;

showSlide_3(slideIndex_3);


function plusSlides_3(n){

showSlide_3(slideIndex_3 += n);

}

function currentSlide_3(n) {

showSlide_3(slideIndex_3 = n);

}


function showSlide_3(n){

var l;

var slides_3 = document.getElementsByClassName("myslides_3");

var dots_3 = document.getElementsByClassName("dots_3");

if (n > slides_3.length) { slideIndex_3 = 1};

if (n < 1) { slideIndex_3 = slides_3.length};

for (l=0;l<slides_3.length;l++) {

slides_3[l].style.display = "none";

};

for (l=0;l<dots_3.length;l++) {

dots_3[l].className = dots_3[l].className.replace(" active","");

};

slides_3[slideIndex_3-1].style.display = "block";

dots_3[slideIndex_3-1].className += " active";

}




