import React from 'react';
// import components
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';
// images
import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png';
import PromoImg3 from '../img/logo.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className='mb-[30px] pt-36 lg:pt-0'>
      <div className='xl:container mx-auto px-5 lg:pt-5 xl:pt-0'>
        <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[10px] xl:gap-x-[30px]'>
        <p className='text-primary text-[18px] tracking-wider leading-9'>
          Καλωσορίσατε στη Θερμοκλιματιστική<br/><br/>

            Ονομάζομαι Καρβουνιάρης Χαράλαμπος, είμαι ιδρυτής της εταιρείας Θερμοκλιματιστική, και απόφοιτος του τμήματος <strong>Μηχανολόγων Μηχανικών</strong> του ΤΕΙ Πατρών, ενώ διαθέτω πολυετή εμπειρία και βαθιά γνώση στον τομέα της μηχανολογίας.

            <br/><br/>Η εταιρεία μας ξεχωρίζει για την <strong>αφοσίωση</strong>, τον <strong>επαγγελματισμό</strong> και την <strong>αγάπη</strong> για το αντικείμενό μας. Ξεκινήσαμε τις δραστηριότητές μας στον Πύργο Ηλείας, με εξειδίκευση στη μελέτη και εγκατάσταση επαγγελματικών ψυγείων και συστημάτων θέρμανσης για οικιακούς χώρους. Σήμερα, αναλαμβάνουμε έργα μεγάλης κλίμακας σε ξενοδοχειακές εγκαταστάσεις σε Ζάκυνθο και Κεφαλλονιά, ενώ η κορυφαία επιτυχία μας περιλαμβάνει την κατασκευή ενδοδαπέδιας θέρμανσης, κλιματισμού και υδραυλικών εγκαταστάσεων στην Ολλανδία.

            Η Θερμοκλιματιστική είναι το εξειδικευμένο service για πολλές εταιρείες στον νομό Ηλείας, ενώ καθημερινά συνεργαζόμαστε με ξενοδοχειακές μονάδες σε Ζάκυνθο και Κεφαλλονιά. Στόχος μας είναι η <strong>υψηλή ποιότητα</strong> εργασίας και η <strong>απόλυτη ικανοποίηση</strong> των πελατών μας.

            <br/><br/>Σας ευχαριστούμε για την εμπιστοσύνη σας.
        </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

