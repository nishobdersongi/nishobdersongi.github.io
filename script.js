const stars = document.querySelectorAll('#stars span');
const text = document.getElementById('rating-text');
const stats = document.getElementById('rating-stats');
let ratings = JSON.parse(localStorage.getItem('nishobdo_ratings') || '[]');

function updateStats(){
  if(ratings.length===0){stats.innerText='এখনো কোনো রেটিং নেই';return;}
  let avg = (ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1);
  stats.innerText = `গড় রেটিং: ${avg} ⭐ (${ratings.length} জন রেটিং দিয়েছেন)`;
}
updateStats();

stars.forEach(s=>{
  s.addEventListener('click', ()=>{
    let r = parseInt(s.dataset.rating);
    ratings.push(r);
    localStorage.setItem('nishobdo_ratings', JSON.stringify(ratings));
    stars.forEach(x=>x.classList.toggle('active', x.dataset.rating<=r));
    text.innerText = `আপনি ${r} স্টার দিয়েছেন - ধন্যবাদ! ❤️`;
    updateStats();
  });
});
