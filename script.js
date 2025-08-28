function irhabilidades(){
    //ROLAGEM HABILIDADES
    const elementos = document.querySelectorAll('.especialidades');
    if(elementos.length > 0){
        elementos[0].scrollIntoView({
            behavior: 'smooth'
        })
    }
}

function irprojeto(){
    //ROLAGEM PROJETOS
    const elementos = document.querySelectorAll('.meusP');
    if(elementos.length > 0){
        elementos[0].scrollIntoView({
            behavior: 'smooth'
        })
    }
}

function irsobre(){
    //ROLAGEM PROJETOS
    const elementos = document.querySelectorAll('.t-sobre');
    if(elementos.length > 0){
        elementos[0].scrollIntoView({
            behavior: 'smooth'
        })
    }
}

function ircontatos(){
    //ROLAGEM PROJETOS
    const elementos = document.querySelectorAll('.contatos');
    if(elementos.length > 0){
        elementos[0].scrollIntoView({
            behavior: 'smooth'
        })
    }
}


function baixar() {
    //BAIXA O CV
    const Url = 'Download/CV.GabrielAntonio.pdf'; 
    const link = document.createElement('a');
    
    link.href = Url;
    link.download = 'CV.GabrielAntonio.pdf'; 
    link.click(); 
}


// Inicializa o EmailJS
  emailjs.init("IN0B0SXeebKEc7NP6"); 

  function enviar(event) {
    event.preventDefault(); a

    const form = document.getElementById("form-contato");

    emailjs.sendForm("service_oubskpd", "template_lf40ien", form)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      }, (error) => {
        alert("Erro ao enviar a mensagem. Tente novamente.\n" + JSON.stringify(error));
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-contato").addEventListener("submit", enviar);
  });