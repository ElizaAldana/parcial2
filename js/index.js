const db = firebase.database();

const moviesContainer = document.getElementById('moviesContainer');

//Lectura
db.ref('Peliculas').on('value', function(data){
    moviesContainer.innerHTML = '';
    data.forEach(
        pelis => {
            let valor = pelis.val();
            console.log(valor.nombre);
            let fila = new movies(valor);
            moviesContainer.appendChild(fila.render());
        }
    );
});