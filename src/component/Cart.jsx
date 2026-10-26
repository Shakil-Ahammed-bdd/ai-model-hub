
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
    // console.log(carts);
    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);
    // console.log(totalPrice);
    const handlePayment = () => {
        setCarts([]);
        toast.success('Payment successful!');
    }

    const handleDelete = (item) => {
        const updatedCarts = carts.filter(cart => cart.id !== item.id)
        // console.log(updatedCarts);
        setCarts(updatedCarts);
        toast.success(`You have removed ${item.title} from your cart successfully!`);
    }

    return (
        <div className="py-20 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Your Cart</h1>
            {
                carts.length === 0 ? <p className="text-lg mt-5 font-bold text-center">Your cart is empty !</p> : 
                <>
                    <div className='space-y-5 mt-10'>
                 {carts.map(cart => <div className="flex items-center justify-between border rounded-lg p-5" key={cart.id}>
                    <div>
                        <img className="h-20 w-20" src={cart.image} alt="" />
                    </div>
                    <div className="flex-1 px-5 space-y-2">
                        <div>
                            <h2 className="text-2xl font-bold">{cart.title}</h2>
                        </div>
                        <div>
                            <p>{cart.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-3xl font-bold">${cart.price}</span>
                            <p>per month</p>
                        </div>
                        <span onClick={() => handleDelete(cart)} className="text-4xl font-bold text-red-700 btn rounded-full p-4">X</span>
                    </div>
                </div>)}
            <div className="flex items-center justify-between border rounded-lg p-5 text-white bg-black font-bold text-4xl">
                <h2>Total</h2>
                <h2 className="text-red-700"><span> $ </span>{totalPrice}</h2>
            </div>
            </div>
            <div className="flex justify-center mt-10 border rounded-lg p-5 bg-red-700 text-white font-bold text-4xl">
                <h2 onClick={handlePayment}>Proceed to Checkout</h2>
            </div>
                </>
            }
        </div>
    );
};

export default Cart;