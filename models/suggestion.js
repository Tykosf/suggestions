let nextid = 1;

const suggestions = [{
	id: 1,	
	title: 'DMC 5',
	voters: new Set()
}];

function getOne(id){
	return suggestions.find(suggestion => suggestion.id == id);
}
 
function getAll(){
	return suggestions;
}

function add(title) {
		suggestions.push({
		id: ++nextid,
		title,
		voters: new Set()
	});	
}


module.exports = {
	getAll,
	add,
	getOne
};
