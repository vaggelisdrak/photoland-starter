import React from 'react'
import emailjs from 'emailjs-com';

const DamageReport = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        //service@thermoclimatistiki.gr
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();  // Reset form after submission
  } ;
  return (
    <div>
        <section className='mb-[30px] pt-36 lg:pt-0'>
      <div className='xl:container mx-auto px-5 lg:pt-5 xl:pt-0'>
            <div className='text-primary text-[18px] tracking-wider leading-9'>
                <h1 className='text-[28px] tracking-wider leading-9 font-bold text-gray-700 text-center'>Δήλωση Βλάβης</h1>
                <p className="text-lg mb-2 mt-5">
                    Τα πεδία που είναι επισημασμένα με <strong className='text-red-600'>*</strong> είναι υποχρεωτικά
                </p>

                <form onSubmit={sendEmail}>
                    <div class="mt-3">
                        <div class="mt-4">
                            <label htmlFor="name" className="block  font-medium text-gray-700">Όνομα <strong className='text-red-600'>*</strong></label>
                            <input type="text" name="name" id="name"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>
                        <div class="mt-4">
                            <label htmlFor="city" className="block font-medium text-gray-700">Πόλη <strong className='text-red-600'>*</strong></label>
                            <input type="text" name="city" id="city"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>
                        <div class="mt-4">
                            <label htmlFor="address" className="block font-medium text-gray-700">Διεύθυνση <strong className='text-red-600'>*</strong></label>
                            <input type="text" name="address" id="address"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>
                        <div class="mt-4">
                            <label htmlFor="phone" className="block font-medium text-gray-700">Τηλέφωνο <strong className='text-red-600'>*</strong></label>
                            <input type="tel" name="phone" id="phone"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>
                        <div class="mt-4">
                            <label htmlFor="email" className="block font-medium text-gray-700">E-mail <strong className='text-red-600'>*</strong></label>
                            <input type="email" name="email" id="email"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>
                        <div class="mt-4">
                            <label htmlFor="eidos" className="block font-medium text-gray-700">Είδος Συσκευής <strong className='text-red-600'>*</strong></label>
                            <input type="text" name="eidos" id="eidos"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>  
                        <div class="mt-4">
                            <label htmlFor="marka" className="block font-medium text-gray-700">Μάρκα <strong className='text-red-600'>*</strong></label>
                            <input type="text" name="marka" id="marka"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>  
                        <div class="mt-4">
                            <label htmlFor="model" className="block font-medium text-gray-700">Μοντέλο <strong className='text-red-600'>*</strong></label>
                            <input type="text" name="model" id="model"  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]" required/>
                        </div>
                        <div class="mt-4">
                            <label htmlFor="description" class="block font-medium text-gray-700">Περιγραφή Βλάβης <strong class="text-red-600">*</strong></label>
                            <textarea name="description" id="description" rows="4" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                        </div>

                        <div class="mt-4">
                            <label htmlFor="message" class="block font-medium text-gray-700">Μήνυμα <strong class="text-red-600">*</strong></label>
                            <textarea name="message" id="message" rows="4" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                        </div>

                        <div className="mt-4 flex items-center space-x-4">
                        <input
                            id="agreement"
                            name="agreement"
                            type="checkbox"
                            className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded mr-2"
                        />
                        <label htmlFor="agreement" className="font-medium text-gray-700">
                            GDPR - Με την χρήση αυτής της φόρμας συμφωνείτε στην αποθήκευση και την διαχείριση των δεδομένων σας απο αυτήν την ιστοσελίδα με σκοπό την επικοινωνία μαζί σας. Τα δεδομένα σας είναι ασφαλή και δεν μοιράζονται σε τρίτους <strong className="text-red-600">*</strong>
                        </label>
                        </div>
                        <button
                        type="submit"
                        className="mt-6 w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                        Υποβολή
                        </button>
                        <br/>


                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default DamageReport