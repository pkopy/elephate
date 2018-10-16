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


}



app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  (async () => {
    const browser = await puppeteer.launch()
    //   {
    //   ignoreHTTPSErrors: true,
    //   args: ['--disable-setuid-sandbox', '--no-sandbox']
    // })
    let test = url.parse(req.url, true).query

    const page = await browser.newPage();
    // test.mama === 'true'?await page.setJavaScriptEnabled(true):await page.setJavaScriptEnabled(false)

    // await page.setRequestInterceptionEnabled(true)

    const reg = /\./g
    reg.test(test.site)
    let name = test.site.slice(7, reg.lastIndex - 1)


    // page.on('request', intercepted => intercepted.continue())
    await page.setJavaScriptEnabled(true)
    data[name] = {}
    await page.goto(test.site, {
      waitUntil: 'networkidle0'
    })
    await page.$$eval('a', divs => divs.length).then((x) => data[name].numb = x);
    await page.$$eval('a', el => el.map(n => n.href)).then(x => data[name].href = x)
    await page.screenshot({
      path: `public/${name}_with_JS.png`
    });
    data[name].imgSrc = `http://localhost:3000/${name}_with_JS.png`

    await page.setJavaScriptEnabled(false)
    await page.goto(test.site, {
      waitUntil: 'networkidle0'
    })
    await page.$$eval('a', divs => divs.length).then((x) => data[name].numbWithoutJS = x);
    await page.$$eval('a', el => el.map(n => n.href)).then(x => data[name].hrefWithoutJS = x)
    await page.screenshot({
      path: `public/${name}_without_JS.png`
    });
    data[name].imgSrcWithoutJS = `http://localhost:3000/${name}_without_JS.png`


    // console.log(divs)

    // console.log(divs)
    console.log('page load DONE')
    // if(test.mama === 'true') {
    //   await page.screenshot({path: 'public/example_with_JS.png'});
    //   data.imgSrc = 'http://localhost:3000/example_with_JS.png'
    // }else {
    //   await page.screenshot({path: 'public/example_without_JS.png'});
    //   data.imgSrc = 'http://localhost:3000/example_without_JS.png'
    // }
    await browser.close();

  })().then(() => JSON.stringify(data)).then(data => {

    res.send(data)
  });

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))