const title = document.querySelectorAll('.block__title');
const text = document.querySelectorAll('.block__text');
const spoilers = document.querySelector('.spoilers')



spoilers.onclick = event => {
    let target = event.target;

    if (!target.classList.contains('block__title')) return;
    for (let i = 0; i< title.length; i++){
        for(let j = 0; j< text.length; j++){

            if(title[i] != target){
                title[i].classList.remove('active'); 
                text[i].style.display = 'none';

            }else{
                target.classList.toggle('active');
                
                if(target.classList.contains('active')){
                    text[i].style.display = 'block';
                }else{
                    text[i].style.display = 'none';
                }
            }
        }      
    }    
}
       




