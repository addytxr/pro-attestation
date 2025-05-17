'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// Country flags mapping
const countryFlags = {
  "Afghanistan": "🇦🇫", "Albania": "🇦🇱", "Algeria": "🇩🇿", "Andorra": "🇦🇩", "Angola": "🇦🇴", 
  "Antigua and Barbuda": "🇦🇬", "Argentina": "🇦🇷", "Armenia": "🇦🇲", "Australia": "🇦🇺", 
  "Austria": "🇦🇹", "Azerbaijan": "🇦🇿", "Bahamas": "🇧🇸", "Bahrain": "🇧🇭", "Bangladesh": "🇧🇩", 
  "Barbados": "🇧🇧", "Belarus": "🇧🇾", "Belgium": "🇧🇪", "Belize": "🇧🇿", "Benin": "🇧🇯", 
  "Bhutan": "🇧🇹", "Bolivia": "🇧🇴", "Bosnia and Herzegovina": "🇧🇦", "Botswana": "🇧🇼", 
  "Brazil": "🇧🇷", "Brunei Darussalam": "🇧🇳", "Bulgaria": "🇧🇬", "Burkina Faso": "🇧🇫", 
  "Burundi": "🇧🇮", "Cambodia": "🇰🇭", "Cameroon": "🇨🇲", "Canada": "🇨🇦", "Cape Verde": "🇨🇻", 
  "Central African Republic": "🇨🇫", "Chad": "🇹🇩", "Chile": "🇨🇱", "China": "🇨🇳", 
  "Colombia": "🇨🇴", "Comoros": "🇰🇲", "Congo": "🇨🇬", "Cook Islands": "🇨🇰", "Costa Rica": "🇨🇷", 
  "Croatia": "🇭🇷", "Cuba": "🇨🇺", "Cyprus": "🇨🇾", "Czech Republic": "🇨🇿", "Denmark": "🇩🇰", 
  "Djibouti": "🇩🇯", "Dominica": "🇩🇲", "Dominican Republic": "🇩🇴", "Ecuador": "🇪🇨", 
  "Egypt": "🇪🇬", "El Salvador": "🇸🇻", "Equatorial Guinea": "🇬🇶", "Eritrea": "🇪🇷", 
  "Estonia": "🇪🇪", "Ethiopia": "🇪🇹", "Fiji": "🇫🇯", "Finland": "🇫🇮", "France": "🇫🇷", 
  "Gabon": "🇬🇦", "Gambia": "🇬🇲", "Georgia": "🇬🇪", "Germany": "🇩🇪", "Ghana": "🇬🇭", 
  "Greece": "🇬🇷", "Grenada": "🇬🇩", "Guatemala": "🇬🇹", "Guinea": "🇬🇳", "Guinea-Bissau": "🇬🇼", 
  "Guyana": "🇬🇾", "Haiti": "🇭🇹", "Honduras": "🇭🇳", "Hong Kong": "🇭🇰", "Hungary": "🇭🇺", 
  "Iceland": "🇮🇸", "India": "🇮🇳", "Indonesia": "🇮🇩", "Iran": "🇮🇷", "Iraq": "🇮🇶", 
  "Ireland": "🇮🇪", "Israel": "🇮🇱", "Italy": "🇮🇹", "Jamaica": "🇯🇲", "Japan": "🇯🇵", 
  "Jordan": "🇯🇴", "Kazakhstan": "🇰🇿", "Kenya": "🇰🇪", "Kiribati": "🇰🇮", "Korea, North": "🇰🇵", 
  "Korea, South": "🇰🇷", "South Korea": "🇰🇷", "Kuwait": "🇰🇼", "Kyrgyzstan": "🇰🇬", "Laos": "🇱🇦", 
  "Latvia": "🇱🇻", "Lebanon": "🇱🇧", "Lesotho": "🇱🇸", "Liberia": "🇱🇷", "Libya": "🇱🇾", 
  "Liechtenstein": "🇱🇮", "Lithuania": "🇱🇹", "Luxembourg": "🇱🇺", "Macau": "🇲🇴", 
  "Macedonia": "🇲🇰", "North Macedonia, Republic of": "🇲🇰", "Madagascar": "🇲🇬", "Malawi": "🇲🇼", 
  "Malaysia": "🇲🇾", "Maldives": "🇲🇻", "Mali": "🇲🇱", "Malta": "🇲🇹", "Marshall Islands": "🇲🇭", 
  "Mauritania": "🇲🇷", "Mauritius": "🇲🇺", "Mexico": "🇲🇽", "Micronesia": "🇫🇲", 
  "Moldova, Republic of": "🇲🇩", "Monaco": "🇲🇨", "Mongolia": "🇲🇳", "Montenegro": "🇲🇪", 
  "Morocco": "🇲🇦", "Mozambique": "🇲🇿", "Myanmar": "🇲🇲", "Namibia": "🇳🇦", "Nauru": "🇳🇷", 
  "Nepal": "🇳🇵", "Netherlands": "🇳🇱", "New Zealand": "🇳🇿", "Nicaragua": "🇳🇮", 
  "Niger": "🇳🇪", "Nigeria": "🇳🇬", "Niue": "🇳🇺", "Norway": "🇳🇴", "Oman": "🇴🇲", 
  "Pakistan": "🇵🇰", "Palau": "🇵🇼", "Palestine": "🇵🇸", "Panama": "🇵🇦", "Papua New Guinea": "🇵🇬", 
  "Paraguay": "🇵🇾", "Peru": "🇵🇪", "Philippines": "🇵🇭", "Poland": "🇵🇱", "Portugal": "🇵🇹", 
  "Qatar": "🇶🇦", "Romania": "🇷🇴", "Russia": "🇷🇺", "Russian": "🇷🇺", "Rwanda": "🇷🇼", 
  "Saint Kitts and Nevis": "🇰🇳", "Saint Lucia": "🇱🇨", "Saint Vincent and the Grenadines": "🇻🇨", 
  "Samoa": "🇼🇸", "San Marino": "🇸🇲", "Sao Tome and Principe": "🇸🇹", "Saudi Arabia": "🇸🇦", 
  "Senegal": "🇸🇳", "Serbia": "🇷🇸", "Seychelles": "🇸🇨", "Sierra Leone": "🇸🇱", 
  "Singapore": "🇸🇬", "Slovakia": "🇸🇰", "Slovenia": "🇸🇮", "Solomon Islands": "🇸🇧", 
  "Somalia": "🇸🇴", "South Africa": "🇿🇦", "Spain": "🇪🇸", "Sri Lanka": "🇱🇰", "Sudan": "🇸🇩", 
  "Suriname": "🇸🇷", "Swaziland": "🇸🇿", "Sweden": "🇸🇪", "Switzerland": "🇨🇭", "Syria": "🇸🇾", 
  "Taiwan": "🇹🇼", "Tajikistan": "🇹🇯", "Tanzania": "🇹🇿", "Thailand": "🇹🇭", "Timor-Leste": "🇹🇱", 
  "Togo": "🇹🇬", "Tonga": "🇹🇴", "Trinidad and Tobago": "🇹🇹", "Tunisia": "🇹🇳", "Turkey": "🇹🇷", 
  "Turkmenistan": "🇹🇲", "Tuvalu": "🇹🇻", "Uganda": "🇺🇬", "Ukraine": "🇺🇦", "UAE": "🇦🇪", 
  "United Kingdom": "🇬🇧", "USA": "🇺🇸", "United States": "🇺🇸", "Uruguay": "🇺🇾", 
  "Uzbekistan": "🇺🇿", "Vanuatu": "🇻🇺", "Vatican City": "🇻🇦", "Venezuela": "🇻🇪", 
  "Vietnam": "🇻🇳", "Yemen": "🇾🇪", "Zambia": "🇿🇲", "Zimbabwe": "🇿🇼"
};

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
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState('Asia');
  const [searchTerm, setSearchTerm] = useState('');
  const [countriesWithData, setCountriesWithData] = useState([]);

  // Get all countries for search
  const allCountries = Object.values(countries).flat();

  // Fetch countries with data
  useEffect(() => {
    const fetchCountriesWithData = async () => {
      try {
        const response = await fetch('/api/get-countries');
        if (response.ok) {
          const data = await response.json();
          setCountriesWithData(data.countries || []);
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
    const hasData = countriesWithData.some(dataCountry => dataCountry.id === countryId);
    
    if (hasData) {
      router.push(`/countries/${countryId}`);
    }
  };

  // Filter countries based on search term
  const getFilteredCountries = () => {
    if (!searchTerm) {
      // If no search term, show selected region's countries
      return {
        [selectedRegion]: countries[selectedRegion]
      };
    }

    // If there's a search term, search across all countries and group by region
    const filteredBySearch = {};
    Object.entries(countries).forEach(([region, countryList]) => {
      const filtered = countryList.filter(country =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        filteredBySearch[region] = filtered;
      }
    });
    return filteredBySearch;
  };

  const filteredCountries = getFilteredCountries();

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
                  onClick={() => {
                    setSelectedRegion(region);
                    setSearchTerm(''); // Clear search when changing region
                  }}
                  className={`px-6 py-3 rounded-lg transition-all shadow-sm ${
                    selectedRegion === region && !searchTerm
                      ? 'bg-[#FF6A00] text-white shadow-md'
                      : 'bg-white text-black hover:bg-gray-50'
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
          {Object.entries(filteredCountries).map(([region, countryList]) => (
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
                {countryList.map((country, index) => {
                  const countryId = country.toLowerCase().replace(/\s+/g, '-');
                  const hasData = countriesWithData.some(dataCountry => dataCountry.id === countryId);
                  const flag = countryFlags[country] || '🌐'; // Use globe emoji as fallback
                  
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
                      <h3 className="text-lg font-medium text-[#222222]">
                        <span className="mr-2 text-xl">{flag}</span>
                        {country}
                      </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;