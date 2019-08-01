// @flow
function truthy(a, b): boolean {
    return !!a && !!b;
  }
  
  function concat(a: ?string, b: ?string): string {
    if (truthy(a, b)) {
      // $ExpectError
      return a + b;
    }
    return '';
  }
  export default concat