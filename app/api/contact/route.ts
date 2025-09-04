import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
  const { name, email, subject, message, phone } = await req.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1'; // Or your specific sheet name

    const newRow = [
      name,
      email,
      phone || '',
      subject,
      message,
      new Date().toISOString(),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [newRow],
      },
    });

    return NextResponse.json({ message: 'Form data saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    return NextResponse.json({ message: 'Error saving form data' }, { status: 500 });
  }
}
