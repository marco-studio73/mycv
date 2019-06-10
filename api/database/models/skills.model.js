const mongoose = require('mongoose');
const schema = mongoose.Schema;

const skillSchema = schema({
  title: String,
  content: String,
  value: Number,
  mode: String
});

const Skills = mongoose.model('skills', skillSchema);

module.exports = Skills;