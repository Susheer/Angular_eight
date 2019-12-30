import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  //template: "<app-server></app-server><app-server></app-server>",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string;
  serverCreated = false;
  serverCreationStatus: string = "No server created yet";
  servers = ["server1", "server2", "server3", "server4"];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer = () => {
    this.serverCreationStatus = "Server was created";
    this.serverCreated = true;
  };

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    // console.log("Event", this.serverName);
  }
  ngOnInit() {}
}
