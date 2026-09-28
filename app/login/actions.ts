'use server';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
export async function login(formData: FormData) {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');
  if (!email || !password || email !== process.env.ADMIN_EMAIL?.trim().toLowerCase()) redirect('/login?error=1');
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect('/login?error=1');
  redirect('/admin');
}
