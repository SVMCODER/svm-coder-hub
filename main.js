
function login() {
    uname = document.getElementById('name').value;
    if (uname.length < 3 || uname.length > 16) {
        swal("Invalid!", "Usernames can only contain 3-16 letters.", "error")
    }
    else if(uname == 'svmchub00') {
        swal("Welcome My Developer Shaurya Tripathi", "Please wait, I'm getting the server api lookup.", "success")
        localStorage.setItem('name','Shaurya Tripathi')
        localStorage.setItem('role','Developer')
        localStorage.setItem('badge','Founder')
        localStorage.setItem('loggedin','yes')
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
        setTimeout(() => {
            window.location.replace('home.html')
        }, 1500);
    }
}

function refresh() {
    swal("Refreshed!", "The page is now updated.", "success")
    setTimeout(() => {
        window.location.reload()
    }, 1500);
}
function logout() {
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
      swal("Cancelled!", "You're now able to code again.", "success");
    }
	});
};
