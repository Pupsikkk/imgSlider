let imgArray = imgObjectToArray(document.querySelectorAll('.img-outp>img'))

let left_button,right_button
[left_button,right_button] = document.querySelectorAll('.button')

left_button.addEventListener('click',shiftLeft)
right_button.addEventListener('click',shiftRight)

function shiftLeft(){
    imgArray[0].parentElement.insertAdjacentHTML('beforeend',`${imgArray[0].outerHTML}`)
    imgArray[0].remove();
    imgArray = imgObjectToArray(document.querySelectorAll('.img-outp>img'))
    imgArray[0].className = 'left_picture'
    imgArray[1].className = 'center_picture'
    imgArray[2].className = 'right_picture'
    if (imgArray.length >= 4){
        for(let i = 3; i < imgArray.length; i++)
            imgArray[i].className = 'hidden'
    }
}


function shiftRight(){
    imgArray[imgArray.length - 1].parentElement.insertAdjacentHTML('afterbegin',`${imgArray[imgArray.length - 1].outerHTML}`)
    imgArray[imgArray.length - 1].remove();
    imgArray = imgObjectToArray(document.querySelectorAll('.img-outp>img'))
    imgArray[0].className = 'left_picture'
    imgArray[1].className = 'center_picture'
    imgArray[2].className = 'right_picture'
    if (imgArray.length >= 4){
        for(let i = 3; i < imgArray.length; i++)
            imgArray[i].className = 'hidden'
    }
    console.log(imgArray)
    console.log(helpArray)
}


function imgObjectToArray(imgObj){
    let bufArr = []
    for (let img of imgObj){
        bufArr.push(img)
    }
    return bufArr
}

console.log(imgArray)
console.log(imgArray[0].parentElement)
// console.log(left_button)
// console.log(right_button)
