//Random skaiciaus funkcija

const colorNumber = ()=>{
    return Math.floor(Math.random()*200);
}
console.log(colorNumber())


//Random fono spalvos funkcija

const randomBackground = ()=>{
    return `rgb(${colorNumber()},${colorNumber()},${colorNumber()})`
}
console.log(randomBackground())


document.querySelector('form').addEventListener("input",(e)=>{
    e.preventDefault();
    fetch(`https://api.chucknorris.io/jokes/search?query=${e.target.value}`)
    .then((response)=>data=response.json())
    .then((data) =>{
        console.log(e.target.value)
        const items = document.getElementById("items");
        items.innerHTML = ""
        data.result.forEach(joke => {
            let itemDiv= document.createElement('div')
            itemDiv.className = 'card mb-3 rounded-0 col-sm-3'
            const itemInfo =`
            <div class="card-body">
            <p class="card-text">${joke.value}</p>
          </div>            
            `
            itemDiv.style.backgroundColor = randomBackground()            
            itemDiv.innerHTML = itemInfo;
            items.appendChild(itemDiv);        
        })
    })
    
})



