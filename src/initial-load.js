import tabs from "./tabs"

const initialLoad = () => {
  const content = document.querySelector('#content')
  const title = document.createElement('div')
  const image = document.createElement('img')

  //title
  title.classList.add('title')
  title.textContent = 'Restaurant Title'

  //img
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  image.setAttribute('src', '/restaurant.webp')
  imgContainer.appendChild(image)

  //container
  content.appendChild(title)
  content.appendChild(imgContainer)
  content.appendChild(tabs())
}

export default initialLoad