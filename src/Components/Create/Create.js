import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext, AuthContext} from '../../Store/Context'

const Create = () => {

  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)

  const [name,setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const date = new Date()

  const handleSubmit = () =>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('Products').add({
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt:date.toDateString() ,
        })
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              placeholder='Enter Your Name'
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              placeholder='Enter Type of Category'
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number" 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            id="fname" 
            name="Price"
            placeholder='Enter Desired Price'  
            />
            <br />
        
          <br />
          <img alt="Upload Image" width="200px" height="200px" src={image ? URL.createObjectURL(image) : "Upload Image"}></img> {/* this javaScript function to show image */}
          
            <br />
            <input 
            onChange={(e)=>{
              setImage(e.target.files[0])
            }}
            type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">Upload and Submit</button>
  
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
