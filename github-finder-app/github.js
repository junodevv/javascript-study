// Client ID = 4316df407a5291c71287
// Client secrets = 75b4c3d3b757143828f6f0177df866a5eab3eb0c

class Github{
    constructor(){
        this.client_id = '4316df407a5291c71287';
        this.client_secret = '75b4c3d3b757143828f6f0177df866a5eab3eb0c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        // fetch()를 이용해 HTTP 요청을 보내고 응답을 받는다.
        const porfileResponse = 
            await fetch(
                `https://api.github.com/users/${user}?
                client_id=${this.client_id}&
                client_secret=${this.client_secret}`
            );

        const repoResponse = 
            await fetch(
                `https://api.github.com/users/${user}/repos?
                per_page=${this.repos_count}
                &sort=${this.repos_sort}
                &client_id=${this.client_id}
                &client_secret=${this.client_secret}`
            );
        
        // fetch 로 받은 응답을 json형식으로 변환
        const profile = await porfileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}

