import * as i0 from "@angular/core";
export declare class WebworkerService {
    private workerFunctionToUrlMap;
    private promiseToWorkerMap;
    /**
     * <p>Method that runs the given function with the given data.</p>
     * @param workerFunction function to run on the web worker context.
     * @param data data to pass to the web worker context. <b>IMPORTANT</b>:
     * the function must be self-contained, meaning that no external functions or
     * libraries can be passed through this parameter.
     */
    run<T>(workerFunction: (input: any) => T, data?: any): Promise<T>;
    /**
     * <p>Method that runs the given <i>ObjectURL</i> with the given data.</p>
     * @param url <i>ObjectURL</i> to run on the web worker context.
     * @param data data to pass to the web worker context. <b>IMPORTANT</b>:
     * the function must be self-contained, meaning that no external functions or
     * libraries can be passed through this parameter.
     */
    runUrl(url: string, data?: any): Promise<any>;
    /**
     * <p>Method that terminates the given <i>Promise</i> and removes it from the
     * internal service maps.</p>
     * @param promise promise to terminate.
     */
    terminate<T>(promise: Promise<T>): Promise<T>;
    /**
     * <p>Method that retrieves the <i>web worker</i> to which the given <i>Promise</i>
     * belongs to.
     * @param promise promise whose <i>web worker</i> we want to find.
     */
    getWorker(promise: Promise<any>): Worker;
    /**
     * <p>Method that handles the promise creation for the given <i>web worker</i> with
     * the given input data.</p>
     * @param worker worker for which the promise will be created.
     * @param data data that will be passed into the worker object.
     */
    private createPromiseForWorker;
    /**
     * <p>Method that allocates a <i>web worker</i> <i>ObjectURL</i> for the given function.
     * It's used to create caches for the <i>(function, workerUrl)</i> pairs in order to avoid
     * creating the urls more than once.</p>
     * @param fn function whose worker we want to allocate.
     */
    private getOrCreateWorkerUrl;
    /**
     * <p>Method that creates a <i>web worker</i> <i>ObjectURL</i> from the given
     * <i>Function</i> object.</p>
     * @param resolve function the <i>web worker</i> will run.
     */
    private createWorkerUrl;
    /**
     * <p>Method that creates a function that removes the given promise from the
     * service context.</p>
     * @param promise promise the cleaner function will be created for.
     */
    private createPromiseCleaner;
    /**
     * <p>Method that removes the given promise from the service context.
     * It also terminates the associated worker in case it exists.</p>
     * @param promise promise to be removed from the service context.
     */
    private removePromise;
    static ɵfac: i0.ɵɵFactoryDeclaration<WebworkerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WebworkerService>;
}
//# sourceMappingURL=web-worker-service.d.ts.map