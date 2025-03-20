import React from 'react'
import ContactForm from '../components/ContactForm'


const Procedure = () => {
    return (
        <>
            <div className='flex  pt-16 p-2'>
                <div>
                    <ContactForm/>
                </div>
                <div className='ml-10 block text-justify mr-11 mt-8' >

                    <h1 className='block text-5xl'>Procedure</h1>

                    <p className='mt-5'>At IDCC, dental specialists provide a range of dental treatments of high quality to patients with different dental treatment requirements. The premium goal is to provide the best Dental Treatment in all over the world. These include the dental implants, cosmetic dentistry, gums treatment, kids’ dentistry, maxillofacial dentistry, orthodontics, dental radiology, crowns and bridges, microscopic dentistry as well as oral cancer detection.
                    </p>

                    <p className='mt-5'>The popular dental procedures like dental implants and cosmetic dentistry includes smile makeovers, zirconia fillings, latest technology dental implants as well as minor to significant teeth corrections. The kid’s dentistry includes root canal treatment, fluoride applications as well as conscious sedation for kids. The gums treatment include laser dentistry, laser gums depigmentation, deep cleaning as well as socket preservation therapy. Maxillofacial surgery treatments include simple, surgical extractions as well as sinus lift surgery. Orthodontics treatments include lingual braces, clear aligners, and even traditional braces. Dental radiology is utilized for every patient case at IDCC. Crowns and bridges are one of the demanding dental treatments in our dental clinic. In this way, patients can achieve the desired cosmetic and functional dental results with the help of the best dental treatments.
                    </p>
                    <h2 className='text-3xl mt-3 mb-3 block'>Dental Services</h2>
                    <div className='flex justify-around '>
                        <div>
                            <h2 className='text-2xl mt-1 mb-3'>Dental Implants</h2>
                            <ul className='list-disc pl-5'>
                                <li>Missing Multiple Teeth</li>
                                <li>Missing Single Tooth</li>
                                <li>Missing All Teeth</li>
                                <li>All-On-4 Technology</li>
                                <li>Nobel Guide Computer Guided Surgery</li>
                                <li>Nobel Biocare - Dental Implants</li>
                            </ul>

                            <h2 className='text-2xl mt-3 mb-3'>Cosmetic Dentistry</h2>
                            <ul className='list-disc pl-5'>
                                <li>Smile Makeover</li>
                                <li>Tooth Crystal</li>
                                <li>No Prep / Prepless Veneers</li>
                                <li>Crooked Tooth Correction</li>
                                <li>Teeth Whitening</li>
                                <li>Jetting Out Teeth Correction</li>
                                <li>Mottling Of Teeth Correction</li>
                                <li>Cosmetic Contouring</li>
                                <li>Gap Closure</li>
                                <li>Painless Microscope Assisted Rct</li>
                                <li>Cosmetic Tooth Colored Fillings</li>
                                <li>Inlays & Onlays</li>
                                <li>Zoom Ap Teeth Whitening</li>
                                <li>Metal Free Crowns & Bridges (Zirconia)</li>
                            </ul>

                            <h2 className='text-2xl mt-3 mb-3'>Dental Radiology</h2>
                            <ul className='list-disc pl-5'>
                                <li>Digital Rvg X-Rays</li>
                                <li>Digital Full Mouth Panoramic X-Ray</li>
                            </ul>
                            <h2 className='text-2xl mt-3 mb-3'>Crowns & Bridges</h2>
                        </div >
                        <div>
                            <h2 className='text-2xl mt-1 mb-3'>Gums Treatment</h2>
                            <ul className='list-disc pl-5'>
                                <li>Laser Dentistry</li>
                                <li>Laser Gummy Smile Correction</li>
                                <li>Full Mouth Scaling & Polishing</li>
                                <li>Deep Cleaning</li>
                                <li>Gums Surgery</li>
                                <li>Socket Preservation Therapy</li>
                                <li>Bad Breath Treatment</li>
                                <li>Laser Gums De Pigmentation</li>
                                <li>Mobile Teeth Solution With Splinting</li>
                            </ul>

                            <h2 className='text-2xl mt-3 mb-3'>Kids Dentistry</h2>
                            <ul className='list-disc pl-5'>
                                <li>Fluoride Fillings</li>
                                <li>Kids Root Canal Treatment</li>
                                <li>Flouride Applications</li>
                                <li>Conscious Sedation For Kids</li>
                            </ul>
                            <h2 className='text-2xl mt-3 mb-3'>Maxillofacial Surgery</h2>
                            <ul className='list-disc pl-5'>
                                <li>Simple & Surgical Extractions</li>
                                <li>Sinus Lift Surgery</li>
                            </ul>
                            <h2 className='text-2xl mt-3 mb-3'>Orthodontics</h2>
                            <ul className='list-disc pl-5'>
                                <li>Braces (Metallic Or Tooth Colored Ceramic)</li>
                                <li>Lingual Braces</li>
                                <li>Clear Aligners (Invisible Braces)</li>
                            </ul>
                            <h2 className='text-2xl mt-3 mb-3'>Microscopic Dentistry</h2>
                            <h2 className='text-2xl mt-3 mb-3'>Oral Cancer Detection</h2>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Procedure
