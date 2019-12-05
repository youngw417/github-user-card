import React from "react";
import gitHubimg from "./img/github1.jpg"

function Home() {
  return (
    <div style={{ margin: "0 auto", width: "80%" , marginTop: '4rem', overflow: 'hidden'}}>
      <img
        // src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        src={gitHubimg}
        alt="home page"
        style ={{maxWidth: "100%"}}
      />
    </div>
  );
}

export default Home;
