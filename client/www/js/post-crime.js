let botaoCadastrar = document.getElementById('btn-cadastrar');



botaoCadastrar.addEventListener('click', function(event) {
    event.preventDefault();

    let tipo = document.getElementById('tipo').value;
    let descricao = document.getElementById('descricao').value;
    let latitude = document.getElementById('latitude').value;
    let longitude = document.getElementById('longitude').value;
    let data = '2017-05-30T03:00:00.000Z'

    let crimes = {
        tipo: tipo,
        descricao: descricao,
        latitude: latitude,
        longitude: longitude,
        dtOcorrencia: data 
    }

    console.log(crimes);
    $.ajax({
        type: 'post',
        url: 'http://hfmsolucoes.kinghost.net/crimes/crime/',
        data: crimes,
        success: function(response) {
            console.log('Crime Cadastrado');
        }
    })
});

