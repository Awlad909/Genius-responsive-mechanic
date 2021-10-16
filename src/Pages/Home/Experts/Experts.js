import React from 'react';
import Expert from '../Expert/Expert';


import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import mechanic6 from '../../../images/mechanic/mechanic-6.png';

const experts = [
    {
        img: mechanic1,
        name:'doyen Smith',
        expertize:'-Engine Expert-'
    },
    {
        img: mechanic2,
        name:'Moody',
        expertize:'-Honda Expert-'
    },
    {
        img: mechanic3,
        name:'Andrew Smith',
        expertize:'-Engine Expert-'
    },
    {
        img: mechanic4,
        name:'Andrew tie',
        expertize:'-tire Expert-'
    },
    {
        img: mechanic5,
        name:'Cory Smith',
        expertize:'-Engine Expert-'
    },
    {
        img: mechanic6,
        name:' Smith',
        expertize:'-Polish Expert-'
    },
]

const Experts = () => {
    return (
        <div>
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                   experts.map(expert => <Expert
                   key={expert.name}
                   expert={expert}
                   ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;