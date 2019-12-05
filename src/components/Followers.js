import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Follower from './Follower';

function Followers() {

    const[followers, setFollowers] = useState([]);

    useEffect( ()=> {
        axios.get('https://api.github.com/users/jonasschmedtmann/followers').then( res => {
            console.log('follower', res);
            setFollowers(res.data);
        })
        

    }, [])

    return (
        <div className="follower-lists">
            {
                followers.map( follower => 
                    <Follower key = {follower.id} follower = {follower} />
                )
            }
        </div>
    )
}

export default Followers
