import initialLoad from "./initial-load"
import homeTab from "./home-tab"
import menuTab from "./menu-tab"
import aboutTab from "./about-tab"
import contactTab from "./contact-tab"

initialLoad()

const pages = [homeTab(), menuTab(), aboutTab(), contactTab()]

const tablets = document.querySelectorAll('.tabs')
tablets.forEach(tab => {
  tab.addEventListener('click', (e) => {
    tabSwitch(e.target.textContent.toLowerCase())
  })
})

function tabSwitch(tabTitle){
  const tabContent = document.querySelector('.tab-content')
  const title = document.createElement('h1')
  const body = document.createElement('div')
  pages.forEach(page => {
    if(page.title.toLowerCase() === tabTitle){
      tabContent.innerHTML = ''
      title.textContent = page.title
      body.textContent = page.body
      tabContent.append(title, body)
    }
  })
}