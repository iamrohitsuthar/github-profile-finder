$(document).ready(function() {
    function getData(e) {
        e.preventDefault();
        console.log('here')
        var name = document.getElementById('username').value;
        $.get(
        "https://api.github.com/users/"+name,
        function(data, status) {
            document.getElementById('content').innerHTML = `<div>
                  <div class="panel panel-default">
                    <div class="panel-heading">Profile Information</div>
                    <div class="panel-body" id="panel-body">
                        <div class="row">
                            <div class="col-md-12">
                                <img class="img img-responsive img-circle" src="${data.avatar_url}" height="120" width="120">
                            </div>
                        </div><br>
                        <div class="row">
                            <div class="col-md-12" id="short-info">
                                <table>
                                    <thead>
                                        <tr>
                                        <th>Followers&nbsp;&nbsp;</th>
                                        <th>Repositories&nbsp;&nbsp;</th>
                                        <th>Following</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>${data.followers}</td>
                                        <td>${data.public_repos}</td>
                                        <td>${data.following}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><br><br>
                        <div id="long-info">
                            <table class="table table-reponsive table-striped table-hover">
                                <caption>User Information</caption>
                                <thead>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Name: </td>
                                        <td>${data.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Location: </td>
                                        <td>${data.location}</td>
                                    </tr>
                                    <tr>
                                        <td>Created at: </td>
                                        <td>${data.created_at}</td>
                                    </tr>
                                    <tr>
                                        <td>Public Repos: </td>
                                        <td>${data.public_repos}</td>
                                    </tr>
                                    <tr>
                                        <td>Public Gists: </td>
                                        <td>${data.public_gists}</td>
                                    </tr>
                                    <tr>
                                        <td>Profile URL: </td>
                                        <td><a href="${data.html_url}" target="_blank">${data.html_url}</a></td>
                                    </tr>                  
                                </tbody>
                            </table>
                        </div><br>
                        <div id="repo-info" class="flex-container">
                        </div>
                    </div>
                  </div>
                </div>`;
        });
        $.get("https://api.github.com/users/"+name+"/repos",
              function(data,status) {
                console.log(data);
                $.each(data,function(index,repo) {
                    document.getElementById('repo-info').innerHTML += `
                    <a href="${repo.html_url}" target="_blank" id="card-link">
                    <div class="my-card flex-item">
                        <div id="card-head" class="my-card-head">
                            <p id="head-initial">${repo.name[0].toString().toUpperCase()}</p>
                        </div>
                        <div class="my-card-body">${repo.name}
                            <br><br>
                            <table id="repo-table">
                                <thead>
                                    <tr>
                                        <th><img src="images/fork.png" width="24" height="24"></th>
                                        <th><img src="images/star.png" width="24" height="28"></th>
                                        <th><img src="images/watch.png" width="24" height="20"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${repo.forks_count}</td>
                                        <td>${repo.stargazers_count}</td>
                                        <td>${repo.watchers_count}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div></a>
                    `;
                });
                var r = document.getElementsByClassName('my-card-head');
                for(var i=0;i<r.length;i++) {
                    r[i].style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
                }
              });
    }
    document.getElementById('input-form').addEventListener('submit',getData,false);
});