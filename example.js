const puppeteer = require('puppeteer');

const data = {
  numb:''
};
const test = (async () => {
    const browser  = await puppeteer.launch()
    //   {
    //   ignoreHTTPSErrors: true,
    //   args: ['--disable-setuid-sandbox', '--no-sandbox']
    // })
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false)
    // await page.setRequestInterceptionEnabled(true)
    
    // page.on('request', intercepted => intercepted.continue())
  
    await page.goto('http://onet.pl', )
    const divsCounts = await page.$$eval('a', divs => divs.length).then((x)=> data.numb = x);
    // const divs = await page.$$eval('a', el => el.map(n => n))
    // console.log(divsCounts)
    
    // console.log(divs)
    console.log('page load DONE')
    await page.screenshot({path: 'example3.png'});
  
    await browser.close();
    
  })()
  // .then(() => JSON.stringify(data.numb)).then(data => console.log(data));
  
get = () => test;


module.exports = {
  get
}




