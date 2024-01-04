// 객체 생성
const github = new Github;
const ui = new UI;
// <input> 의 id
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    console.log("searchUser event 발생!");
    // <input> 입력된 값
    const userText = e.target.value; 

    if(userText !== ''){
        // HTTP 호출
        github.getUser(userText)
            .then(data =>{
                if(data.profile.message === 'Not Found'){
                    // alert 보여주기
                    ui.showAlert('User not found', 'alert alert-danger');
                }else{
                    // profile 보여주기
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
});