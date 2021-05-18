const express = require('express');
const router = express.Router();
const Clients = require('../modules/clients');


router.get('/check', function (req, res) {
    res.send('okkkkkkkkkkkkk')
})


router.post("/sendQuery", async (req, res) => {
try {
    var uservalue = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message,

    };
    console.log(uservalue);

    let client = new Clients(uservalue);
    
    client.save().then(data =>{
        res.json({statusCode : 200 ,  message : "Query Sent Successfully !!!" });
    })
    // Clients.create(uservalue, (error, User) => {
    //     if (error) {

    //     } else {
    //     }
    // });

    
} catch (error) {
    res.json({statusCode : 400 ,  message : 'Something Went Wrong' , error : error})
}
    
});


router.get("/getAllQuery", async (req, res) => {

    let allData = await Clients.find({}).lean().sort({'createdAt' : -1})
            if (!allData) {
            throw new Error('Something Went Wrong')

        } else {
            res.json({ data : allData ,  message : "Query Fetched Successfully !!!" });
        }

    });




module.exports = router;
