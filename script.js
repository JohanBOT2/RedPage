// Safe demo items; thumbnails from picsum.photos, videos from sample sources (harmless)
const ITEMS = [
  {
    id: "raw_clip_01",
    title: "[UserUpload] raw_clip_01",
    user: "anon_42",
    views: "12.8k",
    ago: "3 hours ago",
    thumb: "https://picsum.photos/seed/port1/800/450",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    desc: "Harmless sample clip (Big Buck Bunny excerpt). Replace with your own."
  },
  {
    id: "strange_event",
    title: "strange_event_clip",
    user: "user_9xz",
    views: "3.2k",
    ago: "now",
    thumb: "https://picsum.photos/seed/port2/800/450",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    desc: "Flower clip from MDN CC0."
  },
  {
    id: "outdoor_action",
    title: "outdoor_action",
    user: "runner23",
    views: "987",
    ago: "1 day ago",
    thumb: "https://picsum.photos/seed/port3/800/450",
    src: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
    desc: "Generic sample video."
  },
  {
    id: "urban_night_drive",
    title: "urban_night_drive",
    user: "dashcam_mock",
    views: "6.1k",
    ago: "2 days ago",
    thumb: "https://picsum.photos/seed/port4/800/450",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    desc: "Short 5s sample loop."
  },
  {
    id: "park_run_clip",
    title: "park_run_clip",
    user: "runner23",
    views: "4.8k",
    ago: "9 hours ago",
    thumb: "https://picsum.photos/seed/port5/800/450",
    src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    desc: "10s sample clip."
  },
  {
    id: "bike_trick_fail",
    title: "bike_trick_fail",
    user: "streetmix",
    views: "21.4k",
    ago: "9 hours ago",
    thumb: "https://picsum.photos/seed/port6/800/450",
    src: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    desc: "15s sample clip."
  }
];

function $(q, s=document){ return s.querySelector(q); }
function create(el, cls){ const n=document.createElement(el); if(cls) n.className=cls; return n; }

function ageOk(){ $('#age-modal').style.display = 'none'; }
function leave(){ location.href = 'https://example.com'; }

function initGrid(){
  const grid = $('#grid');
  ITEMS.forEach(it=>{
    const a = document.createElement('a');
    a.href = `video.html?id=${encodeURIComponent(it.id)}`;
    a.className = 'tile';
    a.innerHTML = `
      <img class="thumb" alt="" src="${it.thumb}"/>
      <div class="overlay"></div>
      <div class="play"><div class="triangle"></div><div>Play</div></div>
      <div class="stamp">${Math.random()<0.4?'LIVE':'REC'}</div>
      <div class="meta">
        <div class="title">${it.title}</div>
        <div class="sub">user: ${it.user}</div>
      </div>
      <div class="views">${it.views} views</div>
    `;
    grid.appendChild(a);
  });
  // subtle scanline flicker
  setInterval(()=>{
    document.body.style.backgroundPositionY = (Date.now()/40 % 20)+'px';
  }, 200);
}

function qs(key){
  const u = new URL(location.href);
  return u.searchParams.get(key);
}

function initPlayer(){
  const id = qs('id') || ITEMS[0].id;
  const it = ITEMS.find(x=>x.id===id) || ITEMS[0];

  const v = $('#vid');
  v.src = it.src;
  v.loop = true;
  $('#title').textContent = it.title;
  $('#user').textContent = 'user: '+it.user;
  $('#views').textContent = it.views;
  $('#ago').textContent = it.ago;
  $('#desc').textContent = it.desc;

  // build up-next
  const up = $('#upnext');
  ITEMS.filter(x=>x.id!==it.id).slice(0,6).forEach(n=>{
    const a = document.createElement('a');
    a.href = `video.html?id=${encodeURIComponent(n.id)}`;
    a.className='small';
    a.innerHTML = `<img src="${n.thumb}" alt=""/>
      <div><div class="t">${n.title}</div><div class="s">user: ${n.user} • ${n.views} views</div></div>`;
    up.appendChild(a);
  });

  // fake timecode
  const tc = $('#timecode');
  let t=0;
  setInterval(()=>{
    t++; const h=String(Math.floor(t/3600)).padStart(2,'0');
    const m=String(Math.floor((t%3600)/60)).padStart(2,'0');
    const s=String(t%60).padStart(2,'0');
    tc.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

if (document.getElementById('grid')) initGrid();
