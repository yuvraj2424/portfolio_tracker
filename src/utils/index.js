export function getHeighPrice(array) {
    const data = array.map((obj)=>obj.y);
    data.sort(function (a, b) {
        return a - b;
    });
    return data[data.length - 1];//data.length - 1
}