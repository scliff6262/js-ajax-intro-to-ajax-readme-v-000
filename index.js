function showRepositories(event, data){
  const repos = JSON.parse(this.responseText)
  console.log(repos)
  let repoList = "<ul>"
  for(let i = 0; i < repos.length; i++){
    repoList += "<li>" + repos[i]["name"] + "</li>"
  }
  repoList += "</ul>"
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories(){
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories)
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
