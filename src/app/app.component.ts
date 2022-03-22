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
  list: string[] = []

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit() {
    this.input = this.api.getInput();
    this.list = this.api.getList();
  }

  saveList() {
    if (!this.input.match(/<.+?>/g)) {
      this.list.push(this.input);
      this.api.saveList(this.list);
    } else {
      alert("no html");
    }
  }

  saveInput() {
    this.api.saveInput(this.input);
  }

  deleteItem(index:number) {
    this.list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(this.list));
  }

  validate(text:String) {
    
  }
}
