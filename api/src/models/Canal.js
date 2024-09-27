const Usuario = require("./Usuario");

class UsuarioDono extends Usuario{
    constructor(nome, imagem, email, papel, videos){
        super(nome, imagem, email, papel,)

        this.videos = videos;
    }

    pegarCanal(){
        return `${this.nome}: ${this.videos}`
    }
}

module.exports = Canal;

