'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// Define attestation only countries
const attestationCountriesList = [
  "Afghanistan", "Algeria", "Angola", "Bangladesh", "Benin", "Cambodia",
  "Cameroon", "Congo Republic", "Congo Democratic", "Ivory Coast", "Cuba",
  "Eritrea", "Ethiopia", "Ghana", "Guinea", "Haiti", "Indonesia", "Iran",
  "Iraq", "Jamaica", "Kenya", "Kuwait", "Laos", "Lebanon", "Libya",
  "Madagascar", "Mali", "Mauritania", "Myanmar", "Nepal", "Niger",
  "Nigeria", "Pakistan", "Palestine", "Qatar", "Rwanda", "Senegal",
  "Sierra Leone", "Sudan", "Syria", "Taiwan", "Tanzania", "Togo",
  "Turkmenistan", "UAE", "Uganda", "Yemen", "Zimbabwe"
];

// Define apostille only countries
const apostilleCountriesList = [
  "Argentina", "El Salvador", "Paraguay", "Burkina Faso", "South Africa",
  "Albania", "Bulgaria", "European Union", "Iceland", "Malta", "Poland",
  "Slovakia", "Ukraine", "Armenia", "Israel", "New Zealand", "Thailand",
  "Brazil", "Canada", "Chile", "Ecuador", "Honduras", "Mexico", "Peru",
  "Suriname", "United States of America", "Egypt", "Morocco", "Mauritius",
  "Tunisia", "Zambia", "Andorra", "Austria", "Belarus", "Croatia", "Cyprus",
  "Czech Republic", "Finland", "France", "Germany", "Ireland", "Italy",
  "Latvia", "Monaco", "Montenegro", "Netherlands", "Portugal", "Republic of Moldova",
  "Romania", "Slovenia", "Spain", "Sweden", "United Kingdom", "Australia",
  "Azerbaijan", "China", "Japan", "Jordan", "Kazakhstan", "Philippines",
  "Republic of Korea", "Saudi Arabia", "Uzbekistan", "Viet Nam", "Costa Rica",
  "Nicaragua", "Uruguay", "Namibia", "Belgium", "Denmark", "Greece", "Lithuania",
  "North Macedonia", "Russian Federation", "Switzerland", "Georgia", "Malaysia",
  "Singapore", "Dominican Republic", "Panama", "Venezuela", "Rwanda",
  "Bosnia and Herzegovina", "Estonia", "Hungary", "Luxembourg", "Norway", "Serbia",
  "Türkiye", "India", "Mongolia", "Sri Lanka"
];

// List of all countries (combined)
const allCountriesList = [
  ...new Set([
    ...attestationCountriesList,
    ...apostilleCountriesList,
    "Bahrain", "Hong Kong", "Kyrgyzstan", "Macau", "Oman", "Russian", 
    "Tajikistan", "Turkey", "Liechtenstein", "Moldova, Republic of", 
    "North Macedonia, Republic of", "San Marino", "Antigua and Barbuda", 
    "Bahamas", "Barbados", "Belize", "Bolivia", "Dominica", 
    "Grenada", "Guatemala", "Guyana", "Saint Kitts and Nevis", 
    "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", 
    "Botswana", "Burundi", "Cape Verde", "Lesotho", "Liberia", 
    "Malawi", "Sao Tome and Principe", "Seychelles", "Brunei Darussalam", 
    "Cook Islands", "Fiji", "Marshall Islands", "Niue", "Palau", "Samoa", "Tonga", "Vanuatu"
  ])
].sort();
  
function Countries() {
  const router = useRouter();
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  
  // Group countries based on services
  const [groupedCountries, setGroupedCountries] = useState({
    all: allCountriesList,
    attestation: attestationCountriesList,
    apostille: apostilleCountriesList,
  });

  // Fetch countries with data
  useEffect(() => {
    const fetchCountriesWithData = async () => {
      try {
        const response = await fetch('/api/get-countries');
        if (response.ok) {
          const data = await response.json();
          const countriesWithData = data.countries || [];
          setCountriesData(countriesWithData);
          
          // Additional processing for countries with actual data from the database
          // This helps identify which countries have details pages available
        }
      } catch (error) {
        console.error('Error fetching countries with data:', error);
      }
    };

    fetchCountriesWithData();
  }, []);

  // Handle country click
  const handleCountryClick = (country) => {
    // Check if country data exists
    const countryId = country.toLowerCase().replace(/\s+/g, '-');
    const hasData = countriesData.some(dataCountry => dataCountry.id === countryId);
    
    if (hasData) {
      router.push(`/countries/${countryId}`);
    }
  };

  // Filter countries based on search term
  const getFilteredCountries = () => {
    const selectedList = groupedCountries[selectedServiceType] || [];
    
    if (!searchTerm) {
      return selectedList;
    }

    // If there's a search term, filter the selected list
    return selectedList.filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCountries = getFilteredCountries();

  // Service type labels for UI
  const serviceTypeLabels = {
    all: "All Countries",
    attestation: "Attestation",
    apostille: "Apostille",
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
          {/* Service Type Filter and Search */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(serviceTypeLabels).map((serviceType, index) => (
                <motion.button
                  key={serviceType}
                  onClick={() => {
                    setSelectedServiceType(serviceType);
                    setSearchTerm('');
                  }}
                  className={`px-6 py-3 rounded-lg transition-all shadow-sm ${
                    selectedServiceType === serviceType && !searchTerm
                      ? 'bg-[#FF6A00] text-white shadow-md'
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {serviceTypeLabels[serviceType]}
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
                placeholder="Search any country..."
                className="w-full md:w-64 px-6 py-3 rounded-lg bg-white shadow-sm text-[#222222] 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] 
                         focus:ring-opacity-50 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </motion.div>

          {/* Countries Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-[#222222] pl-2 border-l-4 border-[#FF6A00]">
              {serviceTypeLabels[selectedServiceType]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCountries.map((country, index) => {
                const countryId = country.toLowerCase().replace(/\s+/g, '-');
                const hasData = countriesData.some(dataCountry => dataCountry.id === countryId);
                
                // Determine service type for this country
                let serviceType = 'attestation';
                if (apostilleCountriesList.includes(country)) {
                  serviceType = 'apostille';
                }
                if (attestationCountriesList.includes(country)) {
                  serviceType = 'attestation';
                }
                
                // Get real service type if data exists
                if (hasData) {
                  const countryData = countriesData.find(dataCountry => dataCountry.id === countryId);
                  if (countryData && countryData.serviceType) {
                    serviceType = countryData.serviceType;
                  }
                }
                
                // Service type indicator color
                const serviceTypeColor = {
                  attestation: 'bg-blue-100 text-blue-800',
                  apostille: 'bg-green-100 text-green-800',
                };
                
                return (
                  <motion.div
                    key={country}
                    className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${hasData ? 'cursor-pointer' : ''}`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => hasData && handleCountryClick(country)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-[#222222]">{country}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${serviceTypeColor[serviceType] || ''}`}>
                        {serviceType === 'apostille' ? 'Apostille' : 'Attestation'}
                      </span>
                    </div>
                    <div className={`mt-2 flex items-center ${hasData ? 'text-[#FF6A00]' : 'text-gray-400'}`}>
                      <span className="text-sm">{hasData ? 'View Details' : ' '}</span>
                      {hasData && (
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Countries;