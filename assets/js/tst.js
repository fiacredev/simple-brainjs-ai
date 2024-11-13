async function boot(){
	var fetch_data = await fetch('../data/dataset1.json');
	var result = await fetch_data.text();
	result = JSON.parse(result);
	console.log(result);

}
boot();