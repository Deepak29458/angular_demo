import { Component, OnInit } from '@angular/core';
import { allProducts } from 'src/app/shared/all-products';
import { colourButtons, SizeButtons } from 'src/app/shared/colors';
import { hotDealsIteams } from 'src/app/shared/hotDeal-iteams';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  allProducts : any ;
  hotDealsIteams : any ;
  colourButtons : any ;
  SizeButtons : any ;

  constructor() { }

  ngOnInit(): void {
    this.allProducts = allProducts ;
    this.hotDealsIteams = hotDealsIteams ;
    this.colourButtons = colourButtons;
    this.SizeButtons = SizeButtons;
  }

}
