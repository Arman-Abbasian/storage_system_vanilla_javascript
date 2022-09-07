import CategoryView from "./CategoryView.js";
import ProductView from "./PrductView.js";

document.addEventListener("DOMContentLoaded",()=>{
   // when app loaded, fill the initial variable(this.categoryList) with category table data, in DB 
    CategoryView.setApp();
    //make the option in product category in prodcut form section
    CategoryView.createCategoriesList();
    // when app loaded, fill the initial variable(this.productList) with product table data, in DB 
    ProductView.setProducts();
     //make the products in product container
    ProductView.createProductssList(ProductView.products);

});