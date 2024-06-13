const url = window.location.search
const urlParams = new URLSearchParams(url)
const id = urlParams.get('id')
const urlAPI = "https://rickandmortyapi.com/api" 

fetch(urlAPI + "/character/" + id)  
    .then(response => response.json())
    .then(character => {
        const characterTemplate = `
        <div id="character">
            <img id="img" src="${character.image}" alt="">
            <div class="detail">
                <h1>${character.name} </h1>
                <h2>${character.status} - ${character.species}</h2>
                    <a href="location.html?id=${character.id}">
                <p>Last known location:</p>
                <p>${character.origin.name}</p>
                <h3>First seen in:</h3>
                <p>${character.location.name}</p>
                    </a>
            </div>
        </div>`
    CharacterContainer.innerHTML += characterTemplate
    }) 
