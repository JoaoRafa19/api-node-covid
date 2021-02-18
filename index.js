const {format, subDays} = require('date-fns');
const { response } = require('express');
const express = require('express');
const app = express();
const api = require('./api/api');
const cors = require('cors');
const api2 = require('./api/api2');
const _firebase = require('./firebase/setData');


app.use(express.json());
app.use(cors());


app.listen(process.env.PORT ||3000, ()=>{
  console.log('servidor rodando');
});

app.get('/', (req,res)=>{
  return res.send({message:'ola mundo'});
});

app.get('/covid/lastsixmonth', async (req,res)=>{
  try{
    const date = format(subDays(new Date(), 180), 'yyyy-dd-MM');
    const today = format(new Date(), 'yyyy-dd-MM');
    const uri = `country/brazil?from=${date}T00:00:00Z&to=${today}T00:00:00Z`;
    const {data}= await api.get(uri);
    return res.send(data);
  }catch(e){
    res.send({erro:e.message});
  }
});

app.get('/covid/status', async (req,res)=>{
  try{
    const date = format(subDays(new Date(), 180), 'yyyy-dd-MM');
    const today = format(new Date(), 'yyyy-dd-MM');
    const uri = `total/country/brazil?from=${date}T00:00:00Z&to=${today}T00:00:00Z`;
    const {data}= await api.get(uri);
    return res.send(data);
  }catch(e){
    res.send({erro:e.message});
  }
});

app.get('/covid/lasttwoweaks', async (req,res)=>{
  
    try{const date = format(subDays(new Date(), 14), 'yyyy-dd-MM');
    const today = format(new Date(), 'yyyy-dd-MM');
    const uri = `country/brazil?from=${date}T00:00:00Z&to=${today}T00:00:00Z`
    const {data}= await api.get(uri);
    
    return res.send(data);

 }catch(e){
   return res.send({erro:e.message})
 }
});


app.get('/status/confirmed', async (req,res)=>{
  try{
    const date = format(subDays(new Date(), 180), 'yyyy-dd-MM');
    const today = format(new Date(), 'yyyy-dd-MM');
    const uri = `total/country/brazil/status/confirmed?from=${date}T00:00:00Z&to=${today}T00:00:00Z`;
    const {data}= await api.get(uri);
    return res.send(data);
  }catch(e){
    res.send({erro:e.message});
  }
});

app.get('/covid/timeline', async (req, res)=>{

  try{const url = 'api/timeline/BR';
  const data = await api2.get(url);
  return res.send(data.data);  }catch(e){
    return res.send({erro:e.message});
  }

})

app.get('/info', async (req,res)=>{
  
    res.send({
      "title":"Covid 19 Status API",
      "powered_by":"Python/Flask",
      "description":"API for get covid19 status",
      "owner":'João Pedro Rafael Santos Silva'
    });
  
});

app.post("/savemedia", (req, res)=>{
  _firebase.saveData(req.body, (err, data)=>{
    res.send(data);
  });
})
