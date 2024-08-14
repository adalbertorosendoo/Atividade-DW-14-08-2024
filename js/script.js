document.getElementById('searchBtn').addEventListener('click', function() {
    const ip = document.getElementById('ipInput').value;

    if (ip) {
        fetch(`https://ipinfo.io/${ip}/json?token=27fc68782fc10b`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const table = document.getElementById('ipInfoTable');
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${data.ip}</td>
                    <td>${data.company.name}</td>
                    <td>${data.country}</td>
                    <td>${data.city}</td>
                    <td><button class="clear-btn">×</button></td>
                `;

                table.appendChild(row);

                row.querySelector('.clear-btn').addEventListener('click', () => {
                    table.removeChild(row);
                });
            })
            .catch(error => console.log('Erro ao obter informações do IP:', error));
    }
});
