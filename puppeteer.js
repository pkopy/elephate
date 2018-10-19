const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000


const puppeteer = require('puppeteer');
const sites = [
  'http://wpengine.com', 
  "http://angular.io", 
  "http://youtube.com", 
  "http://onet.pl", 
  "http://nytimes.com", 
  "http://wp.pl"
]
let data = [];
let len = {a: data.length};
 let count =0;


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  data = [];

  (async () => {
    
    for (let site of sites) {
      const browser = await puppeteer.launch()
      const page = await browser.newPage();
      
      const reg = /\./g
      reg.test(site)
      let name = site.slice(7, reg.lastIndex - 1)

      await page.setJavaScriptEnabled(true)
      obj = {}
      obj.name = name;
      obj.site = site;
      await page.goto(site, {
        timeout: 50000
      }).catch(err => console.log(err))
      await page.$$eval('a', divs => divs.length).then(x => obj.numb = x);
      await page.$$eval('a', el => el.map(n => n.href)).then(x => obj.href = x)
      await page.screenshot({
        path: `public/${name}${count}_with_JS.png`
      });
      obj.imgSrc = `http://localhost:3000/${name}${count}_with_JS.png`

      await page.setJavaScriptEnabled(false)
      await page.goto(site, {
        timeout: 50000
      })
      await page.$$eval('a', divs => divs.length).then(x => obj.numbWithoutJS = x);
      await page.$$eval('a', el => el.map(n => n.href)).then(x => obj.hrefWithoutJS = x)
      await page.screenshot({
        path: `public/${name}${count}_without_JS.png`
      });
      obj.imgSrcWithoutJS = `http://localhost:3000/${name}${count}_without_JS.png`
      data.push(obj)
      await browser.close();

    }
    count++
  })()
  .then(() => JSON.stringify(data)).then(data => {
    res.send(data)
  })
  
})

app.get('/count', (req, res) => {
   res.send(JSON.stringify(data.length))
}
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))