"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { QRCodeCanvas } from "qrcode.react";
import { FaUpload } from "react-icons/fa";

export default function Home() {
  return (
        <main className="container">
            <section className="title-conteiner">
                <h1 className="page-title">
                      Gere e costumize  
                      <span>QR codes</span> 
                </h1>

                <img src="/arrow.svg" 
                  alt="detail"
                  className="arrow-detail"/>
            </section>

            <section className="qr-code-container">
                <div className="qr-code">
                    <div className="link-input">
                        <label htmlFor="">
                            Digite seu link
                        </label>
                        <input 
                        type="text" 
                        placeholder="seu link aqui"/>
                    </div>
                    <div className="qr-code-preview">
                    <p>
                        QR Code Previw
                    </p>
                      <QRCodeCanvas
                        value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
                        title={"ttps://picturesofpeoplescanningqrcodes.tumblr.com/"}
                        size={200}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"L"}
                        imageSettings={{
                          src: "https://static.zpao.com/favicon.png",
                          x: undefined,
                          y: undefined,
                          height: 24,
                          width: 24,
                          opacity: 1,
                          excavate: true,
                        }}
                      />
                </div>
              </div>

              	<div className="qr-code-custom">
                  	<div className="custom-conteiner">
                        <h3>
                          cores
                        </h3>
                  	</div>
                <div className="input-conteiner colors">
                  	<div className="input-box">
                        <label htmlFor="fgcolor">
                            cor principal
                        </label>
                        <input type="text"
                         className="input-color"
                         id="fgcolor" 
                        />
                  	</div>

                    <div className="input-box">
                        <label htmlFor="bgcolor">
                            Cor fundo
                        </label>
                        <input type="text"
                         className="input-color"
                         id="bgcolor" 
                        />
                  	</div>
                </div>
                  	<div className="custom-conteiner">
                        <h3>    
                            Logo
                        </h3>

                        <div className="input-conteiner ">
                  	<div className="input-box">
                        <label htmlFor="logo">
                            Insira seu logo
                        </label>
                        <input type="file"
                         className="input-file"
                         id="logo"
                         accept="image/*" 
                        />

                        <button className="input-file-button">
                            <FaUpload />
                            Escolher um arquivo
                        </button>
                  	</div>

                    <div className="input-box">
                        <label htmlFor="logoSize">
                            Tamanho da logo
                        </label>
                        <select name="logoSize" 
                        id="">

                            <option value="24">24px x 24px</option>
                            <option value="38">38px x 38px</option>
                            <option value="50">50px x 50px</option>

                        </select>
                  	</div>
                </div>
                        
                  	</div>

                  	<button className="donwload-button">
                        Baixa QR code
                  	</button>

              	</div>
            </section>
      </main>
  );
}
