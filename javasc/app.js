const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu')

iconoMenu.addEventListener('click', (e) => {


    menu.classList.toggle('active');

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
const tituloAcordeon        = document.querySelectorAll('.tituloAcordeon')

tituloAcordeon.forEach(  (  cadaH3 , i )=>{
    tituloAcordeon[i].addEventListener('click', ()=>{
        
        bloque.forEach( ( cadaBloque , i )=>{
            bloque[i].classList.remove('activo')

        })
        bloque[i].classList.add('activo')

    })

})


const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarnos, te contestaremos pronto!')
    }
}
