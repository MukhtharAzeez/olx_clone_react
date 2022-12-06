import React,{useState,useEffect,useContext} from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/postContext';
import './Post.css';
import { useHistory } from 'react-router-dom';
function Posts() {

  const {firebase} = useContext(FirebaseContext);
  const [products,setProducts] = useState([])
  const {setPostDetails} = useContext(PostContext)
  const history = useHistory()
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost=snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:products.id
        }
      })
      setProducts(allPost)
    })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

    {
      products.map(product=>{
        return <div
            className="card"
            onClick={()=>{
              setPostDetails(product)
                history.push('/view')
           
              
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.Price}</p>
              <span className="kilometer">{product.Category}</span>
              <p className="name"> {product.Name}</p>
            </div>
            <div className="date">
              <span>{product.CreatedAt}</span>
            </div>
          </div>
      })
    }
          


        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {
      products.map(product=>{
        return <div
            className="card"
            onClick={()=>{
              setPostDetails(product)
                history.push('/view')
           
              
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.Price}</p>
              <span className="kilometer">{product.Category}</span>
              <p className="name"> {product.Name}</p>
            </div>
            <div className="date">
              <span>{product.CreatedAt}</span>
            </div>
          </div>
      })
    }
        </div>
      </div>
    </div>
  );
}

export default Posts;
