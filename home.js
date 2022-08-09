
const showPost = document.querySelector(".showPost");

const urlString= "https://teal-concha-13f5c3.netlify.app/feed.xml";

const getData = async (url)=>{
    let html = "";
try{
    let res = await fetch(url);
    if(res){
        let loader = document.querySelector(".loader");
        loader.style.display = "none";
      }
    let data = await res.text();
   let parser = new DOMParser();
   let xmlDocs = parser.parseFromString(data,"text/xml");

    let items = xmlDocs.querySelectorAll("item");

    items.forEach((item)=>{
        return(
html += `<div class = "card"> 
<a  class = "link" target = "_none" href = "${item.children[1].innerHTML}">
<h2 class = "post-title"> ${item.children[0].innerHTML}</h2> </a>

<b class = "post-date">${item.children[4].innerHTML.substring(0,16)}</b> 


</div>`)

    })
showPost.innerHTML = html;


}catch(err){
    console.log(err)
}


}

getData(urlString);




