export const cloneDeep = <T>(entity: T): T => JSON.parse(JSON.stringify(entity));

export const getHost = (): string => "http://127.0.0.1:1414/"; // /server/
