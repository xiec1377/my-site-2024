import React, { useState } from 'react'
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
import { FaGithub } from 'react-icons/fa'
// import { SiReplit } from 'react-icons/si'
// import { SiDevpost } from 'react-icons/si'
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
        src={isHovered ? src2 : src1}
        alt={alt}
        fallbackSrc="https://via.placeholder.com/150"
        objectFit="cover"
        // _hover={{ transform: 'scale(1.2)', filter: 'grayscale(1)' }}
      />
    </Box>
  )
}
export const ProjectsData = [
  {
    id: '1',
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
        src2={require('../../Assets/sales_pitch_generator.jpg')}
        alt="Sales pitch generator"
      />
    ),
    icon: (
      <HStack>
        <a href="https://github.com/WilliamUW/PitchPerfect">
          <FaGithub className="icon" />
        </a>
        <a href="https://devpost.com/software/pitcheasy">
          <Icon icon="simple-icons:devpost" className="icon" />
        </a>
      </HStack>
    ),
  },
  {
    id: '2',
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
        <a href="https://github.com/xiongjasmine/searchwithtech">
          <FaGithub className="icon" />
        </a>
        <a href="https://devpost.com/software/search-with-tech">
          <Icon icon="simple-icons:devpost" className="icon" />
        </a>
      </HStack>
    ),
  },
  {
    id: '3',
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
      <a href="https://github.com/xiec1377/image-generator">
        <FaGithub className="icon" />
      </a>
    ),
  },
  {
    id: '4',
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
      <a href="https://github.com/xiec1377/CS50X/tree/main/finance">
        <FaGithub className="icon" />
      </a>
    ),
  },
  {
    id: '5',
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
      <a href="https://replit.com/@xiec1377/Chess-cs246">
        <Icon icon="simple-icons:replit" className="icon" />
      </a>
    ),
  },
  {
    id: '6',
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
        <a href="https://github.com/xiongjasmine/northarcadia/tree/main/HTN2020">
          <FaGithub className="icon" />
        </a>
        <a href="https://devpost.com/software/north-arcadia">
          <Icon icon="simple-icons:devpost" className="icon" />
        </a>
      </HStack>
    ),
  },
]
