//funcão para reproduzir os videos de sobre em loop um após o outro

function iniciarPlayerDeVideos(){
    const videoPlayer = document.getElementById("videoPlayer");


    //constante para guardar a lista de videos

    const videos =[
        "video/bicicleta.mp4",
        "video/escalada.mp4",
        "video/patins.mp4"
    ];

    let indiceAtual = 0;
    
    function tocarProximo(){ 
        videoPlayer.src = videos[indiceAtual];
        videoPlayer.play();
        indiceAtual = (indiceAtual + 1) % videos.length;

    }

    videoPlayer.addEventListener("ended", tocarProximo); 

    tocarProximo(); //inicia o proximo video
    
    
}

  // Chama a função quando a página carregar
    window.onload = iniciarPlayerDeVideos;