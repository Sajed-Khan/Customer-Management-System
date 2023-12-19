
exports.homepage = async (req, res) =>{
    const locals = {
        title: 'NodeJS',
        description: 'Free NodeJS Customer Management System'
    }

    res.render('index', locals)
}