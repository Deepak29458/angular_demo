import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  getUrl = "https://crimerate.ga/api/CardDetail";

  postUrl = "https://crimerate.ga/api/CardDetail";

  deleteUrl = "https://crimerate.ga/api/CardDetail";

  constructor(private http:HttpClient) { 
    this.getUrl;
    this.postUrl;
    this.deleteUrl
  }

  getData(){
    return this.http.get(this.getUrl);
  }

  postData(cardIteamsDetails: any){
    console.log(cardIteamsDetails);
    return this.http.post(this.postUrl,cardIteamsDetails); 
  }

  deleteData(selectedCardId: any) {
    return this.http.delete(this.deleteUrl+'/'+selectedCardId);
  }

  getDataById(dataId: any){
    return this.http.get(this.getUrl +'/'+ dataId);
  }

}
