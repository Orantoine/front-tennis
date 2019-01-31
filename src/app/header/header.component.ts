import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {User} from '../models/UserModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pseudo = "Orantoine";

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.http.get<User>('http://localhost:8080/users/5c519ba3d8213e33a44b2122').subscribe((response) => this.pseudo = response.firstName);
  }

}
