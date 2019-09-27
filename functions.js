        function substituir(){
          // Altera conteúdo do titulo da pagina ao clicar em play
          var tituloPage = document.getElementById('titlePage').innerHTML;
          var substituicaoT = tituloPage.replace("Turn your vibe down, it's time to play...",'The music is playing...');
          document.getElementById('titlePage').innerHTML = substituicaoT;
        }
        function substituirt(){
          // Altera conteúdo do titulo após ser alterado pelo botão play da pagina 
          var tituloPagevoltar = document.getElementById('titlePage').innerHTML;
          var substituicaoTi = tituloPagevoltar.replace('The music is playing...','Music paused...')
          document.getElementById("titlePage").innerHTML = substituicaoTi;
        }
        function substituirPause(){
          // Altera conteúdo do titulo após ser alterado pelo botão pause da pagina
          var subsPausefrase = document.getElementById('titlePage').innerHTML;
          var subsPause = subsPausefrase.replace('Music paused...','The music is playing...');
          document.getElementById('titlePage').innerHTML = subsPause;
        }
        function stp(){
          // Altera conteúdo do titulo da pagina ao clicar em pause
          var subsTitulo = document.getElementById('titlePage').innerHTML;
          var subsTituloPause = subsTitulo.replace("Turn your vibe down, it's time to play...", "Music paused...")
          document.getElementById('titlePage').innerHTML = subsTituloPause;
        }
          function openNav() {
            //Script para funcionamento de menu lateral (Abrir)
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
        
        function closeNav() {
        //Script para funcionamento de menu lateral (Fechar)
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
        }
        var x = document.getElementById("myAudio"); 
        //Script para iniciar música
        function playAudio() { 
            x.play(); 
        } 
        //Script para pausar música
        function pauseAudio() { 
            x.pause(); 
        } 