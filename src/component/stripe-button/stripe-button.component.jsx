import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStrip = price * 100;
    const publishableKey = 'pk_test_51GwsiRCDavb3XhGQYgNtah53KdCvJ5DA6I4aVft2GNwTj1tafr5oxfF6SkALQeL7F4t6zsh3m97a4Br7OEYzYM9Y0084ESoHZD';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Ecom Prictice App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;