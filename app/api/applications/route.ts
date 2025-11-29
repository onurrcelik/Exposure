import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;

// Server-side client with secret key - bypasses RLS
const supabase = createClient(supabaseUrl, supabaseSecretKey);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string;
    const location = formData.get('location') as string;
    const motivation = formData.get('motivation') as string;
    const referral = formData.get('referral') as string;
    const cv = formData.get('cv') as File;

    let cvUrl = null;

    // Upload CV to Supabase Storage if provided
    if (cv && cv.size > 0) {
      const fileName = `${Date.now()}-${cv.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('Resumes')
        .upload(fileName, cv, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        console.error('Error uploading CV:', uploadError);
      } else {
        // Get public URL
        const { data: urlData } = supabase.storage
          .from('Resumes')
          .getPublicUrl(fileName);
        cvUrl = urlData.publicUrl;
      }
    }

    // Insert application into database
    const { data, error } = await supabase
      .from('applications')
      .insert([
        {
          name,
          email,
          phone,
          linkedin,
          location,
          motivation,
          referral,
          cv_url: cvUrl,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error inserting application:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Application submitted successfully', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
