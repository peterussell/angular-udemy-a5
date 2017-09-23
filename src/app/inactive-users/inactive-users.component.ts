import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.accountsService.inactiveUsers;

  constructor(private accountsService: AccountsService) {
  }

  onSetToActive(id: number) {
    this.accountsService.activateUser(id);
  }
}
