let quantidadeDeAlunos= 0;
quantidadeDeAlunos=prompt("Digite a quantidade de Alunos")

for (let i = 0; i <=quantidadeDeAlunos; i++) {
    if  (i == 0)    {
            console.log ( i + " Zero");
        }    else if  ( i % 2 == 0 ) 
    {
                 console.log (i  +  " Par") ;
        }      else     {
              console.log ( i + " Impar") ;
         }
    
}