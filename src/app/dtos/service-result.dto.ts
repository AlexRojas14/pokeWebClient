export class ServiceResult<T> {
    data: T[] = [];
    executedSuccesfully: boolean = false;
    messages: string[] = [];
}
