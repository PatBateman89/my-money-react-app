// Higher Order Component (HOC) - A Component
// that renders another Component
// The goal of HOC is to reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info: {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       { props.isAdmin && <p>{props.info}</p>}
//       <WrappedComponent {...props} />
//     </div>
//   )
// }



// requireAuthentification

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? (
          <WrappedComponent {...props}/>
        ) : (
          <p>Hey you're not authorized to do nada mister hacker man!!!</p>
        )
      }
    </div>
  )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="I'm the info!!!" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="I'm the info!!!" />, document.getElementById('app'))
