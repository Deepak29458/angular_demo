import { Component, OnInit } from '@angular/core';
import { footerItems } from '../shared/footer-items';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerItems: any;

  constructor() { }

  ngOnInit(): void {
    this.footerItems = this.getFooter();
  }

  getFooter(){
    return footerItems;
  }


}
