import { Component, OnInit } from '@angular/core';
import { homepageItems } from '../shared/home-page-iteams';
import { hotDealsIteams } from '../shared/hotDeal-iteams';
import { kidesFashionIteams } from '../shared/kides-fashion';
import { personalCareIteams } from '../shared/personal-care';
import { topCategories } from '../shared/top-categories';
import { womensIteams } from '../shared/womens-iteams';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homepageItems: any;
  topCategories : any;
  womensIteams : any;
  personalCareIteams : any ;
  hotDealsIteams : any ;
  kidesFashionIteams : any

  constructor() { }

  ngOnInit(): void {
    this.homepageItems = homepageItems;
    this.topCategories = topCategories;
    this.womensIteams = womensIteams;
    this.personalCareIteams = personalCareIteams;
    this.hotDealsIteams = hotDealsIteams ;
    this.kidesFashionIteams = kidesFashionIteams ;
  }

}
