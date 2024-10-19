import React from 'react'
import Description from './Description'
import Date from './Date'
import name from './name'

const Profile = (props) => {
    const profile=props.profile
  return (
    <div>
        
        <Description description={profile.description}/>
        <Date update={profile.update} date={profile.date}/>
    </div>
  )
}

export default Profile