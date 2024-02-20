import {
  Button,
  Input,
  VStack,
  Text,
  Link,
  HStack,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useAppState } from '../state/store';

const ModelDropdown = () => {
  const toast = useToast();
  const { updateSettings } = useAppState((state) => ({
    updateSettings: state.settings.actions.update,
  }));

  const [openAIKey, setOpenAIKey] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const validateApiKey = (key: string) => /^sk-[A-Za-z0-9]{48}$/.test(key);

  const handleSaveKey = () => {
    const isValid = validateApiKey(openAIKey);

    if (isValid) {
      updateSettings({ openAIKey });
    } else {
      toast({
        title: 'API key format is invalid',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} className="mx-8 grow flex flex-col my-2">
      <Text fontSize="sm">
        You'll need an OpenAI API Key to run the Owloops AI in developer mode.
        If you don't already have one available, you can create one in your{' '}
        <Link
          href="https://platform.openai.com/account/api-keys"
          color="blue.300"
          isExternal
        >
          OpenAI account
        </Link>
        .
        <br />
        <br />
        Owloops stores your API key locally and securely, and it is only used to
        communicate with the OpenAI API.
      </Text>
      <HStack w="full">
        <Input
          placeholder="OpenAI API Key"
          value={openAIKey}
          onChange={(event) => setOpenAIKey(event.target.value)}
          type={showPassword ? 'text' : 'password'}
        />
        <Button
          onClick={() => setShowPassword(!showPassword)}
          variant="outline"
          color="gray"
          _hover={{ color: 'gray.300' }}
          _active={{ color: 'gray.300' }}
        >
          {showPassword ? 'Hide' : 'Show'}
        </Button>
      </HStack>
      <Button
        onClick={() => handleSaveKey()}
        w="full"
        disabled={!openAIKey}
        colorScheme="blue"
        _hover={{ bg: 'blue.400' }}
      >
        Save Key
      </Button>
    </VStack>
  );
};

export default ModelDropdown;
