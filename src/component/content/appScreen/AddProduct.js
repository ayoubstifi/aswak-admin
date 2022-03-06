import react , {useState ,useEffect} from "react"
import { Form ,Button } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";
import '../../../style.css'
import firebaseDb from 'firebase'
function Product(props){

    const [picture,setPicture] = useState('');
    const [productName,setProductName] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const [productDesc,setProductDesc] = useState('');

    const url = 'https://api.cloudinary.com/v1_1/dsy7nme9g/image/upload'
    //'https://api.cloudinary.com/v1_1/m-l-e/image/upload';

    const pickImage = async (files ) => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            formData.append("file", file);
            //formData.append("upload_preset", "AswakApp");
            formData.append("upload_preset", "aswak-web");    
            fetch(url, {
            method: "POST",
            body: formData
            })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                var link = JSON.parse(data);
                console.log(link.secure_url)
                setPicture(link.secure_url)
            });
        }
    }

    
    //  const initialvalues={
    //     /*     title: '',
    //         price: '' ,
    //         description : '',
    //         image:''*/
    //  }
     
    //  var [values,setValues] = useState(initialvalues)             
    
    //  const handleInputChange = e => {
    //      var {name , value} = e.target 
    //      setValues({
    //          ...values,
    //          [name] :value
    //      })
    //  }

        // const handleformatsubmit = e => {
        //     e.preventDefault();
        //     props.addorEdit(values)
        // } 

        const addorEdit = () =>{
            // firebaseDb.firestore().collection("product").add({
            //     name: productName,
            //     price: productPrice,
            //     description: productDesc,
            //     picture : picture
            // })
            // .then(() => {
            //     console.log("Document successfully written!");
            // })
            // .catch((error) => {
            //     console.error("Error writing document: ", error);
            // });

            var newProduct = firebaseDb.database().ref('products').push();
            var productKey = newProduct.key;
            newProduct.set({
                name: productName,
                price: productPrice,
                description: productDesc,
                picture : picture,
                key: productKey
            }).then(() => {
                console.log("Document successfully written!");
            })

            // firebaseDb.child('product').push(obj,err =>{
            //     if(err) {console.log(err)}
            // })
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
 
}
export default Product;