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
      let responce = await fetch(
        "https://64e17765ab0037358818387e.mockapi.io/posts/posts?limit=12&page=1"
      );
      let jsonPosts = await responce.json();
      let posts = jsonPosts;
      dispatch({ type: "SET_POSTS", payload: posts });
      return posts;
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
      let activateUser = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          // body: {
          //   uid: 'NzAyMA',
          //   token: 'bu48jv-c196d9dbaef54837ac5eea01d9c90cbf',
          // },
        }
      );
      console.log(activateUser);

      let jsonPosts = await activateUser.json();
      let posts = jsonPosts;
      dispatch({ type: 'SET_USERS', payload: posts });
      return posts;
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
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
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