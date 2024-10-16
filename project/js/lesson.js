













// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items');

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent(0)

let slideIndex = 0

setInterval(() => {
    slideIndex = (slideIndex + 1) % tabItems.length;
    hideTabContent();
    showTabContent(slideIndex);
}, 5000)

tabParent.onclick = (event)=>{
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((item,index) => {
            if(event.target === item){
                hideTabContent()
                showTabContent(index)
                slideIndex = index
            }
        })
    }
}
