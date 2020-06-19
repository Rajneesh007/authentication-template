//modules require kite
const dependable = require('dependable');
const path = require('path');

//ik container bnaya jo requrie module store krda 
const container = dependable.container();

//creating an array of modules we want to require in multiple files
const simpleDependancies = [
    ['_' , 'lodash'],
    ['passport' , 'passport'],
    ['validator', 'express-validator'],
    ['formidable', 'formidable'],
    ['async', 'async'],
    ['Users', './models/user.js']
];

// hun hr module nu container ch register krna wa 
simpleDependancies.forEach(function(dependancy){
container.register(dependancy[0], function(){
       return require(dependancy[1]);
    });
});

// adding folder paths to container to access custom js files
container.load(path.join( __dirname , '/controller'));
container.load(path.join( __dirname , '/models'));

//registering the paths of folder loaded above in container
container.register('container', function(){
    return container;
});


//export container
module.exports = container;

