export const fetchPosts = (url: URL, setPosts: Function) => {
  fetch(url, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  })
    .then(response => {
        if (response.ok) {
            return response.json()
        } 
    })
    .then((data) => {
      setPosts(data)
    })
    .catch(err => {
      console.error(err.message);        
    })
}