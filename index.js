var aluno  = [];

function adiciona() 
{
    var id = document.getElementById("id");
    var nome = document.getElementById("nome");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    
    var alunos = [];
    alunos.push(id.value);
    alunos.push(nome.value);
    alunos.push(n1.value);
    alunos.push(n2.value);
    alunos.push(n3.value);

    aluno.push(alunos);
    
    mostrar();
    limparTxt();    
}

function mostrar()
{
    var tabela = document.getElementById("tabela");
    var media = 0;
    var tamanho = aluno.length;
    var celula="";
    var text = "";
    text= '<table class="table table-bordered table-dark">';
    text+='<thead>';
    text+='<tr>';
    text+='<th scope="col">ID</th>';
    text+='<th scope="col">NOME</th>';
    text+='<th scope="col">NOTA 1</th>';
    text+='<th scope="col">NOTA 2</th>';
    text+='<th scope="col">NOTA 3</th>';
    text+='<th scope="col">MÉDIA</th>';
    text+='<th scope="col">SITUAÇÃO</th>';
    text+='</tr>';
    text+='</thead>';
    text+='<tbody>';
    
    for (row = 0; row < tamanho; row++) {
             
        celula = "";
        for(col=0; col<aluno[row].length; col++){        
        celula += "<td>" + aluno[row][col] + "</td>";
        console.log(celula);
        }
        media = 0;
        media= parseFloat(aluno[row][2]) + parseFloat(aluno[row][3]) + parseFloat(aluno[row][4]);
        var medFinal = media/3;
        celula+= "<td>"+medFinal + "</td>";
        if(medFinal>=5)
        {
            celula+= "<td>APROVADO</td>";
        }
        else
        {
            celula+= "<td>EXAME</td>";
        }
        text+= '<tr>';   
        text+= celula;
        text+= '</tr>';
    }    
    
    text+= '</tbody>';
    text+= '</table>';
    tabela.innerHTML = text;
}

function apagar()
{
    aluno.pop();
    mostrar();
    limparTxt();
}

function limpar()
{
    aluno = [];
    mostrar();
    limparTxt();
}

function limparTxt()
{
    var id = document.getElementById("id");
    var nome = document.getElementById("nome");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");

    id.value = "";
    nome.value = "";
    n1.value = "";
    n2.value = "";
    n3.value = "";
}