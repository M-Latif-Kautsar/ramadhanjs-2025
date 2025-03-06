let infaqList = [];
let totalAmount = 0;

function addInfaq() {
    const amountInput = document.getElementById('amountInput');
    const amount = parseInt(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Masukkan nominal yang valid!");
        return;
    }

    infaqList.push(amount);
    totalAmount += amount;

    updateUI();
    amountInput.value = ''; // Clear input
}

function updateUI() {
    const list = document.getElementById('infaqList');
    const total = document.getElementById('totalAmount');

    list.innerHTML = '';
    infaqList.forEach((amount, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `Hari ke-${index + 1}: Rp ${amount.toLocaleString('id-ID')}`;
        list.appendChild(listItem);
    });

    total.innerText = totalAmount.toLocaleString('id-ID');
}
