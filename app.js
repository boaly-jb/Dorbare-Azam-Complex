function showBox(boxId) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
      if (box.id === boxId) {
          box.style.display = 'block';
      } else {
          box.style.display = 'none';
      }
  });
}



document.getElementById('openpopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('blurBackground').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('blurBackground').style.display = 'none';
});


// payment option is here 

document.getElementById('payButton').addEventListener('click', function() {
    var amount = document.getElementById('amount').value;

    // Replace with your actual bKash API endpoint and authentication details
    var apiUrl = 'https://sandbox.bka.sh/payment/checkout';

    // Example request payload (adjust as per bKash API documentation)
    var payload = {
        amount: amount,
        intent: 'sale',
        currency: 'BDT',
        merchantInvoiceNumber: 'INV-123456',
        version: '1.2.0',
        returnUrl: 'http://yourwebsite.com/payment/success',
        cancelUrl: 'http://yourwebsite.com/payment/cancel'
        // Add more parameters as required by bKash API
    };

    // Send a POST request to bKash API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer your_access_token_here', // Replace with your bKash access token
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        // Redirect to bKash payment URL
        window.location.href = data.paymentGatewayPageURL;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Payment initiation failed. Please try again later.');
    });
});
