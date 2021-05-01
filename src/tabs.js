import homeTab from './home-tabs'

const tabs = () => {
  const container = document.createElement('div')
  const tabs = document.createElement('ul')
  const tabContent = document.createElement('div')
  const home = document.createElement('li')
  const menu = document.createElement('li')
  const about = document.createElement('li')
  const contact = document.createElement('li')

  home.textContent = 'Home'
  home.className = 'home'
  menu.textContent = 'Menu'
  menu.className = 'menu'
  about.textContent = 'About'
  about.className = 'about'
  contact.textContent = 'Contact'
  contact.className = 'contact'

  //tab content
  const title = document.createElement('h1')
  const body = document.createElement('p')
  title.textContent = homeTab().title
  body.textContent = homeTab().body
  tabContent.append(title, body)
  

  tabs.append(home, menu, about, contact)
  container.append(tabs, tabContent)
  return {
    container,
    tabs
  }
}

export default tabs