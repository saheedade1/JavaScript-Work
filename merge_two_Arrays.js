function getUniqueAfterMerging(a, b) {
    let d = a.concat(b);
    let duplicate = [...new Set(d)];
    console.log(duplicate);
}
const a = [2, 9, 5, 3];
const b = [2, 3, 1, 5, 9];
getUniqueAfterMerging(a, b);