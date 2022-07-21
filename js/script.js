const fileInputElement = document.querySelector(".file-input")
const chooseImgBtnElement = document.querySelector(".choose-img")
const previewImgElement = document.querySelector(".preview-img img")
const filterElement = document.querySelectorAll(".filter button")

const loadImage = () => {
    let file = fileInputElement.files[0]
    if(!file) return
    previewImgElement.src = URL.createObjectURL(file) // rasm qoshdik
    console.log(file);
    previewImgElement.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disable")
        // xammasini disabled qldik
    })
}

filterElement.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active")
        option.classList.add("active")
    })
})

fileInputElement.addEventListener("change", loadImage)
chooseImgBtnElement.addEventListener('click', () => fileInputElement.click())