$(document).ready(() => {
	/*
	$('.carousel').carousel()({
		interval: 1000
	})
	*/
	$('.carousel').on('slide.bs.carousel',(event) => {
		console.log('slide: ', `
			方向: ${ event.direction }
			From: ${ event.from }
			To: ${ event.to }
		`)
	})
	$('.carousel').on('slide.bs.carousel',(event) => {
		console.log('slid: ', `
			方向: ${ event.direction }
			From: ${ event.from }
			To: ${ event.to }
		`)
	})
})