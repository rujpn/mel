
var fs = require('fs');
fs.readFile('baby-names.csv', function (err,data) {
    if (err) {
        console.log(err)
        throw err
    }
    var parasedData = data.toString('utf-8')

    fs.writeFile('baby-name-copy.csv', parsedData, function (err) {
        if (err) {
            console.log(parsedData)
        }
    })
})