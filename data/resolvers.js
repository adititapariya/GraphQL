import { Widgets } from "./dbConnectors";
// class Product {
//     constructor(id,{name,description,price,soldout,inventory,stores}){
//         this.id=id;
//         this.name= name;
//         this.description=description;
//         this.price=price;
//         this.soldout=soldout;
//         this.inventory= inventory;
//         this.stores=stores;
//     }
// }

// const productDatabase={};

const resolvers={
    // getProduct: ({id}) => {
    //     return new Product(id,productDatabase[id]);
    // },
    getProduct: async({id}) => {
        try{
            const product = await Widgets.findById(id);
            return product;
        }catch(error){
            throw new Error(error);
        }
    },
    getAllProducts: async () => {
        try{
            return await Widgets.find({});
        } catch(error){
            throw new Error (error);
        }
    },
    // createProduct: ({input}) => {
        // let id= require('crypto').randomBytes(10).toString('hex');
        // productDatabase[id]=input;
        // return new Product(id, input);
    createProduct: async ({input}) => {
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        });

        newWidget.id=newWidget._id;

        try{
            await newWidget.save(); 
            return newWidget;
        } catch(error){
            throw new Error(error);
        }
    },
    updateProduct: async({input}) => {
        try{
            const updateWidget = await Widgets.findOneAndUpdate({ _id: input.id}, input, {new : true});
            return updateWidget;
        } catch(error){
            throw new Error(error);
        }
    },
    deleteProduct: async({id}) => {
        try{
            await Widgets.deleteOne({_id: id});
            return 'Successfully Deleted Widget';
        } catch(error){
            throw new Error(error);
        }
    }
}

// const root ={
//     product: () => {
//         return {
//             "id": 2934567,
//             "name": "Widget",
//             "description": "Beautiful widget to use in garden",
//             "price": 234.56,
//             "soldout": false,
//             "stores": [
//                 {store: "Pasadena"},
//                 {store: "Los Angeles"}
//             ],
//         }   
//     },
// };

export default resolvers;
