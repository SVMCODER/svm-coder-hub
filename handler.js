function run() {
    html = document.getElementById('html').value
    css = document.getElementById('css').value
    js = document.getElementById('js').value
    code = `
    ${html}
    <style>
    ${css}
    </style>
    <script>
    ${js}
    </script>
    `
    localStorage.setItem('code',`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVM CODER HUB | PROJECT | ${Date()}</title>
</head>
<body>
  ${code}
</body>
</html>
    `)
    let iframe=document.getElementById('code').contentWindow.document;
    iframe.open();
    iframe.write(code);
    iframe.close();
    
}
document.getElementById('html').addEventListener('input',run)
document.getElementById('css').addEventListener('input',run)
document.getElementById('js').addEventListener('input',run)
function save() {
    pname = document.getElementById('pname').value;
    localStorage.setItem('project',localStorage.getItem('project')+`
    <div class="container" align="center">
        <div class="hd">
            <h4 class="bx bx-folder"> ${pname} </h4>
          </div>
      <textarea name="" id="dd" cols="30" rows="10">
       
      ${localStorage.getItem('code')}
 
      </textarea>
    </div>
    <br>
    `)
    swal({
        title: "Saved!",
        text: `Your project (${pname}) is saved successfully.`,
        imageUrl: 'https://th.bing.com/th/id/R.ce8c88ca0b9c796d46d79934ae9fd4c3?rik=%2fc64c6ARTI%2f%2fdg&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f5cR%2fXnK%2f5cRXnKGMi.gif&ehk=dOGQClxpBlZl1BIi8eC2WImHLr361q%2bNLF8pous5veU%3d&risl=&pid=ImgRaw&r=0'
    });
}
// function download() {
// code = localStorage.getItem('code')
// var c = document.createElement("a");
// c.download = `svm-coder-hub-project-${Date()}.html`;

// var t = new Blob([code], {
// type: "text/plain"
// });
// c.href = window.URL.createObjectURL(t);
// c.click();
// 
// }
