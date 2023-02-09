// const fs = require('fs');
// const http = require('http');

// const halamanHTML = (path, res) => {
//     fs.readFile(path, (err,data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error : page not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
// }

// http.createServer((req,res) => {
//     const url = req.url;
//     console.log(url);
//     //200 adalah status code
//     res.writeHead(200, {
//         'Content-Type' : 'text/html',
//     });

//     if(url==='/about') {
//         halamanHTML('./about.html',res);    
//     } else if (url === '/contact') {
//         halamanHTML('./contact.html',res);
//     } else {
//         halamanHTML('./index.html',res);
//     }
// })
//     //3000 selalu dibarengi dengan url
//     .listen(3000,() => {
//         console.log('Server is listening on port 3000');
//     });

const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
//   res.send('Hello World!')

//dirname untuk memberitahu bahwa lokasi file ada di directory
res.sendFile('./index.html', {root:__dirname})
})

// app.get('/about', (req,res) => {
//     res.send('Ini tampilan about!')
// })

// app.get('/contact', (req,res) => {
//     res.send('Ini tampilan contact!')
// })

//untuk akses berdasarkan id
app.get('/product/:productId/category/:shoesId', (req,res) => {
    res.send(req.params);
})

//untuk akses tampilan 404 atau root
app.use('/',(req,res) => {
    res.status(404);
    res.send('PAGE NOT FOUND : 404');
})

//untuk menggunakan pada localhost dengan port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})