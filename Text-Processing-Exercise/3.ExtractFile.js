function solve(filePath) {

    let fileNameStart = filePath.lastIndexOf('\\') + 1;
    let fileNameEnd = filePath.lastIndexOf('.'); 

    let fileName = filePath.substring(fileNameStart, fileNameEnd);
    let fileExtension = filePath.substring(fileNameEnd + 1);
    // let fileExtension = filePath.substr(fileNameEnd + 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

    // let places = path.split('\\');

    // let finall = places[3];
    // let cuttedFinall = finall.split('.')
    // let fileName = cuttedFinall[0];
    // let fileExtension = cuttedFinall[1];

    // console.log(`File name: ${fileName}`);
    // console.log(`File extension: ${fileExtension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')