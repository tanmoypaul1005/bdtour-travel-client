import React from 'react';
import { borabora1, borabora2, keywest, maldives1, maldives2, maldives3 } from '../../Utility/Source';
import Selection from './Selection';

const Selections = () => {
    
    return (
        <div>
            <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
                <Selection figure={borabora1} caption='Bora Bora' />
                <Selection figure={borabora2} caption='Cozumel' />
                <Selection figure={maldives1} caption='Maldives' />
                <Selection figure={maldives2} caption='Jamaica' />
                <Selection figure={maldives3} caption='Antigua' />
                <Selection figure={keywest} caption='Key West' />
            </section>
        </div>
    );
};

export default Selections;