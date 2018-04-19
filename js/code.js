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
        document.addEventListener("keydown", m.oprimir);
    },
    oprimirTecla: function(event){
        p.action = event.target.getAttribute("class");
        p.digit = event.target.innerHTML;
        m.calculator(p.action, p.digit);
    
    },

    oprimir: function(tecla) {
        console.log(tecla.keyCode);
        if(tecla.keyCode == 48 || tecla.keyCode == 96){
            p.action = "number";
            p.digit = 0;
        }

        if(tecla.keyCode == 49 || tecla.keyCode == 97){
            p.action = "number";
            p.digit = 1;
        }

        if(tecla.keyCode == 50 || tecla.keyCode == 98){
            p.action = "number";
            p.digit = 2;
        }

        if(tecla.keyCode == 51 || tecla.keyCode == 99){
            p.action = "number";
            p.digit = 3;
        }

        if(tecla.keyCode == 52 || tecla.keyCode == 100){
            p.action = "number";
            p.digit = 4;
        }

        if(tecla.keyCode == 53 || tecla.keyCode == 101){
            p.action = "number";
            p.digit = 5;
        }

        if(tecla.keyCode == 54 || tecla.keyCode == 102){
            p.action = "number";
            p.digit = 6;
        }

        if(tecla.keyCode == 55 || tecla.keyCode == 103){
            p.action = "number";
            p.digit = 7;
        }

        if(tecla.keyCode == 56 || tecla.keyCode == 104){
            p.action = "number";
            p.digit = 8;
        }

        if(tecla.keyCode == 57 || tecla.keyCode == 105){
            p.action = "number";
            p.digit = 9;
        }

        if(tecla.keyCode == 187 || tecla.keyCode == 107){
            p.action = "operator";
            p.digit = "+";
        }

        if(tecla.keyCode == 189 || tecla.keyCode == 109){
            p.action = "operator";
            p.digit = "-";
        }

        if(tecla.keyCode == 88 || tecla.keyCode == 106){
            p.action = "operator";
            p.digit = "*";
        }

        if(tecla.keyCode == 111){
            p.action = "operator";
            p.digit = "/";
        }

        if(tecla.keyCode == 190 || tecla.keyCode == 110){
            p.action = "operator";
            p.digit = ".";
        }

        if(tecla.keyCode == 13){
            p.action = "equal";
            
        }

        if(tecla.keyCode == 8){
            m.delete();
            
        }

        
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
                    p.ban = false
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


