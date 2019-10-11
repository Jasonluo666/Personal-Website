var express = require('express');
var router = express.Router();
const request = require('request');


router.get('/tasks', function(req, res, next){
    res.render("tasks.html");
});

router.get('/face_cognitive/*', async function(req, res, next){
    const subscriptionKey = 'a0871fb4dcac41d08f693d18af920cb8';
    const uriBase = 'https://faceapiformean.cognitiveservices.azure.com/face/v1.0/detect';
    const imageUrl = req.params[0];

    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
            'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };

    request.post(options, (error, response, body) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
    
    res.end(JSON.stringify(jsonResponse, null, 3));
    });
});

module.exports = router;