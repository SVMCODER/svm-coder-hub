function run() {
    codef = document.getElementById('codef').value;
    localStorage.setItem('code',`${codef}`)
    window.location.replace('prv.html')
}
function prv() {
  codef = document.getElementById('codef').value;
  localStorage.setItem('code',`
${codef.replace(localStorage.getItem('code'),'')}
`)
}
document.getElementById('codef').addEventListener('input', prv)
document.getElementById('codef').innerHTML = localStorage.getItem('code')