import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styles from "./Women.module.css";
import Carousel from 'react-bootstrap/Carousel';


const WomensPage = () => {
    const [images, setimages] = useState([]);
   const [trending,setTrending]=useState([]);

    useEffect(()=>{
       fetch("http://localhost:3004/roundImg").then((r)=>r.json()).then((d)=>{setimages(d)});
       fetch("http://localhost:3004/trending").then((r)=>r.json()).then((d)=>{setTrending(d)});
    },[])
  return (
    <div className={styles.container}>
        <div className={styles.box}>
          <div>
          {/* <ProductsCarousel/> */}
          <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-2-16June2022.jpg"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-16June2022.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-4-23May20222.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-16June2022.jpg'
          alt="fourth slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Women-16June2022.jpg'
          alt="fifth slide"
        />
       
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
        <div className={styles.box2} >
            <div>
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-16June2022.gif" alt="" />
            </div>
        </div>
        <div className={styles.box2} >
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-16June2022.jpg" alt="" />
            </div>
        </div>
        <div className={styles.box2} >
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=80,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-16June2022.jpg" alt="" />
            </div>
        </div>
        <div className={styles.box2} >
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-14June2022.jpg" alt="" />
            </div>
        </div>
        <Heading fontWeight='500' textAlign='left' ml='200px' mt='20px' >Shop by Category</Heading>
        <div className={styles.box3} >
            
               {images.map((d)=>{
                return (
                    <div key={d.id} className={styles.roundBox}>
                <img src={d.image} alt="roundimage" />
                <Heading fontSize='sm' >{d.caption}</Heading>
                </div>
               )})}
            
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Top Trending Brands</Heading>
        <div className={styles.box4} >
             {trending.map((imgs)=>{
                return (
                    <div>
                        <img src={imgs.image} alt="brands" />
                    </div>
                )
             })}
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Summer Essentials</Heading>
        <div className={styles.box5}>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-20April2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-B-Women-20April2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-C-Women-20April2022.jpg" alt="" />
            </div>
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Top Picks</Heading>
        <div className={styles.box6}>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-D-18May2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-E-18May2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-F-18May2022.jpg" alt="" />
            </div>
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Trending Ethnic Wear</Heading>
        <div className={styles.box6}>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-18May2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-B-Women-18May2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-C-Women-18May2022.jpg" alt="" />
            </div>
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Essential Range</Heading>
        <div className={styles.box6}>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-A-Women-18May2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-B-Women-18May2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-C-Women-18May2022.jpg" alt="" />
            </div>
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Wardrobe -Must Haves</Heading>
        <div className={styles.box6}>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-01April2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-B-01April2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-C-01April2022.jpg" alt="" />
            </div>
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Trendsetters</Heading>
        <div className={styles.box6}>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-A-Women-04March2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-B-Women-04March2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-C-Women-04March2022.jpg" alt="" />
            </div>
        </div>
        <Heading fontWeight='500' textAlign='left' ml='175px' mt='20px' >Most Loved Styling</Heading>
        <div className={styles.box6}>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-A-Women-04March2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-B-Women-04March2022.jpg" alt="" />
            </div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-C-Women-04March2022.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default WomensPage