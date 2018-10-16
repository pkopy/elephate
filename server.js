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
const sites = ['http://wpengine.com', 
  "http://angular.io", 
  "http://youtube.com", 
  "http://onet.pl", 
  "http://nytimes.com", 
  "http://wp.pl"]
let data = []
// const sites = ['http://wpengine.com']
// 


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  data = [];
  (async () => {
    
    for (let site of sites) {
      const browser = await puppeteer.launch()
      //   {
      //   ignoreHTTPSErrors: true,
      //   args: ['--disable-setuid-sandbox', '--no-sandbox']
      // })
      let test = url.parse(req.url, true).query



      const page = await browser.newPage();
      const reg = /\./g
      reg.test(site)
      let name = site.slice(7, reg.lastIndex - 1)

      
      await page.setJavaScriptEnabled(true)
      obj = {}
      obj.name = name;
      await page.goto(site, {
        timeout: 50000
      }).catch(err => console.log(err))
      await page.$$eval('a', divs => divs.length).then(x => obj.numb = x);
      await page.$$eval('a', el => el.map(n => n.href)).then(x => obj.href = x)
      await page.screenshot({
        path: `public/${name}_with_JS.png`
      });
      obj.imgSrc = `http://localhost:3000/${name}_with_JS.png`

      await page.setJavaScriptEnabled(false)
      await page.goto(site, {
        timeout: 50000
      })
      await page.$$eval('a', divs => divs.length).then(x => obj.numbWithoutJS = x);
      await page.$$eval('a', el => el.map(n => n.href)).then(x => obj.hrefWithoutJS = x)
      await page.screenshot({
        path: `public/${name}_without_JS.png`
      });
      obj.imgSrcWithoutJS = `http://localhost:3000/${name}_without_JS.png`
      data.push(obj)
      await browser.close();

    }
    // console.log(data)

  })()
  .then(() => JSON.stringify(data)).then(data => {

    res.send(data)
  })
  // .catch(err => console.log(err));
  
})

app.get('/test', (req, res) => {
  let xx = JSON.stringify(data);
  res.send(xx)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))