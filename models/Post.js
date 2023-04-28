const db = require('./db');
//criando a tabela postagensconst
Post = db.sequelize.define('postagens', {
    titulo: {
        type:db.Sequelize.STRING
    },
    conteudo: {
        type:db.Sequelize.TEXT
    }
});
    
//Post.sync({force:true});

module.exports = Post;