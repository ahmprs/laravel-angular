import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-backend-test",
  templateUrl: "./backend-test.component.html",
  styleUrls: ["./backend-test.component.css"]
})
export class BackendTestComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {}

  rsp = "---";
  btnGetDataClick(event) {
    this.rsp = "OOPS!";

    this.http.postGetJson(
      // "http://localhost:8000/api/say-hello",
      "/api",
      {},
      d => {
        console.log(d);
      },
      err => {
        console.log(err);
      }
    );
  }
}
