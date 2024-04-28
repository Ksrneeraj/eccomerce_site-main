const express = require("express");
const router = express.Router();
const {
  getList,
  getLists,
  updateList,
  deleteList,
  createList,
  filter
} = require("../controllers/wishlist");

router.route("/").get(getList);
router.route("/:id").put(updateList);
router.route("/:id").get(getList);
router.route("/").delete(deleteList);
router.route("/").post(createList);

module.exports = router;
