function personInfo(a, b, c) {

    let obj = {};
    obj.name = a;
    obj.lastname = b;
    obj.age = c;

    console.log(`firstName: ${obj.name}`);
    console.log(`lastName: ${obj.lastname}`);
    console.log(`age: ${obj.age}`);

}

personInfo("Peter",
    "Pan",
    "20");
