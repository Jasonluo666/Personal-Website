var express = require('express');
var router = express.Router();

const MODEL_URL = '/models'

router.get('/tasks', function(req, res, next){
    res.render("tasks.html");
});

router.get('/face_cognitive', async function(req, res, next){
    // res.render("tasks.html");

    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
});

module.exports = router;