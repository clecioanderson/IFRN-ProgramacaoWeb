
var listaCompras = JSON.parse(lista);
listaUL = document.getElementById("lista"); // dessa forma a variavel podera ser usada em qualquer    
    // funcao abaixo
        function inserir(){
        listaUL = document.getElementById("lista"); // dessa forma a variavel podera ser usada em qualquer
        var textoEntrada = document.getElementById("entrada").value;
            // Testar se o input já possui algum item, caso contrário invoca o alert solicitando a ação do usuário
            if(textoEntrada != ""){
                // Insere um item na lista não ordenada com o checkbox e classes CSS associadas
                listaCompras.push(textoEntrada);
                listaUL.innerHTML += "<li><input type='checkbox' class='caixa' id='"+textoEntrada+"' value='"+textoEntrada+"' onclick='riscar("+'"'+textoEntrada+'","label'+textoEntrada+'"'+")'> <label for='"+textoEntrada+"' class='' id='label"+textoEntrada+"'>"+textoEntrada+"</label></li>";
                // Após inserir o item na lista apaga o conteudo do input
                document.getElementById("entrada").value = "";
            }else {
                window.alert("Alerta! Insira o nome do item.");
            }  
        }

        function listar(){
            listaUL = document.getElementById("lista");
            listaCompras.forEach(item => {
                listaUL.innerHTML += "<li><input type='checkbox' class='caixa' id='"+item+"' value='"+item+"' onclick='riscar("+'"'+item+'","label'+item+'"'+")'> <label for='"+item+"' class='' id='label"+item+"'>"+item+"</label></li>";;
            });
        }

        function limpar(){
            listaUL = document.getElementById("lista");
            listaUL.innerHTML =" ";
        }

        function apagarById(){
            listaUL = document.getElementById("lista");
            listaCompras.forEach(item => {
                if(document.getElementById(item).checked){
                    delete listaCompras[listaCompras.indexOf(item)];
                }
            }); 
            limpar();
            listar();
        }
        /*
        function apagarUltimo(){
            listaCompras.pop(); 
            limpar();
            listar();
        }
        */
        function riscar(caixa, rotulo){
            var caixa = document.getElementById(caixa);
            var rotulo = document.getElementById(rotulo);
            if(caixa.checked){
                rotulo.setAttribute("class", "riscado");
            }else{
                rotulo.setAttribute("class", "");
            }
        }