const mongoose = require('mongoose');
const schema = mongoose.Schema;

const experienceSchema = schema({
  title: String,
  poste: String,
  content: String,
  beginDate: Date,
  endDate: Date
});

const Experiences = mongoose.model('experiences', experienceSchema);

module.exports = Experiences;