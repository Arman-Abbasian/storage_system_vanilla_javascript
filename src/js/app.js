import CategoryView from "./CategoryView.js";

document.addEventListener("DOMContentLoaded",()=>{
   // when app loaded, fill the initial variable(this.categoryList) with category table data, in DB 
    CategoryView.setApp();
    //make the option in product category in prodcut form section
    CategoryView.createCategoriesList();
});