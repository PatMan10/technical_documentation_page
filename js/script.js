function zol() {
  console.log(window.pageYOffset)
}

function adjustYOffset() {
  setTimeout(() => {
    const diff = 85
    const curPos = window.pageYOffset
    if (curPos < diff) return
    const newPos = curPos - diff
    window.scrollTo(0, newPos);
  }, 5)
}

function openNavDrawer() {
  const navD = document.getElementById('nav-drawer')
  navD.style.setProperty('left', '0')
}

function closeNavDrawer() {
  const navD = document.getElementById('nav-drawer')
  navD.style.setProperty('left', '-250px')
}
