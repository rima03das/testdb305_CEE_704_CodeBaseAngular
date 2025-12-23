import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { LoaderService, SharedEventsServiceService } from '@ng/cee-core';
@Component({
    selector: 'app-loading-renderer',
    templateUrl: './loading-renderer.component.html',
    styleUrls: ['./loading-renderer.component.scss'],
    standalone: true,
})
export class LoadingRendererComponent implements OnInit {
    loading: boolean;
    isMoved = false;
    constructor(private loaderService: LoaderService, 
        private changeDetectorRef: ChangeDetectorRef, 
        private sharedEventService: SharedEventsServiceService) {
    }

    getStepModalDialogIfExist() {
        const dialogElements = document.getElementsByTagName('dialog');
        for (let i = 0; i < dialogElements.length; i++) {
            const dialog = dialogElements[i];
            if(dialog.id.includes("stepModal-")) {
                return dialog;
            }
        }
    }

    resetLoader() {
        this.isMoved = true;
        this.moveLoaderInDOMIfModelExists(false);
    }

    moveLoaderInDOMIfModelExists(v: boolean) {
        let stepModal = this.getStepModalDialogIfExist();

        if(!stepModal) 
            return;
        
        let loader = document.querySelector('.progress-loader') as HTMLElement;
        if(!loader) {
            return;
        }

        if(v) {
            if(!this.isMoved) {
                // apply css to make the loader container centered
                Object.assign(loader.style, { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });
                
                stepModal.appendChild(loader);
                this.isMoved = true;
            }
        } else if(this.isMoved) {                            
            const loadingRenderer = document.querySelector("app-loading-renderer");
            // revert css changes
            Object.assign(loader.style, { top: '', left: '', transform: '' });
            
            this.isMoved = false;
            if(loadingRenderer) {
                loadingRenderer.appendChild(loader);
            }
        }
    }

    ngOnInit() {
        this.loaderService.loader.subscribe((v) => {
            this.moveLoaderInDOMIfModelExists(v);            
            this.loading = v;
            if (this.changeDetectorRef && !(this.changeDetectorRef as ViewRef).destroyed) {
                this.changeDetectorRef.detectChanges();
            }
        });
        this.sharedEventService.modelEmitter.subscribe(res => {
            if(!res.id ) {
                this.resetLoader();
            }
        });
    }

}
