import React from 'react';
import {Title, Text, Button} from './utils.js'
import Image from 'next/image';
export const Main = ()=>{
    return (
        <main className="main">
            <section className="main__content">
                <h1 className="main__content--title">Dólar y cripto, unificados</h1>
                <Text> Precios, graficos, conversiones y mas... </Text>
                <Button link="/precios">Ver más</Button>
            </section>
            <section className="main__image">
                <Image
                    layout="fill"
                    src="/home-graphic.png"
                    alt="Landing graphic"
                    objectFit='contain'
                />
            </section>
        </main>
    )
}
export default Main;