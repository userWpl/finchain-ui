window.onload=function(){ 
	console.log(111)
  var mySwiper = new Swiper('.swiper-container', {
						loop: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
					})
}
	