import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  postGetJson(src: string, post_params, fnCallback, errCallback) {
    this.http
      .post(src, post_params, { responseType: "json" })
      .subscribe(fnCallback, errCallback);
  }
}
