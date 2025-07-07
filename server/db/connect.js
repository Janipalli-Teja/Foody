const mongoose =require( "mongoose");

async function ConnectionDB(url) {
    return mongoose.connect(url);
};

module.exports= ConnectionDB;