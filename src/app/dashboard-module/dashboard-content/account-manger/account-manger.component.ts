import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/service/get-data-service/get-data.service';

@Component({
  selector: 'app-account-manger',
  templateUrl: './account-manger.component.html',
  styleUrls: ['./account-manger.component.css']
})
export class AccountMangerComponent implements OnInit {

  dataList : any = [];
  singleDataList : any = [];
  iteamList: any;
  selectedCardId : any ;
  CardDetailId : any;
  PersonId : any;
  status : any ;

  constructor(public gts: GetDataService,
              public fb: FormBuilder,) { }

  ngOnInit(): void {
    this.gts.getData().subscribe(data =>{
      console.log (this.dataList = data);
    });
  }


  cardIteamsDetails = this.fb.group({
    PersonId : 1,
    eCardType : 0 ,
    BankName : ['', [Validators.required]],
    CardNo : 0,
    ExpiryDate : null ,
    HolderName :['', [Validators.required]] ,
    CVV : 0,
    eStatus : 1,
    IsDefault : true,
  });
  
onSavedData(){
    this.gts.postData(this.cardIteamsDetails.value).subscribe((c)=>{
      console.log(c);
      this.gts.getData().subscribe(data =>{
        console.log (this.dataList = data);
      });
    });
  } 

  getCardById (dataId : any){
    this.gts.getDataById(dataId).subscribe((d)=>{
      console.log (this.singleDataList = d);
    });
  }

  deletedData(selectedCardId : any){
    this.gts.deleteData(selectedCardId).subscribe((a)=>{
       this.gts.getData().subscribe(data =>{
      console.log (this.dataList = data);
    });
    });
  }

}
