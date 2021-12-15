import { Box, Flex, Text } from "@chakra-ui/layout";

const PlayerBar = () => {
  return (
    <Box height="100px" width="100px" bg="gray.900" padding="10px">
      <Flex align="center">
        <Box padding="20px" color="white" width="30%">
            <Text fontSize="large">Song name</Text>
            <Text fontSize="sm">Artist name</Text>
        </Box>
        <Box width="40%">controls</Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
