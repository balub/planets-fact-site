import styled from 'styled-components';
import { COLOR_SCHEME, FONT_WEIGHT } from '../../../constants/constants'


export const Container = styled.div`
    /* background: ${props => props.theme.element}; */
    color: white;
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 1em;
    margin: 0 auto; */
 

    a {
        text-decoration: none;
    }

    @media (min-width: 700px) {
        padding: 2em 6em;        
    }

    @media (min-width: 1500px) {
        padding: 2em 10%;        
    }
`

export const List = styled.div`

    display: flex;
    justify-content: flex-end;

    /* font-size: 800; */
/* 
    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

    &:hover {        
        box-shadow: 0px 2px 0px 0px ${props => props.theme.hover};    
    } */
`
export const ListItem = styled.div`
    padding: .5em;
    /* font-size: 800; */

    display: none;
    @media (min-width: 700px) {
        display: block;
    }


/* 


    &:hover {        
        box-shadow: 0px 2px 0px 0px ${props => props.theme.hover};    
    } */
`

export const MenuLogo = styled.img`
    display: block;
    /* adjust the filter to get close to #38384f */
    filter: ${props => props.isMenuOpen ? 'invert(17%) sepia(7%) saturate(3029%) hue-rotate(201deg) brightness(52%) contrast(80%);' : null};
    width: 100%;
    height: auto;

    @media (min-width: 700px) {
        display: none;
    }
`

export const DropDownMenu = styled.div`  
    display: ${props => props.isMenuOpen ? 'block' : 'none'};
    position: absolute;
    width: 90%;
    /* border: 1px magenta solid; */
    left: 5%;
    top: 80px;
`

export const DropDownMenuItem = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${COLOR_SCHEME.PRIMARY};
    padding: 2em;
    border-bottom: 1px solid ${COLOR_SCHEME.SECONDARY};
    /* border: 1px magenta solid; */
    cursor: pointer;

    &:hover {        
        background-color: ${COLOR_SCHEME.SECONDARY};
        border-bottom: 3px solid ${props => 
        props.planet === 'Mercury' ? COLOR_SCHEME.MERCURY_PLANET : 
        props.planet === 'Venus' ? COLOR_SCHEME.VENUS_PLANET :
        props.planet === 'Earth' ? COLOR_SCHEME.EARTH_PLANET :
        props.planet === 'Mars' ? COLOR_SCHEME.MARS_PLANET :
        props.planet === 'Jupiter' ? COLOR_SCHEME.JUPITER_PLANET :
        props.planet === 'Saturn' ? COLOR_SCHEME.SATURN_PLANET :
        props.planet === 'Uranus' ? COLOR_SCHEME.URANUS_PLANET :
            COLOR_SCHEME.NEPTUNE_PLANET};
    } 
`

export const DropDownMenuText = styled.div`
    font-family: 'Spartan', sans-serif;
    font-size: .9375rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    letter-spacing: 1.4px;
    /* border: 1px solid pink; */
    width: 90%;
    align-items: center;
    margin-top: .3em;
`

export const DropDownMenuItemPlanet = styled.span`
    width: 20px;
    height: 20px;
    background: ${props => 
        props.planet === 'Mercury' ? COLOR_SCHEME.MERCURY_PLANET : 
        props.planet === 'Venus' ? COLOR_SCHEME.VENUS_PLANET :
        props.planet === 'Earth' ? COLOR_SCHEME.EARTH_PLANET :
        props.planet === 'Mars' ? COLOR_SCHEME.MARS_PLANET :
        props.planet === 'Jupiter' ? COLOR_SCHEME.JUPITER_PLANET :
        props.planet === 'Saturn' ? COLOR_SCHEME.SATURN_PLANET :
        props.planet === 'Uranus' ? COLOR_SCHEME.URANUS_PLANET :
            COLOR_SCHEME.NEPTUNE_PLANET};
    border-radius: 50%;
    display: inline-block;
    margin-right: 1.5em;
`

export const DropDownMenuItemChevron = styled.img`
    display: inline-block;
    width: auto;
    height: 10px;
`

