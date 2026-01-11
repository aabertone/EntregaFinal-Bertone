import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./FirebaseConfig"

export const getProductos = () => {
    const productosCollection = collection(db, 'productos');
    return getDocs(productosCollection)
        .then((respuesta) => {
            const productosFirebase = []
            respuesta.docs.forEach(doc=>{
                productosFirebase.push(doc.data())
            })
            return productosFirebase
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getUnProducto = async (id) => {
    const pid = Number(id);
    const productosCollection = collection(db, 'productos');
    const filtro = query(productosCollection, where("id", "==", pid));
    try {
        const respuesta = await getDocs(filtro);
        const docSnap = respuesta.docs[0];
        return docSnap ? docSnap.data() : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getProductosFiltrados = (cat) => {
    const productosCollection = collection(db, 'productos');
    const filtro = query(productosCollection, where("cat", "==", cat));
    return getDocs(filtro)
        .then((respuesta) => {
            const productosFirebase = []
            respuesta.docs.forEach(doc=>{
                productosFirebase.push(doc.data())
            })
            return productosFirebase
        })
        .catch((error) => {
            console.log(error);
        });
}