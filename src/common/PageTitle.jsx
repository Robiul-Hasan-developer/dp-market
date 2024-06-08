// import React from 'react';
// import { Helmet } from 'react-helmet';

// const PageTitle = ({ title }) => {
//     return (
//         <>
//             <Helmet>
//                 <title>{title}</title>
//             </Helmet>   
//         </>
//     );
// };

// export default PageTitle;

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </HelmetProvider>
    );
};

export default PageTitle;
