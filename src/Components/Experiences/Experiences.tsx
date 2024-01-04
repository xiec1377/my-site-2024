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
  Divider,
} from "@chakra-ui/react";
import data from "./ExperiencesData.json";
import ExperienceCard from "./ExperienceCard";
import { Header } from "../Header";
import { ScrollVisible } from "../../Static/ScrollVisible";

const Experiences: React.FC<{}> = () => {
  return (
    <Box id="experiences">
      <VStack>
        <Card bg="transparent" px="15%" py={30}>
          <Header title="Experiences" />
          <ScrollVisible>
            <CardBody>
              <Stack
                divider={<StackDivider borderColor="gray.600" />}
                spacing="10"
              >
                {data.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </Stack>
            </CardBody>
          </ScrollVisible>
        </Card>
      </VStack>
    </Box>
  );
};
export default Experiences;
