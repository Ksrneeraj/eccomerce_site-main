const express = require("express");
const router = express.Router();
const {
  getList,
  getLists,
  updateList,
  deleteList,
  createList,
  filter
} = require("../controllers/productlist_women");

router.route("/").get(filter);
router.route("/:id").put(updateList);
router.route("/:id").get(getList);
router.route("/:id").delete(deleteList);
router.route("/").post(createList);

module.exports = router;
