previewContainer = document.querySelectorAll(".preview-container")

const getUrl =  (e)=>{
    let targetUrl =  e.currentTarget.firstElementChild.getAttribute('src')
    previewContainer.forEach(element=>{
        element.style.backgroundImage = `url(${targetUrl})`
    })

}
document.querySelectorAll(".kids-img").forEach(element=>{
    element.addEventListener("click", getUrl)
})


// counters

let valueDisplays = document.querySelectorAll(".impact-card-title")
let interval = 5000;

valueDisplays.forEach(valueDisplay => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter =  setInterval(()=>{
        startValue += 1 
        valueDisplay.textContent = startValue + "+";

        if(startValue == endValue){
            clearInterval(counter)
        }
    }, duration)
    console.log(endValue)
});


