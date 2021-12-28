const getWelcomePage = async(req, res, next) => {
    return res.json({title:"Welcome to Express JS"});
}

module.exports = { getWelcomePage }