const initialState ={allBankDetails: [], bankInfo: [], errMsg: '', city: 'MUMBAI' };

const Reducer=(state=initialState, action)=>{
  switch(action.type){
    case 'FETCH_ALL_BANK':
      return {...state, allBankDetails: action.payload};    
    case 'API_ERROR':
      return {...state, errMsg: action.payload}; 
    case 'SET_CITY':
      return { ...state, city: action.payload}    
    default:
      return {...state};          
  }

}
export default Reducer;