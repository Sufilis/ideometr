// === Реклама Яндекса (РСЯ) ===
// 1) Зарегистрируйтесь на partner.yandex.ru и добавьте сайт.
// 2) В кабинете создайте 4 блока и скопируйте их ID вида "R-A-1234567-1" (у каждого блока свой ID).
// 3) Вставьте ID ниже. Пустая строка = блок выключен. Пока все пустые, скрипт Яндекса даже не загружается.
const ADS={
  floor:"",       // нижний плавающий баннер (формат «Плавающий баннер», type floorAd)
  fullscreen:"",  // полноэкранная реклама после результата (формат «Полноэкранный»)
  result:"",      // блок в карточке результата (адаптивный баннер)
  ideas:""        // блок на странице идеологий (адаптивный баннер)
};
const plat=()=>matchMedia("(max-width:759px)").matches?"touch":"desktop";
function yaRender(o){window.yaContextCb.push(()=>{try{Ya.Context.AdvManager.render(o)}catch(e){}})}
const box=(id,label)=>id?`<div id="yandex_rtb_${id}"></div>`:`<div class="ph">${label}</div>`;
const inline=id=>{if(id)yaRender({blockId:id,renderTo:"yandex_rtb_"+id})};
const fullscreen=()=>{if(ADS.fullscreen)yaRender({blockId:ADS.fullscreen,type:"fullscreen",platform:plat()})};
if(Object.values(ADS).some(Boolean)){
  window.yaContextCb=window.yaContextCb||[];
  const s=document.createElement("script");s.src="https://yandex.ru/ads/system/context.js";s.async=true;document.head.append(s);
  if(ADS.floor)yaRender({blockId:ADS.floor,type:"floorAd",platform:plat()});
}
