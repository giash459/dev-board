
document.addEventListener('DOMContentLoaded', function() {
    let backBtn = document.getElementById('back-btn');
    let goQuestionBtn = document.getElementById('go-question-file');

    if (backBtn) {
        backBtn.addEventListener('click', function(){
            window.location.href = 'index.html';
        });
    }

    if (goQuestionBtn) {
        goQuestionBtn.addEventListener('click', function(){
            window.location.href = 'question.html';
        });
    }
});

