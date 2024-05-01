import React from 'react';
import StatementTable from './StatementTable';
import StatementCards from './StatementCards';

const Statement = () => {
    return (
        <div className="row gy-4">
            <StatementCards/>

            <div className="col-12">
                <StatementTable/>
            </div>
        </div>
    );
};

export default Statement;