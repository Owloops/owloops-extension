import React, { useState } from 'react';
import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { useAppState } from '../state/store';
import ModelDropdown from './ModelDropdown';
import SetAPIKey from './SetAPIKey';
import TaskUI from './TaskUI';
import OptionsDropdown from './OptionsDropdown';
import AICard from './AICard';
import RecCard from './RecCard';
import logo from '../assets/img/icon_128.png';
import * as amplitude from '@amplitude/analytics-browser';
import theme from './theme';
import ShowRecInfo from './RecInfo';
import ConsentPage from './ConsentPage';
import { ArrowBackIcon } from '@chakra-ui/icons';
amplitude.init('ee62116ebda9d6653956595dc3b461a6');

const App = () => {
  const openAIKey = useAppState((state) => state.settings.openAIKey);
  const [showMain, setShowMain] = useState(false);
  const [showRecInfo, setShowRecInfo] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleBackClick = () => {
    if (showRecInfo) {
      setShowRecInfo(false);
    } else {
      setShowMain(false);
    }
  };

  const handleLearnMoreClick = () => {
    setShowMain(true);
  };

  const handleRecLearnMoreClick = () => {
    setShowRecInfo(true);
    setShowMain(false);
  };

  if (!consentGiven && showMain) {
    return (
      <ChakraProvider theme={theme}>
        <ConsentPage onConsent={() => setConsentGiven(true)} />
      </ChakraProvider>
    );
  }

  if (showRecInfo) {
    return (
      <ChakraProvider theme={theme}>
        <Box
          fontSize="lg"
          w="full"
          h="full"
          display="flex"
          flexDirection="column"
        >
          <HStack mb={4} px={8} pt={8} alignItems="center">
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="Back"
              onClick={handleBackClick}
              size="sm"
              isRound={true}
              mr={2}
            />
            <img
              src={logo}
              width={32}
              height={32}
              className="App-logo"
              alt="logo"
            />

            <Heading as="h1" size="md" flex={1}>
              Owloops Rec
            </Heading>
          </HStack>
          <ShowRecInfo />
        </Box>
      </ChakraProvider>
    );
  }

  if (showMain && consentGiven) {
    return (
      <ChakraProvider theme={theme}>
        <Box
          fontSize="lg"
          w="full"
          h="full"
          display="flex"
          flexDirection="column"
        >
          <HStack mb={4} px={8} pt={8} alignItems="center">
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="Back"
              onClick={handleBackClick}
              size="sm"
              isRound={true}
              mr={2}
            />
            <img
              src={logo}
              width={32}
              height={32}
              className="App-logo"
              alt="logo"
            />

            <Heading as="h1" size="md" flex={1}>
              Owloops AI
            </Heading>
            <HStack spacing={2}>
              <ModelDropdown />
              <OptionsDropdown />
            </HStack>
          </HStack>
          {openAIKey ? <TaskUI /> : <SetAPIKey />}
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="row"
        justify="center"
        align="center"
        wrap="nowrap"
        bg="#0f172a"
        color="#d8dee9"
        p="4"
        gap="2"
        w="full"
        h="full"
      >
        <Box
          display="flex"
          flexDirection="row"
          borderColor="#4A5568"
          borderWidth="0.5px"
          bg="#1e293b"
          rounded="md"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
          color="#d8dee9"
        >
          <AICard onLearnMore={handleLearnMoreClick} />
          <Divider
            orientation="vertical"
            height="auto"
            borderColor="#4A5568"
            borderWidth="0.5px"
          />
          <RecCard onLearnMore={handleRecLearnMoreClick} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
