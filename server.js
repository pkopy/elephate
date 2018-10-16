const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const url = require('url')
// const test = require('./example')
// console.log(test.get())
// let x = test.get()
// x.then(res => res)
// const x = test.test()

const puppeteer = require('puppeteer');

const data = {
  // enableJS:'false',
  numb:'',
  href:[],
  imgSrc:''
};



app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
    (async () => {
        const browser  = await puppeteer.launch()
        //   {
        //   ignoreHTTPSErrors: true,
        //   args: ['--disable-setuid-sandbox', '--no-sandbox']
        // })
        let test = url.parse(req.url, true).query
        
        const page = await browser.newPage();
        test.mama === 'true'?await page.setJavaScriptEnabled(true):await page.setJavaScriptEnabled(false)
        
        // await page.setRequestInterceptionEnabled(true)
        
        // page.on('request', intercepted => intercepted.continue())
      
        await page.goto('http://youtube.com', {waitUntil: 'networkidle0'})
        await page.$$eval('a', divs => divs.length).then((x)=> data.numb = x);
        await page.$$eval('a', el => el.map(n => n.href)).then(x => data.href = x)

        // console.log(divs)
        
        // console.log(divs)
        console.log('page load DONE')
        if(test.mama === 'true') {
          await page.screenshot({path: 'public/example_with_JS.png'});
          data.imgSrc = 'http://localhost:3000/example_with_JS.png'
        }else {
          await page.screenshot({path: 'public/example_without_JS.png'});
          data.imgSrc = 'http://localhost:3000/example_without_JS.png'
        }
        await browser.close();
        
      })().then(() => JSON.stringify(data)).then(data => {
          
        res.send(data)});
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))