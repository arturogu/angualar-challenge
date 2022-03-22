import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My app';
  input: string = '';
  list: string[] = []

  ngOnInit() {
    this.input = localStorage.getItem("input") || '';
    this.list = JSON.parse(localStorage.getItem("list") || '[]');
  }

  saveList() {
    if (!this.input.match(/<.+?>/g)) {
      this.list.push(this.input);
      localStorage.setItem("list", JSON.stringify(this.list));
    } else {
      alert("no html");
    }
  }

  saveInput() {
    localStorage.setItem("input", this.input);
  }

  deleteItem(index:number) {
    this.list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(this.list));
  }

  validate(text:String) {
    
  }
}
