export declare function ApiOperationWithSwaggerSummary(summary: string): MethodDecorator;
export declare function ApiAuthHeaders(): MethodDecorator & ClassDecorator;
export declare function ApiCommonResponses(): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare function ApiCommonDecorators(): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
