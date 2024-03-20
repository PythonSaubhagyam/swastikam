import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Flex,
  Card,
} from "@chakra-ui/react";

const testimonialsData = {
  testimonials: [
    {
      quoteIconColor: "#436131",
      quote:
        "All products are 100% pure and organic. Edible oils, medicines,medicated ghee for nasya, vegetables and fruits I buy regularly from SOSE and I am fully satisfied with these organic products.",
      author: "Usha Acharya, ",
      location: "Ahmedabad",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "SOSE is the pure nature n best store .. it's Beard oil is best product n it's a Aayurvedic beard oil which made in organic ingredients.",
      author: "karan chaudhari,",
      location: "Surat",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Treated for gas, acidity and pain in hands & legs since last few weeks. Seen significant relief with Sunthamrut capsule, Drakshavaleh, Kabjamrut Churna and Asthi Churna",
      author: "Bharti Ben",
      location: "Ahmedabad",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Started Mother's treatment few weeks back for joint & back pain. Treated with Asthigir Ghrit, Asthi Churna, Kabjamrut capsule, Sunthamrut capsule and Gir Nasya. See significant relief in join & back pains.",
      author: "Rita Ben",
      location: "Botad",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Suffered from serious left ventricle dysfunction and injection projection, was admitted to ICU and adviced 3 months rest thereafter. Started Gauveda medicines Arjun Ghrit, Dhavalamrut, Arjun Chai and Phalamrut with daily Pranayam. Experience significant relief and improvement in 2D echo report",
      author: "Akash Dave,",
      location: "Ahmedabad",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Suffering from a neurological disease, experiencing 50% relief in symptoms, with lower stress & better sleep even after stopping allopathic medicines. Taking Asthi Churna, Nasya, 21 Aushadhiya Ark and Shilajit.",
      author: "Rita Ben",
      location: "Ahmedabad",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Suffered from serious left ventricle dysfunction and injection projection, was admitted to ICU and adviced 3 months rest thereafter. Started Gauveda medicines Arjun Ghrit, Dhavalamrut, Arjun Chai and Phalamrut with daily Pranayam. Experience significant relief and improvement in 2D echo report.",
      author: "ashwantbhai Prajapati,",
      location: "Mehsana",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Suffering from a neurological disease, experiencing 50% relief in symptoms, with lower stress & better sleep even after stopping allopathic medicines. Taking Asthi Churna, Nasya, 21 Aushadhiya Ark and Shilajit.",
      author: "Jashwantbhai Prajapati",
      location: "Rajkot",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "13-year old physically less developed son with low immunity. Started Gir Phalamrut capsule, Nasya, Drakshavaleh and Go-Vita. See significant improvement in just few weeks",
      author: "Prashant M",
      location: "Ahmedabad",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Regularly use Kamdhenu Asav for 2 daughters aged 6 & 8 years whenever there catch cold, see complete relief without the use of any other medicines.",
      author: "Nilam R Patel",
      location: " Surat",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "Ayurvedic Combination to be must try for better health and energetic health Life I Personally Suggest Ayurvedic Food and Product also",
      author: "ARJUN Naila,",
      location: "Mumbai",
    },
    {
      quoteIconColor: "#436131",
      quote:
        "All eating and drinking organic products comes with very pleasant taste. Further, all skin care products are also harmless and chemical free and manufactured with 100% organic ingredients.",
      author: "Asit Patel,",
      location: "Surat",
    },

  
  ],
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "#436131",
        borderRadius: 20,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "#436131",
        borderRadius: 20,
      }}
      onClick={onClick}
    />
  );
}
const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container maxW={"container.xl"} pt={3}>
        <Box
          w="100%"
          // backgroundImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"}
          backgroundSize="100%"
          backgroundPosition="50% 100%"
       
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            mt={3}
            pb={"10px"}
          >
            TESTIMONIALS
          </Heading>
        </Box>
        <Box px={10} maxW={"100%"} h={"100%"}    backgroundColor={"bg.300"}>
          <Slider {...settings}>
            {testimonialsData?.testimonials.map((testimonial, index) => (
              <Box
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                maxW={{ md: "100%", base: "100%" }}
                minH={{ md: "10vw", base: "25vw" }}
                my={20}
             
                // mx={{ md: 10, base: 4 }}
                px={5}
                pb={5}
              >
                <Flex
                  flexDirection={"column"}
                  gap={"3"}
                  textAlign={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  maxW={{ md: "100%", base: "100%" }}
                  minH={{ md: "10vw", base: "25vw" }}
                >
                  {/* <Avatar
                    boxSize={75}
                    boxShadow="0px 0px 15px rgba(0, 0, 0, 0.48)"
                    marginTop={"-35px"}
                    name="Dan Abrahmov"
                    src="/sose_logo.png"
                  /> */}
                  <Text
                    display={"inline-block"}
                    fontSize={"15px"}
                    fontWeight={600}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#436131",
                        fontWeight: 900,
                      }}
                    >
                      &#8220;
                    </span>{" "}
                    {testimonial.quote.slice(0, 150)}...
                    <span
                      style={{
                        color: "#436131",
                        fontSize: "1rem",
                        fontWeight: 900,
                      }}
                    >
                      &#8221;
                    </span>
                  </Text>

                  <Text color={"#000000"} height={"100%"} fontWeight={600}>
                    -{testimonial.author} <b> {testimonial.location} </b>
                  </Text>

                </Flex>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </>
  );
};

export default Testimonials;
// <Flex h={{ base: 380, ml: 350 }} key={index}>
//   <Flex justifyContent={index % 2 !== 0 ? "start" : "end"} mt={6}>
//     {index % 2 === 0 && (
//       <Box
//         sx={{
//           background: "#436131",
//           color: "white",
//           height: "35px",
//           marginTop: "4px",
//           padding: "10px",
//           marginRight: -1,
//         }}
//       >
//         <FaQuoteLeft />
//       </Box>
//     )}

//     <Box
//       style={{
//         opacity: "0.9",
//         border: "1px solid #799a4e",
//         padding: 15,
//         marginTop: 5,
//         marginBottom: 5,
//         margin: 3,
//       }}
//       fontSize={{ base: 12, xl: 15 }}
//       h={{ base: 650, xl: 350 }}
//       w={{ base: 550, xl: 550 }}
//     >
//       <i>{testimonial.quote}</i>
//       <footer>
//         <i>
//           — {testimonial.author},&nbsp;
//           <b>{testimonial.location}</b>
//         </i>
//       </footer>
//     </Box>
//   </Flex>
// </Flex>
