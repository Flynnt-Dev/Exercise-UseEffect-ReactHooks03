import React from "react";
import "./styles.css";
import BlogSection from "./BlogSection";
import Login from "./Login";

export default function App() {
  const [user, setUser] = React.useState("");

  const handleLogin = (name) => {
    setUser(name);
  };
  const handleLogout = () => {
    setUser("");
  };

  React.useEffect(() => {
    if (user.prevState !== user) {
      console.log("User has changed");
    }
  });

  return (
    <div className="App">
      {user ? (
        <BlogSection user={user} onLogout={handleLogout} />
      ) : (
        <Login onSubmit={handleLogin} />
      )}
    </div>
  );
}

// export default class App extends React.Component {
//   state = {
//     user: ""
//   };
//   handleLogin = (userName) => {
//     this.setState({ user: userName });
//   };
//   handleLogout = () => {
//     this.setState({ user: "" });
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.user !== this.state.user) {
//       console.log(`User has changed`);
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         {this.state.user ? (
//           <BlogSection user={this.state.user} onLogout={this.handleLogout} />
//         ) : (
//           <>
//             <Login onSubmit={this.handleLogin} />
//           </>
//         )}
//       </div>
//     );
//   }
// }
