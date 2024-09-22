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
    id: 'marketingKitchen',
    position: 'Software Developer',
    company: 'Marketing Kitchen Inc.',
    date: 'Sept 2024 - Dec 2024',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          Improved reliability of internal IoT scanner system, enhancing the
          efficiency of tracking work hours by <strong>30%</strong>
        </ListItem>
        <ListItem className="text point">
          Owned the job order app that centralized the manual order process for
          internal project managers and external clients, utilizing React,
          Node.js, Express.js, Python, AWS Cognito and SES for user
          authentication
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: 'justworks',
    position: 'Software Engineer',
    company: 'Justworks',
    date: 'May 2024 - Aug 2024',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Engaged in the <strong>0 to 1</strong> product development of the
          Employer of Record service expansion across <strong>20+</strong>{' '}
          countries, streamlining payroll and administrative processes for SMBs
          hiring internationally
        </ListItem>
        <ListItem className="text point">
          Innovated R&D solution to display employee PII securely by creating a
          data serializer pattern in Ruby on Rails to redact sensitive PII based
          on OAuth scope permissions, safeguarding revenue by ensuring client
          data privacy
        </ListItem>
        <ListItem className="text point">
          Designed and applied database migration strategies to reduce database
          query rate by <strong>7%</strong> in the employee invitation flow,
          improving response speed for the user experience for{' '}
          <strong>12,000+</strong> users
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: 'ttc',
    position: 'Software Programmer',
    company: 'Toronto Transit Commission',
    date: 'May 2023 - Aug 2023',
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
    id: 'blueprint',
    position: 'Project Developer',
    company: 'UW Blueprint',
    date: 'May 2023 - Aug 2023',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Contributed to enhancing the functionality and experience for the
          portals of{' '}
          <a href="https://focusonnature.ca/">
            <strong style={{ textDecoration: 'underline' }}>
              Focus On Nature
            </strong>
          </a>{' '}
          aimed to promote youth summer camps, handling registrations of{' '}
          <strong>7,000+</strong> children per year
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
    id: 'empireLifeInsurance',
    position: 'Full-Stack Developer',
    company: 'Empire Life Insurance',
    date: 'Sept 2022 - Dec 2022',
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
    id: 'bankOfAmerica',
    position: 'Application Developer',
    company: 'Bank of America Merrill Lynch',
    date: 'Jan 2022 - Apr 2022',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Spearheaded the continuous enhancement of the financial data display
          feature with the strategic use of Angular
        </ListItem>
        <ListItem className="text point">
          Wrote <strong>30+</strong> unit tests using Jasmine to ensure BDD
          compliance for the tax billing and collateral pricing pages
        </ListItem>{' '}
        <ListItem className="text point">
          Handled and managed API request errors by implementing user-friendly
          error notification dialogs to enhance the debugging process and
          integrity of the transaction display
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: 'darwynn',
    position:
      'Software Tester and Business Analyst                                                                                                 ',
    company: 'Darwynn Ltd.',
    date: 'May 2021 - Aug 2021',
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
  // {
  //   id: 'absoluteIndoorAir',
  //   position: 'Web Developer and Administrator',
  //   company: 'Absolute Indoor Air',
  //   date: 'Aug 2020 - Sept 2020',
  //   points: (
  //     <UnorderedList className="unorderedList">
  //       <ListItem className="text point">
  //         {' '}
  //         Developed front-end web page using HTML, CSS, Velo API (live{' '}
  //         <a href="https://www.absoluteindoorair.com/">
  //           <strong style={{ textDecoration: 'underline' }}>here</strong>
  //         </a>
  //         )
  //       </ListItem>
  //       <ListItem className="text point">
  //         Oversaw the environment design, performed maintenance tasks, and
  //         ensured quality assurance of the web application
  //       </ListItem>
  //       <ListItem className="text point">
  //         Elevated customer satisfaction by optimizing the effectiveness of the
  //         UX/UI
  //       </ListItem>
  //     </UnorderedList>
  //   ),
  // },
]
