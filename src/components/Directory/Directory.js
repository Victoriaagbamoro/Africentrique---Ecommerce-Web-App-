import React from 'react';
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem'

export default class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: "ANKI STYLES",
                    imageUrl: "https://i.ibb.co/dKQYBbP/anakara.jpg",
                    id: 1,
                    linkUrl: 'ankara'

                },

                {
                    title: "VINTAGE",
                    imageUrl: "https://i.ibb.co/Gtk88R3/Vintage.jpg",
                    id: 2,
                    linkUrl: ''
                },

                {
                    title: "GOWNS",
                    imageUrl: "https://i.ibb.co/wCRHKyT/Wrapd.png",
                    id: 3,
                    linkUrl: ''
                },

                {
                    title: "TYE DYE",
                    imageUrl: "https://i.ibb.co/q0Zx3H7/anki.gif" ,
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },

                {
                    title: "TOPS",
                    imageUrl:"https://i.ibb.co/jDyYxb9/Topsng.png",
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                },
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }

            </div>
        )
    }
}