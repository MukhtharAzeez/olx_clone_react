import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../Store/Context';

const Create = () => {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const [image,setImage] = useState(null);
  const date=new Date()
  const handleUpload=()=>{
    const storageRef= firebase.storage().ref(`/image/${image.name}`);
       storageRef.put(image).then((ref)=>{
       storageRef.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          Name:name,
          Category:category,
          Price:price,
          url,
          UserId:user.uid,
          CreatedAt:date.toDateString()
        }).then(()=>{
          alert('Product added successfully')
          history.push('/')
        })
       })
        
      
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>{
              setName(e.target.value)
              }}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>{
              setCategory(e.target.value)
              }}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
             className="input"
             type="number"
             value={price}
              onChange={(e)=>{
              setPrice(e.target.value)
              }}
             id="fname" 
             name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ?URL.createObjectURL(image) : ''}></img>
         
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleUpload} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
