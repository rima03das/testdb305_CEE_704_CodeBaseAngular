export declare class RepeatableworkflowHandler {
    initConfig(workflowId: any, currentIndex: any, repeatLength: any, parentWorkflowId: any): void;
    /**
     * to update the configuration
     * param workflowId
     * param currentIndex
     * param repeatLength
     * param parentWorkflowId
     * **/
    updateConfig(workflowId: any, currentIndex?: number, repeatLength?: any, parentWorkflowId?: any): void;
    getAllConfig(): string;
    getConfigByWorkflowId(workflowId: any): string;
    incriseConfigCount(workflowId: any): void;
    removeWorkflowFromConfig(workflowId: any): void;
}
//# sourceMappingURL=repeatableworkflow-util.d.ts.map