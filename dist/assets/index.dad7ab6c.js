import{r as _,o as i,c as f,w as h,a as u,t as m,b as v,d as a,u as g,R as P,e as y,f as x,g as b,h as j}from"./vendor.8f115f5c.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};L();var d=(o,r)=>{const n=o.__vccOpts||o;for(const[c,e]of r)n[c]=e;return n};const N={props:["name","localPath"],methods:{isLocal:o=>o!==void 0}},I={key:1};function R(o,r,n,c,e,t){const l=_("RouterLink");return n.localPath!==void 0?(i(),f(l,{key:0,to:n.localPath},{default:h(()=>[v(m(n.name),1)]),_:1},8,["to"])):(i(),u("strong",I,m(n.name),1))}var s=d(N,[["render",R]]);const A={setup(o){return(r,n)=>(i(),u("nav",null,[a(s,{localPath:"/",name:"Informations"}),a(s,{localPath:"/discord",name:"Discord"}),a(s,{localPath:"/",name:"Projets"}),a(s,{localPath:"/",name:"\xC9v\xE9nements"}),a(s,{localPath:"/instagram",name:"Instagram"}),a(s,{localPath:"/mentions-legales",name:"Mentions L\xE9gales"})]))}};const k={setup(o){return(r,n)=>(i(),u("div",null,[a(g(P)),a(A)]))}};var w="/icon.png";const C={},S={src:w,id:"icon"};function D(o,r){return i(),u("img",S)}var E=d(C,[["render",D]]);const $={},q=y(`<h1> Mentions L\xE9gales </h1><section><h2> L&#39;association </h2><article><h3>Information sur l&#39;association</h3><pre>					<label> Nom exact : </label> <em> Projets et Coh\xE9sion en Informatique </em>
					<label> N\xB0 SIREN : </label> <em> 901640698 </em>
					<label> N\xB0 SIRET : </label> <em> 901 640 698 00014 </em>
					<label> N\xB0 RNA : </label> <em> W491019959 </em>
					<label> Code APE : </label> <em> 94.99Z </em> Autres organisations fonctionnant par adh\xE9sion volontaire
					<a href="https://journal-officiel-datadila.opendatasoft.com/api/v2/catalog/datasets/jo_associations/records?select=%2A&amp;where=numero_rna%20like%20%22W491019959%22&amp;limit=10&amp;offset=0&amp;lang=fr&amp;timezone=UTC"> D\xE9claration au journal officiel des associations (json)</a>
					<a href="https://entreprise.data.gouv.fr/api/rna/v1/id/W491019959"> Statut actuel aupr\xE8s du gouvernement (json)</a>
				</pre></article></section><section><h2> Site Web </h2><article><h3> \xC9diteur </h3><pre>Projet et Coh\xE9sion en Informatique, PC[i]
2 Boulevard de Lavoisier
49100 Angers, France
SIRET : 901 640 698 00014
Contact :
<a href="mailto:contact@projetcohesion.info"> contact@projetcohesion.info</a>
				</pre></article><article><h3>Directeur de publication</h3><pre>Mat\xE9o Grimaud (Pr\xE9sident)
<a href="mailto:presidence@projetcohesion.info"> presidence@projetcohesion.info</a>
				</pre></article><article><h3>Prestataire d&#39;H\xE9bergement</h3><pre>Pour pci.leria-etud.univ-angers.fr
Laboratoire d&#39;Etudes et de Recherche en Informatique d&#39;Angers (LERIA)
2 Boulevard de Lavoisier
49100 Angers, France
				</pre></article></section><section><h2> Donn\xE9es Personnelles </h2><article><h3> Droits sur vos donn\xE9es </h3><pre>Responsable des fichiers des donn\xE9es : Louis Euvrard (Responsable Projets)

Conform\xE9ment aux dispositions de la loi 78-17 du 6 janvier 1978 relative \xE0 l&#39;informatique, aux fichiers et aux libert\xE9s, l\u2019utilisateur dispose d\u2019un droit d\u2019acc\xE8s, de modification et de suppression des informations collect\xE9es par PC[i].

Pour exercer ce droit, il reviendra \xE0 l\u2019utilisateur d\u2019envoyer un message \xE0 l\u2019adresse suivante : 
<a href="mailto:contact@projetcohesion.info">contact@projetcohesion.info</a>
				</pre></article><article><h3> Stockage des Donn\xE9es Personnelles </h3><pre>Nous ne transmettons \xE0 aucun service externe les informations obtenues.

Les donn\xE9es sont par d\xE9fauts conserver un maximum de 30 jours apr\xE8s l&#39;\xE9v\xE9nements ou la fin de l&#39;adh\xE9sion.

Les donn\xE9es r\xE9colt\xE9s sont toujours r\xE9duites au minimum et l&#39;utilisateur en est toujours inform\xE9s.
				</pre></article><article><h3> Traitement des Donn\xE9es Personnelles </h3><pre>Nous ne transmettons \xE0 aucun service externe les informations issuent d&#39;\xE9ventuels traitement des donn\xE9es.

Seul les traitements n\xE9cessaires et pour lequel les personnes ont consenti est r\xE9alis\xE9.
				</pre></article></section>`,4),B=[q];function H(o,r){return i(),u("main",null,B)}var O=d($,[["render",H]]);const T=x({history:b("/"),routes:[{path:"/",name:"HomePage",component:E},{path:"/mentions-legales",name:"LegalPage",component:O},{path:"/discord",name:"Discord",redirect:()=>window.location.href="http://discord.projetcohesion.info"},{path:"/instagram",name:"Instagram",redirect:()=>window.location.href="https://instagram.com/projet.cohesion"}]}),p=j(k);p.use(T);p.mount("#app");
