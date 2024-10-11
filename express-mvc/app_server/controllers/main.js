const index = (req, res) => {
 	res.render('index', { title: 'Express'}); 
}; 

// controller untuk halaman ke kontak
const kontak = (req, res) => {
    res.render('kontak', { title: 'Express'});
};
module.exports = { index, kontak }; 
