import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller }  from 'react-scroll';
const SideDrawer = (props) => {

     const scrollTo = (element) => {
          scroller.scrollTo(element,{
               duration: 1500,
               delay: 100,
               smooth: true,
               offset: -150
          });
     props.onClose(false)

     }
    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false) }
        >
           <List component="nav">
               <ListItem button onClick={() => scrollTo('featured')}>
                    event starts in
               </ListItem>
               <ListItem button onClick={() => scrollTo('venueInfo')}>
                    Venue NFO
               </ListItem>
               <ListItem button onClick={() => scrollTo('highlight')}>
                    Highlights
               </ListItem>
               <ListItem button onClick={() => scrollTo('pricing')}>
                    pricing
               </ListItem>
               <ListItem button onClick={() => scrollTo('location')}>
                    location
               </ListItem>
           </List>
        </Drawer>
    );
};

export default SideDrawer;