const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.querySelector("#url");


// UI Başlatma
const ui = new UI();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);


}


function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {


    } else {
        // Yeni Film
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm); //Arayüze film ekleme


        ui.clearInputs(titleElement, directorElement, urlElement);
    }


    e.preventDefault();
}