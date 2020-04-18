function solve(path) {

    let lastSlashIndex = path.lastIndexOf('\\');
    let fullFileName = path.substring(lastSlashIndex + 1);

    let extensionIndex = fullFileName.lastIndexOf('.');
    let extension = fullFileName.substring(extensionIndex + 1);

    let fileName = fullFileName.substr(0, fullFileName.lastIndexOf('.'));

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}

solve('C:\\Internal\\training-internal\\Template.pptx');
