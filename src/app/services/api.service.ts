import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})
export class ApiService {

    public getInput() {
        return localStorage.getItem("input") || ''
    }

    public saveInput(item:any) {
        localStorage.setItem("input", item);
    }

    public getList() {
        return JSON.parse(localStorage.getItem("list") || '[]')
    }

    public saveList(list:Array<String>) {
        localStorage.setItem("list", JSON.stringify(list));
    }
    
    public deleteItem(id:number) {

    }
}