const API_KEY= "507a235489179f67b111d793bb650650"

let searchbox=document.getElementById("searchbox")

searchbox.addEventListener("keyup",onSearch)

function onSearch(event) {
    if(event.keyCode==13) {
        fetchMovies(searchbox.value)
    }
}

function fetchMovies(query) {
    const url = ""
}


