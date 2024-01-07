import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Stack,
  StackDivider,
  Center,
  Square,
  Circle,
  Spacer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
// import SalesPitch from './sales_pitch_generator.jpg'

export const ExperienceData = [
  {
    id: '1',
    position: 'End User Programmer',
    company: 'Toronto Transit Commission',
    date: 'May 2023 - August 2023',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Individually implemented, and tested a PowerShell script, leveraging
          the WSUS API library, to optimize Windows OS updates efficiency by{' '}
          <strong>∼15%</strong>, to be rolled out to <strong>5,000+</strong>{' '}
          company machines
        </ListItem>
        <ListItem className="text point">
          {' '}
          Proficiently deployed standardized configurations and software to{' '}
          <strong>1,200+</strong> company-owned machines allocated to employees
          and high-ranking executives{' '}
        </ListItem>
        <ListItem className="text point">
          {' '}
          Documented in-depth business requirements, functional specifications,
          and project-related documentation to user groups
        </ListItem>
      </UnorderedList>
    ),
  },

  {
    id: '2',
    position: 'Project Developer',
    company: 'Focus On Nature',
    date: 'May 2023 - August 2023',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point"> ITEM</ListItem>
        <ListItem className="text point"> ITEM</ListItem>
        <ListItem className="text point"> ITEM</ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '3',
    position: 'Full-Stack Developer',
    company: 'Empire Life Insurance',
    date: 'September 2022 - December 2022',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Led a cross-functional team in the successful design, delivery and
          deployment of the Glossary feature, enhancing the learning experience
          for <strong>1,500+</strong> weekly users
        </ListItem>
        <ListItem className="text point">
          {' '}
          Updated and maintained company portal, servicing a weekly user base of{' '}
          <strong>4,000+</strong> individuals, utilizing React.js and Django
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '4',
    position: 'Application Developer',
    company: 'Bank of America Merrill Lynch',
    date: 'January 2022 - April 2022',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Managed the continuous enhancement of the application product that
          displays clients’ financial data using Angular.js
        </ListItem>
        <ListItem className="text point">
          {' '}
          Integrated error messages and dialog boxes addressing console errors
          encountered when displaying data with the API
        </ListItem>
        <ListIcon className="text point">
          Conducted automated unit testing using Jasmine.js and the Karma test
          runner, executing comprehensive test suites and specifications
        </ListIcon>
      </UnorderedList>
    ),
  },
  {
    id: '5',
    position:
      'Software Tester and Business Analyst                                                                                                 ',
    company: 'Darwynn Ltd. ',
    date: 'MAY 2021 - AUGUST 2021',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Leveraged Figma, HTML and CSS to design and optimize the user
          experience of the application product, resulting in{' '}
          <strong>70%</strong> reduction in test case count
        </ListItem>
        <ListItem className="text point">
          {' '}
          Demonstrated meticulous attention to product quality by conducting{' '}
          <strong>700+</strong> regression and functional tests throughout
          various iterations of the Software Development Life Cycle
        </ListItem>
      </UnorderedList>
    ),
  },
]
