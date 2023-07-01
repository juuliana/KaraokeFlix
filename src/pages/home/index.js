/* eslint-disable no-console */
import React from "react";

import Carousel from "../../components/Carousel";
import { data } from "../../repositories/data";
import BannerMain from "../../components/BannerMain";
import PageDefault from "../../components/PageDefault";

function Home() {
  return (
    <PageDefault paddingAll={0}>
      {data.length === 0 && (
        <div class="loading">
          {/* Loading... */}
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
        </div>
      )}

      {data.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={data[0].videos[0].titulo}
                url={data[0].videos[0].url}
                videoDescription={data[0].videos[0].description}
              />
              <Carousel ignoreFirstVideo category={data[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
