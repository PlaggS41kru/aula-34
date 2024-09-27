const gerarIdUnico = (lista) => {
    let id;
    do {
      id = Math.floor(Math.random() * 1000);
    } while (videos.some((item) => item.id === id));
    return id;
};

module.exports = gerarIdUnico;