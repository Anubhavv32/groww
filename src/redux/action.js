import axios from 'axios';

export const setCity = (city) =>(dispatch) => {
  dispatch({type:'SET_CITY',payload:city});
}


export const fetchBankData = (city)=> (dispatch) => {
  dispatch({type:'FETCH_ALL_BANK',payload:[]});
  const url =`https://vast-shore-74260.herokuapp.com/banks?city=${city}`;
    axios.get(url).then(res =>{
      console.log(res.data, 'working');
      dispatch({type:'FETCH_ALL_BANK',payload:res.data});
    }).catch(err => {
      console.log(err.message);
      const { message } = err;
      alert(message);
      dispatch({type: 'API_ERROR', payload: message})
    })
  }