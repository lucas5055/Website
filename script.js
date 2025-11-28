// atualiza ano do rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
btn?.addEventListener('click', ()=>{
 const expanded = btn.getAttribute('aria-expanded') === 'true';
 btn.setAttribute('aria-expanded', String(!expanded));
 if(nav.style.display === 'flex') nav.style.display = '';
 else nav.style.display = 'flex';
 nav.style.flexDirection = 'column';
 nav.style.gap = '12px';
 nav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))';
 nav.style.padding = '12px';
 nav.style.borderRadius = '8px';
});

// offset anchor links to compensate header
document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.addEventListener('click', function(e){
   const targetId = this.getAttribute('href').slice(1);
   const target = document.getElementById(targetId);
   if(target){
   e.preventDefault();
   const headerH = document.querySelector('header').offsetHeight;
   const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
   window.scrollTo({top, behavior:'smooth'});
   // close mobile nav after click
   if(window.innerWidth <= 640){
   nav.style.display = '';
   btn.setAttribute('aria-expanded','false');
   }
   }
 })
});