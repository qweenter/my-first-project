const el = document.getElementById('link-about-me');
let counter = 0;
el.onclick = (e) => el.innerText = `sasha-vonuchka ${++counter}`;