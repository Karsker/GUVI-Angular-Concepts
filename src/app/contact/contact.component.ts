import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterContentInit, AfterContentChecked{
  @ContentChild("projectedContent") projectedContent: any;
  ngAfterContentInit(): void {
    console.log(this.projectedContent);
    
  }

  ngAfterContentChecked(): void {
    console.log("After content checked");
    
  }


}
