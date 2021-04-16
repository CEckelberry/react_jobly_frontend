import React from "react";

function Home() {
    let loggedIn = true;
    if(!loggedIn){
        return(
            <div>
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        );
    }

    return(
        <div>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <h3>Welcome Back, User!</h3>
        </div>
    );
}

export default Home;