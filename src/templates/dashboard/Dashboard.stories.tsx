import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Dashboard from './dashboard';

export default {
  title: 'Template/Dashboard',
  component: Dashboard,
  argTypes: {},
} as Meta<typeof Dashboard>;

const Template: StoryFn<typeof Dashboard> = () => <Dashboard />;

export const DashboardTemplate = Template.bind({});

DashboardTemplate.args = {};
