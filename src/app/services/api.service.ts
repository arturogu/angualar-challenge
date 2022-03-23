import { Injectable } from "@angular/core";
import { Firestore, collection, deleteDoc, getDocs, getDoc, setDoc, doc } from "@angular/fire/firestore";

@Injectable ({
    providedIn: 'root'
})
export class ApiService {
    inputDoc = doc(this.firestore, 'input', "0");
    listCollection = collection(this.firestore, "list");
    constructor(
        private firestore: Firestore,
    ) {}

    public async getInput() {
        const snapshot = await getDoc(this.inputDoc);
        let data = snapshot.exists() ? snapshot.data()['input'] : '';
        return data
    }

    public async saveInput(item:string) {
        const docRef = await setDoc(this.inputDoc, {
            input: item,
        });
        return docRef
    }

    public async getList() {
        const querySnapshot = await getDocs(this.listCollection);
        let list: any[] = []
        querySnapshot.forEach((doc) => {
            list.push({id: doc.id, data: doc.data()['data']})
        })

        return list
    }

    public async saveList(list:string) {
        const newListDoc = doc(this.listCollection);
        await setDoc(newListDoc, {
            data: list,
        });
        return newListDoc.id
    }
    
    public async deleteItem(id:string) {
        await deleteDoc(doc(this.firestore, "list", id));
    }
}