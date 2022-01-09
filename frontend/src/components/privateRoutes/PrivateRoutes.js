import React from 'react';
import { Navigate  } from 'react-router-dom';

// Utils

const PrivateRoutes = ({ component: Component, ...rest }) => {  
  var session_token=localStorage.getItem('token')
  return session_token !== null ? < Component  {...rest} />: <Navigate to="/" />;

//   return (
//     <Route {...rest} render={props => (
//      session_token !== null ? (
//       < Component  {...props} />
//       ) : (
//             <Navigate to={{
//               pathname: '/',
//               state: { from: props.location }
//               }}
//             />
//           )
//       )} 
//     />
//   )
};


export default PrivateRoutes;