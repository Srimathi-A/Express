var express = require("express");
var cookieParser=require("cookie-parser");
var app = express();

app.use(cookieParser())

app.get('/cookieset',function(req,res){
    res.cookie('cookie-name','cookie-value');
    res.cookie('company','imarticus')
    res.cookie('name','srimathi')
    res.status(200).send('cookie is set')
})

app.get('/cookieget',function(req,res){
    res.status(200).send(req.cookies)
})

app.get('/',function(req,res){
    res.status(200).send('Welcome to  Imarticus learning')
})
app.listen(8000);

/*var server = app.listen(8000,function(){
    var host=server.address().address;
    var port = server.address().port;
    console.llog(' Example App is listening at http://%s:%s',host,port)
})
*/

