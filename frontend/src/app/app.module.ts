import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BackendTestComponent } from "./backend-test/backend-test.component";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";

import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AngularFileUploaderModule } from "angular-file-uploader";

let arr_paths = [{ path: "backend-test", component: BackendTestComponent }];

@NgModule({
  declarations: [AppComponent, BackendTestComponent],
  imports: [
    AngularFileUploaderModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(arr_paths)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
