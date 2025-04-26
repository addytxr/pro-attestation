'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const countries = {
    "Asia": [
        "Armenia", "Azerbaijan", "Bahrain", "China", "Georgia", "Hong Kong", "Israel",
        "Japan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Macau", "Mongolia", "Oman",
        "Philippines", "Qatar", "Russian", "Saudi Arabia", "Singapore", "South Korea",
        "Tajikistan", "Turkey", "UAE", "Uzbekistan"
    ],
    "Europe": [
      "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
      "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
      "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
      "Lithuania", "Luxembourg", "Malta", "Moldova, Republic of", "Monaco", "Montenegro",
      "Netherlands", "North Macedonia, Republic of", "Norway", "Poland", "Portugal", "Romania",
      "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
      "United Kingdom"
    ],
    "Americas": [
      "Antigua and Barbuda", "Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil",
      "Chile", "Colombia", "Costa Rica", "Dominica", "Dominican Republic", "Ecuador", "El Salvador",
      "Grenada", "Guatemala", "Guyana", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama",
      "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
      "Suriname", "Trinidad and Tobago", "USA", "Uruguay", "Venezuela"
    ],
    "Africa": [
      "Botswana", "Burundi", "Cape Verde", "Lesotho", "Liberia", "Malawi", "Mauritius", "Morocco",
      "Namibia", "Sao Tome and Principe", "Seychelles", "South Africa", "Tunisia"
    ],
    "Oceania": [
      "Australia", "Brunei Darussalam", "Cook Islands", "Fiji", "Marshall Islands", "New Zealand",
      "Niue", "Palau", "Samoa", "Tonga", "Vanuatu"
    ]
  };
  

function Countries() {
  const [selectedRegion, setSelectedRegion] = useState('Asia');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = {
    [selectedRegion]: countries[selectedRegion]
  };

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
            Global Presence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mt-4">
          Countries We Serve
          </h2>
          <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
            Explore our apostille and attestation services available across multiple regions worldwide
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Region Filter and Search */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(countries).map((region, index) => (
                <motion.button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-3 rounded-lg transition-all shadow-sm ${
                    selectedRegion === region
                      ? 'bg-[#FF6A00] text-white shadow-md'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {region}
                </motion.button>
              ))}
            </div>

            <motion.div 
              className="relative w-full md:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search countries..."
                className="w-full md:w-64 px-6 py-3 rounded-lg bg-white shadow-sm text-[#222222] 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] 
                         focus:ring-opacity-50 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </motion.div>

          {/* Countries Grid */}
          {Object.entries(filteredCountries).map(([region, countryList]) => {
            const filtered = countryList.filter(country =>
              country.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filtered.length === 0) return null;

            return (
              <motion.div 
                key={region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-[#222222] pl-2 border-l-4 border-[#FF6A00]">
                  {region}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map((country, index) => (
                    <motion.div
                      key={country}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <h3 className="text-lg font-medium text-[#222222]">{country}</h3>
                      <div className="mt-2 flex items-center text-[#FF6A00]">
                        <span className="text-sm">View Details</span>
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Countries;