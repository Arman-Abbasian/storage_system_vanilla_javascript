import Storage from "./Storage.js";
//get the tags that related to category section and we wnat to add events to them and is exist in on initial loading
const title=document.querySelector("#category-title");
const description=document.querySelector("#category-description");
const addNewCategoryBtn=document.querySelector("#add-new-category");
export default class CategoryView{
    constructor(){
        addNewCategoryBtn.addEventListener("click",(e)=>addNewCategory(e));
        this.categories=[];
    };
    addNewCategory(e){
        e.perventDefault();
        const title=title.value;
        const description=description.value;
        if(!title || !description) return;
        Storage.saveCategory({title,description});
        this.categories=Storage.getAllCategories();
    }
}