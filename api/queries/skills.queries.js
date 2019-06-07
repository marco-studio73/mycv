const Skill = require('../database/models/skills.model');

exports.getSkills = () => {
  console.log('find skill');
  return Skill.find({}).exec();
}

exports.postSkill = (skill) => {
  const newSkill = new Skill(skill);
  return newSkill.save();
}

exports.deleteSkill = (skillId) => {
  return Skill.findByIdAndDelete(skillId).exec();
}

exports.updateSkill = (skillId, skill) => {
  return Skill.findByIdAndUpdate(skillId, {$set: skill });
}

exports.getSkill = (skillId) => {
  return Skill.findOne({ _id: skillId }).exec();
} 