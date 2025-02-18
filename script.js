let regolamentoCard = document.querySelector('#regolamento');
let attrezzaturaCard = document.querySelector('#attrezzatura');
let modalitaDiGiocoCard = document.querySelector('#modalita-di-gioco');
let colpiTecniciFondamentaliCard = document.querySelector('#colpi-tecnici-fondamentali');
let storiaCard = document.querySelector('#storia');


regolamentoCard.addEventListener('click', function() {
	window.open("pages/regolamento.html", "_self");
});

attrezzaturaCard.addEventListener('click', function() {
	window.open("pages/attrezzatura.html", "_self");
});

modalitaDiGiocoCard.addEventListener('click', function() {
	window.open("pages/modalita-di-gioco.html", "_self");
});

colpiTecniciFondamentaliCard.addEventListener('click', function() {
	window.open("pages/colpi-tecnici-fondamentali.html", "_self");
});

storiaCard.addEventListener('click', function() {
	window.open("pages/storia.html", "_self");
});