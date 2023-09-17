export default function MaiorDeidade(campo){
    const dataNascimento = new Date(campo.value)
    console.log(validaIDade(dataNascimento))

}

function validaIDade(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= dataMais18
}