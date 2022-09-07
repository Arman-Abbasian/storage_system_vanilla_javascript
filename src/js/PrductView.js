import Storage from "./Storage.js";

const productTitleInput=document.querySelector("#productTitle");
const productNumberInput=document.querySelector("#productNumber");
const productCategoryInput=document.querySelector("#productCategoty");
const productAddInput=document.querySelector("#add-new-product");
const productDom=document.getElementById("productsSection");
const searchProductInput=document.querySelector("#search-product")


class ProductView{
    constructor(){
        //one of the things that you should put in constructor method is events for initils tags
        //event for click on Add category button
        productAddInput.addEventListener("click",(e)=>this.addNewProduct(e));
        searchProductInput.addEventListener("input",(e)=>this.searchProduct(e.target.value))
        this.products=[];
        this.helperProducts=[];
    };
    addNewProduct(e){
        e.preventDefault();
        const productTitle=productTitleInput.value;
        const productNumber=productNumberInput.value;
        const productCategory=productCategoryInput.value;
        //if title input or desctiption input was empty do not do any thing
        if(!productTitle || !productNumber)  alert ("please add data");
        //save the new data in DB
        Storage.savedProducts({productTitle,productNumber,productCategory});
        //get All data from DB
        this.products=Storage.getAllProducts();
        this.createProductssList();
        console.log(this.products)
        productTitleInput.value='';
        productNumberInput.value='';
        productCategoryInput.value='';

    };
    setProducts(){
        this.products=Storage.getAllProducts();
        this.helperProducts=this.products
    };
    //make products in product container
    //this method run in two situation (1-when app first time loaded , 2- when click on Add product button)
    createProductssList(){
        let result="";
        this.helperProducts.forEach((item)=>{
            console.log(item.productCategory)
          const findedCategory=Storage.getAllCategories().find(element=>{
                return element.id==item.productCategory
            });
            console.log(findedCategory)
            result+=`
            <div class="flex justify-between items-center">
            <p>${item.productTitle}</p>
            <div class="flex justify-between items-center text-xs">
                <span class="flex justify-center items-center w-16 h-7  rounded-full border border-white">${item.productNumber}</span>
                <span class="flex justify-center items-center w-16 h-7  rounded-full border border-white">${findedCategory.title}</span>
                <span class="flex justify-center items-center w-16 h-7  rounded-full border border-white">${new Date(item.createdAt).toLocaleDateString('fa-IR')}</span>
                <span class="flex justify-center items-center w-16 h-7  rounded-full border border-white">delete</span>
            </div>
        </div>
            `
        });
        productDom.innerHTML=result;
    };


    searchProduct(inputValue){
        this.helperProducts= this.products.filter(item=>item.productTitle.includes(inputValue));
        this.createProductssList();
    }
};
export default new ProductView();