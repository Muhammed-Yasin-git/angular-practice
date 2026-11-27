import { Component, inject, OnInit  } from '@angular/core';
import { UserService } from '../../services/user';

@Component({
  imports: [],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList implements OnInit  {
  private userService = inject(UserService);

  users: any[] = []

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any)=>{
      this.users = data
      console.log('hello',data)
    });
  }
}
