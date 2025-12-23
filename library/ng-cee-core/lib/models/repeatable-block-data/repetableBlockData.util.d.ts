import { RepetableBlockFieldModel } from './repeatableBlockFieldData.model';
export declare class RepeatableBlockData {
    localStorageStaticName: string;
    constructor();
    /**
     * setting data to the local storage
     * @param id the repeatable Block Id
     * @param data is basicaly the field data
     */
    setLocalStorageData(id: string, data: RepetableBlockFieldModel): void;
    /**
     * updating data to the local storage
     * @param id the repeatable Block Id
     * @param data is basicaly the field data
     */
    updateRepeatableLocalStorageData(id: string, data: RepetableBlockFieldModel): void;
    /**
     * updating data to the local storage after set session is called from the base class
     * @param id the repeatable Block Id
     * @param data is basicaly the field data
     */
    updateRepeatableLocalStorageDataAfterSessionSet(id: string, data: RepetableBlockFieldModel): void;
    /**
     * returns true if exists and false if not exists
     * @param blockId repeatableBlockId
     * @param uniqueId uniqueId of the field
     */
    returnIfData(blockId: string, uniqueId: string): boolean;
    getRepeatableLocalStorageDataByBlockId(blockId: any): any;
    /**
     * returns data from the local storage
     * @param blockId repeatableBlockId
     * @param uniqueId uniqueId of the field
     */
    getRepeatableLocalStorageData(blockId: string, uniqueId: string): {};
    /**
     * remove data when a block is removed
     * @param blockId id of the block
     * @param ids fieldIds that are removed
     */
    removeDataUsingMultipleIds(blockId: string, ids: Array<any>): void;
    /**
     * set the block count of repeatable block
     * @param blockId repeatable Block Id
     * @param count no of times the block is repeated
     */
    localStorageSetMaxBlockCount(blockId: string, count: any): void;
    /**
     * return the count of the repeatable block is set
     * @param blockId string
     */
    localStorageGetMaxBlockCount(blockId: string): any;
    returnFieldData(data: RepetableBlockFieldModel): {};
    /**
     * removes data or count according to the type of clearance
     * @param blockId block id of the repeatable block
     * @param type if type is empty or not DATA or COUNT remove both count and data
     */
    removeByBlockId(blockId: any, type?: any): void;
    /**
     * function to reset the whole repeatable block store
     */
    resetRepeatableStore(): void;
}
//# sourceMappingURL=repetableBlockData.util.d.ts.map