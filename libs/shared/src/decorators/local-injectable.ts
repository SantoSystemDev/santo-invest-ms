import 'reflect-metadata';

export function LocalInjectable() {
  return function (target: any) {
    Reflect.defineMetadata('injectable', true, target);
  };
}
