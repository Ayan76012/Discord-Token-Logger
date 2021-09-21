//Use this to login to an account using accounts token
function login(token) {
    setInterval(() => document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`)
    location.reload();
};

login("TOKEN");