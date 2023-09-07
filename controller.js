// const arr=[{name:"Athira"},{name:"Athira"},{name:"Athira"},{name:"Athira"},{name:"Athira"}];
import schema from './user.module.js'
let user=[];

export async function displayUser(req,res){
    // return res.status(200).send(user);
    const data=await schema.find();
    console.log(data);
    res.status(200).send(data);
}

export  function addUser(req,res){
    // console.log(req.body);
    //  user.push(req.body);
    // res.end();
    let{date,name}=req.body;
    schema.create({date,name});
    res.end();
}


export  function deleteUser(req,res){
    try{
       console.log("data"+req.params.name);
     const name=req.params.name;
     schema.deleteOne({name:name}).then(()=>{console.log("success");}).catch((error)=>{console.log(error) });
    // res.status(200).send("successfully deleted")
    // user.forEach((data)=>{
    //     if(dateID===data.id){
    //         user.splice(user.indexOf(data.id),1)
    //     }
         return res.status(200).send("successfully deleted");
    }catch(error){
        console.log(error);
    }
}



