import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ProductListSection from "../components/ProductListSection";
import secondproductlistsection from "../components/secondproductlistsection";
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
import ScrollToTop from "../components/ScrollToTop";
import checkLogin from "../utils/checkLogin";
import LoginModal from "../components/LoginModal";
import Secondproductlistsection from "../components/secondproductlistsection";

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
];

const imageInfo = [
  {
    src: "./Swastikam/Home/non (1).png",
    alt: "image",
  },
  {
    src: "./Swastikam/Home/natural (1).png",
  },
  {
    src: "./Swastikam/Home/quality (1).png",
  },
  // {
  //   src: "./Swastikam/Home/delivery.png",
  // },
  {
    src: "./Swastikam/Home/service (1).png",
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
  const [sections, setSections] = useState([]);
  const [AboutSection, setAboutSection] = useState([]);
  const [ExplorSection, setExplorSection] = useState([]);
  const [NonGmoSection, setNonGmoSection] = useState([]);
  const [BestsallerSection, setBestsallerSection] = useState([]);
  const [servicesSection, setServicesSection] = useState([]);
  const [TherapiOliSection, setTherapiOliSection] = useState([]);
  const loginInfo = checkLogin();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );

  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    //getHomePageData();
    getBlogs();
    getUpper();
    getLowerSection();
    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);

  // async function getHomePageData() {
  //   const response = await client.get("/home");
  //   if (response.data.status === true) {
  //     setBanners(response.data.banners);
  //     setHome(response.data);
  //   }
  //   setLoading(false);
  // }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
    setLoading(false);
  }

  async function getLowerSection() {
    const params = {};
    const response = await client.get("/lower-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setSections(response.data.data);

      const ourServicesSection = response.data.data?.filter(
        (section) => section.id === 2
      );
      setServicesSection(ourServicesSection);
    }
  }

  const getUpper = async () => {
    const response = await client.get("/swastikam-section/?type=upper");
    if (response.data.status === true) {
      setSections(response.data.data);
      const ourAboutSection = response.data.data?.filter(
        (section) => section.id === 1
      );
      const ourExplorSection = response.data.data?.filter(
        (section) => section.id === 2
      );
      const ourBestsallerSection = response.data.data?.filter(
        (section) => section.id === 3
      );
      const ourTherapiOliSection = response.data.data?.filter(
        (section) => section.id === 4
      );
      const ourNonGmoSection = response.data.data?.filter(
        (section) => section.id === 5
      );

      setAboutSection(ourAboutSection);
      setExplorSection(ourExplorSection);
      setBestsallerSection(ourBestsallerSection);
      setTherapiOliSection(ourTherapiOliSection);
      setNonGmoSection(ourNonGmoSection);
    }
  };
  console.log("best",BestsallerSection)
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
      {AboutSection?.length > 0 &&
        AboutSection[0]?.is_visible_on_website === true && (
          <Container maxW={"6xl"} centerContent pt={12}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              <GridItem>
                <Image src={AboutSection[0]?.image} alt="" />
              </GridItem>
              <GridItem>
                <Heading> {AboutSection[0]?.label}</Heading>
                <Text
                  color={"#000000"}
                  fontSize={"17px"}
                  align={"justify"}
                  mt={2}
                >
                  {AboutSection[0]?.description}
                </Text>
                <Button
                  mt={6}
                  variant={"outline"}
                  color="brand.500"
                  borderColor={"brand.500"}
                  onClick={() => navigate("/about-us")}
                  size={"md"}
                  _hover={{ color: "white", bgColor: "brand.500" }}
                >
                  Read More
                </Button>
              </GridItem>
            </Grid>
          </Container>
        )}

      {ExplorSection?.length > 0 &&
        ExplorSection[0]?.is_visible_on_website === true && (
          <Container mt={12} centerContent>
            <Image src={ExplorSection[0]?.image} alt="" />
            <Image src={ExplorSection[0]?.images[0]?.image} alt="" w={"50%"} />
          </Container>
        )}
      <Container mb={5} px={0} mt={12} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={ExplorSection[0]?.images[1]?.image}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s",
          }}
        />
      </Container>
      {BestsallerSection?.length > 0 &&
        BestsallerSection[0]?.is_visible_on_website === true && (
          <>
          <Container mt={12} mb={12} centerContent>
            <Image src={BestsallerSection[0]?.image} alt="" />
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

            <Secondproductlistsection
              title=""
              //products={BestsallerSection[0]?.images?.length > 0 && BestsallerSection[0]?.images}
              products={BestsallerSection[0]?.images}
              loading={loading}
              
            />
         </>
        )}
      {/* <ProductListSection
        title=""
        loading={loading}
        products={new_arrival_gir_gauveda}
      /> */}

      {TherapiOliSection?.length > 0 &&
        TherapiOliSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} px={12} centerContent>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              <GridItem>
                <Image src={TherapiOliSection[0]?.images[0]?.image} alt="" />
              </GridItem>

              <GridItem>
                <Image src={TherapiOliSection[0]?.images[1]?.image} alt="" />
              </GridItem>
            </Grid>
          </Container>
        )}
      <Container maxW={"container.xl"}>
        <Heading color="brand.500" size="lg" mx="auto" align={"center"} mt={8}>
          BLOGS
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          px={2}
          py={3}
          spacing="40px"
        >
          {blogs?.slice(0, 8).map((blog) => (
            <GridItem key={blog.id} m={4}>
              <Card>
                <LinkBox h={400}>
                  <Image
                    src={blog.banner}
                    w="100%"
                    h="300px"
                    loading="lazy"
                    objectFit={"cover"}
                    borderRadius={5}
                    style={{
                      opacity: 1,
                      transition: "opacity 0.7s", // Note the corrected syntax here
                    }}
                  />
                  <LinkOverlay
                    _hover={{ color: "bg.500" }}
                    href={`/blogs/${blog.id}/`}
                  >
                    <Heading size="sm" fontWeight={500} m={2}>
                      {blog.title}
                    </Heading>
                  </LinkOverlay>
                </LinkBox>
                <Flex m={2} justifyContent={"space-between"}>
                  <Text fontSize={"sm"} color="gray.500">
                    {new Intl.DateTimeFormat("en-CA", {
                      dateStyle: "long",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(blog.published_at))}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"brand.500"}
                    onClick={() => navigate(`/blogs/${blog.id}/`)}
                    cursor={"pointer"}
                  >
                    Read more
                    <ChevronRightIcon />
                  </Text>
                </Flex>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* <Testimonials /> */}
      <Container backgroundColor={"bg.100"} maxW={"container.xl"} py={2}>
        <SimpleGrid
          columns={[2, 3, null, 4]}
          px={6}
          maxW={"container.xl"}
          my={6}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              39+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>
              Natural Products
            </StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              8800+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>
              Satisfied Clients
            </StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              17+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>
              Store
            </StatHelpText>
          </Stat>
          <Stat>
            <StatNumber
              color="text.300"
              fontSize={{ base: "3xl", md: "3xl", lg: "3xl" }}
            >
              30+
            </StatNumber>
            <StatHelpText color="text.300" fontSize={{ base: "xl", md: "xl" }}>
              Countries
            </StatHelpText>
          </Stat>
        </SimpleGrid>
      </Container>
      {NonGmoSection?.length > 0 &&
        NonGmoSection[0]?.is_visible_on_website === true && (
          <Container
            pt={8}
            maxW={{ base: "100vw", md: "container.xl" }}
            centerContent
          >
            <Image w={{ md: "65%" }} src={NonGmoSection[0]?.image} />
          </Container>
        )}
      {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              my={"5"}
              pb={"10px"}
            >
              {servicesSection?.length > 0 && servicesSection[0].label}
            </Heading>

            <Box display={"flex"} justifyContent={"center"}>
              <LazyLoadImage
                src={
                  servicesSection?.length > 0 &&
                  servicesSection[0]?.images[0].image
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
          </Container>
        )}
      {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )}
      <ScrollToTop />
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
