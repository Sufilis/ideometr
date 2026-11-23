let M="";
const MODE={blitz:j=>j%5==0,mid:j=>j%4<2,full:()=>true};
const A=[["Полностью согласен",2],["Скорее согласен",1],["Затрудняюсь",0],["Скорее не согласен",-1],["Категорически не согласен",-2]];
let Q=[],ans=[],i=0;
const $=id=>document.getElementById(id);
function show(v){["home","quiz","result","ideas"].forEach(x=>$(x).hidden=x!=v);if(v=="ideas"){list();track("view-ideas")}scrollTo(0,0)}
function start(m){M=m;track("start-"+m);Q=[];const f=MODE[m];for(let j=0;j<40;j++)if(f(j)){Q.push({t:E[j],a:"e",g:j%2?-1:1});Q.push({t:S[j],a:"s",g:j%2?-1:1})}
 // перемешиваем детерминированно, чтобы оси чередовались
 ans=[];i=0;show("quiz");ask()}
function ask(){const q=Q[i];$("cnt").textContent=`Вопрос ${i+1} из ${Q.length}`;$("prog").style.width=(i/Q.length*100)+"%";$("qt").textContent=q.t;
 $("ans").innerHTML="";A.forEach(([l,v])=>{const b=document.createElement("button");b.textContent=l;b.onclick=()=>{ans[i]=v;i++;i<Q.length?ask():finish()};$("ans").append(b)})}
function back(){if(i>0){i--;ask()}else show("home")}
function finish(){const t={e:0,s:0},n={e:0,s:0};Q.forEach((q,k)=>{t[q.a]+=ans[k]*q.g;n[q.a]+=2});
 const e=t.e/n.e,s=t.s/n.s;let best=null,bd=9;IDS.forEach(x=>{const d=Math.hypot(x.e-e*1.15,x.s-s*1.15);if(d<bd){bd=d;best=x}});
 const bs=BR[best.n];let br=bs[0],bb=9;bs.forEach(b=>{const d=Math.hypot(best.e+b[1]-e*1.15,best.s+b[2]-s*1.15);if(d<bb){bb=d;br=b}});
 const cx=100+e*90,cy=100-s*90,pct=v=>((v+1)/2*100).toFixed(0);
 $("result").innerHTML=`<h2>Твоя идеология: ${best.n}</h2><div class="res"><div>
 <p>${best.d}</p>
 <div class="card"><h3>Ответвление: ${br[0]}</h3><p>${br[4]}</p><p class="meta"><b>Известный человек:</b> ${br[3]}</p>${M=="blitz"?'<p class="meta">(Экспресс-тест не самый точный: ответвление могло определиться неверно. Пройдите «Стандарт» или «Глубокий анализ».)</p>':''}</div>
 <div class="card"><h3>Известный человек</h3><p>${best.p}</p></div>
 <div class="card"><h3>Страна или период</h3><p>${best.c}</p></div>
 <div class="ad">${box(ADS.result,"Реклама")}</div>
 <div class="ax"><div class="t"><span>Экономика: государство</span><span>рынок</span></div><div class="b"><i style="left:${pct(e)}%"></i></div></div>
 <div class="ax"><div class="t"><span>Власть: свобода личности</span><span>порядок и контроль</span></div><div class="b"><i style="left:${pct(s)}%"></i></div></div>
 </div><svg viewBox="0 0 200 200"><rect x="5" y="5" width="190" height="190" rx="12" fill="none" stroke="currentColor" opacity=".25" stroke-width="2"/><path d="M100 5v190M5 100h190" stroke="currentColor" opacity=".25" stroke-width="2"/><text x="12" y="20" font-size="9" fill="currentColor" opacity=".6">авторитаризм</text><text x="12" y="192" font-size="9" fill="currentColor" opacity=".6">свобода</text><circle cx="${cx}" cy="${cy}" r="9" fill="var(--acc)"/></svg></div>
 <div class="row"><button class="btn" onclick="show('home')">Пройти ещё раз</button><button class="btn ghost" onclick="show('ideas')">Все идеологии</button></div>`;
 show("result");track("done-"+M);inline(ADS.result);fullscreen()}
function list(){$("list").innerHTML=IDS.map((x,k)=>`<div class="card"><h3>${x.n}</h3><p>${x.d}</p><p class="meta"><b>Люди:</b> ${x.p}<br><b>Страны:</b> ${x.c}</p>${BR[x.n].map(b=>`<div class="sub"><h4>${b[0]}</h4><p>${b[4]}</p><p class="meta"><b>Человек:</b> ${b[3]}</p></div>`).join("")}</div>`+(k==5?`<div class="ad">${box(ADS.ideas,"Реклама")}</div>`:"")).join("");inline(ADS.ideas)}
