export class TyepscriptUnknownType {

}

let vAny: any = 10;
let vUnknown: unknown = 10;

let myVar: unknown = 0;
myVar = '1';
myVar = false;


let s1: number = vAny;

// let s2: number = vUnknown;
function invokeAnything(callback: unknown,) {
  if (typeof callback === 'function') {
    callback();
  }
}
