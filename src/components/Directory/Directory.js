import React from 'react';
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem'

export default class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: "ANKARA STYLES",
                    imageUrl: "https://i.ibb.co/dKQYBbP/anakara.jpg",
                    id: 1
                },

                {
                    title: "VINTAGE",
                    imageUrl: "https://i.ibb.co/Gtk88R3/Vintage.jpg",
                    id: 2
                },

                {
                    title: "WRAP GOWNS",
                    imageUrl: "https://i.ibb.co/wCRHKyT/Wrapd.png",
                    id: 3
                },

                {
                    title: "TYE DYE",
                    imageUrl: "https://i.ibb.co/q0Zx3H7/anki.gif" ,
                    size: 'large',
                    id: 4
                },

                {
                    title: "ANKARA TOPS",
                    imageUrl:"https://i.ibb.co/jDyYxb9/Topsng.png",
                    size: 'large',
                    id: 5
                },
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }

            </div>
        )
    }
}