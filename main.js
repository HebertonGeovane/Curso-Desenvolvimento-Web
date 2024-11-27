//posso votar
let idade = prompt('Digite sua Idade: ')
let temTitulo = prompt('Tem Título de Eleitor? (sim/não): ')
let idadeMinima = 18

// Converte a idade para número
idade = parseInt(idade)

if (idade >= idadeMinima && temTitulo === 'sim') {
    console.log('Você pode Votar =) ');
} else if (idade >= idadeMinima && temTitulo === 'não') {
    console.log('Você Precisa de um Título para Votar =( ');
} else if (idade < idadeMinima && temTitulo === 'sim') {
    console.log('Você não tem idade mínima para votar =( ');
} else {
    console.log('Você não tem idade mínima para votar e precisa de um título para votar =( ');
}









