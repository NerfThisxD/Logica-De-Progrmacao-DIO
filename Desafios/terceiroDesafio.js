class cadastro {
    constructor(nome,idade,classe, hit){
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.hit = hit

    }
    toString(){
        console.log(` O ${this.classe}, com o Nickname de  ${this.nome}, ganhou um livro sagrado e agora ele pode usar ${this.hit}`)
    }
}
let suaClasse = "mago"
let mago = new cadastro("EFi","45","Mago", "Magia")
let warrior = new cadastro("PTK", "23", "Guerreiro", "Lamina")
let monge = new cadastro ("Azure", "18", "monge","Punhos")
let assasin = new cadastro ("Nerf This xD", "25", "Assasino", "Adagas")

mago.toString()
console.log("")
warrior.toString()
console.log("")
monge.toString()
console.log("")
assasin.toString()
