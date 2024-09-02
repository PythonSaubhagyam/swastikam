import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";

import {
  Box,
  Container,
  VStack,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
       {IsMobileView !== "true" && <Navbar />}

      <Container maxW={"container.xl"} py={1} px={0} position="relative">
        <Image src="./Swastikam/About us/Incense-banner.jpg" />

        <Text
          pb={2}
          color={"brand.100"}
          textAlign={"center"}
          fontSize={{ lg: "7xl", md: "5xl", base: "xl" }}
          fontWeight="600"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          // Optional: Add background to improve text readability
        >
          About Us
        </Text>
      </Container>
      <Container
        maxW={"6xl"}
        centerContent
        pt={{ base: 2, md: 6, lg: 12 }}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem>
            <Image
              src="./Swastikam/About us/images.jpg"
              alt=""
              w={"100%"}
            />
          </GridItem>
          <GridItem>
            <Heading color={"text.200"} textDecoration={"underline"}>
              स्वस्तिकम
            </Heading>
            <Text color={"#000000"} fontSize={"17px"} align={"justify"} mt={4}>
              Burning agarbatti (incense), dhoop and conducting vedic havans
              (sacrificial fire rituals) has been practiced in Bharat since
              thousands of years. These practices are known to create an ideal
              environment for worship, cleanse subtler energies, attract
              positive energies and repel negative one's. In fact, not just in
              Bharat but throughout the world in ancient cultures herbal smoke
              has been an important part of worship as well as medicine.
              However, it is in the current century that modern research has
              been able to understand the scientific basis of such practices.
              Without going into its metaphysical & spiritual aspects, here we
              will discuss the physical benefits of lighting incense, dhoop and
              conducting havans.
            </Text>
          </GridItem>
        </Grid>
      </Container>
      <Container maxW={"6xl"} pt={7}  centerContent>
        <Box
          fontWeight={"400"}
          color={"text.200"}
          fontSize={{md:36,base:24}}
          
          textDecoration={"underline"}
          alignContent={"flex-start"}
        >
          OUR Mission and Vision
        </Box>

        <Box textAlign={"justify"} fontSize={"19px"} my={7} >
          <b> When you buy this blend </b>, you also support ethical farming
          practices, and farmers who work hard under tough hilly or mountainous
          conditions to bring you authentic products without harming Mother
          Nature. <b>ne even when only written for just one person.</b>If you
          try to write with a wide general audience in mind, your story will
          ring false and be bland. No one will be interested. Write for one
          person. If it’s genuine for the one, it’s genuine for the rest.
          <br />
          <br />
          <b>Swastikam draws inspiration </b> from "Bansi Gir Gaushala", and its
          work towards reviving Bharat’s ancient “Gau Sanskriti”. We believe
          ancient Bharat holds the solution to many of the challenges facing
          humanity today.
          <br />
          <br />
          <b> Swastikam mission </b> is to change the way people think about
          food and beverage, bringing simple Ayurvedic wisdom back into people’s
          lives. Our brand aims to recreate the same purity and authenticity
          that is characteristic of ancient Bharat.While doing so, we help
          people empower farmers who are the cornerstone of "Bharatiya Gau
          Sanskriti".
          <br />
          <br />
          <b>In Ayurvedic principles </b>, caffeine is typically associated with
          Vatadosha,which is again associated with Vayu, a primal element that
          represents movement. Therefore, small amounts of caffeine can
          instantly make you feel energetic. However, in higher doses for
          sustained periods, caffeine consumption can trigger adverse health
          conditions. For this reason, please enjoy caffeine drinks in
          moderation.
        </Box>
      </Container>

      {IsMobileView !== "true" && <Footer />}

    </>
  );
};

export default Aboutus;
