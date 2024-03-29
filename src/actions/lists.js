const API_URL = 'https://sitejet-api.herokuapp.com/'

// This will extract the list of native languages and foreign languages from the list database
export const getLists = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_LISTS'})
        return fetch(API_URL + '/lists')
        .then(resp => resp.json())
        .then(lists => { dispatch({type: "FETCH_LISTS", payload: lists})})
    }
}  
  
// This will add new words to the list database
export const addList = (list) => {
    return (dispatch) => {
        dispatch({type: "ADD_LIST"}, list)
        return fetch(API_URL + '/lists', {
            method: 'POST',
            body: JSON.stringify(list),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(list => dispatch({type: 'LIST_ADDED', payload: list}))
    }
}

//This will delete values from the list database
export const deleteList = (list_id) =>{

let data = {
    method: 'DELETE',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
}
return () => {
    fetch(API_URL + `/lists/${list_id}`, data)
    }
}