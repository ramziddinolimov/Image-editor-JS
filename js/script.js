const fileInputElement = document.querySelector(".file-input")
const chooseImgBtnElement = document.querySelector(".choose-img")
const previewImgElement = document.querySelector(".preview-img img")

const loadImage = () => {
    let file = fileInputElement.files[0]
    if(!file) return
    previewImgElement.src = URL.createObjectURL(file)
    console.log(file);
}

fileInputElement.addEventListener("change", loadImage)
chooseImgBtnElement.addEventListener('click', () => fileInputElement.click())