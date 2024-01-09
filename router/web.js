const express = require("express");
const productController = require('../controller/productController');
const melter = require("multer");
const uploads = melter({dest :"uploads/"})

const router = express.Router();
router.get("/", productController.getList);
router.get("/api", productController.getListApi);
router.get("/add", productController.getFromAdd);
router.post("/add", uploads.single("anh"), productController.postAdd);
router.post("/add/api", uploads.single("anh"), productController.postAddApi);
router.get("/edit/:id", productController.getFromEdit);
router.post("/edit/:id", uploads.single("anh"), productController.postEdit);
router.post("/edit/api/:id",uploads.single("anh"), productController.postEditApi);
router.get("/delete/:id", productController.delete);
router.get("/delete/api/:id", productController.deleteApi);
router.post("/search", productController.search);
router.post("/search/api", productController.searchApi);
router.get("/chitiet/:id", productController.getChiTiet);
module.exports = router;

