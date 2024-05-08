const Register = asyc(req,res)=>{
    try{
        const {fullName, email, password}=req.body;
        if(!fullName||!email||!password){
            return res.status(401)/json({
                message: 'Invalid data- something is missing',
                success: false
            })
        } 
        const user = await USer.findOne({email});
        

    }catch(error){
        console.log(error)

    }
}