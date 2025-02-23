import { ListItem, UnorderedList, Image, Text, Link } from '@chakra-ui/react'
export const ExperienceData = [
  {
    id: 'marketingKitchen',
    position: 'Software Engineer Intern',
    company: 'Marketing Kitchen Inc.',
    link: 'https://www.marketingkitchen.ca/',
    date: 'Sept 2024 - Dec 2024',
    points: (
      <Text className="text">
        Improved reliability of internal IoT scanner system used to track
        employee work hours by implementing a load balancer and API failover
        mechanisms • Spearheaded a novel job order portal that streamlines the
        manual order process for internal project managers and external clients
        through real-time collaboration
      </Text>
    ),
    icon: (
      <Image
        src={require(`../../Assets/marketing-kitchen-icon.png`)}
        alt="Marketing Kitchen logo"
        fallbackSrc="https://via.placeholder.com/150"
        w="60px"
      />
    ),
  },
  {
    id: 'justworks',
    position: 'Software Engineer Intern',
    company: 'Justworks',
    link: 'https://www.justworks.com/',
    date: 'May 2024 - Aug 2024',
    points: (
      <Text className="text">
        Developed R&D solution to securely display employee PII by designing
        data serializer pattern
      </Text>
    ),
    icon: (
      <Image
        src={require(`../../Assets/justworks-logo.webp`)}
        alt="Justworks logo"
        fallbackSrc="https://via.placeholder.com/150"
        w="60px"
        borderRadius="full"
        objectFit="cover"
        objectPosition="top"
      />
    ),
  },
  {
    id: 'ttc',
    position: 'Software Engineer Intern',
    company: 'Toronto Transit Commission',
    link: 'https://www.ttc.ca/',
    date: 'May 2023 - Aug 2023',
    points: (
      <Text className="text">
        Developed script to automate Windows OS and security updates, installing
        required dependencies for 5,000+ machines
      </Text>
    ),
    icon: (
      <Image
        src={require(`../../Assets/ttc-logo.png`)}
        alt="Toronto Transit Commission logo"
        fallbackSrc="https://via.placeholder.com/150"
        w="60px"
        borderRadius="full"
        objectFit="cover"
        objectPosition="top"
      />
    ),
  },
  {
    id: 'blueprint',
    position: 'Project Developer',
    company: 'UW Blueprint',
    link: 'https://uwblueprint.org/',
    date: 'May 2023 - Aug 2023',
    points: (
      <Text className="text">
        Built registration and refund flows for camper and admin users for local
        non-profit youth summer camps portal{' '}
        <Link href="https://focusonnature.ca/" isExternal>
          Focus on Nature
        </Link>
      </Text>
    ),
    icon: (
      <Image
        src={require(`../../Assets/blueprint-logo.png`)}
        alt="Blueprint logo"
        fallbackSrc="https://via.placeholder.com/150"
        w="60px"
        borderRadius="full"
        objectFit="cover"
        objectPosition="top"
      />
    ),
  },
  {
    id: 'empireLifeInsurance',
    position: 'Full-Stack Engineer Intern',
    company: 'Empire Life Insurance',
    link: 'https://www.empire.ca/',
    date: 'Sept 2022 - Dec 2022',
    points: (
      <Text className="text">
        Led a cross-functional team in the design and development of a new
        glossary feature in the customer portal • Developed Registered
        Retirement Savings Plan page with Django and React used by advisors to
        manage retirement savings
      </Text>
    ),
    icon: (
      <Image
        src={require(`../../Assets/empirelife-logo.png`)}
        alt="Empire Life logo"
        fallbackSrc="https://via.placeholder.com/150"
        w="60px"
      />
    ),
  },
  {
    id: 'bankOfAmerica',
    position: 'Application Developer Intern',
    company: 'Bank of America Securities Inc.',
    link: 'https://business.bofa.com/content/boaml/en_us/home.html',
    date: 'Jan 2022 - Apr 2022',
    points: (
      <Text className="text">
        Developed the tax billing and collateral pricing sections of the
        transaction dashboard used by financial advisors for client trade
        management and monitoring, using Node.js and Angular • Enhanced unit
        test coverage for filtering and CRUD functionality in transaction
        dashboard
      </Text>

      // <ListItem className="text point">
      //   Handled and managed API request errors by implementing user-friendly
      //   error notification dialogs to enhance the debugging process and
      //   integrity of the transaction display
      // </ListItem>
    ),
    icon: (
      <Image
        src={require(`../../Assets/bofa_logo.png`)}
        alt="Bank of America logo"
        fallbackSrc="https://via.placeholder.com/150"
        w="60px"
        mt="10px"
      />
    ),
  },
  {
    id: 'darwynn',
    position:
      'Software Tester Intern                                                                                               ',
    company: 'Darwynn Ltd.',
    link: 'https://www.darwynnfulfillment.com/',
    date: 'May 2021 - Aug 2021',
    points: (
      <Text className="text ">
        Leveraged Figma, HTML and CSS to design and optimize the user experience
        of the e-commerce platform • Conducted 700+ regression and functional
        tests throughout various iterations of the Software Development Life
        Cycle
      </Text>
    ),
    icon: (
      <Image
        src={require(`../../Assets/darwynn-logo.jpg`)}
        alt="Darwynn Ltd logo"
        fallbackSrc="https://via.placeholder.com/150"
        w="60px"
        borderRadius="full"
        objectFit="cover"
        objectPosition="top"
      />
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
