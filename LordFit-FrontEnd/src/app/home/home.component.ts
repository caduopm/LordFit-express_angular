import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
  public selectedUser: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
    })

    
  }

  showUserInfo(selectedUser: any){
    this.selectedUser = selectedUser;
    // console.log(selectedUser)

    let chartCol = new CanvasJS.Chart("chartContainerCol", {
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "#00000000",
      title: {
        text: "Estatistica da Semana"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Segunda" },
          { y: 55, label: "Terça" },
          { y: 50, label: "Quarta" },
          { y: 65, label: "Quinta" },
          { y: 95, label: "Sexta" },
          { y: 68, label: "Sabada" },
          { y: 28, label: "Domingo" }
        ]
      }]
    });
      
    chartCol.render();
  }
}
