$(document).ready(() => {
	
	const list = $('#tab-demo .list-group a')
	list.click(function (event) {
		event.preventDefault()
		$(this).tab('show')
	})

	list.on('show.bs.tab', function (event) {
		console.log(`開始顯示: ${ event.target.getAttribute('href') }`)
		//console.log("Show")
	})
	list.on('shown.bs.tab', function (event) {
		console.log(`完全顯示: ${ event.target.getAttribute('href') }`)
		//console.log("shown")
	})
	list.on('hide.bs.tab', function (event) {
		console.log(`開始隱藏: ${ event.target.getAttribute('href') }`)
		//console.log("hide")
	})
	list.on('hidden.bs.tab', function (event) {
		console.log(`完全隱藏: ${ event.target.getAttribute('href') }`)
		//console.log("hidden")
	})
	
})