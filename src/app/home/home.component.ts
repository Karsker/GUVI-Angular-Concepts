import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements DoCheck, OnInit {
  @Input() user?:{name: string, age: number};
  previousUser?:{name: string, age: number};
  
  userHasChanged():boolean {
    return this.user?.name != this.previousUser?.name || this.user?.age != this.previousUser?.age;
  }

  ngDoCheck(): void {
    if (this.userHasChanged()) {
      console.log("User object has changed");
    }
  }

  ngOnInit(): void {
    console.log(this.user);
    if (this.user) {
      this.previousUser = {
        ...this.user
      }
    }
  }
}
