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
    company: 'UW Blueprint',
    date: 'May 2023 - August 2023',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Contributed to enhancing the functionality and experience for the
          portals of{' '}
          <a href="https://focusonnature.ca/">
            <strong>Focus On Nature</strong>
          </a>
          , a local non-profit aimed to cultivate deeper connection between
          youth and nature
        </ListItem>
        <ListItem className="text point">
          {' '}
          Utilized MERN tech stack and Docker to streamline and improve the
          registration and refund experience for both camp participants and
          administrators
        </ListItem>
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
          Designed company assets, created customer journey maps, user personas,
          low and high-fidelity wireframes for the Glossary feature
        </ListItem>
        <ListItem className="text point">
          {' '}
          Updated and maintained company portal, servicing a weekly user base of{' '}
          <strong>4,000+</strong> individuals, utilizing React, Django and
          Docker
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
          Spearheaded the continuous enhancement of the financial data display
          feature with the strategic use of Angular
        </ListItem>
        <ListItem className="text point">
          Ensured the integrity of the application by implementing comprehensive
          automated test suites using Jasmine and the Karma test runner and
          enhancing API error-handing
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '5',
    position:
      'Software Tester and Business Analyst                                                                                                 ',
    company: 'Darwynn Ltd.',
    date: 'May 2021 - August 2021',
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
  {
    id: '6',
    position: 'Web Developer and Administrator',
    company: 'Absolute Indoor Air',
    date: 'August 2020 - September 2020',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Developed front-end web page using HTML, CSS, Velo API (live{' '}
          <a href="https://www.absoluteindoorair.com/"><strong>here</strong></a>)
        </ListItem>
        <ListItem className="text point">
          Oversaw the environment design, performed maintenance tasks, and
          ensured quality assurance of the web application
        </ListItem>
        <ListItem className="text point">
          Elevated customer satisfaction by optimizing the effectiveness of the
          UX/UI
        </ListItem>
      </UnorderedList>
    ),
  },
]
