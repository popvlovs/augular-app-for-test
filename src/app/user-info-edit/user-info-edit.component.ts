import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { LoggerService } from "../logger.service";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: 'app-user-info-edit',
  templateUrl: './user-info-edit.component.html',
  styleUrls: ['./user-info-edit.component.css']
})
export class UserInfoEditComponent implements OnInit {

  user: User

  constructor(private activatedRoute: ActivatedRoute,
      private logger: LoggerService,
      private userService: UserService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.logger.info(`route to user info edit page, current user-id is ${id}`)
    this.userService.getUser(id).subscribe(user => {
      this.logger.info(`load user: ${JSON.stringify(user)}`)
      this.user = user
    })
  }

}
