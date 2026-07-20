/* PLUMBING_V 2 — Bespoke Studio · meccanica invisibile canonica.
   Copiato dal canone Agenzia/Toolkit/boilerplate/plumbing.js e adattato nella sola
   costante SITE. Il codice-FIRMA di questo sito sta in fondo, sotto il
   marcatore di fine plumbing. */

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  /* ══════════ CONFIG PER-SITO ══════════ */
  var SITE = {
    slug: 'al-sasset',
    /* Nessun WhatsApp pubblicato: si prenota al telefono. */
    whatsapp: { number: '', message: '', ids: [] },
    /* ⚠️ ORARI DELIBERATAMENTE VUOTI. Google espone solo il giorno corrente
       (lunedì 09–23:30) e la ricerca si è fermata su un CAPTCHA che non si
       aggira: gli altri sei giorni NON sono verificati. Meglio nessun orario
       che orari inventati — nel sito non c'è tabella oraria, c'è il telefono.
       Quando il cliente li fornisce, si riempie qui e si aggiunge la tabella. */
    hours: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1500,
    revealSelector: '.reveal',
    inViewClass: 'in-view',
    breakpointMenu: 760,
    EN: {
      'nav.menu': 'Menu', 'nav.pizze': 'Pizza', 'nav.voci': 'Reviews', 'nav.dove': 'Find us',

      'hero.occhiello': 'Via Graziano 35 · Niguarda, Milan',
      'hero.t1': 'Tonight,',
      'hero.t2': 'sea', 'hero.o': 'or', 'hero.t3': 'land?',
      'hero.p': 'Our menu has always been split this way: sea starters and land starters, sea first courses and land ones, sea mains and land mains. Pick a side — or order a pizza and skip the choice.',
      'hero.cta1': 'See the menu', 'hero.cta2': 'Book a table',
      'hero.nota': 'from 330 Google reviews',

      'alt.facciata': 'The entrance of al Sasset on Via Graziano 35 at dusk, with its orange sign and tables set outside',

      'menu.h': 'The menu',
      'menu.p': 'Seven sea starters, seven from the land. Five sea first courses, seven from the land. Six mains each side. Whichever side you start from, you get to the end.',
      'sw.mare': 'Sea', 'sw.terra': 'Land',
      'm.anti': 'Starters', 'm.primi': 'First courses', 'm.secondi': 'Mains',
      'm.anti2': 'Starters', 'm.primi2': 'First courses', 'm.secondi2': 'Mains',

      'ma.a': 'Prawn cocktail', 'ma.b': 'Three seafood bruschette', 'ma.c': 'Seafood salad',
      'ma.d': 'Citrus-marinated salmon carpaccio with mixed leaves',
      'ma.e': 'Island-style shellfish soup',
      'ma.f': 'Roast octopus tentacle with potato, rocket, Pachino tomato and Taggiasca olives',
      'ma.g': 'Fish tartare, depending on the day’s catch',
      'mp.a': 'Spaghetti with clams', 'mp.b': 'Seafood risotto',
      'mp.c': 'Tagliolini with red prawn and fresh cherry tomatoes',
      'mp.d': 'Linguine with seafood, baked in paper', 'mp.e': 'Linguine with half a fresh lobster',
      'ms.a': 'Fried squid, prawns and vegetables', 'ms.b': 'Grilled salmon with roast potatoes',
      'ms.c': 'Fish soup', 'ms.d': 'Catch of the day',
      'ms.e': 'Griddled scampi and prawns with raw vegetables',
      'ms.f': 'Mixed grilled fish with raw vegetables',

      'ta.a': 'White focaccia', 'ta.b': 'Bresaola, rocket and Grana',
      'ta.c': 'Buffalo mozzarella with Pachino tomato and mixed leaves',
      'ta.d': 'Cheese board', 'ta.e': 'Prosciutto crudo with burrata from Andria',
      'ta.f': 'Beef tartare with rocket and Pachino tomatoes', 'ta.g': 'Mixed fried platter',
      'tp.a': 'Spaghetti with tomato and basil', 'tp.b': 'Risotto alla milanese',
      'tp.c': 'Pumpkin risotto with taleggio cream', 'tp.d': 'Gnocchi alla sorrentina',
      'tp.e': 'Spaghetti carbonara', 'tp.f': 'Tagliolini bolognese',
      'tp.g': 'Toma ravioli with white truffle cream',
      'ts.a': 'Los Angeles burger with fries', 'ts.b': 'Roast poussin with roast potatoes',
      'ts.c': 'Baked beef tagliata with Pachino, rocket and Parmigiano Reggiano',
      'ts.d': 'Rib steak', 'ts.e': 'Costoletta alla milanese with rocket and Pachino tomatoes',
      'ts.f': 'Ossobuco',

      'ex.ins': 'Big salads',
      'ex.insp': 'Greca, Classica, Cesarina, Pescatore, Meneghina, Nizzarda. Plus a poke bowl with salmon and avocado.',
      'ex.cont': 'Sides',
      'ex.contp': 'Roast or fried potatoes, grilled vegetables, mash, spinach with garlic, oil and chilli.',
      'ex.bimbo': 'Children’s menu',
      'ex.bimbop': 'Pasta with tomato or pizza, with fries and a drink.',

      'pz.h': 'And then there is pizza',
      'pz.p': 'Twelve classics and eleven specials: the third way, for anyone who would rather not choose. The pizza that carries our name, though, sits on the sea side.',
      'pz.cl': 'Classics', 'pz.sp': 'Specials',
      'pc.a': 'Marinara', 'pc.b': 'Margherita', 'pc.c': 'Napoli', 'pc.d': 'Classic calzone',
      'pc.e': 'Diavola', 'pc.f': 'Four seasons', 'pc.g': 'Four cheeses', 'pc.h': 'Ortolana',
      'pc.i': 'Sausage and friarielli', 'pc.l': 'Americana', 'pc.m': 'Regina', 'pc.n': 'Bangla',
      'ps.a': 'Trentina', 'ps.b': 'Golosa', 'ps.c': 'Bufalina', 'ps.d': 'Valtellina',
      'ps.e': 'Salmoncina', 'ps.f': 'Purgatorio', 'ps.g': 'Caprese', 'ps.h': 'Burrosa',
      'ps.i': 'Inferno', 'ps.l': 'al Sasset, with seafood', 'ps.m': 'Fior di latte with truffle',

      'voci.h': 'What people write',
      'voci.sub': 'from 330 Google reviews. Many come from people passing through Milan who find us by chance.',
      'voci.c1': 'Google review', 'voci.c2': 'Google review',

      'dove.h': 'Where we are',
      'dove.p': 'To book a table or check whether we are open, the quickest way is to call.',
      'dove.mappa': 'Open in Maps',
      'dove.tag': 'An LGBTQ+ friendly place.',

      'foot.nota': 'Demonstration site built by Bespoke Studio.',
      'bar.tel': 'Book', 'bar.menu': 'Menu',
    },
  };
  /* ═════════════════════════════════════ */

  /* ---------- WhatsApp wiring ---------- */
  if (SITE.whatsapp.number) {
    var waHref = 'https://wa.me/' + SITE.whatsapp.number + '?text=' +
      encodeURIComponent(SITE.whatsapp.message);
    SITE.whatsapp.ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.href = waHref; el.target = '_blank'; el.rel = 'noopener'; }
    });
  }

  /* ---------- GSAP: registrazione IMMEDIATA + reveal + watchdog ---------- */
  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll(SITE.revealSelector);
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) {
      if (hasST) {
        els.forEach(function (el) {
          ScrollTrigger.getAll().forEach(function (st) {
            if (st.trigger === el && !st.progress) st.kill();
          });
        });
      }
      gsap.set(els, { opacity: 1, y: 0, x: 0 });
    }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray(SITE.revealSelector).forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  } else {
    if ('IntersectionObserver' in window && !reducedMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add(SITE.inViewClass); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(SITE.revealSelector).forEach(function (el) { io.observe(el); });
    } else {
      showAllReveals();
    }
  }

  /* ---------- intro skippabile ---------- */
  var intro = document.getElementById(SITE.introId);
  /* ⚠️ L'hook si legge AL MOMENTO DELLA CHIAMATA: il codice-firma sta sotto
     il marcatore di fine plumbing e assegna window.bespokeHeroEntrance DOPO
     questa riga. Catturarlo per valore congelava la funzione vuota e l'hero
     restava a opacity 0 sul live. (20/7/2026 — fix riportato nel canone.) */
  function heroEntrance() {
    if (typeof window.bespokeHeroEntrance === 'function') window.bespokeHeroEntrance();
  }
  function hideIntro() {
    if (!intro) return;
    var el = intro; intro = null;
    el.classList.add('hide');
    setTimeout(function () { el.remove(); }, 700);
    heroEntrance();
  }
  function killIntroNow() {
    if (!intro) return;
    var el = intro; intro = null;
    el.remove();
    heroEntrance();
  }
  if (reducedMotion || !intro) {
    if (intro) { intro.remove(); intro = null; }
    heroEntrance();
  } else {
    setTimeout(hideIntro, SITE.introDuration);
    setTimeout(hideIntro, 6000);
    intro.addEventListener('click', hideIntro);
  }

  /* ---------- burger menu ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
      if (lastFocus) { lastFocus.focus(); lastFocus = null; }
    };
    var openNav = function () {
      if (typeof killIntroNow === 'function') killIntroNow();
      lastFocus = document.activeElement;
      nav.classList.add('nav-open');
      burger.setAttribute('aria-expanded', 'true');
      var first = nav.querySelector('a, button');
      if (first) first.focus();
    };
    burger.addEventListener('click', function () {
      nav.classList.contains('nav-open') ? closeNav() : openNav();
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > SITE.breakpointMenu) closeNav();
    });
  }

  /* ---------- lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) {
      lightboxImg.src = src; lightboxImg.alt = alt || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    };
    var closeLb = function () {
      lightbox.hidden = true; lightboxImg.src = '';
      document.body.style.overflow = '';
      if (opener) { opener.focus(); opener = null; }
    };
    document.querySelectorAll('[data-full]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        opener = btn;
        var img = btn.querySelector('img');
        openLb(btn.getAttribute('data-full'), img ? img.alt : '');
      });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLb();
    });
  }

  /* ---------- orari dinamici Europe/Rome ---------- */
  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
      });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var get = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[get('weekday')], mins: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
    } catch (e) {
      var d = new Date();
      return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() };
    }
  }
  var toMin = function (hm) {
    var a = hm.split(':');
    return parseInt(a[0], 10) * 60 + parseInt(a[1], 10);
  };
  var fmt = function (m) {
    m = m % 1440;
    return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2);
  };
  var DAYS_IT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function hoursState() {
    var now = romeNow();
    var wins = SITE.hours[now.day] || [];
    for (var i = 0; i < wins.length; i++) {
      var s = toMin(wins[i][0]), e = toMin(wins[i][1]);
      if (now.mins >= s && now.mins < Math.min(e, 1440)) {
        return { open: true, day: now.day, closesAt: fmt(e) };
      }
    }
    var prev = (now.day + 6) % 7;
    var pw = SITE.hours[prev] || [];
    for (var j = 0; j < pw.length; j++) {
      var pe = toMin(pw[j][1]);
      if (pe > 1440 && now.mins < pe - 1440) {
        return { open: true, day: prev, closesAt: fmt(pe) };
      }
    }
    for (var k = 0; k < wins.length; k++) {
      if (now.mins < toMin(wins[k][0])) {
        return { open: false, day: now.day, opensToday: fmt(toMin(wins[k][0])) };
      }
    }
    for (var d = 1; d <= 7; d++) {
      var nd = (now.day + d) % 7;
      var nw = SITE.hours[nd] || [];
      if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) };
    }
    return { open: false, day: now.day };
  }

  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId);
    var st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) {
      row.classList.toggle(SITE.todayClass,
        parseInt(row.getAttribute('data-day'), 10) === st.day);
    });
    if (!el) return;
    var en = root.lang === 'en';
    var txt;
    if (st.open) {
      txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    } else if (st.opensToday) {
      txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    } else if (st.opensAt !== undefined) {
      txt = (en ? 'Closed · opens ' + DAYS_EN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DAYS_IT[st.opensDay] + ' alle ') + st.opensAt;
    } else {
      txt = en ? 'Closed' : 'Chiuso';
    }
    el.textContent = txt;
  }
  renderHours();
  setInterval(renderHours, 60000);

  /* ---------- i18n overlay ---------- */
  var originals = {};
  var I18N_ATTRS = [
    ['data-i18n', null],
    ['data-i18n-aria', 'aria-label'],
    ['data-i18n-alt', 'alt'],
    ['data-i18n-placeholder', 'placeholder'],
    ['data-i18n-title', 'title'],
  ];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr);
        var store = originals[dattr];
        /* innerHTML, non textContent: il markup interno (<strong>, <br>)
           deve sopravvivere al passaggio EN→IT. La flotta lavorava già
           così; il boilerplate canonico era rimasto indietro ed è stato
           riallineato il 20/7/2026 partendo da qui. */
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLang(root.lang === 'en' ? 'it' : 'en');
    });
  }
  try {
    if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en');
  } catch (e) {}

  /* ---------- action-bar mobile ---------- */
  var actionBar = document.getElementById('actionBar');
  if (actionBar) {
    var onScroll = function () {
      actionBar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ══════════ FINE PLUMBING — da qui solo il codice-firma ══════════ */

  /* ═══ FIRMA 1 — l'entrata del titolo ═══
     Elementi-FIRMA: NON portano .reveal, per non prendere due
     animazioni sull'opacità (regola anti-flash). */
  var righe = document.querySelectorAll('#heroTitolo .riga');
  if (hasGsap && !reducedMotion && righe.length) {
    gsap.set(righe, { opacity: 0, yPercent: 40 });
    window.bespokeHeroEntrance = function () {
      gsap.to(righe, { opacity: 1, yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.13 });
    };
    if (!document.getElementById(SITE.introId)) window.bespokeHeroEntrance();
  }

  /* ═══ FIRMA 2 — mare o terra ═══
     Il loro menu è diviso in mare e terra a ogni portata: l'interruttore
     ribalta il pannello E la palette dell'intera sezione (la classe sul
     body ridefinisce --lato e --lato-fondo, il resto lo fa il CSS in
     transizione). Senza GSAP lo scambio resta puro [hidden] + classe:
     la pagina funziona identica, solo senza lo stagger. */
  var lati = Array.prototype.slice.call(document.querySelectorAll('.lato'));
  var pannelli = Array.prototype.slice.call(document.querySelectorAll('.pannello'));

  function scegliLato(i) {
    lati.forEach(function (b, k) {
      b.classList.toggle('is-attivo', k === i);
      b.setAttribute('aria-selected', k === i ? 'true' : 'false');
    });
    pannelli.forEach(function (p, k) { p.hidden = k !== i; });
    document.body.classList.toggle('lato-terra', i === 1);
    var attivo = pannelli[i];
    if (!attivo) return;
    if (hasGsap && !reducedMotion) {
      gsap.fromTo(attivo.querySelectorAll('.portata'),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08, overwrite: true });
    }
  }

  lati.forEach(function (b, i) {
    b.addEventListener('click', function () { scegliLato(i); });
    b.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var n = (i + d + lati.length) % lati.length;
      lati[n].focus();
      scegliLato(n);
    });
  });
})();
