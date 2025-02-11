//Pergunta ao Usuário
estado = (prompt("Digite o estado em que você mora")) //Variável definida pelo usuário

//Resposta
if (estado === "São Paulo" || estado === "Rio de Janeiro" || estado === "Minas Gerais" || estado === "Espírito Santo") { //Caso o estado esteja na zona Sudeste
    console.log("Por você morar na zona Sudeste seu frete é de R$10,00."); //Mensagem

} else if (estado === "Paraná" || estado === "Santa Catarina" || estado === "Rio Grande do Sul") { //Caso o estado esteja na zona Sul
    console.log("Por você morar na zona Sul seu frete é de R$20,00."); //Mensagem

} else if (estado === "Mato Grosso do Sul" || estado === "Goías" || estado === "Mato Grosso") { //Caso o estado esteja na zona Centro-Oeste
    console.log("Por você morar na zona Centro-Oeste seu frete é de R$30,00."); //Mensagem

} else if (estado === "Bahia" || estado === "Maranhão" || estado === "Piaui" || estado === "Ceará" || estado === "Rio Grande do Norte" || estado === "Paraíba" || estado === "Pernambuco" || estado === "Alágoas" || estado === "Sergipe") { //Caso o estado esteja na zona Nordeste
    console.log("Por você morar na zona Nordeste seu frete é de R$40,00."); //Mensagem

} else if (estado === "Tocantins" || estado === "Pará" || estado === "Amapá" || estado === "Amazonas" || estado === "Roraima" || estado === "Rondônia" || estado === "Acre") { //Caso o estado esteja na zona Norte
    console.log("Por morar na zona Norte seu frete é de R$50,00."); //Mensagem

} else { //Caso o que o usuário digitou corresponda a nenhuma das opções acima
    console.log("Você digitou nenhum estado correspondente, digite novamente por gentileza."); //Mensagem
}