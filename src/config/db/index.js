const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/database_f8', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("thanh cong")
    } catch (error) {
        console.log("looi")
    }
}
module.exports = { connect }