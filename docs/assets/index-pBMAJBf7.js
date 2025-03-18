var k=Object.defineProperty;var h=n=>{throw TypeError(n)};var P=(n,e,t)=>e in n?k(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>P(n,typeof e!="symbol"?e+"":e,t),y=(n,e,t)=>e.has(n)||h("Cannot "+t);var g=(n,e,t)=>e.has(n)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var m=(n,e,t)=>(y(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();var c,d;const r=class r{constructor(e=5,t=0){g(this,c);this.limit=e,this.offset=t}get pokemonEndPoint(){return r.BASE_URL+r.POKE_URL}getPokemonData(){const e=this.pokemonEndPoint+`/?offset=${this.offset}&limit=${this.limit}"`;return fetch(e).then(t=>t.json()).then(t=>Promise.all(t.results.map(i=>m(this,c,d).call(this,i.url)))).catch(t=>console.log(t))}getSinglePokemon(e){return console.log(this.pokemonEndPoint),m(this,c,d).call(this,this.pokemonEndPoint+e)}getPokemonByType(e){const t=r.BASE_URL+r.TYPE_URL+e;return fetch(t).then(i=>i.json()).then(i=>Promise.all(i.pokemon.map(o=>m(this,c,d).call(this,o.pokemon.url)))).catch(i=>console.error(i))}nextPage(){const e=this.offset+this.limit;this.offset=e>1300?0:e,this.getPokemonData()}previousPage(){const e=this.offset-this.limit;this.offset=e<0?1300:e,this.getPokemonData()}};c=new WeakSet,d=function(e){return fetch(e).then(t=>t.json()).then(t=>t).catch(t=>console.error(t))},l(r,"BASE_URL","https://pokeapi.co/api/v2/"),l(r,"POKE_URL","pokemon/"),l(r,"TYPE_URL","type/");let f=r;const E=["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","stellar","unknown"];function L(n){E.forEach(e=>n.innerHTML+=C(e))}const C=n=>`<li><a class="type-link" href="/type.html?type=${n}">${n}</a></li>`;function u(n){console.log(n);const e=document.getElementById("dex-container");e.innerHTML="";for(const t of n){const i=document.createElement("div");i.classList.add("poke-container"),i.classList.add("pokeball-bg");const o=v(t.sprites.front_default),s=w(t.name);i.append(o,s),e.appendChild(i)}}function v(n){const e=document.createElement("div"),t=document.createElement("img");return t.src=n,t.classList.add("poke-img-container"),e.appendChild(t),e}function w(n){const e=document.createElement("div"),t=document.createElement("a");t.classList.add("pokemon-name"),t.href=`/detail.html?name=${n}`;const i=document.createTextNode(n);return t.appendChild(i),e.appendChild(t),e}const a=new f;L(document.getElementById("type-list"));function x(){a.getPokemonData().then(n=>u(n))}x();function D(){a.previousPage(),a.getPokemonData().then(n=>u(n))}window.previous=D;function N(){a.nextPage(),a.getPokemonData().then(n=>u(n))}window.next=N;
