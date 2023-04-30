
function login() {
    uname = document.getElementById('name').value;
    if (uname.length < 3 || uname.length > 16) {
        swal("Invalid!", "Usernames can only contain 3-16 letters.", "error")
        localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: ${uname} Invalid Name</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
    }
    else if(uname == 'svmchub00') {
        swal("Welcome My Developer Shaurya Tripathi", "Please wait, I'm getting the server api lookup.", "success")
        localStorage.setItem('name','Shaurya Tripathi')
        localStorage.setItem('role','Developer')
        localStorage.setItem('badge','Founder')
        localStorage.setItem('loggedin','yes')
        localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: [Developer] Shaurya Tripathi Logged-In</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
        setTimeout(() => {
            window.location.replace('home.html')
        }, 1500);
    }
    else if(uname == 'svmchub01') {
        swal("Welcome Our Teacher Lashmi", "Please wait while I go to the school and get the Key.", "success")
        localStorage.setItem('name','Lashmi')
        localStorage.setItem('role','Teacher')
        localStorage.setItem('badge','Founder')
        localStorage.setItem('loggedin','yes')
        localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: [Owner] Lashmi mam Logged-In</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
        setTimeout(() => {
            window.location.replace('home.html')
        }, 1500);
    }
    else {
        swal("Welcome "+uname, "Redirecting, Please wait!", "success")
        localStorage.setItem('name',uname)
        localStorage.setItem('role','Student')
        localStorage.setItem('badge','User')
        localStorage.setItem('loggedin','yes')
        localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: ${uname} Logged-In</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
        setTimeout(() => {
            window.location.replace('home.html')
        }, 1500);
    }
}

function refresh() {
    localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: Page Refreshed</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
    swal("Refreshed!", "The page is now updated.", "success")
    setTimeout(() => {
        window.location.reload()
    }, 1500);
}
function logout() {
    localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: ${uname} Logout Confirmation</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
    swal({
		title: "Logout?",
		text: "You will lose all your saved projects.",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: '#DD6B55',
		confirmButtonText: 'Logout',
		cancelButtonText: "Cancel",
		closeOnConfirm: false,
		closeOnCancel: false
	},
	function(isConfirm){
    if (isConfirm){
        localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: ${uname} Logged Out</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
      localStorage.removeItem('name')
      localStorage.removeItem('loggedin')
      localStorage.removeItem('role')
      localStorage.removeItem('badge')
      localStorage.removeItem('code')
      localStorage.removeItem('projects')
      localStorage.removeItem('prjcts12')
      localStorage.removeItem('hp')
      localStorage.removeItem('m')
      swal("Logging out", "We're cleaning up the data registered with this device.", "warning")
      setTimeout(() => {
        window.location.replace('/')
      }, 1500);

    } else {
        localStorage.setItem('log',localStorage.getItem('log').replace('No Projects Found!','')+`
    <div class="container">
            <p style="color: red">
                Event Data
            </p>
           <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/history-1-512.png" alt="">
           <p style="color:yellow">Type: ${uname} Logout Cancelled</p>
           <p style="color: rgb(0, 195, 255)">Timing: ${Date().replace('GMT+0530 (India Standard Time)','')}</p>
        </div>
    <br>`)
      swal("Cancelled!", "You're now able to code again.", "success");
    }
	});
};
