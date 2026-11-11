const assert=require('node:assert/strict'),{pathToFileURL}=require('node:url'),path=require('node:path'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const url=process.argv[2]||pathToFileURL(path.resolve('index.html')).href;
const sizes=[[320,568],[390,844],[430,932],[667,375],[844,390],[768,1024],[1024,768],[1280,720],[1920,1080]];
(async()=>{const browser=await chromium.launch({channel:'chrome'});try{
 for(const [width,height] of sizes){
  const ctx=await browser.newContext({viewport:{width,height},hasTouch:width<=1024,isMobile:width<900,reducedMotion:'reduce'});
  try{const page=await ctx.newPage();page.setDefaultTimeout(5000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(url);
  const touch=width<=1024, press=s=>touch?page.locator(s).tap():page.locator(s).click();
  const fit=async s=>{const box=await page.locator(s).boundingBox();assert(box&&box.x>=-1&&box.y>=-1&&box.x+box.width<=width+1&&box.y+box.height<=height+1,s+' clips at '+width+'×'+height+': '+JSON.stringify(box));return box};
  await fit('#start');await press('#start');await page.waitForFunction(()=>state==='ready');
  // Render the longest tray using the same gameplay route.
  await page.evaluate(()=>load(10,9));await page.waitForFunction(()=>state==='ready');
  for(const s of ['#tray','#gift','.even','.odd','#hint'])await fit(s);
  assert.equal(await page.locator('#tray .item').count(),10);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width);
  if(process.env.SCREENSHOTS&&[390,844,768,1280].includes(width)){fs.mkdirSync('outputs/responsive',{recursive:true});await page.screenshot({path:'outputs/responsive/'+width+'x'+height+'.png',animations:'disabled'})}
  await press('#hint');await fit('#back');await press('#back');
  await press('#gift');await press('.odd');await page.waitForFunction(()=>state==='ready');
  const a=await fit('#gift'),b=await fit('.even');const x=a.x+a.width/2,y=a.y+a.height/2,u=b.x+b.width/2,v=b.y+b.height/2;
  if(touch){const cdp=await ctx.newCDPSession(page);for(const [type,touchPoints] of [['touchStart',[{x,y}]],['touchMove',[{x:(x+u)/2,y:(y+v)/2}]],['touchMove',[{x:u,y:v}]],['touchEnd',[]]])await cdp.send('Input.dispatchTouchEvent',{type,touchPoints})}
  else{await page.mouse.move(x,y);await page.mouse.down();await page.mouse.move(u,v,{steps:6});await page.mouse.up()}
  await page.waitForFunction(()=>state==='result');await fit('#next');assert.match(await page.locator('#message').innerText(),/5 đôi.+SỐ CHẴN/);assert.deepEqual(errors,[]);
  console.log(JSON.stringify({width,height,touch,complete:true}));
  }finally{await ctx.close()}
 }
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
