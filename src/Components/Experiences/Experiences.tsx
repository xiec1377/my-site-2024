import React from "react";
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import data from "./ExperiencesData.json";
import ExperienceCard from "./ExperienceCard";

const Experiences: React.FC<{}> = () => {
  return (
    <Box id="experiences">
        <VStack>
          <Heading as="h2" size="2xl" color="rose.600">
            Experiences
          </Heading>
          <Card bg="transparent" px={250} py={30}>
            <CardBody>
              <Stack divider={<StackDivider borderColor='gray.600' />} spacing="10">
                {data.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </Stack>
            </CardBody>
          </Card>
        </VStack>
    </Box>
  );
};
export default Experiences;
