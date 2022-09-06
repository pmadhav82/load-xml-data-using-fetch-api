
const showPost = document.querySelector(".showPost");

const urlString= "https://subtle-parfait-a9b0f3.netlify.app/data.xml"


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
<h2 class = "post-title"> ${item.children[0].innerHTML}</h2> 

<b class = "post-date">${item.children[4].innerHTML.substring(0,16)}</b> 
<p class = "description"> 
${item.children[6].textContent}
</P>

</div>`)

    })
showPost.innerHTML = html;


}catch(err){
    console.log(err)
}


}

getData(urlString);




