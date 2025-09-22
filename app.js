const { AdyenCheckout, Dropin, Card, GooglePay, PayPal, ApplePay, Ideal } = window.AdyenWeb;

// Global configuration
  
const globalConfiguration = {
  session: {
    id: 'CS15A410732A0E0540306A2A3', // Unique identifier for the payment session.
    sessionData:'Ab02b4c0!BQABAgAZ8Z0sNmK5J+CSBoiuekevHROdNomkQivIAc9aUGgssDVwHFdk74x58czW0J7xZwVFkMyUzRDWG4Lc4fLzI+G24Caq1oyISnzgFUS9lcOEf/E5gYpRsiEO6lZ/mXxlgl6027kr7Tc366q05D8kg3Nu1vwLKsfIMKCmPokdOwqwHuw2IP96aGRrU7W47rxKEPQRKGRlfXggiWfZPYD2OoJEnPXo7KxfN1GGNeODyDMxf62jfA0TRFvjxb1rWwHOMkTHWSZqDsDqSz/ifhrDKfAdRaDJo17ygwUfwGHM8ZQb/8v+22VKv5ZBA/g3zd9dqFQfVzLSSvVDafYCyHkPHCSDzBQrLpbOBUZa7vp/2q5vgfnLSivf9SjEptj1g9uPPfIqMXYkaKEUT6uFKS9sUwxvCgzBMidDmXDz2+jFd0o7dmK/pY/kaCClqlj6JqoJq1lQDJRrNHMsGcpDEHYMVwoThVHGHO1aFd928ZPT5UbDxUsd3eMkrvAcMFMitHsmjEZx698ckIrdj0iMDhqmm2ICOTg7t6c0oMdntDvGYqgPNdoS2i5e9gm/zIas2GMhyKhqoHG6M7FhNh3Q+9fjg+rhWkMhdZTdlVAgcY0CC8iLeOjXyriFTl0DH56NftcgR6/vH50QHVhQ7XuCrM8kmkC65LtC/meAxolROnbSn4GcDwwpU6HorWmnvUCLS0EASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ9T+v4e4GYVTBDnmJCWnU1lFQpcSjx69REwTNEKubXBoBljbHhZukKg84IPCjh1H/UcaApfhgOmCKi0P/oehw5lH53d0ArXfnOsv7gr/8T0MepqhbYUxr1/ToqHs41LQrUDEjZk0yOSwUPyKUu9UIcBjUD9ytmTSR0XnBpXG2AFWZLGOlVsHhgHxxmlWi0Aitq7Cb3v1mNlP3ihX9zr7lHTSDaaBPY2bQ+QX9FaV4zhu69BCPpchYaI+mMk9E1F/LWBIRoLLWQcg6CUF6GqcJ2UKkvPbdCfYYVJn5FNyreko+IkZHfvd1aKCjLrwBxJjBkojpWChkEyYL3kQ1CoTbpO58l4tIfuAISyK2ECQ667zfJ/CAUYpJWIVJZc6fhkdyqJ41Ry8r7UhkqB7w+5r2yVtHTG1VuKlRUhnoARpmEu8QCfAZs+5TFrZ1wFAK78wrhBCKJ5Fb+YYg1cH89cKulZsmkej4zQ4FHzZOWZscOhUQjpQXDbyzCxO1TnWWxKU/rprW3QQM7Suo9wYkMygerbtjb7+XbevKf0sw/1CJUNq+duixBI+KqmxdjjAuICMoQymFomUOULWZS9x3dKN+TvujQkiqLYhT+WIrksOr1ks6+nJ2jL0IiOQ==',
      environment: 'test', // Change to 'live' for the live environment.
  amount: {
    value: 1000,
    currency: 'GBP'
  },
  locale: 'en-US',
  countryCode: 'GB',
  clientKey: 'test_RR44DURBMZFATLBOVWGXDNL64QOGXJ62',
paymentMethodsResponse: {
                    "paymentMethods": [
                {
                    "brands": [
                        "amex",
                        "mc",
                        "visa"
                    ],
                    "name": "Cards",
                    "type": "scheme"
                },
                {
                    "brands": [
                        "amex",
                        "mc",
                        "visa"
                    ], 
                    "configuration": {
                        "merchantId": "000000000304641",
                        "merchantName": "JCBWorldParts_Ecommerce_TEST"
                    },
                    "name": "Apple Pay",
                    "type": "applepay"
                },
                {
                    "name": "UPI",
                    "type": "billdesk_upi"
                },
                {
                    "configuration": {
                        "merchantId": "50",
                        "gatewayMerchantId": "JCBWorldParts_Ecommerce_TEST"
                    },
                    "name": "Google Pay",
                    "type": "googlepay"
                }
            ]
           }
            // Replace with your actual client key
                ,onPaymentCompleted: (result, component) => {
                    console.info('Payment completed:', result, component);
                },
                onPaymentFailed: (result, component) => {
                    console.info('Payment failed:', result, component);
                },
                onError: (error, component) => {
                    console.error('Global error:', error.name, error.message, error.stack, component);
                }
             
        };
        const paymentMethodsConfiguration = {
                card: {
                    showBrandIcon: true,
                    hasHolderName: true,
                    holderNameRequired: true,
                    amount: {
                    value: 1000,
                    currency: "GBP",
                    },
                    placeholders: {
                    cardNumber: "1234 5678 9012 3456",
                    expiryDate: "MM/YY",
                    securityCodeThreeDigits: "123",
                    securityCodeFourDigits: "1234",
                    holderName: "J. Smith",
                    },
                },
            };
(async () => {
  try {
      const checkout = await AdyenCheckout(globalConfiguration);
      const dropin = new Dropin(checkout, paymentMethodsConfiguration).mount('#dropin-container');
} catch (error) {
    console.error('Initialization error:', error);
  }
})();

























// const { AdyenCheckout, Dropin, Card, GooglePay, PayPal, ApplePay, Ideal } = window.AdyenWeb;

// // Global configuration
// const globalConfiguration = {
//   session: {
//     id: 'CSACA883FA01E27C6C', // Replace with your actual session ID
//     sessionData: 'Ab02b4c0!BQABAgBL2AbaXZ1xt00crLMEVStkt5jI1H9YTkvdz1sNQkb8Zx5CQjko60wFNT+50erGQzBzaaIe6UlIChXJbV3y+fQshX+eMa2wlFNPiG1GtfG0uvW\/0Jb\/iHfVzzOX5w2nn06w4PlIcwpiiygtLPnoHVYag217E8iULprU5lCw\/4fqP6PTuiOCVuNudr7M8InVQd5Ahk7Olu1eb4t+4fdjhk+aVjKIhPzuOOG1lchQIWtfztTI2blVxnWB5O3XjoaGBP4z\/\/ifUncg9PJRRzhfFyfTijOiM0NCeodYnETaWx1cYNnuqfbDV0lVhat4gEYRbLNXWZHCnlDisgldI8vngmewtN5f6MNibJ7ok3CtmYORQCmFdQH6JTG9ysa+gPiofP6fxhkA10+Nre9JvFaDflfDAIWsRv6mQxnRNwVdhumk2Tob4jEj3JR0wxow36GwzgfPk0Ct\/8u8O4XeNRQfcf676CuvyVa6prjYYm8XCXezXEb2nXRfwU+laBJhAr4uxlre262dUqyv7dW8VC2It\/xXIPVWCYkD+BUoA00l8xnUGJvWU0eK0IiQlLcxxQ4L8wghHK4F2Nuatpn7G\/VIwsrtQIa8skZDTuMioB0NAuBvif6B4eLS62Q2GRdKitCrX1X2NSouIfaCAJwtCnUA6eu2dwKLdNSxIoxOam8+R3KxgAzMC++zVUtFr7+BGWAASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ9mpo+xgyGM2Ee42jhByZTe\/35JNEE+TyyoaPDsCAVd\/MlAz9fwrZkNlmt1XYxPYE+z0UmJozMPnwsgGro+32drZCWxC8Gc8OD2zGXuDsgsLVoCdGyke7QIfrf165Rawncoi8Dwh2Ce6k9fzpkdQgymfnx9V9lU8c7GljbwOvxaMqtdNZkjtUx+PQtJarDD9+JkOcfexNCdziYSDeNAsEBDL8dXYdXsJyaO9eQt9T9DlTO6Nw01affllc3dSUg5G3UStLhcS81KpkOnMu5JPwNXGtwvn3x\/E2UVGTjjWLbuVeE71axOFOXbHqEZwIRl\/OftUU2RBHSmaMhIyeDwqtnvLN+XjPxTHgolxzz2a8iE6qvgdWEXOBzZ8n\/bTOxHQqEcthk+VNylTd+qQXcSNOKQKR3rQ68b9l2znB+kULprAXWLjQ0ADwT7m4dUYCBx\/tRFmwFLv\/nTl2lUBul5Rch+1RzmssQk1J46M6VSQ\/6P5ck2bDJRz\/e184VZbcUTMC6hSjAJ5Cw0U78Yqb\/guHn2juzsMSHh1YerGjEnIou8K9DO7qtigURVx4l09oyUpFHUPmT5hltsNHuvylE8BogxjQVHlxOiEDcEu\/OwIJ04IFCotQ530GFqOW+2\/Xbdt9QrbfJX\/aG22xI4l69kgUVTlio9FGB3DuXTrg4W9gChjZvcdLRwac=' // with your actual session data
//   },
//   environment: 'test', // Change to 'live' for production
//   amount: {
//     value: 1000, // Value in minor units (e.g., 1000 = €10.00)
//     currency: 'GBP'
//   },
//   locale: 'en-US',
//   countryCode: 'GB',
//   clientKey: 'test_QMZ4KRP6ZBA2TATP4PMTPJDD2AUGNXMV', // Replace with your actual client key
//   onPaymentCompleted: (result, component) => {
//     console.info('Payment completed:', result, component);
//   },
//   onPaymentFailed: (result, component) => {
//     console.info('Payment failed:', result, component);
//   },
//   onError: (error, component) => {
//     console.error('Global error:', error.name, error.message, error.stack, component);
//   }
// };

// const dropinConfiguration = {
//    // Required if you import individual payment methods.
//    paymentMethodComponents: [GooglePay, ApplePay],
//    // Optional configuration.
//    onReady: () => {},
//    instantPaymentTypes: ['applepay', 'googlepay']
   
// };
// (async () => {
//   try {
//     const checkout = await AdyenCheckout(globalConfiguration);
// const dropin = new Dropin(checkout, dropinConfiguration).mount('#dropin-container');
//   } catch (error) {
//     console.error('Initialization error:', error);
//   }
// })();





