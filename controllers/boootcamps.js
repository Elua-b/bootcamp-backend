exports.getBootcamps=(req,res,next)=>{
    res.status(200).json({success:true,
        msg:'show all bootcamps'});
}
exports.getBootcamp=(req,res,get)=>{
    res.status(200).json({success:true,
        msg:`show bootcamp ${req.params.id}`})
}
exports.createBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,
        msg:'create new bootcamp'});
}
exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,
        msg:`update new bootcamp ${req.params.id}`});
}
exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,
        msg:`delete new bootcamp ${req.params.id}`});
}