import { Component, inject} from '@angular/core';
import {  ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {

  private route = inject(ActivatedRoute)

  username = this.route.snapshot.paramMap.get('username')
}
