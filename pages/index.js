import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../react_components/navbar.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavigationBar className={styles.navbar}></NavigationBar>
      
      
      <main className={styles.main}>


        <h4 className={styles.title}>
          Welcome to <a style={{color: '#f38200'}}>GradeBuilder</a>
        </h4>

        <div className={styles.grid}>
          
          <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, subject)}>
            <h2>Chemistry &rarr;
            <span className={styles.miniLogo}>
                <img src="/chemistry2.jpg"  width={120} height={60} />
              </span>
            </h2>
          </a>

          <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, subject)}>
            <h2>Physics &rarr;
            <span className={styles.miniLogo}>
              <img src="/physics.jpg" alt="Vercel Logo" width={100} height={50} />
            </span>
            </h2>
          </a>

          <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, subject)}>
            <h2>Maths &rarr;
              <span className={styles.miniLogo}>
                <img src="/maths4.jpg"  width={100} height={60} />
              </span>
            </h2>
          </a>

          <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, subject)}>
            <h2>Economics &rarr;
              <span className={styles.miniLogo}>
                <img src="/economics.jpg" alt="Vercel Logo" width={100} height={50} />
              </span>
            </h2>
          </a>
        </div>

        <p className={styles.description}>
          We know how difficult and expensive it is for students who are studying for their <a className= {styles.link} href='https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-levels/'>
          CAIE A level examinations.</a>
          Therefore, we have brought to you a platform where you can practice questions and keep track of past papers. 
          Please make note that the website is still in the testing stage and has some bugs that are being worked out posthaste. 
          Moreover, new, exciting features shall be added based on user reviews and recommendations.
        </p>
      </main>

      <footer className={styles.footer}>        
        <a className= {styles.link} href="mailto: gradebuilder1@gmail.com">  Contact Us  </a>
      </footer>
    </div>
  )
}
