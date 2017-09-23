import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit() {
    this.users = this.accountsService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.accountsService.deactivateUser(id);
  }
}
