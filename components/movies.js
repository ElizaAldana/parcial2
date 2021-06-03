class movies{
    constructor(pelis){
        this.pelis = pelis;
    }

    render = ()=>{
        let component = document.createElement('div');
        let nombreComp = document.createElement('div');
        nombreComp.innerHTML = (
            '<p>'+this.pelis.id+'</p>'
        );

        
        let grade1 = document.createElement('div');
        grade1.className = 'rating';
        grade1.innerHTML = (
        '<button type="radio" name="stars" /><span class="icon">🌟</span>'
        );
        let grade2 = document.createElement('div');
        grade2.className = 'rating';
        grade2.innerHTML = (
        '<button type="radio" name="stars" /><span class="icon">🌟</span>'
        );
        let grade3 = document.createElement('div');
        grade3.className = 'rating';
        grade3.innerHTML = (
        '<button type="radio" name="stars" /><span class="icon">🌟</span>'
        );
        let grade4 = document.createElement('div');
        grade4.className = 'rating';
        grade4.innerHTML = (
        '<button type="radio" name="stars" /><span class="icon">🌟</span>'
        );
        let grade5 = document.createElement('div');
        grade5.className = 'rating';
        grade5.innerHTML = (
        '<button type="radio" name="stars" /><span class="icon">🌟</span>'
        );

        //Promedio rating
        let promedio = document.createElement('div');
        //promedio == (grade1+grade2+grade3+grade4+grade5)/5;
        promedio.className = 'promedio';
        promedio.innerHTML = (
            '<p>'+this.pelis.puntaje+'</p>'
        );
        
        component.appendChild(nombreComp);
        component.appendChild(grade1);
        component.appendChild(grade2);
        component.appendChild(grade3);
        component.appendChild(grade4);
        component.appendChild(grade5);
        component.appendChild(promedio);

        grade1.addEventListener('click',()=>{
            const db = firebase.database();
            //
            const total = this.pelis.total + 1;
            const votos = this.pelis.voto + 1;
            const promedio = total/votos;
            db.ref('Peliculas/'+this.pelis.id+'/total').set(total);
            db.ref('Peliculas/'+this.pelis.id+'/voto').set(votos);
            db.ref('Peliculas/'+this.pelis.id+'/puntaje').set(promedio);
        });
        grade2.addEventListener('click',()=>{
            const db = firebase.database();

            const total = this.pelis.total + 2;
            const votos = this.pelis.voto + 1;
            const promedio = total/votos;
            db.ref('Peliculas/'+this.pelis.id+'/total').set(total);
            db.ref('Peliculas/'+this.pelis.id+'/voto').set(votos);
            db.ref('Peliculas/'+this.pelis.id+'/puntaje').set(promedio);
        });
        grade3.addEventListener('click',()=>{
            const db = firebase.database();

            const total = this.pelis.total + 3;
            const votos = this.pelis.voto + 1;
            const promedio = total/votos;
            db.ref('Peliculas/'+this.pelis.id+'/total').set(total);
            db.ref('Peliculas/'+this.pelis.id+'/voto').set(votos);
            db.ref('Peliculas/'+this.pelis.id+'/puntaje').set(promedio);
        });
        grade4.addEventListener('click',()=>{
            const db = firebase.database();

            const total = this.pelis.total + 4;
            const votos = this.pelis.voto + 1;
            const promedio = total/votos;
            db.ref('Peliculas/'+this.pelis.id+'/total').set(total);
            db.ref('Peliculas/'+this.pelis.id+'/voto').set(votos);
            db.ref('Peliculas/'+this.pelis.id+'/puntaje').set(promedio);
        });
        grade5.addEventListener('click',()=>{
            const db = firebase.database();

            const total = this.pelis.total + 5;
            const votos = this.pelis.voto + 1;
            const promedio = total/votos;
            db.ref('Peliculas/'+this.pelis.id+'/total').set(total);
            db.ref('Peliculas/'+this.pelis.id+'/voto').set(votos);
            db.ref('Peliculas/'+this.pelis.id+'/puntaje').set(promedio);
        });

        return component;
    }
}