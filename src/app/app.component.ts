import { Component, Inject } from '@angular/core';
import { CeeInitServiceService, DynamicComponentHandlerService,ApiDataService,AppDataService } from '@ng/cee-core';
import { Router, Event as NavigationEvent, NavigationStart } from '@angular/router';
import { filter, single } from 'rxjs/operators';

import { CeeLoaderComponent } from './cee-loader/cee-loader.component';
import { NgCeeApiIntegrationService } from "@ng/cee-api-integration";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "test-step";
  step_id = "59471";

  constructor(
    private initService: CeeInitServiceService,
    private router: Router,
    private appDataService: AppDataService,
    private apiDataService: ApiDataService,
    @Inject(DynamicComponentHandlerService) dynamicHandlerService
  ) {
    dynamicHandlerService.registerComponent("CEE_LOADER", CeeLoaderComponent);
    router.events
      .pipe(
        // The "events" stream contains all the navigation events. For this demo,
        // though, we only care about the NavigationStart event as it contains
        // information about what initiated the navigation sequence.
        filter((event: NavigationEvent) => {
          return event instanceof NavigationStart;
        })
      )

      .subscribe((event: NavigationStart) => {
        if (event.url === "/") {
          window.location.href = "/";
          window.sessionStorage.clear();
        }
      });
    if (window.location.pathname === "/") {
      this.appDataService.removeAllAppData();
      this.apiDataService.removeAllApiData();
      window.sessionStorage.clear();
      this.router.navigateByUrl(`${this.title}`, {
        skipLocationChange: true,
      });

    }
  }
}
