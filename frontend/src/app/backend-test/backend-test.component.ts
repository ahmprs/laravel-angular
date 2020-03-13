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
      "/api/say-hello",
      {},
      d => {
        console.log(d);

        try {
          if (d["ok"] != 1) return;
          this.rsp = d["result"];
        } catch (err) {}
      },
      err => {
        console.log(err);
      }
    );
  }

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI: {
      url: "/api/upload",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      }
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: "Select Files",
      resetBtn: "Reset",
      uploadBtn: "PRESS TO UPLOAD",
      dragNDropBox: "Drag N Drop",
      attachPinBtn: "Attach Files...",
      afterUploadMsg_success: "Successfully Uploaded !",
      afterUploadMsg_error: "Upload Failed !"
    }
  };
}
