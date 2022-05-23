//store the products array in localstorage as "products"
function pro  (t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function storedata(e){
    e.preventDefault();
    var form=document.getElementById("products")
    var type=form.type.value
    var desc=form.desc.value
    var price=form.price.value
    var image=form.image.value

    var p1=new pro(type,desc,price,image)
    var data=JSON.parse(localStorage.getItem("products"))||[];
    data.push(p1)
    localStorage.setItem("products",JSON.stringify(data));
    
    form.type.value="";
    form.desc.value="";
    form.price.value="";
    form.image.value="";

    window.location.reload()
}