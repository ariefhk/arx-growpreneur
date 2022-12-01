import React, { useState, useEffect } from "react";
import { Palu } from "../assets";
import { numberWithDot } from "../utils/formatMoney";
import { datas } from "../data/data";

function ProsesLelang() {
  const [jmlKonten, setJmlKonten] = useState(3);
  const [load, setLoad] = useState(true);
  const sliceContent = datas.slice(0, jmlKonten);

  useEffect(() => {
    if (!load) {
      setJmlKonten(jmlKonten + jmlKonten);
    } else {
      setJmlKonten(3);
    }
  }, [load]);

  const loadMore = () => {
    setLoad((state) => !state);
  };

  return (
    <div className="lg:my-6">
      <div className="text-center  pb-2 lg:text-5xl text-2xl lg:leading-snug leading-tight font-[700]">
        <h1>
          Lelang yang sedang <br /> berlangsung
        </h1>
      </div>
      <div className="mx-2 lg:grid lg:grid-cols-3 lg:mx-[132px] lg:gap-y-4">
        {sliceContent &&
          sliceContent.map((barang) => {
            return (
              <div className="lg:max-w-xs max-w-sm bg-white border border-gray-200  shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5">
                {/* Gambar */}
                <a href="/">
                  <div className="mx-4 mt-4">
                    <img src={barang.image} alt="" />
                  </div>
                </a>
                {/* Gambar */}

                {/* Isi */}
                <div className="p-4">
                  {/* lelang */}
                  <div className="flex items-center gap-2">
                    <p
                      className={`p-1 rounded-lg ${
                        barang.isLelang === true
                          ? "bg-[#A6DCC8]"
                          : "bg-[#F9B892]"
                      }`}
                    >
                      {barang.isLelang === true ? "Berlangsung" : "Selesai"}
                    </p>
                    <div
                      className={`flex gap-3 items-center  border  p-1 rounded-lg ${
                        barang.isLelang === true
                          ? "border-[#A6DCC8] bg-[#D9F0E8]"
                          : "border-[#e97c3d] bg-[#f1c5ac]"
                      }`}
                    >
                      <div>
                        <img src={Palu} alt="palu" />
                      </div>
                      <p>{barang.jumlahLelang}x</p>
                    </div>
                  </div>
                  {/* lelang */}
                  <p className="my-3 font-normal text-[#4B5563] dark:text-gray-400">
                    {barang.judul}
                  </p>
                  <div className="flex justify-between">
                    <p>Bid terakhir</p>
                    <p className="font-bold">
                      Rp {numberWithDot(barang.bidTerakhir)}
                    </p>
                  </div>
                </div>
                {/* Isi */}
              </div>
            );
          })}
      </div>
      <div className="my-7 flex justify-center">
        <button
          onClick={() => loadMore()}
          className="bg-[#009A63] px-2 py-2 text-white rounded-md"
        >
          {load === true ? "Lihat Semua" : "Tampil Sedikit"}
        </button>
      </div>
    </div>
  );
}

export default ProsesLelang;
