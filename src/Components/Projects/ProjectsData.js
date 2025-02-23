import { useState } from 'react'
import { Box, Text, Image, HStack, Tooltip, Link } from '@chakra-ui/react'
import {
  FaFigma,
  FaGithub,
  FaGitlab,
  FaMediumM,
  FaYoutube,
} from 'react-icons/fa'
import { Icon } from '@iconify/react'

const HoverImage = ({ src1, src2, alt }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Box
      position="relative"
      w="50%"
      h="auto"
      transition="ease-in-out 0.5s"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? (src2 ? src2 : src1) : src1}
        alt={alt}
        fallbackSrc="https://via.placeholder.com/150"
        position={alt === 'PhotoSpotter' ? 'absolute' : ''}
        // top="0"
        // left="0"
        width="100%"
        height="100%"
        objectFit={alt === 'PhotoSpotter' ? 'contain' : ''}
        // objectFit="cover"
      />
    </Box>
  )
}
export const ProjectsData = [
  {
    id: '1',
    name: 'PhotoSpotter',
    desc: (
      <Text className="point text" h="75%">
        Community photography-sharing Android app, enabling users to discover
        and share photography locations with others by uploading photos and
        placing pins on the map.
      </Text>
    ),
    languages: [
      'Kotlin',
      'PostgreSQL',
      'Google Maps API',
      'Firebase',
      'Google Cloud Platform',
    ],
    img: (
      <HoverImage
        src1={require('../../Assets/photo-spotter-thumbnail.png')}
        src2={require('../../Assets/photo-spotter-demo.gif')}
        alt="PhotoSpotter"
      />
    ),
    icon: (
      <HStack>
        <Tooltip
          label="Private repository"
          aria-label="Private repository"
          placement="top"
        >
          <Link href="https://git.uwaterloo.ca/hy5chen/team-101" isExternal>
            <FaGitlab className="icon" />
          </Link>
        </Tooltip>
      </HStack>
    ),
  },
  {
    id: '2',
    name: 'Pitch Perfect',
    desc: (
      <Text className="point text" h="75%">
        Entrepreneurs, small business owners, sales representatives and
        job-seekers spend lots of time writing pitches to clients. This tool
        utilizes Cohere's Natural Language Processing API to generate an email
        pitch.
      </Text>
    ),
    languages: [
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'Bootstrap',
      'Cohere NLP API',
    ],
    img: (
      <HoverImage
        src1={require('../../Assets/sales_pitch_generator.jpg')}
        src2={require('../../Assets/sales-pitch-demo.png')}
        alt="Sales pitch generator"
      />
    ),
    icon: (
      <HStack>
        <Link href="https://github.com/WilliamUW/PitchPerfect" isExternal>
          <FaGithub className="icon" />
        </Link>
        <Link href="https://devpost.com/software/pitcheasy" isExternal>
          <Icon icon="simple-icons:devpost" className="icon" />
        </Link>
      </HStack>
    ),
  },
  {
    id: '3',
    name: 'Search with Tech',
    desc: (
      <Text className="point text" h="75%">
        Built to curate a list of open job positions for job-seekers from
        multiple job search engines using web scraping.
      </Text>
    ),
    languages: ['Python', 'Flask', 'HTML/CSS', 'BeautifulSoup'],
    img: (
      <HoverImage
        src1={require('../../Assets/search_with_tech.jpg')}
        src2={require('../../Assets/search-with-tech-demo.gif')}
        alt="Search with tech"
      />
    ),
    icon: (
      <HStack>
        <Link href="https://github.com/xiongjasmine/searchwithtech" isExternal>
          <FaGithub className="icon" />
        </Link>
        <Link href="https://devpost.com/software/search-with-tech" isExternal>
          <Icon icon="simple-icons:devpost" className="icon" />
        </Link>
      </HStack>
    ),
  },

  {
    id: '6',
    name: 'Image Generator',
    desc: (
      <Text className="point text" h="75%">
        Just a simple image generator based on user's prompt using OpenAI.
      </Text>
    ),
    languages: ['JavaScript', 'ReactJS', 'NodeJS', 'Tailwind', 'OpenAI API'],
    img: (
      <HoverImage
        src1={require('../../Assets/image-generator-thumbnail.png')}
        src2={require('../../Assets/image-generator-demo.gif')}
        alt="Image generator"
      />
    ),
    icon: (
      <Link href="https://github.com/xiec1377/image-generator" isExternal>
        <FaGithub className="icon" />
      </Link>
    ),
  },
  {
    id: '6',
    name: 'Stock Trader',
    desc: (
      <Text className="point text" h="75%">
        Simulates real-time stock trading including buying and selling
        (displayed in transaction history) for CS50X's Introduction to Computer
        Science course.
      </Text>
    ),
    languages: ['Python', 'Flask', 'SQL', 'HTML/CSS'],
    img: (
      <HoverImage
        src1={require('../../Assets/stock-trader-thumbnail.png')}
        src2={require('../../Assets/stock-trader-demo.gif')}
        alt="Stock trader"
      />
    ),
    icon: (
      <Link
        href="https://github.com/xiec1377/CS50X/tree/main/finance"
        isExternal
      >
        <FaGithub className="icon" />
      </Link>
    ),
  },
  {
    id: '7',
    name: 'Chess',
    desc: (
      <Text className="point text" h="75%">
        Classic chess game that allows users to play human-vs-human or
        human-vs-computer with easy, medium and hard difficulties.
      </Text>
    ),
    languages: ['C++'],
    img: (
      <HoverImage
        src1={require('../../Assets/chess-thumbnail.png')}
        src2={require('../../Assets/chess-demo.gif')}
        alt="Chess"
      />
    ),
    icon: (
      <Link href="https://replit.com/@xiec1377/Chess-cs246" isExternal>
        <Icon icon="simple-icons:replit" className="icon" />
      </Link>
    ),
  },
  {
    id: '8',
    name: 'North Arcadia',
    desc: (
      <Text className="point text" h="75%">
        Arcade of mini games (Flappy Bird, Pong, Snake).
      </Text>
    ),
    languages: ['JavaScript', 'HTML/CSS', 'Bootstrap'],
    img: (
      <HoverImage
        src1={require('../../Assets/north_arcadia.jpg')}
        src2={require('../../Assets/north-arcadia-demo.gif')}
        alt="North Arcadia"
      />
    ),
    icon: (
      <HStack>
        <Link
          href="https://github.com/xiongjasmine/northarcadia/tree/main/HTN2020"
          isExternal
        >
          <FaGithub className="icon" />
        </Link>
        <Link href="https://devpost.com/software/north-arcadia" isExternal>
          <Icon icon="simple-icons:devpost" className="icon" />
        </Link>
      </HStack>
    ),
  },
  {
    id: '4',
    name: 'PlanIQ',
    desc: (
      <Text className="point text" h="75%">
        Executed design process to build a hifi prototype of gamified smart
        calendar mobile application. View our case study{' '}
        <Link
          href="https://youtu.be/lYtSLOtQ_pQ?zhualex99=0jkhH_eXYHubHzLr"
          isExternal
        >
          <strong style={{ textDecoration: 'underline' }}>here</strong>
        </Link>
        .
      </Text>
    ),
    languages: ['Figma'],
    img: (
      <HoverImage
        src1={require('../../Assets/planiq.png')}
        src2={require('../../Assets/planiq.png')}
        alt="PlanIQ"
      />
    ),
    icon: (
      <HStack>
        <Link
          href="https://medium.com/@zhualex99/ai-powered-productivity-with-planiq-d783ce630f6a"
          isExternal
        >
          <FaMediumM className="icon" />
        </Link>
        <Link
          href="https://www.figma.com/proto/zI0HNpH7LausOZf52f3aPT/Broke-%26-Hungry-High-Fidelity-Prototype?node-id=702-2488&t=EDzpAioupOhPkQVt-1&scaling=scale-down&content-scaling=fixed&page-id=157%3A622&starting-point-node-id=702%3A2488&show-proto-sidebar=1"
          isExternal
        >
          <FaFigma className="icon" />
        </Link>
      </HStack>
    ),
  },
  {
    id: '5',
    name: 'Brewbot',
    desc: (
      <Text className="point text" h="75%">
        Hifi prototype of utilizing chatbots to help users combat menu anxiety
        at coffee shops. Watch our case study{' '}
        <Link
          href="https://youtu.be/lYtSLOtQ_pQ?si=0jkhH_eXYHubHzLr"
          isExternal
        >
          <strong style={{ textDecoration: 'underline' }}>here</strong>
        </Link>
        .
      </Text>
    ),
    languages: ['Figma'],
    img: (
      <HoverImage
        src1={require('../../Assets/brewbot.png')}
        src2={require('../../Assets/brewbot.png')}
        alt="Brewbot"
      />
    ),
    icon: (
      <HStack>
        <Link
          href="https://youtu.be/lYtSLOtQ_pQ?si=0jkhH_eXYHubHzLr"
          isExternal
        >
          <FaYoutube className="icon" />
        </Link>
        <Link
          href="https://www.figma.com/proto/dpSacAlqBoQ9TiE7MmvcAS/Final-Prototype?node-id=870-1532&t=O8gNH9Sw0ajoWT4r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=933%3A2807"
          isExternal
        >
          <FaFigma className="icon" />
        </Link>
      </HStack>
    ),
  },
]
