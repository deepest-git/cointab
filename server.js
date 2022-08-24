const express = require('express');
const http = require('http');
var cors = require('cors');
const app = express(); 
const server = http.createServer(app);
const userRoute = require('./routes/user');
// const init = require('./init');
const process = require('process');

// try{
// init.init_db();
// }catch(err){
//     console.log(err.message)
// };
// app.use(cors({
//     origin:'*'
// }))

app.use(express.json());
app.use(express.static('./'));
app.get('/', (req, res) => res.sendFile('view/main.html',{root:'./'}));
app.use('/user',userRoute);

const port = process.env.PORT||3000;
server.listen(port, () => console.log(`Server running on port ${port}`));