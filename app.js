"use strict";
(() => {
 const $=s=>document.querySelector(s), money=n=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n/100);
 const labels={todos:'Todas as peças',corrente:'Correntes',pulseira:'Pulseiras',brinco:'Brincos',pingente:'Pingentes'};
 const key='neves-pedido-v1', byId=new Map(PRODUCTS.map(p=>[p.id,p]));
 let cart={},category='todos',detailProduct=null,trigger=null,timer;
 try{const saved=JSON.parse(localStorage.getItem(key)||'{}');for(const [id,q] of Object.entries(saved||{}))if(byId.has(id)&&Number.isInteger(q)&&q>0)cart[id]=Math.min(q,99);}catch{}
 const node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
 const name=p=>p.name+(p.length?' — '+p.length+' cm':'');
 const wa=text=>'https://wa.me/5511979833774?text='+encodeURIComponent(text);
 const entries=()=>Object.entries(cart).map(([id,q])=>({p:byId.get(id),q}));
 const total=()=>entries().reduce((s,{p,q})=>s+p.priceCents*q,0);
 const qty=()=>Object.values(cart).reduce((a,b)=>a+b,0);
 function message(){return ['Olá, Neves Pratas! Gostaria de confirmar este pedido:','',...entries().map(({p,q})=>`${q} × ${name(p)} (${p.id}) — ${money(p.priceCents*q)}`),'',`Subtotal: ${money(total())}`, 'Pode confirmar disponibilidade, frete e forma de pagamento?'].join('\n');}
 function save(){try{localStorage.setItem(key,JSON.stringify(cart));}catch{}updateCart();}
 function add(p){if((cart[p.id]||0)>=99){announce('Limite de 99 por peça.');return;}cart[p.id]=(cart[p.id]||0)+1;save();announce('Peça adicionada ao pedido.');}
 function announce(text){$('#notice').textContent=text;clearTimeout(timer);timer=setTimeout(()=>$('#notice').textContent='',2600);}
 function open(dialog,button){trigger=button;dialog.showModal();}
 document.querySelectorAll('dialog').forEach(d=>{d.querySelector('[data-close]').addEventListener('click',()=>d.close());d.addEventListener('close',()=>trigger?.focus());});
 function photo(p){const img=node('img');img.src=p.image;img.alt=name(p);img.loading='lazy';img.addEventListener('error',()=>{const fallback=node('span','fallback','Foto indisponível');img.replaceWith(fallback);},{once:true});return img;}
 function details(p,button){detailProduct=p;$('#detail-image').src=p.image;$('#detail-image').alt=name(p);$('#detail-title').textContent=name(p);$('#detail-code').textContent=p.id+' · '+labels[p.category];$('#detail-price').textContent=money(p.priceCents);$('#detail-note').textContent=p.category==='pingente'?'Pingente vendido sem corrente. Confirme as medidas no atendimento.':p.category==='brinco'?'Zircônia redonda. Confirme no atendimento se a venda é por unidade ou par.':p.length?`Comprimento: ${p.length} cm. Consulte os detalhes da peça pelo WhatsApp.`:'Consulte as medidas disponíveis pelo WhatsApp.';open($('#detail'),button);}
 $('#detail-add').addEventListener('click',()=>{if(detailProduct)add(detailProduct);});
 function render(){const search=$('#search').value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim(),length=$('#length').value;
 let list=PRODUCTS.filter(p=>(category==='todos'||p.category===category)&&(length==='todos'||p.length===Number(length))&&(name(p)+' '+p.id).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(search));
 if($('#sort').value!=='original')list.sort((a,b)=>($('#sort').value==='asc'?1:-1)*(a.priceCents-b.priceCents));
 $('#count').textContent=list.length+' '+(list.length===1?'peça':'peças');const fragment=document.createDocumentFragment();
 for(const p of list){const card=node('article','product'),button=node('button','photo');button.type='button';button.setAttribute('aria-label','Ver detalhes: '+name(p));button.append(photo(p));button.addEventListener('click',()=>details(p,button));const body=node('div','product-body');body.append(node('p','meta',p.id+(p.length?' · '+p.length+' cm':'')),node('h3','',p.name),node('p','price',money(p.priceCents)));const addButton=node('button','outline','Adicionar ao pedido');addButton.setAttribute('aria-label','Adicionar '+name(p)+' ao pedido');addButton.addEventListener('click',()=>add(p));body.append(addButton);card.append(button,body);fragment.append(card);}
 if(!list.length)fragment.append(node('p','empty','Nenhuma peça encontrada. Experimente outro nome ou filtro.'));$('#products').replaceChildren(fragment);}
 function select(cat){category=cat;$('#length').value='todos';$('#length').disabled=!['todos','corrente'].includes(cat);document.querySelectorAll('#tabs button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===cat)));render();}
 for(const [cat,label] of Object.entries(labels)){const b=node('button','',label);b.dataset.category=cat;b.setAttribute('aria-pressed',String(cat==='todos'));b.addEventListener('click',()=>select(cat));$('#tabs').append(b);}
 const picks={corrente:'NP-019',pulseira:'NP-055',brinco:'NP-067',pingente:'NP-074'};
 for(const [cat,id] of Object.entries(picks)){const b=node('button','category');b.setAttribute('aria-label','Explorar '+labels[cat]);b.append(photo({...byId.get(id),image:({corrente:'destaque-corrente.png',pulseira:'destaque-pulseira.png',brinco:'destaque-brincos.png',pingente:'destaque-pingente.png'})[cat]}));const title=node('span','',labels[cat]);title.append(node('span','','↗'));b.append(title);b.addEventListener('click',()=>{select(cat);$('#catalogo').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});$('#categories').append(b);}
 $('#hero-photo').src='destaque-pulseira.png';
 for(const event of ['input','change'])$('#search').addEventListener(event,render);$('#length').addEventListener('change',render);$('#sort').addEventListener('change',render);
 function updateCart(){const count=qty();$('#cart-count').textContent='('+count+')';$('#order-bar').hidden=!count;$('#bar-count').textContent=count+' '+(count===1?'peça selecionada':'peças selecionadas');$('#bar-total').textContent=money(total())+' de subtotal';$('#cart-total').textContent=money(total());$('#cart-summary').hidden=!count;for(const id of ['#bar-send','#cart-send'])$(id).href=count?wa(message()):wa('Olá, Neves Pratas!');const fragment=document.createDocumentFragment();
 for(const {p,q} of entries()){const row=node('div','cart-row');row.append(photo(p));const info=node('div');info.append(node('h3','',name(p)),node('p','',money(p.priceCents)+' cada · '+money(p.priceCents*q)));const remove=node('button','remove','Remover');remove.setAttribute('aria-label','Remover '+name(p));remove.addEventListener('click',()=>{delete cart[p.id];save();$('#cart').querySelector('.quantity button')?.focus();});info.append(remove);row.append(info);const controls=node('div','quantity');for(const delta of [-1,1]){const b=node('button','',delta<0?'−':'+');b.setAttribute('aria-label',(delta<0?'Diminuir':'Aumentar')+' quantidade de '+name(p));b.disabled=delta>0&&q>=99;b.addEventListener('click',()=>{cart[p.id]+=delta;if(!cart[p.id])delete cart[p.id];save();const buttons=$('#cart').querySelectorAll('.quantity button');const next=Array.from(buttons).find(el=>el.getAttribute('aria-label')===b.getAttribute('aria-label'));next?.focus();});if(delta>0)controls.append(node('span','',String(q)));controls.append(b);}row.append(controls);fragment.append(row);}
 if(!count)fragment.append(node('p','empty','Seu pedido está vazio. Explore o catálogo e adicione suas peças favoritas.'));$('#cart-items').replaceChildren(fragment);}
 for(const id of ['#open-cart','#review-cart'])$(id).addEventListener('click',event=>open($('#cart'),event.currentTarget));
 document.querySelectorAll('[data-contact]').forEach(a=>{a.href=wa('Olá, Neves Pratas! Gostaria de saber mais sobre as peças do catálogo.');a.target='_blank';a.rel='noopener';});render();updateCart();
})();
