const gerarIdUnico = require("../utils/gerarIdUnico");
const {usuarios} = require("../mock/dados.json")
const Papel= require("./Papel");

class Usuario {
    constructor(nome, imagem, email, papel){
        this.id= gerarIdUnico();
        this.nome = nome ;
        this.imagem = imagem ;
        this.email = email ;

        if(!Object.values(Papel).includes(papel)) {
            throw new Error(`Papel inválido ${papel}`)
        }
        
        this.papel = papel; // obrigação
    }

    pegarPapel(){
        return this.papel;
    }
}

module.export = Usuario;