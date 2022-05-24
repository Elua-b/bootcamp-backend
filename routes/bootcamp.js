const express=require('express')
const router =express.Router()
const {getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcamps}=require('../controllers/boootcamps')
    router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp)
    // .post(createBootcamp);
    
    router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);


module.exports=router;
