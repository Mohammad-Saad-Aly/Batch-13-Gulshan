let cloudname = 'dxz9erv4k'
let upload_preset = 'test upload'

let uploadData = () => {
    // let getname = document.querySelector('#name').value

    let getFile = document.querySelector('#img').files[0]

    const formData = new FormData()
    formData.append('file', getFile)
    formData.append('upload_preset', upload_preset)


    fetch(`https://api.cloudinary.com/v1_1/${cloudname}/upload`, {
        method: 'POST',
        body: formData
    })
        .then((data) => {
            return data.json()
        })
        .then(async (data) => {

            try {
                const docRef = await addDoc(collection(db, "users"), {
                 name: getname,
                 img: data.secure_url
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }


            // console.log(data.secure_url)
            // const deleteResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/destroy`, {}
        })
        .catch((err) => {
            console.log(err)
        })


    // DOM METHOD
    // let convert = URL.createObjectURL(getFile)
    // console.log(convert)
    // let getImage = document.getElementById('image')
    // getImage.src = convert
}
window.uploadData = uploadData




// -----------------------------------------------------------------------
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBUOsPMljPk5TEqR8Ws9XG9XRD3pHbQNfM",
//     authDomain: "sre-boys-999f8.firebaseapp.com",
//     projectId: "sre-boys-999f8",
//     storageBucket: "sre-boys-999f8.firebasestorage.app",
//     messagingSenderId: "393948243353",
//     appId: "1:393948243353:web:a0638981a4eaf8e3111f08",
//     measurementId: "G-B8LC30RJ4J"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Cloudinary Settings
// const cloud_name = 'dxz9erv4k';
// const upload_preset = 'test_upload';

// // Upload Product Function
// const upload = async () => {
//     const name = document.getElementById('name').value;
//     const img = document.getElementById('img').files[0];

//     // Validate inputs
//     if (!name || !img) {
//         alert('Please fill out all fields.');
//         return;
//     }

//     // Form data to upload to Cloudinary
//     const formData = new FormData();
//     formData.append('file', img);
//     formData.append('upload_preset', upload_preset);

//     try {
//         // Upload image to Cloudinary
//         const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
//             method: 'POST',
//             body: formData
//         });
//         const data = await response.json();
//         const imgURL = data.secure_url;
//         const public_id = data.public_id;

//         // Store product data in Firestore
//         const docRef = await addDoc(collection(db, "products"), {
//             name: name,
//             img: imgURL,
//             public_id: public_id
//         });
//         console.log("Product uploaded with ID:", docRef.id);
//         alert('Product uploaded successfully!');
//         fetchProducts(); // Refresh the product list after upload
//     } catch (e) {
//         console.error('Error uploading image:', e);
//         alert('Failed to upload product.');
//     }
// };

// // Fetch Products from Firestore
// const fetchProducts = async () => {
//     const querySnapshot = await getDocs(collection(db, "products"));
//     const productList = document.getElementById("product-list");
//     productList.innerHTML = ''; // Clear the existing list

//     querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <strong>${data.name}</strong><br>
//             <img src="${data.img}" width="100"><br>
//             <button onclick="deleteProduct('${doc.id}', '${data.public_id}')">Delete</button>
//             <button onclick="editProduct('${doc.id}', '${data.name}', '${data.img}')">Edit</button>
//         `;
//         productList.appendChild(li);
//     });
// };

// // Delete Product Function
// const deleteProduct = async (productId, public_id) => {
//     try {
//         // Delete image from Cloudinary
//         const deleteResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/destroy`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Basic ' + btoa('your_api_key' + ':' + 'your_api_secret'),
//             },
//             body: JSON.stringify({
//                 public_id: public_id,
//                 invalidate: true
//             })
//         });
//         await deleteResponse.json();

//         // Delete product from Firestore
//         await deleteDoc(doc(db, "products", productId));
//         alert('Product deleted successfully!');
//         fetchProducts(); // Refresh product list after deletion
//     } catch (error) {
//         console.error('Error deleting product:', error);
//         alert('Failed to delete product.');
//     }
// };

// // Edit Product Function
// const editProduct = async (productId, oldName, oldImg) => {
//     const newName = prompt("Enter new name:", oldName);
//     if (!newName) return;

//     // Prompt for new image
//     const fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = 'image/*';
//     fileInput.click();

//     fileInput.onchange = async () => {
//         const newImageFile = fileInput.files[0];
//         if (!newImageFile) {
//             alert('Please provide a new image.');
//             return;
//         }

//         try {
//             // Upload new image to Cloudinary
//             const formData = new FormData();
//             formData.append('file', newImageFile);
//             formData.append('upload_preset', upload_preset);

//             const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
//                 method: 'POST',
//                 body: formData
//             });
//             const data = await response.json();
//             const newImgURL = data.secure_url;
//             const newPublicId = data.public_id;

//             // Update product data in Firestore
//             const productRef = doc(db, "products", productId);
//             await updateDoc(productRef, {
//                 name: newName,
//                 img: newImgURL,
//                 public_id: newPublicId
//             });
//             alert('Product updated successfully!');
//             fetchProducts(); // Refresh product list after update
//         } catch (error) {
//             console.error('Error uploading new image:', error);
//             alert('Failed to update product.');
//         }
//     };
// };

// // Fetch products on initial load
// window.onload = fetchProducts;
