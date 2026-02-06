(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const v=document.getElementById("menu-toggle"),x=document.getElementById("mobile-menu");v.addEventListener("click",()=>{x.classList.toggle("hidden")});const u=document.querySelectorAll(".testimonial-card");let l=0;if(u.length>0){const n=e=>{u.forEach((s,a)=>{a===e?(s.classList.remove("opacity-0"),s.classList.add("opacity-100")):(s.classList.remove("opacity-100"),s.classList.add("opacity-0"))})};n(l),setInterval(()=>{l=(l+1)%u.length,n(l)},4e3)}const r=document.getElementById("gallery-carousel"),g=document.getElementById("gallery-prev"),p=document.getElementById("gallery-next");r&&g&&p&&(g.addEventListener("click",()=>{r.scrollBy({left:-r.offsetWidth,behavior:"smooth"})}),p.addEventListener("click",()=>{r.scrollBy({left:r.offsetWidth,behavior:"smooth"})}));const c=document.getElementById("facilities-carousel"),f=document.getElementById("facilities-prev"),y=document.getElementById("facilities-next");c&&f&&y&&(f.addEventListener("click",()=>{c.scrollBy({left:-c.offsetWidth,behavior:"smooth"})}),y.addEventListener("click",()=>{c.scrollBy({left:c.offsetWidth,behavior:"smooth"})}));const d=document.getElementById("admission-form"),h=document.getElementById("success-message");d&&h&&d.addEventListener("submit",n=>{n.preventDefault();const e=d.querySelector('button[type="submit"]'),s=e.innerText;e.innerText="Submitting...",e.disabled=!0,setTimeout(()=>{d.style.display="none",h.classList.remove("hidden"),e.innerText=s,e.disabled=!1,window.scrollTo({top:0,behavior:"smooth"})},1500)});const o=document.getElementById("modal-container"),b=document.getElementById("modal-content"),E={"pre-primary":{title:"Pre-Primary (Playgroup - UKG)",color:"text-brand-pink",icon:"fa-shapes",description:"A nurturing environment where children discover the joy of learning through play, exploration, and structured activities.",subjects:["English & Phonics","Number Work","General Awareness (EVS)","Art & Craft","Music & Movement"],activities:["Storytelling Sessions","Sand & Water Play","Role Play","Festival Celebrations"],approach:"Montessori & Play-way method focusing on fine motor skills and social development."},primary:{title:"Primary School (Class 1 - 5)",color:"text-brand-blue",icon:"fa-book-open-reader",description:"Building a strong academic foundation while encouraging curiosity and confidence in young learners.",subjects:["English Literature & Grammar","Hindi","Mathematics","Environmental Science","Computer Studies","General Knowledge"],activities:["Science Experiments","Public Speaking","Field Trips","Creative Writing","Mental Math"],approach:"Activity-based learning with a focus on conceptual clarity and language proficiency."},middle:{title:"Middle School (Class 6 - 8)",color:"text-brand-green",icon:"fa-microscope",description:"Transitioning from guided learning to independent inquiry, with an emphasis on analytical thinking.",subjects:["Physics, Chemistry, Biology","Mathematics","History & Civics","Geography","Computer Science","Third Language (Sanskrit/Urdu)"],activities:["Robotics Lab","Debates & Elocution","Sports Competitions","Project Exhibitions"],approach:"Inquiry-based learning aimed at developing critical thinking and problem-solving skills."},secondary:{title:"Secondary (Class 9 - 12)",color:"text-brand-yellow",icon:"fa-graduation-cap",description:"Preparing students for board exams and future career paths with rigorous academic training.",subjects:["Science Stream (PCM/PCB)","Commerce Stream","English Core","Physical Education","Computer Science / IP"],activities:["Career Counseling","Leadership Council","Mock Parliaments","Subject Enrichment Activities"],approach:"Exam-focused preparation combined with career-oriented guidance and personalized mentoring."}};window.openModal=n=>{const e=E[n];if(!e||!o)return;const s=`
    <div class="text-center mb-8">
      <div class="inline-block p-4 rounded-full bg-gray-50 mb-4 shadow-sm">
        <i class="fa-solid ${e.icon} text-4xl ${e.color}"></i>
      </div>
      <h2 class="text-3xl font-bold text-gray-800 mb-2">${e.title}</h2>
      <p class="text-gray-600">${e.description}</p>
    </div>

    <div class="space-y-8">
      <!-- Subjects -->
      <div>
        <h3 class="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
          <i class="fa-solid fa-book ${e.color}"></i> Subjects Taught
        </h3>
        <div class="flex flex-wrap gap-2">
          ${e.subjects.map(a=>`<span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium border border-gray-200">${a}</span>`).join("")}
        </div>
      </div>

      <!-- Activities & Approach Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
            <i class="fa-solid fa-star ${e.color}"></i> Key Activities
          </h3>
          <ul class="space-y-2">
            ${e.activities.map(a=>`<li class="flex items-start gap-2 text-sm text-gray-600"><i class="fa-solid fa-check mt-1 ${e.color}"></i> ${a}</li>`).join("")}
          </ul>
        </div>

        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
            <i class="fa-solid fa-lightbulb ${e.color}"></i> Teaching Approach
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">${e.approach}</p>
        </div>
      </div>
    </div>
  `;b.innerHTML=s,o.classList.remove("hidden","opacity-0"),o.classList.add("flex","opacity-100"),document.body.style.overflow="hidden"};window.closeModal=()=>{o&&(o.classList.add("opacity-0"),o.classList.remove("opacity-100"),setTimeout(()=>{o.classList.add("hidden"),o.classList.remove("flex"),b.innerHTML=""},300),document.body.style.overflow="auto")};o&&o.addEventListener("click",n=>{n.target===o&&window.closeModal()});
