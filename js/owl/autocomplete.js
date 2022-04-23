$(function() {
  var esportes = [
    "Resident Evil: Bem-Vindo a Raccoon City",
    "Jogos Mortais - O Final",
    "Invocação do Mal 3: A Ordem do Demônio",
    "A Maldição da Chorona",
    "It - A Coisa",
    "Terror em Silent Hill",
    "A Entidade",
    "Atividade Paranormal: Ente Próximo",
    "Uma Noite de Crime - A Fronteira",
    "Annabelle 3: De Volta Para Casa",
    "O 3º andar - Terror na Rua Malasaña",
    "Veronica",
    "A Casa de Cera",
    "Doutor Sono",
    "Maria e João: O Conto das Bruxas",
    "A Freira",
    "O Segredo da Cabana",
    "A Hora da Sua Morte",
    "Amizade Maldita",
    "Halloween Kills: O Terror Continua",
    "Pânico"
  ];
  $("#complete" ).autocomplete({
    source: esportes
  });
});