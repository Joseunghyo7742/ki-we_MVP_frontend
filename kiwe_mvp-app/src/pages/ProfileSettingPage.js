import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProfileSettingPage=()=>{
  const [profileImg, setProfileImg]= useState('');//default이미지경로 추후
  const[name, setName]=useState('');
  const [gender, setGender]= useState("");
  const[checkName,setCheckName]=useState(false);
  const [birthdate, setBirthdate]=useState(null);
  const [email, setEmail] =useState('');
  const[bio, setBio]= useState('');

  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  return(
    <div>
      <div className="text-top">
          <h2 className="logo">KiWES</h2>
          <h2 className="start">프로필 설정</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="profile-setting">
          <div className="input label">프로필 이미지</div>
          <input id="setProfileImg" type="file" onChange={(event)=>setProfileImg(event.target.files[0].name)}/>
        </div>

        <div className="name-setting">
          <div className="input label">닉네임</div>
          <input id="setName" type="text" value={name} onChange={(event)=>setName(event.target.value)} required/>
        </div>

        <div className="gender-setting">
          <div className="input label">성별 *</div>
          <label><input type="radio" value="남" checked={gender==="male"} onChange={(event)=>setGender(event.target.value)}></input></label>
          <label><input type="radio" value="여" checked={gender==="female"} onChange={(event)=>setGender(event.target.gender)}></input></label>
        </div>
        
        <div className="birth-setting">
          <div className="input label">생년월일 *</div>
          <DatePicker selected={birthdate} onChange={(date)=>setBirthdate(date)}
          dateFormat="yyyy/MM/dd"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          placeholderText="생년월일을 선택해주세요."
          required/>
        </div>

        <div className="email-auth">
          <div className="input email">소속 대학 메일 인증 (선택)</div>
          <input id="setEmail" type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <button className="btn-next" type="submit">설정 완료</button>

        <div className="bio-setting">
          <div className="input bio">자기소개 (선택)</div>
          <textarea id="setBio" type="text" value={bio} rows="5" cols="33" onChange={(event)=>setBio(event.target.value)} placeholder="자기소개를 입력해주세요.(150자 제한)"></textarea>
        </div>
      </form>
      
    </div>

  )
}
export default ProfileSettingPage;