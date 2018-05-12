
$(document).ready(function() {

	
	
	// DYSLEXIE
	$('#dyslexie').click(function(){
		$("html").toggleClass("dyslexie");
		$("h1").toggleClass("dyslexie");
		$("h2").toggleClass("dyslexie");
		$("li").toggleClass("dyslexie");
	})	
	
	// TAILLE POLICE
	var taille=100;
	$('#t_plus').click(function(){
		if (taille<150) {
			taille=taille+10;
			$('html').css('font-size',taille+'%');
		}
	})
	$('#t_moins').click(function(){
		if (taille>50) {
			taille=taille-10;
			$('html').css('font-size',taille+'%');
		}
	})	

	// AFFICHAGE DE LA DIV OPTION (+)
  	$('#plus').click(function(){
   		$('#option').toggle(200); // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON
  	});

  	// ANIMATION CARTE
  		$('#card').click(function(){
  		$(this).toggleClass('flipped');
  		//$(this).css('transform','rotateY(180deg)');
  	});	

  	// ANIMATION SCROLL
  	$('#fullpage').fullpage({
		anchors: ['Portfolio', 'Parcours', 'Realisations', 'Inspirations', 'Contact'],
		menu: '#menu',
		fixedElements: '#plus',
		navigation: true,
		navigationPosition: 'right',
		verticalCentered: false,	
	});




});






