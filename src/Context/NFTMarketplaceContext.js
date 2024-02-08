import React, {useState, useEffect, useContext} from 'react';
import web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Router from 'next/router';

import {NFTMarketplaceAddress, NFTMarketplaceABI} from "./constants";

export const NFTMarketplaceContext = React.createContext();

const NFTMarketplaceProvider = (({children}) => {
    const titleData = ""
    return(
        <NFTMarketplaceContext.Provider value={{}}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})

export default NFTMarketplaceProvider;