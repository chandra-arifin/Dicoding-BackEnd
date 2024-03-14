/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

// Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai highWaterMark-nya.
// Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt.Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru(‘\n’).

const fs = require('fs');
const { resolve } = require('path');

const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        writableStream.write(error);
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    writableStream.end();
});

