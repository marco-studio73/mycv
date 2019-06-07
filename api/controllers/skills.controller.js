const { getSkills, postSkill, deleteSkill, updateSkill, getSkill } = require('../queries/skills.queries');

exports.skillsList = async (req, res, next) => {
  try {
    const skills = await getSkills();
    res.json({ skills });
  } catch(e) {
    next(e);
  }
}

exports.skillPost = async (req, res, next) => {
  try {
    const body = req.body;
    await postSkill(body);
    const skills = await getSkills()
    res.send(skills);
  } catch(e) {
    next(e)
  }
}

exports.skillDelete = async (req, res, next) => {
  try {
    const skillId = req.params.skillId;
    await deleteSkill(skillId);
    const skills = await getSkills();
    res.send({ skills });
  } catch(e) {
    next(e);
  }
}

exports.skillEdit = async (req, res, next) => {
  try {
    const skillId = req.params.skillId;
    const skill = await getSkill(skillId);
    res.json(skill);
    
  } catch (e) {
    next(e);
  }
}

exports.skillUpdate = async (req, res, next) => {

  const skillId = req.params.skillId;

  try {

    const body = req.body;
    await updateSkill(skillId, body);
    res.redirect('/skills')
    
  } catch (e) {

    next(e);
    
  }
}