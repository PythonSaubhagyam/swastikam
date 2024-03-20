import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ProductListSection from "../components/ProductListSection";
import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";
import { FaSquareFacebook } from "react-icons/fa6";

const new_arrival_gir_gauveda = [
  {
    image1: "./Swastikam/Home/chakra.png",
    src: "natural",
    name: "Rose Incense Stick",
  },
  {
    image1: "./Swastikam/Home/rose stick.png",
    src: "kesar",
    name: "Stress Relief Cones",
  },
  {
    image1: "./Swastikam/Home/stress relief.png",
    src: "Langda Mango",
    name: " Multi Chakra Sticks",
  },
  {
    image1: "./Swastikam/Home/oil.png",
    src: "Katch kesar Mango",
    name: "Therapy Oil Meditation",
  },

]




const imageInfo = [
  {
    src: "https://www.swastikam.com/web/image/887314/non.png",
  },
  {
    src: "https://www.swastikam.com/web/image/887315/natural.png",
  },
  {
    src: "https://www.swastikam.com/web/image/887313/quality.png",
  },
  {
    src: "https://www.swastikam.com/web/image/887316/delivery.png",
  },
  {
    src: "https://www.swastikam.com/web/image/887317/service.png",
  },

];


export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    getHomePageData();
    getBlogs();
  }, []);

  async function getHomePageData() {
    const response = await client.get("/home");
    if (response.data.status === true) {
      setBanners(response.data.banners);
      setHome(response.data);
    }
    setLoading(false);
  }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
  }

  return (
    <>

      <Navbar />
      <Container mb={5} px={0} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={"./Swastikam/Home/banner 1.jpg"}
          height={{ base: "100%", md: "50%" }}
          width={"100%"}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s",
          }}
        />
      </Container>

      <Container maxW={"container.xl"} centerContent pt={12} >
        <Grid templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",

        }}>
          <GridItem >
            <Image src="./Swastikam/Home/Incense_Hands_sq.jpg" alt="" w={"90%"} />
          </GridItem>
          <GridItem>
            <Heading>स्वस्तिकम</Heading>
            <Text color={"#000000"} fontSize={"19px"} align={"justify"} mt={2}>
              Burning agarbatti (incense), dhoop and conducting vedic havans <br />(sacrificial fire rituals) has been practiced in Bharat since thousands<br /> of years. These practices are known to create an ideal environment <br /> for worship, cleanse subtler energies, attract positive energies and <br /> repel negative one's. In fact, not just in Bharat but throughout the  <br /> world in ancient cultures herbal smoke has been an important part of <br /> worship as well as medicine. However, it is in the current century that <br /> modern research has been able to understand the scientific basis of <br /> such practices. Without going into its metaphysical & spiritual <br /> aspects, here we will discuss the physical benefits of lighting incense, <br /> dhoop and conducting havans.
            </Text>
            <Button
              mt={8}
              variant={"outline"}
              color="brand.500"
              borderColor={"brand.500"}
              onClick={()=>navigate("/about-us")}
              size={"lg"}
              _hover={{ color: "white",bgColor:"brand.500" }}
            >
              Read More
            </Button>
          </GridItem>
        </Grid>
      </Container>
      <Container mt={12} centerContent>
        <Image src="./Swastikam/Home/exlore range.png" alt="" />
      </Container>

      <Container mt={12} centerContent>
        <Image src="./Swastikam/Home/incence stick.png" alt="" w={"50%"} />
      </Container>

      <Container mb={5} px={0} mt={12} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={"./Swastikam/Home/middle banner.jpg"}

          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s",
          }}
        />
      </Container>

      <Container mt={12} mb={12} centerContent>
        <Image src="./Swastikam/Home/best selling.png" alt="" />
      </Container>

      {/* <Container maxW={"container.xl"} px={"10%"} centerContent>
      <Grid templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }} 
        >
          {new_arrival_gir_gauveda.map((data)=>(
            <GridItem>
              <Flex flexDirection={"column"} gap={4}>
                <Image src={data.image1} w={"60%"} />
                <Text fontSize={"19px"} fontWeight={600}>
                  {data.name}
                </Text>
              </Flex>
            </GridItem>

          ))}
          </Grid>
          </Container> */}
     
     <ProductListSection
     title=""
     loading={loading}
     products={new_arrival_gir_gauveda}
     />

      <Container maxW={"container.xl"} px={12} centerContent>
        <Grid templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }} 
        >
          <GridItem>
            <Image src="./Swastikam/Home/therapy oil.png" alt="" />
          </GridItem>

          <GridItem>
            <Image src="./Swastikam/Home/incence cone.png" alt="" />
          </GridItem>
        </Grid>
      </Container>

    
      {/* <Testimonials /> */}
      <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={2}>
        <SimpleGrid
          columns={[2, 3, null, 4]}
          px={6}
          maxW={"container.xl"}
          my={6}
          backgroundColor={"bg.500"}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              39+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>Natural Products</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              8800+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>Satisfied Clients</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              17+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>Store</StatHelpText>
          </Stat>
          <Stat >
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl", lg: "3xl" }}>
              30+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>Countries</StatHelpText>
          </Stat>

        </SimpleGrid>
      </Container>
      <Container maxW={{ base: "100vw", md: "container.xl" }}>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(5,1fr)",
          }}
          gap={2}
          my={6}
          mx={{ md: "15%", base: 3 }}
        >
          {imageInfo?.map((data) => (
            <GridItem>
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                pt={10}
              >
                <LazyLoadImage
                  cursor={"pointer"}
                  transition="all 1s ease"
                  _hover={{
                    transform: "scale(1.25)",
                  }}
                  src={data.src}
                  alt=""

                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                    width: "130px",
                    // Note the corrected syntax here
                  }}
                />
                <Text textAlign={"center"} fontSize={"14px"} mt={2}>
                  {data.name}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
        <Box
          w="100%"
          // backgroundImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"}
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="xl"
            mx="auto"
            align={"center"}
            pt={"10"}
            pb={"10px"}
          >
            Serving to the Countries
          </Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Image
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/Map.webp"
            }
            w={{ base: "100%", md: "100%" }}
            alt=""
            py={4}
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Box>

        {/* <Container maxW={"7xl"}>
          <Grid templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4,1fr)",
          }}>
            <GridItem>
              <a href="https://www.facebook.com/people/Swastikam/100068397168257/" target="_blank" rel="noopener noreferrer">
                <Image src="https://www.swastikam.com/web/image/221450/Swastikam%20facebook.png" alt="" h="60%" />
              </a>
            </GridItem>

            <GridItem>
              <a href="https://www.instagram.com/swastikam_/" target="_blank" rel="noopener noreferrer">
                <Image src="https://www.swastikam.com/web/image/221452/swastikam%20instagram.png" alt="" h="60%" />
              </a>
            </GridItem>

            <GridItem>
              <a href="https://play.google.com/store/apps/details?id=com.sose.swastikam&hl=en" target="_blank" rel="noopener noreferrer">
                <Image src="https://www.swastikam.com/web/image/221457/google%20play%20swastikam.png" alt="" h="60%" />
              </a>
            </GridItem>

            <GridItem>
              <a href="https://www.facebook.com/people/Swastikam/100068397168257/" target="_blank" rel="noopener noreferrer">
                <Image src="https://www.swastikam.com/web/image/221459/app%20store%20swastikam.png" alt="" h="60%" />
              </a>
            </GridItem>
          </Grid>
        </Container> */}
      </Container>
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
