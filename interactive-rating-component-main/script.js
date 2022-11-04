

const btns= document.querySelectAll('[role="button"]');

const submitBtn= document.getElementById('submit')

const feedBackBox = document.getElementById('feedback-box')

const thankYouBox = document.getElementById('than-you-box')

const selectRating = document.getElementById('selected-rating')


btns.forEach((btns))  => {

    btns.addEventListener('click', function (e){
        let.selectedBtn = e.currentTarget;
        for (let index = 0; index<btns.length; index++) {
            
            if (btns[index].getAttribute('aria-selected')== 'true'){

                btns[index].setAttribute('aria-selected', false)
                selectedBtn.setAttribute('aria-selected', true);
                selectRating.textContent=selectedBtn.id;
            }
            else{

                selectedBtn.setAttribute('aria-selected', true);
                selectRating.textContent=selectedBtn.id;
            }   
        }
    })
}

