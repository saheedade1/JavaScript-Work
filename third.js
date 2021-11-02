function twoArrays(a, b) {
    let g = a.concat(b);
    let c = [];
    let d = []
    let e = []
    let f = []
    for(let i = 0; i < g.length; i++){
        if(typeof g[i] === "number")
        c.push(g[i]);
    }
    if(typeof g.length === "string"){
        d.push(g[i]);
    }
    if(typeof g[i].length === "boolean"){
        e.push(g[i]);
    }
    f.push(c, d, e);
    return f;
}
const a = ["a", 1, true];
const b = ["a", 2, false];

console.log(twoArrays(a, b));