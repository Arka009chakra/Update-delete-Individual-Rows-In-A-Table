const express= require('express')
const cors = require('cors')
const m = require("./mongodb")
const app = express();
app.use(express.json());
app.use(cors());



app.post('/get',async(req,res)=>{
    const x = await m.find();
    if(x)
    {
        res.send(x);
    }
})

app.post('/getdata/:cemail',async(req,res)=>{
    try {
        const cemail = req.params.cemail;
        const x1 = await m.findOne({ cemail: cemail });
        
        if (x1) {
            console.log(x1);
            res.send(x1);
        } else {
            res.status(404).send("Data not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

;app.post('/pop', async (req, res) => {
    const { cemail1, role } = req.body;
    console.log(req.body)
    try {
        const y = await m.findOne({ cemail: cemail1 });
        console.log(y);
        if (y) {
            await y.updateOne({ $set: { role }});
            res.json({ message: 'success' });
        } else {
            console.log('User not found');
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/delete/:cemail',async(req,res)=>{
    const d = req.params.cemail
    console.log(d);
    const data = await m.findOne({ cemail: d });
    if(data)
    {
        await data.deleteOne()
    }
})

app.listen(3100);