// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ksufpwnivkcldrvhwbyo.supabase.co'; // Replace with your Supabase API URL
const supabaseKey = 'your-anon-keyeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdWZwd25pdmtjbGRydmh3YnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5OTM4NzEsImV4cCI6MjA0NTU2OTg3MX0.bIpKrLLC7BuQMGIETIjJBP_h4hc7KFd5lDt_6VwvNuA'; // Replace with your Supabase anon public key

export const supabase = createClient(supabaseUrl, supabaseKey);
