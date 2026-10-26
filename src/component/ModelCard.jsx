import { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model,carts, setCarts}) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(true);

        const isFound = carts.find(cart => cart.id === model.id);
        if(isFound){
            toast.error(`You have already subscribed to ${model.title}!`);
            return;
        }

        setCarts([...carts, model]);
        toast.success(`You have subscribed to ${model.title} successfully!`);
    }

    return (
        <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300 ' key={model.id}>

            <div className='flex justify-center items-center h-56 bg-zinc-200'>
                <img className='h-40 w-40' src={model.image} alt="" />
            </div>

            <div className='p-5 space-y-3'>
                <h2 className='text-2xl font-bold'>{model.title}</h2>
                <p>{model.description}</p>
                <div><span  className='text-2xl font-bold'>${model.price}</span>/month</div>
                <button onClick={handleSubscribe} className='btn w-full bg-red-500 text-white font-bold rounded-lg text-lg'>{isSubscribed ? 'Subscribed' : 'Subscribe Now'}</button>
            </div>
        </div>
    );
};

export default ModelCard;