import './globals.css'

//router
import { useRouter } from 'next/router'

// framer motion
import { AnimatePresence, motion } from 'framer-motion'

// components
import RootLayout from './layout'
import Transition from '@/components/Transition/transition'

function MyApp({ Components, pageProps }: any) {
    return (
        <RootLayout>
            <AnimatePresence mode='wait'>
                <motion.div className='h-full'>
                    <Transition />
                    <Components {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </RootLayout>
    )
}

export default MyApp