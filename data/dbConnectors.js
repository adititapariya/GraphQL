import mongoose from "mongoose";

async function connectMongo(){
    try{
        await mongoose.connect('mongodb://localhost/widgets');
        console.log('Connected to MongoDB');
    } catch(error){
        console.log('Error connecting to MongoDB: ', error);
    }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    inventory: String,
    stores: Array,
});

const Widgets = mongoose.model('widgets', widgetSchema);

export {Widgets};

// With SQL 


// import mongoose from "mongoose";
// import {Sequelize , DataTypes} from "sequelize";
// import _ from 'lodash';
// import casual from 'casual';

// async function connectMongo(){
//     try{
//         await mongoose.connect('mongodb://localhost/widgets');
//         console.log('Connected to MongoDB');
//     } catch(error){
//         console.log('Error connecting to MongoDB: ', error);
//     }
// }

// connectMongo();

// const widgetSchema = new mongoose.Schema({
//     name: String,
//     description: String,
//     price: Number,
//     soldout: String,
//     inventory: String,
//     stores: Array,
// });

// const Widgets = mongoose.model('widgets', widgetSchema);

// const sequelize = new Sequelize('sqlite::memory:');

// const Categories= sequelize.define('categories',{
//     category: DataTypes.STRING,
//     description: DataTypes.STRING,
// })

// async function syncAndSeedCategories(){
//     try{
//         await sequelize.sync({force: true});
//         console.log('SQLite connection established and Categories model synced');

//         //Sees categories
//         await Promise.all(_.times(5, ()=>{
//             return Categories.create({
//                 category: casual.word, 
//                 description: casual.sentence,
//             });
//         }));
//         console.log('Categories seeded');
//     } catch(error) {
//         console.log('Error with SQLite DB:', error);
//     }
// }

// syncAndSeedCategories();


// export {Widgets, Categories};