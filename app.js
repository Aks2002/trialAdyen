const { AdyenCheckout, Dropin, Card, GooglePay, ApplePay } = window.AdyenWeb;

// Global configuration
const sessionData = 'Ab02b4c0!BQABAgCT3QpidCUwdyHMTBPvNrTrkRVzoF51thTCh3Iq1a1bhJbG8jlePEXkhDxxuzwovGQyzVbtobtHqPFUj3lTAHjBpLUBvwOsRcMNQxSaiZQbHMSRjOIHWC9WTNT0wDSrohfNa9ggr8mWY76xj3dYXR1IxQXNMdGzEP6SPxPSKcFVtXmGlRDxdTHGK455q3BFxu8MrdcVKqBCCA3DUb55HVkiEgUnM8sG837FmW2spF9HqKLAu0907UYoRsTIkSWvMXUFrWEunP7E75GgkDS9MUzR4rFAXz5XeDJpfEVkAI92EjX1n0DziGwR+dql3zoQ9MbAij9OvR9zXBBfySgLgpUcxwbdfmqgqZnyBMYzwmyvt4L9J3ajXgPNTZbEUHdjfKSyLTDi0Q/eAxs4nw7Ygd2XoJGIsxya3BIZQGmlvyXHVaTSVOy/D01sHg/nXHz4vv814AcdjSmbayUq2XZHoD4sApXUmMMySjovjT5Rf/w7dPW/xzKVquuRQq+VlWHGiGJnHfWTPLzsK5NpyrIAvHa7/M+CWx8RVP04ymUBsoqaIwR60edFmbgKcaIB+sGzLoHRjrz8eNzeR/iV3EpcC+hAo93+1xO1fC8Be2Ueb64D/NPvk1WZzgBd0nI6YMEmyDGynvJlKJizZ6imxFOl787+QfXQYkiu2js+jmzvwF+9nAzHwaxdT18M9+7zylsASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ917O2da3wKF3t9/2w7AiTD6yJkQsmiWXtkvIgjNne2NrLEripU2YDBrjZOCws1liUOYreZOCmowvPk8xYofxIznDa0Gw1TPrX8hzbLIgMMf4+fY87OUNDsRHkPQGFD+YEueypl+T4fX9LM0v5re8G8rQq3876wY3z95b56W9y09WR691nYfL/rJ1LDnbXXfDNSq62ij1iPONLrZQAGiQ5RPfZTm03gH76ZsSL2VUVIZxS3KCMyLYvSVbgeZNV+wNy9RDBB2dHKN5DmMeGsUW/IiZWcrCbxxd/UMIHx3NT1mBAU/NkSTUZKxAgs4s+ltn1aXTbK+ewXvi301K8C21AWck5L57ZlveoraAvVD/P0Tkosa/xYTJuXeRTif9gQiZxSfs6BLFwlx16pJV6T58vX9bmFfU75f3wb+QfReUxhIiKyU9OGcfhBHWOslBrtxgbu12Wsdff4LfLuHWjekY7aTjYMWyaLWiVfqkyFY1LgoecijDmGWHHpRTJOgqJBno6L0kvaZ6ogJPBuxD6MLbDcYZsCBVJHu1+Wq21FC3SGWcHseoGyLkVeU4J1baOT/hBukT3HvyQYbb3tnfPDpXLVWdDpdlquuBp2qKCMiRG6F1HSKNhRw0yKXg=';
const globalConfiguration = {
  session: {
    id: 'CS1EA747BCB5D230D195152B6', // Unique identifier for the payment session.
    sessionData: sessionData
      },
  environment: 'test', // Change to 'live' for the live environment.
  amount: {
    value: 1000,
    currency: 'GBP'
  },
  locale: 'en-US',
  countryCode: 'GB',
  clientKey: 'test_RR44DURBMZFATLBOVWGXDNL64QOGXJ62',
            // Replace with your actual client key
                onPaymentCompleted: (result, component) => {
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







