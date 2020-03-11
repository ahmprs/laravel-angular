import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  postGetJson(src: string, post_params, fnCallback, errCallback) {
    let headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
    this.http
      .post(src, post_params, { responseType: "json", headers })
      .subscribe(fnCallback, errCallback);
  }
}
