const express = require('express');
const router  = express.Router(); 
const Alien   = require('../models/alien'); 

router.get('/', async(req,res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens);

    }catch(err){
        res.send('ERROR');
    }

});

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        if(alien)
            res.json(alien);
        else    
            res.send("No Record Found");
    }catch(err){
        res.send("ERROR");
    }
})


router.post('/', async(req, res) => {

try{
    const a1 = await new Alien({
        name: req.body.name,
        sub: req.body.sub,
        tech: req.body.tech
    }).save();

    res.send('Object saved!')
}catch(err){
    res.send('ERROR');
}
});


router.patch('/:id', async (req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub   = req.body.sub; 
        const a1    = await alien.save();
        res.json(a1); 

    }catch(err){
        // Not good way to handle this. 
        res.send('Whoops! Error!');
    }
})

module.exports = router;


