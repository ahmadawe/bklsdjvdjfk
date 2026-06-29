import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzoudiuqjljvbldqcnxp.supabase.co'
const supabaseAnonKey = 'sb_publishable_GOqOZESCBuc0zNiIBDs8Ew_FMntGBk-'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
