const fileInputElement = document.querySelector(".file-input") // 1
const chooseImgBtnElement = document.querySelector(".choose-img")  // 2
const previewImgElement = document.querySelector(".preview-img img")  // 7
const filterElement = document.querySelectorAll(".filter button")  // 10
const filterNameElement = document.querySelector(".filter-info .name")  // 12
const filterSliderElement = document.querySelector(".slider input")  // 14
const filterValueElement = document.querySelector(".filter-info .value")  // 17
const rotateElement = document.querySelectorAll(".rotate button")  // 25
const resetFilterBtnElement = document.querySelector(".reset-filter")  // 30



let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;  // 19
let rotate = 0, flipHorizontal = 1, flipVertical = 1; // 27

rotateElement.forEach(option => {  // 26
    option.addEventListener("click", () => {
            console.log(option);
            if(option.id === "left") {  // 28
                rotate -= 90;
            } else if(option.id === "right") {  // 28
                rotate += 90;
            }  else if(option.id === "horizontal") {  // 28
                flipHorizontal = flipHorizontal === 1 ? -1 : 1;
            } else {
                flipVertical = flipVertical === 1 ? -1 : 1;
            }

            applyFilters()
    })
})

const loadImage = () => {  // 5
    let file = fileInputElement.files[0]
    console.log(file);
    if(!file) return  // 6
    previewImgElement.src = URL.createObjectURL(file) // 8 rasm qoshdik
    previewImgElement.addEventListener("load", () => {  // 9 html va css ga disable qib qoyamiz
        document.querySelector(".container").classList.remove("disable")
        // xammasini disabled qldik
    })
}

filterElement.forEach(option => {  // 11-4 qatorni yozamiz buttonlani bosganda xammasini kok qildik
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active")
        option.classList.add("active")
        filterNameElement.textContent = option.textContent  // 13

        if(option.id === "brightness") {  // 22
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
    console.log(filterSliderElement.value);  // 16
    filterValueElement.textContent = `${filterSliderElement.value}%`  // 18
    const selectedFilterElement = document.querySelector(".filter .active")  // 20
    
    if(selectedFilterElement.id === "brightness") {  // 21 Filterni buttonlariga id qoshamiz html
        brightness = filterSliderElement.value
    } else if(selectedFilterElement.id === "saturation") {
        saturation = filterSliderElement.value
    } else if(selectedFilterElement.id === "inversion") {
        inversion = filterSliderElement.value
    }  else {
        grayscale = filterSliderElement.value
    }

    applyFilters()  // 23
}

const resetFilter = () => {  // 32
    brightness = 100; saturation = 100; inversion = 0; grayscale = 0;
    rotate = 0; flipHorizontal = 1; flipVertical = 1;
    applyFilters()
}

const applyFilters = () => {  // 24
    previewImgElement.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`  // 29
    previewImgElement.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`  // 24
}



fileInputElement.addEventListener("change", loadImage)  // 4
chooseImgBtnElement.addEventListener('click', () => fileInputElement.click())  // 3
filterSliderElement.addEventListener("input", updateFilter)  // 15
resetFilterBtnElement.addEventListener("click", resetFilter)  // 31