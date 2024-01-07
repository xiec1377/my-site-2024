import { Button, extendTheme, StackDivider, Text } from '@chakra-ui/react'
import React, { useRef, useEffect } from 'react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { motion, useScroll, useInView, useAnimation } from 'framer-motion'

interface Props {
  text: string;
}

export const Bold = ({text} : Props) => {
  return (
    <Text as="b" color="rose.700">
        {text}
    </Text>
  );
};

