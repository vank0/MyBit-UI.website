import {
  Alert,
  Button,
  Card,
  ConnectionStatus,
  Dropdown,
  Filter,
  Footer,
  Header,
  Heading,
  Icon,
  Input,
  Menu,
  NavBar,
  Pagination,
  Spin,
  StatCard,
  Stats,
  Switch,
  Tooltip,
} from './documentedComponents';

import MoreComponents from './more_components';

const Components = [...MoreComponents,
  { name: 'Button', details: Button, category: 'Forms' },
  { name: 'Alert', details: Alert, category: 'Feedback' },
  { name: 'Card', details: Card, category: 'Layout' },
  { name: 'ConnectionStatus', details: ConnectionStatus, category: 'Feedback' },
  { name: 'Dropdown', details: Dropdown, category: 'Navigation' },
  { name: 'Filter', details: Filter },
  { name: 'Footer', details: Footer, category: 'Layout' },
  { name: 'Header', details: Header, category: 'Layout' },
  { name: 'Heading', details: Heading },
  { name: 'Icon', details: Icon },
  { name: 'Input', details: Input, category: 'Forms' },
  { name: 'Menu', details: Menu, category: 'Navigation' },
  { name: 'Navigation Bar', details: NavBar, category: 'Navigation' },
  { name: 'Pagination', details: Pagination, category: 'Navigation' },
  { name: 'Spin', details: Spin, category: 'Feedback' },
  { name: 'StatCard', details: StatCard, category: 'Layout' },
  { name: 'Stats', details: Stats, category: 'Layout' },
  { name: 'Switch', details: Switch, category: 'Forms' },
  { name: 'Tooltip', details: Tooltip, category: 'Feedback' },
];

export default Components;