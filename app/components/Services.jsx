"use client"
import { motion } from 'framer-motion'
import Link from 'next/link';


const serviceCards = [
    {
      title: "MEA Attestation",
      description:
        "Get your documents authenticated by the Ministry of External Affairs (MEA), India — a mandatory step for international use of educational, personal, or commercial certificates.",
      image: "https://i.pinimg.com/736x/a0/fd/1c/a0fd1c102e40829ec94f8ece5e077343.jpg"
    },
    {
      title: "Apostille Services",
      description:
        "We offer fast and reliable apostille services for countries under the Hague Convention. Valid for travel, study, work, or business abroad without embassy visits.",
      image: "https://i.pinimg.com/474x/52/af/be/52afbe09cbdcda34aa23d616b9a032db.jpg"
    },
    {
      title: "Embassy Attestation",
      description:
        "Complete attestation support from the concerned embassies of countries like UAE, Saudi Arabia, Qatar, Kuwait & more — essential for visa and employment processing.",
      image: "https://i.pinimg.com/736x/83/6d/d3/836dd3b9965ef275822164a77e183b65.jpg"
    },
    {
      title: "HRD / Home Department Attestation",
      description:
        "State-level attestation made simple. We assist with HRD (Human Resource Department) or Home Department authentication of your documents before MEA/legalization.",
      image: "https://i.pinimg.com/474x/1f/42/fc/1f42fc28efecaee5c63be08a301cf993.jpg"
    }
  ];

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="w-full bg-[#FFF7F0] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-lg font-semibold text-[#FF6A00] pb-1 border-b-2 border-[#FF6A00]">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mt-4">
            Comprehensive Document Attestation Services
          </h2>
          <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
            We provide end-to-end attestation services for all types of documents with guaranteed acceptance worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-32 gap-8">
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Link href="/services"> 
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                        <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-3xl font-bold text-[#222222]">{service.title}</h3>
                        <p className="text-[#555555]">{service.description}</p>
                        <motion.button
                        className="mt-4 text-[#FF6A00] font-medium hover:text-[#E63C00] transition-colors flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                        Learn more
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </motion.button>
                    </div>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services