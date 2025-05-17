import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    
    // Format the data
    const formattedData = {
      id: body.countryName.toLowerCase().replace(/\s+/g, '-'),
      flag: body.flag,
      countryName: body.countryName,
      title: body.title,
      description: body.description,
      requirements: body.requirements.split('\n').filter(Boolean).map(item => item.trim()),
      process: body.process.split('\n').filter(Boolean).map(item => item.trim()),
      documentsRequired: body.documentsRequired.split('\n').filter(Boolean).map(item => item.trim()),
      commonDocuments: body.commonDocuments.split('\n').filter(Boolean).map(item => item.trim()),
      updatedAt: new Date().toISOString()
    };

    // Create the data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Create or update countries.json
    const countriesPath = path.join(dataDir, 'countries.json');
    let countries = [];
    
    if (fs.existsSync(countriesPath)) {
      const data = fs.readFileSync(countriesPath, 'utf8');
      countries = JSON.parse(data);
      
      // Check if country already exists, update it
      const existingIndex = countries.findIndex(country => country.id === formattedData.id);
      if (existingIndex !== -1) {
        countries[existingIndex] = formattedData;
      } else {
        countries.push(formattedData);
      }
    } else {
      countries = [formattedData];
    }

    // Write updated countries data
    fs.writeFileSync(countriesPath, JSON.stringify(countries, null, 2));

    // Also save individual country file
    fs.writeFileSync(
      path.join(dataDir, `${formattedData.id}.json`),
      JSON.stringify(formattedData, null, 2)
    );

    return NextResponse.json({ 
      success: true, 
      message: `${body.countryName} data saved successfully` 
    });
  } catch (error) {
    console.error('Error saving country data:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to save country data' },
      { status: 500 }
    );
  }
} 