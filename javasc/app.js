const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu')

iconoMenu.addEventListener('click', (e) => {


    menu.classList.toggle('active');
    document.body.classList.toggle('.opacity');

    const rutaActual = e.target.getAttribute('src');

    switch (rutaActual) {
        case 'imagenes/open-menu.png':
            e.target.setAttribute('src','imagenes/open-menu2.png');
            break;
        case '../imagenes/open-menu.png':
            e.target.setAttribute('src','../imagenes/open-menu2.png');
            break;
        default: if (rutaActual == 'imagenes/open-menu2.png') {
            e.target.setAttribute('src','imagenes/open-menu.png');
        }else e.target.setAttribute('src','../imagenes/open-menu.png'); 
    }

})

const bloque    = document.querySelectorAll('.bloque')
const h3        = document.querySelectorAll('.h3')

h3.forEach(  (  cadaH3 , i )=>{
    h3[i].addEventListener('click', ()=>{
        
        bloque.forEach( ( cadaBloque , i )=>{
            bloque[i].classList.remove('activo')

        })
        bloque[i].classList.add('activo')

    })

})

