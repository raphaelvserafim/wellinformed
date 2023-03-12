import { collection, doc, setDoc, getDocs, where, query } from "firebase/firestore";
import { db } from "./firebase";


export default class Controller {

    static async newsHome() {
        const q = query(collection(db, "News"), where("main", "==", true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().title}`);
        });
    }

}