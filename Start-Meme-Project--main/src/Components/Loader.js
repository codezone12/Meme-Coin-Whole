import React from 'react';
import { Vortex } from 'react-loader-spinner';

const Loader = () => (
    <div className="loader-overlay absolute inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
        <div className="loader">
            <Vortex
                visible={true}
                height={80}
                width={80}
                ariaLabel="vortex-loading"
                wrapperStyle={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}
                wrapperClassName="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    </div>
);

export default Loader;
