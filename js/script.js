const fileInputElement = document.querySelector(".file-input")
const chooseImgBtnElement = document.querySelector(".choose-img")
const previewImgElement = document.querySelector(".preview-img img")
const filterElement = document.querySelectorAll(".filter button")
const filterNameElement = document.querySelector(".filter-info .name")
const filterSliderElement = document.querySelector(".slider input")
const filterValueElement = document.querySelector(".filter-info .value")



let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;

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

filterElement.forEach(option => {  // buttonlani bosganda xammasini kok qildik
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active")
        option.classList.add("active")
        filterNameElement.textContent = option.textContent

        if(option.id === "brightness") {
            filterSliderElement.max = "200"
            filterSliderElement.value = brightness
            filterValueElement.textContent = `${brightness}%`
        } else if (option.id === "saturation") {
            filterSliderElement.max = "200"
            filterSliderElement.value = saturation
            filterValueElement.textContent = `${saturation}%`
        } else if (option.id === "inversion") {
            filterSliderElement.max = "100"
            filterSliderElement.value = inversion
            filterValueElement.textContent = `${inversion}%`
        } else  {
            filterSliderElement.max = "100"
            filterSliderElement.value = grayscale
            filterValueElement.textContent = `${grayscale}%`
        }
    })
})

const updateFilter = () => {
    filterValueElement.textContent = `${filterSliderElement.value}%`
    const selectedFilterElement = document.querySelector(".filter .active")
    
    if(selectedFilterElement.id === "brightness") {
        brightness = filterSliderElement.value
    } else if(selectedFilterElement.id === "saturation") {
        saturation = filterSliderElement.value
    } else if(selectedFilterElement.id === "inversion") {
        inversion = filterSliderElement.value
    }  else {
        grayscale = filterSliderElement.value
    }
}

fileInputElement.addEventListener("change", loadImage)
chooseImgBtnElement.addEventListener('click', () => fileInputElement.click())
filterSliderElement.addEventListener("input", updateFilter)