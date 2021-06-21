const tree=document.querySelector(".tree")

tree.addEventListener("click",(e) => {
    let child = e.target.childNodes;
    child.forEach(element => element.hidden=!element.hidden);
    
        
})


    tree.addEventListener('mouseover', (e) => {
        e.target.style.fontSize = '13px'
            e.target.style.color = 'red'
        })
    tree.addEventListener('mouseout', (e) => {
        e.target.style.fontSize = '10px'
            e.target.style.color = 'black'
        })