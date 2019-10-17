function startTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  m = checkMinutes(m);

  document.getElementById('time').innerHTML = `${h}:${m}`;
  setTimeout(startTime, 500);
}

function checkMinutes(m) {
  if (m < 10) m = '0' + m;

  return m;
}

window.onload = startTime;