import './ProfileCard.css' 

import profileImage1 from '../assets/이력서사진.jpg';

export default function ProfileCard() {
  return (
    <div className='ProfileCard'>
      <img className='profileImage' src={profileImage1} alt="Profile" />
      
      <div className="profileInfo">
        <div className="profileName">홍길동</div>
        <div className="profileJob">Frontend Developer</div>
      </div>

      <div className="contactInfo">
        <h4>tjtjdwls0614@gmail.com</h4>
        <h4>010.4262.4850</h4>
      </div>
    </div>
  )
}
