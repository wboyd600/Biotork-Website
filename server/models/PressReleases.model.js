/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var PressSchema = new Schema({
    title:{type: String, required: true}, //headline of special deal
    text: String, //more detailed information about special, including vendor
    createdDate: Date,
    updatedDate: Date
});

/* create a 'pre' function that adds the updatedDate (and createdDate if not already there) property */
PressSchema.pre('save', function(next) {
    this.updatedDate = new Date;
    if(!this.createdDate)
    {
        this.createdDate = new Date;
    }
    next();
});

/* Use your schema to instantiate a Mongoose model */
var PressReleases = mongoose.model('PressReleases', PressSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = PressReleases;