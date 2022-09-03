export default class Storage{
    static getAllCategories(){
        //here we have two DB one for products and an other for the categories
        const savedCategories=JSON.parse(localStorage.getItem('category')) || [];
        const sortedCategories=savedCategories.sort((a,b)=>{
            return new Date(a.createdAt) > new Date(b.createdAt)? -1:1
        });
        return sortedCategories;
    };
    static saveCategories(categoryToSave){
        const savedCategories=Storage.getAllCategories();
    }








}