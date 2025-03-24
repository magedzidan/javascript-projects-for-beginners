function initialize_calc(){
    let form = document.getElementById('Calculator');
    let display=document.getElementById('display');
    let text='';
  
    form.addEventListener('click',function(event){
        if(event.target['id']!=='Calculator' && event.target['id']!=='=' && event.target['id']!=='C'){
            text+=(event.target['id']);

        }
        else if(event.target['id']==='='){
            text=eval(text);
        }

        else if(event.target['id']==='C'){
            text='';
        }
        display.value=text;


    })
}

initialize_calc();
