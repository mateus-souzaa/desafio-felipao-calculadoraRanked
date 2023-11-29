class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    } 
    escrever(){
        console.log(`O Grande ${this.type} ${this.name} com seus ${this.age} anos de idade atacou ${this.attack}`)
    }  
}

let mago = new hero("Mateus", 7000, "Mago", "Usando Magia")
let guerreiro = new hero("Ardelino", 300, "Guerreiro", "Usando Espada")
let monge = new hero("Nolan", 14000, "Monge", "Usando Artes Marciais")
let ninja = new hero("Vivi", 17, "Ninja", "Usando shuriken")
mago.escrever()
guerreiro.escrever()
monge.escrever()
ninja.escrever()