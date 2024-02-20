import React from 'react';
import { Image, Text, Button, Flex, Badge } from '@chakra-ui/react';
import logo from '../assets/img/ow-ai.svg';

const AICard = ({ onLearnMore }: { onLearnMore: () => void }) => (
  <Flex
    flexDirection="column"
    align="center"
    textAlign="center"
    p="4"
    w="100%"
    h="auto"
    m="0"
  >
    <Image src={logo} boxSize="50px" margin="auto" />
    <Flex align="center" my="2">
      <Text fontSize="md" mr="2">
        Owloops AI
      </Text>
      <Badge colorScheme="yellow" fontSize="xs" px="2" py="0.5">
        Beta
      </Badge>
    </Flex>
    <Text fontSize="xs" mb="4">
      Harness the power of AI for exploratory testing.
    </Text>
    <Button colorScheme="blue" size="sm" onClick={onLearnMore}>
      Try now
    </Button>
  </Flex>
);

export default AICard;
