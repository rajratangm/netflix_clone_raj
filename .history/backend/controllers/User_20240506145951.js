const Register = asyc(req,res)=>{
    try{
        const {fullName, email, password}=req.body;
        if(!fullName||!email||!password){
            return res.status(401)/json({
                message: 'Invalid data- something is missing',
                succ
            })
        }

    }catch(error){
        console.log(error)

    }
}