const cupangList = document.getElementById('cupang-list');

// Tambahkan data gambar ikan ke dalam dataCupang
const dataCupang = [
    { name: 'Cupang A', price: 'Rp 50.000', image: 'cupang1.jpg' },
    { name: 'Cupang B', price: 'Rp 75.000', image: 'cupang2.jpg' },
    // Tambahkan lebih banyak data cupang di sini
];

// Tampilkan data ikan cupang
dataCupang.forEach(cupang => {
    const cupangItem = document.createElement('div');
    cupangItem.innerHTML = `
        <h3>${cupang.name}</h3>
        <img src="${cupang.image}" alt="${cupang.name}">
        <p>Harga: ${cupang.price}</p>
    `;
    cupangList.appendChild(cupangItem);
});
