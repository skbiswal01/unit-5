import { logout } from '../Redux/actions';
import { store } from '../Redux/store';
import { useSelector, useDispatch } from 'react-redux'
export const Logout = () => {
  const dispatch = useDispatch()
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order

  return <><button onClick={()=>{dispatch(logout(false))}}>logout</button></>;
};
