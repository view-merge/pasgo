// Nóng cùng Pasgo
const arrowLeft = document.querySelector('.pasgo-arrow-left');
const arrowRight = document.querySelector('.pasgo-arrow-right');

const txt = document.querySelectorAll('.customer-list-items a');
let index = 0;

arrowLeft.addEventListener('click',function() {
    index = index - 1
    if (index <= 0) {
        index = txt.length - 1
    }
    document.querySelector(".customer-group").style.right = index * 20 + "%"
})

arrowRight.addEventListener('click',function() {
    index = index + 1
    if (index > txt.length - 1) {
        index = 0
    }
    document.querySelector(".customer-group").style.right = index * 20 + "%"
})


// Nóng cùng với Pasgo
const mousseLeft = document.querySelector('.arrow-left-1');
const mouseRight = document.querySelector('.arrow-right-1');

const txt1 = document.querySelectorAll('.product-item');
let index1 = 0;

mousseLeft.addEventListener('click',function() {
    index1 = index1 - 1
    if (index1 <= 0) {
        index1 = txt1.length - 1
    }
    document.querySelector(".product-groups").style.right = index1 * 20 + "%"
})

mouseRight.addEventListener('click',function() {
    index1 = index1 + 1
    if (index1 > txt1.length - 1) {
        index1 = 0
    }
    document.querySelector(".product-groups").style.right = index1 * 20 + "%"
})



// owl carousel khám phá
var prevBtn = document.querySelector(".owl-prev");
var nextBtn = document.querySelector(".owl-next");
var listKhamPha = document.querySelectorAll(".owl-item");
var currentIndex = 0;

function prevEvent () {
document.querySelector(".owl-stage").style.right = currentIndex * 20 +"%";
}

function nextEvent () {
    document.querySelector(".owl-stage").style.right = currentIndex * 20 +"%";
    }

prevBtn.addEventListener("click", e=>{
    currentIndex--
    if (currentIndex == 0) {
        currentIndex = listKhamPha.length + 1;
    }
    else {
        currentIndex--;
    }
    prevEvent(currentIndex)

})

nextBtn.addEventListener("click", e=>{
    currentIndex++
    if (currentIndex == listKhamPha.length -1) {
        currentIndex == 0;
    }
    else {
        currentIndex++;
    }
    nextEvent(currentIndex)

})


var prevBtn1 = document.querySelector(".owl-prev-1");
var nextBtn1 = document.querySelector(".owl-next-1");
var listKhamPha1 = document.querySelectorAll(".owl-items");
var currentIndex1 = 0;

function prevEvent1 () {
document.querySelector(".owl-stages").style.right = currentIndex1 * 20 +"%";
}

function nextEvent1 () {
    document.querySelector(".owl-stages").style.right = currentIndex1 * 20 +"%";
    }

prevBtn1.addEventListener("click", e=>{
    currentIndex1--
    if (currentIndex1 == 0) {
        currentIndex1 = listKhamPha1.length + 1;
    }
    else {
        currentIndex1--;
    }
    prevEvent1(currentIndex1)

})

nextBtn1.addEventListener("click", e=>{
    currentIndex1++
    if (currentIndex1 == listKhamPha1.length -1) {
        currentIndex1 == 0;
    }
    else {
        currentIndex1++;
    }
    nextEvent1(currentIndex1)

})