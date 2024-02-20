import React from 'react';
import { Image, Text, Button, Flex } from '@chakra-ui/react';
import logo from '../assets/img/ow-rec.svg';

const RecCard = ({ onLearnMore }: { onLearnMore: () => void }) => (
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
    <Text fontSize="md" my="2">
      Owloops Rec
    </Text>
    <Text fontSize="xs" mb="4">
      Record and replay user flows for monitoring and quality assurance.
    </Text>
    <Button colorScheme="blue" size="sm" onClick={onLearnMore}>
      Learn More
    </Button>
  </Flex>
);

export default RecCard;
