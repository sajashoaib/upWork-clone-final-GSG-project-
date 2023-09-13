import Image from 'next/image'
import styles from './page.module.css'
import Typography from '@/components/atoms/Typography'
import NavBar from '@/components/molecules/NavBar'

export default function Home() {

  return (
    <main className={styles.main}>
<NavBar/>
<Typography as='h1'>hii</Typography>
<Typography as='h2'>hiii</Typography>
<Typography as='h3'>hiii</Typography>
<Typography as='h4'>hiii</Typography>
<Typography as='h5'>hiii</Typography>
<Typography as='h6'>hiii</Typography>
<Typography as='p'>hiii</Typography>




    </main>
  )
}
