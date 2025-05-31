function curry(fn) {
return function curried(...args) {
if (args.length >= fn.length) {
return fn(...args);
} else {
return function (...nextArgs) {
return curried(...args, ...nextArgs);
};
}
};
}
function add(a, b) {
return a + b;
}

const curriedAdd = curry(add);

//one argument at a time
console.log(curriedAdd(2)(3)); // Output: 5

// call all at once
console.log(curriedAdd(2, 3)); // Output: 5
