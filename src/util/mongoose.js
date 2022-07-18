module.exports = {
    //hàm xử lý một list
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    //hàm xử lý một đối tượng

    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}