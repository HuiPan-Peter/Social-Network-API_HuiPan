const router = require('express').Router();
const {
  getAll,
  getOne,
  create,
  createReaction,
  update,
  deleteOne,
  deleteReaction
} = require('../../controllers/thoughtController');


// /api/thoughts GET all and POST thought
router.route('/').get(getAll).post(create);

// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by Id
router.route('/:thoughtId').get(getOne).put(update).delete(deleteOne);

//  /api/thoughts/:thoughtId/reactions POST new reactions
router.route('/:thoughtId/reactions').post(createReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;
