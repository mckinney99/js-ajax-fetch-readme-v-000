fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));

  fetch('https://api.github.com/user/repos').
    then(res => res.json()).
    then(json => console.log(json))

    const token = 'f695a54f1ddfcce7781284ef11c06a1b3c08fef9'
    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json()).then(json => console.log(json));


/* f695a54f1ddfcce7781284ef11c06a1b3c08fef9
