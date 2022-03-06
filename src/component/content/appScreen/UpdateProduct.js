import react from 'react'
import firebaseDb from 'firebase'
import firebase from 'firebase/app';
import { Form ,Button } from 'react-bootstrap';

function UpdateProduct(){
/*
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
         
           return(
        <Form className='form' onSubmit >
            <Form.Group className="mb-3 container" controlId=" " >
                <Form.Label className='align-self-center' >Title </Form.Label>
                <Form.Control type="Titre" placeholder="Title" className='input'  class='label'  
                value={productName} onChange={(event)=>setProductName(event.target.value)}/>
            </Form.Group>
            
            <Form.Group className="mb-3 container" controlId=" ">
                <Form.Label>Price </Form.Label>
                <Form.Control type="Price" placeholder="Price"  className='input'
                value={productPrice} onChange={(event)=>setProductPrice(event.target.value)}  />
            </Form.Group>

            <Form.Group className="mb-3 container" controlId=" " >
                <Form.Label >description </Form.Label>
                <Form.Control type="description" placeholder="description" className='input'
                value={productDesc} onChange={(event)=>setProductDesc(event.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3 container">
                <Form.Label>image</Form.Label>
                <Form.Control type="file" className='input' onChange={(value)=>pickImage(value.target.files)} />
            </Form.Group>
            <Button variant="primary btn-block" onClick={()=>addorEdit()} style={{marginLeft:'40%'}} >
              Add Product
            </Button>
        </Form>
                  
    )
*/
}

export default UpdateProduct;