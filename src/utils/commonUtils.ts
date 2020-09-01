export const cloneDeep = <T>(entity: T): T => JSON.parse(JSON.stringify(entity));

export const getHost = (): string => "/server";
