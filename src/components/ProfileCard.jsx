import './ProfileCard.css' 

import profileImage1 from '../assets/이력서사진.jpg';
// import profileImage2 from '../assets/이력서사진_타원형.jpg';

export default function ProfileCard() {
  return (
    <div className='ProfileCard'>
      <div>
        <img src={profileImage1} />
      </div>
      <div>
        <h2>Frontend</h2>
        <h3>Contact</h3>
        <h4>tjtjdwls0614@gmail.com</h4>
        <h4>010.4262.4850</h4>
      </div>
    </div>
  )
}
