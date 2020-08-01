document.getElementById('left').style.display = 'none';
document.getElementById('pin-matched').style.display = 'none';
document.getElementById('pin-wrong').style.display = 'none';

        // generte Pin by random numbers

        const generateBtn=document.getElementById('generate-pin').addEventListener('click', function(){
        var randomNewNumber= Math.floor(1000 + Math.random() * 9000);
        let inputPin=document.getElementById('random-number').value=randomNewNumber;
          
        })

        // function for inputSecondPin 

       document.getElementById('screen-input').value;
       document.getElementById('generate-pin').value;
        const resultView = document.getElementById('screen-input');

        function button(num){
        var inputSecondPin= resultView;
        inputSecondPin.value +=num;
        }

        // function for backspace 

            function backspace(){
                var screen=document.getElementById('screen-input').value;
                var backspace=screen.slice(0,  -1 );
                document.getElementById('screen-input').value=backspace;
            }

            // function for buttonCancel

            function buttonCancel( ){
                var screen=document.getElementById('screen-input').value;
                var buttonCancel=('');
                document.getElementById('screen-input').value=buttonCancel;
            }

            // pin matching 
            
           var screenInput= document.getElementById('screen-input');
            const submitBtn=document.getElementById('submit-button');
            submitBtn.addEventListener('click' , function(){
                const randomValue = document.getElementById('random-number').value;
                const resultPublic = resultView.value;
                var matched = document.getElementById('pin-matched');
                 var notMatched = document.getElementById('pin-wrong');
                if(resultPublic === randomValue){
                  matched.style.display='block'; 
                }
             else{
                matched.style.display = 'none';
                notMatched.style.display = 'block';
             }
             })

                
          