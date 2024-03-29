import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){

    localStorage.removeItem('email');
    localStorage.removeItem('account');
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
    
  }
}
