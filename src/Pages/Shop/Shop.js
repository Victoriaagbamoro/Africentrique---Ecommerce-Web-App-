import React from 'react';

import SHOP_COLLECTION from './Shop.Collection'

import PreviewCollection from '../../components/Preview-collection/PreviewCollection'

class Shop extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            collections: SHOP_COLLECTION 
                
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="Shop">
                {
                    collections.map(({id, ...OtherCollectionProps}) =>(
                        <PreviewCollection key={id} {...OtherCollectionProps}/>
                    ))
                }

            </div>
        )
    }
}

export default Shop