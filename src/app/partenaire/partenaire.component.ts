import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Demande} from '../models/DemandeModel';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  demande: Demande[];
  header = {
    'id': 'test'
  }
  interval = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.http.get<any>('http://localhost:8080/demandes/', { headers: this.header}).subscribe((response: Demande[]) =>  {
        console.log(response);
        this.demande = response;
      });
    }, 1000);
  }
}
