import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nouvelle-dem',
  templateUrl: './nouvelle-dem.component.html',
  styleUrls: ['./nouvelle-dem.component.css']
})
export class NouvelleDemComponent implements OnInit {
  lieu;
  date;


  headers = {
    'id' : '5c519c93d8213e276876cacb'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  add_Demande() {
    const body = {
      'date' : this.date,
      'place' : this.lieu
    };
    this.http.post('http://localhost:8080/demandes/', { 'place': this.lieu, 'date': this.date}, { headers: this.headers}).subscribe();
    this.date = null;
    this.lieu = null;
  }
}
