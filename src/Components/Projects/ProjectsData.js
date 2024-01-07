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
import { SiReplit } from 'react-icons/si'
import { SiDevpost } from 'react-icons/si'

export const ProjectsData = [
  {
    id: '1',
    name: 'Pitch Perfect',
    desc: (
      <Text className="point text" h="75%">
        Entrepreneurs, small business owners, sales representatives and
        job-seekers spend lots of time writing pitches to clients. This tool
        utilizes Co:here's Natural Language Processing API to generate an email
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
      <Image
        src={require('../../Assets/sales_pitch_generator.jpg')}
        alt="Sales pitch generator"
        fallbackSrc="https://via.placeholder.com/150"
        transition="ease-in-out 0.5s"
        w="50%"
        h="auto"
        // _hover={{ transform: 'scale(1.2)', filter: 'grayscale(1)' }}
      />
    ),
    icon: <FaGithub size={25} />,
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
      <Image
        src={require('../../Assets/search_with_tech.jpg')}
        alt="Search with tech"
        fallbackSrc="https://via.placeholder.com/150"
        transition="ease-in-out 0.5s"
        w="50%"
        h="auto"
        // _hover={{ transform: 'scale(1.2)', filter: 'grayscale(1)' }}
      />
    ),
    icon: (
      <HStack>
        <FaGithub size={25} />
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
      <Image
        src={require('../../Assets/image-generator-thumbnail.png')}
        alt="Sales pitch generator"
        fallbackSrc="https://via.placeholder.com/150"
        transition="ease-in-out 0.5s"
        w="50%"
        h="auto"
        // _hover={{ transform: 'scale(1.2)', filter: 'grayscale(1)' }}
      />
    ),
    icon: (
      <HStack>
        <FaGithub size={25} />
      </HStack>
    ),
  },
  {
    id: '4',
    name: 'Chess',
    desc: (
      <Text className="point text" h="75%">
        Classic chess game that allows users to play human-vs-human or
        human-vs-computer with easy, medium and hard difficulties.
      </Text>
    ),
    languages: ['C++'],
    img: (
      <Image
        src={require('../../Assets/chess-thumbnail.png')}
        alt="Chess"
        fallbackSrc="https://via.placeholder.com/150"
        transition="ease-in-out 0.5s"
        w="50%"
        h="auto"
        // _hover={{ transform: 'scale(1.2)', filter: 'grayscale(1)' }}
      />
    ),
    icon: (
      <HStack>
        <FaGithub size={25} />
      </HStack>
    ),
  },
  {
    id: '5',
    name: 'North Arcadia',
    desc: (
      <Text className="point text" h="75%">
        Arcade of mini games.
      </Text>
    ),
    languages: ['JavaScript', 'HTML/CSS', 'Bootstrap'],
    img: (
      <Image
        src={require('../../Assets/north_arcadia.jpg')}
        alt="Sales pitch generator"
        fallbackSrc="https://via.placeholder.com/150"
        transition="ease-in-out 0.5s"
        w="50%"
        h="auto"
        // _hover={{ transform: 'scale(1.2)', filter: 'grayscale(1)' }}
      />
    ),
    icon: (
      <HStack>
        <FaGithub size={25} />
      </HStack>
    ),
  },
]
