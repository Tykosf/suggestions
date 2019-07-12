module.exports = function user(req,res,next){
	const username = req.session.username;	
	req.username = username;
	res.locals.username = username;
	next();
}