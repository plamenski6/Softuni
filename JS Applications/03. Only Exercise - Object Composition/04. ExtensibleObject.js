function solve() {
    return {
        extend: function (obj) {
            Object.keys(obj).forEach(key => {
                if (typeof obj[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = obj[key];
                }
                else {
                    this[key] = obj[key];
                }
            })
        }
    }
}
