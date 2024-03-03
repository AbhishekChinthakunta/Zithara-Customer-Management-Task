//fetch data from db to nodejs
const {Client} =require('pg')

const client=new Client(
    {
        host:"localhost",
        user:"postgres",
        port:5432,
        database:"zithara",
        password:"Abhi123"
    }
)

client.connect();

client.query(`Select * from employee`, (err,res)=>{
    if(!err){
        console.log(res);
    }
    else{
        console.log(err.message);
    }
    client.end;
    
})