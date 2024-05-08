const Register = asyc(req,res)=>{
    try{
        const {fullName, email, password}=req.body;
        if(!fullName||!email||!password){
            
        }

    }catch(error){
        console.log(error)

    }
}