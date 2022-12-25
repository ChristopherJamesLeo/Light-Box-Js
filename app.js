console.log("hello world");

// Get Ui
let getImageContainers = document.querySelectorAll(".image-container img");

let getModalBtnClose = document.getElementById("btn-close");

let getModalBox = document.getElementById("modal");

let getShowImg = document.querySelectorAll(".show");

let getPrevBtn = document.getElementById("prev-btn");

let getNextBtn = document.getElementById("next-btn");

let getColImg = document.querySelectorAll(".col");

let getcaptions = document.querySelector(".indicator");

var showImgIdx = 1;

getImageContainers.forEach(function(getImageContainer){

    getImageContainer.addEventListener("click",function(e){
        getModalBox.style.display = "grid";

        let getIdx = getImageContainer.getAttribute("img-data");

        showImg(getIdx);

    })
    
})

getPrevBtn.addEventListener("click",function(){
    clearInterval(autoSlide);
    showImgIdx -= 1;
    if(showImgIdx < 0){
        showImgIdx = getImageContainers.length-1;
    }else if(showImgIdx > getImageContainers.length-1){
        showImgIdx = 0;
    }
    let num = showImgIdx;
    showImg(num);

    
})

getNextBtn.addEventListener("click", function(){
    clearInterval(autoSlide);
    showImgIdx ++;
    if(showImgIdx > getImageContainers.length-1){
        showImgIdx = 0;
    }else if(showImgIdx < 0){
        showImgIdx = getImageContainers.length-1;
    }
    let num = showImgIdx;
    showImg(num)
})


function showImg(num){

    for(let i = 0 ; i < getShowImg.length ; i++){
        getShowImg[i].style.display = "none";
        getColImg[i].classList.remove("active");
    }

    getShowImg[num].style.display = "block";
    getColImg[num].classList.add("active");

    showImgIdx = num;
    num++;

    getcaptions.innerText = `${num++}/${getImageContainers.length}`;

    

}


getModalBtnClose.addEventListener("click",()=>{
    getModalBox.style.display = "none";
})

window.onclick = function(e){
    if(e.target.classList.contains("modal")){
        getModalBox.style.display = "none";
    }
}

let autoSlide = setInterval(function(){
    showImgIdx++;    
    if(showImgIdx < 0){
        showImgIdx = getImageContainers.length-1;
    }else if(showImgIdx > getImageContainers.length-1){
        showImgIdx = 0;
    }
    // console.log(showImgIdx);
    showImg(showImgIdx);
    
},5000);

