import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
   <Navbar />
    
      <Container maxW={"container.xl"}  px={0} centerContent>
        <Box
          w={"100%"}
          bgImage={"https://www.swastikam.com/web/image/97029/Incense-banner-1500x700.jpg"}
          bgSize="cover"
          bgPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={"-10px"}
          py={20}
          boxShadow={"0px 0px 0px 0px"}
          height={"550px"}
          mb={10}
          // filter="brightness(100%)"
          // style={{ backdropFilter: "blur(10px)" }}
        >
          <Text
            pb={2}
            color={"#fff"}
            textAlign={"center"}
            fontSize="6xl"
            fontWeight="500"
          >
            About Us
          </Text>
        </Box>

        <Container maxW={"container.xl"} centerContent pt={{ base: 2, md: 6, lg: 12 }} >
          <Grid templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",

          }}>
            <GridItem >
              <Image src="https://www.swastikam.com/web/image/152227/images%20(1).jfif" alt="" w={"90%"}  />
            </GridItem>
            <GridItem>
              <Heading color={"text.200"} textDecoration={"underline"}>स्वस्तिकम</Heading>
              <Text color={"#000000"} fontSize={"19px"} align={"justify"} mt={4}>
                Burning agarbatti (incense), dhoop and conducting vedic havans <br />(sacrificial fire rituals) has been practiced in Bharat since thousands<br /> of years. These practices are known to create an ideal environment <br /> for worship, cleanse subtler energies, attract positive energies and <br /> repel negative one's. In fact, not just in Bharat but throughout the  <br /> world in ancient cultures herbal smoke has been an important part of <br /> worship as well as medicine. However, it is in the current century that <br /> modern research has been able to understand the scientific basis of <br /> such practices. Without going into its metaphysical & spiritual <br /> aspects, here we will discuss the physical benefits of lighting incense, <br /> dhoop and conducting havans.
              </Text>

            </GridItem>
          </Grid>
        </Container>
        <Container maxW={"container.xl"} px={20} centerContent>
          <Box
            fontWeight={"400"}
            color={"text.200"}
            fontSize={"40px"}
         mt={12}
         pt={12}
         textDecoration={"underline"}
            alignContent={"flex-start"}
          >
            OUR Mission  and Vision
          </Box>


          <Box maxW={"8xl"} fontSize={"19px"}    mt={7}
         pt={6} >
            <b> When you buy this blend </b>, you also support ethical farming practices, and farmers who work hard under tough hilly or mountainous conditions to bring you authentic products without harming Mother Nature. <b>ne even when only written for just one person.</b>If you try to write with a wide general audience in mind, your story will ring false and be bland. No one will be interested. Write for one person. If it’s genuine for the one, it’s genuine for the rest.
            <br />
            <br />
            <b>Swastikam draws inspiration </b>  from "Bansi Gir Gaushala", and its work towards reviving Bharat’s ancient “Gau Sanskriti”. We believe ancient Bharat holds the solution to many of the challenges facing humanity today.
            <br />
            <br />
            <b> Swastikam  mission </b> is to change the way people think about food and beverage, bringing simple Ayurvedic wisdom back into people’s lives. Our brand aims to recreate the same purity and authenticity that is characteristic of ancient Bharat.While doing so, we help people empower farmers who are the cornerstone of "Bharatiya  Gau Sanskriti".
            <br />
            <br />
            <b>In Ayurvedic principles </b>, caffeine is typically associated with Vatadosha,which is again associated with Vayu, a primal element that represents movement. Therefore, small amounts of caffeine can instantly make you feel energetic. However, in higher doses for sustained periods, caffeine consumption can trigger adverse health conditions. For this reason, please enjoy caffeine drinks in moderation.
          </Box>
        </Container>
        </Container>
        <Footer />
    </>
  );
};

export default Aboutus;
