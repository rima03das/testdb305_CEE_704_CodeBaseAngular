export declare class UndoRedo {
    constructor();
    historyStack: Array<any>;
    currentIndex: number;
    name: string;
    currentId: string;
    push(id: any, values: any): void;
    forward(): void;
    undo(id: any): void;
    undoCurrentId(): void;
    getPresentValue(id: any): any;
    private setData;
    private getData;
    setCurrentId(id: any): void;
    getCurrentId(): string;
    deletById(id: any): void;
    removeAll(): void;
}
//# sourceMappingURL=undo-redo.util.d.ts.map