const getWelcomePage = async(req, res, next) => {
    res.render("index", { title: "Express JS" });
}

module.exports = { getWelcomePage }