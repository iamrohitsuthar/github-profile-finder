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
                        </div>
                    </div>
                  </div>
                </div>`;
        });
    }
    document.getElementById('input-form').addEventListener('submit',getData,false);
});