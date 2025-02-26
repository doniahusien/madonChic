import React from 'react';

const DeliverySection = () => {
  return (
    <div className="bg-gray-100 pt-2 pb-5 px-5">
      <h2 className="text-center text-2xl mb-5">DELIVERY & RETURNS</h2>
      <div className="flex flex-col md:flex-row flew-wrap gap-6 text-sm">
        

        <div className='space-y-2'>
          <h3>SHIPPING</h3>
          <p>Shipping charges are non-refundable.</p>
        </div>


        <div className='space-y-2'>
          <h3>SUPPORT</h3>
          <p>
            Please email us at <span className="font-bold">doniahusien@gmail.com</span> <br />
            or call us during office hours Monday thru Saturday at <span className="font-bold">1234567890</span><br />
            Whatsapp us on <span className="font-bold">12345670890</span>
          </p>
        </div>


        <div className='space-y-2'>
          <h3>EXCHANGE</h3>
          <p>Simply exchange for a different size at no cost to you!</p>
        </div>

        <div className='space-y-2'>
          <h3>RETURN</h3>
          <p>We accept return of all items that are not on sale. Shipping fees and COD charges are non-refundable.</p>
        </div>

      </div>
    </div>
  );
};

export default DeliverySection;
