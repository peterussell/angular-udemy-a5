import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = this.accountsService.activeUsers;

  constructor(private accountsService: AccountsService) {
  }

  onSetToInactive(id: number) {
    this.accountsService.deactivateUser(id);
  }
}
