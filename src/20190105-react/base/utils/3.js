/**
 * 高阶组件高在哪?
 * 高阶来自我们的高阶函数
 * JS函数是一等公民，可以作为函数参数，也可以作为函数的返回值
 */
function sum(fn, a, b) {
    return fn(a, b);
    return fn;
}
/**
 * 高阶组件
 * React组件可以作为方法的参数和返回值
 *
 */