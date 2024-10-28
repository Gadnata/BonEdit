const send = () => {
  const url = 'https://api.cryptocloud.plus/v2/invoice/create';
  const headers = new Headers({
      'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiTWpZNE56WT0iLCJ0eXBlIjoicHJvamVjdCIsInYiOiIyODM1YjUzZjdiNWU2MTI1MDQxYmViOGRhOTk0Y2FmY2IyOWE2N2ViMWQxYWI4YTlmZTJkMThiYzRhZGQ4ZDhjIiwiZXhwIjo4ODEyOTM2NDE0Nn0.dlKn8yrbEAla42CHRvUvZcanZQC_q8QhcBM7IuUj4mY',
      'Content-Type': 'application/json'
  });
  const data = {
    amount: 1,
    shop_id: 'Px0qTBQHBdV16Vzp',
    currency: 'USD'
  };

  fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject('Creation Error');
      }
    })
    .then(data => {
      var window = window.open();
      console.log('Success:', data);
      window.location = data.result.link;
    })
    .catch(error => {
      console.error('Fail:', error);
    });

}

explosion_pack_buy.addEventListener('click', () => {
  send();
})