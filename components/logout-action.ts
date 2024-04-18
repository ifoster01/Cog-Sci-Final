'use server'
import { createClient } from '@/utils/supabase/server';

export default async function Logout() {
    const supabase = createClient();
    await supabase.auth.signOut();
}