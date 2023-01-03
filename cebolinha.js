const textarea = document.querySelector("textarea");
const button2 = document.querySelector("#button2");
const button1 = document.querySelector("#button1");
button2.addEventListener('click', () =>  falaCebolinha());
button1.addEventListener('click', () => limpar());


function falaCebolinha(){
    const frase = document.querySelector("#frase").value;
    
    let fraseCebolinha="";
    
    for (let letra of frase) {
        if (letra==="r" || letra==="R"){
            fraseCebolinha+="l";
    
        }else{
            fraseCebolinha += letra ; 
        }
     }
    return textarea.value = fraseCebolinha;
    }
  function limpar(){
 textarea.value="";
 frase.value="";
  }
 
    
    
        
        
      