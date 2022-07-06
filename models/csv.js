var mongoose  =  require('mongoose');

var csvSchema = new mongoose.Schema({
    name_of_candidate: "string",
    email: "string",
    mobiel_no: "string",
    date_of_birth: "string",
    work_exprience: "string",
    risume_title: "string",
    current_location: "string",
    postal_address: "string",
    current_mployer: "string",
    current_designation: "string",
    
});
module.exports = mongoose.model('studentsrecords',csvSchema);