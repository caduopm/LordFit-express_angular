import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as _ from "lodash";
// import { Observable, of } from "rxjs";

@Component({
  selector: 'app-worckout',
  templateUrl: './worckout.component.html',
  styleUrls: ['./worckout.component.scss']
})
export class WorckoutComponent implements OnInit {
  users: Object;
  worckout: Object;
  worckoutList: Object;
  public selectedUser: Object;
  public editScreen: boolean;
  // public imagePath = "https://picsum.photos/400/200";

  constructor(private dataService: DataService) {
    this.editScreen = false;
   }

  ngOnInit() {
    this.dataService.getUsersWorckout().subscribe(data => {
      // console.log(data)
      this.users = data;
    })
  }

  showUserInfo(selectedUser: any){
      selectedUser.worckout.forEach( treino => {
        treino.editScreen = false;
      });

    this.selectedUser = selectedUser;
  }

  showEditScreen(user: any) {
    this.dataService.getWorckouts().subscribe(resp => {
      this.worckoutList = resp['data'];
      this.worckoutList = _.differenceBy(this.worckoutList, user.exemplos, 'id');
      user.editScreen = true;
    });
  }

  save() {

  }

  add(treino: any) {
    
    console.log(treino)
  }

  remove(treino: any, user: any) {
    console.log(treino)
    console.log(user)
  }
}
