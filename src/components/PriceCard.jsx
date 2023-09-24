import perfumeMobile from "../assets/images/image-product-mobile.jpg";
import perfumeDesktop from "../assets/images/image-product-desktop.jpg";
import cart from "../assets/images/icon-cart.svg";

function PriceCard() {
  return (
    <>
      <section>
        <div className="p-5 md:flex md:w-[600px]">
          <div>
            <img
              src={perfumeMobile}
              alt="Perfume Image"
              className="rounded-t-lg h-full md:hidden "
            />
            <img
              src={perfumeDesktop}
              alt="Perfume Image"
              className="hidden md:block md:rounded-l-lg  "
            />
          </div>
          <div className="px-6 flex flex-col bg-white rounded-b-lg gap-3 pt-5 md:rounded-r-lg md:rounded-l-none">
            <span className="uppercase tracking-widest text-gray">perfume</span>
            <h2 className="text-3xl">Gabrielle Essence Eau De Parfum</h2>
            <p className="text-sm text-gray">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex gap-3 items-center">
              <span className="text-green">£149.00</span>
              <span className="line-through text-xs text-gray ">£169.00</span>
            </div>
            <button className="bg-green rounded-md w-auto flex items-center justify-center gap-3 px-4 py-4 my-3 text-white">
              <img src={cart} alt="" className="flex" />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PriceCard;
