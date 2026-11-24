/* Big Ben Tivat — site script */
(function(){
'use strict';
var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- i18n ---------- */
var T = {
 en:{
  'chime.hint':'Tap the clock — Big Ben strikes the hour','chime.strike':'Strike {n} of {t}','chime.label':'Big Ben clock showing Tivat time {time}. Press to hear it strike the hour',
  skip:'Skip to menu','nav.about':'About','nav.menu':'Menu','nav.gallery':'Gallery','nav.contact':'Contact',reserve:'Reserve',openNav:'Open navigation',
  'hero.title':'Come hungry, leave happy!',
  'hero.sub':'Mediterranean restaurant & pizzeria right on the Seljanovo promenade in Tivat — two terraces facing the Bay of Kotor.',
  'hero.menu':'Open the menu','facts.hours':'Open every day 07:00 – 01:00','facts.sea':'Two terraces by the sea',
  'about.kicker':'Since 1991 · Seljanovo, Tivat','about.title':'A memory of one city, 2,300 km away',
  'about.p1':'<em>“Big Ben”</em> is a memory of a city: a student flat, the view from the window into a grey, misty morning and the chime of the great clock. That is where the idea was born — and the dream it started still goes on here, on the promenade in Tivat.',
  'about.p2':'It began as a café of just 30 m² with seven tables in the garden. Today it is a restaurant and pizzeria with two terraces and 200 seats, known for quick, careful service.',
  'about.p3':'Mediterranean dishes, wines of international quality and a light maestral breeze bringing the freshness of the sea.',
  'stats.since':'opened','stats.seats':'seats','stats.terraces':'terraces','about.tag':'Restaurant · Bar · Pizzeria',
  'menu.kicker':'Food & drinks','menu.title':'Menu','menu.lead':'From breakfast until noon to pizza, fish and grill late into the evening. Choose a section.',
  'menu.note':'Prices in euro (€).','menu.items':'items','menu.back':'All drinks','menu.sections':'sections',
  'stories.title':'Highlights','gal.kicker':'Atmosphere','gal.title':'Gallery',
  'contact.kicker':'Visit us','contact.title':'Book a table by the sea','contact.res':'Reservations','contact.addr':'Address',mne:'Montenegro',
  'contact.hours':'Opening hours','contact.daily':'Every day 07:00 – 01:00','contact.bf':'Breakfast until 12:00','contact.call':'Call to book','contact.route':'Get directions',
  'rev.text':'<b>3,200+ guest reviews</b> on Google Maps','rev.read':'Read reviews',foot:'Restaurant, bar & pizzeria since 1991'
 },
 ru:{
  'chime.hint':'Нажмите на часы — Биг-Бен пробьёт час','chime.strike':'Удар {n} из {t}','chime.label':'Часы Биг-Бена показывают время в Тивате, {time}. Нажмите, чтобы услышать бой',
  skip:'Перейти к меню','nav.about':'О нас','nav.menu':'Меню','nav.gallery':'Галерея','nav.contact':'Контакты',reserve:'Бронь',openNav:'Открыть навигацию',
  'hero.title':'Приходите голодными — уходите счастливыми!',
  'hero.sub':'Средиземноморский ресторан и пиццерия прямо на набережной Сельяново в Тивате — две террасы с видом на Боко-Которский залив.',
  'hero.menu':'Открыть меню','facts.hours':'Каждый день 07:00 – 01:00','facts.sea':'Две террасы у моря',
  'about.kicker':'С 1991 года · Сельяново, Тиват','about.title':'Память об одном городе за 2300 км отсюда',
  'about.p1':'<em>«Big Ben»</em> — это память о городе: студенческая квартира, вид из окна на серое туманное утро и бой больших часов. Там родилась идея, и мечта, с которой всё началось, живёт до сих пор — здесь, на набережной Тивата.',
  'about.p2':'Всё начиналось с кафе площадью 30 м² и семи столиков в саду. Сегодня это ресторан-пиццерия с двумя террасами на 200 мест, который знают за быстрое и внимательное обслуживание.',
  'about.p3':'Блюда средиземноморской кухни, вина международного уровня и лёгкий маэстрал, который приносит свежесть с моря.',
  'stats.since':'год открытия','stats.seats':'мест','stats.terraces':'террасы','about.tag':'Ресторан · Бар · Пиццерия',
  'menu.kicker':'Еда и напитки','menu.title':'Меню','menu.lead':'От завтраков до полудня до пиццы, рыбы и гриля до позднего вечера. Выберите раздел.',
  'menu.note':'Цены в евро (€).','menu.items':'позиций','menu.back':'Все напитки','menu.sections':'разделов',
  'stories.title':'Актуальное','gal.kicker':'Атмосфера','gal.title':'Галерея',
  'contact.kicker':'Ждём в гости','contact.title':'Забронируйте столик у моря','contact.res':'Бронирование','contact.addr':'Адрес',mne:'Черногория',
  'contact.hours':'Часы работы','contact.daily':'Каждый день 07:00 – 01:00','contact.bf':'Завтраки до 12:00','contact.call':'Позвонить','contact.route':'Проложить маршрут',
  'rev.text':'<b>Более 3200 отзывов гостей</b> в Google Картах','rev.read':'Читать отзывы',foot:'Ресторан, бар и пиццерия с 1991 года'
 },
 me:{
  'chime.hint':'Dodirnite sat — Big Ben otkucava puni sat','chime.strike':'Udarac {n} od {t}','chime.label':'Sat Big Bena pokazuje vrijeme u Tivtu, {time}. Pritisnite da čujete otkucaje',
  skip:'Preskoči na meni','nav.about':'O nama','nav.menu':'Meni','nav.gallery':'Galerija','nav.contact':'Kontakt',reserve:'Rezervacija',openNav:'Otvori navigaciju',
  'hero.title':'Dođite gladni, idite srećni!',
  'hero.sub':'Mediteranski restoran i picerija na samom šetalištu Seljanovo u Tivtu — dvije terase s pogledom na Bokokotorski zaliv.',
  'hero.menu':'Otvori meni','facts.hours':'Svaki dan 07:00 – 01:00','facts.sea':'Dvije terase uz more',
  'about.kicker':'Od 1991. · Seljanovo, Tivat','about.title':'Sjećanje na jedan grad, 2300 km daleko',
  'about.p1':'<em>„Big Ben“</em> — kao sjećanje na jedan grad, studentski stan, pogled s prozora u sivo magličasto jutro i zvonjavu velikog sata. Grad u kom se prvi put rodila ideja. San koji je tada počeo traje i danas — ovdje, na šetalištu u Tivtu.',
  'about.p2':'Nekada kafić sa svega 30 kvadrata i sedam stolova u bašti, sada restoran-picerija sa dvije terase kapaciteta 200 sjedišta. Postali smo sinonim za kvalitetnu i brzu uslugu.',
  'about.p3':'Jela mediteranske kuhinje, vina internacionalne kvalitete i blagi maestral koji donosi svježinu s mora.',
  'stats.since':'otvoreno','stats.seats':'sjedišta','stats.terraces':'terase','about.tag':'Restoran · Bar · Picerija',
  'menu.kicker':'Hrana i piće','menu.title':'Meni','menu.lead':'Od doručka do podneva do pice, ribe i roštilja do kasno u noć. Izaberite kategoriju.',
  'menu.note':'Cijene su u eurima (€).','menu.items':'stavki','menu.back':'Sva pića','menu.sections':'kategorija',
  'stories.title':'Izdvojeno','gal.kicker':'Atmosfera','gal.title':'Galerija',
  'contact.kicker':'Posjetite nas','contact.title':'Rezervišite sto uz more','contact.res':'Rezervacije','contact.addr':'Adresa',mne:'Crna Gora',
  'contact.hours':'Radno vrijeme','contact.daily':'Svaki dan 07:00 – 01:00','contact.bf':'Doručak do 12:00','contact.call':'Pozovite','contact.route':'Kako do nas',
  'rev.text':'<b>Više od 3200 recenzija gostiju</b> na Google Mapama','rev.read':'Pročitajte recenzije',foot:'Restoran, bar i picerija od 1991.'
 }
};
var lang = 'en';
try { var saved = localStorage.getItem('bb-lang'); if (saved && T[saved]) lang = saved; } catch(e){}
function t(k){ return (T[lang] && T[lang][k]) || T.en[k] || k; }
function L(v){ return (v == null) ? '' : (typeof v === 'string' ? v : (v[lang] || v.en || '')); }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function cap(s){ s = s.toLowerCase(); return s.charAt(0).toUpperCase() + s.slice(1); }

function applyLang(){
  document.documentElement.lang = lang === 'me' ? 'sr-Latn-ME' : lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el){ el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){ el.innerHTML = t(el.getAttribute('data-i18n-html')); });
  document.querySelectorAll('.langs button').forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  if (typeof hintText !== 'undefined' && hintText && !ringing) hintText.textContent = t('chime.hint');
  if (typeof tower !== 'undefined' && tower){ lastMin = null; setClock(false); }
  renderCards();
  renderStories();
  if (state.open) renderSheet(state.cat, state.sub, 'none');
}
document.querySelectorAll('.langs button').forEach(function(b){
  b.addEventListener('click', function(){ lang = b.dataset.lang; try{ localStorage.setItem('bb-lang', lang); }catch(e){} applyLang(); });
});

/* ---------- header ---------- */
var hdr = document.getElementById('hdr');
function onScroll(){ hdr.classList.toggle('solid', window.scrollY > 40); }
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
var burger = document.getElementById('burger'), nav = document.getElementById('nav');
burger.addEventListener('click', function(){ var o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', String(o)); });
nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ nav.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }); });

/* ---------- reveal ---------- */
var io = 'IntersectionObserver' in window ? new IntersectionObserver(function(es){
  es.forEach(function(e){ if (e.isIntersecting){ var el = e.target; el.classList.add('in'); io.unobserve(el); if (el.style.transitionDelay) setTimeout(function(){ el.style.transitionDelay = ''; }, 1300); } });
}, {threshold:.15, rootMargin:'0px 0px -40px 0px'}) : null;
function observe(root){ (root||document).querySelectorAll('.reveal:not(.in)').forEach(function(el){ io ? io.observe(el) : el.classList.add('in'); }); }

/* ---------- ribbon ---------- */
var ribbon = ['carbonara','octopus','pizza-quattro','shrimps','terrace','burger','fish-calamari','cevapi','omelette','catering','pasta-salmon','table-view'];
var wide = {'pizza-quattro':1,'terrace':1,'cevapi':1,'table-view':1};
var track = document.getElementById('track');
track.innerHTML = ribbon.concat(ribbon).map(function(n){ return '<img src="img/'+n+'.webp" alt="" loading="lazy"'+(wide[n]?' class="w"':'')+'>'; }).join('');

/* ---------- menu ---------- */
var MENU = window.BB_MENU || [];
var cards = document.getElementById('cards');
function countItems(c){
  var n = 0, gs = c.g || [];
  if (c.subs) c.subs.forEach(function(s){ s.g.forEach(function(g){ n += g.i.length; }); });
  gs.forEach(function(g){ n += g.i.length; });
  return n;
}
function cardHTML(c, i, extra){
  return '<button type="button" class="card reveal" data-cat="'+i+'"'+(extra||'')+'>'+
    '<span class="n">'+countItems(c)+' '+t('menu.items')+'</span>'+
    '<img src="icons/'+c.icon+'.png" alt="" width="96" height="96">'+
    '<span class="t">'+esc(L(c.t))+'</span></button>';
}
function renderCards(){
  cards.innerHTML = MENU.map(function(c,i){ return cardHTML(c,i,' style="transition-delay:'+(i%4*60)+'ms"'); }).join('');
  observe(cards);
}
function spotlight(e){
  var c = e.target.closest && e.target.closest('.card'); if (!c) return;
  var r = c.getBoundingClientRect();
  c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
}
function ripple(card, e){
  if (REDUCED) return;
  var r = card.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2, s = document.createElement('span');
  s.className = 'ripple'; s.style.width = s.style.height = d + 'px';
  var x = e && e.clientX ? e.clientX - r.left : r.width/2, y = e && e.clientY ? e.clientY - r.top : r.height/2;
  s.style.left = (x - d/2) + 'px'; s.style.top = (y - d/2) + 'px';
  card.appendChild(s); setTimeout(function(){ s.remove(); }, 700);
}
cards.addEventListener('pointermove', spotlight);
cards.addEventListener('click', function(e){
  var c = e.target.closest('.card'); if (!c) return;
  c.style.transitionDelay = '0ms';
  ripple(c, e);
  openSheet(+c.dataset.cat, c);
});

var wrap = document.getElementById('sheetWrap'), sheet = document.getElementById('sheet'), body = document.getElementById('sheetBody'), chips = document.getElementById('chips');
var state = {open:false, cat:0, sub:null, origin:null, lastFocus:null};

function rowsHTML(groups){
  var h = '', k = 0;
  groups.forEach(function(g){
    var title = L(g.t);
    if (!g.i.length){
      if (!title) return;
      if (g.k === 2){ h += '<p class="note stag" style="animation-delay:'+(k++*25)+'ms"><svg><use href="#i-clock"/></svg>'+esc(title)+'</p>'; }
      else { h += '<div class="grp"><h4 class="stag" style="animation-delay:'+(k++*25)+'ms">'+esc(title)+'</h4></div>'; }
      return;
    }
    h += '<div class="grp">';
    if (title){
      h += g.k === 2 ? '<h5 class="stag" style="animation-delay:'+(k++*25)+'ms">'+esc(cap(title))+'</h5>' : '<h4 class="stag" style="animation-delay:'+(k++*25)+'ms">'+esc(title)+'</h4>';
    }
    g.i.forEach(function(it){
      var d = Math.min(k++, 30) * 25;
      h += '<div class="row stag" style="animation-delay:'+d+'ms"><div class="nm">'+esc(L(it.n))+(it.q?'<span class="q">'+esc(it.q)+'</span>':'')+'</div>'+
           '<div class="pr">'+esc(it.p.replace('.', ','))+' €</div>'+(it.d?'<div class="ds">'+esc(L(it.d))+'</div>':'')+'</div>';
    });
    h += '</div>';
  });
  return h;
}
function renderChips(){
  chips.innerHTML = MENU.map(function(c,i){
    return '<button type="button" class="chip" role="tab" data-cat="'+i+'" aria-current="'+(i===state.cat)+'"><img src="icons/'+c.icon+'.png" alt="">'+esc(L(c.t))+'</button>';
  }).join('');
  var cur = chips.querySelector('[aria-current=true]');
  if (cur) chips.scrollTo({left: cur.offsetLeft - chips.clientWidth/2 + cur.offsetWidth/2, behavior: REDUCED ? 'auto' : 'smooth'});
}
function renderSheet(ci, sub, dir){
  state.cat = ci; state.sub = sub;
  var c = MENU[ci];
  renderChips();
  var cover = '<div class="cover"><img src="img/'+c.photo+'.webp" alt=""><div class="ttl"><img src="icons/'+(sub!=null?c.subs[sub].icon:c.icon)+'.png" alt=""><div>'+
     (sub!=null?'<small>'+esc(L(c.t))+'</small>':'')+'<h3 id="sheetTitle">'+esc(L(sub!=null?c.subs[sub].t:c.t))+'</h3></div></div></div>';
  var inner;
  if (c.subs && sub == null){
    inner = '<div class="subs">'+c.subs.map(function(s,i){
      var n = 0; s.g.forEach(function(g){ n += g.i.length; });
      return '<button type="button" class="card stag" data-sub="'+i+'" style="animation-delay:'+(i*60)+'ms"><span class="n">'+n+' '+t('menu.items')+'</span><img src="icons/'+s.icon+'.png" alt="" width="96" height="96"><span class="t">'+esc(L(s.t))+'</span></button>';
    }).join('')+'</div>';
    body.classList.add('body-dark');
  } else {
    var groups = sub != null ? c.subs[sub].g : c.g;
    inner = (sub != null ? '<div class="crumb"><button type="button" data-back><svg><use href="#i-left"/></svg>'+esc(t('menu.back'))+'</button></div>' : '') +
            '<div class="list">'+rowsHTML(groups)+'</div>';
    body.classList.remove('body-dark');
  }
  body.innerHTML = '<div class="view'+(dir==='back'?' back':'')+'">'+cover+inner+'</div>';
  if (dir === 'none') body.firstChild.style.animation = 'none';
  body.scrollTop = 0;
  var cv = body.querySelector('.cover');
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ cv.classList.add('in'); }); });
}
body.addEventListener('pointermove', spotlight);
body.addEventListener('click', function(e){
  var s = e.target.closest('[data-sub]'); if (s){ ripple(s, e); setTimeout(function(){ renderSheet(state.cat, +s.dataset.sub, 'fwd'); }, REDUCED?0:140); return; }
  if (e.target.closest('[data-back]')) renderSheet(state.cat, null, 'back');
});
chips.addEventListener('click', function(e){
  var c = e.target.closest('.chip'); if (!c) return;
  var i = +c.dataset.cat; if (i === state.cat && state.sub == null) return;
  renderSheet(i, null, i < state.cat ? 'back' : 'fwd');
});

function flipFrom(el){
  if (!el || REDUCED) return null;
  var a = el.getBoundingClientRect(), b = sheet.getBoundingClientRect();
  return 'translate('+(a.left-b.left)+'px,'+(a.top-b.top)+'px) scale('+(a.width/b.width)+','+(a.height/b.height)+')';
}
function openSheet(ci, originEl){
  state.lastFocus = document.activeElement; state.origin = originEl; state.open = true;
  wrap.classList.add('open'); document.body.classList.add('lock');
  renderSheet(ci, null, 'none');
  var from = flipFrom(originEl);
  if (from){
    sheet.style.transition = 'none'; sheet.style.transform = from; sheet.style.opacity = '.4'; sheet.style.borderRadius = '14px';
    sheet.getBoundingClientRect();
    sheet.style.transition = 'transform .7s cubic-bezier(.22,.8,.24,1), opacity .4s, border-radius .7s';
    sheet.style.transform = 'none'; sheet.style.opacity = '1'; sheet.style.borderRadius = '';
  }
  requestAnimationFrame(function(){ wrap.classList.add('show'); });
  setTimeout(function(){ var b = sheet.querySelector('[data-close]'); if (b) b.focus({preventScroll:true}); }, 60);
}
function closeSheet(){
  if (!state.open) return;
  state.open = false;
  wrap.classList.remove('show');
  var origin = cards.querySelector('[data-cat="'+state.cat+'"]');
  var to = origin && origin.getBoundingClientRect().bottom > 0 && origin.getBoundingClientRect().top < innerHeight ? flipFrom(origin) : null;
  var done = function(){ wrap.classList.remove('open'); sheet.style.cssText = ''; document.body.classList.remove('lock'); if (state.lastFocus && state.lastFocus.focus) state.lastFocus.focus({preventScroll:true}); };
  if (REDUCED){ done(); return; }
  sheet.style.transition = 'transform .5s cubic-bezier(.65,0,.35,1), opacity .45s, border-radius .5s';
  sheet.style.transform = to || 'translateY(40px) scale(.96)'; sheet.style.opacity = '0'; if (to) sheet.style.borderRadius = '14px';
  setTimeout(done, 480);
}
wrap.addEventListener('click', function(e){ if (e.target.closest('[data-close]')) closeSheet(); });

/* focus trap + keys */
function trap(e, root){
  var f = [].slice.call(root.querySelectorAll('button,a[href],[tabindex]:not([tabindex="-1"])')).filter(function(x){ return x.offsetParent !== null; });
  if (!f.length) return;
  var first = f[0], last = f[f.length-1];
  if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
}
document.addEventListener('keydown', function(e){
  if (sv.classList.contains('open')){
    if (e.key === 'Escape') closeStory(); else if (e.key === 'ArrowRight') stepStory(1); else if (e.key === 'ArrowLeft') stepStory(-1); else if (e.key === 'Tab') trap(e, sv);
    return;
  }
  if (lb.classList.contains('open')){
    if (e.key === 'Escape') closeLb(); else if (e.key === 'ArrowRight') stepLb(1); else if (e.key === 'ArrowLeft') stepLb(-1); else if (e.key === 'Tab') trap(e, lb);
    return;
  }
  if (state.open){
    if (e.key === 'Escape'){ if (state.sub != null) renderSheet(state.cat, null, 'back'); else closeSheet(); }
    else if (e.key === 'Tab') trap(e, sheet);
  }
});

/* ---------- gallery ---------- */
var GAL = [
  ['hero','Sunset over the Bay of Tivat'],['facade','Big Ben on the Seljanovo promenade'],['octopus','Grilled octopus'],['view','The bay from the upper terrace'],
  ['carbonara','Pasta'],['terrace','Terrace at sunset'],['shrimps','Grilled prawns'],['table-view','Lunch with a sea view'],
  ['team','The Big Ben team'],['burger','Burger and fries'],['xmas','Big Ben winter kiosk'],['fish-calamari','Fish and calamari'],
  ['waitress','Service with a smile'],['pizza-quattro','Pizza'],['catering','Catering'],['facade-wide','Big Ben from the street']
];
var gal = document.getElementById('gal');
gal.innerHTML = GAL.map(function(g,i){ return '<button type="button" class="reveal" data-i="'+i+'" aria-label="'+esc(g[1])+'"><img src="img/'+g[0]+'.webp" alt="'+esc(g[1])+'" loading="lazy"></button>'; }).join('');
var lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbI = 0, lbFocus = null;
function showLb(i){ lbI = (i + GAL.length) % GAL.length; lbImg.src = 'img/' + GAL[lbI][0] + '.webp'; lbImg.alt = GAL[lbI][1]; lbImg.style.animation = 'none'; lbImg.offsetHeight; lbImg.style.animation = ''; }
function stepLb(d){ showLb(lbI + d); }
function closeLb(){ lb.classList.remove('open'); document.body.classList.remove('lock'); if (lbFocus) lbFocus.focus(); }
gal.addEventListener('click', function(e){ var b = e.target.closest('button'); if (!b) return; lbFocus = b; showLb(+b.dataset.i); lb.classList.add('open'); document.body.classList.add('lock'); lb.querySelector('.x').focus(); });
lb.querySelector('.x').addEventListener('click', closeLb);
lb.querySelector('.pv').addEventListener('click', function(){ stepLb(-1); });
lb.querySelector('.nx').addEventListener('click', function(){ stepLb(1); });
lb.addEventListener('click', function(e){ if (e.target === lb) closeLb(); });

/* ---------- stories (Instagram highlights) ---------- */
var STORIES = window.BB_STORIES || [];
var stSec = document.getElementById('stories'), stRow = document.getElementById('st-row');
var sv = document.getElementById('sv'), svImg = document.getElementById('svImg'), svBars = document.getElementById('svBars'), svTitle = document.getElementById('svTitle');
var sS = 0, sI = 0, sTimer = null, sStart = 0, SDUR = 5000, sFocus = null;
function renderStories(){
  if (!STORIES.length){ stSec.hidden = true; return; }
  stSec.hidden = false;
  stRow.innerHTML = STORIES.map(function(s,i){ return '<button type="button" class="st" data-s="'+i+'"><span class="ring"><img src="'+s.cover+'" alt=""></span><span>'+esc(L(s.t))+'</span></button>'; }).join('');
}
function tick(){
  var p = Math.min(1, (performance.now() - sStart) / SDUR);
  var b = svBars.children[sI]; if (b) b.firstChild.style.width = (p*100) + '%';
  if (p >= 1) stepStory(1); else sTimer = requestAnimationFrame(tick);
}
function showStory(s, i){
  sS = s; sI = i; var st = STORIES[s];
  svTitle.textContent = L(st.t);
  svBars.innerHTML = st.items.map(function(_,k){ return '<i><b style="width:'+(k<i?100:0)+'%"></b></i>'; }).join('');
  svImg.src = st.items[i]; svImg.alt = L(st.t);
  cancelAnimationFrame(sTimer); sStart = performance.now(); if (!REDUCED) sTimer = requestAnimationFrame(tick);
}
function stepStory(d){
  var st = STORIES[sS], ni = sI + d;
  if (ni >= st.items.length){ if (sS + 1 < STORIES.length) showStory(sS + 1, 0); else closeStory(); }
  else if (ni < 0){ if (sS > 0) showStory(sS - 1, STORIES[sS-1].items.length - 1); else showStory(sS, 0); }
  else showStory(sS, ni);
}
function closeStory(){ cancelAnimationFrame(sTimer); sv.classList.remove('open'); document.body.classList.remove('lock'); if (sFocus) sFocus.focus(); }
stRow.addEventListener('click', function(e){ var b = e.target.closest('.st'); if (!b) return; sFocus = b; sv.classList.add('open'); document.body.classList.add('lock'); showStory(+b.dataset.s, 0); document.getElementById('svClose').focus(); });
document.getElementById('svClose').addEventListener('click', closeStory);
document.getElementById('svPrev').addEventListener('click', function(){ stepStory(-1); });
document.getElementById('svNext').addEventListener('click', function(){ stepStory(1); });
sv.addEventListener('click', function(e){ if (e.target === sv) closeStory(); });

/* ---------- Big Ben clock: Tivat time, jumping minute hand, strikes on tap ---------- */
var mh = document.getElementById('mh'), hh = document.getElementById('hh'), tower = document.getElementById('tower');
var hint = document.getElementById('chimeHint'), hintText = document.getElementById('chimeText');
var lastMin = null, mAngle = null, hAngle = null, ringing = false, actx = null;
function tivatNow(){
  var p = new Intl.DateTimeFormat('en-GB', {timeZone:'Europe/Podgorica', hour:'numeric', minute:'numeric', hour12:false}).formatToParts(new Date());
  var get = function(t){ for (var i = 0; i < p.length; i++) if (p[i].type === t) return +p[i].value; return 0; };
  return {h: get('hour') % 24, m: get('minute')};
}
function pad(n){ return (n < 10 ? '0' : '') + n; }
function forward(prev, next){ if (prev == null) return next; while (next < prev - 0.01) next += 360; while (next - prev >= 360) next -= 360; return next; }
function setClock(first){
  var nw = tivatNow(), key = nw.h * 60 + nw.m;
  if (key === lastMin) return;
  lastMin = key;
  var mA = forward(mAngle, nw.m * 6), hA = forward(hAngle, (nw.h % 12) * 30 + nw.m * 0.5);
  [mh, hh].forEach(function(el){ el.classList.toggle('no-anim', !!first); });
  mAngle = mA; hAngle = hA;
  mh.style.transform = 'rotate(' + mA + 'deg)'; hh.style.transform = 'rotate(' + hA + 'deg)';
  tower.setAttribute('aria-label', t('chime.label').replace('{time}', pad(nw.h) + ':' + pad(nw.m)));
}
function bell(ctx, t0){
  var out = ctx.createGain(); out.gain.value = 0.55; out.connect(ctx.destination);
  var f = 164.8;
  [[0.5,.30,7],[0.503,.12,7],[1,.42,5],[1.19,.22,3.4],[1.5,.16,2.8],[2,.30,2.6],[2.52,.10,1.7],[3,.09,1.4],[4.07,.05,1]].forEach(function(p){
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = f * p[0];
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(p[1], t0 + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t0 + p[2]);
    o.connect(g); g.connect(out); o.start(t0); o.stop(t0 + p[2] + 0.1);
  });
  var len = Math.floor(ctx.sampleRate * 0.06), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  var n = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), ng = ctx.createGain();
  n.buffer = buf; bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 1.2; ng.gain.value = 0.18;
  n.connect(bp); bp.connect(ng); ng.connect(out); n.start(t0);
}
function pulse(el, cls){ el.classList.remove(cls); void el.getBoundingClientRect(); el.classList.add(cls); }
function strikeHour(){
  if (ringing) return;
  var now = tivatNow(), total = now.h % 12 || 12, gap = 2.6, wave = tower.querySelector('.wave');
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
  } catch(e){ actx = null; }
  ringing = true; tower.classList.add('ringing');
  var start = actx ? actx.currentTime + 0.05 : 0;
  for (var k = 0; k < total; k++) (function(k){
    if (actx) bell(actx, start + k * gap);
    setTimeout(function(){
      hintText.textContent = t('chime.strike').replace('{n}', k + 1).replace('{t}', total);
      if (!REDUCED){ pulse(tower, 'strike'); pulse(wave, 'go'); }
    }, 50 + k * gap * 1000);
  })(k);
  setTimeout(function(){ ringing = false; tower.classList.remove('ringing'); hintText.textContent = t('chime.hint'); }, 50 + (total - 1) * gap * 1000 + 2600);
}
tower.addEventListener('click', strikeHour);
tower.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); strikeHour(); } });
hint.addEventListener('click', strikeHour);
setClock(true);
setInterval(setClock, 1000);
document.addEventListener('visibilitychange', function(){ if (!document.hidden){ lastMin = null; setClock(false); } });

applyLang();
observe(document);
})();
