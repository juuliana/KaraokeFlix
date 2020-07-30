import React from 'react';
import PageDefault from '../PageDefault';
import BannerMain from '../BannerMain';

export default function Karoake(){
    return(
        <PageDefault>
            <BannerMain videoTitle="Chame os amigos e venha se divertir!"
                videoDescription="Bora cantar"
                url="https://www.youtube.com/watch?v=7sbbb7Dt3D8"
            />
       </PageDefault>
    );
}