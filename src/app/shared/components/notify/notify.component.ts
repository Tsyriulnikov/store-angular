import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'
import {Notify} from "../../../main-page/models/notify.models";
import {NotificationService} from "../../../main-page/services/notification.service";


@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
  notify$?: Observable<Notify | null>

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    // subscribe
    this.notify$ = this.notificationService.notify$
  }

  closeNotification() {
    this.notificationService.clear()
  }
}
