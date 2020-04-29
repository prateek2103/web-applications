const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const {exec}=require('child_process');

//middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
	res.json('hello');
})


app.get('/search',function(req,res){
	statement='python3 dialogue_finder.py '+'"'+ req.query.name+'"'
	console.log(statement)
	exec(statement,function(stderr,stdout){
		if(stderr){
			res.json(stderr)
			}
		else{
			stdout_new=stdout.split('\n')
			res.json(stdout_new.slice(0,stdout_new.length-1))
		}
})
})

app.listen(8000,function(){
console.log('connected');
})
