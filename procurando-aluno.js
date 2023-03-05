const alunos = ["joão", "Juliana", "Ana", "Caio"];
const medias = [10,8,7.5,9];

const listadeAlunosEMedias = [alunos,medias];


function verificarAluno(aluno){

    if(listadeAlunosEMedias[0].includes(aluno)){
        const indice = listadeAlunosEMedias[0].indexOf(aluno);
        const mediaAluno = listadeAlunosEMedias[1][indice];
        console.log(`O aluno ${aluno} está cadastrado, e sua nota é ${mediaAluno}`)
        
    }else{
    console.log(`O aluno ${aluno}, não está cadastrado`)

    }
}

verificarAluno("Caio")
