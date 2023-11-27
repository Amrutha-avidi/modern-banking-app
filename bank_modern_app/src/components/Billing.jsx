import styles, { layout } from '../style'
import { apple, bill, google } from '../assets'

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%]
        h-[50%] rounded-full bottom-0 white__gradient' />

      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%]
        h-[50%] rounded-full pink__gradient' />


    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your 
        <br className='sm:block hidden' />
      billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt='google_play'
        className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />
         <img src={apple} alt='apple-store'
        className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />

      </div>

    </div>
  </section>
)


export default Billing