const menuToggl = document.getElementById("menu-tggl")
const contentWeb = document.getElementById("main")
const navHead = document.querySelectorAll("nav > ul > li > a");
const subNav = document.querySelectorAll(".extra-menu a")
const extraNav = document.querySelector(".extra-menu2")
const extraNavChild = document.querySelectorAll(".extra-menu2 li a")




menuToggl.addEventListener("click",()=>{
   active(menuToggl)
   active(main)
})


navHead.forEach(link => {
   select(link,navHead)
});

subNav.forEach(link =>{
    select(link,subNav)
})

extraNavChild.forEach(link=>{
    select(link,extraNavChild)
})


function select(link,list){
    link.addEventListener("click",(e)=>{
        if(list === navHead){
            navOfHead(link)
        }else if(list === subNav){
            navHead.forEach(link =>{
                    link.classList.remove("active")
            })
        }else if(list === extraNavChild){
           active(link)
           active(extraNav)
        }

        list.forEach((links)=>{
            links.classList.remove("active")
        })
        e.target.classList.toggle("active")
    })
}
function active(element){
    element.classList.toggle("active");
    if(contentWeb.classList.contains("about")){
        contentWeb.classList.remove("about")
    }
}
function navOfHead(link,){
    if(link.classList.contains("drop-down")){
        extraNav.classList.add("active"); 
        contentWeb.classList.add("about")      
    }else{
        if(window.innerWidth <= 768){
            active(contentWeb)
            active(menuToggl) 
        }
    }
}