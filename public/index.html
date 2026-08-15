<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cantine — Gestion des tickets</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  :root{
    --bg:#EFE7D2;
    --paper:#FFFDF6;
    --board:#22352A;
    --board-dark:#182420;
    --amber:#E3A73A;
    --amber-dark:#B9821E;
    --coral:#C1503B;
    --coral-dark:#973A29;
    --sage:#5E8F58;
    --sage-dark:#456941;
    --ink:#20281F;
    --ink-soft:#5B6B5E;
    --line:#D9CDA9;
    --font-display:'Archivo Black', sans-serif;
    --font-body:'Space Grotesk', sans-serif;
    --font-mono:'Space Mono', monospace;
  }

  *{ box-sizing:border-box; }
  html,body{ margin:0; padding:0; }
  body{
    background:var(--bg);
    color:var(--ink);
    font-family:var(--font-body);
    -webkit-font-smoothing:antialiased;
  }

  h1,h2{ font-family:var(--font-display); margin:0; }

  /* ---------- Topbar ---------- */
  .topbar{
    background:var(--board);
    color:var(--paper);
    padding:18px 20px;
  }
  .topbar-inner{
    max-width:1100px;
    margin:0 auto;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    gap:14px;
  }
  .brand-eyebrow{
    display:block;
    font-family:var(--font-mono);
    text-transform:uppercase;
    letter-spacing:.14em;
    font-size:11px;
    color:var(--amber);
    margin-bottom:4px;
  }
  .brand h1{
    font-size:22px;
    letter-spacing:.02em;
    text-transform:uppercase;
  }
  .date-nav{ display:flex; align-items:center; gap:8px; }
  .date-nav input[type=date]{
    font-family:var(--font-mono);
    background:var(--board-dark);
    color:var(--paper);
    border:1px solid #3d5145;
    border-radius:6px;
    padding:8px 10px;
    font-size:13px;
  }
  .icon-btn{
    width:32px; height:32px;
    border-radius:6px;
    border:1px solid #3d5145;
    background:var(--board-dark);
    color:var(--paper);
    font-size:16px;
    cursor:pointer;
    line-height:1;
  }
  .icon-btn:hover{ background:#2d4438; }
  .ghost-btn{
    background:transparent;
    border:1px solid var(--amber);
    color:var(--amber);
    padding:8px 12px;
    border-radius:6px;
    font-family:var(--font-body);
    font-weight:600;
    font-size:13px;
    cursor:pointer;
  }
  .ghost-btn:hover{ background:rgba(227,167,58,.12); }
  .ghost-btn.small{ padding:5px 10px; font-size:12px; }

  /* ---------- Summary strip ---------- */
  .summary-strip{
    max-width:1100px;
    margin:0 auto;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:1px;
    background:var(--line);
    border-bottom:1px solid var(--line);
    transform:translateY(0);
  }
  .stat{
    background:var(--paper);
    padding:14px 16px;
    display:flex;
    flex-direction:column;
    gap:4px;
  }
  .stat-label{
    font-family:var(--font-mono);
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:.08em;
    color:var(--ink-soft);
  }
  .stat-value{ font-family:var(--font-display); font-size:22px; }
  .stat-value.amber{ color:var(--amber-dark); }
  .stat-value.coral{ color:var(--coral-dark); }
  .stat-value.sage{ color:var(--sage-dark); }
  .stat.highlight{ background:var(--board); }
  .stat.highlight .stat-label{ color:#b9c9bd; }
  .stat.highlight .stat-value{ color:var(--paper); }
  .stat.highlight .stat-value.coral{ color:#ef8f7c; }
  .stat.highlight .stat-value.sage{ color:#9fd196; }

  /* ---------- Tabs ---------- */
  .tabs{
    max-width:1100px;
    margin:0 auto;
    display:flex;
    gap:4px;
    padding:14px 20px 0;
  }
  .tab-btn{
    font-family:var(--font-body);
    font-weight:600;
    font-size:14px;
    background:none;
    border:none;
    padding:10px 4px;
    color:var(--ink-soft);
    cursor:pointer;
    border-bottom:3px solid transparent;
    margin-right:18px;
  }
  .tab-btn.active{ color:var(--ink); border-bottom-color:var(--amber); }

  .container{ max-width:1100px; margin:0 auto; padding:20px; }
  .panel{ display:none; }
  .panel.active{ display:block; }

  .split{ display:grid; grid-template-columns:340px 1fr; gap:20px; align-items:start; }
  @media (max-width:760px){ .split{ grid-template-columns:1fr; } }

  /* ---------- Cards / forms ---------- */
  .card{
    background:var(--paper);
    border:1px solid var(--line);
    border-radius:8px;
    padding:20px;
  }
  .card h2{ font-size:16px; text-transform:uppercase; letter-spacing:.03em; margin-bottom:14px; }

  .form-card label{
    display:block;
    font-size:12px;
    font-weight:600;
    color:var(--ink-soft);
    margin-bottom:12px;
  }
  .form-card .optional{ font-weight:400; font-style:italic; }
  .form-card input, .form-card select{
    display:block;
    width:100%;
    margin-top:5px;
    font-family:var(--font-body);
    font-size:14px;
    padding:10px 11px;
    border:1px solid var(--line);
    border-radius:6px;
    background:#fff;
    color:var(--ink);
  }
  .form-card input:focus, .form-card select:focus{
    outline:2px solid var(--amber);
    outline-offset:1px;
  }

  .btn{
    width:100%;
    border:none;
    border-radius:6px;
    padding:12px;
    font-family:var(--font-body);
    font-weight:700;
    font-size:14px;
    cursor:pointer;
    color:#fff;
    margin-top:4px;
  }
  .amber-btn{ background:var(--amber-dark); }
  .amber-btn:hover{ background:#a3730f; }
  .coral-btn{ background:var(--coral-dark); }
  .coral-btn:hover{ background:#7f3220; }

  /* ---------- Ticket stub signature ---------- */
  .ticket-card{ position:relative; }
  .ticket-card::before, .ticket-card::after{
    content:'';
    position:absolute;
    left:-10px;
    width:18px; height:18px;
    border-radius:50%;
    background:var(--bg);
    border:2px dashed var(--line);
  }
  .ticket-card::before{ top:26px; }
  .ticket-card::after{ bottom:26px; }
  .form-card.ticket-card{ border-style:dashed; border-width:2px; }

  .list-header{
    display:flex; align-items:center; justify-content:space-between;
    margin-bottom:10px;
  }
  .list-header h2{ font-size:15px; display:flex; align-items:center; gap:8px; }
  .count-pill{
    font-family:var(--font-mono);
    background:var(--board);
    color:var(--paper);
    font-size:11px;
    padding:2px 8px;
    border-radius:20px;
  }

  .ticket-list, .depense-list{
    display:flex; flex-direction:column; gap:10px;
    max-height:560px; overflow-y:auto; padding-right:2px;
  }

  .ticket-stub{
    position:relative;
    background:var(--paper);
    border:2px dashed var(--line);
    border-radius:6px;
    padding:12px 14px 12px 22px;
  }
  .ticket-stub::before{
    content:'';
    position:absolute; left:-8px; top:50%; transform:translateY(-50%);
    width:14px; height:14px; border-radius:50%;
    background:var(--bg); border:2px dashed var(--line);
  }
  .ticket-row-top{ display:flex; justify-content:space-between; align-items:baseline; gap:8px; }
  .ticket-num{ font-family:var(--font-mono); font-size:12px; color:var(--ink-soft); }
  .ticket-time{ font-family:var(--font-mono); font-size:12px; color:var(--ink-soft); }
  .ticket-client{ font-weight:700; font-size:15px; margin-top:4px; }
  .ticket-meta{ display:flex; align-items:center; gap:8px; margin-top:4px; flex-wrap:wrap; }
  .class-pill{
    font-family:var(--font-mono);
    font-size:11px;
    background:var(--board);
    color:var(--paper);
    padding:2px 8px;
    border-radius:20px;
  }
  .ticket-plat{ font-size:13px; color:var(--ink-soft); }
  .ticket-row-bottom{ display:flex; justify-content:space-between; align-items:center; margin-top:8px; }
  .ticket-price{ font-family:var(--font-display); font-size:16px; color:var(--amber-dark); }
  .del-btn{
    background:none; border:1px solid var(--line); color:var(--coral-dark);
    width:26px; height:26px; border-radius:6px; cursor:pointer; font-size:14px; line-height:1;
  }
  .del-btn:hover{ background:#fbe9e5; }

  .depense-row{
    display:flex; justify-content:space-between; align-items:center; gap:10px;
    background:var(--paper); border:1px solid var(--line); border-radius:6px; padding:12px 14px;
  }
  .depense-main{ display:flex; flex-direction:column; gap:3px; }
  .depense-cat{
    font-family:var(--font-mono); font-size:11px; text-transform:uppercase;
    letter-spacing:.04em; color:var(--coral-dark);
  }
  .depense-desc{ font-size:13px; color:var(--ink-soft); }
  .depense-amount{ font-family:var(--font-display); font-size:15px; color:var(--coral-dark); }
  .depense-right{ display:flex; align-items:center; gap:10px; }

  .muted{ color:var(--ink-soft); font-size:13px; }
  .empty-state{
    border:2px dashed var(--line); border-radius:8px; padding:28px 16px;
    text-align:center; color:var(--ink-soft); font-size:13px;
  }

  /* ---------- Résumé tab ---------- */
  .resume-grid{ display:grid; grid-template-columns:1fr 1.3fr; gap:20px; }
  @media (max-width:760px){ .resume-grid{ grid-template-columns:1fr; } }
  .breakdown-row{ margin-bottom:12px; }
  .breakdown-row-top{ display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px; }
  .breakdown-bar-bg{ background:var(--line); border-radius:4px; height:8px; overflow:hidden; }
  .breakdown-bar-fill{ background:var(--coral-dark); height:100%; border-radius:4px; }

  table.historique{ width:100%; border-collapse:collapse; font-size:13px; }
  table.historique th{
    text-align:left; font-family:var(--font-mono); font-size:11px; text-transform:uppercase;
    color:var(--ink-soft); padding:6px 8px; border-bottom:1px solid var(--line);
  }
  table.historique td{ padding:8px; border-bottom:1px solid var(--line); }
  table.historique tr.hrow{ cursor:pointer; }
  table.historique tr.hrow:hover{ background:#f7f1de; }
  td.num{ font-family:var(--font-mono); text-align:right; }
  td.pos{ color:var(--sage-dark); }
  td.neg{ color:var(--coral-dark); }

  /* ---------- Menu ---------- */
  .plat-card{
    background:var(--paper); border:1px solid var(--line); border-radius:8px;
    padding:14px 16px; margin-bottom:10px;
  }
  .plat-row-top{ display:flex; justify-content:space-between; align-items:center; gap:10px; }
  .plat-name{ font-weight:700; font-size:15px; }
  .plat-price{ font-family:var(--font-display); font-size:16px; color:var(--amber-dark); margin-top:4px; }
  .plat-price.inactive{ color:var(--ink-soft); text-decoration:line-through; }
  .plat-badge{
    font-family:var(--font-mono); font-size:10px; text-transform:uppercase;
    padding:2px 8px; border-radius:20px; background:var(--board); color:var(--paper);
  }
  .plat-badge.off{ background:var(--line); color:var(--ink-soft); }
  .plat-actions{ display:flex; gap:8px; margin-top:10px; flex-wrap:wrap; }
  .plat-actions button{
    font-family:var(--font-body); font-size:12px; font-weight:600; border-radius:6px;
    padding:6px 10px; cursor:pointer; border:1px solid var(--line); background:#fff; color:var(--ink);
  }
  .plat-actions button:hover{ background:#f6f0dd; }
  .plat-actions button.danger{ color:var(--coral-dark); border-color:#eccac2; }
  .plat-edit-row{ display:flex; gap:8px; margin-top:10px; align-items:center; }
  .plat-edit-row input{
    flex:1; padding:8px; border:1px solid var(--line); border-radius:6px; font-family:var(--font-body);
  }
  .plat-history{ margin-top:10px; font-size:12px; color:var(--ink-soft); }
  .plat-history summary{
    cursor:pointer; font-family:var(--font-mono); font-size:11px;
    text-transform:uppercase; letter-spacing:.04em;
  }
  .plat-history ul{ margin:6px 0 0; padding-left:18px; }

  /* ---------- Toast ---------- */
  .toast{
    position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
    background:var(--board); color:var(--paper); padding:12px 18px; border-radius:8px;
    font-size:13px; z-index:50; box-shadow:0 6px 18px rgba(0,0,0,.25);
  }
  .toast.error{ background:var(--coral-dark); }
</style>
</head>
<body>

<div id="toast" class="toast" hidden></div>

<header class="topbar">
  <div class="topbar-inner">
    <div class="brand">
      <span class="brand-eyebrow">Cantine scolaire</span>
      <h1>Tickets &amp; caisse</h1>
    </div>
    <div class="date-nav">
      <button id="prevDay" class="icon-btn" aria-label="Jour précédent">‹</button>
      <input type="date" id="dateInput" aria-label="Date affichée">
      <button id="nextDay" class="icon-btn" aria-label="Jour suivant">›</button>
      <button id="todayBtn" class="ghost-btn">Aujourd'hui</button>
    </div>
  </div>
</header>

<div class="summary-strip">
  <div class="stat">
    <span class="stat-label">Plats servis</span>
    <span class="stat-value" id="statPlats">0</span>
  </div>
  <div class="stat">
    <span class="stat-label">Recettes (CA)</span>
    <span class="stat-value amber" id="statCA">0 Ar</span>
  </div>
  <div class="stat">
    <span class="stat-label">Dépenses</span>
    <span class="stat-value coral" id="statDep">0 Ar</span>
  </div>
  <div class="stat highlight">
    <span class="stat-label">Bénéfice</span>
    <span class="stat-value sage" id="statBenef">0 Ar</span>
  </div>
</div>

<nav class="tabs">
  <button class="tab-btn active" data-tab="tickets">Tickets</button>
  <button class="tab-btn" data-tab="menu">Menu</button>
  <button class="tab-btn" data-tab="depenses">Dépenses</button>
  <button class="tab-btn" data-tab="resume">Résumé &amp; historique</button>
</nav>

<main class="container">

  <section id="panel-tickets" class="panel active">
    <div class="split">
      <form id="ticketForm" class="card form-card ticket-card">
        <h2>Nouveau ticket</h2>
        <label>Numéro de ticket
          <input type="text" id="ticketNumero" required>
        </label>
        <label>Nom de l'élève
          <input type="text" id="ticketClient" required placeholder="ex. Rakoto Hery">
        </label>
        <label>Classe
          <input type="text" id="ticketClasse" required placeholder="ex. CM2 B">
        </label>
        <label>Plat
          <select id="ticketPlatSelect"></select>
        </label>
        <label id="ticketPlatCustomLabel" hidden>Nom du plat
          <input type="text" id="ticketPlatCustom" placeholder="ex. Riz + poulet">
        </label>
        <label>Prix (Ar)
          <input type="number" id="ticketPrix" required min="0" step="100" placeholder="ex. 2000">
        </label>
        <button type="submit" class="btn amber-btn">Émettre le ticket</button>
      </form>
      <div class="list-col">
        <div class="list-header">
          <h2>Tickets du jour <span id="ticketCount" class="count-pill">0</span></h2>
          <button id="refreshTickets" class="ghost-btn small">Actualiser</button>
        </div>
        <div id="ticketList" class="ticket-list"></div>
      </div>
    </div>
  </section>

  <section id="panel-menu" class="panel">
    <div class="split">
      <form id="platForm" class="card form-card">
        <h2>Ajouter un plat</h2>
        <label>Nom du plat
          <input type="text" id="platNom" required placeholder="ex. Riz + poulet">
        </label>
        <label>Prix de base (Ar)
          <input type="number" id="platPrixBase" required min="0" step="100" placeholder="ex. 2000">
        </label>
        <button type="submit" class="btn amber-btn">Ajouter au menu</button>
      </form>
      <div class="list-col">
        <div class="list-header">
          <h2>Plats du menu <span id="platCount" class="count-pill">0</span></h2>
          <button id="refreshMenu" class="ghost-btn small">Actualiser</button>
        </div>
        <div id="platList"></div>
      </div>
    </div>
  </section>

  <section id="panel-depenses" class="panel">
    <div class="split">
      <form id="depenseForm" class="card form-card">
        <h2>Nouvelle dépense</h2>
        <label>Catégorie
          <select id="depenseCategorie"></select>
        </label>
        <label id="customCatLabel" hidden>Nom de la nouvelle catégorie
          <input type="text" id="depenseCategorieCustom" placeholder="ex. Gaz">
        </label>
        <label>Montant (Ar)
          <input type="number" id="depenseMontant" required min="0" step="100" placeholder="ex. 15000">
        </label>
        <label>Description <span class="optional">(facultatif)</span>
          <input type="text" id="depenseDescription" placeholder="ex. Sac de riz 50kg">
        </label>
        <button type="submit" class="btn coral-btn">Enregistrer la dépense</button>
      </form>
      <div class="list-col">
        <div class="list-header">
          <h2>Dépenses du jour <span id="depenseCount" class="count-pill">0</span></h2>
          <button id="refreshDepenses" class="ghost-btn small">Actualiser</button>
        </div>
        <div id="depenseList" class="depense-list"></div>
      </div>
    </div>
  </section>

  <section id="panel-resume" class="panel">
    <div class="resume-grid">
      <div class="card">
        <h2>Répartition des dépenses — <span id="resumeDateLabel"></span></h2>
        <div id="categoryBreakdown"></div>
      </div>
      <div class="card">
        <h2>Historique (jours récents)</h2>
        <div id="historiqueTable"></div>
      </div>
    </div>
  </section>

</main>

<script>
(function(){
  "use strict";

  // ---- Netlify storage client -------------------------------------------
  // Talks to /.netlify/functions/storage, which persists everything in a
  // shared Netlify Blobs store. Mimics the get/set/delete/list shape the
  // rest of this file already expects, so nothing else below needs to change.
  var STORAGE_ENDPOINT = '/.netlify/functions/storage';

  async function callStorage(payload){
    var res = await fetch(STORAGE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if(!res.ok) throw new Error('Storage request failed: ' + res.status);
    return res.json();
  }

  window.storage = {
    get: async function(key){
      var data = await callStorage({ action:'get', key: key });
      if(data.value === null || data.value === undefined){
        throw new Error('Key not found: ' + key);
      }
      return { key: key, value: data.value, shared: true };
    },
    set: async function(key, value){
      var data = await callStorage({ action:'set', key: key, value: value });
      return data.ok ? { key: key, value: value, shared: true } : null;
    },
    delete: async function(key){
      var data = await callStorage({ action:'delete', key: key });
      return data.ok ? { key: key, deleted: true, shared: true } : null;
    },
    list: async function(prefix){
      var data = await callStorage({ action:'list', prefix: prefix || '' });
      return { keys: data.keys || [], prefix: prefix, shared: true };
    }
  };
  // -------------------------------------------------------------------------

  var currentDate = todayStr();
  var currentTab = 'tickets';
  var dayCache = { tickets: [], depenses: [] };
  var categories = ['Achats alimentaires','Salaires','Entretien','Transport','Autre'];
  var menuCache = [];
  var historiqueLoaded = false;
  var toastTimer = null;

  // ---------- utils ----------
  function todayStr(){
    var d = new Date();
    var m = String(d.getMonth()+1).padStart(2,'0');
    var day = String(d.getDate()).padStart(2,'0');
    return d.getFullYear()+'-'+m+'-'+day;
  }
  function shiftDate(dateStr, delta){
    var d = new Date(dateStr+'T00:00:00');
    d.setDate(d.getDate()+delta);
    var m = String(d.getMonth()+1).padStart(2,'0');
    var day = String(d.getDate()).padStart(2,'0');
    return d.getFullYear()+'-'+m+'-'+day;
  }
  function genId(){
    return Date.now().toString(36) + Math.random().toString(36).slice(2,8);
  }
  function fmtMoney(n){
    return (Number(n)||0).toLocaleString('fr-FR') + ' Ar';
  }
  function fmtDateLabel(dateStr){
    var d = new Date(dateStr+'T00:00:00');
    var s = d.toLocaleDateString('fr-FR',{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function escapeHtml(str){
    return String(str==null?'':str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function showToast(msg, isError){
    var el = document.getElementById('toast');
    el.textContent = msg;
    el.className = 'toast' + (isError ? ' error' : '');
    el.hidden = false;
    if(toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ el.hidden = true; }, 3200);
  }

  // ---------- storage wrappers ----------
  async function safeGet(key, shared){
    try{ var r = await window.storage.get(key, shared); return r ? r.value : null; }
    catch(e){ return null; }
  }
  async function safeSet(key, value, shared){
    try{
      var r = await window.storage.set(key, value, shared);
      if(!r){ showToast("Échec de l'enregistrement, réessayez.", true); return false; }
      return true;
    }catch(e){ showToast("Échec de l'enregistrement, réessayez.", true); return false; }
  }
  async function safeDelete(key, shared){
    try{ await window.storage.delete(key, shared); return true; }
    catch(e){ showToast('Échec de la suppression.', true); return false; }
  }
  async function safeList(prefix, shared){
    try{ var r = await window.storage.list(prefix, shared); return (r && r.keys) ? r.keys : []; }
    catch(e){ return []; }
  }

  // ---------- data loading ----------
  async function loadDay(dateStr){
    var ticketKeys = await safeList('ticket:' + dateStr + ':', true);
    var depenseKeys = await safeList('depense:' + dateStr + ':', true);

    var ticketVals = await Promise.all(ticketKeys.map(async function(k){
      var v = await safeGet(k, true);
      if(!v) return null;
      try{ var obj = JSON.parse(v); obj._key = k; return obj; }catch(e){ return null; }
    }));
    var depenseVals = await Promise.all(depenseKeys.map(async function(k){
      var v = await safeGet(k, true);
      if(!v) return null;
      try{ var obj = JSON.parse(v); obj._key = k; return obj; }catch(e){ return null; }
    }));

    var tickets = ticketVals.filter(Boolean).sort(function(a,b){ return (b.ts||0)-(a.ts||0); });
    var depenses = depenseVals.filter(Boolean).sort(function(a,b){ return (b.ts||0)-(a.ts||0); });
    return { tickets: tickets, depenses: depenses };
  }

  async function loadCategories(){
    var v = await safeGet('categories-depenses', true);
    if(v){
      try{
        var arr = JSON.parse(v);
        if(Array.isArray(arr) && arr.length) categories = arr;
      }catch(e){}
    }
    populateCategorySelect();
  }
  async function persistCategory(cat){
    if(categories.indexOf(cat) === -1){
      categories.push(cat);
      await safeSet('categories-depenses', JSON.stringify(categories), true);
      populateCategorySelect();
    }
  }
  function populateCategorySelect(){
    var sel = document.getElementById('depenseCategorie');
    var current = sel.value;
    sel.innerHTML = categories.map(function(c){
      return '<option value="'+escapeHtml(c)+'">'+escapeHtml(c)+'</option>';
    }).join('') + '<option value="__custom__">+ Nouvelle catégorie…</option>';
    if(current && categories.indexOf(current) !== -1) sel.value = current;
  }

  // ---------- menu (plats) ----------
  async function loadMenu(){
    var keys = await safeList('plat:', true);
    var vals = await Promise.all(keys.map(async function(k){
      var v = await safeGet(k, true);
      if(!v) return null;
      try{ var obj = JSON.parse(v); obj._key = k; return obj; }catch(e){ return null; }
    }));
    menuCache = vals.filter(Boolean).sort(function(a,b){ return (a.nom||'').localeCompare(b.nom||'', 'fr'); });
    renderMenu();
    populatePlatSelect();
  }

  function populatePlatSelect(){
    var sel = document.getElementById('ticketPlatSelect');
    var current = sel.value;
    var actifs = menuCache.filter(function(d){ return d.actif !== false; });
    var opts = actifs.map(function(d){
      return '<option value="'+escapeHtml(d.id)+'">'+escapeHtml(d.nom)+' — '+fmtMoney(d.prixBase)+'</option>';
    }).join('');
    sel.innerHTML = opts + '<option value="__custom__">Autre (saisie libre)</option>';
    if(current && (actifs.some(function(d){ return d.id === current; }) || current === '__custom__')){
      sel.value = current;
    } else if(actifs.length){
      sel.value = actifs[0].id;
    }
    sel.dispatchEvent(new Event('change'));
  }

  function renderMenu(){
    document.getElementById('platCount').textContent = menuCache.length;
    var box = document.getElementById('platList');
    if(!menuCache.length){
      box.innerHTML = '<div class="empty-state">Aucun plat pour l\'instant. Ajoutez votre premier plat au menu.</div>';
      return;
    }
    box.innerHTML = menuCache.map(function(d){
      var hist = (d.history || []).slice().reverse();
      var histHtml = hist.length ? (
        '<details class="plat-history"><summary>Historique des prix ('+hist.length+')</summary><ul>' +
        hist.map(function(h){
          var dt = new Date(h.at);
          return '<li>'+fmtMoney(h.prix)+' — '+dt.toLocaleDateString('fr-FR')+'</li>';
        }).join('') + '</ul></details>'
      ) : '';
      return '' +
        '<div class="plat-card">' +
          '<div class="plat-row-top">' +
            '<span class="plat-name">'+escapeHtml(d.nom)+'</span>' +
            '<span class="plat-badge '+(d.actif===false?'off':'')+'">'+(d.actif===false?'Inactif':'Actif')+'</span>' +
          '</div>' +
          '<div class="plat-price '+(d.actif===false?'inactive':'')+'">'+fmtMoney(d.prixBase)+'</div>' +
          '<div class="plat-actions">' +
            '<button data-action="edit-price" data-key="'+escapeHtml(d._key)+'">Modifier le prix</button>' +
            '<button data-action="toggle-actif" data-key="'+escapeHtml(d._key)+'">'+(d.actif===false?'Réactiver':'Désactiver')+'</button>' +
            '<button class="danger" data-action="del-plat" data-key="'+escapeHtml(d._key)+'">Supprimer</button>' +
          '</div>' +
          '<div class="edit-price-slot" data-slot="'+escapeHtml(d._key)+'"></div>' +
          histHtml +
        '</div>';
    }).join('');
  }

  async function addDish(nom, prix){
    var id = genId();
    var key = 'plat:' + id;
    var record = { id:id, nom:nom, prixBase:prix, actif:true, ts:Date.now(), updatedTs:Date.now(), history:[{prix:prix, at:Date.now()}] };
    var ok = await safeSet(key, JSON.stringify(record), true);
    if(ok){
      record._key = key;
      menuCache.push(record);
      menuCache.sort(function(a,b){ return (a.nom||'').localeCompare(b.nom||'', 'fr'); });
      renderMenu();
      populatePlatSelect();
    }
    return ok;
  }

  async function saveDish(dish){
    var clean = { id:dish.id, nom:dish.nom, prixBase:dish.prixBase, actif:dish.actif, ts:dish.ts, updatedTs:Date.now(), history:dish.history||[] };
    var ok = await safeSet(dish._key, JSON.stringify(clean), true);
    if(ok) dish.updatedTs = clean.updatedTs;
    return ok;
  }

  // ---------- rendering ----------
  function updateSummary(){
    var nbPlats = dayCache.tickets.length;
    var ca = dayCache.tickets.reduce(function(s,t){ return s + (Number(t.prix)||0); }, 0);
    var totalDep = dayCache.depenses.reduce(function(s,d){ return s + (Number(d.montant)||0); }, 0);
    var benefice = ca - totalDep;

    document.getElementById('statPlats').textContent = nbPlats;
    document.getElementById('statCA').textContent = fmtMoney(ca);
    document.getElementById('statDep').textContent = fmtMoney(totalDep);
    var benefEl = document.getElementById('statBenef');
    benefEl.textContent = fmtMoney(benefice);
    benefEl.classList.remove('coral','sage');
    benefEl.classList.add(benefice < 0 ? 'coral' : 'sage');
  }

  function renderTickets(){
    var list = document.getElementById('ticketList');
    document.getElementById('ticketCount').textContent = dayCache.tickets.length;
    if(!dayCache.tickets.length){
      list.innerHTML = '<div class="empty-state">Aucun ticket enregistré pour cette date. Le premier ticket émis apparaîtra ici.</div>';
      return;
    }
    list.innerHTML = dayCache.tickets.map(function(t){
      return '' +
        '<div class="ticket-stub" data-key="'+escapeHtml(t._key)+'">' +
          '<div class="ticket-row-top">' +
            '<span class="ticket-num">N° '+escapeHtml(t.numero)+'</span>' +
            '<span class="ticket-time">'+escapeHtml(t.heure||'')+'</span>' +
          '</div>' +
          '<div class="ticket-client">'+escapeHtml(t.client)+'</div>' +
          '<div class="ticket-meta">' +
            '<span class="class-pill">'+escapeHtml(t.classe)+'</span>' +
            '<span class="ticket-plat">'+escapeHtml(t.plat)+'</span>' +
          '</div>' +
          '<div class="ticket-row-bottom">' +
            '<span class="ticket-price">'+fmtMoney(t.prix)+'</span>' +
            '<button class="del-btn" data-action="del-ticket" data-key="'+escapeHtml(t._key)+'" aria-label="Supprimer ce ticket">×</button>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  function renderDepenses(){
    var list = document.getElementById('depenseList');
    document.getElementById('depenseCount').textContent = dayCache.depenses.length;
    if(!dayCache.depenses.length){
      list.innerHTML = '<div class="empty-state">Aucune dépense enregistrée pour cette date.</div>';
      return;
    }
    list.innerHTML = dayCache.depenses.map(function(d){
      return '' +
        '<div class="depense-row" data-key="'+escapeHtml(d._key)+'">' +
          '<div class="depense-main">' +
            '<span class="depense-cat">'+escapeHtml(d.categorie)+'</span>' +
            (d.description ? '<span class="depense-desc">'+escapeHtml(d.description)+'</span>' : '') +
            '<span class="ticket-time">'+escapeHtml(d.heure||'')+'</span>' +
          '</div>' +
          '<div class="depense-right">' +
            '<span class="depense-amount">'+fmtMoney(d.montant)+'</span>' +
            '<button class="del-btn" data-action="del-depense" data-key="'+escapeHtml(d._key)+'" aria-label="Supprimer cette dépense">×</button>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  function renderBreakdown(){
    document.getElementById('resumeDateLabel').textContent = fmtDateLabel(currentDate);
    var box = document.getElementById('categoryBreakdown');
    if(!dayCache.depenses.length){
      box.innerHTML = '<div class="empty-state">Aucune dépense ce jour-là.</div>';
      return;
    }
    var totals = {};
    dayCache.depenses.forEach(function(d){
      var cat = d.categorie || 'Autre';
      totals[cat] = (totals[cat]||0) + (Number(d.montant)||0);
    });
    var entries = Object.keys(totals).map(function(k){ return [k, totals[k]]; }).sort(function(a,b){ return b[1]-a[1]; });
    var max = entries[0][1] || 1;
    box.innerHTML = entries.map(function(e){
      var pct = Math.max(4, Math.round((e[1]/max)*100));
      return '' +
        '<div class="breakdown-row">' +
          '<div class="breakdown-row-top"><span>'+escapeHtml(e[0])+'</span><span>'+fmtMoney(e[1])+'</span></div>' +
          '<div class="breakdown-bar-bg"><div class="breakdown-bar-fill" style="width:'+pct+'%"></div></div>' +
        '</div>';
    }).join('');
  }

  function renderAll(){
    updateSummary();
    renderTickets();
    renderDepenses();
    if(currentTab === 'resume') renderBreakdown();
  }

  // ---------- historique ----------
  async function loadHistorique(){
    var box = document.getElementById('historiqueTable');
    box.innerHTML = '<p class="muted">Chargement de l\'historique…</p>';
    var tKeys = await safeList('ticket:', true);
    var dKeys = await safeList('depense:', true);
    var dateSet = {};
    tKeys.concat(dKeys).forEach(function(k){
      var parts = k.split(':');
      if(parts[1]) dateSet[parts[1]] = true;
    });
    var dates = Object.keys(dateSet).sort().reverse().slice(0, 14);
    if(!dates.length){
      box.innerHTML = '<div class="empty-state">Aucune donnée pour le moment. Émettez un ticket pour commencer.</div>';
      return;
    }
    var rows = await Promise.all(dates.map(async function(d){
      if(d === currentDate){
        var ca = dayCache.tickets.reduce(function(s,t){ return s+(Number(t.prix)||0); },0);
        var dep = dayCache.depenses.reduce(function(s,x){ return s+(Number(x.montant)||0); },0);
        return { date:d, nb:dayCache.tickets.length, ca:ca, dep:dep };
      }
      var data = await loadDay(d);
      var ca2 = data.tickets.reduce(function(s,t){ return s+(Number(t.prix)||0); },0);
      var dep2 = data.depenses.reduce(function(s,x){ return s+(Number(x.montant)||0); },0);
      return { date:d, nb:data.tickets.length, ca:ca2, dep:dep2 };
    }));
    renderHistoriqueRows(rows);
    historiqueLoaded = true;
  }

  function renderHistoriqueRows(rows){
    var box = document.getElementById('historiqueTable');
    var html = '<table class="historique"><thead><tr>' +
      '<th>Date</th><th class="num">Plats</th><th class="num">Recettes</th><th class="num">Dépenses</th><th class="num">Bénéfice</th>' +
      '</tr></thead><tbody>';
    rows.forEach(function(r){
      var benef = r.ca - r.dep;
      var d = new Date(r.date+'T00:00:00');
      var label = d.toLocaleDateString('fr-FR',{ day:'2-digit', month:'short', year:'numeric' });
      html += '<tr class="hrow" data-date="'+r.date+'">' +
        '<td>'+label+(r.date===currentDate ? ' <span class="muted">(jour affiché)</span>' : '')+'</td>' +
        '<td class="num">'+r.nb+'</td>' +
        '<td class="num">'+fmtMoney(r.ca)+'</td>' +
        '<td class="num">'+fmtMoney(r.dep)+'</td>' +
        '<td class="num '+(benef<0?'neg':'pos')+'">'+fmtMoney(benef)+'</td>' +
        '</tr>';
    });
    html += '</tbody></table>';
    box.innerHTML = html;
    box.querySelectorAll('tr.hrow').forEach(function(tr){
      tr.addEventListener('click', function(){
        currentDate = tr.getAttribute('data-date');
        document.getElementById('dateInput').value = currentDate;
        switchTab('tickets');
        refreshCurrentDay();
      });
    });
  }

  // ---------- actions ----------
  function suggestNextTicketNumero(){
    document.getElementById('ticketNumero').value = String(dayCache.tickets.length + 1);
  }

  async function refreshCurrentDay(showLoading){
    if(showLoading){
      document.getElementById('ticketList').innerHTML = '<p class="muted">Chargement…</p>';
      document.getElementById('depenseList').innerHTML = '<p class="muted">Chargement…</p>';
    }
    dayCache = await loadDay(currentDate);
    renderAll();
    if(currentTab === 'tickets') suggestNextTicketNumero();
    if(currentTab === 'resume') loadHistorique();
  }

  function switchTab(tab){
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-tab') === tab);
    });
    document.querySelectorAll('.panel').forEach(function(p){
      p.classList.toggle('active', p.id === 'panel-' + tab);
    });
    if(tab === 'resume'){
      renderBreakdown();
      loadHistorique();
    }
    if(tab === 'menu'){
      loadMenu();
    }
  }

  document.getElementById('ticketForm').addEventListener('submit', async function(e){
    e.preventDefault();
    var numero = document.getElementById('ticketNumero').value.trim();
    var client = document.getElementById('ticketClient').value.trim();
    var classe = document.getElementById('ticketClasse').value.trim();
    var platSelectVal = document.getElementById('ticketPlatSelect').value;
    var plat;
    if(platSelectVal === '__custom__'){
      plat = document.getElementById('ticketPlatCustom').value.trim();
    } else {
      var dishSel = menuCache.find(function(d){ return d.id === platSelectVal; });
      plat = dishSel ? dishSel.nom : '';
    }
    var prix = Number(document.getElementById('ticketPrix').value);
    if(!numero || !client || !classe || !plat || !(prix >= 0)){
      showToast('Merci de remplir tous les champs.', true);
      return;
    }
    var now = new Date();
    var record = {
      numero: numero, client: client, classe: classe, plat: plat, prix: prix,
      heure: now.toLocaleTimeString('fr-FR',{hour:'2-digit', minute:'2-digit'}),
      ts: now.getTime()
    };
    var key = 'ticket:' + currentDate + ':' + genId();
    var ok = await safeSet(key, JSON.stringify(record), true);
    if(ok){
      record._key = key;
      dayCache.tickets.unshift(record);
      renderTickets();
      updateSummary();
      document.getElementById('ticketForm').reset();
      document.getElementById('ticketPlatCustomLabel').hidden = true;
      populatePlatSelect();
      suggestNextTicketNumero();
      showToast('Ticket enregistré.');
    }
  });

  document.getElementById('ticketPlatSelect').addEventListener('change', function(){
    var val = this.value;
    var customLabel = document.getElementById('ticketPlatCustomLabel');
    if(val === '__custom__'){
      customLabel.hidden = false;
    } else {
      customLabel.hidden = true;
      var dish = menuCache.find(function(d){ return d.id === val; });
      if(dish){
        document.getElementById('ticketPrix').value = dish.prixBase;
      }
    }
  });

  document.getElementById('platForm').addEventListener('submit', async function(e){
    e.preventDefault();
    var nom = document.getElementById('platNom').value.trim();
    var prix = Number(document.getElementById('platPrixBase').value);
    if(!nom || !(prix >= 0)){
      showToast('Merci de renseigner un nom et un prix.', true);
      return;
    }
    var ok = await addDish(nom, prix);
    if(ok){
      document.getElementById('platForm').reset();
      showToast('Plat ajouté au menu.');
    }
  });

  document.getElementById('platList').addEventListener('click', async function(e){
    var editBtn = e.target.closest('[data-action="edit-price"]');
    var toggleBtn = e.target.closest('[data-action="toggle-actif"]');
    var delBtn = e.target.closest('[data-action="del-plat"]');
    var saveBtn = e.target.closest('[data-action="save-price"]');
    var cancelBtn = e.target.closest('[data-action="cancel-price"]');

    if(editBtn){
      var key = editBtn.getAttribute('data-key');
      var dish = menuCache.find(function(d){ return d._key === key; });
      var slot = document.querySelector('.edit-price-slot[data-slot="'+CSS.escape(key)+'"]');
      if(dish && slot){
        slot.innerHTML = '<div class="plat-edit-row">' +
          '<input type="number" min="0" step="100" value="'+dish.prixBase+'" id="editPrice_'+dish.id+'">' +
          '<button type="button" data-action="save-price" data-key="'+escapeHtml(key)+'" class="ghost-btn small">Enregistrer</button>' +
          '<button type="button" data-action="cancel-price" data-key="'+escapeHtml(key)+'" class="ghost-btn small">Annuler</button>' +
          '</div>';
      }
      return;
    }
    if(cancelBtn){
      var key2 = cancelBtn.getAttribute('data-key');
      var slot2 = document.querySelector('.edit-price-slot[data-slot="'+CSS.escape(key2)+'"]');
      if(slot2) slot2.innerHTML = '';
      return;
    }
    if(saveBtn){
      var key3 = saveBtn.getAttribute('data-key');
      var dish3 = menuCache.find(function(d){ return d._key === key3; });
      var input = dish3 ? document.getElementById('editPrice_'+dish3.id) : null;
      if(dish3 && input){
        var newPrix = Number(input.value);
        if(!(newPrix >= 0)){ showToast('Prix invalide.', true); return; }
        dish3.history = dish3.history || [];
        dish3.history.push({ prix:newPrix, at:Date.now() });
        dish3.prixBase = newPrix;
        var ok3 = await saveDish(dish3);
        if(ok3){
          renderMenu();
          populatePlatSelect();
          showToast('Prix mis à jour.');
        }
      }
      return;
    }
    if(toggleBtn){
      var key4 = toggleBtn.getAttribute('data-key');
      var dish4 = menuCache.find(function(d){ return d._key === key4; });
      if(dish4){
        dish4.actif = (dish4.actif === false);
        var ok4 = await saveDish(dish4);
        if(ok4){
          renderMenu();
          populatePlatSelect();
          showToast(dish4.actif ? 'Plat réactivé.' : 'Plat désactivé.');
        }
      }
      return;
    }
    if(delBtn){
      var key5 = delBtn.getAttribute('data-key');
      if(!confirm('Supprimer définitivement ce plat du menu ? Les tickets déjà émis ne seront pas modifiés.')) return;
      var ok5 = await safeDelete(key5, true);
      if(ok5){
        menuCache = menuCache.filter(function(d){ return d._key !== key5; });
        renderMenu();
        populatePlatSelect();
        showToast('Plat supprimé du menu.');
      }
      return;
    }
  });

  document.getElementById('refreshMenu').addEventListener('click', function(){ loadMenu(); });

  document.getElementById('depenseCategorie').addEventListener('change', function(){
    document.getElementById('customCatLabel').hidden = (this.value !== '__custom__');
  });

  document.getElementById('depenseForm').addEventListener('submit', async function(e){
    e.preventDefault();
    var sel = document.getElementById('depenseCategorie');
    var categorie = sel.value;
    if(categorie === '__custom__'){
      categorie = document.getElementById('depenseCategorieCustom').value.trim();
    }
    var montant = Number(document.getElementById('depenseMontant').value);
    var description = document.getElementById('depenseDescription').value.trim();
    if(!categorie || !(montant >= 0)){
      showToast('Merci de préciser une catégorie et un montant.', true);
      return;
    }
    var now = new Date();
    var record = {
      categorie: categorie, montant: montant, description: description,
      heure: now.toLocaleTimeString('fr-FR',{hour:'2-digit', minute:'2-digit'}),
      ts: now.getTime()
    };
    var key = 'depense:' + currentDate + ':' + genId();
    var ok = await safeSet(key, JSON.stringify(record), true);
    if(ok){
      record._key = key;
      dayCache.depenses.unshift(record);
      renderDepenses();
      updateSummary();
      if(currentTab === 'resume') renderBreakdown();
      await persistCategory(categorie);
      document.getElementById('depenseForm').reset();
      document.getElementById('customCatLabel').hidden = true;
      showToast('Dépense enregistrée.');
    }
  });

  document.getElementById('ticketList').addEventListener('click', async function(e){
    var btn = e.target.closest('[data-action="del-ticket"]');
    if(!btn) return;
    var key = btn.getAttribute('data-key');
    if(!confirm('Supprimer ce ticket ?')) return;
    var ok = await safeDelete(key, true);
    if(ok){
      dayCache.tickets = dayCache.tickets.filter(function(t){ return t._key !== key; });
      renderTickets();
      updateSummary();
      showToast('Ticket supprimé.');
    }
  });

  document.getElementById('depenseList').addEventListener('click', async function(e){
    var btn = e.target.closest('[data-action="del-depense"]');
    if(!btn) return;
    var key = btn.getAttribute('data-key');
    if(!confirm('Supprimer cette dépense ?')) return;
    var ok = await safeDelete(key, true);
    if(ok){
      dayCache.depenses = dayCache.depenses.filter(function(d){ return d._key !== key; });
      renderDepenses();
      updateSummary();
      if(currentTab === 'resume') renderBreakdown();
      showToast('Dépense supprimée.');
    }
  });

  document.querySelectorAll('.tab-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ switchTab(btn.getAttribute('data-tab')); });
  });

  document.getElementById('dateInput').addEventListener('change', function(){
    currentDate = this.value || todayStr();
    refreshCurrentDay(true);
  });
  document.getElementById('prevDay').addEventListener('click', function(){
    currentDate = shiftDate(currentDate, -1);
    document.getElementById('dateInput').value = currentDate;
    refreshCurrentDay(true);
  });
  document.getElementById('nextDay').addEventListener('click', function(){
    currentDate = shiftDate(currentDate, 1);
    document.getElementById('dateInput').value = currentDate;
    refreshCurrentDay(true);
  });
  document.getElementById('todayBtn').addEventListener('click', function(){
    currentDate = todayStr();
    document.getElementById('dateInput').value = currentDate;
    refreshCurrentDay(true);
  });
  document.getElementById('refreshTickets').addEventListener('click', function(){ refreshCurrentDay(true); });
  document.getElementById('refreshDepenses').addEventListener('click', function(){ refreshCurrentDay(true); });

  // silent auto-refresh so several cashiers stay in sync
  setInterval(function(){
    if(document.visibilityState === 'visible'){
      refreshCurrentDay(false);
    }
  }, 25000);

  // ---------- init ----------
  document.getElementById('dateInput').value = currentDate;
  Promise.all([loadCategories(), loadMenu()]).then(function(){
    return refreshCurrentDay(true);
  });

})();
</script>
</body>
</html>
