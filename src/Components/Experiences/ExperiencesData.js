import { ListItem, UnorderedList } from '@chakra-ui/react'

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
    id: 'blueprint',
    position: 'Project Developer',
    company: 'UW Blueprint',
    date: 'May 2023 - Aug 2023',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          Built registration and refund flows of camper and admin users for
          local non-profit{' '}
          <a href="https://focusonnature.ca/">
            <strong style={{ textDecoration: 'underline' }}>
              Focus On Nature
            </strong>
          </a>{' '}
          aimed to promote youth summer camps, handling registrations of{' '}
          <strong>7,000+</strong> children per year
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
    id: 'empireLifeInsurance',
    position: 'Full-Stack Developer',
    company: 'Empire Life Insurance',
    date: 'Sept 2022 - Dec 2022',
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
    id: 'bankOfAmerica',
    position: 'Application Developer',
    company: 'Bank of America Merrill Lynch',
    date: 'Jan 2022 - Apr 2022',
    points: (
      <UnorderedList className="unorderedList">
        <ListItem className="text point">
          Developed the tax billing and collateral pricing sections of the
          transaction dashboard used by financial advisors for client trade
          management and monitoring, using Node.js and Angular
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
