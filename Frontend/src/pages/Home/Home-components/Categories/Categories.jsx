import React from 'react'
import './Categories.css'

const Categories = ({ categories }) => {
    return (
        <div className='categories'>
            <div className="catogories-container">

                {categories.map((category, index) => (
                    <div key={index} className="category-container">
                        {category.icon}
                        <p className="">{category.name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Categories