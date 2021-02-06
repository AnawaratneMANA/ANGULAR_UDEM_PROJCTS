import {Component} from '@angular/core';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
}
