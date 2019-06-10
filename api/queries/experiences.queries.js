const Experiences = require('../database/models/experiences.model');

exports.getAllExperiences = () => {
  return Experiences.find({}).sort({endDate: 'desc'}).exec();
}

exports.postExperience = (experience) => {
  const newExperience = new Experiences(experience);
  return newExperience.save();
}

exports.deleteExperience = (experienceId) => {
  return Experiences.findByIdAndDelete(experienceId).exec();
}

exports.updateExperience = (experienceId, experience) => {
  return Experiences.findByIdAndUpdate(experienceId, {$set: experience });
}

exports.getExperience = (experienceId) => {
  return Experiences.findOne({ _id: experienceId }).exec();
}
