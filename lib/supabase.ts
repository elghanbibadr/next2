
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://niybaycgkllaekcjjkfc.supabase.co'
const supabaseKey:any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



console.log("supabase", supabase)