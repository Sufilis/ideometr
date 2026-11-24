// === Статистика посещений ===
// Выберите ОДИН вариант и впишите значение. Пустая строка = счётчик выключен и ничего не загружается.
const STATS={
  goatcounter:"https://yusuf-olimov.goatcounter.com/count", // имя сайта: для https://mysite.goatcounter.com впишите "mysite" (без cookies)
  metrika:""      // номер счётчика Яндекс Метрики, например "12345678" (использует cookies)
};
function track(name){ // отдельные события: старт и завершение тестов, просмотр страницы идеологий
  try{
    if(STATS.goatcounter&&window.goatcounter&&goatcounter.count)goatcounter.count({path:name,title:name,event:true});
    if(STATS.metrika&&window.ym)ym(+STATS.metrika,"reachGoal",name);
  }catch(e){}
}
if(STATS.goatcounter){
  const s=document.createElement("script");s.async=true;
  s.dataset.goatcounter=`https://${STATS.goatcounter}.goatcounter.com/count`;
  s.src="//gc.zgo.at/count.js";document.head.append(s);
}
if(STATS.metrika){
  window.ym=window.ym||function(){(ym.a=ym.a||[]).push(arguments)};ym.l=+new Date();
  const s=document.createElement("script");s.async=true;s.src="https://mc.yandex.ru/metrika/tag.js";document.head.append(s);
  ym(+STATS.metrika,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});
}
