
const tabs = () => {
  const tabs = document.createElement('ul')
  const home = document.createElement('li')
  const menu = document.createElement('li')
  const about = document.createElement('li')
  const contact = document.createElement('li')

  home.textContent = 'Home'
  menu.textContent = 'Menu'
  about.textContent = 'About'
  contact.textContent = 'Contact'

  tabs.append(home, menu, about, contact)
  return tabs
}

export default tabs