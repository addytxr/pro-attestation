import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'public', 'data', 'countries.json');
    let countries = [];
    
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      countries = JSON.parse(data);
    }
    
    return NextResponse.json({ 
      success: true, 
      countries: countries
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch countries', countries: [] },
      { status: 500 }
    );
  }
} 