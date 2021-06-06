import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'court-location',
  templateUrl: './court-location.component.html',
  styleUrls: ['./court-location.component.scss']
})
export class CourtLocationComponent implements OnInit {
  covered = [
    {id:1, name: 'YES court is covered'},
    {id:2, name: 'NO court is NOT covered'}
  ];
  private url ='http://localhost:3000/'

  constructor(private http : HttpClient) { }

  addCourtLocation(courtLocationform: any){
    
// " courtName ": "Hapoel"
// " isCovered ": "1"
// " locationCost ": "100"
// " locationLatitude ": "2567"
// " locationLongitude ": "2345"
//const {courtName,isCovered,locationCost,locationLatitude,locationLongitude} = courtLocationform;
    //console.log(courtLocation);
    this.http.post(this.url +'courtLocations' , JSON.stringify(courtLocationform))
    .subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
