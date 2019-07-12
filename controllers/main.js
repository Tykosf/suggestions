function showMain(req,res) {
	res.render('index');
}

function login(req,res){
	req.session.username = req.body.username;
	console.log(req.body.username);
	res.redirect('/');
}

module.exports = {
	showMain,
	login
};