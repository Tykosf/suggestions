const Suggestions = require('../models/suggestion'); 

function showSuggestions(req,res){
	//Показати список пропозицій 
	const suggestions = Suggestions.getAll();
	res.render('suggestions',{
		suggestions
	});
}

function showSuggestion(req,res){
	//Показати 1 пропозицію 
	const suggestion = Suggestions.getOne(req.params.id);
	res.render('suggestion',{
		suggestion
	}); 
}


function createSuggestion(req,res){
	//Створити пропозицію
	//Перенаправити на список 
	const title = req.body.title;
	Suggestions.add(title);
	req.session.message = 'Пропозиція прийнята';
	res.redirect('/suggestions'); 
}

function toggleVote(req,res){
	//Добавити голос
	const username = req.username;
	const suggestion = Suggestions.getOne(req.params.id);
	if(suggestion.voters.has(username))
	{
		suggestion.voters.delete(username);
		req.session.message = 'Голос скасований';
	}
	else{
	suggestion.voters.add(username);
	req.session.message = 'Голос прийнято';
	}

	res.redirect('back');
}

module.exports = {
	showSuggestions,
	showSuggestion,
	createSuggestion,
	toggleVote
};