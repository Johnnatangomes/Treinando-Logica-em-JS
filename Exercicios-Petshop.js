let pets = [{
    nome: "Simba",
    tipo:"Cao",
    raca:"SRD",
    idade: 5,
    genero: "M",
    vacinado: true,
    servicos: ["banho"]

},
{   nome: "Mel",
    tipo:"Cao",
    raca:"Shiba-Inu",
    idade:3,
    genero:"F",
    vacinado: true,
    servicos:["Tosa", "Banho"]
},
{   nome: "Batman",
    tipo:"Cao",
    raca:"Pastor Alemao",
    idade: 8,
    genero: "M",
    vacinado: false,
    servicos:["Tosa"]
},
{   nome: "Clara",
    tipo:"Cao",
    raca:"rottweiler",
    idade: 6,
    genero:"F",
    vacinado: false,
    servicos:["Tosa","Banho"]
}
]
const listapets = () =>{
    console.log('** TODOS OS PETS CADASTRADOS');
    for (let contador = 0; contador <pets.length; contador++){
        console.log(` 
        nome: ${pets[contador].nome}
        tipo: ${pets[contador].tipo}
        raca: ${pets[contador].raca}
        idade: ${pets[contador].idade}
        genero: ${pets[contador].genero}
        vacinado: ${pets[contador].vacinado}

    `)
    }
}
listapets();
