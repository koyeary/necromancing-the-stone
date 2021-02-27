import React, { Fragment, useState, useEffect } from 'react';
import Player from '../components/player/Player';
import EpisodeNav from '../components/navs/EpisodeNav';

const Home = () => {
   return (
    <Fragment>
        <Player/>
        <EpisodeNav/>
    </Fragment>
    )
};

export default Home;