import { RepeatIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { useAppState } from '../state/store';

const OptionsDropdown = () => {
  const { openAIKey, updateSettings } = useAppState((state) => ({
    openAIKey: state.settings.openAIKey,
    updateSettings: state.settings.actions.update,
  }));

  if (!openAIKey) return null;

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        color="gray"
        _hover={{ color: 'gray.300' }}
        _active={{ color: 'gray.300' }}
        aria-label="Options"
        icon={<SettingsIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem
          color="gray.600"
          icon={<RepeatIcon />}
          onClick={() => {
            updateSettings({ openAIKey: '' });
          }}
        >
          Reset API Key
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default OptionsDropdown;
