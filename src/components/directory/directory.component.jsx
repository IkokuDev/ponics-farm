import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'Oils',
                  imageUrl: 'https://i.ibb.co/qdLFLkG/oil.jpg',
                  id: 1,
                  linkUrl: 'oils'
                },
                {
                  title: 'Spices',
                  imageUrl: 'https://i.ibb.co/y5n0TJQ/spices.jpg',
                  id: 2,
                  linkUrl: 'spices'
                },
                {
                  title: 'Flowers',
                  imageUrl: 'https://i.ibb.co/vmZhjPZ/flowers.jpg',
                  id: 3,
                  linkUrl: 'flowers'
                },
                {
                  title: 'Vegetables',
                  imageUrl: 'https://i.ibb.co/VNzFkp7/vegetable.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'vegetables'
                }
                
              ]
              
        }

    }
    render(){
        return(
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key = {id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export default Directory;