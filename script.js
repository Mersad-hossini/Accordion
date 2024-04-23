let $ = document
let wrapper = $.querySelectorAll(".wrapper")
let toggleBtn = $.querySelector(".toggle")

wrapper.forEach(content => {
    content.addEventListener("click", () => {
        closeAllTabs()
        content.firstElementChild.firstElementChild.className = "fas fa-minus icon"

        content.firstElementChild.style = "color:rgb(0,132,132)"

        let elementSize = content.lastElementChild.scrollHeight + "px"
        content.lastElementChild.style = `height:${elementSize}`      
    })
})

function closeAllTabs() {
    wrapper.forEach(content => {
        content.firstElementChild.firstElementChild.className = "fas fa-plus icon"
        content.lastElementChild.style = "height:0"
        content.firstElementChild.style = "color:rgb(17,17,48)"
    })
}