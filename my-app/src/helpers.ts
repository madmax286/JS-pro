// const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'

export const url = new URL('https://64e17765ab0037358818387e.mockapi.io/posts/posts?limit=12&page=1&completed=true')

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