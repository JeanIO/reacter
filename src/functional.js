// @flow
function myFun (count: number): number{
    return ++count
}
function fun2<T> (count: T): T{
    return count
}
function concat(value: mixed) {
    return ''+value
}
concat(1)
export { myFun, fun2, concat } 