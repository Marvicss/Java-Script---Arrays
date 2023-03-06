const alunos = ["joão", "Juliana", "Ana", "Caio"];
const medias = [10,8,7.5,9];

const listadeAlunosEMedias = [alunos,medias];


function verificarAluno(aluno){

    if(listadeAlunosEMedias[0].includes(aluno)){
/*         const alunos= listadeAlunosEMedias[0]
        const medias = listadeAlunosEMedias[1] */

        const [alunos,medias] = listadeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`O aluno ${aluno} está cadastrado, e sua nota é ${mediaAluno}`)
        
    }else{
    console.log(`O aluno ${aluno}, não está cadastrado`)

    }
}

verificarAluno("Caio")
