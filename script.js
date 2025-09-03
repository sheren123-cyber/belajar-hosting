let keranjang = [];

function tambahKeranjang(namaProduk, hargaProduk) {
	keranjang.push({ nama: namaProduk, harga: hargaProduk });
	tampilkanKeranjang();
}

function tampilkanKeranjang() {
	let html = "<h4>Isi Keranjang:</h4><ul>";
	let total = 0;

	keranjang.forEach((item, index) => {
		html += `<li>${item.nama} - Rp ${item.harga.toLocaleString()}</li>`;
		total += item.harga;
	});

	html += `</ul><p><strong>Total: Rp ${total.toLocaleString()}</strong></p>`;
	document.getElementById("keranjang").innerHTML = html;
}

function kirimPesanan(event) {
	event.preventDefault();
	const nama = document.getElementById("nama").value;
	const alamat = document.getElementById("alamat").value;
	const telepon = document.getElementById("telepon").value;

	if (keranjang.length === 0) {
		alert("Keranjang masih kosong!");
		return;
	}

	document.getElementById("konfirmasi").innerText =
		`Terima kasih ${nama}, pesanan Anda sedang diproses. Kami akan menghubungi ${telepon}.`;

	keranjang = [];
	tampilkanKeranjang();
	event.target.reset(); 
}
