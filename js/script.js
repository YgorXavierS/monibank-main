import cpf_valido from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll("[required]");


camposDoFormulario.forEach(function(item){
    item.addEventListener("blur",()=>verificaCampo(item))
})


function verificaCampo(campo){
    if(campo.name=="cpf" && campo.value.length >= 11){
        cpf_valido(campo)
    }
}