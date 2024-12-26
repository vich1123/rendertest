const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    jobPostings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
});

module.exports = mongoose.model('Company', companySchema);
