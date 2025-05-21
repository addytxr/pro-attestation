'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// List of all countries
const allCountriesList = [
  "Armenia", "Azerbaijan", "Bahrain", "China", "Georgia", "Hong Kong", "Israel",
  "Japan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Macau", "Mongolia", "Oman",
  "Philippines", "Qatar", "Russian", "Saudi Arabia", "Singapore", "South Korea",
  "Tajikistan", "Turkey", "UAE", "Uzbekistan", "Albania", "Andorra", "Austria", 
  "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", 
  "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
  "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
  "Lithuania", "Luxembourg", "Malta", "Moldova, Republic of", "Monaco", "Montenegro",
  "Netherlands", "North Macedonia, Republic of", "Norway", "Poland", "Portugal", "Romania",
  "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
  "United Kingdom", "Antigua and Barbuda", "Argentina", "Bahamas", "Barbados", "Belize", 
  "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Dominica", "Dominican Republic", 
  "Ecuador", "El Salvador", "Grenada", "Guatemala", "Guyana", "Honduras", "Jamaica", 
  "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "Saint Kitts and Nevis", 
  "Saint Lucia", "Saint Vincent and the Grenadines", "Suriname", "Trinidad and Tobago", 
  "USA", "Uruguay", "Venezuela", "Botswana", "Burundi", "Cape Verde", "Lesotho", "Liberia", 
  "Malawi", "Mauritius", "Morocco", "Namibia", "Sao Tome and Principe", "Seychelles", 
  "South Africa", "Tunisia", "Australia", "Brunei Darussalam", "Cook Islands", "Fiji", 
  "Marshall Islands", "New Zealand", "Niue", "Palau", "Samoa", "Tonga", "Vanuatu", "India"
];
  
function Countries() {
  const router = useRouter();
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  
  // Group countries based on fetched data
  const [groupedCountries, setGroupedCountries] = useState({
    all: [],
    attestation: [],
    apostille: [],
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
          
          // Group countries based on service type
          const sortedCountries = {
            all: [],
            attestation: [],
            apostille: [],
          };
          
          // First collect all countries with data and their service types
          const countryServiceTypes = {};
          
          countriesWithData.forEach(country => {
            const countryId = country.id;
            const serviceType = country.serviceType || 'attestation';
            
            if (!countryServiceTypes[countryId]) {
              countryServiceTypes[countryId] = [serviceType];
            } else if (!countryServiceTypes[countryId].includes(serviceType)) {
              countryServiceTypes[countryId].push(serviceType);
            }
          });
          
          // Categorize countries based on their service types
          countriesWithData.forEach(country => {
            const countryId = country.id;
            const countryName = country.countryName;
            
            // Add to the 'all' category
            if (!sortedCountries.all.includes(countryName)) {
              sortedCountries.all.push(countryName);
            }
            
            // Add to the specific service type categories
            if (countryServiceTypes[countryId].length > 1) {
              if (!sortedCountries.both.includes(countryName)) {
                sortedCountries.both.push(countryName);
              }
            } else if (countryServiceTypes[countryId][0] === 'attestation') {
              if (!sortedCountries.attestation.includes(countryName)) {
                sortedCountries.attestation.push(countryName);
              }
            } else if (countryServiceTypes[countryId][0] === 'apostille') {
              if (!sortedCountries.apostille.includes(countryName)) {
                sortedCountries.apostille.push(countryName);
              }
            }
          });
          
          // Sort each category alphabetically
          Object.keys(sortedCountries).forEach(key => {
            sortedCountries[key].sort();
          });
          
          setGroupedCountries(sortedCountries);
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
                
                // Find the service type(s) for this country
                const countryData = countriesData.filter(dataCountry => dataCountry.id === countryId);
                const serviceTypes = [...new Set(countryData.map(item => item.serviceType || 'attestation'))];
                
                
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