(()=>{"use strict";(()=>{const t=document.querySelector("#content"),e=document.createElement("div"),n=document.createElement("img");e.classList.add("title"),e.textContent="Restaurant Title";const o=document.createElement("div");o.classList.add("img-container"),n.setAttribute("src","/restaurant.webp"),o.appendChild(n),t.appendChild(e),t.appendChild(o),t.appendChild((()=>{const t=document.createElement("div"),e=document.createElement("ul"),n=document.createElement("div"),o=document.createElement("li"),c=document.createElement("li"),a=document.createElement("li"),d=document.createElement("li");o.textContent="Home",o.className="home",c.textContent="Menu",c.className="menu",a.textContent="About",a.className="about",d.textContent="Contact",d.className="contact",n.className="tab-content";const l=document.createElement("h1"),m=document.createElement("p");return l.textContent="Home",m.textContent="home title",n.append(l,m),e.append(o,c,a,d),e.childNodes.forEach((t=>{t.style.cursor="pointer",t.classList.add("tabs")})),t.append(e,n),{container:t,tabs:e}})().container)})();const t=[{title:"Home",body:"home title"},{title:"Menu",body:"menu title"},{title:"About",body:"about body"},{title:"Contact",body:"contact body"}];document.querySelectorAll(".tabs").forEach((e=>{e.addEventListener("click",(e=>{!function(e){const n=document.querySelector(".tab-content"),o=document.createElement("h1"),c=document.createElement("div");t.forEach((t=>{t.title.toLowerCase()===e&&(n.innerHTML="",o.textContent=t.title,c.textContent=t.body,n.append(o,c))}))}(e.target.textContent.toLowerCase())}))}))})();