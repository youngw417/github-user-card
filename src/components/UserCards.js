import React from 'react'

function UserCards({user}) {
    return (
        <div className="user-cards">
           <div className="user-detail left">
                <h2>Name: {user.name}</h2>
                <p>Login Name: {user.login}</p>
                <o>location: {user.location}</o>
           </div>
            <div lassName="user-detail right">
                 <img src={user.avatar_url} alt='users avatar'/>
            </div>
          

        </div>
    )
}

export default UserCards
