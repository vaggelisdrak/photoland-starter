import React from 'react';
// import components
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';
// images
import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png';
import PromoImg3 from '../img/logo.png';
import { Link } from 'react-router-dom';

const OurServices = () => {
  return (
     <section className='mb-[30px] pt-36 lg:pt-0'>
      <div className='xl:container mx-auto px-5 lg:pt-5 xl:pt-0'>
        <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[10px] xl:gap-x-[30px]'>
        <div className='text-primary text-[18px] tracking-wider leading-9'>
          <h1 className='text-[28px] tracking-wider leading-9 font-bold text-gray-700'>Ολοκληρωμένες Τεχνικές Υπηρεσίες για τον Χώρο σας</h1>
          <p class="text-lg mt-5">
                Εξασφαλίζουμε την άριστη λειτουργία και απόδοση του εξοπλισμού σας με εξειδικευμένες λύσεις σε κάθε ανάγκη. Δουλεύουμε με γνώμονα την ποιότητα και την απόλυτη ικανοποίηση του πελάτη.
            </p>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Κλιματιστικά</h2>
                <p class="mt-4">Προσφέρουμε άμεση επισκευή, εγκατάσταση και συντήρηση κλιματιστικών μονάδων για επαγγελματική και οικιακή χρήση. Οι υπηρεσίες μας περιλαμβάνουν:</p>
                <ul class="list-disc list-inside mt-4 space-y-2">
                    <li>Έλεγχο στεγανότητας σωληνώσεων.</li>
                    <li>Συμπλήρωση ψυκτικού υγρού (freon).</li>
                    <li>Αντικατάσταση και επισκευή συμπιεστών.</li>
                    <li>Επισκευή ψυκτικού κυκλώματος.</li>
                    <li>Αλλαγή ανεμιστήρων.</li>
                    <li>Αντικατάσταση ή επισκευή πλακετών.</li>
                </ul>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Ψυγεία</h2>
                <p class="mt-4">Εξειδικευόμαστε στην άμεση επισκευή ψυγείων και στην αντιμετώπιση κάθε προβλήματος. Οι υπηρεσίες μας περιλαμβάνουν:</p>
                <ul class="list-disc list-inside mt-4 space-y-2">
                    <li>Έλεγχο διαρροής ψυκτικού υγρού (freon).</li>
                    <li>Επισκευή και αλλαγή συμπιεστών.</li>
                    <li>Αλλαγή θερμοστατών, χρονοδιακοπτών και αντιστάσεων.</li>
                    <li>Επισκευή ή αντικατάσταση πλακετών.</li>
                </ul>
                <p class="mt-4">Εξειδικευμένο service στην επαγγελματική και βιομηχανική ψύξη, με μελέτη και εγκατάσταση ψυκτικών συστημάτων προσαρμοσμένων στις ανάγκες της επιχείρησής σας.</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Θέρμανση</h2>
                <p class="mt-4">Αναλαμβάνουμε τη μελέτη και εγκατάσταση συστημάτων θέρμανσης για οικιακούς και επαγγελματικούς χώρους, όπως:</p>
                <ul class="list-disc list-inside mt-4 space-y-2">
                    <li>Λέβητες.</li>
                    <li>Καλοριφέρ.</li>
                    <li>Ενδοδαπέδια θέρμανση.</li>
                    <li>Έκδοση φύλλου ελέγχου για τη σωστή λειτουργία σταθερών εστιών καύσης για τη θέρμανση κτιρίων και νερού.</li>
                </ul>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Πυρόσβεση</h2>
                <p class="mt-4">Προσφέρουμε λύσεις για την προστασία των χώρων σας με υπηρεσίες πυρασφάλειας και πυρανίχνευσης, όπως:</p>
                <ul class="list-disc list-inside mt-4 space-y-2">
                    <li>Μελέτη και εγκατάσταση συστημάτων πυρασφάλειας.</li>
                    <li>Έκδοση πιστοποιητικών ενεργητικής πυροπροστασίας.</li>
                </ul>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Υγραέριο</h2>
                <p class="mt-4">Εξειδικευόμαστε στη μελέτη και εγκατάσταση συστημάτων υγραερίου για οικιακή και επαγγελματική χρήση, εξασφαλίζοντας την μέγιστη δυνατή απόδοση του συστήματος με γνώμονα την ασφάλεια.</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Εξαερισμός</h2>
                <p class="mt-4">Παρέχουμε ολοκληρωμένες λύσεις εξαερισμού για οικιακούς και επαγγελματικούς χώρους, συμπεριλαμβανομένης της μελέτης και εγκατάστασης συστημάτων εξαερισμού, που διασφαλίζουν την ποιότητα του αέρα και τη σωστή λειτουργία του χώρου σας.</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Οικιακές συσκευές</h2>
                <p class="mt-4">Πλήρης επισκευή οικιακών συσκευών όπως πλυντήρια, στεγνοτήρια, ψυγεία, κλιματιστικά, κουζίνες.</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-700">Aντλίες θερμότητας</h2>
                <p class="mt-4">Μελέτη και εγκατάσταση αντλιών θερμότητας και επισκευή.</p>
            </div>

            <div class="mt-8 mb-3">
                <p class="text-xl font-semibold text-gray-700">Είμαστε οι μάστορες που μετατρέπουν τις ιδέες σας σε πραγματικότητα!</p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
