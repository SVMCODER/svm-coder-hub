function run() {
    codef = document.getElementById('codef').value;
    localStorage.setItem('code',`${codef}`)
    localStorage.setItem('log',localStorage.getItem('log')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: Code Runned</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
    window.location.replace('prv.html')
}
function prv() {
  codef = document.getElementById('codef').value;
  localStorage.setItem('log',localStorage.getItem('log')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: Preview Opened</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
  localStorage.setItem('code',`
${codef.replace(localStorage.getItem('code'),'')}
`)
}
document.getElementById('codef').addEventListener('input', prv)
document.getElementById('codef').innerHTML = localStorage.getItem('code')
