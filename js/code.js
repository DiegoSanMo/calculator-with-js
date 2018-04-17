var p = {
    keys: document.querySelectorAll("#calculator ul li"),
    action: null,
    digit: null,
    operations: document.querySelector("#operations"),
    cont: 0,
    contPoint: false, 
    ban: false
    

}

var m = {
    start: function(){
        for(var i = 0; i < p.keys.length; i++){
            p.keys[i].addEventListener("click", m.oprimirTecla);

        }
    },
    oprimirTecla: function(event){
        p.action = event.target.getAttribute("class");
        p.digit = event.target.innerHTML;
        m.calculator(p.action, p.digit);
    
    },

    calculator: function( action, digit ){
        switch(action){
            case "number":
            if(p.ban){
                p.ban = false
                p.operations.innerHTML = digit
            }
            else{
                p.cont+=1;
                p.operations.innerHTML == 0 ? p.operations.innerHTML = digit : p.operations.innerHTML += digit;
            }
                
            break;

            case "operator":
                if(p.cont > 0){
                    p.operations.innerHTML += digit;
                    p.cont = 0
                    p.contPoint = false
                    p.ban = false
                }
                
            break;
            
            case "decimal":
                if(!p.contPoint){
                    p.operations.innerHTML += digit;
                    p.contPoint = true;
                }
            break;

            case "equal":
                p.operations.innerHTML = eval(p.operations.innerHTML);
                p.ban = true;
            break;
        }
    },

    delete: function(){
        p.operations.innerHTML = 0; 
    }

}
m.start();



