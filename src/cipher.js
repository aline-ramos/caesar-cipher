document.getElementById('botcifra').addEventListener('click', cifrar); 
document.getElementById('botdecifra').addEventListener('click', decifrar); 

  function cifrar (){
    let n = parseInt(document.getElementById('desloc').value);    
    let mensag = document.getElementById('cripto').value;
    let result = cifTexto(mensag,n);


    document.getElementById('cript').innerHTML = "<div id=cript> Mensagem <br><span >"+
    "<input type=text name=crypter id= result size =40 value= '"+result+"'> <br>"
  }

  function decifrar (){
    let n= parseInt(document.getElementById('desloc').value);
    let mensag = document.getElementById('cripto').value;
    let result = decifTexto(mensag,n);
        

    document.getElementById('cript').innerHTML = "<div id=cript> Mensagem <br><span >"+
    "<input type=text name=crypter id= result size =40 value= '"+result+"'> <br>"

    return (n,mensag);  
  
  }
    
    
  

  function cifTexto(texto, number){
    let textUm="";
    let num;
        
    for (let i = 0; i < texto.length; i++) {
     num = texto.charCodeAt([i]);
      
     if(num >= 65 && num <=90){
      num = ((num - 65 + number)%26)+65;
      textUm = textUm.concat(String.fromCharCode(num));
      
     }

     else if (num >= 97 && num <=122){
      num = ((num - 97 + number)%26)+97;
      textUm = textUm.concat(String.fromCharCode(num));
      
     }
     else {
       textUm = textUm.concat(String.fromCharCode(num));
       
      }

    }
    
   return textUm;
  }

  
  function decifTexto(texto, number){
    let textUm="";
    let num;
        
    for (let i = 0; i < texto.length; i++) {
     num = texto.charCodeAt([i]);
      
     if(num >= 65 && num <=90){
      num = ((num - 90 - number)%26)+90;
      textUm = textUm.concat(String.fromCharCode(num));
      
     }

     else if (num >= 97 && num <=122){
      num = ((num - 122 - number)%26)+122;
      textUm = textUm.concat(String.fromCharCode(num));
      
     
     }
     else {
       textUm = textUm.concat(String.fromCharCode(num));
      
      }

    }
   
   return textUm;
  }

  
