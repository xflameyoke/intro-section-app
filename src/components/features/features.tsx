import React from 'react';
import { FeaturesIcon, FeaturesStyled } from './features.styled';
import IconCalendar from '../../assets/images/icon-calendar.svg';
import IconPlanning from '../../assets/images/icon-planning.svg';
import IconReminders from '../../assets/images/icon-reminders.svg';
import IconTodo from '../../assets/images/icon-todo.svg';

const Features = () => (
  <FeaturesStyled>
    <ul>
      <li>
        <FeaturesIcon src={IconTodo} alt="IconMenu" />
        Todo List
      </li>
      <li>
        <FeaturesIcon src={IconCalendar} alt="IconPlanning" /> Calendar
      </li>
      <li>
        <FeaturesIcon src={IconReminders} alt="RemindersMenu" /> Reminders
      </li>
      <li>
        <FeaturesIcon src={IconPlanning} alt="IconPlanning" /> Planning
      </li>
    </ul>
  </FeaturesStyled>
);

export default Features;
