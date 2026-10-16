const fs=require('fs');

//Creating a new file using writeFile() method to write data into the file. If the file already exists, it will be replaced with the new data.
fs.writeFile('example.txt', 'My name is Shivmohan', (err) => {
    if (err) throw err;
    console.log('File has been created!');
} )

//Appending data to the file using appendFile() method. If the file does not exist, it will be created.
fs.appendFile('example.txt', ' I am a software engineer.', (err) => {
    if (err) throw err;
    console.log('Data has been appended to the file!');
})

//renaming the file using rename() method. If the file does not exist, it will throw an error.
fs.rename('example.txt', 'new_example.txt', (err) => {
    if (err) throw err;
    console.log('File has been renamed!');
})


//Reading the file using readFile() method. It takes the file name and encoding as parameters and returns the data in the callback function.
fs.readFile('new_example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
} )

//Deleting the file using unlink() method. It takes the file name as a parameter and deletes the file.
fs.unlink('new_example.txt', (err) => {
    if (err) throw err;
    console.log('File has been deleted!');
})
