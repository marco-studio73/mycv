const { getAllExperiences, postExperience, deleteExperience, updateExperience, getExperience } = require('../queries/experiences.queries');

exports.experiencesList = async (req, res, next) => {
  try {
    const experiences = await getAllExperiences();
    res.json({ experiences });
  } catch(e) {
    next(e);
  }
}

exports.experiencePost = async (req, res, next) => {
  try {
    const body = req.body;
    await postExperience(body);
    const experiences = await getAllExperiences()
    res.send(experiences);
  } catch(e) {
    next(e)
  }
}

exports.experienceDelete = async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId;
    await deleteExperience(experienceId);
    const experiences = await getAllExperiences();
    res.send({ experiences });
  } catch(e) {
    next(e);
  }
}

exports.experienceEdit = async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId;
    const experience = await getExperience(experienceId);
    res.json(experience);
    
  } catch (e) {
    next(e);
  }
}

exports.experienceUpdate = async (req, res, next) => {

  const experienceId = req.params.experienceId;

  try {

    const body = req.body;
    await updateExperience(experienceId, body);
    res.redirect('/experiences')
    
  } catch (e) {

    next(e);
    
  }
}