// Mengubah warna latar belakang
function changeBackgroundColor() {
    // Warna acak
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F4D03F', '#AF7AC5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Menampilkan alert
function showAlert() {
    alert('Halo! Kamu baru saja menekan tombol.');
}

// Event Listener untuk tombol
document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('changeColorButton');
    const alertButton = document.getElementById('showAlertButton');

    colorButton.addEventListener('click', changeBackgroundColor);
    alertButton.addEventListener('click', showAlert);
});
