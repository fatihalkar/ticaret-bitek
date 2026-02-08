document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    
    const form = event.target; 
    const formData = new FormData(form); 
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert('Mesajınız başarıyla gönderildi!');
            form.reset(); 
        } else {
            alert('Hata oluştu: ' + result.message);
        }
    } catch (error) {
        alert('Mesaj gönderilirken bir hata oluştu.');
        console.error(error);
    }
});
//fetch() Kullanıldı → Form verileri Web3Forms API'sine manuel olarak gönderildi. Script event.preventDefault(); yüzünden bunu kullanmak gerekti