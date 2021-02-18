import {LoggingService} from './logging.service';
import {Injectable, EventEmitter} from '@angular/core';
@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testcase',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();
  constructor(private loginService: LoggingService) {}


  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loginService.logStatusChange(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loginService.logStatusChange(status);
  }
}
