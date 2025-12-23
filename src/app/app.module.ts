import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCeeCoreModule, LoaderInterceptorService, CeeInitServiceService } from '@ng/cee-core';
import { NgCeeApiIntegrationModule } from '@ng/cee-api-integration';
import { APP_INITIALIZER } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxDaterangepickerBootstrapModule, NgxDaterangepickerLocaleService } from 'ngx-daterangepicker-bootstrap';
import { provideToastr, ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center', 
      timeOut: 3000, 
      progressBar: false, 
      closeButton: false, 
      extendedTimeOut: 3000, 
      preventDuplicates: false 
    }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgCeeCoreModule,
    NgCeeApiIntegrationModule,
    // NgCeeOIDCModule,
    MatProgressSpinnerModule,
    NgIdleKeepaliveModule.forRoot(),
    NgxDaterangepickerBootstrapModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    GoogleMapsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ceeinitProviderFactory,
      deps: [CeeInitServiceService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },

    NgxDaterangepickerLocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function ceeinitProviderFactory(ceeInitProvider: CeeInitServiceService) {
  return () => ceeInitProvider.initConfigurationJSON();
}
