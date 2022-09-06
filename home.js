
const showPost = document.querySelector(".showPost");

const urlString= "https://subtle-parfait-a9b0f3.netlify.app/data.xml" ;

//"http://127.0.0.1:5500/data.xml";



const getData = async (url)=>{
    let html = "";
    let loader = document.querySelector(".loader");

try{
    let res = await fetch(url);
    if(res){
        loader.style.display = "none";
      }
    let data = await res.text();
   let parser = new DOMParser();
   let xmlDocs = parser.parseFromString(data,"text/xml");

    let items = xmlDocs.querySelectorAll("item");

    items.forEach((item)=>{
        return(
html += `<div class = "card"> 
<h2 class = "post-title">  <a href = "${item.children[1].innerHTML}" target = "_blank">${item.children[0].innerHTML} </a></h2> 

<b class = "post-date">${item.children[4].innerHTML.substring(0,16)}</b> 
<p class = "description"> 
${item.children[6].textContent}
</P>
<div class = "icons">
<i class="fa fa-solid fa-share"></i>

<a target = "_blank" href="https://www.facebook.com/sharer/sharer.php?u=${item.children[1].innerHTML}"><i class="fa fa-facebook"></i></a>
<a target = "_blank" 
href="https://www.linkedin.com/shareArticle?mini=true&
url=${item.children[1].innerHTML}&
title=${item.children[1].innerHTML}&summary= ${item.children[6].textContent} &source=">
<i class = "fa  fa-soild fa-linkedin"> </i></a>

</div>

</div>`)

    })
showPost.innerHTML = html;


}catch(err){
    console.log(err)
}


}

getData(urlString);




