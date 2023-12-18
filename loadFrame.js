export function loadComponent(containerId){
    const url = 'http://localhost:8000';
    fetch(`${url}/${containerId}`).then(response=>response.text()).then(html=>{
        document.getElementById(containerId).innerHTML = html
    });
}