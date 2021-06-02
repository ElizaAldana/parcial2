class movies{
    constructor(pelis){
        this.pelis = pelis;
    }

    render = ()=>{
        let component = document.createElement('div');
        let nombreComp = document.createElement('div');
        nombreComp.innerHTML = (
            '<p>'+this.pelis.nombre+'</p>'
        );
        
        
        //let starBtn = document.images["staroff"];
        //starBtn.className = 'staroff';

        component.appendChild(nombreComp);
        //component.appendChild(starBtn);

        return component;
    }
}