import React,{useState,useEffect,useContext} from 'react';
import { PostContext } from '../../Store/postContext';
import { FirebaseContext } from '../../Store/Context';

import './View.css';
function View() {
  const [userName,setUserName] = useState('')
  const [userPhone,setUserPhone] = useState('')

  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const {UserId} =postDetails
    firebase.firestore().collection('users').where('id','==',UserId).get().then((res)=>{
      const results=res.docs.map(doc=>({
        ...doc.data()
      }))
      
      console.log(results)
      const username =(results[0].username)
      const phone =(results[0].phone)
      setUserName(username)
      setUserPhone(phone)
    })   
  })
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.Price} </p>
          <span>{postDetails.Name}</span>
          <p>{postDetails.Category}</p>
          <span>{postDetails.CreatedAt}</span>
        </div>
       { userName && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userName}</p>
          <p>{userPhone}</p>
        </div>
        }
      </div>
    </div>
  );
}
export default View;
