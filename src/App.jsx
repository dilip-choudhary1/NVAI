import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden" >
    <div className={`${styles.paddingX} ${styles.flexCenter}`} style={{ backgroundColor: '#000000', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart}`} style={{ background: 'linear-gradient(to bottom, #F2F2F2, #A1A1A1)' }}>
      <div className={`${styles.boxWidth}`} >
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} style={{ background: 'linear-gradient(to bottom, #F2F2F2,#A1A1A1)' }}>
      <div className={`${styles.boxWidth}`}>
          <Business />
        </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} style={{ background: 'linear-gradient(to bottom, #F2F2F2, #A1A1A1)' }}>
      <div className={`${styles.boxWidth}`}>
      <Billing />
        </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} style={{ background: 'linear-gradient(to bottom, #F2F2F2, #A1A1A1)' }}>
      <div className={`${styles.boxWidth}`}>
        {/* <CardDeal /> */}
        </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} style={{ background: 'linear-gradient(to bottom, #F2F2F2, #A1A1A1)' }}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
        </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} style={{ background: 'linear-gradient(to bottom, #F2F2F2, #A1A1A1)' }}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
        <CTA />
        </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} style={{ backgroundColor: '#000000' }}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
    

  </div>
);

export default App;
