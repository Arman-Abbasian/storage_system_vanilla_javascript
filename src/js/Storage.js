const categories=[
    {id:1,title:"reactJS",description:"daslfafafafg",createdAt:"2022-09-03T05:40:29.707Z"}
];
const products=[
    {id:1,title:"react paper",quantity:100,category:"reactJ",createdAt:"2022-09-03T05:40:29.707Z"}
]

export default class Storage{
    static getAllCategories(){
        //here we have two DB one for products and an other for the categories
        const savedCategories=JSON.parse(localStorage.getItem('category')) || [];
        const sortedCategories=savedCategories.sort((a,b)=>{
            return new Date(a.createdAt) > new Date(b.createdAt)? -1:1
        });
        return sortedCategories;
    };
    static saveCategory(categoryToSave){
        const savedCategories=Storage.getAllCategories();
        const existedItem=savedCategories.find(item=>item.id===categoryToSave.id);
        if(existedItem){
            existedItem.title=categoryToSave.title;
            existedItem.description=categoryToSave.description
        }else{
            categoryToSave.id=new Date().getTime();
            categoryToSave.createdAt=new Date().toISOString();
            savedCategories.push(categoryToSave)
        }
        localStorage.setItem("category",JSON.stringify(savedCategories))
    };
    static getAllProducts(){
        //here we have two DB one for products and an other for the categories
        const savedProducts=JSON.parse(localStorage.getItem('products')) || [];
        const sortedProducts=savedProducts.sort((a,b)=>{
            return new Date(a.createdAt) > new Date(b.createdAt)? -1:1
        });
        return sortedProducts;
    };
    static savedProducts(productToSave){
        const savedProducts=Storage.getAllProducts();
        const existedItem=savedProducts.find(item=>item.id===productToSave.id);
        if(existedItem){
            existedItem.title=productToSave.title;
            existedItem.quentity=productToSave.quentity
            existedItem.category=productToSave.category;
        }else{
            productToSave.id=new Date().getTime();
            productToSave.createdAt=new Date().toISOString();
            savedProducts.push(productToSave)
        }
        localStorage.setItem("category",JSON.stringify(savedProducts))
    }








}