function copiarLink(texto) {
    navigator.clipboard.writeText(texto).then(function () {
        alert('Link copiado: ' + texto);
    }, function (err) {
        console.error('Não foi possível copiar: ', err);
    });
}