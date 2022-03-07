let getUserRepos = function() {
    // format the api url
    let apiurl = "https://api.github.com/users/" + user + "/repos";

    // make a request
    fetch(apiurl).then(function(response) {
        response.json().then(function(data){
            console.log(data);
        })
    })
}
console.log("outside");

getUserRepos();