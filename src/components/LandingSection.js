import { Avatar, Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar size="2xl" name="pete" src="https://i.pravatar.cc/150?img=7" />
        <Text fontSize="2xl">{greeting}</Text>
      </VStack>
      <VStack>
        <Heading as="h1" size="2xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="2xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
