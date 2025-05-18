"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Country codes mapping
const countriesWithCodes = {
  "Armenia": "AM",
  "Azerbaijan": "AZ",
  "Bahrain": "BH",
  "China": "CN",
  "Georgia": "GE",
  "Hong Kong": "HK",
  "Israel": "IL",
  "Japan": "JP",
  "Kazakhstan": "KZ",
  "Kuwait": "KW",
  "Kyrgyzstan": "KG",
  "Macau": "MO",
  "Mongolia": "MN",
  "Oman": "OM",
  "Philippines": "PH",
  "Qatar": "QA",
  "Russian": "RU",
  "Saudi Arabia": "SA",
  "Singapore": "SG",
  "South Korea": "KR",
  "Tajikistan": "TJ",
  "Turkey": "TR",
  "UAE": "AE",
  "Uzbekistan": "UZ",
  "Albania": "AL",
  "Andorra": "AD",
  "Austria": "AT",
  "Belarus": "BY",
  "Belgium": "BE",
  "Bosnia and Herzegovina": "BA",
  "Bulgaria": "BG",
  "Croatia": "HR",
  "Cyprus": "CY",
  "Czech Republic": "CZ",
  "Denmark": "DK",
  "Estonia": "EE",
  "Finland": "FI",
  "France": "FR",
  "Germany": "DE",
  "Greece": "GR",
  "Hungary": "HU",
  "Iceland": "IS",
  "Ireland": "IE",
  "Italy": "IT",
  "Kosovo": "XK",
  "Latvia": "LV",
  "Liechtenstein": "LI",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Malta": "MT",
  "Moldova, Republic of": "MD",
  "Monaco": "MC",
  "Montenegro": "ME",
  "Netherlands": "NL",
  "North Macedonia, Republic of": "MK",
  "Norway": "NO",
  "Poland": "PL",
  "Portugal": "PT",
  "Romania": "RO",
  "San Marino": "SM",
  "Serbia": "RS",
  "Slovakia": "SK",
  "Slovenia": "SI",
  "Spain": "ES",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Ukraine": "UA",
  "United Kingdom": "GB",
  "Antigua and Barbuda": "AG",
  "Argentina": "AR",
  "Bahamas": "BS",
  "Barbados": "BB",
  "Belize": "BZ",
  "Bolivia": "BO",
  "Brazil": "BR",
  "Chile": "CL",
  "Colombia": "CO",
  "Costa Rica": "CR",
  "Dominica": "DM",
  "Dominican Republic": "DO",
  "Ecuador": "EC",
  "El Salvador": "SV",
  "Grenada": "GD",
  "Guatemala": "GT",
  "Guyana": "GY",
  "Honduras": "HN",
  "Jamaica": "JM",
  "Mexico": "MX",
  "Nicaragua": "NI",
  "Panama": "PA",
  "Paraguay": "PY",
  "Peru": "PE",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  "Suriname": "SR",
  "Trinidad and Tobago": "TT",
  "USA": "US",
  "Uruguay": "UY",
  "Venezuela": "VE",
  "Botswana": "BW",
  "Burundi": "BI",
  "Cape Verde": "CV",
  "Lesotho": "LS",
  "Liberia": "LR",
  "Malawi": "MW",
  "Mauritius": "MU",
  "Morocco": "MA",
  "Namibia": "NA",
  "Sao Tome and Principe": "ST",
  "Seychelles": "SC",
  "South Africa": "ZA",
  "Tunisia": "TN",
  "Australia": "AU",
  "Brunei Darussalam": "BN",
  "Cook Islands": "CK",
  "Fiji": "FJ",
  "Marshall Islands": "MH",
  "New Zealand": "NZ",
  "Niue": "NU",
  "Palau": "PW",
  "Samoa": "WS",
  "Tonga": "TO",
  "Vanuatu": "VU",
  "India": "IN"
};

export default function UploadPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    flag: "",
    countryName: "",
    title: "",
    description: "",
    requirements: "",
    process: "",
    documentsRequired: "",
    commonDocuments: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.authenticated) {
        setIsAuthenticated(true);
        localStorage.setItem("adminAuth", "true");
      } else {
        setMessage("Invalid password. Please try again.");
      }
    } catch (error) {
      setMessage(`Authentication error: ${error.message}`);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update the form data
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      
      // Auto-set the flag (country code) based on country name
      if (name === 'countryName' && countriesWithCodes[value]) {
        updatedData.flag = countriesWithCodes[value].toLowerCase();
      }
      
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/upload-country", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Country data uploaded successfully!");
        // Clear form
        setFormData({
          flag: "",
          countryName: "",
          title: "",
          description: "",
          requirements: "",
          process: "",
          documentsRequired: "",
          commonDocuments: "",
        });
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Check for existing auth on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth") === "true";
    setIsAuthenticated(isAuth);
  }, []);

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <div className="container  mx-auto px-4 py-24 mt-10 flex justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center">Admin Login</h1>
          
          {message && (
            <div className="p-4 mb-6 rounded-md bg-red-100 text-red-700">
              {message}
            </div>
          )}
          
          <form onSubmit={handleAuth}>
            <div className="mb-4">
              <label htmlFor="password" className="block  mb-2 font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border text-gray-800 placeholder:text-gray-400 text-gray-800 border-gray-300 rounded-md"
                placeholder="Enter admin password"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-[#FF6A00] text-white py-3 px-6 rounded-md hover:bg-[#E63C00] transition-colors disabled:bg-gray-400"
            >
              {authLoading ? "Authenticating..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Show upload form if authenticated
  return (
    <div className="container mx-auto px-4 py-24 mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-gray-800 font-bold">Upload Country Attestation Data</h1>
        <button
          onClick={() => {
            localStorage.removeItem("adminAuth");
            setIsAuthenticated(false);
          }}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Logout
        </button>
      </div>

      {message && (
        <div className={`p-4 mb-6 rounded-md ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="flag" className="block mb-2 font-medium text-gray-800">
              Country Code
            </label>
            <input
              type="text"
              id="flag"
              name="flag"
              value={formData.flag}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="ae"
              readOnly
            />
            <small className="text-gray-600">Auto-set based on Country Name - {formData.flag ? (
              <img 
                src={`https://flagcdn.com/${formData.flag}.svg`} 
                alt={formData.countryName} 
                className="inline-block w-6 h-4 ml-1" 
              />
            ) : null}</small>
          </div>
          <div>
            <label htmlFor="countryName" className="block mb-2 font-medium text-gray-800">
              Country Name
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="countryName"
                name="countryName"
                value={formData.countryName}
                onChange={handleChange}
                className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
                placeholder="UAE"
                list="country-suggestions"
                required
              />
              {formData.flag && (
                <div className="ml-3">
                  <img 
                    src={`https://flagcdn.com/${formData.flag}.svg`} 
                    alt={formData.countryName} 
                    className="w-10 h-7 border border-gray-200 shadow-sm" 
                  />
                </div>
              )}
            </div>
            <datalist id="country-suggestions">
              {Object.keys(countriesWithCodes).map((country) => (
                <option key={country} value={country} />
              ))}
            </datalist>
            <small className="text-gray-600">Start typing to see available countries</small>
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block mb-2 font-medium text-gray-800">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder="UAE Attestation Services in Delhi NCR"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-medium text-gray-800">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder="What is UAE Attestation? UAE Attestation is a mandatory process..."
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="requirements" className="block mb-2 font-medium text-gray-800">
            Why is Attestation Required? (One item per line)
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder="For employment visa in UAE
For higher education or student visa in UAE
To sponsor family or spouse
For business or company formation in UAE
For resident visa or PR"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="process" className="block mb-2 font-medium text-gray-800">
            Attestation Process (One step per line)
          </label>
          <textarea
            id="process"
            name="process"
            value={formData.process}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder="Notary Attestation (Local notary verification)
HRD/Home Department or SDM Attestation
MEA Attestation
UAE Embassy Attestation (India)
MOFA Attestation (UAE – completed after document reaches UAE)"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="documentsRequired" className="block mb-2 font-medium text-gray-800">
            Documents Required (One item per line)
          </label>
          <textarea
            id="documentsRequired"
            name="documentsRequired"
            value={formData.documentsRequired}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder="Original Document (Degree/Birth/Marriage/etc.)
Passport Copy (Front and Back)
Authorization Letter (if using an agent)"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="commonDocuments" className="block mb-2 font-medium text-gray-800">
            Most Common Documents (One item per line)
          </label>
          <textarea
            id="commonDocuments"
            name="commonDocuments"
            value={formData.commonDocuments}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder="Degree Certificate
            Birth Certificate
            Marriage Certificate
            Police Clearance Certificate (PCC)
            Medical Certificate"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FF6A00] text-white py-3 px-6 rounded-md hover:bg-[#E63C00] transition-colors disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload Country Data"}
        </button>
      </form>
    </div>
  );
} 