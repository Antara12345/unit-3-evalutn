var data=JSON.parse(localStorage.getItem("products"))||[]

function display(data){
    data.forEach(function(ele,index){
        var div=document.createElement("div")
        div.setAttribute("id","box")

        var img=document.createElement("img")
        img.setAttribute("src",ele.image)
        img.setAttribute("id","image")

        var h2=document.createElement("h2")
        h2.innerText=ele.type
        
        var h3=document.createElement("h3")
        h3.innerText=ele.desc

        var p=document.createElement("p")
        p.innerText=ele.price

        var btn=document.createElement("button")
        btn.setAttribute("id","ant")
        btn.innerText="Remove"
        btn.style.cursor="pointer"
        btn.style.color="maroon"
        btn.addEventListener("click",function(){
            delbox(ele,index)
        })

        div.append(img,h2,h3,p,btn)
        document.getElementById("all_products").append(div)
    })
}
display(data)
function delbox(ele,index)
{
    

    data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload()
}