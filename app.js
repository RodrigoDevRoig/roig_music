function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value 
    
    // Se campoPesquisa for uma string sem nada 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Busca inválida! Digite um estilo de música eletrônica.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log (campoPesquisa);

    console.log(section); // Loga a seção no console para verificação
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulo includes campoPesquisa 
              if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // Cria um novo elemento
                resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${dado.sobre} target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Ouça</a>
        </div>
      `;  
     }       
   }
  
   if (!resultados) {
       resultados = "<p>Por favor, pesquise entre os estilos: Techo, House, Trance ou Drum and Bass.</p>"
   }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }

    
 
 
 
