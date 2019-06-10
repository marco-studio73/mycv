const router = require('express').Router();
const { experiencesList, experienceEdit, experiencePost, experienceUpdate, experienceDelete} = require('../controllers/experience.controller');

router.get('/', experiencesList);
router.get('/edit/:experienceId', experienceEdit )
router.post('/', experiencePost);
router.post('/update/:experienceId', experienceUpdate);
router.delete('/:experienceId', experienceDelete);

module.exports = router;