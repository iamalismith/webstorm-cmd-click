Illustrating cmd + click fail after upgrading to most recent version of Webstorm

It's possible to CMD click either component from `src/App.tsx` and it will take you to the component file.

However, if you go in `src/NotWorkingComponent/NotWorkingComponent.tsx` and CMD click on `Component` it does not take you to the file. 

This component is imported using the `paths` in tsconfig so that and import starting with slash `"/something..."` will be resolved to `"/src/something..."` 

The same component when imported via a relative import works as expected.
