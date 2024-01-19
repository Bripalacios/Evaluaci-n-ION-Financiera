  
/* En la ejecución de este script, explica el resultado: 

let text = "1212221122";
text = text.replaceAll("1", "2");
text = text.replaceAll("2", "1");
document.getElementById("demo").innerHTML = text;
*/

    let text = "1212221122";
    text = text.replaceAll("1", "2");
    console.log(text + ` Primer reasignación`); 
    /*
      Primer resultado:
        2222222222
    */
    text = text.replaceAll("2", "1");
    console.log(text + ` Segunda reasignación`);
    /* 
    Segundo resultado:
      1111111111
    */

    /* Esta instrucción emitirá un error en la consola, dado que no hay un elemento en HTML con el id "demo"*/ 
    document.getElementById("demo").innerHTML = text;
    
    /* Adicionalmente agregue un elemento en HTML para commprobar el funcionamiento*/
    
    