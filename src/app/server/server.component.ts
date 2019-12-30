import { Component, OnInit } from "@angular/core";

@Component({ selector: "app-server", templateUrl: "./server.component.html" })
export class ServerComponent implements OnInit {
  serverId: number = 21;
  serverStatus: string;

  constructor() {
    this.serverId = Math.random();
    this.serverId = parseFloat(this.serverId.toPrecision(1));
    this.serverStatus = this.serverId > 0.5 ? "Online" : "Offline";
  }
  ngOnInit() {}
  getServerStatus() {
    return this.serverStatus;
  }
}
