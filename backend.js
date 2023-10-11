const express = require('express');
const app = express();
const fs = require('fs'); // Modul untuk membaca file
const port = 3000;

app.get('/', (req, res) => {
    // Baca file HTML dari sistem file
    fs.readFile('index.html', 'utf8', (err, html) => {
        if (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan.');
        } else {
            // Baca file CSS dari sistem file
            fs.readFile('style.css', 'utf8', (err, css) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Terjadi kesalahan.');
                } else {
                    // Baca file JavaScript dari sistem file
                    fs.readFile('script.js', 'utf8', (err, js) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Terjadi kesalahan.');
                        } else {
                            // Gabungkan semua file ke dalam halaman HTML
                            const fullHTML = html.replace('</head>', `
                                <style>${css}</style>
                            </head>`).replace('</body>', `
                                <script>${js}</script>
                            </body>`);

                            // Kirim file HTML yang sudah tergabung sebagai respons
                            res.send(fullHTML);
                        }
                    });
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
