const router = require('express').Router();
const {
  getAll,
  getOne,
  create,
  createFriend,
  update,
  deleteOne,
  deleteFriend
} = require('../../controllers/userController');


// /api/users GET all and POST 
router.route('/').get(getAll).post(create);

// /api/users/:userId GET one user, PUT and DELETE by user's ID
router.route('/:userId').get(getOne).put(update).delete(deleteOne);

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;
