import {
    Card,
    CardBody,
    Button,
    CardFooter,
    Heading,
    Image,
    Box,
  } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";

const SecondProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
      <Card
        w={{ base: "80vw", sm: "3xs", lg: "2xs" }}
        border="1px"
        mx={2}
        mb={5}
        borderColor="brand.100"
        borderRadius={"lg"}
        //onClick={() => {
         // window.location.href = `/products/${product.id}`;
          // navigate(),
          //   window.scrollTo({
          //     top: 0,
          //     left: 0,
          //     behavior: "smooth",
          //   });
        //}}
        cursor={"pointer"}
      >
        <CardBody backgroundColor={"white"} borderRadius="lg">
          <Image
            src={product?.image1 ? product?.image1 : product?.image}
            alt={product.product_name}
            borderRadius="lg"
            boxSize="150px"
            objectFit={"contain"}
            mx="auto"
          />
        </CardBody>
        <CardFooter
          align={"center"}
          py={3}
          flexDirection="column"
          // backgroundColor={"bg.500"}
          borderBottomRadius="lg"
        >
          <Box
            h="80px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading
              size="sm"
              mb={3}
              noOfLines={3}
              fontWeight="500"
              title={product.product_name}  
            >
              {product.product_name}
            </Heading>
          </Box>
          <Button
            as={Link}
            //to={ product.product ? `/products/${product.product}`}
            fontSize="sm"
            w={{ base: "100%", lg: "80%" }}
            mx="auto"
            backgroundColor={"brand.900"}
            borderColor={"brand.900"}
            color="white"
            _hover={{ backgroundColor: "brand.900" }}
          >
            View Product
          </Button>
        </CardFooter>
      </Card>
    );
}

export default SecondProductCard
