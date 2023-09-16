import perfumeMobile from '../assets/images/image-product-mobile.jpg'
import cart from '../assets/images/icon-cart.svg'

function PriceCard() {
    return (
        <>
            <section className='bg-cream '>
                <div>
                    <div>
                        <img src={perfumeMobile} alt="Perfume Image" />
                    </div>
                    <div className='px-6 flex flex-col'>
                        <span className='uppercase tracking-widest'>perfume</span>
                        <h2 className='text-3xl'>Gabrielle Essence Eau De Parfum</h2>
                        <p className='text-sm text-gray'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                        <div className='flex'>
                            <span className='text-green'>£149.00</span>
                            <span className='line-through'>£169.00</span>
                        </div>
                        <button className='bg-green rounded-md w-80 flex items-center justify-center gap-3 px-4 py-4'><img src={cart} alt="" className='flex'/>Add to Cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PriceCard
