//N1 - Rewrite using async/await
async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json()
    }

    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json').catch(alert); // Error: 404



//N2 - Rewrite "rethrow" with async/await
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    }
    
    throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    while (true) {
        let name = prompt("Enter a name?", "MSHNK1");
        
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Full name: ${user.name}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
            } else {
                throw err;
            }
            
        }
    }
}

demoGithubUser();



//N3 - Call async from non-async
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait().then(result => alert(result))
}

f();