document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:5000/getALL')
    .then(response => response.json())
    .then(data =>console.log(data));
    loadHTMLTable([]);
});
function loadHTMLTable(data){
    const table =document.querySelector('table tbody');
    let tableHTMl = "";
    if (data.lenght ===0){
        table.innerHTML = "<tr><tr class = 'no_data' colspan ='5'>No Data</tr></tr>"
    }
}