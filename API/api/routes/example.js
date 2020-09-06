
const express = require('express');
const router = express.Router(); 

//middleware
const checkAuth = require('../middleware/check-auth');

//For Files and Images
const multer = require('multer');
const storageConf = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {

        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniquePrefix + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    //reject File
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('File not found'), false);
    }
}

const upload = multer({
    storage: storageConf,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: fileFilter
});



router.get('/', (req,res,next)=>{
    return res.status(200).json(
        //JSON Data
    )
});

router.get('/', checkAuth, (req,res,next)=>{
    return res.status(200).json(
        //JSON Data
    )
});


router.get('/', checkAuth, upload.single('Image_Field_Name'), (req,res,next)=>{
    return res.status(200).json(
        //JSON Data
    )
});



module.exports = router;