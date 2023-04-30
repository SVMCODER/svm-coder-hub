function save() {
    pname = document.getElementById('pname').value;
    localStorage.setItem('prjcts12',localStorage.getItem('prjcts12').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Project Details
            </p>
           <img class="icon" src="https://cdn0.iconfinder.com/data/icons/file-type-19/512/file__html__web_-512.png" alt="">
           <p style="color:yellow">Name: ${pname.replace(' ','-')}.html</p>
           <p style="color: rgb(0, 195, 255)">Created on: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
           <button class="bx bxs-copy-alt" onclick="let codes1 = document.createElement('textarea');codes1.value = localStorage.getItem('code');document.body.appendChild(codes1);codes1.select();document.execCommand('copy');document.body.removeChild(codes1); swal('Copied!', 'Code is copied to your clipboard.', 'success')">Copy Code</button>
          <p></p> <textarea>${localStorage.getItem('code')}</textarea>
        </div>
    <br>
    `)
    localStorage.setItem('log',localStorage.getItem('log')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: ${pname} Saved</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
    swal({
        title: "Saved!",
        text: `Your project ${pname} is saved successfully.`,
        imageUrl: 'https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif'
    });
    localStorage.setItem('hp','yes2')
    
}
function create() {
  localStorage.setItem('m','new')
  swal({
    title: "Creating...",
    text: `Creating your project, please wait!`,
    imageUrl: 'https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif'
});
localStorage.setItem('log',localStorage.getItem('log')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: Project Created</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
setTimeout(() => {
  window.location.replace("newproject.html")
}, 1500);
}
if (localStorage.getItem('hp') != 'yes2') {
  localStorage.setItem('prjcts12','No Projects Found!')
}
