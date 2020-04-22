function calculate(inputs) {

    var words = [];
    var counts = [];

    for (var i = 0; i < inputs.length; i++) {
        var isExist = false;
        for (var j = 0; j < words.length; j++) {
            if (inputs[i] == words[j]) {
                isExist = true
                counts[i] = counts[i] + 1;
            }
        }
        if (!isExist) {
            words.push(inputs[i]);
            counts.push(1);
        }
        isExist = false;
    }

    console.log(words.join(','));
}

calculate(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);
