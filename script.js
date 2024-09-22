const newItem = document.querySelector('.new-sign');

newItem.addEventListener('click',function(){
    document.querySelector(".new-sign").style.display="none"
    document.querySelector(".addMood-form").style.display="flex"
})

const addMoodForm = document.querySelector('.addMood-form');

let submittedDateList = [];

if(submittedDateList.length === 0){
    document.querySelector("#clearBtn").style.display="none"
}

addMoodForm.addEventListener('submit',function(){
    event.preventDefault();

    const submittedDate = document.querySelector('#date').value;
    const submittedMood = document.querySelector('#selectMood').value;

    submittedDateList.push(submittedDate);

    if(submittedDateList.length > 0){
        document.querySelector("#clearBtn").style.display="block"
    }
    

    function moodEmojiSet() {
        let moodEmojiClass = '';
        if (submittedMood === "Happy") {
            moodEmojiClass = "bx bx-happy";
        } else if (submittedMood === "Sad") {
            moodEmojiClass = "bx bx-sad";
        } else if (submittedMood === "Angry") {
            moodEmojiClass = "bx bx-angry";
        } else if (submittedMood === "Neutral") {
            moodEmojiClass = "bx bxs-face";
        } else {
            moodEmojiClass = "bx bxs-face";
        }
        return `<i class="${moodEmojiClass}"></i>`;
    }

    const getParent = document.querySelector('.data-item-box');
    const newDiv = document.createElement('div');
    newDiv.classList.add("item")
    newDiv.innerHTML = `
            <div class="day-id">
                <i class='bx bxs-calendar' ></i>
                <p>${submittedDateList[submittedDateList.length-1]}</p>
            </div>
            <p>${Date()}</p>
            <div class="mood-view">
                ${moodEmojiSet()}
                <p id="mood-name" >${submittedMood}</p>
            </div>
    `
    getParent.appendChild(newDiv);
});

document.getElementById("clearBtn").addEventListener('click',function(){
    const clearList = document.querySelector('.data-item-box');
    while (clearList.firstChild) {
        clearList.removeChild(clearList.firstChild);
    }
    
    submittedDateList.length = 0;

    if(submittedDateList.length === 0){
        document.querySelector("#clearBtn").style.display="none"
    }
});