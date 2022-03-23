import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My app';
  input: string = '';
  list: any[] = [];
  inputError: boolean = false;

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit() {
    this.api.getInput().then(val => { this.input = val });
    this.api.getList().then(val => {this.list = val });
  }

  saveList() {
    if (!this.input.match(/<.+?>/g)) {
      this.inputError = false;
      this.api.saveList(this.input).then( value => {
        this.list.push({data: this.input, id: value});
      });
    } else {
      this.inputError = true;
    }
  }

  saveInput() {
    this.api.saveInput(this.input);
  }

  deleteItem(index:number, id:string) {
    this.list.splice(index, 1);
    //localStorage.setItem("list", JSON.stringify(this.list));
    this.api.deleteItem(id);
  }

  validate(text:String) {
    
  }
}
