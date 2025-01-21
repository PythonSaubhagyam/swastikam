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
import ScrollToTop from "../components/ScrollToTop";
import checkLogin from "../utils/checkLogin";
import LoginModal from "../components/LoginModal";
import Secondproductlistsection from "../components/secondproductlistsection";
import { useDispatch, useSelector } from "react-redux"
import {
  Link as ReactRouterLink,
} from "react-router-dom";
import {
  initializeAppData
} from "../redux/slices/homeApi";



export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const loginInfo = checkLogin();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );


  const dispatch = useDispatch();
  const {
    banners,
    upperSection,
    loading,
    blogs,
    statisticsSection,
    lowerSection,
    hasFetched,
  } = useSelector((state) => state.home);

  const {
    aboutSection,
    explorSection,
    therapiOliSection,
    bestsallerSection,
    nonGmoSection,
  } = upperSection;

  const {
    awardsSection,
    servicesSection,
    availableSection,
  } = lowerSection;


  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!hasFetched) {
      dispatch(initializeAppData());
    }
  }, [dispatch, hasFetched]);


  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners?.length > 0 && banners} />
        )}
      </Container>
      {aboutSection?.length > 0 &&
        aboutSection[0]?.is_visible_on_website === true && (
          <Container maxW={"6xl"} centerContent pt={12}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              <GridItem>
                <Image src={aboutSection[0]?.image} alt="" />
              </GridItem>
              <GridItem>
                <Heading> {aboutSection[0]?.label}</Heading>
                <Text
                  color={"#000000"}
                  fontSize={"17px"}
                  align={"justify"}
                  mt={2}
                >
                  {aboutSection[0]?.description}
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

      {explorSection?.length > 0 &&
        explorSection[0]?.is_visible_on_website === true && (
          <Container mt={12} centerContent>
            <Image src={explorSection[0]?.image} alt="" />
            <Image src={explorSection[0]?.images[0]?.image} alt="" w={"50%"} />
          </Container>
        )}
      <Container mb={5} px={0} mt={12} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={explorSection[0]?.images[1]?.image}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s",
          }}
        />
      </Container>
      {bestsallerSection?.length > 0 &&
        bestsallerSection[0]?.is_visible_on_website === true && (
          <>
            <Container mt={12} mb={12} centerContent>
              <Image src={bestsallerSection[0]?.image} alt="" />
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
              products={bestsallerSection[0]?.images}
              loading={loading}

            />
          </>
        )}
      {/* <ProductListSection
        title=""
        loading={loading}
        products={new_arrival_gir_gauveda}
      /> */}

      {therapiOliSection?.length > 0 &&
        therapiOliSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} px={12} centerContent>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              <GridItem>
                <Image src={therapiOliSection[0]?.images[0]?.image} alt="" />
              </GridItem>

              <GridItem>
                <Image src={therapiOliSection[0]?.images[1]?.image} alt="" />
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
                    as={ReactRouterLink}
                    to={`/blogs/${blog.id}/`}
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
                    as={ReactRouterLink}
                    to={`/blogs/${blog.id}/`}
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
      {statisticsSection?.length > 0 && (
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
            {statisticsSection?.length > 0 &&
              statisticsSection?.map((data) => (
                <Stat>
                  <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>
                    {data?.value}
                  </StatNumber>
                  <StatHelpText color="gray.600">{data?.name}</StatHelpText>
                </Stat>
              ))}

          </SimpleGrid>
        </Container>)}
      {nonGmoSection?.length > 0 &&
        nonGmoSection[0]?.is_visible_on_website === true && (
          <Container
            pt={8}
            maxW={{ base: "100vw", md: "container.xl" }}
            centerContent
          >
            <Image w={{ md: "65%" }} src={nonGmoSection[0]?.image} />
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
