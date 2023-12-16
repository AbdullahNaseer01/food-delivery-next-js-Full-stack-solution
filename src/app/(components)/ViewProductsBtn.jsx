import React from 'react';
import Image from 'next/image';

const ViewProductsBtn = () => {
    return (
        <div className="text-center">
            <button className="inline-flex items-center justify-center gap-3 h-[60px] bg-orange-400 px-4 py-2 rounded-full">
                <div className="text-white text-lg font-medium">See More Product</div>
                <Image
                    className='mr-[-20px]'
                    src="/orangearrowBtn.svg"
                    width={70}
                    height={70}
                    alt="Picture of the author"
                />
            </button>
        </div>
    );
};

export default ViewProductsBtn;
