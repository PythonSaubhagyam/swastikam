import {
    Card,
    CardBody,
    Button,
    CardFooter,
    Heading,
    Image,
    Box,
  } from "@chakra-ui/react";
  import {
    Link as ReactRouterLink,
  } from "react-router-dom";

const SecondProductCard = ({ product }) => {
    return (
      <Card
        w={{ base: "80vw", sm: "3xs", lg: "2xs" }}
        border="1px"
        mx={2}
        mb={5}
        borderColor="brand.100"
        borderRadius={"lg"}
        as={ReactRouterLink} 
        to={`/products/${product.product}`}
        cursor={product?.product !== null ? "pointer" : ""}
      >
        <CardBody backgroundColor={"white"} borderRadius="lg">
          <Image
            src={product?.image1 ? product?.image1 : product?.image}
            alt={product.product_name}
            borderRadius="lg"
            boxSize="200px"
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
            as={ReactRouterLink}
            to={`/products/${product.product}`}
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
