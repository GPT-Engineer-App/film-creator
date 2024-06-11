import { Container, Box, VStack, HStack, Text, IconButton, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import { FaFilm, FaTools, FaSave, FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Flex as="header" width="100%" p={4} alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">
          Cartoon Film Creator
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Button leftIcon={<FaSave />} colorScheme="teal" variant="solid">
            Save
          </Button>
          <Button leftIcon={<FaPlay />} colorScheme="blue" variant="solid">
            Preview
          </Button>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex as="main" flex="1" py={4}>
        {/* Sidebar */}
        <VStack as="aside" width="20%" p={4} spacing={4} borderRight="1px" borderColor="gray.200">
          <IconButton aria-label="Tools" icon={<FaTools />} size="lg" />
          <Text>Tools</Text>
        </VStack>

        {/* Editor Area */}
        <Box as="section" flex="1" p={4}>
          <Text fontSize="2xl">Editor Area</Text>
          <Text>Here you can create and edit your cartoon films.</Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" width="100%" p={4} alignItems="center" borderTop="1px" borderColor="gray.200">
        <Text>© 2023 Cartoon Film Creator. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;
