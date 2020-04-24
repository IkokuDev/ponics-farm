import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'Shoes',
                  imageUrl:  'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 2,
                  linkUrl: 'shoes'
                },
                {
                  title: 'Tops',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 3,
                  linkUrl: 'tops'
                },
                {
                  title: 'Bottoms',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'bottoms'
                },
                {
                  title: 'Accessories',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 5,
                  size: 'large',
                  linkUrl: 'accessories'
                },
                {
                  title: 'Underwear',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 6,
                  size: 'large',
                  linkUrl: 'underwear'
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