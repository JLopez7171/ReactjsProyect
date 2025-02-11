
import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, getDoc, getFirestore, query, where, addDoc, writeBatch, setDoc } from "firebase/firestore";
import musicProducts from "./data";


const firebaseConfig = {
  apiKey: "AIzaSyASj8d8GD_VMTjz8NNzgEZrSE8eFMNghFI",
  authDomain: "react-project-230f6.firebaseapp.com",
  projectId: "react-project-230f6",
  storageBucket: "react-project-230f6.firebasestorage.app",
  messagingSenderId: "976132668033",
  appId: "1:976132668033:web:ebdef4498be79e36046b80",
  measurementId: "G-53BDL5667G"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default async function getAsyncData(){

    const collectionRef= collection(db, "musicProducts")

    const musicProductsSS = await getDocs(collectionRef)

    const docsData = musicProductsSS.docs.map((doc)=>{
        return {...doc.data(), id: doc.id}
    })
    return docsData
}

export async function  getAsyncItemById(itemID){
    const docRef = doc(db, "musicProducts", itemID)
    const docSS = await getDoc(docRef)
    const docData = docSS.data()
    return docData
}

export async function getAsyncItemsByCategory(catID){
    const q= query(collection(db, "musicProducts"), where("category", "==", catID))

    const musicProductsSS = await getDocs(q)

    const docsData = musicProductsSS.docs.map((doc)=>{
        return {...doc.data(), id: doc.id}
    })
    return docsData
}
export async function exportProductsToDB() {
    for(let item of musicProducts){
        delete item.id
        const docID=  await addDoc(collection(db, "musicProducts"), item)
        console.log(docID.id)
    }
    
}
//no lo uso xd
export async function exportProductsWithBatch(){
    const batch = writeBatch(db)
  
    products.forEach( item => {
      const itemid = `${item.id}`;
      delete item.id
      const newDoc = doc(db, "musicProducts", `item-${itemid}`);
      batch.set(newDoc, item)
    });
  
    const commitRes = await batch.commit()
  }

  export async function createBuyOrder(orderData){
    const newOrderDoc = 
      await addDoc(collection(db, "orders"), orderData); 
  
    return newOrderDoc.id
  }