import Storage from "./Storage.js";
//get the tags that related to category section and we wnat to add events to them and is exist in on initial loading
//input for title in category form
const titleInput=document.querySelector("#category-title");
//input for description in category form
const descriptionInput=document.querySelector("#category-description");
//Add category button in category form
const addNewCategoryBtn=document.querySelector("#add-new-category");
// category select in category form
const categoryDom=document.getElementById("productCategoty");



 class CategoryView{
    constructor(a){
        //one of the things that you should put in constructor method is events for initils tags
        //event for click on Add category button
        addNewCategoryBtn.addEventListener("click",(e)=>this.addNewCategory(e));
        this.categories=[];
        this.a=a
    };
    //when click on add category button you make a new category object in DB and again get the updated
    //data and show them in App(by )
    addNewCategory(e){
        e.preventDefault();
        const title=titleInput.value;
        const description=descriptionInput.value;
        //if title input or desctiption input was empty do not do any thing
        if(!title || !description) return;
        console.log(title,description)
        //save the new data in DB
        Storage.saveCategory({title,description});
        //get All data from DB
        this.categories=Storage.getAllCategories();
        this.createCategoriesList();
        console.log(this.categories)
        titleInput.value='';
        descriptionInput.value='';
    };
    //update the variable(this.categories) in costructor
    setApp(){
        this.categories=Storage.getAllCategories();
    };
    //make the option for product category in product section
    createCategoriesList(){
        let result=`<option value="" class="bg-slate-800">All</option>`;
        this.categories.forEach((item)=>{
            result+=`<option value=${item.id} class="bg-slate-800">${item.title}</option>`
        });  
        categoryDom.innerHTML=result;
    }
};
export default new CategoryView();