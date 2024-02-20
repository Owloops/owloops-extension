import React from 'react';
import { Box, Button, Text, Link, VStack, Center, Flex } from '@chakra-ui/react';

const ConsentPage = ({ onConsent }: { onConsent: () => void }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      py={10}
    >
      <VStack spacing={5} maxW="md" textAlign="center">
        <Text fontSize="md">
          Please use this tool responsibly. It may not generate appropriate user flows, is able to interact with the web page under test, and should not be left unattended.
        </Text>
        <Text fontSize="sm">
          By continuing, you agree to our{' '}
          <Link href="https://www.owloops.com/terms-of-service.html" color="blue.400" isExternal>
            Terms of Service
          </Link>.
        </Text>
        <Button colorScheme="blue" onClick={onConsent} size="lg">
          Continue
        </Button>
      </VStack>
    </Flex>
  );
};

export default ConsentPage;
