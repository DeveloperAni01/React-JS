import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {

    const [followers, setFollowers] = useState(0)
    const {username} = useParams()
    useEffect(() => {
      console.log(`api.github.com/users/${username}`);
      
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((res) => setFollowers(res))
            .catch((err) => console.log(err))
    }, [])
    
  return (
    <div className='w-full bg-slate-400 text-center text-3xl font-bold py-10'>
    Github Followers: {followers.followers}
    </div>
  )
}

export default Github