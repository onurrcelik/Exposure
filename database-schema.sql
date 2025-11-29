-- Create the applications table
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  linkedin TEXT NOT NULL,
  location TEXT NOT NULL,
  motivation TEXT NOT NULL,
  referral TEXT,
  cv_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Drop old policies if they exist
DROP POLICY IF EXISTS "Allow service role to insert applications" ON applications;
DROP POLICY IF EXISTS "Allow service role to read applications" ON applications;
DROP POLICY IF EXISTS "Allow service role to update applications" ON applications;

-- Allow anon role to insert applications (for API submissions)
CREATE POLICY "Allow anon to insert applications"
ON applications
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated users to read applications
CREATE POLICY "Allow authenticated to read applications"
ON applications
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update applications
CREATE POLICY "Allow authenticated to update applications"
ON applications
FOR UPDATE
TO authenticated
USING (true);
