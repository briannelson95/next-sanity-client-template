import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon'
import { client } from '@/sanity/lib/client';
import { settingsQuery } from '@/sanity/lib/queries';
import Link from 'next/link'
 
export default async function NotFound() {
    const data = await client.fetch(settingsQuery);
    return (
        <main className='bg-white dark:bg-zinc-900 dark:text-white min-h-screen'>
            <div className='px-16 py-6 space-y-2'>
                <h2 className='text-3xl font-bold'>Page Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className='flex gap-2 items-center hover:underline'>
                    <ChevronLeftIcon />
                    Return Home
                </Link>
            </div>
        </main>
    )
}