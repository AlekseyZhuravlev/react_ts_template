export class CommonUtils {
    public static readonly cloneDeep = <T>(entity: T): T => JSON.parse(JSON.stringify(entity));
}