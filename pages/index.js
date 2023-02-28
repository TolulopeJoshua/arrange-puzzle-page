import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Arrange Puzzle Game - Jigsaw Puzzle</title>
        <meta name="description" content="Arrange Puzzle is a jigsaw puzzle game where you arrange shuffled image puzzle to score points and earn rewards - unlock new images." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="zLGRHWGUK0rrGgCMmqmcw837GdC5sjpwAgsUSZt71CU" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', zIndex: -1, opacity: 0.3}}>
          <Image src={'/leafgreen.jpg'} width={'1500'} height={530} alt={'leaf green'} />
        </div>
        <header className={styles.header}>
          <h1 style={{fontFamily: 'sans-serif', fontSize: 48}}>Arrange Puzzle</h1>
          <div style={{fontFamily: 'cursive', lineHeight: 2, opacity: 0.7, zIndex: -1}}>
            Arrange Puzzle is a pretty little fun game.
          </div>
          <div style={{paddingLeft: '5%', paddingBottom: 40}}>
            <a href='https://play.google.com/store/apps/details?id=com.tolujosh.puzzle' target={'_blank'}>
              <Image src={'/google-play.png'} width={200} height={75} alt={'google play'} />
            </a>
          </div>
          <button style={{position: 'fixed', top: 20, right: 20, color: 'white', border: '2px solid white', transform: 'skewY(-10deg)', 
            backgroundColor: 'grey', padding: 10, fontSize: 20, fontStyle: 'italic', borderRadius: 50}}>new</button>
          <span style={{position: 'absolute', top: 80, right: '10%'}}>
            <span style={{position: 'absolute', bottom: 45, right: 81, zIndex: -1}}>
              <Image src={'/screenshots/5.png'} width={185} height={365} alt={'arrange puzzle screenshot'} />
            </span>
            <Image src={'/android.png'} width={350} height={450} alt={'play store'} />
          </span>
        </header>
        <section className={styles.section}>
          <div>
              <Image src={'/screenshots/1.png'} width={185} height={365} alt={'arrange puzzle screenshot'} />
          </div>
          <div style={{fontFamily: 'cursive', fontSize: 28, color: 'gray'}}>
            Rearrange the shuffled puzzle <br /> to fit the original image. 
          </div>
        </section>
        <section className={styles.section}> 
          <div style={{fontFamily: 'cursive', fontSize: 28, color: 'gray'}}>
            On completion, you are shown a card <br /> with details of your finished game. 
          </div>
          <div>
              <Image src={'/screenshots/3.png'} width={185} height={365} alt={'arrange puzzle screenshot'} />
          </div>
        </section>
        <section className={styles.section}>
          <div>
              <Image src={'/screenshots/4.png'} width={185} height={365} alt={'arrange puzzle screenshot'} />
          </div>
          <div style={{fontFamily: 'cursive', fontSize: 28, color: 'gray'}}>
            Fulfil the mission for the current <br /> game level to unlock new images. 
          </div>
        </section>
        <section className={styles.section}>
            <a href='https://play.google.com/store/apps/details?id=com.tolujosh.puzzle' target={'_blank'}>
              <Image src={'/google-play.png'} width={400} height={150} style={{maxWidth: '95%'}} alt={'google play'} />
            </a>
        </section>
        <footer className={styles.footer}>
          &copy; GIP Apps
        </footer>
      </main>
    </>
  )
}
