import { use } from 'react';
import ModelsCard from './ModelCard';

const Models = ({modelPromise,carts, setCarts}) => {

    const models = use(modelPromise);
    // console.log(models);

    return (
        <div className='py-20 max-w-7xl mx-auto'>
            <div className="text-center py-20 space-y-4">
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
                {models.map(model => 
                    <ModelsCard model={model} key={model.id} carts={carts} setCarts={setCarts} />
                )}
            </div>
        </div>
    );
};

export default Models;