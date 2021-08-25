// Query Selectors
const qs = e => document.querySelector( e );
const qsa = e => document.querySelectorAll( e );

// Variables
const totalSlides = qsa( '.slider-item' ).length

let currentSlide = 0;

//Ajusta a largura total do slide para o total de item existentes 
qs( '.slider-width' ).style.width = `calc(100vw * ${totalSlides})`;

// Coloco os controles do slide no meio da tela de acordo com a altura da tela do usuário
qs( '.slider-controls' ).style.height = `${qs( '.slider' ).clientHeight}px`;

// Retorna um item no slide
function goPrev(){
	currentSlide--;

	if (currentSlide < 0) {
		currentSlide = totalSlides - 1;
	}

	updateMargin();
};

// Vai para o próximo item no slide
function goNext(){
	currentSlide++;

	if (currentSlide > (totalSlides - 1)) {
		currentSlide = 0
	}

	updateMargin();
};

// Atualiza a margem do slide
function updateMargin () {
	let newMargin = (currentSlide * document.body.clientWidth);
	document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`
}