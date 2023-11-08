const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';


// searchby song or artists
function searchSongs(term) {
    fetch(`${apiURL}/suggest/${term}`)
    .then(res => res.json())
    .then(data => console.log(data))
}


// event Listener

form.addEventListener('submit', e => {
    e.preventDefault();
  
    const searchTerm = search.value.trim();

    if(!searchTerm) {
        alert('please type in search term')

    } else{
        searchSongs(searchTerm)

    }
})