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
        }, "2300");
    }
    else if(uname == 'svmchub01') {
        swal("Welcome Our Teacher Lashmi", "Please wait while I go to the school and get the Key.", "success")
        localStorage.setItem('name','Lashmi')
        localStorage.setItem('role','Teacher')
        localStorage.setItem('badge','Founder')
        localStorage.setItem('loggedin','yes')
        setTimeout(() => {
            window.location.replace('home.html')
        }, "2300");
    }
    else {
        swal("Welcome "+uname, "Redirecting, Please wait!", "success")
        localStorage.setItem('name',uname)
        localStorage.setItem('role','Student')
        localStorage.setItem('badge','User')
        localStorage.setItem('loggedin','yes')
        setTimeout(() => {
            window.location.replace('home.html')
        }, "2300");
    }
}

function refresh() {
    swal("Refreshed!", "The page is now updated.", "success")
    setTimeout(() => {
        window.location.reload()
    }, 1500);
}