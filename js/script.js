let imgArray = imgObjectToArray(document.querySelectorAll('.img-outp>img'))

let left_button,right_button
[left_button,right_button] = document.querySelectorAll('.button')

left_button.addEventListener('click',() => shift('right'))
right_button.addEventListener('click',() => shift('left'))

function shift(direction){
    let index, insertSide
    if (direction === 'left'){
        index = 0
        insertSide = 'beforeend'
    }
    if (direction === 'right'){
        index = imgArray.length - 1
        insertSide = 'afterbegin'
    }
    imgArray[index].parentElement.insertAdjacentHTML(insertSide,`${imgArray[index].outerHTML}`)
    imgArray[index].remove();
    imgArray = imgObjectToArray(document.querySelectorAll('.img-outp>img'))
    imgArray[0].className = 'hidden'
    imgArray[1].className = 'left_picture'
    imgArray[2].className = 'center_picture'
    imgArray[3].className = 'right_picture'
    if (imgArray.length >= 5){
        for(let i = 4; i < imgArray.length; i++)
            imgArray[i].className = 'hidden'
    }
}

function imgObjectToArray(imgObj){
    let bufArr = []
    for (let img of imgObj){
        bufArr.push(img)
    }
    return bufArr
}