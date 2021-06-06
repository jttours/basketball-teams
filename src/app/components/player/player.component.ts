import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  private url ='http://localhost:3000/'

  constructor(private http : HttpClient) { }

  addPlayers(playersForm: any){
  
    this.http.post(this.url +'players' , JSON.stringify(playersForm))
    .subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
