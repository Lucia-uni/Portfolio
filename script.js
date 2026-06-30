// ── SKILLS DATA ──
const SKILLS = [
  { name: "UI/UX Design",       pct: 90 },
  { name: "Graphic Design",     pct: 88 },
  { name: "Interaction Design", pct: 85 },
  { name: "3D Modeling",        pct: 75 },
  { name: "Figma",              pct: 92 },
  { name: "Adobe Suite",        pct: 82 },
  { name: "Motion Design",      pct: 68 },
  { name: "Prototyping",        pct: 87 },
];

const chartEl = document.getElementById('skills-chart');
SKILLS.forEach(s => {
  const row = document.createElement('div');
  row.className = 'skill-bar-row';
  row.innerHTML = `
    <div class="skill-bar-header">
      <span class="skill-bar-name">${s.name}</span>
      <span class="skill-bar-pct">${s.pct}%</span>
    </div>
    <div class="skill-bar-track">
      <div class="skill-bar-fill" data-pct="${s.pct}"></div>
    </div>`;
  chartEl.appendChild(row);
});

function animateBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(b => {
    b.style.width = '0';
    setTimeout(() => { b.style.width = b.dataset.pct + '%'; }, 60);
  });
}

// ── TEXT SCRAMBLE ──
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
function scramble(el) {
  const orig = el.dataset.orig || (el.dataset.orig = el.innerText);
  let iter = 0;
  const total = orig.length * 2;
  clearInterval(el._sc);
  el._sc = setInterval(() => {
    el.innerText = orig.split('').map((ch, i) => {
      if (ch === ' ' || ch === '\n') return ch;
      if (i < iter / 2) return orig[i];
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');
    iter++;
    if (iter > total) { el.innerText = orig; clearInterval(el._sc); }
  }, 28);
}
document.querySelectorAll('.scramble-text').forEach(el => {
  el.addEventListener('mouseenter', () => scramble(el));
});

// ── PROJECTS ──
// processImages: [ sketch (large), sviluppo1, sviluppo2, finale (wide) ]
const PROJECTS = [
  {
    title: "Turntable",
    tags: ["UI/UX", "Interaction", "Product"],
    year: "2024",
    img: "project-images/c-turntable.png",
    heroImg: "project-images/c-turntable.png",
    role: "Interaction Designer",
    duration: "3 months",
    context: "Academic",
    brief: "Design a physical music system that connects analog experience with digital interaction, using laser-cut wood as the main material.",
    processImages: [
      { src: "project-images/turntable-sketch.png",     caption: "Early sketches — exploring the prototype construction",      wide: false },
      { src: "project-images/turntable-dev1.jpg",       caption: "Arm detail— managing the on/off switch",             wide: false },
      { src: "project-images/turntable-dev2.jpg",       caption: "Interaction with turntable",             wide: false },
      { src: "project-images/turntable-final.jpg",      caption: "Final assembled system — turntable, arm and two speakers", wide: true  },
    ],
    video: "project-images/turntable-video.mp4",
    videoCaption: "Final system in use",
    process: [
      { title: "Research",    desc: "Explored existing turntable systems and DIY electronics. Focused on tactile rituals of vinyl culture." },
      { title: "Concept",     desc: "Sketched modular speaker units and a flat turntable box. The t-shape arm became the defining gesture." },
      { title: "Prototyping", desc: "Laser-cut MDF for the housing. Tested speaker placement for acoustic balance." },
      { title: "Refinement",  desc: "Simplified joinery to interlocking tabs — no glue, fully demountable." },
    ],
    tools: ["Fusion 360", "Laser cutting", "Adobe Illustrator", "Physical prototyping"],
    learnings: ["Physical constraints drive better design", "Acoustic properties matter as much as visual ones", "Modular systems reward iteration"],
  },
  {
    title: "Divisumma 18",
    tags: ["Graphic", "Illustration", "Heritage"],
    year: "2024",
    img: "project-images/c-divisumma.png",
    heroImg: "project-images/c-divisumma.png",
    role: "Illustrator & Graphic Designer",
    duration: "2 months",
    context: "Academic",
    brief: "Create a visual homage to the Divisumma 18 by Olivetti — study its form, ergonomics and cultural weight through illustration.",
    processImages: [
      { src: "project-images/divisumma-sketch.png",  caption: "Initial pencil studies of the calculator's form",      wide: false },
      { src: "project-images/divisumma-dev1.jpg",  caption: "Detail of hands and keyboard — the human gesture",    wide: false },
      { src: "project-images/divisumma-dev2.jpg",    caption: "Typographic annotation system",                       wide: false },
      { src: "project-images/divisumma-final.png",  caption: "Final publication spread",                            wide: true  },
    ],
    video: "project-images/divisumma-video.mp4",
    videoCaption: "Final editorial layout",
    process: [
      { title: "Research", desc: "Studied Bruno Munari's philosophy and Olivetti culture of the 1960s–70s." },
      { title: "Drawing",  desc: "Detailed hand-drawn outlines of the calculator in use — hands and object as one." },
      { title: "Layout",   desc: "Composed illustrations into publication-ready format with typographic annotations." },
    ],
    tools: ["Pencil & ink", "Adobe Illustrator", "InDesign"],
    learnings: ["Illustration as analysis, not decoration", "Drawing objects from life reveals hidden knowledge", "Heritage design holds invisible interaction wisdom"],
  },
  {
    title: "Keep Calm & Drink Water",
    tags: ["Campaign", "Graphic", "Digital"],
    year: "2023",
    img: "project-images/c-keep-calm.png",
    heroImg: "project-images/c-keep-calm.png",
    role: "Graphic Designer",
    duration: "6 weeks",
    context: "Academic",
    brief: "Design a campaign encouraging daily wellness habits — with dry humor and a strong visual identity.",
    processImages: [
      { src: "project-images/keep-calm-sketch.png",     caption: "Concept sketches — PC as wellness metaphor",      wide: false },
      { src: "project-images/keep-calm-dev1.png",      caption: "Icon system development",                         wide: false },
      { src: "project-images/keep-calm-dev2.jpg",     caption: "Poster mockup iterations",                        wide: false },
      { src: "project-images/keep-calm-final.jpg",      caption: "Final poster series",                             wide: true  },
    ],
    video: "project-images/keep-calm-video.mp4",
    videoCaption: "Social media animation",
    process: [
      { title: "Concept",       desc: "Explored irony between vintage computing aesthetics and modern wellness anxiety." },
      { title: "Visual system", desc: "Built the campaign around a retro PC loaded with icons — ordered chaos as metaphor." },
      { title: "Execution",     desc: "Designed poster series, digital formats and social media mockups." },
    ],
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    learnings: ["Humor is a design tool", "Strong concepts survive format changes", "Visual consistency creates recognition"],
  },
  {
    title: "Hangman",
    tags: ["Game", "UI/UX", "Mobile"],
    year: "2023",
    img: "project-images/c-hangman.png",
    heroImg: "project-images/c-hangman.png",
    role: "UI/UX Designer",
    duration: "2 months",
    context: "Academic",
    brief: "Redesign the classic Hangman game as a book-themed mobile app — minimal, readable, tense.",
    processImages: [
      { src: "project-images/hangman-sketch.jpg",      caption: "Lo-fi sketches — stripping the game to essentials",  wide: false },
      { src: "project-images/hangman-dev1.png",  caption: "Wireframe flow — figure, word, alphabet",            wide: false },
      { src: "project-images/hangman-dev2.png",          caption: "High-fidelity UI — editorial aesthetic",             wide: false },
      { src: "project-images/hangman-final.png",     caption: "Final screen collection",                            wide: true  },
    ],
    video: "project-images/hangman-video.mp4",
    videoCaption: "Prototype walkthrough",
    process: [
      { title: "Research",      desc: "Tested word-game apps. Visual noise reduced engagement in short sessions." },
      { title: "Wireframing",   desc: "Stripped to essentials: figure, word, alphabet. Typography does the heavy lifting." },
      { title: "Visual design", desc: "Editorial aesthetic — cream backgrounds, fine lines, monospaced type." },
      { title: "Prototyping",   desc: "Interactive Figma prototype tested with 8 users." },
    ],
    tools: ["Figma", "User testing", "Prototyping"],
    learnings: ["Removal is a design decision", "Tension comes from density, not complexity", "Typography can replace illustration"],
  },
  {
    title: "PostuReveal",
    tags: ["UX", "Product", "Health-tech"],
    year: "2024",
    img: "project-images/c-postureveal.png",
    heroImg: "project-images/c-postureveal.png",
    role: "UX & Brand Designer",
    duration: "4 months",
    context: "Academic",
    brief: "Design a posture analysis tool for remote workers — UX and brand identity.",
    processImages: [
      { src: "project-images/postureveal-sketch.png", caption: "User research synthesis — pain points map",           wide: false },
      { src: "project-images/postureveal-dev1.png",    caption: "Brand explorations — the shrimp mascot journey",      wide: false },
      { src: "project-images/postureveal-dev2.png",       caption: "Dashboard UI — score, history, correction prompts",   wide: false },
      { src: "project-images/postureveal-final.png",    caption: "Final product — dashboard and mascot system",         wide: true  },
    ],
    video: "project-images/postureveal-video.mp4",
    videoCaption: "Dashboard prototype in action",
    process: [
      { title: "Research",  desc: "Interviewed 12 remote workers. Shame was the main barrier to correcting posture." },
      { title: "Brand",     desc: "PostuReveal — a shrimp mascot as a self-aware, non-judgmental metaphor." },
      { title: "Interface", desc: "Laptop dashboard with posture score, session history and correction prompts." },
      { title: "Testing",   desc: "Two rounds of usability testing, iterating on notification frequency." },
    ],
    tools: ["Figma", "User interviews", "Adobe Illustrator", "Prototyping"],
    learnings: ["Brand tone changes how feedback is received", "Self-deprecating mascots reduce shame", "Health tools need to feel encouraging, not clinical"],
  },
  {
    title: "BrainSpectre",
    tags: ["Installation", "Museum", "Speculative"],
    year: "2025",
    img: "project-images/c-brainspectre.jpg",
    heroImg: "project-images/c-brainspectre.jpg",
    role: "Interaction Designer",
    duration: "— months",
    context: "Academic",
    brief: "A museum installation exploring the concept of the ghost as a metaphor — here, the ghost is our brain: invisible, ever-present, shaping everything we perceive and remember.",
    processImages: [
      { src: "project-images/brainspectre-prototyping.jpg",  caption: "Concept sketches — mapping the ghost metaphor to space",           wide: false },
      { src: "project-images/brainspectre-dev1.png",   caption: "Spatial development — light, sound and visitor flow",              wide: false },
      { src: "project-images/brainspectre-dev2.png",   caption: "Prototype — interaction testing in situ",                          wide: false },
      { src: "project-images/brainspectre-final.png",   caption: "Final installation — the brain as spectre inhabiting the room",    wide: true  },
    ],
    video: "project-images/brainspectre-video.mp4",
    videoCaption: "Installation walkthrough",
    process: [
      { title: "Research",     desc: "Explored ghost narratives across cultures, neuroscience of memory, and museum interaction patterns." },
      { title: "Concept",      desc: "The brain as spectre: invisible architecture of the self. Translated into light, sound and physical triggers." },
      { title: "Spatial design", desc: "Designed visitor flow and sensory layers — each zone corresponding to a different cognitive function." },
      { title: "Prototyping",  desc: "Built and tested interactive elements in a simulated museum environment." },
    ],
    tools: ["Arduino", "Physical Computing", "Blender", "Figma", "Adobe Suite"],
    learnings: ["Space is a medium, not a container", "Invisible phenomena need tangible anchors", "Museum visitors read bodies, not screens"],
  },
  {
    title: "AI & UFO",
    tags: ["Speculative", "3D", "Editorial"],
    year: "2024",
    img: "project-images/c-ufo.jpg",
    heroImg: "project-images/c-ufo.jpg",
    role: "Speculative Designer",
    duration: "6 weeks",
    context: "Academic",
    brief: "Explore the intersection of AI and cultural fascination with the unknown.",
    processImages: [
      { src: "project-images/ai-and-ufo-dev1.png",  caption: "Archival UFO imagery — Cold War visual culture research", wide: false },
      { src: "project-images/ai-and-ufo-dev2.png",        caption: "3D composition studies in Blender",                       wide: false },
      { src: "project-images/ai-and-ufo-dev3.png",    caption: "Editorial layout iterations",                             wide: false },
      { src: "project-images/ai-and-ufo-final.png",     caption: "Final editorial spread",                                  wide: true  },
    ],
    video: "project-images/ai-and-ufo-video.mp4",
    videoCaption: "Final editorial animation",
    process: [
      { title: "Research",    desc: "Studied Cold War UFO iconography and contemporary AI visual rhetoric." },
      { title: "Concept",     desc: "Speculative editorial treating AI as the new unknown — a cultural UFO." },
      { title: "3D & Visual", desc: "3D assets and editorial spreads blending archival imagery with AI aesthetics." },
    ],
    tools: ["Blender", "Adobe Illustrator", "InDesign", "Midjourney"],
    learnings: ["Speculative design asks better questions", "Visual culture shapes how we fear the future", "Archival research is a creative act"],
  },
  {
    title: "Thea",
    tags: ["Product", "UX", "Health"],
    year: "2025",
    img: "project-images/c-thea.png",
    heroImg: "project-images/c-thea.png",
    role: "Interaction & Product Designer",
    duration: "— months",
    context: "Academic",
    brief: "An intelligent device for managing respiratory allergies — not a medical tool, but a companion designed to improve daily life through awareness, habit and gentle guidance.",
    processImages: [
      { src: "project-images/thea-prototyping.png",   caption: "Concept sketches — form and interaction exploration",               wide: false },
      { src: "project-images/thea-dev1.jpg", caption: "User research — daily friction points for allergy sufferers",       wide: false },
      { src: "project-images/thea-dev2.jpg",       caption: "Interface design — pollen forecast, medication and habit tracking", wide: false },
      { src: "project-images/thea-final.jpg",    caption: "Final device and companion app",                                    wide: true  },
    ],
    video: "project-images/thea-video.mp4",
    videoCaption: "Thea in daily use",
    process: [
      { title: "Research",    desc: "Mapped the daily experience of respiratory allergy sufferers — triggers, habits, frustrations." },
      { title: "Concept",     desc: "Thea as a calm, non-medical companion: awareness over anxiety, guidance over prescription." },
      { title: "Design",      desc: "Designed device form, companion app and gentle notification system." },
      { title: "Testing",     desc: "Prototyped key interactions and validated with users in high-pollen scenarios." },
    ],
    tools: ["Figma", "User research", "Physical prototyping", "Adobe Illustrator"],
    learnings: ["Health design must feel calm, not clinical", "Habit formation beats one-time alerts", "The best UX for chronic conditions is invisible"],
  },
];

// ── GRID LAYOUT (8 progetti) ──
// Riga 1: Turntable(largo) | Divisumma
// Riga 2: KeepCalm | Hangman(medio) | PostuReveal
// Riga 3: BrainSpectre (quasi full-width)
// Riga 4: AI&UFO(medio) | Thea(largo)
const gridCls = [
  'card-1',  // Turntable    — 1/8
  'card-2',  // Divisumma    — 8/13
  'card-3',  // Keep Calm    — 1/5
  'card-4',  // Hangman      — 5/10
  'card-5',  // PostuReveal  — 10/13
  'card-6',  // BrainSpectre — full width
  'card-7',  // AI & UFO     — 1/6
  'card-8',  // Thea         — 6/13
];

const imageStyles = [
  { size: '75%', position: 'center right', margin: '0' },
  { size: '85%', position: 'center right', margin: '0' },
  { size: 'cover', position: 'center right', margin: '0' },
  { size: 'cover', position: 'center right', margin: '0' },
  { size: 'cover', position: 'center right', margin: '0' },
  { size: '45%', position: 'center right', margin: '0' },
  { size: 'cover', position: 'center right', margin: '0' },
  { size: 'cover', position: 'center right', margin: '0' },
];

const grid = document.getElementById('projects-grid');
PROJECTS.forEach((p, i) => {
  const c = document.createElement('div');
  c.className = `project-card ${gridCls[i] || ''} fade-up`;
  c.style.transitionDelay = `${i * .06}s`;
  const is = imageStyles[i] || { size: '50% auto', position: 'right center', margin: '0' };
  c.innerHTML = `
    <div class="card-image" style="
      background-image: url('${p.img}');
      --card-image-size: ${is.size};
      --card-image-position: ${is.position};
      --card-image-margin: ${is.margin};
    "></div>
    <div class="card-glitch">
      <div class="glitch-line"></div>
      <div class="gdot"></div><div class="gdot"></div>
      <div class="gdot"></div><div class="gdot"></div>
    </div>
    <span class="card-number">0${i + 1} — ${p.year}</span>
    <div class="card-inner">
      <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.brief.substring(0, 70)}…</div>
    </div>`;
  c.addEventListener('click', () => openModal(p));
  grid.appendChild(c);
});

// ── MODAL ──
function buildGallery(images) {
  if (!images || !images.length) return '';
  // slot 0 = sketch large (span 2 cols), 1+2 = sviluppo (1 col each), 3 = finale wide
  return `
    <div class="proj-section">
      <div class="proj-section-label">Process Images</div>
      <div class="proj-gallery">
        ${images.map((img, idx) => `
          <figure class="proj-figure ${img.wide ? 'proj-figure--wide' : ''} ${idx === 0 ? 'proj-figure--sketch' : ''}">
            <div class="proj-figure-img">
              <img src="${img.src}" alt="${img.caption}"
                onerror="this.parentElement.classList.add('img-placeholder')">
            </div>
            <figcaption class="proj-caption">${img.caption}</figcaption>
          </figure>`).join('')}
      </div>
    </div>`;
}

function openModal(p) {
  document.getElementById('modal-hero-img').style.backgroundImage = `url('${p.heroImg || p.img}')`;
  document.getElementById('modal-tags').innerHTML   = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-year').textContent  = p.year;

  const videoHTML = p.video
    ? `<div class="proj-section">
        <div class="proj-section-label">Final Result</div>
        <figure class="proj-figure proj-figure--wide">
          <video class="proj-video" src="${p.video}" autoplay loop muted playsinline></video>
          <figcaption class="proj-caption">${p.videoCaption || ''}</figcaption>
        </figure>
      </div>`
    : `<div class="proj-section">
        <div class="proj-section-label">Final Result</div>
        <figure class="proj-figure proj-figure--wide">
          <div class="proj-video-placeholder">
            <span>${p.videoCaption || 'add your video here'}</span>
          </div>
          <figcaption class="proj-caption">${p.videoCaption || ''}</figcaption>
        </figure>
      </div>`;

  document.getElementById('modal-body').innerHTML = `
    <div class="proj-meta">
      <div><div class="meta-label">Role</div><div class="meta-value">${p.role}</div></div>
      <div><div class="meta-label">Duration</div><div class="meta-value">${p.duration}</div></div>
      <div><div class="meta-label">Context</div><div class="meta-value">${p.context}</div></div>
    </div>
    <div class="proj-section">
      <div class="proj-section-label">Brief</div>
      <p>${p.brief}</p>
    </div>
    ${buildGallery(p.processImages)}
    <div class="proj-section">
      <div class="proj-section-label">Process</div>
      <div class="process-steps">
        ${p.process.map((s, i) => `
          <div class="process-step">
            <div class="step-num">0${i + 1}</div>
            <div>
              <div class="step-title">${s.title}</div>
              <div class="step-desc">${s.desc}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="proj-section">
      <div class="proj-section-label">Tools & Methods</div>
      <div class="tools-grid">
        ${p.tools.map(t => `<span class="tool-chip">${t}</span>`).join('')}
      </div>
    </div>
    <div class="proj-section">
      <div class="proj-section-label">Learnings</div>
      <ul class="learnings-list">
        ${p.learnings.map(l => `<li>${l}</li>`).join('')}
      </ul>
    </div>
    ${videoHTML}`;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const vid = document.querySelector('.proj-video');
  if (vid) vid.pause();
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// About modal
document.getElementById('open-about-modal').addEventListener('click', () => {
  document.getElementById('about-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(animateBars, 120);
});
function closeAboutModal() {
  document.getElementById('about-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('about-modal-close').addEventListener('click', closeAboutModal);
document.getElementById('about-modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeAboutModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeAboutModal(); }
});

// ── BUTTERFLY CURSOR ──
const bfCursor = document.getElementById('bf-cursor');
let tx = 0, ty = 0, cx2 = 0, cy2 = 0;
document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
(function animCursor() {
  cx2 += (tx - cx2) * .13;
  cy2 += (ty - cy2) * .13;
  bfCursor.style.left = cx2 + 'px';
  bfCursor.style.top  = cy2 + 'px';
  requestAnimationFrame(animCursor);
})();

// ── GLOWING TRAIL ──
const canvas = document.getElementById('trail-canvas');
const ctx = canvas.getContext('2d');
let W, H;
function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);
const pts = [];
document.addEventListener('mousemove', e => {
  pts.push({ x: e.clientX, y: e.clientY, age: 0 });
  if (pts.length > 80) pts.shift();
});
function renderTrail() {
  ctx.clearRect(0, 0, W, H);
  pts.forEach(p => p.age += .02);
  while (pts.length > 0 && pts[0].age >= 1) pts.shift();
  if (pts.length < 2) { requestAnimationFrame(renderTrail); return; }
  [{ w:10, a:.06, blur:14 }, { w:4, a:.16, blur:6 }, { w:1.5, a:.65, blur:0 }].forEach(({ w, a, blur }) => {
    ctx.save();
    if (blur > 0) { ctx.shadowBlur = blur; ctx.shadowColor = `rgba(156,184,183,${a*1.8})`; }
    ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i+1].x) / 2, my = (pts[i].y + pts[i+1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
    }
    ctx.quadraticCurveTo(pts[pts.length-2].x, pts[pts.length-2].y, pts[pts.length-1].x, pts[pts.length-1].y);
    const g = ctx.createLinearGradient(pts[0].x, pts[0].y, pts[pts.length-1].x, pts[pts.length-1].y);
    g.addColorStop(0, `rgba(156,184,183,0)`);
    g.addColorStop(.5, `rgba(200,219,218,${a*.5})`);
    g.addColorStop(1, `rgba(220,235,234,${a})`);
    ctx.strokeStyle = g; ctx.stroke(); ctx.restore();
  });
  requestAnimationFrame(renderTrail);
}
renderTrail();

// ── HERO PARALLAX ──
const heroBf = document.getElementById('hero-butterfly');
const heroEl = document.getElementById('hero');
document.addEventListener('mousemove', e => {
  const r = heroEl.getBoundingClientRect();
  if (e.clientY < r.bottom && e.clientY > r.top) {
    heroBf.style.transform = `translate(${(e.clientX/W-.5)*20}px,${(e.clientY/H-.5)*14}px)`;
  } else heroBf.style.transform = 'translate(0,0)';
});

// ── FADE UP ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));