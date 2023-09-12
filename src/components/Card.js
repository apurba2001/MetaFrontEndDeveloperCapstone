import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      alignItems="flex-start"
      borderRadius="lg"
      bg="white"
      color="black"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <VStack pl="4" spacing="3" alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack pl="4" pb="4">
        <Heading size="m">See more</Heading>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
