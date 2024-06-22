import { ListItem, UnorderedList } from '@chakra-ui/react'

export const ExperienceData = [
  {
    id: '1',
    position: 'Software Engineer',
    company: 'Justworks',
    date: 'May 2024 - Present',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Played an instrumental role in the 0 to 1 product development of the
          Employer of Record service leveraging React and Ruby on Rails,
          expediting payroll and administrative tasks for companies in{' '}
          <strong>20</strong> countries, introducing <strong>20</strong> new
          revenue streams
        </ListItem>
        <ListItem className="text point">
          Designed and implemented database migration strategies to reduce
          database query rate by <strong>7%</strong> in the employee invitation
          flow, improving response speed for the user experience for{' '}
          <strong>12,000+</strong> users
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '2',
    position: 'Software Programmer',
    company: 'Toronto Transit Commission',
    date: 'May 2023 - August 2023',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Reduced downtime by <strong>20%</strong> through creating a PowerShell
          script to automate the installation of Windows OS and security
          updates, rolled out to <strong>5,000+</strong> production machines
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
    id: '3',
    position: 'Project Developer',
    company: 'UW Blueprint',
    date: 'May 2023 - August 2023',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          Built registration and refund flows of camper and admin users for
          local non-profit{' '}
          <a href="https://focusonnature.ca/">
            <strong>Focus On Nature</strong>
          </a>{' '}
          aimed to promote youth summer camps, handling registrations of{' '}
          <strong>7,000+</strong>
          children per year'
        </ListItem>
        <ListItem className="text point">
          Built robust code to gracefully handle invalid refund requests,
          coupons, and discounts in the refund flow using MERN tech stack and
          Stripe API to ensure seamless payment processing for customers
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '4',
    position: 'Full-Stack Developer',
    company: 'Empire Life Insurance',
    date: 'September 2022 - December 2022',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          Led a cross-functional team in the design and development of a new
          Glossary feature in both English and French in the customer portal to
          explain complex insurance terminology for <strong>1,500+</strong>{' '}
          weekly customers
        </ListItem>
        <ListItem className="text point">
          Created Registered Retirement Savings Plan page with Django and React
          used by <strong>2,500+</strong> weekly advisors to manage retirement
          savings
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '5',
    position: 'Application Developer',
    company: 'Bank of America Merrill Lynch',
    date: 'January 2022 - April 2022',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          Developed the tax billing and collateral pricing sections of the
          transaction dashboard used by financial advisors for client trade
          management and monitoring, using Node.js and Angular
        </ListItem>
        <ListItem className="text point">
          Wrote <strong>30+</strong> unit tests using Jasmine to ensure BDD compliance for the
          tax billing and collateral pricing pages
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
    id: '6',
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
    id: '7',
    position: 'Web Developer and Administrator',
    company: 'Absolute Indoor Air',
    date: 'August 2020 - September 2020',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          {' '}
          Developed front-end web page using HTML, CSS, Velo API (live{' '}
          <a href="https://www.absoluteindoorair.com/">
            <strong>here</strong>
          </a>
          )
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
