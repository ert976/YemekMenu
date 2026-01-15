import React from 'react';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

import { Ionicons } from '@expo/vector-icons';

export const TabBarIcon = (props: {
  name: ComponentProps<typeof Ionicons>['name'];
  color: string;
}) => <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;