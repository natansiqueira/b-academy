# ES Modules

- local scope
- export default
  - export default *function*
  - function is a *function* name
  - only one per file
  - we can import with a different name e.g import anyName from './my-module.js'
- named export
    - we can add export before each function
    - we can export multiple functions or variables using the { function, ... } syntax
    - we can only import with the same function name as declared in the original module
    - we can rename the export using the as keyword
    - we can rename the import using the as keyword as well
- we can use a default export (only one) and named exports in the same module
