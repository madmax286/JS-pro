import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const INCREMENT_CREATOR = (payload: number) => {
  return { type: "INCREMENT", payload };
};

// export const FETCH_POSTS = () => {
//   return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
//     dispatch({ type: "SET_LOADING" });

//     let url = `https://64e17765ab0037358818387e.mockapi.io/posts/posts?limit=12&page=1`

//     const fetchPosts = (url: any) =>
//       fetch(url, {
//         method: "GET",
//         headers: { "content-type": "application/json" },
//       });

//      fetchPosts(url)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//       })
//       .then((data) => {
//         console.log(data);
//         dispatch({ type: "SET_POSTS", payload: data });
//         dispatch({ type: "SET_LOADING" })

//       })
//       .catch((err) => {
//         console.error(err.message);
//       })
//       .finally(() =>
//         dispatch({ type: "SET_LOADING" })
//       )
//   };
// };

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      let response = await fetch(
        // "https://64e17765ab0037358818387e.mockapi.io/posts/posts?limit=12&page=1"
        "https://studapi.teachmeskills.by/blog/posts/?limit=12"
      );
      let jsonPosts = await response.json();
      let posts = jsonPosts.results;
      dispatch({ type: "SET_POSTS", payload: posts });
      return posts;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const FETCH_SELECTED_POST = (navigate: any, id: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      let response = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/${id}`
      );
      let jsonPost = await response.json();
      let post = jsonPost.results;
      dispatch({ type: "SET_SELECTED_POST", payload: post });
      navigate(`/blog/${id}`)
      return post;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

interface IUser {
  username: string;
  email: string;
  password: string;
}
export const CREATE_USER = (payload: IUser) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );
      let jsonUser = await response.json();
      let user = jsonUser.results;
      dispatch({ type: 'SET_USERS', payload: user });
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: 'SET_LOADING' })
    }
  };
};

export const ACTIVATE_USER = (navigate: any, uid: string, token: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    
      await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({navigate, uid, token}),
        }
      )
      .then (() => {
        dispatch({ type: "SET_ACTIVATION" })
        navigate('/success')
      })  
      .finally (() => {
        dispatch({ type: "SET_LOADING" });
      })
  }
};

export const SIGN_IN = (navigate: any, email: string, password: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    
      await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/create/",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({email, password}),
        }
      )
      .then (
        (data) => data.json()
      )
      .then ((data) => {
        if (data.access) {
          navigate('/success');
          localStorage.setItem('access', data.access)
        }        
      })  
      .finally (() => {
        dispatch({ type: "SET_LOADING" });
      })
  }
};