
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fsklwmgyktqjiqbqkcgm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza2x3bWd5a3RxamlxYnFrY2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMjU2NTUsImV4cCI6MjAyMDgwMTY1NX0.4ekZLa7NMTicuSEK8w9SQ5o0FZuYiIsk-GOsrJ4If8Q'
export const supabase = createClient(supabaseUrl, supabaseKey)