import React from 'react'

function Follower({follower}) {
    return (
        <div className = "card">
            <div className="card-element card-element--left">
                
                <p style={{ color: 'white', fontSize: '1.4rem'}}>Login name: {follower.login}</p>
                
            </div>
            <div className="card-element card-element--right">
                  <img src={follower.avatar_url} alt="avartar" />
            </div>
          



        </div>
    )
}

export default Follower
