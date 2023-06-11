import React from 'react';
import { Svg, Path } from 'react-native-svg';

export const PlusIcon = ({ style }) => (
  <Svg viewBox="0 0 32 32" style={style}>
    <Path
      d="M17.143 1.143h-2.286v13.714h-13.714v2.286h13.714v13.714h2.286v-13.714h13.714v-2.286h-13.714v-13.714z"
      // fill="#FF6C00"
    />
  </Svg>
);
export const User = ({ style })  => (
  <Svg viewBox="0 0 32 32" style={style}>
    <Path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M22.4 23.2v-1.6c0-1.767-1.433-3.2-3.2-3.2h-6.4c-1.767 0-3.2 1.433-3.2 3.2v1.6"/>
<Path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M16 15.2c1.767 0 3.2-1.433 3.2-3.2s-1.433-3.2-3.2-3.2c-1.767 0-3.2 1.433-3.2 3.2s1.433 3.2 3.2 3.2z"/>
  </Svg>
)
export const Grid = ({ style }) => (
  <Svg id="icon-grid" viewBox="0 0 32 32" style={style}>
    <Path d="M6.4 6.4h19.2v19.2h-19.2v-19.2z"/>
    <Path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M8.8 8.8h5.6v5.6h-5.6v-5.6z"/>
     <Path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M17.6 8.8h5.6v5.6h-5.6v-5.6z"/>
    <Path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M17.6 17.6h5.6v5.6h-5.6v-5.6z"/>
   <Path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M8.8 17.6h5.6v5.6h-5.6v-5.6z"/>
  </Svg>
)

// <path fill="#fff" style="fill: var(--color1, #fff)" d="M6.4 6.4h19.2v19.2h-19.2v-19.2z"></path>
// <path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M8.8 8.8h5.6v5.6h-5.6v-5.6z"></path>
// <path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M17.6 8.8h5.6v5.6h-5.6v-5.6z"></path>
// <path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M17.6 17.6h5.6v5.6h-5.6v-5.6z"></path>
// <path fill="none" stroke="#212121" style="stroke: var(--color2, #212121)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M8.8 17.6h5.6v5.6h-5.6v-5.6z"></path>

{/* <symbol id="icon-user" viewBox="0 0 32 32">
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M22.4 23.2v-1.6c0-1.767-1.433-3.2-3.2-3.2h-6.4c-1.767 0-3.2 1.433-3.2 3.2v1.6"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="0.8" d="M16 15.2c1.767 0 3.2-1.433 3.2-3.2s-1.433-3.2-3.2-3.2c-1.767 0-3.2 1.433-3.2 3.2s1.433 3.2 3.2 3.2z"></path>
</symbol> */}